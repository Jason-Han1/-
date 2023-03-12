 var geoCoordMap = {
     '浩勒报吉': [109.014737, 39.367362],
     '靖边': [108.762344, 37.625262],
     '延安': [109.487842, 36.563179],
     '河津': [110.732329, 35.593259],
     '运城': [110.996812, 35.032459],
     '三门峡': [111.240051, 34.766706],
     '西坪': [111.097551, 33.461263],
     '邓州': [112.07701, 32.689794],
     '荆门': [112.21837, 31.057063],
     '岳阳': [113.126464, 29.382207],
     '新余': [114.945946, 27.816134],
     '吉安': [115.027533, 27.111038]
 };

 var BJData = [
     [{
         name: ''
     }, {
         name: '浩勒报吉',
         value: 90
     }],
     [{
         name: '浩勒报吉'
     }, {
         name: '靖边',
         value: 90
     }],
     [{
         name: '靖边'
     }, {
         name: '延安',
         value: 80
     }],
     [{
         name: '延安'
     }, {
         name: '河津',
         value: 70
     }],
     [{
         name: '河津'
     }, {
         name: '运城',
         value: 60
     }],
     [{
         name: '运城'
     }, {
         name: '三门峡',
         value: 50
     }],
     [{
         name: '三门峡'
     }, {
         name: '西坪',
         value: 40
     }],
     [{
         name: '西坪'
     }, {
         name: '邓州',
         value: 30
     }],
     [{
         name: '邓州'
     }, {
         name: '荆门',
         value: 20
     }],
     [{
         name: '荆门'
     }, {
         name: '岳阳',
         value: 20
     }],
     [{
         name: '岳阳'
     }, {
         name: '新余',
         value: 20
     }],
     [{
         name: '新余'
     }, {
         name: '吉安',
         value: 20
     }]
 ];
 var planePath = 'path://M339.38944 511.99488v388.38272h345.23136V511.99488h258.91328l-431.52896-388.37248-431.5392 388.37248z';
 var convertData = function(data) {
     console.log(data);
     var res = [];
     for (var i = 0; i < data.length; i++) {
         var dataItem = data[i];
         var fromCoord = geoCoordMap[dataItem[0].name];
         var toCoord = geoCoordMap[dataItem[1].name];
         if (fromCoord && toCoord) {
             res.push({
                 fromName: dataItem[0].name,
                 toName: dataItem[1].name,
                 coords: [fromCoord, toCoord]
             });
         }
     }
     return res;
 };
 var lineFast = function(data) {
     console.log(data);
     var res = [];

     return 5;
 };
 var series = [{
         name: BJData[0],
         type: 'lines',
         zlevel: 2,
         //设置折线的格式/是否带方向箭头
         symbol: ['none', 'none'],
         symbolSize: 10,
         effect: {
             show: true,
             period: lineFast(BJData),
             trailLength: 0,
             symbol: planePath,
             symbolSize: 15
         },
         lineStyle: {
             normal: {
                 color: '#ffa022',
                 width: 1,
                 opacity: 0.6,
                 curveness: 0
             }
         },
         data: convertData(BJData)
     }, //地图散点设置
     {
         name: BJData[0],
         type: 'effectScatter',
         coordinateSystem: 'geo',
         zlevel: 2,
         //涟漪特效相关配置
         rippleEffect: {
             brushType: 'stroke'
         },
         label: {
             normal: {
                 show: true,
                 position: 'right',
                 formatter: '{b}'
             }
         },
         symbolSize: 5,
         itemStyle: {
             normal: {
                 color: '#ffa022'
             }
         },
         data: BJData.map(function(dataItem) {
             return {
                 name: dataItem[1].name,
                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
             };
         })
     }
 ];
 option = {
     backgroundColor: '#404a59',
     title: {
         text: '货运模拟图',
         subtext: '数据纯属虚构',
         left: 'center',
         textStyle: {
             color: '#fff'
         }
     },
     tooltip: {
         trigger: 'item'
     },
     legend: {
         orient: 'vertical',
         top: 'bottom',
         left: 'right',
         data: ['浩勒报吉-吉安'],
         textStyle: {
             color: '#fff'
         },
         selectedMode: 'single'
     },
     geo: {
         map: 'china',
         label: {
             emphasis: {
                 show: false,
             }
         },
         //禁止滑轮缩放
         roam: true,
         //当前视角的中心点
         center: [111.097551, 33.461263],
         //当前视角的缩放比例
         zoom: 3,
         silent: true,
         //地图区域的图形样式
         itemStyle: {
             normal: {
                 areaColor: '#323c48',
                 borderColor: '#404a59'
             },
             emphasis: {
                 areaColor: '#2a333d'
             }
         }
     },
     series: series
 };