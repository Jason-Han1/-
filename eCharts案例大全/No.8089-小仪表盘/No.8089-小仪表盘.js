option = {
    backgroundColor:"black",
    // title: [{
    //     text: '设备1',
    //     x: '30%',
    //     y: '65%',
    //     textStyle: {
    //         fontSize: 11,
    //         fontWeight: 'normal',
    //         color: '#ffffff',
    //         align: "center"
    //     },
    //     itemGap: 2
    // }, {
    //     text: '开机时间',
    //     x: '20%',
    //     y: '78%',
    //     textStyle: {
    //         fontSize: 11,
    //         fontWeight: 'normal',
    //         color: '#ffffff',
    //         align: "center"
    //     },
    //     itemGap: 2
    // }],
    series: [{
        name: '业务指标',
        radius: "10%",
        center: ["50%", "40%"],
        type: 'gauge',
        min: 0,
        max: 100,
        axisLine: { // 坐标轴线
            lineStyle: { // 属性lineStyle控制线条样式
                color: [
                    [0.3, '#64E1E5'],
                    [0.7, '#2EA4D6'],
                    [1, '#F56668']
                ],
                width: 10,
                //shadowColor : '#fff', //默认透明
                shadowBlur: 3
            }
        },
        splitLine: { //橙色分割线
            length: 8,
            lineStyle: {
                width: 3,
                color: '#8BC5E2',
            }
        },
        axisLabel: { // 坐标轴小标记
            show: false,
            textStyle: { // 属性lineStyle控制线条样式
                fontWeight: 'bolder',
                color: '#fff',
                //shadowColor : '#fff', //默认透明
                shadowBlur: 10
            }
        },
        axisTick: { // 坐标轴小标记
            length: 3, // 属性length控制线长
            lineStyle: { // 属性lineStyle控制线条样式
                color: 'auto',
                width: 3,
                //shadowColor : '#fff', //默认透明
                shadowBlur: 1
            }
        },
        pointer: { //指针长短
            length: 30,
            width: 3,
        },
        detail: {
            formatter: '{value}h',
            fontSize: 16,
        },
        data: [{
            value: 30,
            name: ''
        }]
    }]
};