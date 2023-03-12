 var $iframe = $('<iframe></iframe>');
 $iframe.css({
     height: '100%',
     width: '100%',
 })

 $iframe.prop('scrolling', 'no');
 $iframe.prop('src', 'http://mov.ijianyou.cn/t1/');
 $(myChart.getDom()).empty().append($iframe);
 
 console.log(
  "需要源码的留邮箱！因为高德接口的一个key每天只能免费调用2000次，"+
  "如果一直在加载中说明今日调用次数到达上限了。"+
  "所以最好能自己去高德开发平台申请一个key，修改源码里面的配置文件里面的key就行")
 
 console.log("同时推荐一下我的影院，全网vip视频都可以观看，"+
 "右上角可以搜索。地址http://mov.ijianyou.cn"+
 "希望大家多多支持！谢谢！")