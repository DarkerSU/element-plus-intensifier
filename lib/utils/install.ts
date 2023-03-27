import { Component } from "vue"

// 注册所有的组件
export function withInstall(components: Component[], app: any) {
    components.forEach((item: Component) => {
        app.component(item.name, item)
    })
}