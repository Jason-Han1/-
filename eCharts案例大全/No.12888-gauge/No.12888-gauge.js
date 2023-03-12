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
    series: [
        {
            name: '车辆总数',
            type: 'gauge',
            z: 3,
            min: 0,
            max: 100,
            splitNumber: 10,
            radius: '80%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 21,
                    color: [
                        [1,axislineColor]
                    ],
                }
            },
            axisTick: {
                show:false
            },
            axisLabel:{
                show:true,
                distance: -55,
                textStyle: {
                    color: '#333333',
                    fontSize: 12,
                    fontWeight: 500
                }
            },
            splitLine: { // 分隔线
                show:false
            },
            title: {
                offsetCenter:[0, 18],
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: 'white',
                    fontSize: 20
                }
            },
            detail: {
                offsetCenter:[0, 100],
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#007FFF',
					fontSize:20,
					fontWeight: 500
                },
                formatter: function (value) {
                    return `${value}%`;
                },
            },
            itemStyle: {
                normal: {
                    color: "#8492AA",
                }
            },
            data: [{
                value: 90,
                name: ''
            }]
        },
        {
            name: '',
            type: 'gauge',
            z: 2,
            min: 0,
            max: 100,
            splitNumber: 10,
            radius: '70%',
            axisLine: {            // 坐标轴线
                show:false,
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 0,
                    color: [
                        [1,axislineColor]
                    ],
                }
            },
            title:{
                show:false
            },
            detail:{
                show:false
            },
            axisTick: {
                show:true,
                length: 15,
                lineStyle:{
                    width:3,
                    color:'#979797'
                }
            },
            axisLabel:{
                show:false
            },
            splitLine: { // 分隔线
                show:false
            }
        }
    ]
};