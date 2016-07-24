  export interface CompilerInterface {
    init(Object)
  }
  /**
   * Compiler
   */
  export class Compiler implements CompilerInterface{
    constructor(config) {
    }
    init(config: Object) {
      console.log('初始化编译器');
    }
  }