var placeHolderStyle = {
    normal: {
        label: {
            show: false,
        },
        labelLine: {
            show: false,
        },
        color: 'rgba(0,0,0,0)',
        borderWidth: 0,
    },
    emphasis: {
        color: 'rgba(0,0,0,0)',
        borderWidth: 0,
    },
};

var dataStyle = {
    normal: {
        formatter: '{c}%',
        position: 'center',
        show: true,
        textStyle: {
            fontSize: '40',
            fontWeight: 'normal',
            color: '#000000',
        },
    },
};

option = {
    backgroundColor: '#fff',
    title: [
        {
            text: '日内胜率',
            left: '29.8%',
            top: '38%',
            textAlign: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: '16',
                color: '#AAAFC8',
                textAlign: 'center',
            },
        },
        {
            text: '短线胜率',
            left: '75%',
            top: '38%',
            textAlign: 'center',
            textStyle: {
                color: '#AAAFC8',
                fontWeight: 'normal',
                fontSize: '16',
                textAlign: 'center',
            },
        },
        {
            text: '中线胜率',
            left: '29.8%',
            top: '80%',
            textAlign: 'center',
            textStyle: {
                color: '#AAAFC8',
                fontWeight: 'normal',
                fontSize: '16',
                textAlign: 'center',
            },
        },
        {
            text: '长线胜率',
            left: '75%',
            top: '80%',
            textAlign: 'center',
            textStyle: {
                color: '#AAAFC8',
                fontWeight: 'normal',
                fontSize: '16',
                textAlign: 'center',
            },
        },
    ],

    series: [
        //第1个图表
        {
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['25%', '35%'],
            center: ['30%', '30%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: '#E1E8EE',
                        },
                    },
                },
                {
                    value: 35,
                    itemStyle: placeHolderStyle,
                },
            ],
        },
        //上层环形配置
        {
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['25%', '35%'],
            center: ['30%', '30%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: 75,
                    itemStyle: {
                        normal: {
                            color: '#6F78CC',
                        },
                    },
                    label: dataStyle,
                },
                {
                    value: 35,
                    itemStyle: placeHolderStyle,
                },
            ],
        },

        //第2个图表
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['25%', '35%'],
            center: ['75%', '70%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: '#E1E8EE',
                        },
                    },
                },
                {
                    value: 35,
                    itemStyle: placeHolderStyle,
                },
            ],
        },

        //上层环形配置
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['25%', '35%'],
            center: ['75%', '70%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: 30,
                    itemStyle: {
                        normal: {
                            color: '#4897f6',
                        },
                    },
                    label: dataStyle,
                },
                {
                    value: 55,
                    itemStyle: placeHolderStyle,
                },
            ],
        },
        //第3个图表
        {
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['25%', '35%'],
            center: ['30%', '70%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: '#E1E8EE',
                        },
                    },
                },
                {
                    value: 35,
                    itemStyle: placeHolderStyle,
                },
            ],
        },
        //上层环形配置
        {
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['25%', '35%'],
            center: ['30%', '70%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: 75,
                    itemStyle: {
                        normal: {
                            color: '#6F78CC',
                        },
                    },
                    label: dataStyle,
                },
                {
                    value: 35,
                    itemStyle: placeHolderStyle,
                },
            ],
        },
        //第4个图表
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['25%', '35%'],
            center: ['75%', '30%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: '#E1E8EE',
                        },
                    },
                },
                {
                    value: 35,
                    itemStyle: placeHolderStyle,
                },
            ],
        },

        //上层环形配置
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['25%', '35%'],
            center: ['75%', '30%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: 30,
                    itemStyle: {
                        normal: {
                            color: '#4897f6',
                        },
                    },
                    label: dataStyle,
                },
                {
                    value: 55,
                    itemStyle: placeHolderStyle,
                },
            ],
        },
    ],
};
