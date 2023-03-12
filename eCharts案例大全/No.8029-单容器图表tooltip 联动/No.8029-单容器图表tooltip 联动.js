let xs = ['2013', '2014', '2015', '2016', '2017', '2018', '2019'];
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
        formatter: function (params) {
            console.log(params);
            let text = `<div style="width: 240px">
                            <div style="margin-bottom: 10px; font-size: 14px; display: flex; justify-content: space-between"><p>${params[0].name} 周五</p> <p>日环比</p></div>
                            <div style="margin-bottom: 5px; font-size: 14px;display: flex; justify-content: space-between"><p>${params[0]['marker']} 接单量</p>  <p>${params[0]['value']}</p></div>
                            <div style="margin-bottom: 5px; font-size: 14px;display: flex; justify-content: space-between"><p>${params[1]['marker']} 总GMV</p>  <p>${params[1]['value']}</p></div>
                            <div style="margin-bottom: 5px; font-size: 14px;display: flex; justify-content: space-between"><p>${params[2]['marker']} 纸板团购</p>  <p>${params[2]['value']}</p></div>
                            <div style="font-size: 14px; display: flex; justify-content: space-between"><p>${params[3]['marker']} 积分商城</p> <p>${params[3]['value']}</p></div>
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
    color: ['#7AF6FC', '#FEC721', '#0AE7CC', 'transparent'],
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
            top: '5%',
            height: '87.5%',
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
            //bottom: '5%'
        },
    ],
    xAxis: [{
            gridIndex: 0, //对应前面grid的索引位置（第一个）
            show: false, //隐藏了x轴
            type: 'category',
            
            axisTick: {
                show: false
            },
            data: xs,
        },
        {
            show: false,
            gridIndex: 1, //对应前面grid的索引位置（第二个）
            type: 'category',
            axisTick: {
                show: false
            },
            data: xs,
        },
        {
            type: 'category',
            gridIndex: 2, //对应前面grid的索引位置（第二个）
            axisTick: {
                show: false
            },
            data: xs,
        }
    ],
    //y轴，不管有几个x轴，几个y轴，或者图，只要找到他对应的grid图的序号索引就可以精准匹配

    yAxis: [
         {
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
            data: [28, 27, 40, 72, 100, 123, 247]
        },
        {
            type: 'bar',
            stack: '总量',
            barWidth: 30,
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: [28, 27, 40, 72, 100, 123, 247]
        },
        {
            type: 'bar',
            stack: '总量',
            barWidth: 30,
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: [20, 27, 60, 52, 60, 103, 147]
        },
        {
            type: 'bar',
            barWidth: 30,
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [10, 10, 10, 10, 10, 10, 10]
        }
    ]
};