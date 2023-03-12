var num1 = 50;
var num2 = 45;
var num3 = 38;
var num4 = 65;
var num5 = 55;
option = {
    backgroundColor: '#e9eef1',

    title: [
        {
            text: '',
            x: '50%',
            y: 30,
            textAlign: 'center',
            textStyle: {
                align: 'center',
                color: '#333',
                fontSize: 30,
                fontWeight: '100',
            },
        },
        {
            // text: 'Lorem ipsum',
            left: '49.5%',
            top: '50%',
            textAlign: 'center',
            textStyle: {
                fontSize: '16',
                color: '#535353',
                textAlign: 'center',
                fontWeight: '400',
            },
        },
    ],
    series: [
        {
            type: 'pie',
            radius: ['30%', '37%'],
            center: ['50%', '50%'],
            startAngle: -150,
            data: [
                {
                    hoverOffset: 1,
                    value: num1,
                    name: '',
                    itemStyle: {
                        color: '#d0276c',
                        borderColor: '#e9eef1',
                        borderWidth: '1',
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter: '{r|{c}%}',
                            rich: {
                                r: {
                                    color: 'rgba(255,255,255,1)',
                                    fontWeight: 'bold',
                                    fontSize: 18,
                                },
                            },
                            position: 'inside',
                            color: '#FFF',
                            textShadowBlur: 5,
                            textShadowOffsetX: 1,
                            textShadowOffsetY: 2,
                            textShadowColor: 'rgba(0,0,0,0.3)',
                        },
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0,
                            },
                        },
                    },
                    hoverAnimation: false,
                },
                {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0,
                            },
                        },
                    },
                    value: 100 - num1,
                    hoverAnimation: false,
                    itemStyle: {
                        color: 'rgba(0, 0, 0, 0)',
                    },
                },
            ],
        },

        {
            type: 'pie',
            radius: ['44%', '51%'],
            center: ['50%', '50%'],
            startAngle: -70,
            data: [
                {
                    hoverOffset: 1,
                    value: num3,
                    name: '',
                    itemStyle: {
                        color: '#4e2e9b',
                        borderColor: '#e9eef1',
                        borderWidth: '1',
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter: '{r|{c}%}',
                            rich: {
                                r: {
                                    color: 'rgba(255,255,255,1)',
                                    fontWeight: 'bold',
                                    fontSize: 18,
                                },
                            },
                            position: 'inside',
                            color: '#FFF',
                            textShadowBlur: 5,
                            textShadowOffsetX: 1,
                            textShadowOffsetY: 2,
                            textShadowColor: 'rgba(0,0,0,0.3)',
                        },
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0,
                            },
                        },
                    },
                    hoverAnimation: false,
                },
                {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0,
                            },
                        },
                    },
                    value: 100 - num3,
                    hoverAnimation: false,
                    itemStyle: {
                        color: 'rgba(0, 0, 0, 0)',
                    },
                },
            ],
        },

        {
            type: 'pie',
            radius: ['58%', '65%'],
            center: ['50%', '50%'],
            startAngle: 50,
            data: [
                {
                    hoverOffset: 1,
                    value: num5,
                    name: '',
                    itemStyle: {
                        color: '#61c8f1',
                        borderColor: '#e9eef1',
                        borderWidth: '1',
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter: '{r|{c}%}',
                            rich: {
                                r: {
                                    color: 'rgba(255,255,255,1)',
                                    fontWeight: 'bold',
                                    fontSize: 18,
                                },
                            },
                            position: 'inside',
                            color: '#FFF',
                            textShadowBlur: 5,
                            textShadowOffsetX: 1,
                            textShadowOffsetY: 2,
                            textShadowColor: 'rgba(0,0,0,0.3)',
                        },
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0,
                            },
                        },
                    },
                    hoverAnimation: false,
                },
                {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0,
                            },
                        },
                    },
                    value: 100 - num4,
                    hoverAnimation: false,
                    itemStyle: {
                        color: 'rgba(0, 0, 0, 0)',
                    },
                },
            ],
        },
        
        {
            type: 'pie',
            radius: ['30%', '37%'],
            center: ['50%', '50%'],
            startAngle: -150,
            name: '',
            silent: true,
            z: 1,
            hoverAnimation: false, //鼠标移入变大
            label: {
                show: false,
            },
            itemStyle: {
                  
                borderCap: 'round',
                borderJoin: 'round',
            },
            data: [
                {
                    value: 7.5,
                    itemStyle: {
                       color: '#d0276c10',
                    },
                },
             
            ],
        },

        {
            type: 'pie',
            radius: ['44%', '51%'],
            center: ['50%', '50%'],
            startAngle: -70,
                name: '',
            silent: true,
            z: 1,
            hoverAnimation: false, //鼠标移入变大
            label: {
                show: false,
            },
            itemStyle: {
                borderCap: 'round',
                borderJoin: 'round',
            },
            data: [
                {
                    value: 7.5,
                    itemStyle: {
                        color: '#4e2e9b10',
                    },
                },
             
            ],
        },

        {
            type: 'pie',
            radius: ['58%', '65%'],
            center: ['50%', '50%'],
            startAngle: 50,
            name: '',
            silent: true,
            z: 1,
            hoverAnimation: false, //鼠标移入变大
            label: {
                show: false,
            },
            itemStyle: {
                borderCap: 'round',
                borderJoin: 'round',
            },
            data: [
                {
                    value: 7.5,
                    itemStyle: {
                       color: '#61c8f110',
                    },
                },
             
            ],
        },
    ],
};
