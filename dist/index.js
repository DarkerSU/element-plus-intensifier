(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".skyd-upload .el-upload-list{overflow-y:auto;border-radius:3px}.skyd-upload .el-upload-list::-webkit-scrollbar{width:8px}.skyd-upload .el-upload-list::-webkit-scrollbar-thumb{border-radius:10px;box-shadow:inset 0 0 5px #0003;background:rgba(139,139,139,.2)}.skyd-upload .el-upload-list::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #0003;border-radius:0;background:rgba(106,106,106,.1)}.FormGenerator.FormGeneratorSearch{display:flex;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;flex-direction:row;gap:15px 10px}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item{width:calc(25% - 8px);margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem{margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__label-wrap{display:none}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__content{flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline){padding-bottom:45px}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem{margin:0;height:64px;position:absolute;bottom:0;right:0;width:100%;box-shadow:1px 2px 10px #9ab7ff80;z-index:1;z-index:11;padding:0 16px;box-sizing:border-box}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem .el-form-item__content{display:flex;justify-content:flex-end;align-items:center;flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .el-form-item__content>div{width:100%}.FormGenerator .searchItem{flex-grow:1;flex-shrink:0}.FormGenerator .searchItem .el-form-item__content{justify-content:flex-end}.FormGenerator .expandBtn i{transition:all .3s}.FormGenerator .expandBtn.down i{transform:rotate(180deg)}.FormGenerator .el-select,.FormGenerator .el-input,.FormGenerator .el-cascader,.FormGenerator .el-date-editor.el-input,.FormGenerator .el-date-editor.el-input__wrapper,.TableGenerator .el-scrollbar__view{width:100%}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { defineComponent as M, ref as C, onMounted as J, getCurrentInstance as Q, createVNode as a, Fragment as p, mergeProps as h, openBlock as T, createElementBlock as B, createElementVNode as F, createTextVNode as Y, isVNode as X, watch as R, nextTick as L } from "vue";
import { ElUpload as K, ElImageViewer as Z, ElMessage as i, ElForm as o, ElFormItem as j, ElButton as U, ElSwitch as O, ElTimePicker as ee, ElDatePicker as le, ElCheckboxGroup as W, ElCheckboxButton as ae, ElCheckbox as ue, ElRadioGroup as q, ElRadioButton as re, ElRadio as de, ElCascader as ce, ElTreeSelect as he, ElSelect as te, ElOption as ne, ElInputNumber as se, ElInput as ve, ElLoading as we, ElTable as H, ElTableColumn as S, ElEmpty as be } from "element-plus";
const ze = /* @__PURE__ */ M({
  name: "IUpload",
  setup(x, {
    attrs: n,
    emit: w,
    slots: u
  }) {
    const y = C(!1), l = C(0), E = C();
    J(() => {
      if (n["list-type"] !== "picture-card") {
        const {
          proxy: t
        } = Q();
        let v = t == null ? void 0 : t.$el.nextSibling.getElementsByClassName("el-upload-list")[0];
        v && (v.style.height = `${n["max-show-height"] ? n["max-show-height"] : 100}px`, v.style.boxShadow = `${n["max-show-height"] ? "0 0 13px #ddd inset" : "none"}`);
      }
    });
    const s = () => {
      y.value = !1;
    }, g = (t) => {
      const v = n["file-list"] ? n["file-list"].findIndex((b) => b.uid === t.uid) : 0;
      l.value = v > -1 ? v : 0, y.value = !0, w("on-preview", t);
    }, k = (t) => {
      if (n["max-size"]) {
        if (t.size / 1024 > n["max-size"])
          return i.warning(`上传文件大小不能超过 ${n["max-size"]}KB`), !1;
      } else
        w("before-upload", t);
    };
    return () => a(p, null, [a(K, h({
      class: "skyd-upload"
    }, n, {
      ref: E,
      onPreview: g,
      beforeUpload: k
    }), {
      ...u
    }), (n["list-type"] === "picture-card" || n["list-type"] === "picture") && y.value ? a(Z, {
      initialIndex: l.value,
      urlList: n["file-list"] ? n["file-list"].map((t) => t.url) : [],
      onClose: s
    }, null) : a("span", null, null)]);
  }
});
/*! Element Plus Icons Vue v2.1.0 */
var G = (x, n) => {
  let w = x.__vccOpts || x;
  for (let [u, y] of n)
    w[u] = y;
  return w;
}, _e = {
  name: "ArrowUp"
}, xe = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ye = /* @__PURE__ */ F(
  "path",
  {
    fill: "currentColor",
    d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
  },
  null,
  -1
  /* HOISTED */
), ge = [
  ye
];
function Ee(x, n, w, u, y, l) {
  return T(), B("svg", xe, ge);
}
var $e = /* @__PURE__ */ G(_e, [["render", Ee], ["__file", "arrow-up.vue"]]), pe = {
  name: "Refresh"
}, Ve = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ke = /* @__PURE__ */ F(
  "path",
  {
    fill: "currentColor",
    d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
  },
  null,
  -1
  /* HOISTED */
), Ce = [
  ke
];
function Ie(x, n, w, u, y, l) {
  return T(), B("svg", Ve, Ce);
}
var me = /* @__PURE__ */ G(pe, [["render", Ie], ["__file", "refresh.vue"]]), Ue = {
  name: "Search"
}, De = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ye = /* @__PURE__ */ F(
  "path",
  {
    fill: "currentColor",
    d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
  },
  null,
  -1
  /* HOISTED */
), Se = [
  Ye
];
function Me(x, n, w, u, y, l) {
  return T(), B("svg", De, Se);
}
var Te = /* @__PURE__ */ G(Ue, [["render", Me], ["__file", "search.vue"]]);
function Be(x) {
  return typeof x == "function" || Object.prototype.toString.call(x) === "[object Object]" && !X(x);
}
const Ae = /* @__PURE__ */ M({
  name: "FormGenerator",
  setup(x, {
    expose: n,
    attrs: w,
    slots: u,
    emit: y
  }) {
    const l = w, E = C(), s = {}, g = C(!1), k = isNaN(l.column) ? 4 : l.column >= 4 ? l.column : 4, t = {
      submit: () => {
        E.value.validate((b) => {
          b && y("submit");
        });
      },
      reset: () => {
        E.value.resetFields(), y("submit", "init");
      }
    };
    function v(b) {
      g.value = b, l.formOption.forEach(($, c) => {
        c > k - 2 && ($.show = b);
      });
    }
    return l.formOption.length >= k - 2 && (l == null ? void 0 : l.type) === "search" && v(!1), n(() => ({
      ...E.value,
      ...t,
      $refs: s
    })), () => {
      function b() {
        let e = {
          ...l
        };
        return delete e.model, delete e.formOption, a(o, h({
          class: `FormGenerator ${(l == null ? void 0 : l.type) === "search" ? "FormGeneratorSearch" : ""} ${(l == null ? void 0 : l.type) === "dialog" ? "FormGeneratorDialog" : ""}`,
          inline: (l == null ? void 0 : l.type) === "search",
          "validate-on-rule-change": !1,
          "label-width": l.labelWidth || "auto"
        }, e, {
          ref: E
        }), {
          default: () => [l.formOption.map((_) => {
            let V;
            if (!(_.hasOwnProperty("show") && _.show === !1))
              return a(j, h(_.formItem, {
                key: _.formItem.prop
              }), Be(V = $(_)) ? V : {
                default: () => [V]
              });
          }), e.disabled === !0 || e.noFooter || !e.onSubmit ? "" : a(j, {
            class: `btnItem ${g.value ? "searchItem" : ""}`
          }, {
            default: () => u != null && u.default ? a(p, null, [u.default()[0].children]) : (l == null ? void 0 : l.type) === "search" ? c() : a(p, null, [(l == null ? void 0 : l.type) === "dialog" ? a(U, {
              onClick: (_) => {
                var I, D;
                function V(m) {
                  return m.parentElement.classList.value.split(" ").includes("el-dialog") ? m.parentElement : V(m.parentElement);
                }
                (D = (I = V(_.target).querySelector(".el-dialog__headerbtn")) == null ? void 0 : I.click) == null || D.call(I);
              }
            }, {
              default: () => [Y("取消")]
            }) : "", a(U, {
              type: "primary",
              onClick: t.submit
            }, {
              default: () => [Y("确定")]
            })]),
            label: () => ""
          })]
        });
      }
      function $(e) {
        var _, V, I, D, m, f, z, A, N;
        switch (s[e.formItem.prop] = C(), e.type) {
          case "input":
            return a(ve, h({
              ref: s[e.formItem.prop],
              clearable: !0,
              maxlength: 30
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => l.model[e.formItem.prop] = r
            }), {
              ...(_ = e == null ? void 0 : e.control) == null ? void 0 : _.slot
            });
          case "input-number":
            return a(se, h({
              ref: s[e.formItem.prop],
              min: 0,
              max: 100
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => l.model[e.formItem.prop] = r
            }), null);
          case "select":
            return a(te, h({
              ref: s[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => l.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r;
                return [(r = e == null ? void 0 : e.control) == null ? void 0 : r.option.map((d) => a(ne, h(d, {
                  key: d.value
                }), {
                  ...d == null ? void 0 : d.slot
                }))];
              }
            });
          case "tree-select":
            return a(he, h({
              ref: s[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => l.model[e.formItem.prop] = r
            }), {
              ...(V = e == null ? void 0 : e.control) == null ? void 0 : V.slot
            });
          case "cascader":
            return a(ce, h({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => l.model[e.formItem.prop] = r
            }), {
              ...(I = e == null ? void 0 : e.control) == null ? void 0 : I.slot
            });
          case "radio":
            return a(q, h({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => l.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r;
                return [(r = e == null ? void 0 : e.control) == null ? void 0 : r.option.map((d) => a(de, h(d, {
                  label: d.value,
                  key: d.label
                }), {
                  default: () => [d.label],
                  ...d == null ? void 0 : d.slot
                }))];
              }
            });
          case "radio-button":
            return a(q, h({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => l.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r;
                return [(r = e == null ? void 0 : e.control) == null ? void 0 : r.option.map((d) => a(re, h(d, {
                  label: d.value,
                  key: d.label
                }), {
                  default: () => [d.label],
                  ...d == null ? void 0 : d.slot
                }))];
              }
            });
          case "checkbox":
            return a(W, h({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => l.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r;
                return [(r = e == null ? void 0 : e.control) == null ? void 0 : r.option.map((d) => a(ue, h(d, {
                  label: d.value,
                  key: d.label
                }), {
                  default: () => [d.label],
                  ...d == null ? void 0 : d.slot
                }))];
              }
            });
          case "checkbox-button":
            return a(W, h({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => l.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r;
                return [(r = e == null ? void 0 : e.control) == null ? void 0 : r.option.map((d) => a(ae, h(d, {
                  label: d.value,
                  key: d.label
                }), {
                  default: () => [d.label],
                  ...d == null ? void 0 : d.slot
                }))];
              }
            });
          case "datetime":
            const P = {
              datetimerange: "YYYY-MM-DD hh:mm:ss",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD hh:mm:ss",
              date: "YYYY-MM-DD"
            }[((D = e == null ? void 0 : e.control) == null ? void 0 : D.type) || "date"];
            return a(le, h({
              ref: s[e.formItem.prop],
              clearable: !0,
              format: P,
              "value-format": P
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => l.model[e.formItem.prop] = r
            }), {
              ...(m = e == null ? void 0 : e.control) == null ? void 0 : m.slot
            });
          case "time":
            return a(ee, h({
              ref: s[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => l.model[e.formItem.prop] = r
            }), {
              ...(f = e == null ? void 0 : e.control) == null ? void 0 : f.slot
            });
          case "switch":
            return a(O, h({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => l.model[e.formItem.prop] = r
            }), {
              ...(z = e == null ? void 0 : e.control) == null ? void 0 : z.slot
            });
          case "upload":
            return a(K, h({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              "file-list": l.model[e.formItem.prop],
              "onUpdate:file-list": (r) => l.model[e.formItem.prop] = r
            }), {
              default: () => l.disabled ? "" : a(U, {
                type: "primary"
              }, {
                default: () => [Y("上传文件")]
              }),
              ...(A = e == null ? void 0 : e.control) == null ? void 0 : A.slot
            });
          case "txt":
            return a(p, null, [l.model[e.formItem.prop]]);
          case "slot":
            return a(p, null, [(N = u[e.formItem.prop]) == null ? void 0 : N.call(u, {
              form: l.model,
              data: l.model[e.formItem.prop]
            })]);
        }
      }
      function c() {
        return a(p, null, [a(U, {
          type: "primary",
          onClick: t.submit,
          icon: Te
        }, {
          default: () => [Y("搜索")]
        }), a(U, {
          onClick: t.reset,
          icon: me
        }, {
          default: () => [Y("重置")]
        }), l.type === "search" && l.formOption.length > k - 1 ? a(p, null, [a(U, {
          text: !0,
          type: "primary",
          class: `expandBtn ${g.value ? "up" : "down"}`,
          onClick: () => {
            v(!g.value);
          },
          icon: $e
        }, {
          default: () => [g.value ? "收起" : "展开"]
        })]) : ""]);
      }
      return b();
    };
  }
});
const Ne = /* @__PURE__ */ M({
  name: "TableGenerator",
  setup(x, {
    expose: n,
    attrs: w,
    slots: u,
    emit: y
  }) {
    const l = w;
    let E, s = new Date().getTime(), g = C(!1), k = C(0);
    return R(() => l.loading, (t) => {
      t ? L(() => {
        E = we.service({
          target: `.el-table-${s}`
        });
      }) : E == null || E.close();
    }, {
      immediate: !0
    }), R(() => l.data, (t) => {
      if (!(u != null && u.operation) || t.length === 0)
        return g.value = !0;
      g.value = !1, L(() => {
        let v = 0;
        document.querySelectorAll(".content-wrapper-width").forEach((b) => {
          b.offsetWidth > v && (v = b.offsetWidth);
        }), k.value = v > 0 ? v + 32 : "auto", g.value = !0;
      });
    }, {
      immediate: !0
    }), () => {
      function t($) {
        return $.map((c) => ["selection", "index", "expand"].includes(c.type) ? a(S, h({
          type: c.type
        }, c), {
          ...c == null ? void 0 : c.slot
        }) : a(S, h({
          "show-overflow-tooltip": !0,
          align: "left"
        }, c), {
          default: (e) => {
            var _;
            return c.children && Array.isArray(c.children) && c.children.length > 0 ? t(c.children) : u[c.prop] ? a(p, null, [(_ = u[c.prop]) == null ? void 0 : _.call(u, {
              $index: e.$index,
              row: e.row
            })]) : c.formatter ? a(p, null, [c.formatter({
              $index: e.$index,
              row: e.row
            }) ?? "-"]) : a(p, null, [e.row[c.prop] ?? "-"]);
          },
          ...c == null ? void 0 : c.slot
        }));
      }
      function v() {
        return a(H, h({
          stripe: !0
        }, l, {
          class: `TableGenerator el-table-${s}`
        }), {
          default: () => [t(l.tableOption), u != null && u.operation ? a(S, {
            fixed: "right",
            label: "操作",
            width: k.value
          }, {
            default: ($) => {
              var c;
              return a("div", {
                class: "content-wrapper"
              }, [(c = u.operation) == null ? void 0 : c.call(u, {
                $index: $.$index,
                row: $.row
              })]);
            }
          }) : ""],
          empty: () => u != null && u.empty ? u == null ? void 0 : u.empty() : a(be, {
            description: "暂无数据"
          }, null),
          append: () => u != null && u.append ? u == null ? void 0 : u.append() : ""
        });
      }
      function b() {
        return a(H, h(w, {
          class: `TableGenerator el-table-${s}`
        }), {
          default: () => [a(S, {
            fixed: "right"
          }, {
            default: ($) => {
              var c;
              return a("div", {
                style: "display:inline-block;opacity:0",
                class: "content-wrapper content-wrapper-width"
              }, [(c = u.operation) == null ? void 0 : c.call(u, {
                $index: $.$index,
                row: $.row
              })]);
            }
          })]
        });
      }
      return a(p, null, [g.value ? v() : b()]);
    };
  }
});
export {
  Ae as FormGenerator,
  ze as IUpload,
  Ne as TableGenerator
};
