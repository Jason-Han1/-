var axislineColor = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: '#87F3ED'
    },

    {
        offset: 0.62,
        color: '#A5B8FF'
    },

    {
        offset: 1,
        color: '#FF0000'
    }
]);

var option = {
    title: {
        x: "47%",
        y: '78%',
        text: '累计办结',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 30,
            color: "red"
        },
    },
    series: [{
            name: '车辆总数',
            type: 'gauge',
            z: 3,
            min: 0,
            max: 100,
            radius: '80%',
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    width: 21,
                    color: [
                        [1, axislineColor]
                    ],
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                distance: 10,
                textStyle: {
                    color: '#333333',
                    fontSize: 12,
                    fontWeight: 500
                }
            },
            splitLine: { // 分隔线
                show: false
            },
            detail: {
                show: false,
                
            },
            data: [90]
        },
        {
            name: '',
            type: 'gauge',
            z: 2,
            min: 0,
            max: 100,
            radius: '75%',
            axisLine: { // 坐标轴线
                show: false,
                lineStyle: { // 属性lineStyle控制线条样式
                    width: 0,
                    color: [
                        [1, axislineColor]
                    ],
                }
            },
            title: {
                show: false
            },
            detail: {
                show: false
            },
            axisTick: {
                show: true,
                length: 6,
                lineStyle: {
                    width: 3,
                    color: '#979797'
                }
            },
            axisLabel: {
                show: false
            },
            splitLine: { // 分隔线
                show: false
            }
        }
    ]
};