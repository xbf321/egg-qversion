# egg-qversion

前后端版本号关联 for egg。适用于 ykit 打包的产物。

## Install

```bash
$ npm i egg-qversion --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.qversion = {
  enable: true,
  package: 'egg-qversion',
};
```

## Configuration

一个后端关联一个前端

```js
// {app_root}/config/config.default.js
exports.qversion = {
    default: path.join(appInfo.baseDir, '/ver/versions.mapping'),
};
```

一个后端关联多个前端

```js
// {app_root}/config/config.default.js
exports.qversion = {
    project1: path.join(appInfo.baseDir, '/ver/versions1.mapping'),
    project2: path.join(appInfo.baseDir, '/ver/versions2.mapping'),
    ....
    default: path.join(appInfo.baseDir, '/ver/versions.mapping'),
};
````
> **注意。至少包含一个 default 配置**

see [config/config.default.js](config/config.default.js) for more detail.

## Example（在 view 中使用）

```
<script src="lib@<%- ctx.loadVersion('lib.js') %>.js"></script>
```

或者

```
<script src="lib@<%- ctx.loadVersion('project1', 'lib.js') %>.js"></script>v
```

第一个参数依赖配置的 key ，比如上面 project1 项目，会去这个路径下的 version.mapping 文件中查找 lib.js。

> 如果当前是 local 环境,返回 「dev」 字符.  eg: lib@dev.js .

## versions.mapping 样例

```
page/profession/index.js#2da6b0bfba714a5b16be
chunk.json#ca2124c06d711bc79185888c38c39cb9
page/profession/index.css#6acbd8d81e854f0d0d860be2eadf0d29
lib.js#76388506d770d59bbb5156d0b3a0f9ae
```
## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
