var option = {
    backgroundColor: '#000',
    angleAxis: {
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        min: 0,
        max: 200,
        boundaryGap: ['0', '100'],
        startAngle: 180
    },
    radiusAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        data: ['a'],
        z: 10
    },
    polar: {
        radius: '80%',
        center: ['50%', '50%'],
    },
    
    series: [{
            type: 'bar',
            data: [40],
            coordinateSystem: 'polar',
            barMaxWidth: 50,
            z: 2,
            // name: '抢修项目',
            roundCap: true,
            color: 'rgba(0,252,249,1)',
            barGap: '-100%',
        },
        {
            type: 'bar',
            data: [100],
            z: 0,
            silent: true,
            coordinateSystem: 'polar',
            barMaxWidth: 50,
            // name: 'C',
            roundCap: true,
            color: 'rgba(0,163,248,1)',
            barGap: '-100%',
        },
        {
            // name: "白色圈刻度",
            type: "gauge",
            radius: "36%",
            startAngle: 180, //刻度起始
            endAngle: 0, //刻度结束
            z: 4,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 16, //刻度节点线长度
                lineStyle: {
                    width: 3,
                    color: 'rgba(92,181,224, 1)'
                } //刻
            },
            axisLabel: {
                color: 'rgba(255,255,255,1)',
                fontSize: 20,
            }, //刻度节点文字颜色
            pointer: {
                show: true,
                length:"70%"
            },
             itemStyle: {
              color: 'rgba(0,250,218)'  
            },
            axisLine: {
                lineStyle: {
                    opacity: 0
                }
            },
            detail: {
                show: true,
                formatter: function(e) {
                    return '利用小时数';
                },
                color: 'rgba(172,172,172,1)',
                fontSize: 20,
                offsetCenter: [0, -140],
            },
            data: [{
                value: 40,
                name: ""
            }]
        },
        { //白圆
            type: 'pie',
            radius: '2%',
            center: ['50.2%', '50.5%'],
            z: 11,
            itemStyle: {
                normal: {
                    color:'rgba(245,245,245,1)',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
            },
            hoverAnimation: false,
            label: {
                show: false,
            },
            tooltip: {
                show: false
            },
            data: [100],
        },
        { //
            type: 'pie',
            radius: '1%',
            center: ['50.2%', '50.5%'],
            z: 11,
            itemStyle: {
                normal: {
                    color:'rgba(211,211,211,1)',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
            },
            hoverAnimation: false,
            label: {
                show: false,
            },
            tooltip: {
                show: false
            },
            data: [100],
        },
    ],

    tooltip: {
        show: false
    },

};