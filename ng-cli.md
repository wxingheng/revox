<!--
 * @Author: wxingheng
 * @Date: 2024-12-11 14:38:54
 * @LastEditTime: 2024-12-11 14:43:29
 * @LastEditors: wxingheng
 * @Description: 
 * @FilePath: /Revox/ng-cli.md
-->
## angular cli 常用命令

### 创建项目

```bash
ng new my-app
```

### 启动项目

```bash
ng serve
```

### 生成代码结构

```bash
ng generate <schematic> <name>
```

```
ng generate component <component-name>   # 生成组件
ng generate directive <directive-name>   # 生成指令
ng generate service <service-name>       # 生成服务
ng generate module <module-name>         # 生成模块
ng generate pipe <pipe-name>             # 生成管道
ng generate guard <guard-name>           # 生成路由守卫
```

### 简写
```
ng g c <component-name>   # 生成组件
ng g s <service-name>     # 生成服务
```

### 构建应用

```bash
ng build
```

### 添加功能/库

```bash
ng add <feature>
```

```
ng add @angular/material
```

### 更新依赖

```bash
ng update
```
