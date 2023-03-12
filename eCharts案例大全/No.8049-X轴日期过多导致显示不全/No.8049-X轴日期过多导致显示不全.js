const dataobj = [
    [
        ["2019-09-18", 1],
        ["2019-09-27", 1],
        ["2019-10-11", 1],
        ["2019-10-18", 1],
        ["2019-10-25", 1],
        ["2019-11-01", 1],
        ["2019-11-08", 1],
        ["2019-11-15", 1.1],
        ["2019-11-22", 1.26],
        ["2019-11-29", 1.18],
        ["2019-12-06", 1.16],
        ["2019-12-13", 1.16],
        ["2019-12-20", 1.16],
        ["2019-12-27", 1.16],
        ["2020-01-03", 0.98],
        ["2020-01-21", 1.06],
        ["2020-01-28", 1.08],
        ["2020-02-04", 1.09],
        // ["2020-02-11", 1.12],
        // ["2020-02-18", 1.10],
    ],
    [
        ["2019-09-18", 1],
        ["2019-09-27", 1],
        ["2019-10-11", 1],
        ["2019-10-18", 1],
        ["2019-10-25", 1],
        ["2019-11-01", 1],
        ["2019-11-08", 1],
        ["2019-11-15", 1.1],
        ["2019-11-22", 1.26],
        ["2019-11-29", 1.18],
        ["2019-12-06", 1.16],
        ["2019-12-13", 1.16],
        ["2019-12-20", 1.16],
        ["2019-12-27", 1.16],
        ["2020-01-03", 1.16],
        ["2020-01-21", 1.06],
        ["2020-01-28", 1.08],
        ["2020-02-04", 1.04],
        // ["2020-02-11", 1.12],
        // ["2020-02-18", 1.10],
    ]
];
let series1 = [],
    series2 = [],
    dataX = [];

dataX = dataobj[1].map(item => item[0]);
series1 = dataobj[0].map(item => item[1]);
series2 = dataobj[1].map(item => item[1]);
// interval = dataX.length % 2 > 0 ? 1 : 2;

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        borderWidth: 1,
        textStyle: {
            fontSize: 12
        },
    },
    toolbox: {
        show: false,
        right: "50px",
        feature: {
            saveAsImage: {
                show: true,
            },
            restore: {},
            magicType: {
                show: true,
                type: ['line', 'bar']
            }
        }
    },
    legend: {
        data: ['单位净值', '累计净值'],
        itemWidth: 20,
        itemHeight: 12,
        bottom: 0
    },
    grid: {
        top: 20,
        left: 45,
        bottom: 100,
    },
    dataZoom: [{
        id: 'dataZoomX',
        type: 'slider',
        showDataShadow: false,
        height: 13,
        handleSize: 12,
        right: 7,
        left: 22,
        handleIcon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z"
    }],
    xAxis: {
        type: 'category',
        boundaryGap: false,
        name: "",
        data: dataX,
        axisLabel: {
            fontSize: 10,
            // interval: 0,
            showMinLabel: true,
            showMaxLabel: true,
            rotate: 40,
            // formatter: function(value, index) {
            //     var len = dataX.length;
            //     var interval = 2;
            //     interval = Math.ceil(len / 10);
            //     if (index == len - 1) {
            //         return value;
            //     } else if (index % interval !== 0) {
            //         return '';
            //     } else {
            //         return value;
            //     }
            // },
        },
    },
    yAxis: {
        type: "value",
        scale: true,
        minInterval: 0.01,
        nameTextStyle: {
            color: "#999999"
        },
        splitLine: {
            lineStyle: {
                type: "dashed"
            }
        },
        axisLine: {
            lineStyle: {
                width: 1
            }
        },
        axisTick: {
            show: false
        },
    },
    series: [{
        name: '单位净值',
        type: 'line',
        // areaStyle: {
        //     normal: {
        //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        //             offset: 0, // 0% 处的颜色
        //             color: '#fd6800'
        //         }, {
        //             offset: 1, // 100% 处的颜色
        //             color: '#ffe'
        //         }])
        //     }
        // },
        smooth: true,
        smoothMonotone: 'x',
        itemStyle: {
            normal: {
                color: '#7d0000',
            }
        },
        lineStyle: {
            normal: {
                width: 1,
            }
        },
        data: series1,
    }, {
        name: '累计净值',
        type: 'line',
        // areaStyle: {
        //     normal: {
        //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        //             offset: 0, // 0% 处的颜色
        //             color: '#fd6800'
        //         }, {
        //             offset: 1, // 100% 处的颜色
        //             color: '#ffe'
        //         }])
        //     }
        // },
        smooth: true,
        smoothMonotone: 'x',
        itemStyle: {
            normal: {
                color: '#fd6800',
            }
        },
        lineStyle: {
            normal: {
                width: 1,
            }
        },
        data: series2,
    }]
};