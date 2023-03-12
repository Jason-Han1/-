let geoCoordMap = {
    '郑州': [113.631557, 34.75261],
    '开封': [114.341447, 34.797049],
    '洛阳': [112.434468, 34.663041],
    '平顶山': [113.300848978, 33.7453014565],
    '安阳': [114.351806508, 36.1102667222],
    '鹤壁': [114.297769838, 35.7554258742],
    '新乡': [113.912690161, 35.3072575577],
    '焦作': [113.211835885, 35.234607555],
    '濮阳': [115.026627441, 35.7532978882],
    '漯河': [114.0460614, 33.5762786885],
    '三门峡': [111.181262093, 34.7833199411],
    '南阳': [112.542841901, 33.0114195691],
    "商丘": [115.641885688, 34.4385886402],
    '信阳': [114.085490993, 32.1285823075],
    '周口': [114.654101942, 33.6237408181],
    '许昌': [113.83531246, 34.0267395887],
    '驻马店': [114.049153547, 32.9831581541],
    '济源': [112.608898, 35.074838],
    '省直': [113.759766, 34.773383]
};


var yn = [{
    name: '省直',
    value: 200
}, {
    name: '郑州',
    value: 400
}, {
    name: '洛阳',
    value: 200
}, {
    name: '开封',
    value: 20
}, {
    name: '信阳',
    value: 30
}, {
    name: '驻马店',
    value: 212
}, {
    name: '南阳',
    value: 456
}, {
    name: '周口',
    value: 125
}, {
    name: '许昌',
    value: 2085
}, {
    name: '平顶山',
    value: 322
}, {
    name: '新乡',
    value: 303
}, {
    name: '漯河',
    value: 5
}, {
    name: '商丘',
    value: 304
}, {
    name: '三门峡',
    value: 35
}, {
    name: '济源',
    value: 350
}, {
    name: '焦作',
    value: 23
}, {
    name: '安阳',
    value: 45
}, {
    name: '鹤壁',
    value: 35
}, {
    name: '濮阳',
    value: 50
}, {
    name: '开封',
    value: 24
}];
var gd = [{
    name: '省直',
    value: 300
}, {
    name: '郑州',
    value: 490
}, {
    name: '洛阳',
    value: 210
}, {
    name: '开封',
    value: 120
}, {
    name: '信阳',
    value: 300
}, {
    name: '驻马店',
    value: 212
}, {
    name: '南阳',
    value: 230
}, {
    name: '周口',
    value: 125
}, {
    name: '许昌',
    value: 25
}, {
    name: '平顶山',
    value: 22
}, {
    name: '新乡',
    value: 303
}, {
    name: '漯河',
    value: 5
}, {
    name: '商丘',
    value: 304
}, {
    name: '三门峡',
    value: 35
}, {
    name: '济源',
    value: 350
}, {
    name: '焦作',
    value: 23
}, {
    name: '安阳',
    value: 45
}, {
    name: '鹤壁',
    value: 35
}, {
    name: '濮阳',
    value: 50
}, {
    name: '开封',
    value: 24
}];


var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    //console.log(res)
    return res;
};




