// note: 设置灰色背景色的长度的逻辑不够好，请自行调整
var honorData = [{
    name: "2019末",
    data: [1800, 1600, 1400, 1200, 1000, 800, 600, 400]
}, {
    name: "2020上半年",
    data: [1800, 1600, 1400, 1200, 1000, 800, 600, 400]
}, {
    name: "2020下半年",
    data: [1800, 1600, 1400, 1200, 1000, 800, 600, 400]
}, {
    name: "2021年",
    data: [1800, 1600, 1400, 1200, 1000, 800, 600, 400]
}, ];
var honorXAxisData = ["电机有限公司（合并）", "电机有限公司（本部）", "电气有限公司",
    "西安电气有限公司", "先锋电气有限公司", "南非电机有限公司"
];
// // 设置灰色背景色的长度
var isMax = 2000
var bjData1 = [isMax, isMax, isMax, isMax, isMax, isMax, isMax, isMax, isMax];
var option = {
    color: ['#0F9AF8', '#2039C3', 'rgba(32,57,195,.5)', '#2ECACE'],
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "none"
        },
    },
    backgroundColor: '#031f2d',

    legend: {
        right: 5,
        top: '5%',
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 15,
        textStyle: {
            color: '#ACCFFF',
            fontSize: 16,
        },
    },
    grid: {
        left: "5%",
        right: "5%",
        bottom: "5%",
        top: "10%",
        containLabel: true
    },
    xAxis: [{
        type: "value",
        show: false,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: "#6B9DD7",
            fontSize: 16, // 文字大小
            fontWeight: 400,
            interval: 0,
            formatter: function(value) {
                return value + "(万元)"
            },
        },
        splitLine: {
            show: false
        },
    }, ],
    yAxis: [{
        type: "category",
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: "#6B9DD7",
            fontSize: 16, // 文字大小
            fontWeight: 400,
            interval: 0
        },
        offset: 20,
        data: honorXAxisData
    }],
    series: [{
        name: "2019末",
        type: "bar",
        stack: 'zongliang',
        barWidth: '35%',
        zlevel: 10,
        label: {
            normal: {
                show: true,
                position: 'inside',
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                }
            }
        },
        data: honorData[0].data,
    }, {
        name: "2020上半年",
        type: "bar",
        stack: 'zongliang',
        barWidth: '35%',
        zlevel: 10,
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: function(params) {
                    console.log(params)
                    // return  params.seriesName + params.value ;
                    return   '完成'+ params.value;
                },
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                }
            }
        },
        data: honorData[1].data,
    }, {
        name: "2020下半年",
        type: "bar",
        stack: 'zongliang',
        barWidth: '35%',
        zlevel: 10,
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: function(params) {
                    console.log(params)
                    // return  params.seriesName + params.value ;
                    return   '预算'+ params.value ;
                },
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                }
            }
        },
        data: honorData[2].data,
    }, {
        name: "2021年",
        type: "bar",
        stack: 'zongliang',
        barWidth: '35%',
        zlevel: 10,
        label: {
            normal: {
                show: true,
                position: 'inside',
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                }
            }
        },
        data: honorData[3].data,
    }]
}