var axislineColor = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
    // 颜色过渡
        offset: 0,
        color: '#87F3ED'
    },

    {
        offset: 0.62,
        color: '#A5B8FF'
    },

    {
        offset: 1,
        color: '#cc0000'
    }
]);

var option = {
       backgroundColor: '#013d5a',
    title: {
        x: "38%",
        y: '38%',
        text: '民用户抄表率：96%',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 25,
            color: "#A0C2FC"
        },
    },
    series: [{
            name: '',
            type: 'gauge',
            z: 3,
            min: 0,
            max: 100,
            //圆盘大小
            radius: '80%',
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    width: 21,
                    color: [
                        [1, axislineColor]
                    ],
                }
            },
            // 内刻度
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                //内刻度距离表盘的距离
                distance: 10,
                textStyle: {
                    color: '#ccc',
                    fontSize: 16,
                    fontWeight: 500
                }
            },
            splitLine: { // 分隔线
                show: true,
            },
            detail: {
                show: false,
                textStyle:{
                    fontSize: 20,
                    color: '#fff',
                }
            },
            data: [20]
        },
        {
            // 小刻度
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