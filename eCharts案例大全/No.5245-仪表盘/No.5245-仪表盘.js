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
       backgroundColor: '#05163B',
    title: {
        x: "center",
        y: '38%',
        text: '共享表',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 25,
            color: "#A0C2FC"
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
                show: false,
                distance: 10,
                textStyle: {
                    color: '#ccc',
                    fontSize: 16,
                    fontWeight: 500
                }
            },
            splitLine: { // 分隔线
                show: false
            },
            detail: {
                show: false,
                
            },
            data: [96],
                detail: {
                          show: true,
                          offsetCenter: [0, '70%'],
                          textStyle: {
                              fontSize: 20,
                              color: '#00eff2'
                          },
                      
                      },
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
                splitNumber:19,
                length: 16,
                lineStyle: {
                    width: 3,
                    color: '#5DB2F5'
                }
            },
            axisLabel: {
                show: false
            },
            splitLine: { // 分隔线
                show: false
            }
        },
            {
            name: '最内层线',
            type: 'gauge',
            radius: '65%',
            min: 0,
            max: 100,
            center: ['50%', '50%'],
        
            axisLine: {
                show: false,
                lineStyle: {
                    opacity: 0,
                }
            },
            splitLine: {
                show: false,
             
                lineStyle: {
                    opacity: 0
                }
            },
            axisLabel: {
                show: false
            },
            axisTick: {
   
                length: 5,
                lineStyle: {
                    color: '#A8CF3C',
                    width: 3,
                    type: 'solid'
                }
            },
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        }
    ]
};