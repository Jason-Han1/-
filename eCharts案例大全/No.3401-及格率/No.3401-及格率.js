var data1 = 0.5;
var data2 = 0.4;
var data3=0.3;
option = {
    title: [
        {
            text: '{name|' + 50 + '}{val|%}',
            top: 'center',
            left: '17%',
            textStyle: {
                rich: {
                    name: {
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: '#000',
                        padding: [10, 0],
                    },
                    val: {
                        fontSize: 14,
                        fontWeight: 'normal',
                        color: '#000',
                    },
                },
            },
        },
        {
            text: '{name|' + 40 + '}{val|%}',
            top: 'center',
            left: 'center',
            textStyle: {
                rich: {
                    name: {
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: '#000',
                        padding: [10, 0],
                    },
                    val: {
                        fontSize: 14,
                        fontWeight: 'normal',
                        color: '#000',
                    },
                },
            },
        },
        {
            text: '{name|' + 30 + '}{val|%}',
            top: 'center',
            left: '78%',
            textStyle: {
                rich: {
                    name: {
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: '#000',
                        padding: [10, 0],
                    },
                    val: {
                        fontSize: 14,
                        fontWeight: 'normal',
                        color: '#000',
                    },
                },
            },
        },
    ],
    series: [
        //及格率
        {
            type: 'pie',
            center: ['20%', '50%'],
            radius: ['25%', '30%'],
            hoverAnimation: false,
            startAngle: -90,
            clockwise: false,
            labelLine: {
                show: false,
            },
            data: [
                {
                    value: 0,
                    itemStyle: {
                        color: '#144271 ',
                    },
                },
            ],
        },
        {
            type: 'pie',
            center: ['20%', '50%'],
            radius: ['23%', '32%'],
            hoverAnimation: false,
            startAngle: -90,
            clockwise: false,
            labelLine: {
                show: false,
            },
            data: [
                {
                    name: '',
                    value: 1 - data1,
                    itemStyle: {
                        color: 'rgba(0,0,0,0)',
                    },
                },
                {
                    name: '',
                    value: data1,
                    itemStyle: {
                        color: '#FF6130',
                    },
                },
            ],
        },
        //及格率2
        {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['25%', '30%'],
            hoverAnimation: false,
            startAngle: -90,
            clockwise: false,
            labelLine: {
                show: false,
            },
            data: [
                {
                    value: 0,
                    itemStyle: {
                        color: '#144271 ',
                    },
                },
            ],
        },
        {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['23%', '32%'],
            hoverAnimation: false,
            startAngle: -90,
            clockwise: false,
            labelLine: {
                show: false,
            },
            data: [
                {
                    name: '',
                    value: 1 - data2,
                    itemStyle: {
                        color: 'rgba(0,0,0,0)',
                    },
                },
                {
                    name: '',
                    value: data2,
                    itemStyle: {
                        color: '#6C62FF',
                    },
                },
            ],
        },
        //及格率3
        {
            type: 'pie',
            center: ['80%', '50%'],
            radius: ['25%', '30%'],
            hoverAnimation: false,
            startAngle: -90,
            clockwise: false,
            labelLine: {
                show: false,
            },
            data: [
                {
                    value: 0,
                    itemStyle: {
                        color: '#144271 ',
                    },
                },
            ],
        },
        {
            type: 'pie',
            center: ['80%', '50%'],
            radius: ['23%', '32%'],
            hoverAnimation: false,
            startAngle: -90,
            clockwise: false,
            labelLine: {
                show: false,
            },
            data: [
                {
                    name: '',
                    value: 1 - data1,
                    itemStyle: {
                        color: 'rgba(0,0,0,0)',
                    },
                },
                {
                    name: '',
                    value: data1,
                    itemStyle: {
                        color: '#BAFA66',
                    },
                },
            ],
        },
    ],
};
