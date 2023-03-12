let xdata = [
    '国家移民管理局网络通信技术培训班',
    '国家移民管理机构2020年新警入警培训（云南培训点）边检专业',
    '国家移民管理机构2020年新警入警培训（云南培训点）边管专业',
    '国家移民管理机构信息技术应用岗位技能培训班',
];
let ydata = [20, 20, 50, 80];
let rate = [30, 25, 63, 80];
let ydatamax = [];
for (var i = 0; i < ydata.length; i++) {
    ydatamax.push(100);
}
option = {
    backgroundColor: '#041540',
    title: {
        show: false,
    },
    tooltip: {
        show: true,
        backgroundColor: '#005ED8', //通过设置rgba调节背景颜色与透明度
        formatter: '{b}',
    },
    grid: {
        borderWidth: 0,
        top: '30',
        left: '40',
        right: '40',
        bottom: '-10',
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
                    barBorderRadius: 15,
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                        {
                            offset: 0,
                            color: '#16C6FB',
                        },
                        {
                            color: '#0A5AD3',
                            offset: 1,
                        },
                    ]),
                },
            },
            data: ydata,
            label: {
                normal: {
                    show: true,
                    position: [0, -22],
                    width: '100%',
                    rich: {
                        name: {
                            color: '#fff',
                            fontSize: 14,
                        },
                        value: {
                            display: 'block',
                            color: 'rgba(255, 255, 255,0.3)',
                            fontSize: 12,
                            position: 'right',
                        },
                    },
                    formatter: function (params) {
                        let paramsStr = '';
                        let { name } = params;
                        if (name.length > 6) {
                            paramsStr = name.substring(0, 6) + '...';
                        }
                        return `{name|${paramsStr}}`;
                    },
                },
            },
        },
        {
            name: '',
            type: 'bar',
            zlevel: 2,
            barWidth: 8,
            itemStyle: {
                normal: {
                    borderColor: 'transparent',
                    barBorderRadius: 0,
                    color: 'transparent',
                },
            },
            data: ydatamax,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    offset: [-75, -15],
                    width: '100%',
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
        },
        {
            // 背景
            type: 'bar',
            barGap: '-130%',
            barWidth: 18,
            itemStyle: {
                normal: {
                    borderColor: '#0b5dd4',
                    barBorderRadius: 15,
                    color: 'transparent',
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
                        return rate[params.dataIndex] + '%';
                    },
                },
            },
            data: ydatamax,
        },
    ],
};
