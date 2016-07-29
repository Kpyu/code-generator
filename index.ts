/// <reference path="typings/tsd.d.ts" />
/// <reference path="src/component/index.d.ts" />

// 'use strict';
// const meow = require('meow');
// const foo = require('.');

// const cli = meow(`
//     Usage
//       $ foo <input>

//     Options
//       --rainbow, -r  Include a rainbow

//     Examples
//       $ foo unicorns --rainbow
//       🌈 unicorns 🌈
// `, {
//     alias: {
//         r: 'rainbow'
//     }
// });
import * as _ from 'lodash';
import ejs = require('ejs');
import chalk = require('chalk');
import { Generator } from './src/generator';

const generator = new Generator({
  info: 'app',
  loader: '加载器配置',
  compiler:'编译器配置'
});
const path = 'src/Template/jquery'
//检查更新
// generator.checkUpdate();
generator.init();
generator.loadTemplate(path);
generator.start();