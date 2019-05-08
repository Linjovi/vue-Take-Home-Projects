import request from "@/utils/request";
import querystring from "querystring";

export function getWeather(data) {
  const _params = querystring.stringify(data);
  let url = "https://fcc-weather-api.glitch.me/api/current?" + _params;
  
  // var callbackName = "jsonp_callback_" + Math.round(100000 * Math.random());
  // window[callbackName] = function(data) {
  //   delete window[callbackName];
  //   document.body.removeChild(script);
  //   callback(data);
  // };

  // var script = document.createElement("script");
  // script.src =
  //   url + (url.indexOf("?") >= 0 ? "&" : "?") + "callback=" + callbackName;
  // document.body.appendChild(script);
  return request({
    url: url,
    method: "get"
  });
}
