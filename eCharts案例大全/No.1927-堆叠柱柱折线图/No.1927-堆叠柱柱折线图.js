option = {
    color: ['#1e30ff', '#05aad3', '#08daaa', '#fdd613', '#fea537', '#0c928a'],
    legend: {
        data: ['森林', '农业', '草原', '林地', '其他', '固碳减排占比'],
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '1%',
        top: '25%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        borderWidth: '0',
        backgroundColor: 'rgba(73,81,92,.95)', //背景颜色
        borderWidth: '0', //边框为0
        textStyle: {
            color: '#fff', //字体颜色
        },
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999',
            },
        },
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true, //坐标轴两端不留空
            axisLine: {
                show: true, //隐藏X轴轴线
                lineStyle: {
                    color: '#D9D9D9',
                },
            },
            axisLabel: {
                show: true,
                //formatter: '{value}月',
                textStyle: {
                    padding: [2, 0, 0, 0],
                    color: '#333',
                },
            },
            axisTick: {
                show: false, //隐藏X轴刻度
            },
            axisPointer: {
                type: 'shadow',
            },
            data: ['2017', '2018', '2019', '2020', '2121'],
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '单位：万吨标准煤',
            min: 0,
            max: 1200,
            interval: 200,
            splitNumber: 6,
            axisLabel: {
                textStyle: {
                    color: '#666',
                },
            },
            //name的样式设计
            nameTextStyle: {
                align: 'left',
                padding: [0, 0, 0, -30],
            },
            splitLine: {
                lineStyle: {
                    type: 'solid', //设置网格线类型 dotted：虚线 solid:实线
                    color: '#E9E9E9',
                },
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
        {
            type: 'value',
            name: '吨/万元',
            min: 0,
            max: 60,
            splitNumber: 6,
            interval: 10,
            axisLabel: {
                textStyle: {
                    color: '#666',
                },
            },
            //name的样式设计
            splitLine: {
                lineStyle: {
                    type: 'solid', //设置网格线类型 dotted：虚线 solid:实线
                    color: '#E9E9E9',
                },
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '森林',
            type: 'bar',
            yAxisIndex: 0,
            stack: true, //堆叠柱状图
            barWidth: 30, //柱状图宽度
            // itemStyle: {
            //   barBorderRadius: 0,
            // },
            data: [98.4, 28.7, 170.7, 385.6, 202.2, 48.7,],
        },
        {
            name: '农业',
            type: 'bar',
            yAxisIndex: 0,
            stack: true, //堆叠柱状图
            barWidth: 30, //柱状图宽度
            // itemStyle: {
            //   barBorderRadius: [8, 8, 0, 0],
            // },
            data: [97.4, 261.7, 98.7, 225.6, 202.2, 48.7,],
        },
        {
            name: '草原',
            type: 'bar',
            yAxisIndex: 0,
            stack: true, //堆叠柱状图
            barWidth: 30, //柱状图宽度
            // itemStyle: {
            //   barBorderRadius: [8, 8, 0, 0],
            // },
            data: [361.4, 78.7, 115.7, 205.6, 162.2, 30.7,],
        },
        {
            name: '林地',
            type: 'bar',
            yAxisIndex: 0,
            stack: true, //堆叠柱状图
            barWidth: 30, //柱状图宽度
            // itemStyle: {
            //   barBorderRadius: [8, 8, 0, 0],
            // },
            data: [54.4, 158.7, 26.7, 55.6, 26.2, 48.7,],
        },
        {
            name: '其他',
            type: 'bar',
            yAxisIndex: 0,
            stack: true, //堆叠柱状图
            barWidth: 30, //柱状图宽度
            data: [106.4, 28.7, 324.7, 105.6, 202.2, 48.7,],
        },
        {
            name: '固碳减排占比',
            type: 'line',
            yAxisIndex: 1,
            data: [10, 32.5, 30.4, 52.6, 18.4, 24.8,],
        },
    ],
};
