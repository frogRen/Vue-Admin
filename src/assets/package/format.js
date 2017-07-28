/**
 * 数据格式化的方法
 *
 * author: renzhenguo
 */
let format = {}

//url参数获取
format.urlParams = function(url) {
    var result = {};
    url = url.substr(url.indexOf("?") + 1);
    var args = url.split("&");


    for (var i = 0, len = args.length; i < len; i++) {
        var arg = args[i];
        var item = arg.split('=');
        result[item[0]] = item[1];
    }
    return result;
}

export default format
