var dataing = [{
    "name": "1",
    "value": 10
}, {
    "name": "2",
    "value": 10
}]
option = {

    color: ['#ee5123', "transparent"],
    //  backgroundColor: '#000',
    title: {
        show:false,
        text: 7789,
        subtext: '辆',
        textStyle: {
            color: '#c4cfd2',
            fontSize: 12,
            align: 'center'
        },
        subtextStyle: {
            fontSize: 8,
            color: ['#c4cfd2'],
            align: 'center'
        },
        x: 'center',
        y: 'center',
    },
    grid: {
        bottom: '5%',
        left: '5%',
        right: '5%',
        top: '5%',
    },

    legend: {
        itemWidth: 0,
        itemHeight: 0,
        bottom: 10,
        left: 'center',
        data: [{
            name: '在用运输车',
            textStyle: {
                fontSize: 16,
                color: '#85c7e3',

            },

        }]
    },
    series: [
        // 主要展示层的
        {
            z:3,
            radius: ['25%', '35%'],
            center: ['20%', '50%'],
            type: 'pie',
            name: "测试",
            // label: {
            //     normal: {
            //         show: false,
            //         formatter: "{c}%",
            //         textStyle: {
            //             fontSize: 30,

            //         },
            //         position: 'inside'
            //     },
            //     emphasis: {
            //         show: false
            //     }
            // },
            label: {
                normal: {
                    position: 'center'
                }
            },
            labelLine: {
                normal: {
                    show: false,
                    length: 30,
                    length2: 55
                },
                emphasis: {
                    show: false
                }
            },
            
            data: [{
                "name": "1256",
                "value": 10,
                itemStyle:{
                    normal:{
                        color:'#43bafe'
                    }
                }
            }, {
                "name": "2",
                "value": 10,
                itemStyle:{
                    color:'transparent'
                }
            }]

        },
        {
            z:2,
            name: '整圆',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['20%', '50%'],
            radius: ['30%', '30%'],
            label: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 9,
                name: '',
                itemStyle: {
                    normal: {
                        borderWidth: 3,
                        borderColor: '#205283'
                    }
                }
            }]
        },
        {
            z:1,
            name: '整圆',
            type: 'pie',
            hoverAnimation: false, //鼠标移入变大
            center: ['20%', '50%'],
            radius: ['34%', '35%'],
            label: {
                normal: {
                    show: false
                }
            },
            data: [{
                "name": "1",
                "value": 19,
                itemStyle:{
                    normal:{
                        color:'#6bffff'
                    }
                }
            }, {
                "name": "2",
                "value": 10,
                itemStyle:{
                    color:'transparent'
                }
            }]
        },
        
        
        {
            z:3,
            radius: ['25%', '35%'],
            center: ['50%', '50%'],
            type: 'pie',
            label: {
                normal: {
                    show: false,
                    formatter: "{c}%",
                    textStyle: {
                        fontSize: 30,

                    },
                    position: 'outside'
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false,
                    length: 30,
                    length2: 55
                },
                emphasis: {
                    show: false
                }
            },
            name: "c-1",
            data: [{
                "name": "1",
                "value": 10,
                itemStyle:{
                    normal:{
                        color:'#43bafe'
                    }
                }
            }, {
                "name": "2",
                "value": 10,
                itemStyle:{
                    color:'transparent'
                }
            }]

        },
        {
            z:2,
            name: 'c-2',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '50%'],
            radius: ['30%', '30%'],
            label: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 9,
                name: '',
                itemStyle: {
                    normal: {
                        borderWidth: 3,
                        borderColor: '#205283'
                    }
                }
            }]
        },
        {
            z:1,
            name: 'c-3',
            type: 'pie',
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '50%'],
            radius: ['34%', '35%'],
            label: {
                normal: {
                    show: false
                }
            },
            data: [{
                "name": "1",
                "value": 19,
                itemStyle:{
                    normal:{
                        color:'#6bffff'
                    }
                }
            }, {
                "name": "2",
                "value": 10,
                itemStyle:{
                    color:'transparent'
                }
            }]
        },
        
        
        
        {
            z:3,
            radius: ['25%', '35%'],
            center: ['80%', '50%'],
            type: 'pie',
            label: {
                normal: {
                    show: false,
                    formatter: "{c}%",
                    textStyle: {
                        fontSize: 30,

                    },
                    position: 'outside'
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false,
                    length: 30,
                    length2: 55
                },
                emphasis: {
                    show: false
                }
            },
            name: "c-1",
            data: [{
                "name": "1",
                "value": 10,
                itemStyle:{
                    normal:{
                        color:'#43bafe'
                    }
                }
            }, {
                "name": "2",
                "value": 10,
                itemStyle:{
                    color:'transparent'
                }
            }]

        },
        {
            z:2,
            name: 'c-2',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['80%', '50%'],
            radius: ['30%', '30%'],
            label: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 9,
                name: '',
                itemStyle: {
                    normal: {
                        borderWidth: 3,
                        borderColor: '#205283'
                    }
                }
            }]
        },
        {
            z:1,
            name: 'c-3',
            type: 'pie',
            hoverAnimation: false, //鼠标移入变大
            center: ['80%', '50%'],
            radius: ['34%', '35%'],
            label: {
                normal: {
                    show: false
                }
            },
            data: [{
                "name": "1",
                "value": 19,
                itemStyle:{
                    normal:{
                        color:'#6bffff'
                    }
                }
            }, {
                "name": "2",
                "value": 10,
                itemStyle:{
                    color:'transparent'
                }
            }]
        }
    ]
};