// 经纬度，值
 let data = [
     [116.41433, 39.91095, 10],
     [117.191041, 39.134857, 20],
     [114.511934, 38.058785, 30],
     [112.543424, 37.887658, 40],
     [111.694848, 40.836106, 50]
 ];
 option = {
     title: {
         text: '3D地图与3D柱状图'
     },
     geo3D: {
         map: 'china',
         itemStyle: {
             areaColor: '#001242',
             opacity: 1,
             borderWidth: 0.8,
             borderColor: '#fff'
         },
         label: {
             show: true,
             textStyle: {
                 color: '#fff',
                 fontSize: 16,
                 opacity: 1,
                 backgroundColor: 'rgba(0,0,0,0)'
             }
         },
         emphasis: {
             label: {
                 show: true,
                 textStyle: {
                     color: '#27a5b8',
                     fontSize: 14
                 }
             }
         },
         light: {
             main: {
                 color: '#fff',
                 intensity: 1.2,
                 shadow: false,
                 alpha: 50,
                 beta: 10
             },
             ambient: {
                 intensity: 0.3
             }
         }
     },
     series: [{
         type: 'bar3D',
         coordinateSystem: 'geo3D',
         shading: 'lambert',
         data: data,
         barSize: 1,
         minHeight: 1,
         silent: true,
         itemStyle: {
             color: 'orange'
         }
     }]
 };