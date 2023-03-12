let xs = ['2013', '2014', '2015', '2016', '2017', '2018', '2019'];
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    color: ['pink', 'green', '#a9b0d3', '#476fd4'],
    grid: [
        {
            x: '7%',
            y1: '7%',
            height: '40%',
            left: '10%'
        },
        {
            x: '5%',
            y2: '5%',
            height: '35%',
            left: '10%',
            //bottom: '5%'
        }
    ],
    xAxis: [
        {
            show: false, //隐藏了x轴
            type: 'category',
            gridIndex: 0, //对应前面grid的索引位置（第一个）
            axisTick: {
                show: false
            },
            axisLabel: {
                //interval:showNum,  //x轴显示的数量，我这里是动态算的
            },
            axisPointer: {
                // show: false
            },
            data: xs,
        },
        {
            type: 'category',
            gridIndex: 1, //对应前面grid的索引位置（第二个）
            axisTick: {
                show: false
            },
            axisLabel: {
                //interval:showNum,
            },
            data: xs,
        }
    ],
    //y轴，不管有几个x轴，几个y轴，或者图，只要找到他对应的grid图的序号索引就可以精准匹配

    yAxis: [
        {
            type: 'value',
            gridIndex: 1, //对应前面grid的索引位置（第二个）
            name: '总GMV',
            //nameLocation:'end',
            splitLine: {
                show: true
            },
            top: 50,
            nameLocation: 'middle',
            nameTextStyle: {
                padding: 25
            },
            position: 'left',
            axisLine: {
                show: false,
            },
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            show: false,
            type: 'value',
            gridIndex: 1,
            nameLocation: 'middle',
            name: '总GMV',
            nameTextStyle: {
                padding: 25
            },
            splitLine: {
                show: true
            },
            position: 'left',
            axisLine: {
                show: false,
            },
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            gridIndex: 0,
            name: '接单量',
            nameTextStyle: {
                padding: 40
            },
            position: 'left',
            nameLocation: 'middle',
            splitLine: {
                show: true
            },
            //nameLocation: 'start',//y轴name的位置
            //inverse: true,
            axisLine: {
                show: false,
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    fontSize: 12 //y轴坐标轴上的字体大小
                }

            },
        },
    ],
    series: [{
            name: '接单量',
            // type:'bar',
            // name: "累产气量"
            type: "line",
            xAxisIndex: 0,
            yAxisIndex: 2,

            data: [58645, 138575, 169930, 186999, 196261, 255398, 295343]
        },
        {
            type: 'bar',
            stack: '总量',
            barWidth: 30,
            xAxisIndex: 1,
            yAxisIndex: 0,
            data: [18, 27, 40, 72, 100, 123, 247]
        },
        {
            type: 'bar',
            stack: '总量',
            barWidth: 30,
            xAxisIndex: 1,
            yAxisIndex: 0,
            data: [10, 27, 60, 52, 60, 103, 147]
        }
    ]
};