/**
 * 本地数据存放的方法
 *
 * cookie localStorage
 *
 * author: renzhenguo
 */
let data = {}

//添加cookie
data.addCookie = function(objName, objValue, objHours){
  var str = objName + "=" + encodeURIComponent(objValue);
  if (objHours > 0) {
    //为时不设定过期时间，浏览器关闭时cookie自动消失
    var date = new Date();

    var ms = objHours * 3600 * 1000;

    date.setTime(date.getTime() + ms);

    str += "; expires=" + date.toGMTString()+";path=/";
  }
  document.cookie = str;
}

export default data;
