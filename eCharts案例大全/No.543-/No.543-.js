
let xdata = [
  "教官对民警考试教官对民警考试",
  "民警参加线上考民警参加线上考",
  "民警线上课程学民警线上课程学",
  "民警报名参加线民警报名参加线",
];
let ydata = [75, 62, 57, 42];
let max = Math.max.apply(null, ydata);
let ydatamax = [];
for (var i = 0; i < ydata.length; i++) {
    ydatamax.push(max);
}
option = {
    backgroundColor:'blurScope',
    title: {
        show: false,
    },
    tooltip: {
        show: true,
        backgroundColor: '#053A8D', //通过设置rgba调节背景颜色与透明度
        formatter: '{b}',
        position: 'top',
    },
    grid: {
        borderWidth: 0,
        top: '30',
        left: '40',
        right: '40',
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

                    // offset: [30, 40],
                    width: '100%',
                    rich: {
                        name: {
                            color: '#fff',
                            fontSize: 14,
                        },
                        value: {
                            display: 'block',
                            color: 'rgba(255, 255, 255,0.6)',
                            fontSize: 12,
                            position: 'right',
                        },
                    },
                    formatter: function (params) {
                        let { value, name } = params;
                        let paramsStr = name;
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
                        return Math.ceil((ydata[params.dataIndex] * 100) / ydatamax[0]) + '%';
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
                    offset: [-75, -15],
                    textStyle: {
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#fff',
                    },
                    rich: {
                        value: {
                            color: 'rgba(255, 255, 255,0.6)',
                            fontSize:12,
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
