import ajax from './ajax.js'
import format from './format.js'
import localData from './local_data.js'

var packages = {}

packages.install = function(Vue, opts = {}) {
    //防止多次安装
    if (this.install.installed) return;

    Vue.prototype.mx_ajax = ajax;
    Vue.prototype.mx_format = format;
    Vue.prototype.mx_localData = localData;
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default packages;
