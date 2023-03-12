let xdata = ['基础训练：基础体能', '基础训练：基础射击', '基础训练：队列'];
let ydata = [100, 70, 80];

let ydatamax = [];
for (var i = 0; i < ydata.length; i++) {
    ydatamax.push(100);
}
option = {
    backgroundColor:'#041540',
    title: {
        show: false,
    },
    tooltip: {
        show: true,
        backgroundColor: '#005ED8', //通过设置rgba调节背景颜色与透明度
        formatter: '{b}',
        position: 'right',
    },
    grid: {
        borderWidth: 0,
        top: '30',
        left: '40',
        right: '20%',
        bottom: '3%',
    },
    yAxis: [
        {
            inverse: true,
            type: 'category',
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
                inside: false,
            },
            data: xdata,
        },
    ],
    xAxis: {
        type: 'value',

        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },

    series: [
        {
            name: '',
            type: 'bar',
            zlevel: 2,
            barWidth: 8,
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 50, 50, 0],
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                        {
                            offset: 0,
                            color: '#12A0F1',
                        },
                        {
                            offset: 1,
                            color: '#031239',
                        },
                    ]),
                },
            },
            data: ydata,
            label: {
                normal: {
                    show: true,
                    position: [0, -20],
                    rich: {
                        name: {
                            color: '#fff',
                            fontSize: 14,
                        },
                    },
                    formatter: function (params) {
                        let paramsStr = '';
                        let { value, name } = params;
                        if (name.length > 6) {
                            paramsStr = name.substring(0, 6) + '...';
                        }
                        return `{name|${paramsStr}}`;
                    },
                },
            },
        },
        {
            // 背景
            type: 'bar',
            barGap: '-100%',
            barWidth: 8,
            top: -8,
            itemStyle: {
                normal: {
                    color: '#133564',
                    barBorderRadius: [0, 50, 50, 0],
                },
            },
            label: {
                normal: {
                    color: '#555',
                    show: true,
                    position: 'right',
                    textStyle: {
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#fff',
                    },
                    formatter: function (params) {
                        return ydata[params.dataIndex] + '%';
                    },
                },
            },
            data: ydatamax,
        },
        {
            // 背景
            type: 'bar',
            barGap: '-100%',
            barWidth: 8,
            top: -8,
            itemStyle: {
                normal: {
                    color: '#133564',
                    barBorderRadius: [0, 50, 50, 0],
                },
            },
            label: {
                normal: {
                    color: '#555',
                    show: true,
                    position: 'right',
                    offset: [-70, -15],
                    textStyle: {
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#fff',
                    },
                    rich: {
                        value: {
                            color: 'rgba(255, 255, 255,0.6)',
                            fontSize: 12,
                        },
                    },
                    formatter: function (params) {
                        return `{value| ${ydata[params.dataIndex]}人已学习}`;
                    },
                },
            },
            data: ydatamax,
        },
    ],
    // animationEasing: 'cubicOut'
};
