var uploadedDataURL = "/asset/get/s/data-1575629599164-pC1utSyd.png";

 

var alirl = [
    [
        [121.15, 31.89],
        [114.3896, 30.6628, 0]
    ],
    [
        [120.38, 37.35],
        [114.3896, 30.6628, 0]
    ],
    [
        [123.97, 47.33],
        [114.3896, 30.6628, 0]
    ],
    [
        [118.87, 42.28],
        [114.3896, 30.6628, 0]
    ],
    [
        [121.52, 36.89],
        [114.3896, 30.6628, 0]
    ],
    [
        [102.188043, 38.520089],
        [114.3896, 30.6628, 0]
    ],
    [
        [118.58, 24.93],
        [114.3896, 30.6628, 0]
    ],
    [
        [120.53, 36.86],
        [114.3896, 30.6628, 0]
    ],
    [
        [119.46, 35.42],
        [114.3896, 30.6628, 0]
    ],
    [
        [119.97, 35.88],
        [114.3896, 30.6628, 0]
    ],
    [
        [121.05, 32.08],
        [114.3896, 30.6628, 0]
    ],
    [
        [91.11, 29.97],
        [114.3896, 30.6628, 0]
    ]
]
 

var regionData = [{
    "name": "内蒙古",
    "value": "1"
}, {
    "name": "黑龙江",
    "value": "1"
}, {
    "name": "吉林",
    "value": "1"
}, {
    "name": "北京",
    "value": "1"
}, {
    "name": "山东",
    "value": "2"
}, {
    "name": "上海",
    "value": "2"
}, {
    "name": "江苏",
    "value": "2"
}, {
    "name": "湖北",
    "value": "3"
}]

option = {

   
    geo3D: {
     shading: 'realistic',
             realisticMaterial: {
                 detailTexture: uploadedDataURL,
                 roughness: 0.5
             },
             light: { //光照阴影
             main: {
                 color: '#fff', //光照颜色
                 intensity: 3, //光照强度
                 //shadowQuality: 'high', //阴影亮度
                 shadow: false, //是否显示阴影
                 alpha:55,
                 beta:10
 
             },
              ambient: {
                 intensity: 0.3
             }
         },
        viewControl:{
            center: [20, 0, 0],
            alpha: 60,
            beta: 40
        }
,
        regions: [{//地图区域的设置
            name: '湖北',
           
            itemStyle: {
                areaColor: '#02Fafa',
            },
        }],
        environment: '#000',
        map: 'china',
        roam: true,
        itemStyle: {
            areaColor: '#204160',
            borderWidth: 0.2,
            borderColor: '#66ebf0',
        },
        label:{
            show: true,
            textStyle:{
                color:'#fff',
                borderColor:0,
                backgroundColor:'transparent'
            }
        },
        emphasis: { //当鼠标放上去  地区区域是否显示名称
            label: {
                show: true,
              
                textStyle: {
                    color: '#fff',
                 
                    backgroundColor: 'rgba(0,23,11,0)'
                }
            }
        },
    },
    series: [ {
            type: 'lines3D',
           
            coordinateSystem: 'geo3D',

            effect: {
                show: true,
                trailWidth: 5,
                trailOpacity: 0.5,
                trailLength: 0.2,
                constantSpeed: 5
            },

            blendMode: 'lighter',

            lineStyle: {
                color: '#1DE9B6',
                width: 1, //尾迹线条宽度
                opacity: 1, //尾迹线条透明度
                curveness: .3 //尾迹线条曲直度
            },

            data: alirl
        }
    ]
};

   