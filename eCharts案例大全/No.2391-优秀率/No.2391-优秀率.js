let pieData = [
    {
        name: '优秀率',
        value: 80,
    },
    {
        name: '良好率',
        value: 60,
    },
    {
        name: '及格率',
        value: 40,
    },
    {
        name: '不及格率',
        value: 40,
    },
];

var titleArr = [],
    seriesArr = [];

pieData.forEach(function (item, index) {
    titleArr.push({
        text: item.name,
        left: index * 25 + 12.5 + '%',
        top: '60%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '20',
            color: 'white',
            textAlign: 'center',
        },
    });
    seriesArr.push(
        {
            type: 'pie',
            name: '外层细圆环',
            radius: ['26%', '27%'],
            center: [index * 25 + 12.5 + '%', '45%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    color: '#6e7175',
                },
            },
            label: {
                show: false,
            },
            data: [100],
        },
        {
            type: 'pie',
            name: '内层层细圆环',
            radius: ['14%', '15%'],
            center: [index * 25 + 12.5 + '%', '45%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    color: '#6e7175',
                },
            },
            label: {
                show: false,
            },
            data: [100],
        }
    );
});

seriesArr.push(
    {
        name: pieData[0].name,
        type: 'pie',
        clockWise: false,
        radius: ['18%', '23%'],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#EE794B',
                    },
                    {
                        offset: 1,
                        color: '#EE794B',
                    },
                ]),
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
            },
        },
        hoverAnimation: false,
        center: [0 * 25 + 12.5 + '%', '45%'],
        data: [
            {
                value: pieData[0].value,
                label: {
                    normal: {
                        formatter: function (params) {
                            return params.value+'%';
                        },
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '25',
                            // fontWeight: 'bold',
                            color: '#1cc7ff',
                        },
                    },
                },
            },
            {
                value: 100 - pieData[0].value,
                name: 'invisible',
                itemStyle: {
                    normal: {
                        color: 'rgba(255,255,255,0.2)',
                    },
                    emphasis: {
                        color: 'rgba(0,0,0,0)',
                    },
                },
            }
        ],
    },
    {
        name: pieData[1].name,
        type: 'pie',
        clockWise: false,
        radius: ['18%', '23%'],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#65D3F3',
                    },
                    {
                        offset: 1,
                        color: '#65D3F3',
                    },
                ]),
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
            },
        },
        hoverAnimation: false,
        center: [1 * 25 + 12.5 + '%', '45%'],
        data: [
            {
                value: pieData[1].value,
                label: {
                    normal: {
                        formatter: function (params) {
                            return params.value+'%';
                        },
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '25',
                            // fontWeight: 'bold',
                            color: '#1cc7ff',
                        },
                    },
                },
            },
            {
                value: 100 - pieData[1].value,
                name: 'invisible',
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                    },
                    emphasis: {
                        color: 'rgba(0,0,0,0)',
                    },
                },
            },
        ],
    },
    {
        name: pieData[2].name,
        type: 'pie',
        clockWise: false,
        radius: ['18%', '23%'],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#5BE3A1',
                    },
                    {
                        offset: 1,
                        color: '#5BE3A1',
                    },
                ]),
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
            },
        },
        hoverAnimation: false,
        center: [2 * 25 + 12.5 + '%', '45%'],
        data: [
            {
                value: pieData[2].value,
                label: {
                    normal: {
                        formatter: function (params) {
                            return params.value + '%';
                        },
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '25',
                            // fontWeight: 'bold',
                            color: '#1cc7ff',
                        },
                    },
                },
            },
            {
                value: 100 - pieData[2].value,
                name: 'invisible',
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                    },
                    emphasis: {
                        color: 'rgba(0,0,0,0)',
                    },
                },
            },
        ],
    },
    {
        name: pieData[3].name,
        type: 'pie',
        clockWise: false,
       radius: ['18%', '23%'],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#2788FF',
                    },
                    {
                        offset: 1,
                        color: '#2788FF',
                    },
                ]),
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
            },
        },
        hoverAnimation: false,
        center: [3 * 25 + 12.5 + '%', '45%'],
        data: [
            {
                value: pieData[3].value,
                label: {
                    normal: {
                        formatter: function (params) {
                            return params.value + '%';
                        },
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '25',
                            // fontWeight: 'bold',
                            color: '#1cc7ff',
                        },
                    },
                },
            },
            {
                value: 100 - pieData[3].value,
                name: 'invisible',
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                    },
                    emphasis: {
                        color: 'rgba(0,0,0,0)',
                    },
                },
            },
        ],
    }
);

option = {
    grid: {
        left: '2%',
        right: '2%',
        bottom: '0%',
        top: '0%',
        containLabel: true,
    },
    backgroundColor: 'black',
    title: titleArr,
    series: seriesArr,
};
