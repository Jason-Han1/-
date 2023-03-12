option = {
    backgroundColor: '#273454',
    color: ['#73DDFF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF', '#58D5FF'],
    tooltip: {
                show: false,
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}$ ({d}%)",
        textStyle: {
            fontSize: 15,
        },
    },
    legend: {
        data: ['访问控制', '访问限速', '状态码限速', '攻击IP惩罚', '其他'],
        orient: 'vertical',
        right: '5%',
        top: '13%',
        top: 'center',
        itemWidth: 20,
        itemHeight: 20,
        itemGap: 30,
        textStyle: {
            color: '#',
            fontSize: 16,
        },
    },
    series: [ 
    // 背景
    {
        radius: ['0%', '37%'],
        center: ['44%', '50%'],
        zlevel: 2,
        type: 'pie',
        hoverAnimation: false,
        label: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false,
            },
        },
        // itemStyle: {
        //     normal: {
        //         shadowBlur: 30,
        //         shadowColor: 'rgba(255, 255, 255, 0.5)',
        //     },
        // },
        labelLine: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false,
            },
        },
        tooltip: {
            show: false,
        },
        data: [
            {
                value: 100,
                name: '工种数量统计',
                itemStyle: {
                    normal: {
                        color: '#273454', 
                    },emphasis:{color:'#273454'}
                },
            },
        ],
        animation: false,
    },
    //外圈
    {
        radius: ['37%', '37.7%'],
        center: ['44%', '50%'],
        hoverAnimation: false,
        zlevel: 1,
        type: 'pie',
        label: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false,
            },
        },
        // itemStyle: {
        //     normal: {
        //         shadowBlur: 30,
        //         shadowColor: 'rgba(255, 255, 255, 0.5)',
        //     },
        // },
        labelLine: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false,
            },
        },
        tooltip: {
            show: false,
        },
        data: [
            {
                value: 100,
                name: '工种数量统计',
                itemStyle: {
                    normal: {
                        color: '#44628D', 
                    },
                },
            },
        ],
        animation: true,
    },{
        name: 'TITLE2',
        type: 'pie',
        zlevel: 1,
        clockwise: false,
        startAngle: 90,
        radius: '35%',
        center: ['44%', '50%'],
        hoverAnimation: false,
        roseType: 'radius', //area
        data: [{
                value: 335,
                name: '访问控制'
            },
            {
                value: 310,
                name: '访问限速'
            },
            {
                value: 234,
                name: '状态码限速'
            },
            {
                value: 135,
                name: '攻击IP惩罚'
            },
            {
                value: 148,
                name: '其他'
            }
        ], 
        label: {
            show: true,
            position: 'outside',
            formatter: '{a|{b}：{d}%}\n{hr|}',
            rich: {
                hr: {
                    backgroundColor: 't',
                    borderRadius: 100,
                    width: 0,
                    height: 10,
                    padding: [3, 3, 0, -16],
                    shadowColor: '#1c1b3a',
                    shadowBlur: 1,
                    shadowOffsetX: '0',
                    shadowOffsetY: '2',
                },
                a: {
                    padding: [-35, 15, -20, 5],
                }
            }
        },
        labelLine: {
            normal: {
                length: 50,
                length2: 30,
                lineStyle: {
                    width: 1,
                }
            }
        }, 
    },{
        name: 'TITLE',
        type: 'pie',
        zlevel: 10,
        clockwise: false,
        startAngle: 90,
        radius: '35%',
        center: ['44%', '50%'],
        hoverAnimation: false,
        roseType: 'radius', //area
        data: [{
                value: 335,
                name: '访问控制'
            },
            {
                value: 310,
                name: '访问限速'
            },
            {
                value: 234,
                name: '状态码限速'
            },
            {
                value: 135,
                name: '攻击IP惩罚'
            },
            {
                value: 148,
                name: '其他'
            }
        ],
        itemStyle: {
            normal: {
                borderColor: '#273454',
                borderWidth: '5',
            },
        },
        label: {
            show: false,
            position: 'outside',
            formatter: '{a|{b}：{d}%}\n{hr|}',
            rich: {
                hr: {
                    backgroundColor: 't',
                    borderRadius: 100,
                    width: 0,
                    height: 10,
                    padding: [3, 3, 0, -16],
                    shadowColor: '#1c1b3a',
                    shadowBlur: 1,
                    shadowOffsetX: '0',
                    shadowOffsetY: '2',
                },
                a: {
                    padding: [-35, 15, -20, 5],
                }
            }
        },
        labelLine: {
            normal: {
                length: 50,
                length2: 30,
                lineStyle: {
                    width: 1,
                }
            }
        }, 
    }, ],
}