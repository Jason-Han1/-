var dataList = [
    {
        name: '装备制造',
        value: 54,
    },
    {
        name: '现代材料',
        value: 44,
    },
    {
        name: '新能源',
        value: 35,
    },
    {
        name: '新一代信息技术',
        value: 30,
    },
    {
        name: '商贸物流',
        value: 20,
    },
];
function _dashed() {
                        let dataArr = [];
                        for (var i = 0; i < 100; i++) {
                            if (i % 2 === 0) {
                                dataArr.push({
                                    name: (i + 1).toString(),
                                    value: 20,
                                    itemStyle: {
                                        normal: {
                                            color: 'rgb(0,255,255,.3)',
                                        },
                                    },
                                });
                            } else {
                                dataArr.push({
                                    name: (i + 1).toString(),
                                    value: 20,
                                    itemStyle: {
                                        normal: {
                                            color: 'rgb(0,0,0,0)',
                                            borderWidth: 1,
                                            borderColor: 'rgba(0,255,255,1)',
                                        },
                                    },
                                });
                            }
                        }
                        return dataArr;
                    }
var titleArr = [],
    seriesArr = [];
var colors = [
    ['#389af4', '#dfeaff'],
    ['#ff8c37', '#ffdcc3'],
    ['#ffc257', '#ffedcc'],
    ['#fd6f97', '#fed4e0'],
    ['#a181fc', '#e3d9fe'],
];
dataList.forEach(function (item, index) {
    titleArr.push({
        text: item.name,
        left: index * 35 + 10 + '%',
        top: '85%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '16',
            color: colors[index][0],
            textAlign: 'center',
        },
    });
    seriesArr.push(
        {
            name: item.name,
            type: 'gauge',
            radius: '60%',
            center: [index * 35 + 15 + '%', '50%'],
            clockwise: false,
            startAngle: '90',
            endAngle: '-269.9999',
            splitNumber: 30,
            detail: {
                offsetCenter: [0, -20],
                formatter: ' ',
            },
            pointer: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [0, '#2CFAFC'],
                        [36.7 / 100, colors[index][0]],
                        [1, '#0f232e'],
                    ],
                    width: 5,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                length: 100,
                lineStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 255, 255, 1)',
                    shadowOffsetY: '0',
                    color: colors[index][0],
                    width: 2,
                },
            },
            axisLabel: {
                show: false,
            },
        },
        {
            type: 'pie',
            radius: ['44%', '45%'],
            center: [index * 35 + 15 + '%', '50%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    color: '#0C355E',
                },
            },
            label: {
                show: false,
            },
            data: _dashed(),
        },

        {
            type: 'pie',
            radius: [0, '30%'],
            center: [index * 35 + 15 + '%', '50%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    shadowBlur: 20,
                    shadowColor: '#000',
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                        {
                            offset: 0,
                            color: colors[index][0],
                        },
                        {
                            offset: 1,
                            color: colors[index][0],
                        },
                    ]),
                },
            },
            label: {
                show: false,
            },
            data: [100],
        },
        {
            type: 'pie',
            radius: ['64%', '65.5%'],
            center: [index * 35 + 15 + '%', '50%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 255, 255,.3)',
                    color: '#0f232e',
                },
            },
            label: {
                show: false,
            },
            data: [100],
        },
        {
            type: 'pie',
            radius: ['68%', '69.5%'],
            center: [index * 35 + 15 + '%', '50%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 255, 255,.3)',
                    color: 'rgba(15, 35, 46,.6)',
                },
            },
            label: {
                show: false,
            },
            data: [
                {
                    value: item.value,
                    label: {
                        normal: {
                            formatter: function (params) {
                                return params.value;
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold',
                                color: '#FFFFFF',
                            },
                        },
                    },
                },
            ],
        }
    );
});

option = {
    backgroundColor: '#eee',
    title: titleArr,
    series: seriesArr,
};
