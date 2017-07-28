/**
 * 发送ajax请求的
 * get,post,file
 *
 * author: renzhenguo
 */
import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.http.options.headers = {
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
};

Vue.http.options.emulateJSON = true;

// interceptor json格式化
Vue.http.interceptors.push((request, next) => {
  next((res) => {
    if (typeof(res.data) != 'string') {
      return res;
    }

    var json = {};
    try {
      json = JSON.parse(res.data);
    } catch (e) {
      json = {code: 500, message: '网络异常!'}
    }

    res.data = json;
    return res;
  })
});

Vue.http.interceptors.push((request, next) => {

  next((res) => {
    if (typeof(Vue.hideLoading) == 'function') {
      Vue.hideLoading();
    }

    return res;
  })
});

//处理参数
let formatParams = function (data) {
  const arr = [];

  for (let name of Object.keys(data)) {
    arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
  }

  return arr.join('&');
}

//post方法
let post = function(url, data) {
  return Vue.http.post(url, data).then(r => {
    if (r.data && r.data.code == 200) {
      return r.data;
    } else {
      return Promise.reject(r.data);
    }
  })
}

//get方法
let get = function(url, data) {
  if (typeof(data) == 'object' && data !== null) {
    url = url + '&' + formatParams(data);
  }

  return Vue.http.get(url).then(r => {
    if (r.data && r.data.code == 200) {
      return r.data;
    } else {
      return Promise.reject(r.data);
    }
  })
}

/**
 * 异步上传文件
 * @type {Object}
 */
let xhr4File = function() {
  this.xhr = new XMLHttpRequest();
}
xhr4File.prototype = {
  init(cfg) {
    this.cfg = cfg;
  },

  send(file) {
    this.xhr = new XMLHttpRequest();
    this.xhr.open('post', this.cfg.url, true);
    this.bindEvents();
    this.xhr.send(file);
  },

  bindEvents() {
    this.progress();
    this.load();
  },

  progress() {
    var onProgress = this.cfg.onProgress;

    if (onProgress) {
      this.xhr.upload.addEventListener('progress', function(e) {
        if (e.lengthComputable) {
          var p = parseInt(e.loaded / e.total * 100);
          if (p > 15 && p < 100) {
            onProgress(p);
          }
        }
      }, false);
    }
  },

  load() {
    var xhr = this.xhr,
      that = this,
      onLoad = this.cfg.onLoad;

    xhr.addEventListener('load', function(r) {
      if (this.readyState == 4 && this.status == 200) {
        try {
          var json = JSON.parse(xhr.responseText);
        } catch (e) {
          var json = {
            'code': 500,
            message: '服务器异常，请重试'
          };
        }

        if (json.code == 200) {
          onLoad && onLoad(json);
        } else {
          that.error(json);
        }
      } else {
        that.error({
          message: '网络异常，请重试'
        });
      }
    })
  },

  error(msg) {
    var onError = this.cfg.onError;

    onError && onError(msg);
  }
}

let ajax = {
  get: get,
  post: post,
  xhr4File: xhr4File,
}
export default ajax
