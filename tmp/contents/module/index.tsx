/**
 * @fileoverview 示例模块的入口文件
 * @module ExampleModule
 */

import React from "react";
import { ModuleProvider } from "./context";
import { ModuleProps } from "./types";
import { SubComponent } from "./components";
import "./index.less";

/**
 * 示例模块主组件 - 待办事项管理器
 * @component ExampleModule
 * @param {ModuleProps} props - 组件属性
 * @param {string} [props.title="待办事项列表"] - 模块标题
 * @returns {React.ReactElement} 渲染的模块组件
 *
 * @example
 * ```jsx
 * <ExampleModule title="我的待办事项" />
 * ```
 */
const ExampleModule: React.FC<ModuleProps> = ({ title = "待办事项列表" }) => {
  return (
    <ModuleProvider>
      <div
        className="_example_module"
        style={{
          padding: 20,
          fontSize: 24,
          fontWeight: "bold",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        {title}
      </div>
      <SubComponent />
    </ModuleProvider>
  );
};

export default ExampleModule;
