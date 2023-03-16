
/**
 * @description: 表格生成配置
 * @param data 表格数据
 * @param tableOption 表格生成配置
 * @param loading 是否加载动画
 */
export declare interface tableAttrs {
    [key: string]: any
    data: Record<string, any>[]
    tableOption: tableOption[]
    loading?: boolean
  }
  
  /**
   * @description: 表格生成配置
   * @param prop 表格列key
   * @param label 表格列名称
   * @param type 列的类型
   */
  export declare interface tableOption {
    [key: string]: any
    type?: 'selection' | 'index' | 'expand'
    prop?: string
    label?: string
    slot?: Record<string, ((arg0: any) => JSX.Element | string | void) | string>
    children?: tableOption[]
  }