option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        },
        backgroundColor: 'rgba(50,50,50,0.2)',
        formatter: function(a) {
            return (
                a[0]['axisValueLabel'] + "<br>" +
                '<span style="display: inline-block; margin-right: 5px; border-radius: 10px; width: 9px; height: 9px; background-color: ' + a[0]['color'] + '"></span>' +
                a[0]['seriesName'] + ': ' + a[0]['value'] + "<br>" +
                '<span style="display: inline-block; margin-right: 5px; border-radius: 10px; width: 9px; height: 9px; background-color: ' + a[1]['color'] + '"></span>' +
                a[1]['seriesName'] + ': ' + a[1]['value'] + "<br>" +
                '<span style="display: inline-block; margin-right: 5px; border-radius: 10px; width: 9px; height: 9px; background-color: ' + a[0]['color'] + '"></span>' +
                a[2]['seriesName'] + ': ' + a[2]['value']
            );
        }
    },
    axisPointer: {
        link: [{
            xAxisIndex: 'all',
        }],
        lineStyle: {
            color: '#fff',
            width: 0
        }
    },
    grid: [{ // 直角坐标系内绘图网格
            //   show: false,
            top: '30px',
            left: '50',
            right: '55%',
            width: 'auto',
            height: 'auto'
        },
        {
            top: '30px',
            left: '55%',
            width: 'auto',
            height: 'auto'
        }
    ],
    xAxis: [

        { // 直角坐标系grid的x轴
            gridIndex: 0,
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                interval: 0, // 显示x轴数据
                showMinLabel: true,
                showMaxLabel: true,
                align: 'left',
                rotate: 330
            },
            axisLine: {
                lineStyle: {
                    color: '#999'
                }
            },
            // min: 0,
            axisTick: {
                show: false
            },
            data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00']
        },
        { // 直角坐标系grid的x轴
            type: 'category',
            gridIndex: 1,
            boundaryGap: false,
            axisLabel: {
                interval: 0, // 显示x轴数据
                showMinLabel: true,
                showMaxLabel: true,
                align: 'left',
                rotate: 330
            },
            axisLine: {
                lineStyle: {
                    color: '#999'
                }
            },
            axisTick: {
                show: false
            },
            data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00']
        },
    ],
    yAxis: [{ // 直角坐标系grid的y轴
            name: '血压',
            gridIndex: 0,
            nameLocation: 'end',
            type: 'value',
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: '#999'
                }
            },
            axisTick: {
                show: false
            },
            // axisLabel: {
            //   // formatter: '{value}%'
            // },
            splitLine: { // y轴网格显示
                show: true
            },
            nameTextStyle: { // 坐标轴名样式
                color: '#666',
                fontSize: 12,
                align: 'left'
            },
            boundaryGap: true,
            splitNumber: 3, // 坐标轴分割段数
            minInterval: 40, // 自动计算的坐标轴最小间隔大小。例如可以设置成1保证坐标轴分割刻度显示成整数。
            // interval: 50, // 强制设置坐标轴分割间隔。
            data: ['0', '120', '140', '180']
        },
        { // 直角坐标系grid的y轴
            name: '行为分数',
            gridIndex: 1,
            nameLocation: 'end',
            type: 'value',
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: '#999'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: { // y轴网格显示
                show: true
            },
            nameTextStyle: { // 坐标轴名样式
                color: '#666',
                fontSize: 12,
                align: 'left'
            },
            boundaryGap: true,
            splitNumber: 3, // 坐标轴分割段数
            minInterval: 40, // 自动计算的坐标轴最小间隔大小。例如可以设置成1保证坐标轴分割刻度显示成整数。
            // interval: 50, // 强制设置坐标轴分割间隔。
            data: ['0', '120', '140', '180']
        },
    ],
    series: [

        {
            xAxisIndex: 0,
            yAxisIndex: 0,
            name: '舒张压',
            type: 'line',
            smooth: true,
            smoothMonotone: 'x',
            lineStyle: {
                normal: {
                    width: 2,
                    color: '#8ecefc'
                }
            },
            itemStyle: {
                normal: {
                    color: '#8ecefc'
                }
            },
            areaStyle: {
                normal: {
                    color: '#e6f5fe',
                    origin: 'auto',
                    shadowColor: '#e6f5fe'
                }
            },
            data: [44, 65, 74, 86, 70, 85, 92, 56, 75, 84, 66, 50]
        },
        {
            xAxisIndex: 0,
            yAxisIndex: 0,
            name: '收缩压',
            type: 'line',
            smooth: true,
            smoothMonotone: 'x',
            lineStyle: {
                normal: {
                    width: 2,
                    color: '#7cedc4'
                }
            },
            itemStyle: {
                normal: {
                    color: '#7cedc4'
                }
            },
            areaStyle: {
                normal: {
                    color: '#7cedc41f',
                    origin: 'auto'
                }
            },
            data: [34, 55, 54, 76, 60, 75, 72, 16, 55, 74, 36, 10]
        },

        {
            xAxisIndex: 1,
            yAxisIndex: 1,
            name: '行为分数',
            type: 'line',
            smooth: true,
            smoothMonotone: 'x',
            lineStyle: {
                normal: {
                    width: 2,
                    color: '#8ecefc'
                }
            },
            itemStyle: {
                normal: {
                    color: '#8ecefc'
                }
            },
            areaStyle: {
                normal: {
                    color: '#e6f5fe',
                    origin: 'auto',
                    shadowColor: '#e6f5fe'
                }
            },
            data: [44, 65, 74, 86, 70, 85, 92, 56, 75, 84, 66, 50]
        }
    ],
    textStyle: {
        color: '#666',
        fontSize: 12
    }
}