/// <reference path="../../typings/tsd.d.ts" />
import fs = require('fs');
import path = require('path');
export class Loader {
  constructor(config:Object) {
    this.init(config);
  }
 loadConfig(pathdir:string) {
    console.log(pathdir);
    fs.readdir(pathdir, function (err, files) {
      console.log(files);
    });
    const config = JSON.stringify(fs.readFileSync(path.resolve(pathdir, 'config.json')).toString());
    const starter = fs.readFileSync(path.resolve(pathdir, 'index.js'))
  }
  init(config: Object) {
    console.log('初始化加载器');
  }
}
