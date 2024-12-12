/**
 * @fileoverview 模块相关的类型定义
 * @module ModuleTypes
 */

/**
 * 模块的属性接口定义
 * @interface ModuleProps
 * @property {string} [title] - 可选的模块标题
 */
export interface ModuleProps {
  /** 模块标题，可选 */
  title?: string;
}

/**
 * 待办事项数据结构
 * @interface TodoItem
 * @property {number} id - 待办事项的唯一标识
 * @property {string} text - 待办事项的内容
 * @property {boolean} completed - 待办事项的完成状态
 */
export interface TodoItem {
  /** 唯一标识ID */
  id: number;
  /** 待办事项内容 */
  text: string;
  /** 完成状态 */
  completed: boolean;
}

/**
 * 模块Context类型定义
 * @interface ModuleContextType
 * @property {TodoItem[]} todos - 待办事项列表
 * @property {Function} addTodo - 添加待办事项的方法
 * @property {Function} toggleTodo - 切换待办事项状态的方法
 * @property {Function} removeTodo - 删除待办事项的方法
 */
export interface ModuleContextType {
  /** 待办事项列表 */
  todos: TodoItem[];
  /** 添加待办事项方法 */
  addTodo: (text: string) => void;
  /** 切换待办事项状态方法 */
  toggleTodo: (id: number) => void;
  /** 删除待办事项方法 */
  removeTodo: (id: number) => void;
}
