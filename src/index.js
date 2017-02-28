import Lazy from './lazy'
import LazyComponent from './lazy-component'
import { assign } from './util'

export default {
    install (Vue, options = {}) {
        const LazyClass = Lazy(Vue)
        const lazy = new LazyClass(options)

        Vue.prototype.$Lazyload = lazy
        Vue.component('lazy-component', LazyComponent(lazy))

        Vue.directive('lazy', {
            bind: lazy.add.bind(lazy),
            // update: lazy.update.bind(lazy),
            componentUpdated: lazy.lazyLoadHandler.bind(lazy),
            unbind : lazy.remove.bind(lazy)
        })
    }
}
