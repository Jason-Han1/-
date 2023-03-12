option = {
    backgroundColor: 'rgba(5,13,36,0.9)',
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)",

    },
    legend: [{
        orient: 'vertical',
        icon: 'circle',
        left: '10%',
        x: 'left',
        top: 'middle',
        itemWidth: 24,
        itemHeight: 24,
        itemGap: 50,
        align: 'right',
        data: ['有线数字电视', '地面数字电视', '卫星'],
        textStyle: {
            color: '#fff',
            fontSize: 25
        }
    }, {
        orient: 'vertical',
        left: '80%',
        icon: 'circle',
        top: 'middle',
        x: 'right',
        itemWidth: 24,
        itemHeight: 24,
        itemGap: 50,
        align: 'left',
        data: ['调频广播', '短波', '中波'],
        textStyle: {
            color: '#fff',
            fontSize: 25,
        }
    }],
    series: [{
        name: '测试',
        type: 'pie',
        label: { //标签的位置
            normal: {
                show: false,
            }
        },
        clockwise: false,
        radius: ['42%', '55%'],
        data: [{
                value: 835,
                name: '有线数字电视',
                itemStyle: {
                    color: 'rgba(51,204,255,1.0)'
                }
            },
            {
                value: 379,
                name: '地面数字电视',
                itemStyle: {
                    color: 'rgba(32,12,206,1.0)'
                }
            },
            {
                value: 248,
                name: '卫星',
                itemStyle: {
                    color: 'rgba(204,255,0,1.0)'
                }
            },
            {
                value: 848,
                name: '中波',
                itemStyle: {
                    color: 'rgba(0,225,135,1.0)'
                }
            },
            {
                value: 679,
                name: '短波',
                itemStyle: {
                    color: 'rgba(204,153,51,1.0)'
                }
            },
            {
                value: 348,
                name: '调频广播',
                itemStyle: {
                    color: 'rgba(128,128,255,1.0)'
                }
            }
        ]
    }, {
        name: '',
        type: 'pie',
        clockwise: false,
        silent: true,
        minAngle: 20, //最小的扇区角度（0 ~ 360）
        center: ['50%', '50%'], //饼图的中心（圆心）坐标
        radius: [0, 160], //饼图的半径
        itemStyle: { //图形样式
            normal: {
                color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(51,204,255,0.1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(51,204,255,9.0)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                borderWidth: 1.5,
                opacity: 0.21,
            }
        },
        label: { //标签的位置
            normal: {
                show: true,
                align: 'center',
                position: 'center', //标签的位置
                formatter: "{c}",
                fontSize: 180,
                textStyle: {
                    color: 'rgba(51,204,255,1.0)',
                }
            }
        },
        data: [{
            value: 21
        }]
    }]
};