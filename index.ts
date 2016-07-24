/// <reference path="typings/tsd.d.ts" />
/// <reference path="src/component/index.d.ts" />

import * as _ from 'lodash';
import ejs = require('ejs');
import chalk = require('chalk');
import { Generator } from './src/generator';

const generator = new Generator({
  info: 'app',
  loader: '加载器配置',
  compiler:'编译器配置'
});


generator.init();
generator.loadTemplate('模板路径');
generator.start();