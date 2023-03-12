var data = [70, 34, 60, 78, 69];
var titlename = ['太原市民政局', '太原市运输局', '太原市残联', '太原市报社', '太原市司法局'];
var valdata = [];
option = {
    backgroundColor: '#081028',
    xAxis: {
        show: true,
        //设置title 刻度标签样式
        axisLabel: {
            show: true,
            color: '#a2a2a2',
        },
        //设置底部轴线样式
        axisLine: {
            show: false,
            color: '#fff',
            lineStyle: {
                color: 'red',
                type: 'dotted',
            },
        },
        //设置网格线颜色
        splitLine: {
            show: true,
            lineStyle: {
                color: ['rgba(160, 192, 252, 0.2)'],
                width: 1,
                type: [5, 8],
                dashOffset: 2,
            },
        },
    },
    yAxis: [
        //左侧Y轴设置
        {
            //数据
            data: titlename,
            //显示
            show: true,
            //是否是反向坐标轴
            inverse: false,
            //轴线样式
            axisLine: {
                show: true,
                lineStyle: {
                    color: ['rgba(160, 192, 252, 0.2)'],
                    width: 1,
                    type: [5, 8],
                    dashOffset: 2,
                },
            },
            //设置网格线
            splitLine: {
                show: false,
            },
            //坐标轴刻度
            axisTick: {
                show: false,
            },
            //设置title 刻度标签样式
            axisLabel: {
                color: '#fff',
              
            },
        },
        //右侧侧Y轴设置
        {
            show: false,
            inverse: false,
            data: valdata,
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: 'red',
                },
            },
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: data,
            barWidth: 30,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: '#28b1ff',
                        },
                        {
                            offset: 1,
                            color: '#00fcff',
                        },
                    ]),
                },
            },
            label: {
                normal: {
                    show: false,
                    position: 'inside',
                    formatter: '{c}%',
                },
            },
        },
        {
            name: '框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [100, 100, 100, 100, 100],
            barWidth: 30,
            itemStyle: {
                normal: {
                    color: 'rgba(160, 192, 252, 0.1)',
                    barBorderRadius: 15,
                },
            },
        },
    ],
};
