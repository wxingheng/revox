/**
 * @fileoverview 待办事项列表的子组件实现
 * @module SubComponent
 */

import React, { useState } from "react";
import { useModuleContext } from "../../context";
import { ModuleContextType } from "../../types";
import "./index.less";

/**
 * 待办事项列表组件
 * @component SubComponent
 * @description 实现了待办事项的添加、删除、状态切换等功能
 *
 * 功能特点：
 * 1. 支持输入新待办事项
 * 2. 支持Enter键快速添加
 * 3. 可切换待办事项完成状态
 * 4. 支持删除待办事项
 * 5. 自动过滤空白输入
 *
 * 样式特点：
 * 1. 居中布局，最大宽度800px
 * 2. 完成项目显示删除线
 * 3. 使用不同颜色区分状态
 *
 * @example
 * ```jsx
 * <SubComponent />
 * ```
 */
export const SubComponent: React.FC = () => {
  /** 从Context获取的待办事项数据和操作方法 */
  const { todos, addTodo, toggleTodo, removeTodo }: ModuleContextType = useModuleContext();

  /** 新待办事项的输入值状态管理 */
  const [newTodo, setNewTodo] = useState("");

  /**
   * 处理添加待办事项的方法
   * @function handleAdd
   * @description 添加非空待办事项并清空输入框
   */
  const handleAdd = () => {
    if (newTodo.trim()) {
      addTodo(newTodo.trim());
      setNewTodo("");
    }
  };

  /**
   * 渲染待办事项列表界面
   * @returns {React.ReactElement} 渲染的列表界面
   */
  return (
    <div className="_example_sub_component" style={{ padding: 20, width: 800, margin: "0 auto" }}>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        placeholder="请输入待办事项"
      />
      <button onClick={handleAdd}>添加</button>
      <div>
        {todos.map((todo) => (
          <div
            style={{
              padding: "10px 0",
              borderBottom: "1px solid #f0f0f0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button style={{ color: todo.completed ? "#52c41a" : "#bfbfbf" }} onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? "已完成" : "未完成"}
            </button>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "#bfbfbf" : "#000",
              }}
            >
              {todo.text}
            </span>
            <button style={{ marginLeft: 10, color: "#f5222d", float: "right" }} onClick={() => removeTodo(todo.id)}>
              删除
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
