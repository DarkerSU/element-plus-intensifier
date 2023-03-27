import IUpload from './components/IUpload'
import FormGenerator from './components/FormGenerator'
import TableGenerator from './components/TableGenerator'
import { withInstall } from './utils/install';
import './style/index.scss'
const Components = [
    IUpload,
    FormGenerator,
    TableGenerator
]
export { IUpload, FormGenerator, TableGenerator }

// 定义install方法
export default function (app: any) {
    withInstall(Components, app)
}


