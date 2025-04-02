
const { json } = require('express');
var getsession = require('../util/session')
function getsign(e) {
  function t(e, t) {
    return e << t | e >>> 32 - t
  }
  function n(e, t) {
    var n, r, o, i, a;
    return o = 2147483648 & e,
      i = 2147483648 & t,
      a = (1073741823 & e) + (1073741823 & t),
      (n = 1073741824 & e) & (r = 1073741824 & t) ? 2147483648 ^ a ^ o ^ i : n | r ? 1073741824 & a ? 3221225472 ^ a ^ o ^ i : 1073741824 ^ a ^ o ^ i : a ^ o ^ i
  }
  function r(e, r, o, i, a, c, u) {
    return e = n(e, n(n(function (e, t, n) {
      return e & t | ~e & n
    }(r, o, i), a), u)),
      n(t(e, c), r)
  }
  function o(e, r, o, i, a, c, u) {
    return e = n(e, n(n(function (e, t, n) {
      return e & n | t & ~n
    }(r, o, i), a), u)),
      n(t(e, c), r)
  }
  function i(e, r, o, i, a, c, u) {
    return e = n(e, n(n(function (e, t, n) {
      return e ^ t ^ n
    }(r, o, i), a), u)),
      n(t(e, c), r)
  }
  function a(e, r, o, i, a, c, u) {
    return e = n(e, n(n(function (e, t, n) {
      return t ^ (e | ~n)
    }(r, o, i), a), u)),
      n(t(e, c), r)
  }
  function c(e) {
    var t, n = "", r = "";
    for (t = 0; 3 >= t; t++)
      n += (r = "0" + (e >>> 8 * t & 255).toString(16)).substr(r.length - 2, 2);
    return n
  }
  var u, s, l, f, p, d, h, m, v, y;
  for (y = function (e) {
    for (var t, n = e.length, r = n + 8, o = 16 * ((r - r % 64) / 64 + 1), i = new Array(o - 1), a = 0, c = 0; n > c;)
      a = c % 4 * 8,
        i[t = (c - c % 4) / 4] = i[t] | e.charCodeAt(c) << a,
        c++;
    return a = c % 4 * 8,
      i[t = (c - c % 4) / 4] = i[t] | 128 << a,
      i[o - 2] = n << 3,
      i[o - 1] = n >>> 29,
      i
  }(e = function (e) {
    e = e.replace(/\r\n/g, "\n");
    for (var t = "", n = 0; n < e.length; n++) {
      var r = e.charCodeAt(n);
      128 > r ? t += String.fromCharCode(r) : r > 127 && 2048 > r ? (t += String.fromCharCode(r >> 6 | 192),
        t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224),
          t += String.fromCharCode(r >> 6 & 63 | 128),
          t += String.fromCharCode(63 & r | 128))
    }
    return t
  }(e)),
    d = 1732584193,
    h = 4023233417,
    m = 2562383102,
    v = 271733878,
    u = 0; u < y.length; u += 16)
    s = d,
      l = h,
      f = m,
      p = v,
      d = r(d, h, m, v, y[u + 0], 7, 3614090360),
      v = r(v, d, h, m, y[u + 1], 12, 3905402710),
      m = r(m, v, d, h, y[u + 2], 17, 606105819),
      h = r(h, m, v, d, y[u + 3], 22, 3250441966),
      d = r(d, h, m, v, y[u + 4], 7, 4118548399),
      v = r(v, d, h, m, y[u + 5], 12, 1200080426),
      m = r(m, v, d, h, y[u + 6], 17, 2821735955),
      h = r(h, m, v, d, y[u + 7], 22, 4249261313),
      d = r(d, h, m, v, y[u + 8], 7, 1770035416),
      v = r(v, d, h, m, y[u + 9], 12, 2336552879),
      m = r(m, v, d, h, y[u + 10], 17, 4294925233),
      h = r(h, m, v, d, y[u + 11], 22, 2304563134),
      d = r(d, h, m, v, y[u + 12], 7, 1804603682),
      v = r(v, d, h, m, y[u + 13], 12, 4254626195),
      m = r(m, v, d, h, y[u + 14], 17, 2792965006),
      d = o(d, h = r(h, m, v, d, y[u + 15], 22, 1236535329), m, v, y[u + 1], 5, 4129170786),
      v = o(v, d, h, m, y[u + 6], 9, 3225465664),
      m = o(m, v, d, h, y[u + 11], 14, 643717713),
      h = o(h, m, v, d, y[u + 0], 20, 3921069994),
      d = o(d, h, m, v, y[u + 5], 5, 3593408605),
      v = o(v, d, h, m, y[u + 10], 9, 38016083),
      m = o(m, v, d, h, y[u + 15], 14, 3634488961),
      h = o(h, m, v, d, y[u + 4], 20, 3889429448),
      d = o(d, h, m, v, y[u + 9], 5, 568446438),
      v = o(v, d, h, m, y[u + 14], 9, 3275163606),
      m = o(m, v, d, h, y[u + 3], 14, 4107603335),
      h = o(h, m, v, d, y[u + 8], 20, 1163531501),
      d = o(d, h, m, v, y[u + 13], 5, 2850285829),
      v = o(v, d, h, m, y[u + 2], 9, 4243563512),
      m = o(m, v, d, h, y[u + 7], 14, 1735328473),
      d = i(d, h = o(h, m, v, d, y[u + 12], 20, 2368359562), m, v, y[u + 5], 4, 4294588738),
      v = i(v, d, h, m, y[u + 8], 11, 2272392833),
      m = i(m, v, d, h, y[u + 11], 16, 1839030562),
      h = i(h, m, v, d, y[u + 14], 23, 4259657740),
      d = i(d, h, m, v, y[u + 1], 4, 2763975236),
      v = i(v, d, h, m, y[u + 4], 11, 1272893353),
      m = i(m, v, d, h, y[u + 7], 16, 4139469664),
      h = i(h, m, v, d, y[u + 10], 23, 3200236656),
      d = i(d, h, m, v, y[u + 13], 4, 681279174),
      v = i(v, d, h, m, y[u + 0], 11, 3936430074),
      m = i(m, v, d, h, y[u + 3], 16, 3572445317),
      h = i(h, m, v, d, y[u + 6], 23, 76029189),
      d = i(d, h, m, v, y[u + 9], 4, 3654602809),
      v = i(v, d, h, m, y[u + 12], 11, 3873151461),
      m = i(m, v, d, h, y[u + 15], 16, 530742520),
      d = a(d, h = i(h, m, v, d, y[u + 2], 23, 3299628645), m, v, y[u + 0], 6, 4096336452),
      v = a(v, d, h, m, y[u + 7], 10, 1126891415),
      m = a(m, v, d, h, y[u + 14], 15, 2878612391),
      h = a(h, m, v, d, y[u + 5], 21, 4237533241),
      d = a(d, h, m, v, y[u + 12], 6, 1700485571),
      v = a(v, d, h, m, y[u + 3], 10, 2399980690),
      m = a(m, v, d, h, y[u + 10], 15, 4293915773),
      h = a(h, m, v, d, y[u + 1], 21, 2240044497),
      d = a(d, h, m, v, y[u + 8], 6, 1873313359),
      v = a(v, d, h, m, y[u + 15], 10, 4264355552),
      m = a(m, v, d, h, y[u + 6], 15, 2734768916),
      h = a(h, m, v, d, y[u + 13], 21, 1309151649),
      d = a(d, h, m, v, y[u + 4], 6, 4149444226),
      v = a(v, d, h, m, y[u + 11], 10, 3174756917),
      m = a(m, v, d, h, y[u + 2], 15, 718787259),
      h = a(h, m, v, d, y[u + 9], 21, 3951481745),
      d = n(d, s),
      h = n(h, l),
      m = n(m, f),
      v = n(v, p);
  return (c(d) + c(h) + c(m) + c(v)).toLowerCase()
}

