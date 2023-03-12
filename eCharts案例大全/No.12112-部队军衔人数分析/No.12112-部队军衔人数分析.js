 var yiwub = [{
         name: "列兵",
         value: 100
     },
     {
         name: "上等兵",
         value: 200
     }
 ];
 var shig = [{
         name: "下士",
         value: 100
     },
     {
         name: "中士",
         value: 90
     },
     {
         name: "上士",
         value: 80
     },
     {
         name: "一级军士长",
         value: 70
     },
     {
         name: "二级军士长",
         value: 60
     },
     {
         name: "三级军士长",
         value: 50
     },
     {
         name: "四级军士长",
         value: 40
     }
 ];

 var ganb = [{
         name: "少尉",
         value: 100
     },
     {
         name: "中尉",
         value: 80
     },
     {
         name: "上尉",
         value: 60
     }, {
         name: "少校",
         value: 50
     }, {
         name: "中校",
         value: 40
     },
     {
         name: "上校",
         value: 30
     },
     {
         name: "大校",
         value: 20
     }
 ];

 var jx_legend = [];
 var ywb_t = 0,
     shig_t = 0,
     ganb_t = 0;
 for (var i = 0; i < yiwub.length; i++) {
     jx_legend.push(yiwub[i].name)
     ywb_t = ywb_t + yiwub[i].value
 }
 for (var i = 0; i < shig.length; i++) {
     jx_legend.push(shig[i].name)
     shig_t = ywb_t + shig[i].value
 }
 for (var i = 0; i < ganb.length; i++) {
     jx_legend.push(ganb[i].name)
     ganb_t = ywb_t + ganb[i].value
 }
 var jx_color = ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67'];
 option = {
     backgroundColor: "rgb(2,66,126)",
     title: [{
         text: '义务兵',
         subtext: ywb_t + '人',
         x: '15%',
         y: 'center',
         textStyle: {
             fontWeight: 'normal',
             fontSize: 16,
             color: "white"
         }
     }, {
         text: '士官',
         subtext: ywb_t + '人',
         x: 'center',
         y: 'center',
         textStyle: {
             fontWeight: 'normal',
             fontSize: 16,
             color: "white"
         }
     }, {
         text: '干部',
         subtext: ywb_t + '人',
         x: '82%',
         y: 'center',
         textStyle: {
             fontWeight: 'normal',
             fontSize: 16,
             color: "white"
         }
     }],
     tooltip: {
         show: true,
         trigger: 'item',
         formatter: "{b}: {c} ({d}%)"
     },
     legend: {
         orient: 'horizontal',
         bottom: '0%',
         data: jx_legend,
         textStyle: {
             color: "white"
         }
     },
     series: [{
         type: 'pie',
         selectedMode: 'single',
         center: ['17%', '50%'],
         radius: ['18%', '44%'],
         color: jx_color,
         label: {
             normal: {
                 position: 'inner',
                 formatter: '{b}\n人数:{c}\n占比:{d}%',
                 textStyle: {
                     color: '#fff',
                     fontWeight: 'bold',
                     fontSize: 14
                 }
             }
         },
         labelLine: {
             normal: {
                 show: false
             }
         },
         data: yiwub
     }, {
         type: 'pie',
         selectedMode: 'single',
         center: ['50.5%', '50%'],
         radius: ['18%', '44%'],
         color: jx_color,
         label: {
             normal: {
                 position: 'inner',
                 formatter: '{b}\n人数:{c}\n占比:{d}%',
                 textStyle: {
                     color: '#fff',
                     fontWeight: 'bold',
                     fontSize: 14
                 }
             }
         },
         labelLine: {
             normal: {
                 show: false
             }
         },
         data: shig
     }, {
         type: 'pie',
         selectedMode: 'single',
         center: ['84%', '50%'],
         radius: ['18%', '44%'],
         color: jx_color,
         label: {
             normal: {
                 position: 'inner',
                 formatter: '{b}\n人数:{c}\n占比:{d}%',
                 textStyle: {
                     color: '#fff',
                     fontWeight: 'bold',
                     fontSize: 14
                 }
             }
         },
         labelLine: {
             normal: {
                 show: false
             }
         },
         data: ganb
     }]
 };