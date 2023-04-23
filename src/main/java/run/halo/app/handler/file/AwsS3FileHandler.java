package run.halo.app.handler.file;

import static run.halo.app.model.support.HaloConst.URL_SEPARATOR;

import com.aliyun.oss.OSS;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.model.DeleteObjectsRequest;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.PutObjectResult;
import java.net.URLConnection;
import java.util.Objects;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;
import org.springframework.util.Assert;
import org.springframework.web.multipart.MultipartFile;
import run.halo.app.exception.FileOperationException;
import run.halo.app.model.enums.AttachmentType;
import run.halo.app.model.properties.AliOssProperties;
import run.halo.app.model.properties.AwsS3Properties;
import run.halo.app.model.support.HaloConst;
import run.halo.app.model.support.UploadResult;
import run.halo.app.repository.AttachmentRepository;
import run.halo.app.service.OptionService;
import run.halo.app.utils.ImageUtils;

/**
 * Ali oss file handler.
 *
 * @author MyFaith
 * @author ryanwang
 * @author guqing
 * @date 2023-04-23
 */
@Slf4j
@Component
public class AwsS3FileHandler implements FileHandler {

    private final OptionService optionService;
    private final AttachmentRepository attachmentRepository;

    public AwsS3FileHandler(OptionService optionService,
        AttachmentRepository attachmentRepository) {
        this.optionService = optionService;
        this.attachmentRepository = attachmentRepository;
    }

    @Override
    public @NonNull UploadResult upload(@NonNull MultipartFile file) {
        Assert.notNull(file, "Multipart file must not be null");

        String protocol =
            optionService.getByPropertyOrDefault(AwsS3Properties.AWS_S3_PROTOCOL, String.class,
                HaloConst.PROTOCOL_HTTPS);
        String region =
            optionService.getByPropertyOrDefault(AwsS3Properties.AWS_S3_REGION, String.class,
                "us-west-2");
        String domain =
            optionService.getByPropertyOfNonNull(AwsS3Properties.AWS_S3_DOMAIN).toString();
        String accessKey =
            optionService.getByPropertyOfNonNull(AwsS3Properties.AWS_S3_ACCESS_KEY).toString();
        String accessSecret =
            optionService.getByPropertyOfNonNull(AwsS3Properties.AWS_S3_ACCESS_SECRET).toString();
        String bucketName =
            optionService.getByPropertyOfNonNull(AwsS3Properties.AWS_S3_BUCKET_NAME).toString();
        String prefix =
            optionService.getByPropertyOfNonNull(AwsS3Properties.AWS_S3_PREFIX).toString();

        BasicAWSCredentials credentials = new BasicAWSCredentials(accessKey, accessSecret);
        AmazonS3 s3Client = AmazonS3ClientBuilder.standard()
            .withRegion(region)
            .withCredentials(new AWSStaticCredentialsProvider(credentials))
            .build();


        StringBuilder basePath = new StringBuilder(protocol);
        basePath.append(domain)
            .append(URL_SEPARATOR);


        try {
            FilePathDescriptor uploadFilePath = new FilePathDescriptor.Builder()
                .setBasePath(basePath.toString())
                .setSubPath(prefix)
                .setAutomaticRename(true)
                .setRenamePredicate(relativePath ->
                    attachmentRepository
                        .countByFileKeyAndType(relativePath, AttachmentType.AWSS3) > 0)
                .setOriginalName(file.getOriginalFilename())
                .build();

            log.info(basePath.toString());

            String contentType = URLConnection.guessContentTypeFromName(file.getOriginalFilename());
            ObjectMetadata metadata=new ObjectMetadata();
            metadata.setContentType(contentType);
            PutObjectRequest request = new PutObjectRequest(bucketName,
                uploadFilePath.getRelativePath(), file.getInputStream(),metadata);

            // Upload
            PutObjectResult putObjectResult = s3Client.putObject(request);

            if (putObjectResult == null) {
                throw new FileOperationException(
                    "上传附件 " + file.getOriginalFilename() + " 到S3失败 ");
            }

            // Response result
            final UploadResult uploadResult = new UploadResult();
            uploadResult.setFilename(uploadFilePath.getName());
            String fullPath = uploadFilePath.getFullPath();
            uploadResult
                .setFilePath(fullPath);
            uploadResult.setKey(uploadFilePath.getRelativePath());
            uploadResult
                .setMediaType(MediaType.valueOf(Objects.requireNonNull(file.getContentType())));
            uploadResult.setSuffix(uploadFilePath.getExtension());
            uploadResult.setSize(file.getSize());

            handleImageMetadata(file, uploadResult, () -> {
                if (ImageUtils.EXTENSION_ICO.equals(uploadFilePath.getExtension())) {
                    return fullPath;
                } else {
                    return fullPath;
                }
            });

            log.info("Uploaded file: [{}] successfully", file.getOriginalFilename());
            return uploadResult;
        } catch (Exception e) {
            throw new FileOperationException(
                "上传附件 " + file.getOriginalFilename() + " 到AWS失败 ", e)
                .setErrorData(file.getOriginalFilename());
        } finally {
            s3Client.shutdown();
        }
    }

    @Override
    public void delete(@NonNull String key) {
        Assert.notNull(key, "File key must not be blank");


        String region =
            optionService.getByPropertyOrDefault(AwsS3Properties.AWS_S3_REGION, String.class,
                "us-west-2");
        String accessKey =
            optionService.getByPropertyOfNonNull(AwsS3Properties.AWS_S3_ACCESS_KEY).toString();
        String accessSecret =
            optionService.getByPropertyOfNonNull(AwsS3Properties.AWS_S3_ACCESS_SECRET).toString();
        String bucketName =
            optionService.getByPropertyOfNonNull(AwsS3Properties.AWS_S3_BUCKET_NAME).toString();

        BasicAWSCredentials credentials = new BasicAWSCredentials(accessKey, accessSecret);
        AmazonS3 s3Client = AmazonS3ClientBuilder.standard()
            .withRegion(region)
            .withCredentials(new AWSStaticCredentialsProvider(credentials))
            .build();

        try {
            s3Client.deleteObject(new DeleteObjectRequest(bucketName, key));
        } catch (Exception e) {
            throw new FileOperationException("附件 " + key + " 从AWS删除失败", e);
        } finally {
            s3Client.shutdown();
        }
    }

    @Override
    public AttachmentType getAttachmentType() {
        return AttachmentType.AWSS3;
    }

}
