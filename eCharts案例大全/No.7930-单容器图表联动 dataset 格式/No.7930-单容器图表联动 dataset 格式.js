option = {
    axisPointer: {
        link: {
            xAxisIndex: 'all'
        },
        label: {
            backgroundColor: '#777'
        }
    },
    title: [{
        text: '接单量（万平方米）',
        left: 60,
        top: '0%',
        textStyle: {
            color: '#000',
            fontSize: 14,
            fontWeight: 'normal'
        }
    }, {
        subtext: '总GMV（万元）',
        subtextStyle: {
            color: '#000',
            fontSize: 14,
            fontWeight: 'normal',
        },
        left: 60,
        top: '45%',
    }],
    dataset: {
        dimensions: [
            'date', 'saleAmount', 'saleAmountChain', 'GMVChain', 'GMV'
        ],
        source: [{
                date: '3-21',
                saleAmount: 287,
                saleAmountChain: "5",
                GMV: 131,
                GMVChain: '-2',
            },
            {
                date: '3-22',
                saleAmount: 187,
                saleAmountChain: "3",
                GMV: 136,
                GMVChain: '-15',
            },
            {
                date: '3-23',
                saleAmount: 147,
                saleAmountChain: "2.5",
                GMV: 126,
                GMVChain: '-15',
            },
            {
                date: '3-24',
                saleAmount: 87,
                saleAmountChain: "3",
                GMV: 226,
                GMVChain: '-11',
            },
            {
                date: '3-25',
                saleAmount: 107,
                saleAmountChain: "2",
                GMV: 246,
                GMVChain: '-12',
            },
            {
                date: '3-26',
                saleAmount: 227,
                saleAmountChain: "2",
                GMV: 46,
                GMVChain: '-12',
            },
            {
                date: '3-27',
                saleAmount: 127,
                saleAmountChain: "2",
                GMV: 16,
                GMVChain: '-12',
            }
        ]
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                type: 'dashed'
            }
        },
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        textStyle: {
            color: '#000'
        },
        formatter: function(params) {
            console.log(params);
            let text = `<div style="width: 240px">
                            <div style="margin-bottom: 10px; font-size: 14px; display: flex; justify-content: space-between"><p>${params[0].name} 周五</p> <p>日环比</p></div>
                            <div style="margin-bottom: 5px; font-size: 14px;display: flex; justify-content: space-between"><p>${params[0]['marker']} 接单量</p>  <p>${params[0]['value']['saleAmount']} <i></i> ${Math.abs(params[0]['value']['saleAmountChain'])}%</p></div>
                            <div style="margin-bottom: 5px; font-size: 14px;display: flex; justify-content: space-between"><p>${params[1]['marker']} 总GMV</p>  <p>${params[1]['value']['GMV']} <i></i> ${Math.abs(params[0]['value']['GMVChain'])}%</p></div>
                        </div>`;
            return text;
        },
        // position: function(pos, params, el, elRect, size) {
        //     var obj = {
        //         top: 10
        //     };
        //     obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
        //     return obj;
        // }
    },
    grid: [{
            x: '5%',
            y: '5%',
            height: '35%',
            left: '10%',
            show: false
        },
        {
            x: '5%',
            y1: '5%',
            top: '40%',
            height: '12.5%',
            left: '10%',
            show: false
        },
        {
            x: '5%',
            y2: '5%',
            top: '52.5%',
            height: '40%',
            left: '10%',
            show: false
        },
    ],
    xAxis: [{
            gridIndex: 0, //对应前面grid的索引位置（第一个）
            show: false, //隐藏了x轴
            type: 'category',

            axisTick: {
                show: false
            },
        },
        {
            show: false,
            gridIndex: 1, //对应前面grid的索引位置（第二个）
            type: 'category',
            axisTick: {
                show: false
            },
        },
        {
            type: 'category',
            gridIndex: 2, //对应前面grid的索引位置（第二个）
            axisTick: {
                show: false
            },
        }
    ],
    //y轴，不管有几个x轴，几个y轴，或者图，只要找到他对应的grid图的序号索引就可以精准匹配
    yAxis: [{
            type: 'value',
            gridIndex: 0,
            nameTextStyle: {
                padding: 40
            },
            offset: 10,
            position: 'left',
            nameLocation: 'middle',
            splitLine: {
                show: true
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    fontSize: 12 //y轴坐标轴上的字体大小
                }
            },
        },
        {
            show: false,
            type: 'value',
            gridIndex: 1, //对应前面grid的索引位置（第二个）
            splitLine: {
                show: true
            },
            offset: 10,
            nameTextStyle: {
                padding: 25,
                align: 'center'
            },
            position: 'left',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            gridIndex: 2,
            nameTextStyle: {
                padding: 40
            },
            offset: 10,
            position: 'left',
            nameLocation: 'middle',
            splitLine: {
                show: true
            },
            axisLine: {
                show: false,
            },
            axisTick: {
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
            type: "line",
            xAxisIndex: 0,
            yAxisIndex: 0,
            encode: {
                x: 'date',
                y: 'saleAmount'
            },
            icon: '',
            itemStyle: {
                normal: {
                    color: '#80F5FF'
                }
            },
        },
        {
            type: 'bar',
            stack: '总量',
            barWidth: 30,
            xAxisIndex: 2,
            yAxisIndex: 2,
            encode: {
                x: 'date',
                y: 'GMV'
            },
            icon: '',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#2A84CF'
                    }, {
                        offset: 1,
                        color: '#03FECD'
                    }]),
                }
            },
        },
        {
            type: 'bar',
            barWidth: 30,
            xAxisIndex: 1,
            yAxisIndex: 1,
            encode: {
                x: 'date',
                y: 'saleAmount'
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'transparent'
                    }, {
                        offset: 1,
                        color: 'transparent'
                    }]),
                }
            },
        }
    ]
};