const xData = ['北京', '深圳', '武汉', '长沙', '上海']
const yData = [1, 22, 5, 80, 45];
const yData1 = [100, 100, 100, 100, 100]; //背景框高度

option = {
    title: {
        text: '电池柱状图',
        textStyle: {
            textAlign: 'center',
        }
    },
    tooltip: {
        show: true,
        formatter: val => {
            if (val.componentIndex === 0) {
                return `${val.name}&nbsp;&nbsp;${val.data}`;
            }
        }
    },
    // x轴设置
    xAxis: {
        type: 'category',
        data: xData,
        // x轴背景网格线
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: 'rgba(255,255,255 ,0.1)',
                width: 1,
            }
        },
        axisLabel: {
            margin: 20, // x轴标签与轴线距离
            fontSize: 16,
            color: 'rgba(255, 255, 255, 0.5)'
        },
        // x轴标签
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255 ,0.1)',
            }
        }
    },
    // y轴设置
    yAxis: {
        type: 'value',
        // 标签
        axisLabel: {
            show: false,
        },
        // 坐标轴线
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255 ,0.1)'
            }
        },
        // 背景网格线
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255 ,0.1)'
            }
        },
        // y轴刻度
        axisTick: {
            show: false,
            length: 2,
            lineStyle: {
                width: 2,
                color: 'rgba(255， 255， 255 ,1)'
            }
        },
    },
    series: [{
        // 中间重复的方块
        type: 'pictorialBar',
        symbol: 'rect',
        symbolSize: ['20%', 10],
        symbolRepeat: true,
        symbolMargin: 2,
        data: yData,
        z: 1,
        itemStyle: {
            color: 'rgba(136, 204, 244,1)'
        }
    }, {
        // 背景框
        type: 'bar',
        barWidth: 40,
        data: yData1,
        z: 0,
        itemStyle: {
            borderWidth: 2,
            borderColor: 'rgba(54, 124, 132,1)',
            color: 'transparent',
        },
    }]
};