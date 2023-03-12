var labelRight = {
    position: 'right'
};
let echartstable555 = {
    xdata: ['-100', '-50', '0', '50', '100'],
    ydata: ['通许县', '杞县', '兰考县', '尉氏县', '祥符区', '顺河区', '禹王台区', '龙亭区', '鼓楼区'],
    yydata: [-50, '', '', '', '', '', '', '', '',],
}
option={
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: '{c}%'
    },
    grid: {
        top: 0,
        left: 60,
        right: 30,
        bottom: 150
    },
    xAxis: {
        axisTick: {       //Y轴刻度线
            show: false,
        },
        type: 'value',
        min: -100,
        max: 100,
        position: 'bottom',
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                show: false,
                color: ['#bbbbbb'], // 颜色
            }
        },
        data: echartstable555.xdata
    },
    yAxis: {
        type: 'category',
        axisLabel: {
            show: true,
            margin: 57,
            textStyle: {
                color: '#bbbbbb',
                align: 'left',
            }
        },
        axisTick: { show: false },
        splitLine: { show: false, color: ['#bbbbbb'] },
        data: echartstable555.ydata
    },
    series: [
        {
            name: '收入',
            type: 'bar',
            stack: '总量',
            barWidth: 20,
            label: {
                show: true,
                position: 'right',
                formatter: '增长{c}%',
                color: ['#02D0FC'],
                fontSize: 10
            },
            emphasis: {
                focus: 'series'
            },
            data: ['', 8, 20, 30, 34, 45, 55, 60, 74],
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 30, 30, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#1372FF" // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: "#A3EDFF" // 60% 处的颜色
                    }], false)
                }
            }
        },
        {
            name: '支出',
            type: 'bar',
            stack: '总量',
            barWidth: 20,
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(0,0,0,0.05)',
            },
            label: {
                show: true,
                position: 'right',
                formatter: '负增长{c}%',
                color: ['#FFE935'],
                fontSize: 10
            },
            emphasis: {
                focus: 'series'
            },
            data: echartstable555.yydata,
            itemStyle: {
                normal: {
                    barBorderRadius: [30, 0, 0, 30],
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#F9C2C0" // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: "#E23E36" // 60% 处的颜色
                    }], false)
                }
            }
        }
    ]
}