var n = '{}'
var c = "12574478"
var u = (new Date).getTime()
function get(token, n) {
  var sign = getsign(token + "&" + u + "&" + c + "&" + n)
  return ({ sign: sign, t: u })
}
// var model = "448871940350"
// var fileId = "018d-7d2137be-a1e6ef30-8cf85bd9-106c"
// var moive_title = "tb162778707763468190"  //视频标题 需要进行url 编码
// var moive_内容 = "tb162778707763468190286%E9%80%8F%E6%98%8E%E6%97%A0%E7%97%95%E5%8F%8C%E9%9D%A2%E8%83%B6%E8%B4%B4%EF%BC%8C%E7%94%A8%E5%AE%83%E6%9D%A5%E8%B4%B4%E5%AF%B9%E8%81%94%E4%B8%8D%E7%95%99%E7%97%95%EF%BC%8C%E5%AE%B6%E9%87%8C%E5%90%84%E7%A7%8D%E6%91%86%E4%BB%B6%E9%83%BD%E5%8F%AF%E4%BB%A5%E8%B4%B4%E6%97%A0%E7%97%95%E5%8F%8C%E9%9D%A2%E8%83%B6%E8%B4%B4%E5%8F%8C%E9%9D%A2%E8%83%B6%E8%B4%B4%E6%96%B0%E5%B9%B4%E9%80%8F%E6%98%8E%E6%97%A0%E7%97%95%E8%B4%B4%E6%AF%8F%E5%A4%A9%E5%A5%BD%E7%89%A9%E5%88%86%E4%BA%AB"
// var requestId = "0182-8887f7ae-a1b3f3af-76774085-56e2"
// //将视频内容 进行url 编码
// var 封面picurl = "https://img.alicdn.com/imgextra/i4/6000000002774/O1CN01pyaqUW1WMXbt7OweP_!!6000000002774-0-tmap.jpg"
// var 商品id = "762695729909"
// var 话题id = ""
// if (话题id !== "") {
//   话题id = `\"topicId\":${话题id}`
// }
// else {
//   话题id = ""
// }
// var time = new Date().getTime()
// // console.log(time);
// var 商品title = '厨房美缝贴灶台防水封边水槽胶洗碗池马桶边缘水池防霉缝隙条燃气' //不用url 编码
// var publishSession = "0bc6a9f392554623bb8b96be03915974"
// var id = "4046702495" //调用发布器后得到的id
// var 商品url = ""
// var 商品picurl = "https://gw2.alicdn.com/tfscom/tuitui/i2/2206742293533/O1CN01ankpiY1byADb0C0qH_!!2206742293533.jpg"
// var 商品价格 = '27.80'
// var session = "963e0890-57e1-11ee-a1ce-c75c69448410"
// var data = `{"request":"{\"id\":\"${model}\",\"bizId\":\"${fileId}\",\"bizCode\":\"pc_video_seller_publish\",\"shortTitle\":\"${moive_title}\",\"requestId\":\"$requestId\",\"title\":\"${moive_内容}\",\"contentType\":\"video\",\"ugcScene\":\"pc_newcreator_video\",\"shareResult\":\"\",\"topics\":[{\"topicId\":[{${话题id}}],\"items\":[{\"id\":\"${time}866113\",\"blackCategory\":\"false\",\"isUpShelf\":\"true\",\"itemId\":\"${商品id}\",\"itemUrl\":\"${商品url}\",\"picUrl\":\"${商品picurl}\",\"cover\":\"${商品picurl}\",\"coverUrl\":\"${商品picurl}\",\"title\":\"${商品title}\",\"source\":\"order\",\"price\":\"${商品价格}\",\"categoryName\":\"\"}],\"video\":{\"fileId\":\"${fileId}\",\"interactiveId\":\"${id}\"},\"coverUser\":[{\"url\":\"${封面picurl}\",\"width\":720,\"height\":1280}],\"downloadEnable\":\"1\",\"abParams\":[{\"paramKey\":\"use_new_publish_pre_check\",\"paramValue\":\"0\"}],\"titleRaw\":\"\",\"titleElements\":[{}],\"publishSession\":\"${publishSession}\",\"publishExtra\":{\"video_short_title_max\":\"20\",\"show_item_entry\":\"1\",\"video_text_min\":\"0\",\"default_item_modifiable\":\"0\",\"xgc_timeline_album\":\"0\",\"short_title_max\":\"20\",\"ab_cover_user_entry\":\"0\",\"item_max\":\"6\",\"video_content_empty_config\":\"0\",\"item_min\":\"0\",\"video_short_title_min\":\"0\",\"media_type\":\"video\",\"short_title_min\":\"1\",\"show_shop_entry\":\"1\",\"show_collocation_entry\":\"0\",\"text_max\":\"1000\",\"show_interactive_entry\":\"1\",\"cus_cover\":\"1\",\"shop_max\":\"6\",\"default_tab\":\"video\",\"topic_disable\":\"0\",\"content_empty_config\":\"1\",\"text_min\":\"10\",\"show_short_title_entry\":\"1\",\"shop_min\":\"0\",\"umi_pub_session\":\"${session}\"}}"}`


