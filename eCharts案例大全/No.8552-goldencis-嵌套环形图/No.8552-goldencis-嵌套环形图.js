    option = {
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(200,231,242,0.9)',
            textStyle: {
                color:'rgba(20,34,54,1)'
            },
            formatter: function(param) {
                if(param.data.name == 'other') return '';
                return param.name + '</br>在线率: ' + param.percent + '%';
            }
        },
        // 内圈背景，外圈背景，内圈数据，多余数据，外圈数据
        color: ['rgba(3, 128, 195, 0.1)', 'rgba(38, 66, 89, 1)', 'rgba(110, 111, 255, 1)', 'transparent', 'rgba(61, 208, 241, 1)'],
        series: [{
                name: '内层背景',
                type: 'pie',
                radius: ['60%', '80%'],
                silent: true,
                label: {
                    normal: {
                        show: false,
                    },
                },
                data: [{
                    value: 0,
                    name: '内层背景'
                }]
            },
            {
                name: '外层背景',
                type: 'pie',
                radius: ['80%', '90%'],
                silent: true,
                label: {
                    normal: {
                        show: false,
                    },
                },
                data: [{
                    value: 0,
                    name: '外层背景'
                }]
            },
            {
                name: 'IPC',
                type: 'pie',
                radius: ['60%', '70%'],
                avoidLabelOverlap: false,
                hoverAnimation: false,
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        padding: [0,0,0,80],
                        align: 'center',
                        width: 70,
                        height: 50,
                        lineHeight: 14, // 控制\n的行高
                        fontSize: 14,
                        formatter: function(param) {
                            return '{a| '+ param.seriesName +'}' + '\n\n{b|'+ param.percent +'% }';
                        },
                        rich: {
                            a : {
                                fontSize: 14,
                                color: 'rgba(110, 111, 255, 1)',
                                lineHeight: 19,

                            },
                            b: {
                                fontSize: 20,
                                color: 'rgba(110, 111, 255, 1)',
                                lineHeight: 23,
                            }
                        }
                    },
                },
                data: [{
                        value: 56,
                        name: 'IPC',
                        label: {
                            normal: {
                                show: false
                            }
                        }
                    },
                    {
                        value: 100,
                        name: 'other'
                    }
                ]
            },
            {
                name: '设备',
                type: 'pie',
                radius: ['70%', '80%'],
                avoidLabelOverlap: false,
                hoverAnimation: false,
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        padding: [0,80,0,0],
                        align: 'center',
                        width: 70,
                        height: 50,
                        lineHeight: 14, // 控制\n的行高
                        fontSize: 14, 
                        formatter: function(param) {
                            return '{a| '+ param.seriesName +'}' + '\n\n{b|'+ param.percent +'% }';
                        },
                        rich: {
                            a : {
                                fontSize: 14,
                                color: 'rgba(61, 208, 241, 1)',
                                lineHeight: 19,
                            },
                            b: {
                                fontSize: 20,
                                color: 'rgba(61, 208, 241, 1)',
                                lineHeight: 23,
                            }
                        }
                    },
                },
                data: [{
                        value: 87,
                        name: '设备',
                        label: {
                            normal: {
                                show: false
                            }
                        }
                    },
                    {
                        value: 100,
                        name: 'other'
                    },
                ]
            },
        ]
    };