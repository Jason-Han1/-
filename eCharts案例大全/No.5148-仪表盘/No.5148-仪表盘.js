option = {
    backgroundColor: "#313b5a",
    tooltip: {
        show: true,
        formatter: "{a} <br/>{b} : {c}℃",
        backgroundColor: "rgba(50,50,50,0.7)",
        trigger: 'item',
        borderColor: "#333", // 提示框浮层的边框颜色。...
        borderWidth: 0, // 提示框浮层的边框宽。...
        padding: 0,
    },
    grid: {
        right: 120,
        left: 1050,
        top: 100,
        bottom: 170,
        borderWidth: 1
    },
    xAxis: {
        show: false,
        type: 'category',
        data: ['Mon']
    },
    yAxis: {
        show: false,
        type: 'value'
    },
    series: [{
        name: '压力',
        type: "gauge",
        radius: '80%',
        min: 0,
        max: 1000,
        splitNumber: 10,
        startAngle: 225,
        endAngle: -45,
        data: [{
            value: 255,
            name: '压力(Pa)'
        }],
        legend: {
            padding: 0,
            margin: 0
        },
        detail: {
            formatter: '{value} Pa',
            textStyle: {
                fontSize: 16
            }
        },
        title: { // 仪表盘标题。
            show: true, // 是否显示标题,默认 true。
            // offsetCenter: [0, "20%"], //相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
            color: "#fff", // 文字的颜色,默认 #333。
            fontSize: 14, // 文字的字体大小,默认 15。
        },
        axisLine: { // 坐标轴线  
            lineStyle: { // 属性lineStyle控制线条样式  
                width: 20,
                color: [
                    [0.2, '#32d3eb'],
                    [0.4, '#60acfc'],
                    [0.6, '#5bc49f'],
                    [0.8, '#feb64d'],
                    [1, '#ff7b7b']
                ]
            }
        }
    }, {
        type: 'bar',
        showBackground: true,
        barWidth: 20,
        data: [16],
        backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.3)'
        },
        itemStyle: {
            normal: {
                color: '#5bc49f',
                label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                        color: '#fff',
                        fontSize: 16
                    },
                    formatter: function(params) {
                        // console.log(params)
                        return `${params.value}℃`
                    }
                },
            }
        },
    }, {
        name: '辅助',
        type: 'bar',
        stack: '总量',
        data: [100],
        itemStyle: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
        },
        emphasis: {
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            }
        },
    }]
};