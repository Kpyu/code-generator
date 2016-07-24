import { Loader } from './Component/Loader';
import { Compiler } from './Component/Compiler';

export class Generator{
  public loader: Object;
  public compiler: Object;
  constructor(config) {
    this.loader = new Loader(config.loader);
    this.compiler = new Compiler(config.loader);
  }
  init() {
    console.log('生成器初始化完成');
  }
  loadTemplate(path: string) {
    console.log('模板加载成功');
  }
  compile() {
    console.log('编译模板');
  }
  start() {
    console.log('输出编译结果');
  }
}