// data = `{"request":"{\\"id\\":\\"${model}\\",\\"bizId\\":\\"${fileId}\\",\\"bizCode\\":\\"pc_video_seller_publish\\",\\"shortTitle\\":\\"${moive_title}\\",\\"requestId\\":\\"${requestId}\\",\\"title\\":\\"${moive_内容}\\",\\"contentType\\":\\"video\\",\\"ugcScene\\":\\"pc_newcreator_video\\",\\"shareResult\\":\\"\\",\\"topics\\":[{${话题id}}],\\"items\\":[{\\"id\\":\\"${time}113\\",\\"blackCategory\\":\\"false\\",\\"isUpShelf\\":\\"true\\",\\"itemId\\":\\"${商品id}\\",\\"itemUrl\\":\\"${商品url}\\",\\"picUrl\\":\\"${商品picurl}\\",\\"cover\\":\\"${商品picurl}\\",\\"coverUrl\\":\\"${商品picurl}\\",\\"title\\":\\"${商品title}\\",\\"source\\":\\"order\\",\\"price\\":\\"${商品价格}\\",\\"categoryName\\":\\"\\"}],\\"video\\":{\\"fileId\\":\\"${fileId}\\",\\"interactiveId\\":\\"${id}\\"},\\"coverUser\\":[{\\"url\\":\\"${封面picurl}\\",\\"width\\":720,\\"height\\":1280}],\\"downloadEnable\\":\\"1\\",\\"abParams\\":[{\\"paramKey\\":\\"use_new_publish_pre_check\\",\\"paramValue\\":\\"0\\"}],\\"titleRaw\\":\\"\\",\\"titleElements\\":[{}],\\"publishSession\\":\\"${publishSession}\\",\\"publishExtra\\":{\\"video_short_title_max\\":\\"20\\",\\"show_item_entry\\":\\"1\\",\\"video_text_min\\":\\"0\\",\\"default_item_modifiable\\":\\"0\\",\\"xgc_timeline_album\\":\\"0\\",\\"short_title_max\\":\\"20\\",\\"ab_cover_user_entry\\":\\"0\\",\\"item_max\\":\\"6\\",\\"video_content_empty_config\\":\\"0\\",\\"item_min\\":\\"0\\",\\"video_short_title_min\\":\\"0\\",\\"media_type\\":\\"video\\",\\"short_title_min\\":\\"1\\",\\"show_shop_entry\\":\\"1\\",\\"show_collocation_entry\\":\\"0\\",\\"text_max\\":\\"1000\\",\\"show_interactive_entry\\":\\"1\\",\\"cus_cover\\":\\"1\\",\\"shop_max\\":\\"6\\",\\"default_tab\\":\\"video\\",\\"topic_disable\\":\\"0\\",\\"content_empty_config\\":\\"1\\",\\"text_min\\":\\"10\\",\\"show_short_title_entry\\":\\"1\\",\\"shop_min\\":\\"0\\",\\"umi_pub_session\\":\\"${session}\\"}}"}`
// data = data.replaceAll("/", "\\/");

