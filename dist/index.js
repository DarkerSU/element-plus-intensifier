import { defineComponent as T, ref as I, createVNode as a, mergeProps as h, openBlock as F, createElementBlock as M, createElementVNode as B, Fragment as p, createTextVNode as S, isVNode as J, watch as L, nextTick as R } from "vue";
import { ElUpload as K, ElImageViewer as Q, ElMessage as X, ElForm as Z, ElFormItem as j, ElButton as D, ElSwitch as i, ElTimePicker as o, ElDatePicker as O, ElCheckboxGroup as W, ElCheckboxButton as ee, ElCheckbox as le, ElRadioGroup as q, ElRadioButton as ae, ElRadio as ue, ElCascader as re, ElTreeSelect as de, ElSelect as ce, ElOption as he, ElInputNumber as te, ElInput as ve, ElLoading as ne, ElTable as H, ElTableColumn as m, ElEmpty as we } from "element-plus";
const Ge = /* @__PURE__ */ T({
  name: "IUpload",
  setup(_, {
    attrs: v,
    emit: b,
    slots: u
  }) {
    const x = I(!1), l = I(0), g = () => {
      x.value = !1;
    }, t = (n) => {
      const w = v["file-list"] ? v["file-list"].findIndex((E) => E.uid === n.uid) : 0;
      l.value = w > -1 ? w : 0, x.value = !0, b("on-preview", n);
    }, y = (n) => {
      if (v.maxSize) {
        if (n.size / 1024 > v.maxSize)
          return X.warning(`上传文件大小不能超过 ${v.maxSize}KB`), !1;
      } else
        b("before-upload", n);
    };
    return () => a("span", null, [a(K, h(v, {
      onPreview: t,
      beforeUpload: y
    }), {
      ...u
    }), (v["list-type"] === "picture-card" || v["list-type"] === "picture") && x.value ? a(Q, {
      initialIndex: l.value,
      urlList: v["file-list"] ? v["file-list"].map((n) => n.url) : [],
      onClose: g
    }, null) : a("span", null, null)]);
  }
});
/*! Element Plus Icons Vue v2.1.0 */
var G = (_, v) => {
  let b = _.__vccOpts || _;
  for (let [u, x] of v)
    b[u] = x;
  return b;
}, be = {
  name: "ArrowUp"
}, se = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _e = /* @__PURE__ */ B(
  "path",
  {
    fill: "currentColor",
    d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
  },
  null,
  -1
  /* HOISTED */
), xe = [
  _e
];
function ye(_, v, b, u, x, l) {
  return F(), M("svg", se, xe);
}
var ge = /* @__PURE__ */ G(be, [["render", ye], ["__file", "arrow-up.vue"]]), Ee = {
  name: "Refresh"
}, Ve = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, $e = /* @__PURE__ */ B(
  "path",
  {
    fill: "currentColor",
    d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
  },
  null,
  -1
  /* HOISTED */
), pe = [
  $e
];
function ke(_, v, b, u, x, l) {
  return F(), M("svg", Ve, pe);
}
var Ce = /* @__PURE__ */ G(Ee, [["render", ke], ["__file", "refresh.vue"]]), Ie = {
  name: "Search"
}, Ue = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, De = /* @__PURE__ */ B(
  "path",
  {
    fill: "currentColor",
    d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
  },
  null,
  -1
  /* HOISTED */
), Ye = [
  De
];
function Se(_, v, b, u, x, l) {
  return F(), M("svg", Ue, Ye);
}
var me = /* @__PURE__ */ G(Ie, [["render", Se], ["__file", "search.vue"]]);
function Te(_) {
  return typeof _ == "function" || Object.prototype.toString.call(_) === "[object Object]" && !J(_);
}
const ze = /* @__PURE__ */ T({
  name: "FormGenerator",
  setup(_, {
    expose: v,
    attrs: b,
    slots: u,
    emit: x
  }) {
    const l = b, g = I(), t = {}, y = I(!1), n = isNaN(l.column) ? 4 : l.column >= 4 ? l.column : 4, w = {
      submit: () => {
        g.value.validate((V) => {
          V && x("submit");
        });
      },
      reset: () => {
        g.value.resetFields(), x("submit", "init");
      }
    };
    function E(V) {
      y.value = V, l.formOption.forEach(($, c) => {
        c > n - 2 && ($.show = V);
      });
    }
    return l.formOption.length >= n - 2 && (l == null ? void 0 : l.type) === "search" && E(!1), v(() => ({
      ...g.value,
      ...w,
      $refs: t
    })), () => {
      function V() {
        let e = {
          ...l
        };
        return delete e.model, delete e.formOption, a(Z, h({
          class: `FormGenerator ${(l == null ? void 0 : l.type) === "search" ? "FormGeneratorSearch" : ""} ${(l == null ? void 0 : l.type) === "dialog" ? "FormGeneratorDialog" : ""}`,
          inline: (l == null ? void 0 : l.type) === "search",
          "validate-on-rule-change": !1,
          "label-width": l.labelWidth || "auto"
        }, e, {
          ref: g
        }), {
          default: () => [l.formOption.map((s) => {
            let k;
            if (!(s.hasOwnProperty("show") && s.show === !1))
              return a(j, h(s.formItem, {
                key: s.formItem.prop
              }), Te(k = $(s)) ? k : {
                default: () => [k]
              });
          }), e.disabled === !0 || e.noFooter || !e.onSubmit ? "" : a(j, {
            class: `btnItem ${y.value ? "searchItem" : ""}`
          }, {
            default: () => u != null && u.default ? a(p, null, [u.default()[0].children]) : (l == null ? void 0 : l.type) === "search" ? c() : a(p, null, [(l == null ? void 0 : l.type) === "dialog" ? a(D, {
              onClick: (s) => {
                var C, Y;
                function k(U) {
                  return U.parentElement.classList.value.split(" ").includes("el-dialog") ? U.parentElement : k(U.parentElement);
                }
                (Y = (C = k(s.target).querySelector(".el-dialog__headerbtn")) == null ? void 0 : C.click) == null || Y.call(C);
              }
            }, {
              default: () => [S("取消")]
            }) : "", a(D, {
              type: "primary",
              onClick: w.submit
            }, {
              default: () => [S("确定")]
            })]),
            label: () => ""
          })]
        });
      }
      function $(e) {
        var s, k, C, Y, U, z, A, N, f;
        switch (t[e.formItem.prop] = I(), e.type) {
          case "input":
            return a(ve, h({
              ref: t[e.formItem.prop],
              clearable: !0,
              maxlength: 30
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => l.model[e.formItem.prop] = r
            }), {
              ...(s = e == null ? void 0 : e.control) == null ? void 0 : s.slot
            });
          case "input-number":
            return a(te, h({
              ref: t[e.formItem.prop],
              min: 0,
              max: 100
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => l.model[e.formItem.prop] = r
            }), null);
          case "select":
            return a(ce, h({
              ref: t[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => l.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r;
                return [(r = e == null ? void 0 : e.control) == null ? void 0 : r.option.map((d) => a(he, h(d, {
                  key: d.value
                }), {
                  ...d == null ? void 0 : d.slot
                }))];
              }
            });
          case "tree-select":
            return a(de, h({
              ref: t[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => l.model[e.formItem.prop] = r
            }), {
              ...(k = e == null ? void 0 : e.control) == null ? void 0 : k.slot
            });
          case "cascader":
            return a(re, h({
              ref: t[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => l.model[e.formItem.prop] = r
            }), {
              ...(C = e == null ? void 0 : e.control) == null ? void 0 : C.slot
            });
          case "radio":
            return a(q, h({
              ref: t[e.formItem.prop]
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
          case "radio-button":
            return a(q, h({
              ref: t[e.formItem.prop]
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
          case "checkbox":
            return a(W, h({
              ref: t[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => l.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r;
                return [(r = e == null ? void 0 : e.control) == null ? void 0 : r.option.map((d) => a(le, h(d, {
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
              ref: t[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => l.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r;
                return [(r = e == null ? void 0 : e.control) == null ? void 0 : r.option.map((d) => a(ee, h(d, {
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
            }[((Y = e == null ? void 0 : e.control) == null ? void 0 : Y.type) || "date"];
            return a(O, h({
              ref: t[e.formItem.prop],
              clearable: !0,
              format: P,
              "value-format": P
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => l.model[e.formItem.prop] = r
            }), {
              ...(U = e == null ? void 0 : e.control) == null ? void 0 : U.slot
            });
          case "time":
            return a(o, h({
              ref: t[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => l.model[e.formItem.prop] = r
            }), {
              ...(z = e == null ? void 0 : e.control) == null ? void 0 : z.slot
            });
          case "switch":
            return a(i, h({
              ref: t[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => l.model[e.formItem.prop] = r
            }), {
              ...(A = e == null ? void 0 : e.control) == null ? void 0 : A.slot
            });
          case "upload":
            return a(K, h({
              ref: t[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              "file-list": l.model[e.formItem.prop],
              "onUpdate:file-list": (r) => l.model[e.formItem.prop] = r
            }), {
              default: () => l.disabled ? "" : a(D, {
                type: "primary"
              }, {
                default: () => [S("上传文件")]
              }),
              ...(N = e == null ? void 0 : e.control) == null ? void 0 : N.slot
            });
          case "txt":
            return a(p, null, [l.model[e.formItem.prop]]);
          case "slot":
            return a(p, null, [(f = u[e.formItem.prop]) == null ? void 0 : f.call(u, {
              form: l.model,
              data: l.model[e.formItem.prop]
            })]);
        }
      }
      function c() {
        return a(p, null, [a(D, {
          type: "primary",
          onClick: w.submit,
          icon: me
        }, {
          default: () => [S("搜索")]
        }), a(D, {
          onClick: w.reset,
          icon: Ce
        }, {
          default: () => [S("重置")]
        }), l.type === "search" && l.formOption.length > n - 1 ? a(p, null, [a(D, {
          text: !0,
          type: "primary",
          class: `expandBtn ${y.value ? "up" : "down"}`,
          onClick: () => {
            E(!y.value);
          },
          icon: ge
        }, {
          default: () => [y.value ? "收起" : "展开"]
        })]) : ""]);
      }
      return V();
    };
  }
}), Ae = /* @__PURE__ */ T({
  name: "TableGenerator",
  setup(_, {
    expose: v,
    attrs: b,
    slots: u,
    emit: x
  }) {
    const l = b;
    let g, t = new Date().getTime(), y = I(!1), n = I(0);
    return L(() => l.loading, (w) => {
      w ? R(() => {
        g = ne.service({
          target: `.el-table-${t}`
        });
      }) : g == null || g.close();
    }, {
      immediate: !0
    }), L(() => l.data, (w) => {
      if (!(u != null && u.operation) || w.length === 0)
        return y.value = !0;
      y.value = !1, R(() => {
        let E = 0;
        document.querySelectorAll(".content-wrapper-width").forEach((V) => {
          V.offsetWidth > E && (E = V.offsetWidth);
        }), n.value = E > 0 ? E + 32 : "auto", y.value = !0;
      });
    }, {
      immediate: !0
    }), () => {
      function w($) {
        return $.map((c) => ["selection", "index", "expand"].includes(c.type) ? a(m, h({
          type: c.type
        }, c), {
          ...c == null ? void 0 : c.slot
        }) : a(m, h({
          "show-overflow-tooltip": !0,
          align: "left"
        }, c), {
          default: (e) => {
            var s;
            return c.children && Array.isArray(c.children) && c.children.length > 0 ? w(c.children) : u[c.prop] ? a(p, null, [(s = u[c.prop]) == null ? void 0 : s.call(u, {
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
      function E() {
        return a(H, h({
          stripe: !0
        }, l, {
          class: `TableGenerator el-table-${t}`
        }), {
          default: () => [w(l.tableOption), u != null && u.operation ? a(m, {
            fixed: "right",
            label: "操作",
            width: n.value
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
          empty: () => u != null && u.empty ? u == null ? void 0 : u.empty() : a(we, {
            description: "暂无数据"
          }, null),
          append: () => u != null && u.append ? u == null ? void 0 : u.append() : ""
        });
      }
      function V() {
        return a(H, h(b, {
          class: `TableGenerator el-table-${t}`
        }), {
          default: () => [a(m, {
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
      return a(p, null, [y.value ? E() : V()]);
    };
  }
});
export {
  ze as FormGenerator,
  Ge as IUpload,
  Ae as TableGenerator
};
