var colorList = ['#22D7BB', '#24AAFF', '#5EDDF8', '#FCB840', '#F9D660'];
let color1 = [
    ['rgba(34,215,187,0.5)', 'rgba(34,215,187,1)'],
    ['rgba(36,170,255,0.5)', 'rgba(36,170,255,1)'],
];
var dataChart = [23, 45];
option = {
    backgroundColor: '#FFFFFF',
    color: colorList,
    grid: {
        bottom: 150,
        left: 0,
        right: '10%',
    },
    legend: {
        show: false,
        orient: 'vertical',
        top: 'middle',
        right: '5%',
        textStyle: {
            color: '#f2f2f2',
            fontSize: 25,
        },
        icon: 'roundRect',
    },
    series: [
        // 边框
        {
            radius: ['58%', '58.3%'],
            center: ['50%', '50%'],
            type: 'pie',
            hoverAnimation: false,
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: true,
                },
                emphasis: {
                    show: false,
                },
            },
            animation: false,
            tooltip: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: '#CED5E1',
                },
            },
            data: [1],
        },
        // 主要展示层的
        {
            radius: '52%',
            center: ['50%', '50%'],
            type: 'pie',
            // hoverAnimation: false,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return {
                            type: 'line',
                            x: 1,
                            y: 0,
                            x2: 0,
                            y2: 0,
                            colorStops: [
                                { offset: 0, color: color1[params.dataIndex][0] },
                                { offset: 1, color: color1[params.dataIndex][1] },
                            ],
                        };
                    },
                    borderWidth: 12,
                    borderColor: '#fff',
                },
            },
            label: {
                show: false,
            },
            data: dataChart,
        },
        // 外边设置
        {
            radius: ['50%', '58%'],
            center: ['50%', '50%'],
            type: 'pie',
            hoverAnimation: false,
            zlevel:99,
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: true,
                },
                emphasis: {
                    show: false,
                },
            },
            animation: false,
            tooltip: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: 'rgba(206,213,225,0.12)',
                },
            },
            data: [1],
        },
    ],
};
