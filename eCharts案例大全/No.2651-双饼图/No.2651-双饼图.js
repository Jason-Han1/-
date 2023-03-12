let index = 0;
var colorList = ['#73DDFF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF', '#58D5FF'];

myChart.on('mousemove', function (info) {
    var { dataIndex } = info;
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: dataIndex
    });
});

myChart.on('mouseout', function (info) {
    var { dataIndex } = info;
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: dataIndex
    });
});

option = {
    title: {
        text: 'PieChart',
        x: 'center',
        y: 'center',
        textStyle: {
            fontSize: 20,
        },
    },
    tooltip: {
        trigger: 'item',
    },
    series: [
        {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['24%', '45%'],
            clockwise: true,
            avoidLabelOverlap: false,
            hoverOffset: 20,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList[params.dataIndex];
                    },
                },
            },
            label: {
                show: true,
                position: 'outside',
                formatter: '{a|{b}：{d}%}\n{hr|}',
                rich: {
                    hr: {
                        backgroundColor: 't',
                        borderRadius: 3,
                        width: 3,
                        height: 3,
                        padding: [3, 3, 0, -12],
                    },
                    a: {
                        padding: [-30, 15, -20, 15],
                    },
                },
            },
            labelLine: {
                normal: {
                    length: 20,
                    length2: 30,
                    lineStyle: {
                        width: 1,
                    },
                },
            },
            data: [
                {
                    name: '北京',
                    value: 5600,
                },
                {
                    name: '上海',
                    value: 3600,
                },
                {
                    name: '广州',
                    value: 1500,
                },
                {
                    name: '深圳',
                    value: 2000,
                },
                {
                    name: '未知',
                    value: 899,
                },
                {
                    name: '海外',
                    value: 4000,
                },
            ],
            z: 0
        },
        {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['24%', '45%'],
            clockwise: true,
            avoidLabelOverlap: false,
            hoverOffset: 35,
            emphasis: {
                itemStyle: {
                opacity: 0.6
                }
            },
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList[params.dataIndex];
                    },
                },
            },
            label: {
                show: false,
                position: 'outside',
                formatter: '{a|{b}：{d}%}\n{hr|}',
                rich: {
                    hr: {
                        backgroundColor: 't',
                        borderRadius: 3,
                        width: 3,
                        height: 3,
                        padding: [3, 3, 0, -12],
                    },
                    a: {
                        padding: [-30, 15, -20, 15],
                    },
                },
            },
            labelLine: {
                normal: {
                    length: 20,
                    length2: 30,
                    lineStyle: {
                        width: 1,
                    },
                },
            },
            data: [
                {
                    name: '北京',
                    value: 5600,
                },
                {
                    name: '上海',
                    value: 3600,
                },
                {
                    name: '广州',
                    value: 1500,
                },
                {
                    name: '深圳',
                    value: 2000,
                },
                {
                    name: '未知',
                    value: 899,
                },
                {
                    name: '海外',
                    value: 4000,
                },
            ],
            z: 1
        },
    ],
};
