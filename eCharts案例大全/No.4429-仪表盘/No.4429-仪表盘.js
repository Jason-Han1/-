var data = {
    min: 0,
    max: 0.36,
    normalmin: 0.05,
    normalmax: 0.3,
    value: 0.01,
    unit: 'M Pa'
}

option = {
    backgroundColor: '#fff',
    series: [{
            name: "压力",
            type: "gauge",
            min: data.min,
            max: data.max,
            radius: '80%',
            detail: {
                fontSize:50,
                formatter: "{value}"
            },
            title: {               //设置仪表盘中间显示文字样式
                fontSize:30,
            },
            splitNumber: 6,
            axisLine: {
                lineStyle: {
                    color: [ //数组第一个属性是颜色所占line百分比
                        [data.normalmin / (data.max - data.min), '#f66568'],
                        [data.normalmax / (data.max - data.min), '#55d36f'],
                        [1, '#f66568']

                    ],
                    width: 30
                }
            },
            splitLine: {
                length: 50,
                lineStyle: {
                    color: '#eaeceb',
                    width: 4
                }
            },
            axisTick: {
                height: 40,
                lineStyle: {
                    color: 'auto',
                }
            },
            axisTick: {
                splitNumber: 5,
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 2
                },
                length: 40,
            },
            axisLabel:{
                textStyle:{
                    fontSize:30
                }
            },
            data: [{
                value: data.value,
                name: data.unit
            }]
        },
    ]
}