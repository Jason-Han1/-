option = {
    tooltip: {
        trigger: 'axis',
        show: false //是否显示提示框组件，包括提示框浮层
    },
    legend: {
        data: ['话费'],
        bottom: 8,
        show: false //不展示底部图例 

    },
    grid: [{

        // top: 30,
        // left: '20px', //设置距离左侧边距
        // right: '20px'

    }],
    toolbox: {
        show: false,

    },
    calculable: true,

    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['4月', '5月', '6月', '7月', '8月', '9月'],
        axisLine: {
            show: false //是否显示坐标轴轴线
        },
        axisTick: {
            show: true //是否显示坐标轴刻度
        },
        splitLine: {
            show: true //是否显示分隔线
        }
    }],
    yAxis: [{
            type: 'value',
            axisLine: {
                show: false //不展示y轴 是否显示坐标轴轴线
            },
            show: false, //是否显示坐标轴刻度
            axisTick: {
                show: false
            },
            splitLine: {
                show: false //是否显示分隔线
            }
        }

    ],
    series: [{
        name: '话费',
        type: 'line',
        showSymbol: true, //显示标记
        smooth: true, //折线圆滑

        data: ["63.60", "96.90", "88.00", "36.00", "70.00", "3.05"],
        itemStyle: {
            normal: {
                //color: "#3fb1e3",
                color: function(params) {
                    var colorList0 = ['#ff8200', '#3fb1e3', '#3fb1e3', '#3fb1e3', '#3fb1e3', '#3fb1e3'];
                    return colorList0[params.dataIndex]; //返回颜色
                },
                label: {
                    show: true //展示折线上的数据值
                },
                lineStyle: {
                    color: '#3fb1e3' //设置折线颜色
                }
            }
        }

    }]
};