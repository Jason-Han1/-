option = {
    //多个图，就有多个grid,排序默认0、1、2....
    grid: [
        //0降雨
        {
            x: '7%',
            y: '38%',
            height: '15%',
            left: '10%',
            right: '10%'
        },
        //1水位流量
        {
            x: '7%',
            y2: '7%',
            height: '35%',
            left: '10%',
            bottom: '15%'
        }
    ],
    legend: {
        data: ['蒸发量', '降水量', '平均温度', '测试']
    },
    xAxis: [{
            show: true, //隐藏了x轴
            type: 'category',
            boundaryGap: false,
            gridIndex: 0, //对应前面grid的索引位置（第一个）
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: "#ccc"
                }
            },
            // splitLine: {
            //     show: true,
            //     interval:0,


            // },
            axisLabel: {
                show: false,
                //interval:showNum,  //x轴显示的数量，我这里是动态算的
            },
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],


        },
        {
            type: 'category',
            boundaryGap: false,
            gridIndex: 1, //对应前面grid的索引位置（第二个）
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: "#ccc"
                }
            },
            axisLabel: {
                color: "#A1A2A3",
            },
            splitLine: {
                show: true,
                interval: 0,
                lineStyle: {
                    shadowColor: "#CCCCCC",
                    shadowOffsetY: -20,
                    type: "dash"
                }


            },
            splitArea: {
                show: false,
            },
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],


        }
    ],
    //y轴，不管有几个x轴，几个y轴，或者图，只要找到他对应的grid图的序号索引就可以精准匹配


    yAxis: [{
            show: false, //隐藏了x轴
            type: 'value',
            gridIndex: 1, //对应前面grid的索引位置（第二个）
            name: '蒸发量',
            //nameLocation:'end',
            splitLine: {
                show: false
            },
            nameLocation: 'middle',
            nameTextStyle: {
                padding: 25
            },
            position: 'right',
            axisLine: {
                lineStyle: {
                    //color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            show: false,
            gridIndex: 1,
            nameLocation: 'middle',
            name: '降水量',
            nameTextStyle: {
                padding: 25
            },
            position: 'left',
            axisLine: {
                lineStyle: {
                    //color: colors[2]
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['rgba(121,121,121,0.3)', 'rgba(121,121,121,0)']
                }
            },
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            gridIndex: 0,
            show: false,
            name: '平均温度',
            nameTextStyle: {
                padding: 25
            },
            position: 'left',
            nameLocation: 'middle',
            splitLine: {
                show: false
            },
            //nameLocation: 'start',//y轴name的位置
            //inverse: true,
            axisLine: {
                lineStyle: {
                    //color: '#f8f106'
                }
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    fontSize: 12 //y轴坐标轴上的字体大小
                }


            },
        }
    ],


    series: [{
            name: '降水量',
            type: "bar",
            xAxisIndex: 0,
            itemStyle: {
                normal: {
                    show: true,
                    color: "#286dcf",
                    barBorderRadius: 5
                }
            },
            barMaxWidth: 10, //固定柱子宽度
            yAxisIndex: 2,
            data: [-26, 5.9, 9.0, 26.4, -2.6, 5.9, 9.0, 26.4, -2.6, 5.9, 9.0, 26.4]
        },
        {
            name: '平均温度',
            type: 'line',
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: "#64C8DC",
                }
            },
            barWidth: 10,
            xAxisIndex: 1,
            yAxisIndex: 0,
            data: [2.6, 5.9, 9.0, 26.4, 2.6, 5.9, 9.0, 26.4, 2.6, 5.9, 9.0, 26.4]
        },
        {
            name: '平均温度',
            type: 'line',
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: "#037FB2"
                }
            },
            barWidth: 10,
            xAxisIndex: 1,
            yAxisIndex: 0,
            data: [12.6, 15.9, 19.0, 25.4, 16, 1, 2, 3, 4, 5, 6, 7]
        },


    ]
};