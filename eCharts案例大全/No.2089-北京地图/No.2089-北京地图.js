var uploadedDataURL = '/asset/get/s/data-1630027425393-SxVmyjR11.json';

/**
此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果

默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

http://echarts.baidu.com/option.html#series-map.geoIndex

并且加了pin气泡图标以示数值大小
*/
var points = [
    {
        value: [116.4, 39.9],
        itemStyle: {
            color: '#f58414',
        },
    },
    {
        value: [115.9, 39.96],
        itemStyle: {
            color: '#e7ab0b',
        },
    },
    {
        value: [115.98, 39.69],
        itemStyle: {
            color: '#1DE9B6',
        },
    } /*{
    value: [113.6200,34.7500],
    itemStyle: {
        color: '#f58414'
    }
},{
    value: [109.4800, 36.6000],
    itemStyle: {
        color: '#f58414'
    }
},{
    value: [107.1300,34.3700],
    itemStyle: {
        color: '#f58414'
    }
},{
    value: [113.2300,23.1600],
    itemStyle: {
        color: '#f58414'
    }
},{
    value: [117.4219, 39.4189],
    itemStyle: {
        color: '#f58414'
    }
},{
    value: [108.3700, 22.8200],
    itemStyle: {
        color: '#f58f0e'
    }
},{
    value: [109.1162, 34.2004],
    itemStyle: {
        color: '#f5a305'
    }
},{
    value: [103.5901, 36.3043],
    itemStyle: {
        color: '#e7ab0b'
    }
},{
    value: [106.3586, 38.1775],
    itemStyle: {
        color: '#dfae10'
    }
},{
    value: [103.9526, 30.7617],
    itemStyle: {
        color: '#c1bb1f'
    }
}*/,
];
// var uploadedDataURL = "/asset/get/s/data-1482909892121-BJ3auk-Se.json";
myChart.showLoading();
let index = -1;

$.getJSON(uploadedDataURL, function (geoJson) {
    echarts.registerMap('beijing', geoJson);
    myChart.hideLoading();
    option = {
        backgroundColor: '#091c3d',

        geo: {
            show: false,
            map: 'beijing',
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false,
                },
            },
            roam: true,
            itemStyle: {
                show:true,
                normal: {
                    areaColor: 'transparent',
                    borderColor: '#3fdaff',
                    borderWidth: 2,
                    shadowColor: 'rgba(63, 218, 255, 0.5)',
                    shadowBlur: 30,
                },
                emphasis: {
                    areaColor: '#2B91B7',
                },
            },
        },
        series: [
            {
                type: 'map',
                roam: false,
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize:15,
                            fontWeight:500,
                        },
                    },
                    emphasis: {
                        textStyle: {
                            color: 'rgb(183,185,14)',
                        },
                    },
                },

                itemStyle: {
                    normal: {
                        areaColor: '#003669',
                        borderColor: '#3fdaff',
                        borderWidth: 2,
                        shadowColor: 'rgba(63, 218, 255,0.6)',
                        shadowBlur: 35,
                    },
                    emphasis: {
                        areaColor: '#2B91B7',
                    },
                },
                zoom: 1.1,
                map: 'beijing', //使用
            },
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                showEffectOn: 'render',
                zlevel: 1,
                rippleEffect: {
                    period: 15,
                    scale: 4,
                    brushType: 'fill',
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        offset: [15, 0],
                        color: '#1DE9B6',
                        show: true,
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#1DE9B6',
                        shadowBlur: 20,
                        shadowColor: '#333',
                    },
                },
                symbolSize: 12,
                data: points,
            }, //地图线的动画效果
        ],
    };
    myChart.setOption(option, true);
});
