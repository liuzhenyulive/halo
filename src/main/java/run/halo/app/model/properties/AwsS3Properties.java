package run.halo.app.model.properties;

import run.halo.app.model.support.HaloConst;

/**
 * aws s3 properties.
 *
 * @author MyFaith
 * @author ryanwang
 * @date 2019-04-04
 */
public enum AwsS3Properties implements PropertyEnum {


    AWS_S3_PROTOCOL("aws_s3_domain_protocol", String.class, HaloConst.PROTOCOL_HTTPS),

    AWS_S3_REGION("aws_s3_region", String.class, "us-west-2"),


    AWS_S3_BUCKET_NAME("aws_s3_bucket_name", String.class, ""),


    AWS_S3_ACCESS_KEY("aws_s3_access_key", String.class, ""),


    AWS_S3_ACCESS_SECRET("aws_s3_access_secret", String.class, ""),

    AWS_S3_PREFIX("aws_s3_prefix", String.class, ""),

    AWS_S3_DOMAIN("aws_s3_domain", String.class, "");

    private final String value;

    private final Class<?> type;

    private final String defaultValue;

    AwsS3Properties(String value, Class<?> type, String defaultValue) {
        this.defaultValue = defaultValue;
        if (!PropertyEnum.isSupportedType(type)) {
            throw new IllegalArgumentException("Unsupported blog property type: " + type);
        }

        this.value = value;
        this.type = type;
    }

    @Override
    public Class<?> getType() {
        return type;
    }

    @Override
    public String defaultValue() {
        return defaultValue;
    }

    @Override
    public String getValue() {
        return value;
    }
}
