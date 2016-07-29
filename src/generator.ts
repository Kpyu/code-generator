import { Loader } from './Component/Loader';
import { Compiler } from './Component/Compiler';
import { cliList} from './Util'

export class Generator{
  public loader: any;
  public compiler: any;
  constructor(config) {
    this.loader = new Loader(config.loader);
    this.compiler = new Compiler(config.loader);
  }
  init() {
    console.log('生成器初始化完成');
  }
  checkUpdate() {
    console.log('生成器检查更新');
  }
  loadTemplate(path: string) {
    console.log('模板加载成功');
    this.loader.loadConfig(path);
  }
  compile() {
    console.log('编译模板');
  }
  start() {
    console.log('输出编译结果');
  }
}