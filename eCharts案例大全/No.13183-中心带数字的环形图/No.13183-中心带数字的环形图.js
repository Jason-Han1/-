option = {
    backgroundColor: 'rgba(5,13,36,0.9)',
    title: [{
        x: "16%",
        bottom: 100,
        text: '收费停车(次)',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 30,
            color: "#fff"
        },
    }, {
        x: "42%",
        bottom: 100,
        text: '免费停车(次)',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 30,
            color: "#fff"
        },
    }, {
        x: "67%",
        bottom: 100,
        text: '欠费停车(次)',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 30,
            color: "#fff"
        },
    }],
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c}",

    },
    series: [{
        type: 'pie',
        label: { //标签的位置
            normal: {
                show: false,
            }
        },
        clockwise: false,
        radius: ['25%', '30%'],
        center: ['25%', '50%'],
        data: [{
            value: 1862,
            name: '收费停车',
            itemStyle: {
                color: 'rgba(241,192,73,1.0)'
            }
        }]
    }, {
        name: '',
        type: 'pie',
        clockwise: false,
        silent: true,
        minAngle: 20, //最小的扇区角度（0 ~ 360）
        center: ['25%', '50%'], //饼图的中心（圆心）坐标
        radius: ['0%', '25%'],
        itemStyle: { //图形样式
            normal: {
                color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(241,192,73,0.5)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(241,192,73,1)' // 100% 处的颜色
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
                fontSize: 50,
                textStyle: {
                    color: 'rgba(241,192,73,1.0)',
                }
            }
        },
        data: [{
            value: 1862
        }]
    }, {
        type: 'pie',
        label: { //标签的位置
            normal: {
                show: false,
            }
        },
        clockwise: false,
        radius: ['25%', '30%'],
        center: ['50%', '50%'],
        data: [{
            value: 441,
            name: '免费停车',
            itemStyle: {
                color: 'rgba(48,230,142,1.0)'
            }
        }]
    }, {
        name: '',
        type: 'pie',
        clockwise: false,
        silent: true,
        minAngle: 20, //最小的扇区角度（0 ~ 360）
        center: ['50%', '50%'], //饼图的中心（圆心）坐标
        radius: ['0%', '25%'],
        itemStyle: { //图形样式
            normal: {
                color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(48,230,142,0.1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(48,230,142,1)' // 100% 处的颜色
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
                fontSize: 50,
                textStyle: {
                    color: 'rgba(48,230,142,1.0)',
                }
            }
        },
        data: [{
            value: 441
        }]
    }, {
        type: 'pie',
        label: { //标签的位置
            normal: {
                show: false,
            }
        },
        clockwise: false,
        radius: ['25%', '30%'],
        center: ['75%', '50%'],
        data: [{
            value: 87,
            name: '欠费停车',
            itemStyle: {
                color: 'rgba(232,30,135,1.0)'
            }
        }]
    }, {
        name: '',
        type: 'pie',
        clockwise: false,
        silent: true,
        minAngle: 20, //最小的扇区角度（0 ~ 360）
        center: ['75%', '50%'], //饼图的中心（圆心）坐标
        radius: ['0%', '25%'],
        itemStyle: { //图形样式
            normal: {
                color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(232,30,135,0.1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(232,30,135,1)' // 100% 处的颜色
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
                fontSize: 50,
                textStyle: {
                    color: 'rgba(232,30,135,1.0)',
                }
            }
        },
        data: [{
            value: 87
        }]
    }]
};