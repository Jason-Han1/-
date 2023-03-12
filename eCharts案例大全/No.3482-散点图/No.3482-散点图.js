var uploadedDataURL = '/asset/get/s/data-1528971808162-BkOXf61WX.json';

/**
此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果

默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

http://echarts.baidu.com/option.html#series-map.geoIndex

并且加了pin气泡图标以示数值大小
*/
var max = 6000,
    min = 1;
var maxSize4Pin = 100,
    minSize4Pin = 1;
var points = [
    {
        value: [118.31, 26.07, 500], //福建
        itemStyle: {
            color: '#f34e2b',
        },
    },
    {
        value: [113.98, 23.52, 500], //广东
        itemStyle: {
            color: '#f34e2b',
        },
    },
    {
        value: [113.46, 34.25, 500], //河南
        itemStyle: {
            color: '#f34e2b',
        },
    },
    {
        value: [112.29, 30.98, 500], //湖北
        itemStyle: {
            color: '#f34e2b',
        },
    },
    {
        value: [112.08, 27.79, 500], //湖南
        itemStyle: {
            color: '#f34e2b',
        },
    },
    {
        value: [120.26, 32.54, 500], //江苏
        itemStyle: {
            color: '#f34e2b',
        },
    },
    {
        value: [123.42, 41.29, 500], //辽宁
        itemStyle: {
            color: '#f34e2b',
        },
    },
    {
        value: [118.01, 36.37, 500], //山东
        itemStyle: {
            color: '#f34e2b',
        },
    },
    {
        value: [101.71, 24.84, 500], //云南
        itemStyle: {
            color: '#f34e2b',
        },
    },
    {
        value: [128.34, 47.05, 500], //黑龙江
        itemStyle: {
            color: '#f34e2b',
        },
    },
    {
        value: [120.15, 29.28, 500], //浙江
        itemStyle: {
            color: '#f34e2b',
        },
    },
    {
        value: [114.05, 22.55, 1000, '深圳'], //深圳
        itemStyle: {
            color: '#f34e2b',
        },
    },
    {
        value: [108.93, 34.27, 1000, '西安'], //西安
        itemStyle: {
            color: '#f34e2b',
        },
    },
    {
        value: [113.9, 35.3, 1000, '新乡'], //新乡
        itemStyle: {
            color: '#f34e2b',
        },
    },
    {
        value: [112.93, 28.23, 1000, '长沙'], //长沙
        itemStyle: {
            color: '#f34e2b',
        },
    },
];
// var uploadedDataURL = "/asset/get/s/data-1482909892121-BJ3auk-Se.json";
myChart.showLoading();
let index = -1;

$.getJSON(uploadedDataURL, function (geoJson) {
    echarts.registerMap('china', geoJson);
    myChart.hideLoading();
    option = {
        backgroundColor: '#BAD0DB',
        /*   title: {
               top: 20,
               text: '“困难人数” - 杭州市',
               subtext: '',
               x: 'center',
               textStyle: {
                   color: '#ccc'
               }
           },*/

        // tooltip: {
        //     trigger: 'item',
        //     formatter: function(params) {
        //         console.log(params)
        //             return params.name + ' : ' + params.value[2];
        //     }
        // },
        /*visualMap: {
           min: 0,
           max: 1000000,
           right: 100,
           seriesIndex: 1,
           type: 'piecewise',
           bottom: 100,
           textStyle: {
             color: '#FFFF'
           },
           splitList: [
             {
               gt: 50000,
               color: '#F5222D',
               label: '困难人数大于5万人'
             }, //大于5万人
             {
               gte: 30000,
               lte: 50000,
               color: '#FA541C ',
               label: '困难人数3-5万人'
             }, //3-5万人
             {
               gte: 10000,
               lte: 30000,
               color: '#FA8C16',
               label: '困难人数1-3万人'
             }, //1-3万人
             {
               lte: 10000,
               color: '#fbe1d6',
               label: '困难人数小于1万人'
             }
           ]
         },*/

        geo: {
            map: 'china',
            aspectScale: 0.75, //长宽比
            zoom: 1.1,
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#09132c', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#274d68', // 100% 处的颜色
                            },
                        ],
                        globalCoord: true, // 缺省为 false
                    },
                    shadowColor: 'rgb(58,115,192)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                },
                emphasis: {
                    areaColor: '#2AB8FF',
                    borderWidth: 0,
                    color: 'green',
                    label: {
                        show: false,
                    },
                },
            },
            regions: [
                {
                    name: '南海诸岛',
                    itemStyle: {
                        areaColor: 'rgba(0, 10, 52, 1)',

                        borderColor: 'rgba(0, 10, 52, 1)',
                        normal: {
                            opacity: 0,
                            label: {
                                show: false,
                                color: '#009cc9',
                            },
                        },
                    },
                },
                {
                    name: '新疆',
                    itemStyle: {
                        areaColor: 'red',
                        color: 'red',
                    },
                },
            ],
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
                        borderColor: 'rgb(147, 235, 248)',
                        borderWidth: 1,
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: '#A8CDE5', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: '#77BAE1', // 100% 处的颜色
                                },
                            ],
                            globalCoord: true, // 缺省为 false
                        },
                    },
                    emphasis: {
                        areaColor: 'rgb(46,229,206)',
                        //    shadowColor: 'rgb(12,25,50)',
                        borderWidth: 0.1,
                    },
                },
                zoom: 1.1,
                //     roam: false,
                map: 'china', //使用
                // data: this.difficultData //热力图数据   不同区域 不同的底色
            },
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                showEffectOn: 'render',
                zlevel: 1,
                rippleEffect: {
                    brushType: 'stroke',
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        show: true,
                        color: '#FFE400',
                        fontWeight: 'bold',
                        position: 'right',
                        formatter: function (para) {
                            console.log(para);
                            if (para.data.value[2] == 1000) return para.data.value[3];
                            else return '';
                        },
                        rich: {
                            cnNum: {
                                fontSize: 13,
                                color: '#D4EEFF',
                            },
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: 'rgba(5,80,151,0.2)',
                                },
                                {
                                    offset: 0.8,
                                    color: 'rgba(5,80,151,0.8)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(0,108,255,0.7)',
                                },
                            ],
                            global: false, // 缺省为 false
                        },
                    },
                },
                symbol: 'circle',
                symbolSize: function (val) {
                    console.log(val);
                    if (val[2] === 0) {
                        return 0;
                    }
                    var a = (maxSize4Pin - minSize4Pin) / (max - min);
                    var b = maxSize4Pin - a * max;
                    return a * val[2] + b * 1.2;
                },
                data: points,
            },
        ],
    };
    myChart.setOption(option, true);
});
