var colorList = [{
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [{
                    offset: 0,
                    color: '#7BB2FF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#4186FF' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [{
                    offset: 0,
                    color: '#00D0BF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#05C399' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [{
                    offset: 0,
                    color: '#FFD18C' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#FEAD5A' // 100% 处的颜色
                }],
            }];

option = {
    series: [{
        type: 'gauge',
        splitNumber: 3,
        radius: '93%',
        center: ["50%", "70%"],
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        pointer: {
            show: true,
            width:7 ,
            length: "60%",
                borderColor:'#000',
                borderWidth:'10',
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 35,
                color: [
                    [0.3, colorList[0]],
                    [0.7, colorList[1]],
                    [1, colorList[2]],
                ],
                borderColor:'#000',
                borderWidth:'10',
            },
        },
        axisLabel: {
            show: true,
            color: "#666",
            fontSize: 16,
            formatter: function(value) {
                return value.toFixed(0);
            },
        }, //刻度标签。
        axisTick: {
            show: false,

        }, //刻度样式            
        splitLine: {
            show: false,
            length: "28%",
            lineStyle: {
                color: "#fff",
                width: 2,
            },
        }, //分隔线样式
        detail: {
            show: false
        },
        title: {
            show: false
        },
        data: [{
            value: 77,
            name: '决策层国际化导向'
        }],

    },{
        type: 'gauge',
        splitNumber: 10,
        radius: '100%',
        center: ["50%", "70%"],
        min: 0,
        max: 100,
        startAngle: 180,
        endAngle: 0,
        pointer: {
            show: false,
            width:7 ,
            length: "60%"
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 35,
                color: [
                    [0.3, colorList[0]],
                    [0.7, colorList[1]],
                    [1, colorList[2]],
                ],
                opacity:0.15,
                borderColor:'#000',
                borderWidth:'10',
            },
        },
        axisLabel: {
            show: false,
        }, //刻度标签。
        axisTick: {
            show: false,
            splitNumber: 5,
            lineStyle: {
                color: "#fff",
                width: 2,
            },

        }, //刻度样式            
        splitLine: {
            show: false,
            length: "28%",
            lineStyle: {
                color: "#fff",
                width: 2,
            },
        }, //分隔线样式
        detail: {
            show: false
        },
        title: {
            show: false
        },
        data: [{
            value: 77,
            name: '决策层国际化导向'
        }],

    }]
};
