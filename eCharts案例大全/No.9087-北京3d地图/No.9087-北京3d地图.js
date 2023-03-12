/*
    如果需要绘制其他城市3d地图
    1.点击脚本 引入 城市js
    例如 上海
    https://gallerybox.echartsjs.com/dep/echarts/map/js/province/shanghai.js
    山东
    https://gallerybox.echartsjs.com/dep/echarts/map/js/province/shandong.js
    
    2. 修改geo3d.map 名称为对应需要绘制的地图名称即可
    
    注意： 脚本中引入的echarts-gl 务必是最新版本的，如果是老版本的echarts-gl会有问题
    
    这里我使用的并不是 echarts自带的地图经纬度js 具体后面再补
*/
var pathSymbols = {
    fill1: 'path://M512 128c169.6 0 308 138.4 308 308 0 81.6-31.2 158.4-88.8 216l-4.8 4L512 869.6 298.4 656.8l-4.8-4.8c-57.6-57.6-88.8-134.4-88.8-216C204 266.4 342.4 128 512 128m0-64C306.4 64 140 230.4 140 436c0 101.6 40.8 194.4 107.2 261.6L512 960l264-263.2c66.4-67.2 107.2-159.2 107.2-261.6C884 230.4 717.6 64 512 64z m0 192c73.6 0 132.8 62.4 128 137.6-4.8 63.2-55.2 113.6-118.4 118.4-74.4 5.6-137.6-53.6-137.6-128 0-70.4 57.6-128 128-128'
};
option = {
    backgroundColor: '#000',
    visualMap: [{
        type: 'continuous',
        seriesIndex: 0,
        text: ['bar3D'],
        show: false,
        calculable: true,
        inRange: {
            color: ['#EBE806']
        }
    }, {
         type: 'continuous',
         seriesIndex: 1,
         show: false,
         text: ['scatter3D'],
         show: true,
         left: 'right',
         calculable: true,
         inRange: {
             color: ['#EBE806']//气泡配色
         }
     }],
    geo3D: {
        map: '北京',
         roam: true,
        regionHeight: 0.2,
        itemStyle: {
          color: 'rgba(10, 133, 171, 0.4)',
          opacity: 1,
          borderWidth: 0.4,
          borderColor: '#00FFF8' // 地图边配色
        },
        viewControl: {
          distance: 82,
          alpha: 22,
          beta: 0,
          center: [-4, -4, 0]
        },
        label: {
          show: false,
        },
        shading: 'lambert',
        light: { // 光照阴影
          main: {
            color: '#fff', // 光照颜色
            intensity: 1, // 光照强度
            shadowQuality: 'height',
            shadow: false, // 是否显示阴影
            alpha: 45,
            beta: 45
          },
          ambient: {
            intensity: 0.7
          }
        }
    },
    series: [
        //柱状图
        {
            name: 'bar3D',
            type: "bar3D",
            coordinateSystem: 'geo3D',
            barSize: 0.2, //柱子粗细
            shading: 'lambert',
            opacity: 1,
            bevelSize: 0.3,
            label: {
                show: false,
                formatter: '{b}'
            },
            data: [
                {name: '', id: -1, value: [0, 0, 0]},
                {name: '', id: -1, value: [121.458472, 30.912345, 90]},
                {name: '', id: -1, value: [121.48, 31.23, 90]},
                ],
        },
        {
             name: 'scatter3D',
             type: "scatter3D",
             coordinateSystem: 'geo3D',
             symbol: pathSymbols.fill1,
             symbolSize: 32,
             label: {
                 show: true,
                 position: 'top',
                 formatter: (params)=>{
                     console.log(params)
                     return params.data.value2 +': '+ params.data.value3;
                 },
                 textStyle: {
                     color: '#EEEC0D',
                     fontSize: 18,
                     fontFamily: 'PingFangSC',
                     backgroundColor: 'transparent' // 更改label背景颜色
                 }
             },
             itemStyle: {
                 opacity: 1,
                 // borderWidth: 0.5,
                 // borderColor: '#fff'//气泡边的颜色
             },
             data:  [
                 {name: '', value: [121.458472, 30.912345, 100], value2: '奉贤区', value3: 6872}, // 奉贤区
                 {name: '', id: -1, value: [121.48, 31.23, 100], value2: '黄浦区', value3: 2888}, 
                 ]
         },
        
    ]
};