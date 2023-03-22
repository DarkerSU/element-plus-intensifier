import { defineComponent as M, ref as C, onMounted as J, getCurrentInstance as Q, createVNode as a, Fragment as V, mergeProps as h, openBlock as T, createElementBlock as B, createElementVNode as F, createTextVNode as Y, isVNode as X, watch as R, nextTick as L } from "vue";
import { ElUpload as K, ElImageViewer as Z, ElMessage as i, ElForm as o, ElFormItem as j, ElButton as U, ElSwitch as O, ElTimePicker as ee, ElDatePicker as le, ElCheckboxGroup as W, ElCheckboxButton as ae, ElCheckbox as ue, ElRadioGroup as q, ElRadioButton as re, ElRadio as de, ElCascader as ce, ElTreeSelect as he, ElSelect as te, ElOption as ne, ElInputNumber as se, ElInput as ve, ElLoading as we, ElTable as H, ElTableColumn as S, ElEmpty as be } from "element-plus";
const ze = /* @__PURE__ */ M({
  name: "IUpload",
  setup(x, {
    attrs: t,
    emit: b,
    slots: u
  }) {
    const y = C(!1), l = C(0), E = C();
    J(() => {
      var n, w;
      if (t["list-type"] !== "picture-card") {
        let v = (w = (n = Q()) == null ? void 0 : n.proxy) == null ? void 0 : w.$el.nextSibling.getElementsByClassName("el-upload-list")[0];
        v && (v.style.height = `${t["max-show-height"] ? t["max-show-height"] + "px" : "auto"}`, v.style.boxShadow = `${t["max-show-height"] ? "0 0 13px #ddd inset" : "none"}`);
      }
    });
    const s = () => {
      y.value = !1;
    }, g = (n) => {
      const w = t["file-list"] ? t["file-list"].findIndex((v) => v.uid === n.uid) : 0;
      l.value = w > -1 ? w : 0, y.value = !0, b("on-preview", n);
    }, k = (n) => {
      if (t["max-size"]) {
        if (n.size / 1024 > t["max-size"])
          return i.warning(`上传文件大小不能超过 ${t["max-size"]}KB`), !1;
      } else
        b("before-upload", n);
    };
    return () => a(V, null, [a(K, h({
      class: "skyd-upload"
    }, t, {
      ref: E,
      onPreview: g,
      beforeUpload: k
    }), {
      ...u
    }), (t["list-type"] === "picture-card" || t["list-type"] === "picture") && y.value ? a(Z, {
      initialIndex: l.value,
      urlList: t["file-list"] ? t["file-list"].map((n) => n.url) : [],
      onClose: s
    }, null) : a("span", null, null)]);
  }
});
/*! Element Plus Icons Vue v2.1.0 */
var G = (x, t) => {
  let b = x.__vccOpts || x;
  for (let [u, y] of t)
    b[u] = y;
  return b;
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
function Ee(x, t, b, u, y, l) {
  return T(), B("svg", xe, ge);
}
var pe = /* @__PURE__ */ G(_e, [["render", Ee], ["__file", "arrow-up.vue"]]), Ve = {
  name: "Refresh"
}, $e = {
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
function Ie(x, t, b, u, y, l) {
  return T(), B("svg", $e, Ce);
}
var me = /* @__PURE__ */ G(Ve, [["render", Ie], ["__file", "refresh.vue"]]), Ue = {
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
function Me(x, t, b, u, y, l) {
  return T(), B("svg", De, Se);
}
var Te = /* @__PURE__ */ G(Ue, [["render", Me], ["__file", "search.vue"]]);
function Be(x) {
  return typeof x == "function" || Object.prototype.toString.call(x) === "[object Object]" && !X(x);
}
const Ae = /* @__PURE__ */ M({
  name: "FormGenerator",
  setup(x, {
    expose: t,
    attrs: b,
    slots: u,
    emit: y
  }) {
    const l = b, E = C(), s = {}, g = C(!1), k = isNaN(l.column) ? 4 : l.column >= 4 ? l.column : 4, n = {
      submit: () => {
        E.value.validate((v) => {
          v && y("submit");
        });
      },
      reset: () => {
        E.value.resetFields(), y("submit", "init");
      }
    };
    function w(v) {
      g.value = v, l.formOption.forEach((p, c) => {
        c > k - 2 && (p.show = v);
      });
    }
    return l.formOption.length >= k - 2 && (l == null ? void 0 : l.type) === "search" && w(!1), t(() => ({
      ...E.value,
      ...n,
      $refs: s
    })), () => {
      function v() {
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
            let $;
            if (!(_.hasOwnProperty("show") && _.show === !1))
              return a(j, h(_.formItem, {
                key: _.formItem.prop
              }), Be($ = p(_)) ? $ : {
                default: () => [$]
              });
          }), e.disabled === !0 || e.noFooter || !e.onSubmit ? "" : a(j, {
            class: `btnItem ${g.value ? "searchItem" : ""}`
          }, {
            default: () => u != null && u.default ? a(V, null, [u.default()[0].children]) : (l == null ? void 0 : l.type) === "search" ? c() : a(V, null, [(l == null ? void 0 : l.type) === "dialog" ? a(U, {
              onClick: (_) => {
                var I, D;
                function $(m) {
                  return m.parentElement.classList.value.split(" ").includes("el-dialog") ? m.parentElement : $(m.parentElement);
                }
                (D = (I = $(_.target).querySelector(".el-dialog__headerbtn")) == null ? void 0 : I.click) == null || D.call(I);
              }
            }, {
              default: () => [Y("取消")]
            }) : "", a(U, {
              type: "primary",
              onClick: n.submit
            }, {
              default: () => [Y("确定")]
            })]),
            label: () => ""
          })]
        });
      }
      function p(e) {
        var _, $, I, D, m, f, z, A, N;
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
              ...($ = e == null ? void 0 : e.control) == null ? void 0 : $.slot
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
            return a(V, null, [l.model[e.formItem.prop]]);
          case "slot":
            return a(V, null, [(N = u[e.formItem.prop]) == null ? void 0 : N.call(u, {
              form: l.model,
              data: l.model[e.formItem.prop]
            })]);
        }
      }
      function c() {
        return a(V, null, [a(U, {
          type: "primary",
          onClick: n.submit,
          icon: Te
        }, {
          default: () => [Y("搜索")]
        }), a(U, {
          onClick: n.reset,
          icon: me
        }, {
          default: () => [Y("重置")]
        }), l.type === "search" && l.formOption.length > k - 1 ? a(V, null, [a(U, {
          text: !0,
          type: "primary",
          class: `expandBtn ${g.value ? "up" : "down"}`,
          onClick: () => {
            w(!g.value);
          },
          icon: pe
        }, {
          default: () => [g.value ? "收起" : "展开"]
        })]) : ""]);
      }
      return v();
    };
  }
}), Ne = /* @__PURE__ */ M({
  name: "TableGenerator",
  setup(x, {
    expose: t,
    attrs: b,
    slots: u,
    emit: y
  }) {
    const l = b;
    let E, s = (/* @__PURE__ */ new Date()).getTime(), g = C(!1), k = C(0);
    return R(() => l.loading, (n) => {
      n ? L(() => {
        E = we.service({
          target: `.el-table-${s}`
        });
      }) : E == null || E.close();
    }, {
      immediate: !0
    }), R(() => l.data, (n) => {
      if (!(u != null && u.operation) || n.length === 0)
        return g.value = !0;
      g.value = !1, L(() => {
        let w = 0;
        document.querySelectorAll(".content-wrapper-width").forEach((v) => {
          v.offsetWidth > w && (w = v.offsetWidth);
        }), k.value = w > 0 ? w + 32 : "auto", g.value = !0;
      });
    }, {
      immediate: !0
    }), () => {
      function n(p) {
        return p.map((c) => ["selection", "index", "expand"].includes(c.type) ? a(S, h({
          type: c.type
        }, c), {
          ...c == null ? void 0 : c.slot
        }) : a(S, h({
          "show-overflow-tooltip": !0,
          align: "left"
        }, c), {
          default: (e) => {
            var _;
            return c.children && Array.isArray(c.children) && c.children.length > 0 ? n(c.children) : u[c.prop] ? a(V, null, [(_ = u[c.prop]) == null ? void 0 : _.call(u, {
              $index: e.$index,
              row: e.row
            })]) : c.formatter ? a(V, null, [c.formatter({
              $index: e.$index,
              row: e.row
            }) ?? "-"]) : a(V, null, [e.row[c.prop] ?? "-"]);
          },
          ...c == null ? void 0 : c.slot
        }));
      }
      function w() {
        return a(H, h({
          stripe: !0
        }, l, {
          class: `TableGenerator el-table-${s}`
        }), {
          default: () => [n(l.tableOption), u != null && u.operation ? a(S, {
            fixed: "right",
            label: "操作",
            width: k.value
          }, {
            default: (p) => {
              var c;
              return a("div", {
                class: "content-wrapper"
              }, [(c = u.operation) == null ? void 0 : c.call(u, {
                $index: p.$index,
                row: p.row
              })]);
            }
          }) : ""],
          empty: () => u != null && u.empty ? u == null ? void 0 : u.empty() : a(be, {
            description: "暂无数据"
          }, null),
          append: () => u != null && u.append ? u == null ? void 0 : u.append() : ""
        });
      }
      function v() {
        return a(H, h(b, {
          class: `TableGenerator el-table-${s}`
        }), {
          default: () => [a(S, {
            fixed: "right"
          }, {
            default: (p) => {
              var c;
              return a("div", {
                style: "display:inline-block;opacity:0",
                class: "content-wrapper content-wrapper-width"
              }, [(c = u.operation) == null ? void 0 : c.call(u, {
                $index: p.$index,
                row: p.row
              })]);
            }
          })]
        });
      }
      return a(V, null, [g.value ? w() : v()]);
    };
  }
});
export {
  Ae as FormGenerator,
  ze as IUpload,
  Ne as TableGenerator
};
//# sourceMappingURL=index.js.map
