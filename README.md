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

```js
// {app_root}/config/config.default.js
exports.qversion = {
    file: path.join(appInfo.baseDir, '/ver/versions.mapping'),
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

在 view 中使用。

```
<script src="lib@<%- ctx.loadVersion('lib.js') %>.js"></script>
```

> 如果当前是 local 环境,返回 「dev」 字符.  eg: lib@dev.js .

**versions.mapping** 样例

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
