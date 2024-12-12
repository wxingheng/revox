/**
 * @fileoverview 模块的Context管理
 * @module ModuleContext
 */

import React, { createContext, useContext } from "react";
import { ModuleContextType } from "../types";
import { useModuleFlux } from "../hooks";

/**
 * 模块Context实例
 * @constant {React.Context<ModuleContextType>}
 * @default undefined
 */
const ModuleContext = createContext<ModuleContextType | undefined>(undefined);

/**
 * Context Provider组件 - 提供全局状态管理
 * @component ModuleProvider
 * @param {Object} props - 组件属性
 * @param {React.ReactNode} props.children - 子组件
 *
 * @example
 * ```jsx
 * <ModuleProvider>
 *   <ChildComponent />
 * </ModuleProvider>
 * ```
 */
export const ModuleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1、初始化数据
  const { todos, addTodo, toggleTodo, removeTodo } = useModuleFlux();

  // 2、 使用 Provider 组件包裹子组件，并传递 value
  return <ModuleContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>{children}</ModuleContext.Provider>;
};

/**
 * 模块Context的自定义Hook
 * @hook useModuleContext
 * @throws {Error} 如果在Provider外部使用会抛出错误
 * @returns {ModuleContextType} Context中存储的状态和方法
 *
 * @example
 * ```tsx
 * const { todos, addTodo } = useModuleContext();
 * ```
 */
export const useModuleContext = () => {
  // 3、 使用 useContext 获取 Context 对象的值
  const context = useContext(ModuleContext);
  if (!context) {
    throw new Error("useModuleContext 必须在 ModuleProvider 中使用");
  }
  return context;
};
