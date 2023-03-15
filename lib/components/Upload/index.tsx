import { defineComponent, ref, computed, watch } from "vue";
import { UploadProps, UploadFile, UploadRawFile, FormInstance, ElUpload, ElImageViewer, ElMessage } from "element-plus";

export default defineComponent({
  name: "IUpload",
  setup(props, { attrs, emit, slots }) {
    const showViewer = ref<boolean>(false);
    const initialIndex = ref<number>(0);

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
      if (attrs["maxSize"]) {
        if (rawFile.size / 1024 > attrs["maxSize"]) {
          ElMessage.warning(`上传文件大小不能超过 ${attrs["maxSize"]}KB`);
          return false;
        }
      } else {
        emit("before-upload", rawFile);
      }
    };
    return () => (
      <span>
        <ElUpload {...attrs}
          onPreview={handlePreview}
          beforeUpload={beforeUpload}
          v-slots={{
            ...slots,
          }}
        ></ElUpload>

        {(attrs["list-type"] === "picture-card" || attrs["list-type"] === "picture") && showViewer.value ? (
          <ElImageViewer
            initialIndex={initialIndex.value}
            urlList={attrs["file-list"] ? attrs["file-list"].map((file: UploadFile) => file.url) : []}
            onClose={hideViewer}
          ></ElImageViewer>
        ) : (
          <span></span>
        )}
      </span>
    );
  },
});