option = {
    title: {
        text: '测试bar3D、scatter3D、geo3D',
        x: 'left',
        top: "10",
        textStyle: {
            color: '#000',
            fontSize: 14
        }
    },

    legend: {
        show: true,
        data: ['系列1', '系列2'],
    },

    tooltip: {
        show: true,
        formatter: (params) => {
            let data = params.name + "<br/>" + params.seriesName + "：" + params.value[2];
            debugger
            return data;

        },

    },
    /*     visualMap: [{
             show:false,
             type: 'continuous',
             seriesIndex: 0,
             text: ['bar3D'],
             calculable: true,
             max: 400,
             inRange: {
                 color: ['#87aa66', '#eba438', '#d94d4c']
             }
         },
        //  {
        //      type: 'continuous',
        //      seriesIndex: 1,
        //      text: ['scatter3D'],
        //      left: 'right',
        //      max: 100,
        //      calculable: true,
        //      inRange: {
        //          color: ['#000', 'blue', 'purple']
        //      }
        //  }
         ],*/
    geo3D: {
        map: 'henan',
        roam: true,

        //boxWidth:'100%',   
        boxHeight: 16,
        boxDepth: 95,
        regionHeight: 4, //立体阴影高度

        //  groundPlane: {    //地面
        //      show: true,
        //      color: '#555555',
        //  },


        itemStyle: {
            areaColor: '#1d5e98',
            opacity: 1,
            borderWidth: 0.6,
            borderColor: 'yellow'
        },
        label: {
            show: true,
            textStyle: {
                color: '#00ffff', //地图初始化区域字体颜色
                fontSize: 14,
                opacity: 1, //图形不透明度
                backgroundColor: 'rgba(0,23,11,0.6)'
            },
        },
        emphasis: { //当鼠标放上去  地区区域是否显示名称
            label: {
                show: false,
                textStyle: {
                    color: '#FFF',
                    fontSize: 14,
                    backgroundColor: 'rgba(0,23,11,0)'
                }
            }
        },
        //shading: 'lambert',
        light: { //光照阴影
            main: {
                color: '#00ffff', //光照颜色
                intensity: 1.2, //光照强度
                //shadowQuality: 'high', //阴影亮度
                shadow: false, //是否显示阴影
                alpha: 55,
                beta: 10

            },
            ambient: {
                intensity: 0.5
            }
        },

        viewControl: { //用于鼠标的旋转，缩放等视角控制。
            // autoRotate: true,    //自动旋转
            damping: 0.8,
            distance: 110, //距离中心原点的距离 
            //minDistance: 40,
            alpha: 55, // 视角绕x轴的角度
            beta: 0, // 视角绕y轴的角度
            center: [0, 0, 0], //视角中心点，旋转也会围绕这个中心点旋转，默认为[0,0,0]
            animation: true,
        }
    },
    series: [
        //柱状图
        {
            name: '系列1',
            type: "bar3D",
            coordinateSystem: 'geo3D',
            minHeight: 3, //最小高度
            //bevelSize:1,
            stack: 'one',
            barSize: 2, //柱子粗细
            //shading: 'lambert',
            opacity: 1,
            bevelSize: 0.3,


            itemStyle: {
                color: 'blue',
            },

            label: {
                show: false,
                formatter: '{b}'
            },
            emphasis: {
                label: {
                    show: false,
                },
            },
            data: convertData(yn),
        },

        {
            name: '系列2',
            type: "bar3D",
            coordinateSystem: 'geo3D',
            minHeight: 3, //最小高度
            //bevelSize:1,
            stack: 'one',
            barSize: 2, //柱子粗细
            //shading: 'lambert',
            opacity: 1,
            bevelSize: 0.3,

            itemStyle: {
                color: 'red',
            },


            label: {
                show: false,
                formatter: '{c}'
            },
            emphasis: {
                label: {
                    show: false,
                },
            },
            data: convertData(gd),
        },
        //画线        
        //      {
        //      name: 'scatter3D',
        //      type: "scatter3D",
        //      coordinateSystem: 'geo3D',
        //      symbol: 'pin',
        //      symbolSize: 30,
        //      opacity: 1,
        //      label: {
        //          show: false,
        //          formatter: '{b}'
        //      },
        //      itemStyle: {
        //          borderWidth: 0.5,
        //          borderColor: '#fff'
        //      },
        //      data: convertData([{
        //          name: "阳泉",
        //          value: ((Math.random() * 100) + 50).toFixed(2)
        //      }, {
        //          name: "莱州",
        //          value: ((Math.random() * 100) + 50).toFixed(2)
        //      }, {
        //          name: "湖州",
        //          value: ((Math.random() * 100) + 50).toFixed(2)
        //      }, {
        //          name: "汕头",
        //          value: ((Math.random() * 100) + 50).toFixed(2)
        //      }, {
        //          name: "昆山",
        //          value: ((Math.random() * 100) + 50).toFixed(2)
        //      }, {
        //          name: "张家口",
        //          value: ((Math.random() * 100) + 50).toFixed(2)
        //      }])
        //  },


    ]
};