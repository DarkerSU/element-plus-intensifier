import { defineConfig, } from 'vitepress';
import { componentPreview,containerPreview} from '@vitepress-demo-preview/plugin'

export default defineConfig({
    title: 'Skytech Design',
    description: '基于 Element-Plus 的组件增强器',
    head: [
        ['meta', { name: 'theme-color', content: '#646cff' }],
    ],
    themeConfig: {
        nav: Nav(),
        sidebar: Sidebar(),
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present SkyTech Design'
        }
    },
    markdown:{
        theme:{
            light:'material-theme-lighter',
            dark:'material-theme-darker',
        },
        // lineNumbers:true,
        config(md) {
            md.use(containerPreview);
            md.use(componentPreview);
        },
    }
})


// Header 菜单
function Nav() {
    return [
        { text: '指南', link: '/doc/guide/', activeMatch: '^/guide/' },
        { text: '组件', link: '/doc/components/', activeMatch: '^/components/' },
        { text: '快捷工具', link: '/doc/tools/', activeMatch: '^/tools/' },
        { text: '关于我们', link: '/doc/about/', activeMatch: '^/about/' }
    ]
}


// Sidebar 导航
function Sidebar() {
    return {
        '/doc/guide/': [
            {
                text: '基础', items: [
                    { text: '背景', link: '/doc/guide/background' },
                    { text: '简介', link: '/doc/guide/resume' },
                    { text: '使用', link: '/doc/guide/use' }
                ]
            }
        ],
        '/doc/components/': [
            {
                text: '表单类组件', items: [
                    { text: 'FormGenerator 表单生成器', link: '/doc/components/FormGenerator' },
                ],
            },
            {
                text: '表单格类组件', items: [
                    { text: 'TableGenerator 表单生成器', link: '/doc/components/TableGenerator' },
                ],
            },
            {
                text: '其他', items: [
                    { text: 'SUpload 上传组件', link: '/doc/components/SUpload' }
                ],
            },
        ],
        '/doc/tools/': [
            {
                text: '快捷工具', items: [
                    { text: '常用正则集合', link: '/doc/tools/RegExp' }
                ]
            },
        ],
        '/doc/about/': [
            {
                text: '关于我们', link: '/doc/about', items: []
            }
        ]
    }
}

