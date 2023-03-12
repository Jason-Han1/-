function Pie() {
    let dataArr = [];
    for (var i = 0; i < 150; i++) {
        if (i % 3 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 10,
                itemStyle: {
                    normal: {
                        color: '#fff',
                        borderWidth: 0,
                        borderColor: 'rgba(0,0,0,0)',
                    },
                },
            });
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 25,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        borderWidth: 0,
                        borderColor: 'rgba(0,0,0,0)',
                    },
                },
            });
        }
    }
    return dataArr;
}
option = {
    backgroundColor: '#031845',
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {d}% <br/> {c}',
    },

    legend: {
        orient: 'horizontal',
        icon: 'circle',
        bottom: 20,
        x: 'center',
        textStyle: {
            color: '#fff',
        },
        data: ['呜哈哈', '穷哈哈', '吾叉叉', '穷叉叉'],
    },
    series: [
        {
            type: 'pie',
            radius: ['40%', '50%'],
            center: ['50%', '50%'],
            color: ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'],
            itemStyle: {
                normal: {
                    borderColor: '#031845',
                    borderWidth: 10,
                },
            },
            data: [
                {
                    value: 335,
                    name: '呜哈哈',
                },
                {
                    value: 310,
                    name: '穷哈哈',
                },
                {
                    value: 234,
                    name: '吾叉叉',
                },
                {
                    value: 235,
                    name: '穷叉叉',
                },
               
            ],
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    show: false,
                },
            },
        },
        {
            type: 'pie',
            radius: ['12%', '14%'],
            center: ['50%', '50%'],
            color: ['#ffffff', 'red'],
            startAngle: 105,
            data: [
                {
                    value: 30,
                    name: '',
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        },
                    },
                },
                {
                    value: 5,
                    name: '',
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        },
                    },
                },
                {
                    value: 65,
                    name: 'ddd',
                    itemStyle: {
                        normal: {
                            color: '#ffffff',
                        },
                    },
                },
            ],
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    show: false,
                },
            },
        },
        {
            type: 'pie',
            radius: [0, '16%'],
            center: ['50%', '50%'],
            startAngle: 90,
            data: [
                {
                    value: 25,
                    name: '1',
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderWidth: 4,
                            borderColor: '#ffffff',
                        },
                    },
                },

                {
                    value: 75,
                    name: '2',
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        },
                    },
                },
            ],
            selectedOffset: 10,

            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    show: false,
                },
            },
        },
        {
            type: 'pie',
            radius: ['53%', '54%'],
            center: ['50%', '50%'],
            color: ['blue', 'transparent', 'blue', 'transparent', 'blue', 'transparent'],
            data: [
                {
                    value: 17,
                    name: '11',
                },
                {
                    value: 17,
                    name: '22',
                },
                {
                    value: 17,
                    name: '33',
                },
                {
                    value: 17,
                    name: '44',
                },
                {
                    value: 17,
                    name: '55',
                },
                {
                    value: 17,
                    name: '66',
                },
            ],

            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    show: false,
                },
            },
        },
        {
            type: 'pie',
            zlevel: 0,
            silent: true,
            radius: ['25%', '26%'],
            z: 10,
            label: {
                normal: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: Pie(),
        },
        {
            type: 'pie',
            zlevel: 0,
            silent: true,
            radius: ['34%', '36%'],
            z: 10,
            startAngle: 90,
            label: {
                normal: {
                    show: false,
                },
            },
            color: ['red', 'blue', 'red', 'blue'],

            labelLine: {
                normal: {
                    show: false,
                },
            },

            data: [
                {
                    name: 'r1',
                    value: 25,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(51,149,191,0.5)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(51,149,191,0)',
                                },
                            ]),
                        },
                    },
                },
                {
                    name: 'r2',
                    value: 25,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(0,0,0,0)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(51,149,191,0.5)',
                                },
                            ]),
                        },
                    },
                },
                {
                    name: 'r3',
                    value: 25,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(51,149,191,0)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(51,149,191,0.5)',
                                },
                            ]),
                        },
                    },
                },
                {
                    name: 'r4',
                    value: 25,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(51,149,191,0.5)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(0,0,0,0)',
                                },
                            ]),
                        },
                    },
                },
            ],
        },
    ],
};
