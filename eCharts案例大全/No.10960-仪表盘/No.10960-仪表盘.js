var gauge_value = 50
option = {
    title: {
        show: true,
        x: "center",
        bottom: 50,
        text: '综合得分 ' + Math.floor(gauge_value) + '%',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 30,
            color: "#33ffff"
        },
    },
    tooltip: {
        show: true,
        backgroundColor: '#101E44',
        textStyle: {
            color: 'fff'
        },
        formatter: function(param) {
            //return '<em style="color:' + param.color + ';">' + param.value + '</em> 分'
            return '<em style="color:#ffffff;">' + param.value + '%</em> '
        }

    },
    series: [{
        name: "白色圈刻度",
        type: "gauge",
        radius: "80%",
        center: ["50%", "75%"],
        startAngle: 180, //刻度起始
        endAngle: 0, //刻度结束
        z: 4,
        axisTick: {
            show: false
        },
        splitLine: {
            length: 16, //刻度节点线长度
            lineStyle: {
                width: 2,
                color: 'rgba(0,0,0, 0.9)'
            } //刻度节点线
        },
        axisLabel: {
            color: '#',
            fontSize: 30,
        }, //刻度节点文字颜色
        pointer: {
            show: false
        },
        axisLine: {
            lineStyle: {
                opacity: 0
            }
        },
        detail: {
            show: false
        },
        data: [{
            value: 0,
            name: ""
        }]
    }, {
        name: '灰色内圈', //刻度背景
        type: 'gauge',
        z: 2,
        radius: '80%',
        startAngle: 180,
        endAngle: 0,
        center: ["50%", "75%"], //整体的位置设置
        axisLine: { // 坐标轴线
            lineStyle: { // 属性lineStyle控制线条样式
                color: [
                    [1, 'rgba(51, 255, 255, 0.9)']
                ],
                width: 15,
                opacity: 1, //刻度背景宽度
            }
        },
        splitLine: {
            show: false
        },
        data: [{
            show: false,
            value: '80'
        }], //作用不清楚
        axisLabel: {
            show: false
        },
        pointer: {
            show: false
        },
        axisTick: {
            show: false
        },
        detail: {
            show: 0
        }
    }, {
        name: '指针',
        type: 'gauge',
        z: 6,
        radius: '95%',
        startAngle: 180,
        endAngle: 0,
        center: ["50%", "75%"], //整体的位置设置
        axisLine: {
            lineStyle: { // 属性lineStyle控制线条样式//指针颜色
                color: [
                    [1, '#33ffff']
                ],
                width: 0
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
        data: [50], //指针位置
        pointer: {
            show: true,
            width: 5,
            length: '55%'
        },
        detail: {
            show: 0
        }
    }, {
        name: '外层盘',
        type: 'gauge',
        z: 6,
        radius: '90%',
        startAngle: 180,
        endAngle: 0,
        center: ["50%", "75%"], //整体的位置设置
        axisLine: {
            lineStyle: { // 属性lineStyle控制线条样式//控制外圈位置
                color: [
                    [0.5, '#33ffff'],
                    [1, 'rgba(255, 255, 255, 0.2)']
                ],
                width: 5,
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
            value: '10'
        }],
        detail: {
            show: 0
        }
    }]
};