import { defineComponent, ref } from 'vue'
import type { UploadProps, UploadFile, UploadRawFile } from "element-plus";
import { ElUpload, ElImageViewer, ElIcon, ElMessage } from "element-plus";
export default defineComponent({
  name: "SUpload",
  setup(props, { attrs, emit, slots }) {
    const _attrs = attrs as UploadProps;
    const showViewer = ref<boolean>(false);
    const activeIndex = ref<number>(0);

    const hideViewer = () => {
      showViewer.value = false;
    };

    const handlePreview: UploadProps["onPreview"] = (
      uploadFile: UploadFile
    ) => {
      const index = _attrs["fileList"].findIndex(
        (file: UploadFile) => file.uid === uploadFile.uid
      );
      // Current active Iamge index
      activeIndex.value = index;
      //Image Preivew Status
      showViewer.value = true;
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
    return () => {
      return (
        <>
          <ElUpload
            class={{ "avatar-uploader": _attrs["listType"] == "picture-card" }}
            {..._attrs}
            onPreview={handlePreview}
            beforeUpload={beforeUpload}
            v-slots={{
              default: () => slots?.default,
              file: (file: UploadFile) => slots?.file,
              tip: () => slots?.tip,
              trigger: () => slots?.trigger,
            }}
          ></ElUpload>

          {(_attrs["listType"] == "picture-card" ||
            _attrs["listType"] == "picture") &&
            showViewer ? (
            <ElImageViewer
              activeIndex={activeIndex}
              urlList={
                _attrs["fileList"]
                  ? _attrs["fileList"].map((file: UploadFile) => file.url)
                  : []
              }
              onClose={hideViewer}
            ></ElImageViewer>
          ) : (
            <></>
          )}
        </>
      );
    };
  },
});
