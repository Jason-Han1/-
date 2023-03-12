 function roundDatas(num) {
     var datas = [];
     for (var i = 0; i < num; i++) {
         datas.push({
             name: 'circle' + i
         });
     }
     return datas;
 }
 option = {
     backgroundColor: "#000",
     title: {
         text: 'Hand string',
         subtext: 'Stats：325',
         top: "center",
         left: "center",
         textStyle: {
             fontSize: 16,
             color: '#e3e3e3',
             fontWeight: '100'
         },
         subtextStyle: {
             fontSize: 24,
             color: '#e3e3e3',
             fontWeight: '100'
         }
     },
     
     series: [
        {
         type: 'graph',
         tooltip: {},
         ribbonType: true,
         layout: 'circular',
         hoverAnimation: false,
         z:0,
         width: '60%',
         height: '10%',
         circular: {
             rotateLabel: true
         },
         //这里可以调出不同效果
         symbolSize: 200,
         data: roundDatas(10),
         itemStyle: {
             normal: {
                 label: {
                     show: false
                 },
                 borderColor:'#e3e3e3',
                 borderWidth:'.1',
                 color: 'rgba(0, 255, 255, .03)',
             },
             emphasis: {
                 label: {
                     show: false,
                 }
             }
         },}, 
        {
         type: 'graph',
         ribbonType: true,
         layout: 'circular',
         width: '60%',
         height: '60%',
         circular: {
             rotateLabel: true
         },
         symbolSize: 30,
         label: {
             normal: {
                 position: 'center',
                 formatter: '{b}\n{c}万',
                 normal: {
                     textStyle: {
                         fontFamily: '宋体'
                     }
                 }
             }
         },
         itemStyle: {
             normal: {
                 shadowBlur: 5,
                 shadowColor: 'rgba(25, 100, 150, 0.5)',
                 shadowOffsetY: 3,
                 shadowOffsetX: 3,
                 label: {
                     show: true,
                     formatter: '{b}\n{c}万({d}%)',
                     color: '#e3e3e3',
                 },
                 labelLine: {
                     show: true,
                     length: 40,
                     lineStyle: {
                         color: '#0ff',
                     }
                 },
                 color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                     offset: 0,
                     color: '#fff'
                 }, {
                     offset: 0.3,
                     color: '#1ffdfd'
                 }, {
                     offset: 1,
                     color: '#096869'
                 }])
             },
             emphasis: {
                 label: {
                     show: false,
                 }
             }
         },
         data: [{
             name: '2010年',
             symbolSize: 10,
             value: 10,
         }, {
             name: '2012年',
             symbolSize: 15,
             value: 15,
         }, {
             name: '2013年',
             symbolSize: 20,
             value: 20,
         }, {
             name: '2014年',
             symbolSize: 25,
             value: 25,
         }, {
             name: '2015年',
             symbolSize: 30,
             value: 30,
         }, {
             name: '2016年',
             symbolSize: 35,
             value: 35,
         }, {
             name: '2017年',
             symbolSize: 40,
             value: 40,
         }, {
             name: '2018年',
             symbolSize: 45,
             value: 45,
         }, {
             name: '2019年',
             symbolSize: 50,
             value: 50,
         }, {
             name: '2020年',
             symbolSize: 55,
             value: 55,
         }],
     }
     ]
 };