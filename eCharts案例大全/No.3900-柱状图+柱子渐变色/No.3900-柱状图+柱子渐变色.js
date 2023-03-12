option = {
        backgroundColor: 'black',
        xAxis: {
            data: ['18-29岁', '30-39岁', '40-49岁', '5-59岁', '60岁以上'],
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: false
            },

            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#fff',
                fontSize: 18,
                padding: [12, 12]
            }
        },
        yAxis: {
            name: "",

            nameTextStyle: {
                color: '#fff',
                fontSize: 16
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#fff',
                fontSize: 16
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#2d3d53',
                    type: 'dashed' // y轴分割线类型
                }
            },
            interval: 250,

        },
        series: [{
            type: 'bar',
            barWidth: 50,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(1,130,233,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(1,130,233,.2)'
                    }], false)
                }
            },
            data: [490, 710, 495, 850, 499]
        }]
    };