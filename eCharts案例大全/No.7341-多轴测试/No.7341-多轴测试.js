option = {
    //多个图，就有多个grid,排序默认0、1、2....
    grid: [
        //0降雨
        {
            x: '7%',
            y: '7%',
            height: '35%',
            left: '10%',
            right: '10%',
        },
        //1水位流量
        {
            x2: '7%',
            y2: '7%',
            height: '35%',
            left: '10%',
            right: '10%',
            bottom: '15%',
        },
    ],
    dataZoom: [
        {
            type: 'inside',
            xAxisIndex: [0, 1],
            start: 48,
            end: 100,
        },
        {
            show: true,
            xAxisIndex: [0, 1],
            type: 'slider',
            top: '85%',
            start: 48,
            end: 100,
        },
    ],
    legend: {
        data: ['蒸发量', '降水量', '预报温度', '实测温度', '预报湿度', '实测湿度'],
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
        },
    },
    axisPointer: {
        triggerTooltip: true,
        link: {
            xAxisIndex: 'all',
        },
    },
    xAxis: [
        {
            show: true, //隐藏了x轴
            type: 'category',
            boundaryGap: true,
            gridIndex: 0, //对应前面grid的索引位置（第一个）
            axisTick: {
                alignWithLabel: true,
            },
            axisLine: {
                lineStyle: {
                    color: '#ccc',
                },
            },
            splitLine: {
                show: true,
                interval: 0,
                lineStyle: {
                    shadowColor: '#CCCCCC',
                    shadowOffsetY: -20,
                    type: 'dash',
                },
            },
            axisLabel: {
                show: false,
                //interval:showNum,  //x轴显示的数量，我这里是动态算的
            },
            data: [
                '08:00',
                '09:00',
                '10:00',
                '11:00',
                '12:00',
                '13:00',
                '14:00',
                '15:00',
                '16:00',
                '17:00',
                '18:00',
                '19:00',
            ],
        },
        {
            show: true,
            type: 'category',
            boundaryGap: true,
            gridIndex: 1, //对应前面grid的索引位置（第二个）
            axisTick: {
                alignWithLabel: true,
            },
            axisLine: {
                lineStyle: {
                    color: '#ccc',
                },
            },
            axisLabel: {
                color: '#A1A2A3',
            },
            splitLine: {
                show: true,
                interval: 0,
                lineStyle: {
                    shadowColor: '#CCCCCC',
                    shadowOffsetY: -20,
                    type: 'dash',
                },
            },
            splitArea: {
                show: false,
            },
            data: [
                '08:00',
                '09:00',
                '10:00',
                '11:00',
                '12:00',
                '13:00',
                '14:00',
                '15:00',
                '16:00',
                '17:00',
                '18:00',
                '19:00',
            ],
        },
    ],
    //y轴，不管有几个x轴，几个y轴，或者图，只要找到他对应的grid图的序号索引就可以精准匹配
    yAxis: [
        {
            show: true, //隐藏了x轴
            type: 'value',
            gridIndex: 1, //对应前面grid的索引位置（第二个）
            name: '湿度',
            //nameLocation:'end',

            nameLocation: 'middle',
            nameTextStyle: {
                padding: 25,
            },
            position: 'right',
            axisLine: {
                lineStyle: {
                    //color: colors[0]
                },
            },
            axisLabel: {
                formatter: '{value}',
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#ddd',
                    type: 'dash',
                },
            },
            splitNumber: 5,
            min: 0,
            max: 30,
        },
        {
            show: true,
            type: 'value',
            gridIndex: 1,
            nameLocation: 'middle',
            name: '温度',
            nameTextStyle: {
                padding: 25,
            },
            position: 'left',
            axisLine: {
                lineStyle: {
                    show: true,
                },
            },
            splitNumber: 5,
            minorTick: {
                show: true,
            },
            minorSplitLine: {
                show: true,
                lineStyle: {
                    color: '#ddd',
                    type: 'dash',
                },
            },
            axisTick: {
                show: true,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#ddd',
                    type: 'dash',
                },
            },
            axisLabel: {
                show: true,
                formatter: '{value}',
                textStyle: {
                    fontSize: 12, //y轴坐标轴上的字体大小
                },
            },
            min: 0,
            max: 30,
        },
        {
            type: 'value',
            gridIndex: 0,
            show: true,
            inverse: true,
            name: '降水量',
            nameTextStyle: {
                padding: 25,
            },
            position: 'right',
            nameLocation: 'middle',
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#ddd',
                    type: 'dash',
                },
            },
            axisLine: {
                lineStyle: {
                    //color: '#f8f106'
                },
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    fontSize: 12, //y轴坐标轴上的字体大小
                },
            },
            splitNumber: 5,
            minorTick: {
                show: true,
            },
            minorSplitLine: {
                show: true,
                lineStyle: {
                    color: '#ddd',
                    type: 'dash',
                },
            },
        },
    ],
    series: [
        {
            name: '降水量',
            type: 'bar',
            xAxisIndex: 0,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#286dcf',
                    barBorderRadius: 5,
                },
            },
            barMaxWidth: 10, //固定柱子宽度
            yAxisIndex: 2,
            data: [, , , , , , 9.0, 26.4, 2.6, 5.9, 9.0, 26.4],
            markLine: {
                symbol: 'none',
                data: [
                    {
                        lineStyle: {
                            color: '#FA3934',
                            width: 2,
                        },
                        xAxis: '15:00',
                        label: {
                            position: 'middle',
                            formatter: '作业预报时间',
                        },
                    },
                ],
            },
        },
        {
            name: '蒸发量',
            type: 'bar',
            xAxisIndex: 0,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#2222cf',
                    barBorderRadius: 5,
                },
            },
            barMaxWidth: 10, //固定柱子宽度
            yAxisIndex: 2,
            data: [5.9, 9.0, 26.4, 2.6, 5.9, 9.0, , , , , ,],
        },
        {
            name: '实测温度',
            type: 'line',
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: '#64C8DC',
                },
            },
            barWidth: 10,
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [2.6, 5.9, 9.0, 26.4, 2.6, 5.9, 9.0, 3, , , , ,],
            markLine: {
                symbol: 'none',
                data: [
                    {
                        lineStyle: {
                            color: '#FA3934',
                            width: 2,
                        },
                        xAxis: '15:00',
                        label: {
                            position: 'middle',
                            formatter: '作业预报时间',
                        },
                    },
                ],
            },
        },
        {
            name: '预报温度',
            type: 'line',
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: '#64C8DC',
                },
            },
            lineStyle: {
                type: 'dashed',
            },
            barWidth: 10,
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [, , , , , , , 3, 4, 5, 6, 7],
        },
        {
            name: '预报湿度',
            type: 'line',
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: '#037FB2',
                },
            },
            lineStyle: {
                type: 'dashed',
            },
            barWidth: 10,
            xAxisIndex: 1,
            yAxisIndex: 0,
            data: [, , , , , , , 10, 5.9, 9.0, 26.4, 9],
        },
        {
            name: '实测湿度',
            type: 'line',
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: '#037FB2',
                },
            },
            barWidth: 10,
            xAxisIndex: 1,
            yAxisIndex: 0,
            data: [12.6, 15.9, 19.0, 25.4, 16, 1, 2, 10, , , , ,],
        },
    ],
};
