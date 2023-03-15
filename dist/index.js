import { defineComponent as m, ref as s, createVNode as i, mergeProps as t } from "vue";
import { ElUpload as x, ElImageViewer as v, ElMessage as w } from "element-plus";
const z = /* @__PURE__ */ m({
  name: "IUpload",
  setup(I, {
    attrs: e,
    emit: o,
    slots: a
  }) {
    const n = s(!1), p = s(0), u = () => {
      n.value = !1;
    }, d = (l) => {
      const r = e["file-list"] ? e["file-list"].findIndex((c) => c.uid === l.uid) : 0;
      p.value = r > -1 ? r : 0, n.value = !0, o("on-preview", l);
    }, f = (l) => {
      if (e.maxSize) {
        if (l.size / 1024 > e.maxSize)
          return w.warning(`上传文件大小不能超过 ${e.maxSize}KB`), !1;
      } else
        o("before-upload", l);
    };
    return () => i("span", null, [i(x, t(e, {
      onPreview: d,
      beforeUpload: f
    }), {
      ...a
    }), (e["list-type"] === "picture-card" || e["list-type"] === "picture") && n.value ? i(v, {
      initialIndex: p.value,
      urlList: e["file-list"] ? e["file-list"].map((l) => l.url) : [],
      onClose: u
    }, null) : i("span", null, null)]);
  }
});
export {
  z as IUpload
};
