option = {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top: '15%',
            right: '3%',
            left: '5%',
            bottom: '12%'
        },
        xAxis: [{
            type: 'category',
            data: ['01部门', '02部门', '03部门', '04部门', '05部门', '06部门', '07部门', '08部门', '09部门', '10部门'],
            axisLine: {
                lineStyle: {
                    color: '#C0C4CC',
                    width: 3
                }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
                margin: 16,
                color: '#160905',
                textStyle: {
                    fontSize: 14
                },
            },
        }],
        yAxis: [{
            axisLabel: {
                formatter: '{value}',
                color: '#160905',
            },
            axisLine: {
                show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(192,196,204,1)',
                    type: 'dashed'
                }
            }
        }],
        series: [{
            type: 'bar',
            data: [300, 450, 770, 203, 255, 188, 156, 300, 450, 770],
            barWidth: '20px',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(84,224,252,1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(4,147,176,1)' // 100% 处的颜色
                    }], false),
                    barBorderRadius: [30, 30, 30, 30]
                }
            }
        }]
      };