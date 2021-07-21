import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'


//vue构造函数
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options) //初始化
}

initMixin(Vue)  // 实现init方法
stateMixin(Vue)  // $set、$del、$watch
eventsMixin(Vue)  // $on/$once/$off/$emit
lifecycleMixin(Vue)  //_update
renderMixin(Vue)  // _render

export default Vue
