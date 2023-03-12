option = {
    backgroundColor: '#3E8EF7',
    grid: {
        top: '0',
        bottom: 0,
        right: 0,
        left: 0
    },
    series: [{
        name: "白色圈刻度",
        type: "gauge",
        radius: "62%",
        center: ["50%", "75%"],
        startAngle: 180, //刻度起始
        endAngle: 0, //刻度结束
        splitNumber: 5, //刻度数量
        min: 0,
        max: 100,
        clockwise: false,
        axisLabel: {
            show: false
        }, //刻度节点文字颜色
        pointer: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 1,
                color: [
                    [1, 'rgba(208,208,208,0)']
                ]
            }
        }, //仪表盘轴线
        splitLine: {
            length: 13,
        },
        detail: {
            "formatter": function(value) {
                return '采集率'
            },
            "offsetCenter": [0, "70%"],
            "textStyle": {
                padding: [0, 0, 80, 0],
                "fontSize": 18,
                fontWeight: '700',
                color: '#222'
            }
        },
        title: {
            show: true,
            color: '#fff',
            offsetCenter: [0, '-20%'],
            fontSize: 20,
            fontWeight: 'bold'
        },
        data: [{
            name: '80%'
        }]
    }, {
        name: '外层盘',
        type: 'gauge',
        z: 6,
        radius: '50%',
        startAngle: 180,
        endAngle: 0,
        center: ["50%", "75%"], //整体的位置设置
        axisLine: {
            lineStyle: { // 属性lineStyle控制线条样式//控制外圈位置
                color: [
                    [0.8, 'rgb(36,223,24)'],
                    [1, 'rgb(217,242,253)']
                ],
                width: 6,
                opacity: 0.9, //控制外圈位置，颜色，宽度，透明度
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        pointer: {
            show: false
        },
        data: [{
            show: false,
            value: '55'
        }],
        detail: {
            show: 0
        }
    }]
};