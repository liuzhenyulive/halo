"use strict";(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[855],{20855:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page-view",[a("a-row",{attrs:{gutter:12}},[e.options.developer_mode?a("a-col",{staticClass:"pb-3",attrs:{lg:6,md:12,sm:24,xl:6,xs:24}},[a("a-card",{attrs:{bodyStyle:{padding:"16px"},bordered:!1}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("a-icon",{attrs:{type:"experiment"}}),e._v(" 开发者选项 ")],1),a("p",{staticStyle:{"min-height":"50px"}},[e._v("点击进入开发者选项页面")]),a("a-button",{staticClass:"float-right",attrs:{type:"primary"},on:{click:function(t){return e.handleToDeveloperOptions()}}},[e._v("进入")])],1)],1):e._e(),a("a-col",{staticClass:"mb-3",attrs:{lg:6,md:12,sm:24,xl:6,xs:24}},[a("a-card",{attrs:{bodyStyle:{padding:"16px"},bordered:!1}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("a-icon",{attrs:{type:"hdd"}}),e._v(" 博客备份 ")],1),a("p",{staticStyle:{"min-height":"50px"}},[e._v("支持备份全站数据和数据导出，支持下载到本地")]),a("a-dropdown",{staticClass:"float-right"},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:function(t){e.backupWorkDirDrawerVisible=!0}}},[e._v(" 整站备份 ")]),a("a-menu-item",{key:"2",on:{click:function(t){e.exportDataDrawerVisible=!0}}},[e._v(" 数据导出 ")]),a("a-menu-item",{key:"3",on:{click:function(t){e.exportMarkdownDrawerVisible=!0}}},[e._v(" 导出文章为 Markdown 文档 ")])],1),a("a-button",{staticClass:"ml-2"},[e._v(" 备份 "),a("a-icon",{attrs:{type:"down"}})],1)],1)],1)],1),a("a-col",{staticClass:"pb-3",attrs:{lg:6,md:12,sm:24,xl:6,xs:24}},[a("a-card",{attrs:{bodyStyle:{padding:"16px"},bordered:!1}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("a-icon",{attrs:{type:"file-markdown"}}),e._v(" Markdown 文章导入 ")],1),a("p",{staticStyle:{"min-height":"50px"}},[e._v("支持 Hexo/Jekyll 文章导入并解析元数据")]),a("a-button",{staticClass:"float-right",attrs:{type:"primary"},on:{click:function(t){e.markdownUpload=!0}}},[e._v("导入")])],1)],1)],1),a("a-modal",{attrs:{afterClose:e.onUploadClose,footer:null,destroyOnClose:"",title:"Markdown 文章导入"},model:{value:e.markdownUpload,callback:function(t){e.markdownUpload=t},expression:"markdownUpload"}},[a("FilePondUpload",{ref:"upload",attrs:{uploadHandler:e.uploadHandler,label:"拖拽或点击选择 Markdown 文件到此处",name:"file"}})],1),a("BackupWorkDirDrawer",{model:{value:e.backupWorkDirDrawerVisible,callback:function(t){e.backupWorkDirDrawerVisible=t},expression:"backupWorkDirDrawerVisible"}}),a("ExportDataDrawer",{model:{value:e.exportDataDrawerVisible,callback:function(t){e.exportDataDrawerVisible=t},expression:"exportDataDrawerVisible"}}),a("ExportMarkdownDrawer",{model:{value:e.exportMarkdownDrawerVisible,callback:function(t){e.exportMarkdownDrawerVisible=t},expression:"exportMarkdownDrawerVisible"}})],1)},o=[],n=a(63404),l=(a(21082),a(66632)),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{afterVisibleChange:e.handleAfterVisibleChanged,visible:e.visible,width:e.isMobile()?"100%":"480",closable:"",destroyOnClose:"",title:"整站备份"},on:{close:e.onClose}},[a("a-row",{attrs:{align:"middle",type:"flex"}},[a("a-col",{attrs:{span:24}},[a("a-alert",{attrs:{banner:"",closable:"",message:"注意：备份后生成的压缩文件存储在临时文件中，重启服务器会造成备份文件的丢失，所以请尽快下载。"}}),a("a-divider",[e._v("历史备份")]),a("a-list",{attrs:{dataSource:e.backups,loading:e.loading,itemLayout:"vertical",size:"small"},scopedSlots:e._u([{key:"renderItem",fn:function(t){return a("a-list-item",{},[a("a-button",{staticStyle:{color:"red"},attrs:{slot:"extra",loading:t.deleting,icon:"delete",type:"link"},on:{click:function(a){return e.handleBackupDeleteClick(t)}},slot:"extra"},[e._v("删除 ")]),a("a-list-item-meta",[a("a",{attrs:{slot:"title",href:"javascript:void(0)"},on:{click:function(a){return e.handleDownloadBackupPackage(t)}},slot:"title"},[a("a-icon",{staticStyle:{color:"#52c41a"},attrs:{type:"schedule"}}),e._v(" "+e._s(t.filename)+" ")],1),a("p",{attrs:{slot:"description"},slot:"description"},[e._v(e._s(e._f("timeAgo")(t.updateTime))+"/"+e._s(e._f("fileSizeFormat")(t.fileSize)))])])],1)}}])})],1)],1),a("a-divider",{staticClass:"divider-transparent"}),a("div",{staticClass:"bottom-control"},[a("a-space",[a("a-button",{attrs:{icon:"download",type:"primary"},on:{click:e.handleBackupClick}},[e._v("备份")]),a("a-button",{attrs:{loading:e.loading,icon:"reload",type:"dashed"},on:{click:e.handleListBackups}},[e._v("刷新")])],1)],1),a("a-modal",{attrs:{title:"备份选项"},model:{value:e.optionsModal.visible,callback:function(t){e.$set(e.optionsModal,"visible",t)},expression:"optionsModal.visible"}},[a("template",{slot:"footer"},[a("a-button",{on:{click:function(){return e.optionsModal.visible=!1}}},[e._v("取消")]),a("ReactiveButton",{attrs:{errored:e.backupErrored,loading:e.backuping,erroredText:"备份失败",loadedText:"备份成功",text:"确认",type:"primary"},on:{callback:e.handleBackupedCallback,click:e.handleBackupConfirmed}})],1),a("a-checkbox-group",{staticStyle:{width:"100%"},model:{value:e.optionsModal.selected,callback:function(t){e.$set(e.optionsModal,"selected",t)},expression:"optionsModal.selected"}},[a("a-row",e._l(e.optionsModal.options,(function(t){return a("a-col",{key:t,attrs:{span:8}},[a("a-checkbox",{attrs:{value:t}},[e._v(" "+e._s(t)+" ")])],1)})),1)],1)],2)],1)},s=[],c=(a(31875),a(29888),a(45107),a(42164),a(20838),a(1300)),d=a(52187),u={name:"BackupWorkDirDrawer",mixins:[c.jB,c.KT],data:function(){return{backuping:!1,loading:!1,backupErrored:!1,backups:[],optionsModal:{options:[],visible:!1,selected:[]}}},model:{prop:"visible",event:"close"},props:{visible:{type:Boolean,required:!1,default:!0}},methods:{handleAfterVisibleChanged:function(e){e&&this.handleListBackups()},handleListBackups:function(){var e=this;this.loading=!0,d.Z.backup.listWorkdirBackups().then((function(t){e.backups=t.data})).finally((function(){e.loading=!1}))},handleBackupClick:function(){var e=this;d.Z.backup.getWorkdirBackupOptions().then((function(t){e.optionsModal={visible:!0,options:t.data,selected:t.data}}))},handleBackupConfirmed:function(){var e=this;this.backuping=!0,d.Z.backup.backupWorkdir(this.optionsModal.selected).catch((function(){e.backupErrored=!0})).finally((function(){setTimeout((function(){e.backuping=!1}),400)}))},handleBackupedCallback:function(){this.backupErrored?this.backupErrored=!1:(this.optionsModal.visible=!1,this.handleListBackups())},handleBackupDeleteClick:function(e){var t=this;e.deleting=!0,d.Z.backup.deleteWorkdirBackup(e.filename).finally((function(){setTimeout((function(){e.deleting=!1}),400),t.handleListBackups()}))},handleDownloadBackupPackage:function(e){var t=this;d.Z.backup.getWorkdirBackup(e.filename).then((function(e){var t=document.createElement("a"),a=new window.URL(e.data.downloadLink);t.href=a,t.download=e.data.filename,document.body.appendChild(t),t.click(),document.body.removeChild(t),window.URL.revokeObjectURL(a)})).catch((function(e){t.$message.error(e.data.message)}))},onClose:function(){this.$emit("close",!1)}}},p=u,k=a(72362),f=(0,k.Z)(p,r,s,!1,null,null,null),h=f.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{afterVisibleChange:e.handleAfterVisibleChanged,visible:e.visible,width:e.isMobile()?"100%":"480",closable:"",destroyOnClose:"",title:"数据导出"},on:{close:e.onClose}},[a("a-row",{attrs:{align:"middle",type:"flex"}},[a("a-col",{attrs:{span:24}},[a("a-alert",{attrs:{banner:"",closable:"",message:"注意：导出后的数据文件存储在临时文件中，重启服务器会造成备份文件的丢失，所以请尽快下载。"}}),a("a-divider",[e._v("历史文件")]),a("a-list",{attrs:{dataSource:e.files,loading:e.loading,itemLayout:"vertical",size:"small"},scopedSlots:e._u([{key:"renderItem",fn:function(t){return a("a-list-item",{},[a("a-button",{staticStyle:{color:"red"},attrs:{slot:"extra",loading:t.deleting,icon:"delete",type:"link"},on:{click:function(a){return e.handleFileDeleteClick(t)}},slot:"extra"},[e._v("删除 ")]),a("a-list-item-meta",[a("a",{attrs:{slot:"title",href:"javascript:void(0)"},on:{click:function(a){return e.handleDownloadBackupFile(t)}},slot:"title"},[a("a-icon",{staticStyle:{color:"#52c41a"},attrs:{type:"schedule"}}),e._v(" "+e._s(t.filename)+" ")],1),a("p",{attrs:{slot:"description"},slot:"description"},[e._v(e._s(e._f("timeAgo")(t.updateTime))+"/"+e._s(e._f("fileSizeFormat")(t.fileSize)))])])],1)}}])})],1)],1),a("a-divider",{staticClass:"divider-transparent"}),a("div",{staticClass:"bottom-control"},[a("a-space",[a("ReactiveButton",{attrs:{errored:e.backupErrored,loading:e.backuping,erroredText:"备份失败",icon:"download",loadedText:"备份成功",text:"备份",type:"primary"},on:{callback:e.handleBackupedCallback,click:e.handleExportClick}}),a("a-button",{attrs:{loading:e.loading,icon:"reload",type:"dashed"},on:{click:e.handleListBackups}},[e._v("刷新")])],1)],1)],1)},m=[],v={name:"ExportDataDrawer",mixins:[c.jB,c.KT],data:function(){return{backuping:!1,loading:!1,backupErrored:!1,files:[]}},model:{prop:"visible",event:"close"},props:{visible:{type:Boolean,required:!1,default:!0}},methods:{handleAfterVisibleChanged:function(e){e&&this.handleListBackups()},handleListBackups:function(){var e=this;this.loading=!0,d.Z.backup.listDataBackups().then((function(t){e.files=t.data})).finally((function(){e.loading=!1}))},handleExportClick:function(){var e=this;this.backuping=!0,d.Z.backup.backupData().catch((function(){e.backupErrored=!0})).finally((function(){setTimeout((function(){e.backuping=!1}),400)}))},handleBackupedCallback:function(){this.backupErrored?this.backupErrored=!1:this.handleListBackups()},handleFileDeleteClick:function(e){var t=this;e.deleting=!0,d.Z.backup.deleteDataBackup(e.filename).finally((function(){setTimeout((function(){e.deleting=!1}),400),t.handleListBackups()}))},handleDownloadBackupFile:function(e){var t=this;d.Z.backup.getDataBackup(e.filename).then((function(e){var t=document.createElement("a"),a=new window.URL(e.data.downloadLink);t.href=a,t.download=e.data.filename,document.body.appendChild(t),t.click(),document.body.removeChild(t),window.URL.revokeObjectURL(a)})).catch((function(){t.$message.error("下载失败！")}))},onClose:function(){this.$emit("close",!1)}}},g=v,w=(0,k.Z)(g,b,m,!1,null,null,null),y=w.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{afterVisibleChange:e.handleAfterVisibleChanged,visible:e.visible,width:e.isMobile()?"100%":"480",closable:"",destroyOnClose:"",title:"导出文章为 Markdown 文档"},on:{close:e.onClose}},[a("a-row",{attrs:{align:"middle",type:"flex"}},[a("a-col",{attrs:{span:24}},[a("a-alert",{attrs:{banner:"",closable:"",message:"注意：导出后的数据文件存储在临时文件中，重启服务器会造成备份文件的丢失，所以请尽快下载。"}}),a("a-divider",[e._v("历史文件")]),a("a-list",{attrs:{dataSource:e.files,loading:e.loading,itemLayout:"vertical",size:"small"},scopedSlots:e._u([{key:"renderItem",fn:function(t){return a("a-list-item",{},[a("a-button",{staticStyle:{color:"red"},attrs:{slot:"extra",loading:t.deleting,icon:"delete",type:"link"},on:{click:function(a){return e.handleFileDeleteClick(t)}},slot:"extra"},[e._v("删除 ")]),a("a-list-item-meta",[a("a",{attrs:{slot:"title",href:"javascript:void(0)"},on:{click:function(a){return e.handleDownloadMarkdownPackage(t)}},slot:"title"},[a("a-icon",{staticStyle:{color:"#52c41a"},attrs:{type:"schedule"}}),e._v(" "+e._s(t.filename)+" ")],1),a("p",{attrs:{slot:"description"},slot:"description"},[e._v(e._s(e._f("timeAgo")(t.updateTime))+"/"+e._s(e._f("fileSizeFormat")(t.fileSize)))])])],1)}}])})],1)],1),a("a-divider",{staticClass:"divider-transparent"}),a("div",{staticClass:"bottom-control"},[a("a-space",[a("a-popconfirm",{attrs:{cancelText:"否",okText:"是",title:"是否同时为 Markdown 文档生成 Front Matter？"},on:{cancel:function(t){return e.handleExportClick(!1)},confirm:function(t){return e.handleExportClick(!0)}}},[a("ReactiveButton",{attrs:{errored:e.backupErrored,loading:e.backuping,erroredText:"备份失败",icon:"download",loadedText:"备份成功",text:"备份",type:"primary"},on:{callback:e.handleBackupedCallback}})],1),a("a-button",{attrs:{loading:e.loading,icon:"reload",type:"dashed"},on:{click:e.handleListBackups}},[e._v("刷新")])],1)],1)],1)},C=[],_={name:"ExportDataDrawer",mixins:[c.jB,c.KT],data:function(){return{backuping:!1,loading:!1,backupErrored:!1,files:[]}},model:{prop:"visible",event:"close"},props:{visible:{type:Boolean,required:!1,default:!0}},methods:{handleAfterVisibleChanged:function(e){e&&this.handleListBackups()},handleListBackups:function(){var e=this;this.loading=!0,d.Z.backup.listMarkdownBackups().then((function(t){e.files=t.data})).finally((function(){e.loading=!1}))},handleExportClick:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.backuping=!0,d.Z.backup.backupMarkdown({needFrontMatter:t}).catch((function(){e.backupErrored=!0})).finally((function(){setTimeout((function(){e.backuping=!1}),400)}))},handleBackupedCallback:function(){this.backupErrored?this.backupErrored=!1:this.handleListBackups()},handleFileDeleteClick:function(e){var t=this;e.deleting=!0,d.Z.backup.deleteMarkdownBackup(e.filename).finally((function(){setTimeout((function(){e.deleting=!1}),400),t.handleListBackups()}))},handleDownloadMarkdownPackage:function(e){var t=this;d.Z.backup.getMarkdownBackup(e.filename).then((function(e){var t=document.createElement("a"),a=new window.URL(e.data.downloadLink);t.href=a,t.download=e.data.filename,document.body.appendChild(t),t.click(),document.body.removeChild(t),window.URL.revokeObjectURL(a)})).catch((function(){t.$message.error("下载失败！")}))},onClose:function(){this.$emit("close",!1)}}},D=_,B=(0,k.Z)(D,x,C,!1,null,null,null),M=B.exports,E=a(98906),L={components:{PageView:l.B4,BackupWorkDirDrawer:h,ExportDataDrawer:y,ExportMarkdownDrawer:M},data:function(){return{backupWorkDirDrawerVisible:!1,exportDataDrawerVisible:!1,exportMarkdownDrawerVisible:!1,markdownUpload:!1,uploadHandler:function(e,t){return d.Z.backup.importMarkdown(e,t)}}},computed:(0,n.Z)({},(0,E.Se)(["options"])),methods:{handleChange:function(e){var t=e.file.status;"uploading"!==t&&this.$log.debug(e.file,e.fileList),"done"===t?this.$message.success("".concat(e.file.name," 导入成功！")):"error"===t&&this.$message.error("".concat(e.file.name," 导入失败！"))},handleToDeveloperOptions:function(){this.$router.push({name:"DeveloperOptions"})},onUploadClose:function(){this.$refs.upload.handleClearFileList()}}},S=L,V=(0,k.Z)(S,i,o,!1,null,null,null),T=V.exports}}]);