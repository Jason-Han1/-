var axislineColor = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    {
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
     backgroundColor:'#555',
    series: [
        {
            name: '车辆总数',
            type: 'gauge',
            z: 1,
            min: 0,
            max: 100,
            splitNumber: 10,
            radius: '80%',
            axisLine: {            // 坐标轴线
                show: false,
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 0
                }
            },
            axisTick: {
                show:false
            },
            axisLabel:{
               show:true,
               color: 'rgba(0,166,247,0.5)'
            },
            splitLine: { // 分隔线
                show:true,
                length: 15, 
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                   width:1,
                    color: '#0090FF',
                    opacity: 0.4
                }
            },
            detail: {
                show: false,
            },
            data: []
        }, {
            name: '车辆总数',
            type: 'gauge',
            z: 1,
            min: 0,
            max: 100,
            splitNumber: 10,
            radius: '90%',
            axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                    width: 2,
                    color: [
                        [1, '#0090FF']
                    ],
                    opacity: 0.5
                }
            },
            axisTick: {
                show:false
            },
            axisLabel:{
               show:false,
            },
            splitLine: { // 分隔线
                show:false,
                length: 15, 
            },
            detail: {
                show: false,
            },
            data: []
        }, {
            name: '车辆总数',
            type: 'gauge',
            z: 2,
            min: 0,
            max: 100,
            splitNumber: 10,
            radius: '80%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 10,
                    color: [
                        [1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#00E4FF'
                            },  {
                                offset: 1,
                                color: '#0077F0'
                            }
                        ])]
                    ],
                }
            },
            axisTick: {
                show:false
            },
            axisLabel:{
               show:false
            },
            splitLine: { // 分隔线
                show:false,
                length: 15,  
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: '#0090FF'
                }
            },
            title: {
                show: false,
            },
            detail: {
                offsetCenter:[0, '80%'],
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#FFFFFF',
					fontSize:22,
					fontWeight: 500
                }
            },
            itemStyle: {
                normal: {
                     color: {
                        x: "0.00",
                        y: "0.00",
                        x2: "1.00",
                        y2: "1.00",
                        type: "linear",
                        global: false,
                        colorStops: [{
                            offset: 0,
                            color: "#0077F0"
                        }, {
                            offset: 1,
                            color: "#00E4FF"
                        }]
                    }
                }
            },
            pointer: {
                show: true,
                length: '65%',
                width: 4
            },
            data: [{
                value: 90,
                name: '33'
            }]
        }
    ]
};