// console.log(get("cf9355e50ae0937cd79aa3b16f650056", data))
// data = encodeURIComponent(data).replaceAll('_', "%5F").replaceAll('!', "%21")
// console.log(data);
// %7B%22request%22%3A%22%7B%5C%22id%5C%22%3A%5C%22448871940350%5C%22%2C%5C%22bizId%5C%22%3A%5C%22018d-7d2137be-a1e6ef30-8cf85bd9-106c%5C%22%2C%5C%22bizCode%5C%22%3A%5C%22pc%5Fvideo%5Fseller%5Fpublish%5C%22%2C%5C%22shortTitle%5C%22%3A%5C%22tb162778707763468190%5C%22%2C%5C%22requestId%5C%22%3A%5C%220182-8887f7ae-a1b3f3af-76774085-56e2%5C%22%2C%5C%22title%5C%22%3A%5C%22tb162778707763468190286%25E9%2580%258F%25E6%2598%258E%25E6%2597%25A0%25E7%2597%2595%25E5%258F%258C%25E9%259D%25A2%25E8%2583%25B6%25E8%25B4%25B4%25EF%25BC%258C%25E7%2594%25A8%25E5%25AE%2583%25E6%259D%25A5%25E8%25B4%25B4%25E5%25AF%25B9%25E8%2581%2594%25E4%25B8%258D%25E7%2595%2599%25E7%2597%2595%25EF%25BC%258C%25E5%25AE%25B6%25E9%2587%258C%25E5%2590%2584%25E7%25A7%258D%25E6%2591%2586%25E4%25BB%25B6%25E9%2583%25BD%25E5%258F%25AF%25E4%25BB%25A5%25E8%25B4%25B4%25E6%2597%25A0%25E7%2597%2595%25E5%258F%258C%25E9%259D%25A2%25E8%2583%25B6%25E8%25B4%25B4%25E5%258F%258C%25E9%259D%25A2%25E8%2583%25B6%25E8%25B4%25B4%25E6%2596%25B0%25E5%25B9%25B4%25E9%2580%258F%25E6%2598%258E%25E6%2597%25A0%25E7%2597%2595%25E8%25B4%25B4%25E6%25AF%258F%25E5%25A4%25A9%25E5%25A5%25BD%25E7%2589%25A9%25E5%2588%2586%25E4%25BA%25AB%5C%22%2C%5C%22contentType%5C%22%3A%5C%22video%5C%22%2C%5C%22ugcScene%5C%22%3A%5C%22pc%5Fnewcreator%5Fvideo%5C%22%2C%5C%22shareResult%5C%22%3A%5C%22%5C%22%2C%5C%22topics%5C%22%3A%5B%7B%7D%5D%2C%5C%22items%5C%22%3A%5B%7B%5C%22id%5C%22%3A%5C%221707201362866113%5C%22%2C%5C%22blackCategory%5C%22%3A%5C%22false%5C%22%2C%5C%22isUpShelf%5C%22%3A%5C%22true%5C%22%2C%5C%22itemId%5C%22%3A%5C%22762695729909%5C%22%2C%5C%22itemUrl%5C%22%3A%5C%22%5C%22%2C%5C%22picUrl%5C%22%3A%5C%22https%3A%5C%2F%5C%2Fgw2.alicdn.com%5C%2Ftfscom%5C%2Ftuitui%5C%2Fi2%5C%2F2206742293533%5C%2FO1CN01ankpiY1byADb0C0qH%5F%21%212206742293533.jpg%5C%22%2C%5C%22cover%5C%22%3A%5C%22https%3A%5C%2F%5C%2Fgw2.alicdn.com%5C%2Ftfscom%5C%2Ftuitui%5C%2Fi2%5C%2F2206742293533%5C%2FO1CN01ankpiY1byADb0C0qH%5F%21%212206742293533.jpg%5C%22%2C%5C%22coverUrl%5C%22%3A%5C%22https%3A%5C%2F%5C%2Fgw2.alicdn.com%5C%2Ftfscom%5C%2Ftuitui%5C%2Fi2%5C%2F2206742293533%5C%2FO1CN01ankpiY1byADb0C0qH%5F%21%212206742293533.jpg%5C%22%2C%5C%22title%5C%22%3A%5C%22%E5%8E%A8%E6%88%BF%E7%BE%8E%E7%BC%9D%E8%B4%B4%E7%81%B6%E5%8F%B0%E9%98%B2%E6%B0%B4%E5%B0%81%E8%BE%B9%E6%B0%B4%E6%A7%BD%E8%83%B6%E6%B4%97%E7%A2%97%E6%B1%A0%E9%A9%AC%E6%A1%B6%E8%BE%B9%E7%BC%98%E6%B0%B4%E6%B1%A0%E9%98%B2%E9%9C%89%E7%BC%9D%E9%9A%99%E6%9D%A1%E7%87%83%E6%B0%94%5C%22%2C%5C%22source%5C%22%3A%5C%22order%5C%22%2C%5C%22price%5C%22%3A%5C%2227.80%5C%22%2C%5C%22categoryName%5C%22%3A%5C%22%5C%22%7D%5D%2C%5C%22video%5C%22%3A%7B%5C%22fileId%5C%22%3A%5C%22018d-7d2137be-a1e6ef30-8cf85bd9-106c%5C%22%2C%5C%22interactiveId%5C%22%3A%5C%224046702495%5C%22%7D%2C%5C%22coverUser%5C%22%3A%5B%7B%5C%22url%5C%22%3A%5C%22https%3A%5C%2F%5C%2Fimg.alicdn.com%5C%2Fimgextra%5C%2Fi4%5C%2F6000000002774%5C%2FO1CN01pyaqUW1WMXbt7OweP%5F%21%216000000002774-0-tmap.jpg%5C%22%2C%5C%22width%5C%22%3A720%2C%5C%22height%5C%22%3A1280%7D%5D%2C%5C%22downloadEnable%5C%22%3A%5C%221%5C%22%2C%5C%22abParams%5C%22%3A%5B%7B%5C%22paramKey%5C%22%3A%5C%22use%5Fnew%5Fpublish%5Fpre%5Fcheck%5C%22%2C%5C%22paramValue%5C%22%3A%5C%220%5C%22%7D%5D%2C%5C%22titleRaw%5C%22%3A%5C%22%5C%22%2C%5C%22titleElements%5C%22%3A%5B%7B%7D%5D%2C%5C%22publishSession%5C%22%3A%5C%220bc6a9f392554623bb8b96be03915974%5C%22%2C%5C%22publishExtra%5C%22%3A%7B%5C%22video%5Fshort%5Ftitle%5Fmax%5C%22%3A%5C%2220%5C%22%2C%5C%22show%5Fitem%5Fentry%5C%22%3A%5C%221%5C%22%2C%5C%22video%5Ftext%5Fmin%5C%22%3A%5C%220%5C%22%2C%5C%22default%5Fitem%5Fmodifiable%5C%22%3A%5C%220%5C%22%2C%5C%22xgc%5Ftimeline%5Falbum%5C%22%3A%5C%220%5C%22%2C%5C%22short%5Ftitle%5Fmax%5C%22%3A%5C%2220%5C%22%2C%5C%22ab%5Fcover%5Fuser%5Fentry%5C%22%3A%5C%220%5C%22%2C%5C%22item%5Fmax%5C%22%3A%5C%226%5C%22%2C%5C%22video%5Fcontent%5Fempty%5Fconfig%5C%22%3A%5C%220%5C%22%2C%5C%22item%5Fmin%5C%22%3A%5C%220%5C%22%2C%5C%22video%5Fshort%5Ftitle%5Fmin%5C%22%3A%5C%220%5C%22%2C%5C%22media%5Ftype%5C%22%3A%5C%22video%5C%22%2C%5C%22short%5Ftitle%5Fmin%5C%22%3A%5C%221%5C%22%2C%5C%22show%5Fshop%5Fentry%5C%22%3A%5C%221%5C%22%2C%5C%22show%5Fcollocation%5Fentry%5C%22%3A%5C%220%5C%22%2C%5C%22text%5Fmax%5C%22%3A%5C%221000%5C%22%2C%5C%22show%5Finteractive%5Fentry%5C%22%3A%5C%221%5C%22%2C%5C%22cus%5Fcover%5C%22%3A%5C%221%5C%22%2C%5C%22shop%5Fmax%5C%22%3A%5C%226%5C%22%2C%5C%22default%5Ftab%5C%22%3A%5C%22video%5C%22%2C%5C%22topic%5Fdisable%5C%22%3A%5C%220%5C%22%2C%5C%22content%5Fempty%5Fconfig%5C%22%3A%5C%221%5C%22%2C%5C%22text%5Fmin%5C%22%3A%5C%2210%5C%22%2C%5C%22show%5Fshort%5Ftitle%5Fentry%5C%22%3A%5C%221%5C%22%2C%5C%22shop%5Fmin%5C%22%3A%5C%220%5C%22%2C%5C%22umi%5Fpub%5Fsession%5C%22%3A%5C%22963e0890-57e1-11ee-a1ce-c75c69448410%5C%22%7D%7D%22%7D
// %7B%22request%22%3A%22%7B%5C%22id%5C%22%3A%5C%22448871940350%5C%22%2C%5C%22bizId%5C%22%3A%5C%22018d-7d2137be-a1e6ef30-8cf85bd9-106c%5C%22%2C%5C%22bizCode%5C%22%3A%5C%22pc%5Fvideo%5Fseller%5Fpublish%5C%22%2C%5C%22shortTitle%5C%22%3A%5C%22tb162778707763468190%5C%22%2C%5C%22requestId%5C%22%3A%5C%220182-8887f7ae-a1b3f3af-76774085-56e2%5C%22%2C%5C%22title%5C%22%3A%5C%22tb162778707763468190286%25E9%2580%258F%25E6%2598%258E%25E6%2597%25A0%25E7%2597%2595%25E5%258F%258C%25E9%259D%25A2%25E8%2583%25B6%25E8%25B4%25B4%25EF%25BC%258C%25E7%2594%25A8%25E5%25AE%2583%25E6%259D%25A5%25E8%25B4%25B4%25E5%25AF%25B9%25E8%2581%2594%25E4%25B8%258D%25E7%2595%2599%25E7%2597%2595%25EF%25BC%258C%25E5%25AE%25B6%25E9%2587%258C%25E5%2590%2584%25E7%25A7%258D%25E6%2591%2586%25E4%25BB%25B6%25E9%2583%25BD%25E5%258F%25AF%25E4%25BB%25A5%25E8%25B4%25B4%25E6%2597%25A0%25E7%2597%2595%25E5%258F%258C%25E9%259D%25A2%25E8%2583%25B6%25E8%25B4%25B4%25E5%258F%258C%25E9%259D%25A2%25E8%2583%25B6%25E8%25B4%25B4%25E6%2596%25B0%25E5%25B9%25B4%25E9%2580%258F%25E6%2598%258E%25E6%2597%25A0%25E7%2597%2595%25E8%25B4%25B4%25E6%25AF%258F%25E5%25A4%25A9%25E5%25A5%25BD%25E7%2589%25A9%25E5%2588%2586%25E4%25BA%25AB%5C%22%2C%5C%22contentType%5C%22%3A%5C%22video%5C%22%2C%5C%22ugcScene%5C%22%3A%5C%22pc%5Fnewcreator%5Fvideo%5C%22%2C%5C%22shareResult%5C%22%3A%5C%22%5C%22%2C%5C%22topics%5C%22%3A%5B%7B%7D%5D%2C%5C%22items%5C%22%3A%5B%7B%5C%22id%5C%22%3A%5C%221707201362866113%5C%22%2C%5C%22blackCategory%5C%22%3A%5C%22false%5C%22%2C%5C%22isUpShelf%5C%22%3A%5C%22true%5C%22%2C%5C%22itemId%5C%22%3A%5C%22762695729909%5C%22%2C%5C%22itemUrl%5C%22%3A%5C%22%5C%22%2C%5C%22picUrl%5C%22%3A%5C%22https%3A%5C%2F%5C%2Fgw2.alicdn.com%5C%2Ftfscom%5C%2Ftuitui%5C%2Fi2%5C%2F2206742293533%5C%2FO1CN01ankpiY1byADb0C0qH%5F%21%212206742293533.jpg%5C%22%2C%5C%22cover%5C%22%3A%5C%22https%3A%5C%2F%5C%2Fgw2.alicdn.com%5C%2Ftfscom%5C%2Ftuitui%5C%2Fi2%5C%2F2206742293533%5C%2FO1CN01ankpiY1byADb0C0qH%5F%21%212206742293533.jpg%5C%22%2C%5C%22coverUrl%5C%22%3A%5C%22https%3A%5C%2F%5C%2Fgw2.alicdn.com%5C%2Ftfscom%5C%2Ftuitui%5C%2Fi2%5C%2F2206742293533%5C%2FO1CN01ankpiY1byADb0C0qH%5F%21%212206742293533.jpg%5C%22%2C%5C%22title%5C%22%3A%5C%22%E5%8E%A8%E6%88%BF%E7%BE%8E%E7%BC%9D%E8%B4%B4%E7%81%B6%E5%8F%B0%E9%98%B2%E6%B0%B4%E5%B0%81%E8%BE%B9%E6%B0%B4%E6%A7%BD%E8%83%B6%E6%B4%97%E7%A2%97%E6%B1%A0%E9%A9%AC%E6%A1%B6%E8%BE%B9%E7%BC%98%E6%B0%B4%E6%B1%A0%E9%98%B2%E9%9C%89%E7%BC%9D%E9%9A%99%E6%9D%A1%E7%87%83%E6%B0%94%5C%22%2C%5C%22source%5C%22%3A%5C%22order%5C%22%2C%5C%22price%5C%22%3A%5C%2227.80%5C%22%2C%5C%22categoryName%5C%22%3A%5C%22%5C%22%7D%5D%2C%5C%22video%5C%22%3A%7B%5C%22fileId%5C%22%3A%5C%22018d-7d2137be-a1e6ef30-8cf85bd9-106c%5C%22%2C%5C%22interactiveId%5C%22%3A%5C%224046702495%5C%22%7D%2C%5C%22coverUser%5C%22%3A%5B%7B%5C%22url%5C%22%3A%5C%22https%3A%5C%2F%5C%2Fimg.alicdn.com%5C%2Fimgextra%5C%2Fi4%5C%2F6000000002774%5C%2FO1CN01pyaqUW1WMXbt7OweP%5F%21%216000000002774-0-tmap.jpg%5C%22%2C%5C%22width%5C%22%3A720%2C%5C%22height%5C%22%3A1280%7D%5D%2C%5C%22downloadEnable%5C%22%3A%5C%221%5C%22%2C%5C%22abParams%5C%22%3A%5B%7B%5C%22paramKey%5C%22%3A%5C%22use%5Fnew%5Fpublish%5Fpre%5Fcheck%5C%22%2C%5C%22paramValue%5C%22%3A%5C%220%5C%22%7D%5D%2C%5C%22titleRaw%5C%22%3A%5C%22%5C%22%2C%5C%22titleElements%5C%22%3A%5B%7B%7D%5D%2C%5C%22publishSession%5C%22%3A%5C%220bc6a9f392554623bb8b96be03915974%5C%22%2C%5C%22publishExtra%5C%22%3A%7B%5C%22video%5Fshort%5Ftitle%5Fmax%5C%22%3A%5C%2220%5C%22%2C%5C%22show%5Fitem%5Fentry%5C%22%3A%5C%221%5C%22%2C%5C%22video%5Ftext%5Fmin%5C%22%3A%5C%220%5C%22%2C%5C%22default%5Fitem%5Fmodifiable%5C%22%3A%5C%220%5C%22%2C%5C%22xgc%5Ftimeline%5Falbum%5C%22%3A%5C%220%5C%22%2C%5C%22short%5Ftitle%5Fmax%5C%22%3A%5C%2220%5C%22%2C%5C%22ab%5Fcover%5Fuser%5Fentry%5C%22%3A%5C%220%5C%22%2C%5C%22item%5Fmax%5C%22%3A%5C%226%5C%22%2C%5C%22video%5Fcontent%5Fempty%5Fconfig%5C%22%3A%5C%220%5C%22%2C%5C%22item%5Fmin%5C%22%3A%5C%220%5C%22%2C%5C%22video%5Fshort%5Ftitle%5Fmin%5C%22%3A%5C%220%5C%22%2C%5C%22media%5Ftype%5C%22%3A%5C%22video%5C%22%2C%5C%22short%5Ftitle%5Fmin%5C%22%3A%5C%221%5C%22%2C%5C%22show%5Fshop%5Fentry%5C%22%3A%5C%221%5C%22%2C%5C%22show%5Fcollocation%5Fentry%5C%22%3A%5C%220%5C%22%2C%5C%22text%5Fmax%5C%22%3A%5C%221000%5C%22%2C%5C%22show%5Finteractive%5Fentry%5C%22%3A%5C%221%5C%22%2C%5C%22cus%5Fcover%5C%22%3A%5C%221%5C%22%2C%5C%22shop%5Fmax%5C%22%3A%5C%226%5C%22%2C%5C%22default%5Ftab%5C%22%3A%5C%22video%5C%22%2C%5C%22topic%5Fdisable%5C%22%3A%5C%220%5C%22%2C%5C%22content%5Fempty%5Fconfig%5C%22%3A%5C%221%5C%22%2C%5C%22text%5Fmin%5C%22%3A%5C%2210%5C%22%2C%5C%22show%5Fshort%5Ftitle%5Fentry%5C%22%3A%5C%221%5C%22%2C%5C%22shop%5Fmin%5C%22%3A%5C%220%5C%22%2C%5C%22umi%5Fpub%5Fsession%5C%22%3A%5C%22963e0890-57e1-11ee-a1ce-c75c69448410%5C%22%7D%7D%22%7D
function getdata(token, datas) {
  var data2 = JSON.parse(datas)
  console.log("传输过来的data", data2);
  let model, fileId, moive_title, moive_内容, requestId, 封面picurl, 商品id, 话题id, 商品title, publishSession, id, 商品url, 商品picurl, 商品价格 = { data2 }
  model = data2.model;
  fileId = data2.fileId;
  moive_title = data2.moive_title;
  moive_内容 = data2.moive_内容;
  requestId = data2.requestId
  封面picurl = data2.封面picurl
  商品id = data2.商品id
  话题id = data2.话题id
  商品title = data2.商品title
  publishSession = data2.publishSession
  id = data2.id
  商品url = data2.商品url
  商品picurl = data2.商品picurl
  商品价格 = data2.商品价格
  var time = new Date().getTime()
  话题id = ''
  if (话题id !== "") {
    话题id = `\"topicId\":${话题id}`
  }
  else {
    话题id = ""
  }
  session = getsession()
  data = `{"request":"{\\"id\\":\\"${model}\\",\\"bizId\\":\\"${fileId}\\",\\"bizCode\\":\\"pc_video_seller_publish\\",\\"shortTitle\\":\\"${moive_title}\\",\\"requestId\\":\\"${requestId}\\",\\"title\\":\\"${moive_内容}\\",\\"contentType\\":\\"video\\",\\"ugcScene\\":\\"pc_newcreator_video\\",\\"shareResult\\":\\"\\",\\"topics\\":[{${话题id}}],\\"items\\":[{\\"id\\":\\"${time}113\\",\\"blackCategory\\":\\"false\\",\\"isUpShelf\\":\\"true\\",\\"itemId\\":\\"${商品id}\\",\\"itemUrl\\":\\"${商品url}\\",\\"picUrl\\":\\"${商品picurl}\\",\\"cover\\":\\"${商品picurl}\\",\\"coverUrl\\":\\"${商品picurl}\\",\\"title\\":\\"${商品title}\\",\\"source\\":\\"order\\",\\"price\\":\\"${商品价格}\\",\\"categoryName\\":\\"\\"}],\\"video\\":{\\"fileId\\":\\"${fileId}\\",\\"interactiveId\\":\\"${id}\\"},\\"coverUser\\":[{\\"url\\":\\"${封面picurl}\\",\\"width\\":720,\\"height\\":1280}],\\"downloadEnable\\":\\"1\\",\\"abParams\\":[{\\"paramKey\\":\\"use_new_publish_pre_check\\",\\"paramValue\\":\\"0\\"}],\\"titleRaw\\":\\"\\",\\"titleElements\\":[{}],\\"publishSession\\":\\"${publishSession}\\",\\"publishExtra\\":{\\"video_short_title_max\\":\\"20\\",\\"show_item_entry\\":\\"1\\",\\"video_text_min\\":\\"0\\",\\"default_item_modifiable\\":\\"0\\",\\"xgc_timeline_album\\":\\"0\\",\\"short_title_max\\":\\"20\\",\\"ab_cover_user_entry\\":\\"0\\",\\"item_max\\":\\"6\\",\\"video_content_empty_config\\":\\"0\\",\\"item_min\\":\\"0\\",\\"video_short_title_min\\":\\"0\\",\\"media_type\\":\\"video\\",\\"short_title_min\\":\\"1\\",\\"show_shop_entry\\":\\"1\\",\\"show_collocation_entry\\":\\"0\\",\\"text_max\\":\\"1000\\",\\"show_interactive_entry\\":\\"1\\",\\"cus_cover\\":\\"1\\",\\"shop_max\\":\\"6\\",\\"default_tab\\":\\"video\\",\\"topic_disable\\":\\"0\\",\\"content_empty_config\\":\\"1\\",\\"text_min\\":\\"10\\",\\"show_short_title_entry\\":\\"1\\",\\"shop_min\\":\\"0\\",\\"umi_pub_session\\":\\"${session}\\"}}"}`
  data = data.replaceAll("/", "\\/");
  console.log(data);
  var sign = get(token, data)
  data = encodeURIComponent(data).replaceAll('_', "%5F").replaceAll('!', "%21")
  return {
    "sign": sign.sign,
    "t": sign.t,
    "data": data
  }
}
module.exports = getdata