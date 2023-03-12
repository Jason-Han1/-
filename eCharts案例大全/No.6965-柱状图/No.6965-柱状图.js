var seven_day_date = new Date();
var seven_day_data = [];
for (var i = 0; i < 7; i++) {
    var month = seven_day_date.getMonth() + 1
    var day = seven_day_date.getDate() - 1
    seven_day_date = new Date(seven_day_date.getTime() - 1000 * 60 * 60 * 24);
    seven_day_data.push(addZero(month) + '.' + addZero(day))
}
seven_day_data.reverse()
// 补零
function addZero(data) {
    if (data < 10) {
        data = '0' + data
    }
    return data
}
var normalColor = "#23a6ae";
option = {
    backgroundColor: '#031A32',
    title: {
        textStyle: {
            fontSize: 14
        }
    },
    tooltip: { // 提示框组件
        trigger: 'axis',
        show: true,
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            // return params[0].name + " " + params[0].value;
            return params[0].value;
        }
    },
    grid: {
        left: '5%',
        right: '12%',
        bottom: '5%',
        top: '15%',
        containLabel: true,
        // show: false // 网格边框是否显示，上和右边框 
    },
    xAxis: {
        name: '时间',
        type: 'category',
        boundaryGap: true, // 坐标轴两边留白
        axisLabel: {
            color: '#fff',
            fontSize: 14,
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#fff',
            }
        },
        data: seven_day_data
    },
    yAxis: [{
        name: "数量",
        minInterval: 1,
        nameTextStyle: {
            fontSize: 14,
        },
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: '#fff',
            fontSize: 14,
            formatter: '{value}'
        },
        splitLine: {
            show: false,
            lineStyle: {
                type: "dashed",
                color: normalColor
            }
        },
    }, {
        name: "",
        type: 'value',
        axisLine: {
            show: false,
            lineStyle: {
                color: normalColor,
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false,

        },
    }, ],

    series: [{
            name: '',
            type: 'bar',
            stack: '1',
            zlevel: 2,
            barGap: '100%',
            barWidth: '40%',
            barCategoryGap: "50%",
            color: normalColor,
            data: [244,453,465,321,174,535,212]
        },
        {
            name: '',
            type: 'bar',
            barGap: '-122%',
            yAxisIndex: 1,
            zlevel: 1,
            itemStyle: {
                normal: {
                    color: 'rgba(35,166,174,0.3)',
                    borderWidth: 0,
                    shadowBlur: {
                        // shadowColor: 'rgba(61, 69, 79,0.31)',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowOffsetY: 2,
                    },
                }
            },
            barWidth: '60%',
            data: [10000, 10000, 10000, 10000, 10000, 10000, 10000]
        }
    ]
}