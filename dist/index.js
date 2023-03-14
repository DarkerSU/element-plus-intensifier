import { defineComponent as v, ref as f, createVNode as a, Fragment as l, mergeProps as x } from "vue";
import { ElUpload as w, ElImageViewer as I, ElMessage as U } from "element-plus";
const V = /* @__PURE__ */ v({
  name: "SUpload",
  setup(z, {
    attrs: n,
    emit: d,
    slots: e
  }) {
    const r = n, p = f(!1), u = f(0), c = () => {
      p.value = !1;
    }, t = (i) => {
      const m = r.fileList.findIndex((g) => g.uid === i.uid);
      u.value = m, p.value = !0, d("on-preview", i);
    }, o = (i) => {
      if (n.maxSize) {
        if (i.size / 1024 > n.maxSize)
          return U.warning(`上传文件大小不能超过 ${n.maxSize}KB`), !1;
      } else
        d("before-upload", i);
    };
    return () => a(l, null, [a(w, x({
      class: {
        "avatar-uploader": r.listType == "picture-card"
      }
    }, r, {
      onPreview: t,
      beforeUpload: o
    }), {
      default: () => e == null ? void 0 : e.default,
      file: (i) => e == null ? void 0 : e.file,
      tip: () => e == null ? void 0 : e.tip,
      trigger: () => e == null ? void 0 : e.trigger
    }), (r.listType == "picture-card" || r.listType == "picture") && p ? a(I, {
      activeIndex: u,
      urlList: r.fileList ? r.fileList.map((i) => i.url) : [],
      onClose: c
    }, null) : a(l, null, null)]);
  }
});
export {
  V as IUpload
};
