var line03Color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    {
        offset: 0,
        color: '#F9E103',
    },
    {
        offset: 1,
        color: '#F9E103',
    },
]);

var line04Color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    {
        offset: 0,
        color: '#157eff',
    },
    {
        offset: 1,
        color: '#35c2ff',
    },
]);

var line07Color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    {
        offset: 0,
        color: '#157eff',
    },
    {
        offset: 1,
        color: '#35c2ff',
    },
]);

var line15Color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    {
        offset: 0,
        color: '#157eff',
    },
    {
        offset: 1,
        color: '#35c2ff',
    },
]);

// 开始/结束车站点
var symbolSizeBig = [12, 12];
var symbolSizeSmall = [8, 8];

var data = [
    //地铁03号线，站点间X轴坐标相差50，Y轴坐标相同
    {
        name: '03号线',
        symbolSize: 0.1,
        value: [1108, 1166],
        fixed: true,
        // draggable: false,
        category: 1,
        label: {
            color: '#F9E103',
            position: 'bottom',
            fontSize: 18,
            fontWeight: 1000,
        },
        itemStyle: {
            normal: {
                color: line03Color,
            },
        },
    },
    {
        name: '江杨北路',
        symbol: 'circle',
        symbolSize: symbolSizeBig,
        value: [1106, 1100],
        fixed: true,
        // draggable: false,
        category: 1,
        label: {
            color: '#FFF',
            position: 'right',
        },
        itemStyle: {
            normal: {
                color: line03Color,
            },
        },
    },
    {
        name: '铁力路',
        value: [1106, 1050],
        fixed: true,
        symbol: 'circle',
        symbolSize: symbolSizeSmall,
        label: {
            color: '#FFF',
            position: 'right',
        },
        category: 1,
        itemStyle: {
            normal: {
                color: line03Color,
            },
        },
    },
    {
        name: '友谊路',
        value: [1106, 1000],
        fixed: true,
        symbol: 'circle',
        symbolSize: symbolSizeSmall,
        label: {
            color: '#FFF',
            position: 'right',
        },
        category: 1,
        itemStyle: {
            normal: {
                color: line03Color,
            },
        },
    },
    {
        name: '宝杨路',
        value: [1106, 950],
        fixed: true,
        symbol: 'circle',
        symbolSize: symbolSizeSmall,
        label: {
            color: '#FFF',
            position: 'right',
        },
        category: 1,
        itemStyle: {
            normal: {
                color: line03Color,
            },
        },
    },
    {
        name: '水产路',
        value: [1106, 900],
        fixed: true,
        symbol: 'circle',
        symbolSize: symbolSizeSmall,
        label: {
            color: '#FFF',
            position: 'right',
        },
        category: 1,
        itemStyle: {
            normal: {
                color: line03Color,
            },
        },
    },
    {
        name: '淞浜路',
        value: [1106, 850],
        fixed: true,
        symbol: 'circle',
        symbolSize: symbolSizeSmall,
        label: {
            color: '#FFF',
            position: 'right',
        },
        category: 1,
        itemStyle: {
            normal: {
                color: line03Color,
            },
        },
    },
    {
        name: '张华浜',
        value: [1106, 800],
        fixed: true,
        symbol: 'circle',
        symbolSize: symbolSizeSmall,
        label: {
            color: '#FFF',
            position: 'right',
        },
        category: 1,
        itemStyle: {
            normal: {
                color: line03Color,
            },
        },
    },
    {
        name: '淞发路',
        value: [1106, 750],
        fixed: true,
        symbol: 'circle',
        symbolSize: symbolSizeSmall,
        label: {
            color: '#FFF',
            position: 'right',
        },
        category: 1,
        itemStyle: {
            normal: {
                color: line03Color,
            },
        },
    },
    {
        name: '长江南路',
        value: [1106, 700],
        fixed: true,
        symbol: 'circle',
        symbolSize: symbolSizeSmall,
        label: {
            color: '#FFF',
            position: 'right',
        },
        category: 1,
        itemStyle: {
            normal: {
                color: line03Color,
            },
        },
    },
    {
        name: '殷高西路',
        value: [1106, 650],
        fixed: true,
        symbol: 'circle',
        symbolSize: symbolSizeSmall,
        label: {
            color: '#FFF',
            position: 'right',
        },
        category: 1,
        itemStyle: {
            normal: {
                color: line03Color,
            },
        },
    },
    {
        name: '江湾镇',
        value: [1106, 600],
        fixed: true,
        symbol: 'circle',
        symbolSize: symbolSizeSmall,
        label: {
            color: '#FFF',
            position: 'right',
        },
        category: 1,
        itemStyle: {
            normal: {
                color: line03Color,
            },
        },
    },
    {
        name: '大柏树',
        value: [1106, 550],
        fixed: true,
        symbol: 'circle',
        symbolSize: symbolSizeSmall,
        label: {
            color: '#FFF',
            position: 'right',
        },
        category: 1,
        itemStyle: {
            normal: {
                color: line03Color,
            },
        },
    },
    {
        name: '赤峰路',
        value: [1106, 500],
        fixed: true,
        symbol: 'circle',
        symbolSize: symbolSizeSmall,
        label: {
            color: '#FFF',
            position: 'right',
        },
        category: 1,
        itemStyle: {
            normal: {
                color: line03Color,
            },
        },
    },
    {
        name: '虹口足球场',
        value: [1106, 450],
        fixed: true,
        symbol: 'circle',
        symbolSize: symbolSizeSmall,
        label: {
            color: '#FFF',
            position: 'right',
        },
        category: 1,
        itemStyle: {
            normal: {
                color: line03Color,
            },
        },
    },
    {
        name: '东宝兴路',
        value: [1106, 400],
        fixed: true,
        symbol: 'circle',
        symbolSize: symbolSizeSmall,
        label: {
            color: '#FFF',
            position: 'right',
        },
        category: 1,
        itemStyle: {
            normal: {
                color: line03Color,
            },
        },
    },
    //地铁04号线，站点间X轴坐标相差50，Y轴坐标相同
    {
        name: '04号线',
        symbolSize: 0.1,
        value: [644, 710],
        fixed: true,
        // draggable: false,
        category: 1,
        label: {
            color: 'red',
            position: 'bottom',
            fontSize: 24,
            fontWeight: 1000,
        },
        itemStyle: {
            normal: {
                color: line04Color,
            },
        },
    },
     {
        name: '曹杨路',
        value: [215, 860 ],
        fixed: true,
        symbol: 'circle',
        symbolSize: symbolSizeSmall,
        label: {
            color: '#FFF',
            position: 'right',
        },
        category: 1,
        itemStyle: {
            normal: {
                color: line04Color,
            },
        },
    },
       {
        name: '金沙江路',
        value: [170, 810 ],
        fixed: true,
        symbol: 'circle',
        symbolSize: symbolSizeSmall,
        label: {
            color: '#FFF',
            position: 'right',
        },
        category: 1,
        itemStyle: {
            normal: {
                color: line04Color,
            },
        },
    },
     {
        name: '蓝村路',
        value: [860, 315],
        fixed: true,
        symbol: 'circle',
        symbolSize: symbolSizeSmall,
        label: {
            color: '#FFF',
            position: 'right',
        },
        category: 1,
        itemStyle: {
            normal: {
                color: line04Color,
            },
        },
    },
    //地铁07号线，站点间X轴坐标相差50，Y轴坐标相同
    {
        name: '07号线',
        symbolSize: 0.1,
        value: [320, 1068],
        fixed: true,
        // draggable: false,
        category: 1,
        label: {
            color: '#FF00FF',
            position: 'bottom',
            fontSize: 24,
            fontWeight: 1000,
        },
        itemStyle: {
            normal: {
                color: line07Color,
            },
        },
    },
    //地铁15号线，站点间X轴坐标相差50，Y轴坐标相同
    {
        name: '15号线',
        symbolSize: 0.1,
        value: [142, 71],
        fixed: true,
        // draggable: false,
        category: 1,
        label: {
            color: '#48D1CC',
            position: 'bottom',
            fontSize: 24,
            fontWeight: 1000,
        },
        itemStyle: {
            normal: {
                color: line15Color,
            },
        },
    },
    //地铁一号线，站点间X轴坐标相差50，Y轴坐标相同
];

