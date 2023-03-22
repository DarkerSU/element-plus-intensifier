import { defineComponent, ref, onMounted, Fragment, getCurrentInstance } from "vue";
import { UploadProps, UploadFile, UploadRawFile, ElUpload, ElImageViewer, ElMessage } from "element-plus";
// import 
export default defineComponent({
    name: "IUpload",
    setup(props, { attrs, emit, slots, }) {
        const showViewer = ref<boolean>(false);
        const initialIndex = ref<number>(0);
        const currentRef = ref<HTMLElement>()

        onMounted(() => {
            if (attrs["list-type"] !== "picture-card") {
                // const { proxy } = getCurrentInstance();
                let dom = getCurrentInstance()?.proxy?.$el.nextSibling.getElementsByClassName('el-upload-list')[0];
                if (dom) {
                    dom.style.height = `${attrs['max-show-height'] ? attrs['max-show-height'] + 'px' : 'auto'}`;
                    dom.style.boxShadow = `${attrs['max-show-height'] ? '0 0 13px #ddd inset' : 'none'}`;
                }
            }
        });

        const hideViewer = () => {
            showViewer.value = false;
        };

        const handlePreview: UploadProps["onPreview"] = (uploadFile: UploadFile) => {
            const index = attrs["file-list"] ? attrs["file-list"].findIndex((file: UploadFile) => file.uid === uploadFile.uid) : 0;
            initialIndex.value = index > -1 ? index : 0;  // Current active Iamge index
            showViewer.value = true;   //Image Preivew Status
            emit("on-preview", uploadFile);
        };

        //上传钩子
        const beforeUpload = (rawFile: UploadRawFile) => {
            if (attrs["max-size"]) {
                if (rawFile.size / 1024 > attrs["max-size"]) {
                    ElMessage.warning(`上传文件大小不能超过 ${attrs["max-size"]}KB`);
                    return false;
                }
            } else {
                emit("before-upload", rawFile);
            }
        };

        return () => (
            <Fragment>
                <ElUpload class={'skyd-upload'} {...attrs} ref={currentRef}
                    onPreview={handlePreview}
                    beforeUpload={beforeUpload}
                    v-slots={{
                        ...slots,
                    }}
                ></ElUpload>

                {
                    (attrs["list-type"] === "picture-card" || attrs["list-type"] === "picture") && showViewer.value ? (
                        <ElImageViewer
                            initialIndex={initialIndex.value}
                            urlList={attrs["file-list"] ? attrs["file-list"].map((file: UploadFile) => file.url) : []}
                            onClose={hideViewer}
                        ></ElImageViewer>
                    ) : (
                        <span></span>
                    )
                }
            </Fragment>
        );
    },
})
