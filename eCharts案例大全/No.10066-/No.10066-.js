option = {
        backgroundColor: "#08143A",
        grid: {
            left: '15%',
            right: '15%',
            bottom: '3%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            }
        },
        xAxis: {
            data: ['1', '2', '3'],
            axisTick: { show: false },
            axisLine: { show: false },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            splitLine: { show: false },
            axisTick: { show: false },
            axisLine: { show: false },
            axisLabel: { show: false }
        },
        series: [
            {
                name: '数量',
                type: 'pictorialBar',
                barCategoryGap: '-30%',
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        formatter: '{c} 个',
                        textStyle: {
                            fontSize: 16,
                            color: '#fff'
                            
                        }
                    }
                },
                symbol: 'path://M130,70 A30,30 0 0,0 70,70 z',
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = ['#FAC600', "#C664FB", "#F4499A"];
                            return colorList[params.dataIndex]
                        },
                        label: {
                            show: true,
                            position: 'top',
                            formatter: '{b}\n{c}'

                        },
                        opacity: 0.9
                    },
                    emphasis: {
                        opacity: 1
                    }
                },
                data: [123, 70, 95],
                z: 10
            }
        ]
    };