option = {
    title: {
        text: '上海地铁线路图',
        textStyle: {
            color: 'white',
            fontSize: 20,
        },
        x: 'center',
        top: 10,
    },
    //不设置背景颜色就是透明色
    backgroundColor: '#000000',
    xAxis: {
        show: false,
        min: 0,
        max: 1200,
        // type: "value",
        //开启x轴坐标
        axisPointer: {
            show: true,
        },
    },
    yAxis: {
        show: false,
        min: 0,
        max: 1200,
        //   type: "value",
        //开启y轴坐标
        axisPointer: {
            show: true,
        },
    },
    tooltip: {},
    //  legend: {
    //     show: false
    //  },
    series: [
        {
            type: 'graph',
            zlevel: 5,
            draggable: false,
            coordinateSystem: 'cartesian2d', //使用二维的直角坐标系（也称笛卡尔坐标系）
            // edgeSymbolSize: [0, 8], //边两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定
            // edgeLabel: {
            //   normal: {
            //     textStyle: {
            //       fontSize: 60
            //     }
            //   }
            // },
            symbol: 'rect',
            symbolOffset: ['5%', 0],
            label: {
                normal: {
                    show: true,
                },
            },
            data: data,
            links: [
                {
                    source: '江杨北路',
                    target: '铁力路',
                    lineStyle: {
                        normal: {
                            color: '#F9E103',
                        },
                    },
                },
                {
                    source: '铁力路',
                    target: '友谊路',
                    lineStyle: {
                        normal: {
                            color: '#F9E103',
                        },
                    },
                },
                {
                    source: '友谊路',
                    target: '宝杨路',
                    lineStyle: {
                        normal: {
                            color: '#F9E103',
                        },
                    },
                },
            ],
            lineStyle: {
                normal: {
                    opacity: 0.6, //线条透明度
                    color: '#F9E103',
                    curveness: 0, //站点间连线曲度，0表示直线
                    width: 5, //线条宽度
                },
            },
        },
        {
            type: 'lines',
            coordinateSystem: 'cartesian2d',
            z: 1,
            zlevel: 7,
            animation: true,
            effect: {
                show: true,
                period: 5,
                trailLength: 0.71,
                symbolSize: 14,
                symbol: 'circle',
                loop: true,
                color: 'yellow',
                //   color: "rgba(55,155,255,0.5)"
            },
            lineStyle: {
                normal: {
                    // color: "green",
                    width: 0,
                    curveness: 0, //动画线路的曲度
                },
            },

            data: [
                {
                    //一号线
                    coords: [
                        [5, 600],
                        [1130, 600],
                    ],
                },
                {
                    //二号线
                    coords: [
                        [680, 50],
                        [680, 1050],
                    ],
                },
                //   {  //三号线
                //     coords: [
                //       [280, 350],
                //       [1040, 1080]
                //     ]
                //   }
            ],
        },
    ],
};
