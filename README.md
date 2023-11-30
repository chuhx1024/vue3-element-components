## 一.搭建`monorepo`环境

> 使用`pnpm`安装包速度快，磁盘空间利用率高效，使用`pnpm`可以快速建立`monorepo`，so ~ 这里我们使用`pnpm` `workspace`来实现`monorepo`

```bash
npm install pnpm -g # 全局安装pnpm
pnpm init # 初始化package.json配置文件
pnpm install vue@next typescript -D 全局下添加依赖
npx tsc --init # 初始化ts配置文件 
```

> 使用pnpm必须要建立`.npmrc`文件，`shamefully-hoist = true`，否则安装的模块无法放置到`node_modules`目录下

```ts
{
  "compilerOptions": {
    "module": "ESNext", // 打包模块类型ESNext
    "declaration": false, // 默认不要声明文件 
    "noImplicitAny": false, // 支持类型不标注可以默认any
    "removeComments": true, // 删除注释
    "moduleResolution": "node", // 按照node模块来解析
    "esModuleInterop": true, // 支持es6,commonjs模块
    "jsx": "preserve", // jsx 不转
    "noLib": false, // 不处理类库
    "target": "es6", // 遵循es6版本
    "sourceMap": true,
    "lib": [ // 编译时用的库
      "ESNext",
      "DOM"
    ],
    "allowSyntheticDefaultImports": true, // 允许没有导出的模块中导入
    "experimentalDecorators": true, // 装饰器语法
    "forceConsistentCasingInFileNames": true, // 强制区分大小写
    "resolveJsonModule": true, // 解析json模块
    "strict": true, // 是否启动严格模式
    "skipLibCheck": true // 跳过类库检测
  },
  "exclude": [ // 排除掉哪些类库
    "node_modules",
    "**/__tests__",
    "dist/**"
  ]
}
```

## 在项目根目录下建立`pnpm-workspace.yaml`配置文件

```yaml
packages:
  - packages/** # 存放编写组件的
  - docs # 存放文档的
  - play # 测试组件的
```
## 创建包

```bash
cd components && pnpm init #   修改 "name": "@chu-plus/components", 
cd utils && pnpm init # 修改 "name": "@chu-plus/utils",
cd theme-chalk && pnpm init # 修改 "name": "@chu-plus/theme-chalk",
```

## 实现项目内 包的引用

> 在根模块下添加依赖

```
pnpm install @z-plus/components -w
pnpm install @z-plus/theme-chalk -w
pnpm install @z-plus/utils -w
```
> 这样就可以以第三方模块的方式  引用我们的模块了




