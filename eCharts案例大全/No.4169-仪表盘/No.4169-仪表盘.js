var dataArr = 60;

option = {
    backgroundColor: '#0E1327',
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [{
            type: "gauge",
            center: ['50%', '47%'],
            radius: '60%',
            z: 4,
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    color: [
                        [dataArr / 100, new echarts.graphic.LinearGradient(
                            0, 1, 0, 0, [{
                                    offset: 0,
                                    color: 'rgba(0,212,230,0.5)',
                                }, {
                                    offset: 0.5,
                                    color: 'rgba(0,212,230,.1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(0,212,230,0)',
                                }
                            ]
                        )],
                        [
                            1, 'rgba(28,128,245,.0)'
                        ]
                    ],
                    width: 170
                }
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            detail: {
                show: false,
            },
            title: { //标题
                show: false,
            },
            data: [{
                name: '',
                value: dataArr,
            }],
            itemStyle: {
                normal: {
                    color: '#2AF4FF'
                }
            },
            pointer: {
                show: true,
                length: '80%',
                radius: '20%',
                width: 3, //指针粗细
            },
            animationDuration: 4000,
        },
        // 圆环
        {
            "name": '小圆形',
            "type": 'pie',
            "hoverAnimation": false,
            "legendHoverLink": false,
            "radius": ['4%', '3%'],
            "center": ["50%", "47%"],
            "z": 5,
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 0,
                itemStyle: {
                    normal: {
                        color: "#2AF4FF",
                    },
                }
            }]
        },
        {
            name: '外部刻度',
            type: 'gauge',
            center: ['50%', '47%'],
            radius: '70%',
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 225,
            endAngle: -45,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 25,
                    color: [
                        [1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#224570'
                            },
                            {
                                offset: 1,
                                color: '#4B93DA'
                            }
                        ])]
                    ],
                }
            }, //仪表盘轴线
            axisLabel: {
                show: true,
                color: '#FFFFFF',
                distance: 10,
                formatter: function(v) {
                    switch (v + '') {
                        case '0':
                            return '0';
                        case '10':
                            return '10';
                        case '20':
                            return '20';
                        case '30':
                            return '30';
                        case '40':
                            return '40';
                        case '50':
                            return '50';
                        case '60':
                            return '60';
                        case '70':
                            return '70';
                        case '80':
                            return '80';
                        case '90':
                            return '90';
                        case '100':
                            return '100';
                    }
                }
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 5,
                lineStyle: {
                    color: '#42E5FB', //用颜色渐变函数不起作用
                    width: 2,
                },
                length: 8
            },
            splitLine: {
                show: true,
                length: 15,
                lineStyle: {
                    color: '#42E5FB', //用颜色渐变函数不起作用
                }
            },
            detail: {
                show: false
            },
            pointer: {
                show: true
            },
        },
        {
            type: "gauge",
            startAngle: 225,
            endAngle: -45,
            radius: "60%",
            center: ["50%", "47%"],
            axisLine: {
                lineStyle: {
                    width: 5,
                    color: [
                        [1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0.33,
                                color: '#08fcfe'
                            },
                            {
                                offset: 0.66,
                                color: '#e5e46e'
                            },
                            {
                                offset: 1,
                                color: '#EB3457'
                            }
                        ])]
                    ],
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: false
            },
            pointer: {
                show: false,
                width: "2%",
                length: '50%',
            },
            itemStyle: {
                color: '#fff'
            },
            detail: {
                show: false,
                color: '#fff'
            },
            data: [{
                value: dataArr,
            }]
        }
    ]
};