var colorList = [{
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [{
                    offset: 0,
                    color: '#f51940' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#f51940' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [{
                    offset: 0,
                    color: '#ffb555' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#ffb555' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [{
                    offset: 0,
                    color: '#40da9d' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#40da9d' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [{
                    offset: 0,
                    color: '#608dff' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#608dff' // 100% 处的颜色
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
      itemStyle: {
            color: 'red',
      },
            length: "60%",
                borderColor:'#000',
                borderWidth:'10',
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 35,
                color: [
                    [0.25, colorList[0]],
                    [0.5, colorList[1]],
                    [0.75, colorList[2]],
                    [1, colorList[3]],
                ],
                borderColor:'#000',
                borderWidth:'10',
            },
        },
        axisLabel: {
            show: false,
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
                    [0.25, colorList[0]],
                    [0.5, colorList[1]],
                    [0.75, colorList[2]],
                    [1, colorList[3]],
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
