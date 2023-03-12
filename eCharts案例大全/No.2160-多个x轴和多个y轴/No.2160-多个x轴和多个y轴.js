/*
    图表上边展示7天降雨量，下边展示7天温度/湿度
    
    ***注意***
    xAxis / yAxis / series
    一定要把 series - xAxisIndex / yAxisIndex对应好
    对应规则：series数据 
        降雨量的xAxisIndex - 因为xAxis第0项为顶部x轴（降雨量要放到顶部），所以 xAxisIndex = 0
                yAxisIndex - 因为yAxis第0项为降雨量，所以 yAxisIndex = 0
        
        降雨量的xAxisIndex - 因为xAxis第1项为底部x轴（温度要放到底部），所以 xAxisIndex = 1
                yAxisIndex - 因为yAxis第2项为降雨量，所以 yAxisIndex = 2
        
        ***展示数据对应 yAxis 数据的第几项 yAxisIndex 就等于几***
        
        如果对应不对可能会报错 'type is undefined'，数据确认没问题那就是gridIndex ，yAxisIndex， xAxisIndex 没有对应好
              
    ***注意***
*/
// 最大和最小时间戳
const xMin = new Date('2021/08/24').getTime();
const xMax = new Date('2021/08/31').getTime();
option = {
    title: {
        text: '多个x轴和多个y轴',
    },
    axisPointer: {
        // 设置上下x轴同时联动
        link: { xAxisIndex: 'all' },
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            //时间
            let relVal = params[0].value[0];
            for (let i = 0, l = params.length; i < l; i++) {
                const dataValue = params[i].value[1] === null ? '-' : params[i].value[1];
                relVal += '<br/>' + params[i].seriesName + ' : ' + dataValue;
            }
            return relVal;
        },
    },
    grid: [
        {
            height: '35%',
            top: '10%',
            show: true,
            borderColor: '#19295c',
            borderWidth: 0,
        },
        {
            top: '60%',
            height: '35%',
            show: true,
            borderColor: '#19295c',
            borderWidth: 0,
        },
    ],
    xAxis: [
        {
            // 顶部x轴
            gridIndex: 0,
            type: 'time',
            max: 1630252800000,
            min: 1629734400000,
            position: 'top',
            axisTick: { show: false },
            splitLine: {
                show: false,
            },
            axisLine: {
                show: true,
            },
            boundaryGap: false, // 取消坐标轴两边留白
        },
        {
            // 底部x轴
            gridIndex: 1,
            type: 'time',
            max: 1630252800000,
            min: 1629734400000,
            axisTick: { show: false },
            splitLine: {
                show: false,
            },
            axisLine: {
                show: true,
            },
            boundaryGap: false, // 取消坐标轴两边留白
        },
    ],
    yAxis: [
        {
            // 降雨量
            name: '降雨量\n(mm)',
            nameTextStyle: {
                align: 'center'
            },
            nameLocation: 'end',
            gridIndex: 0,
            type: 'value',
            inverse: true,
            axisTick: { show: false },
            splitLine: {
                show: false,
            },
            axisLine: {
                show: true,
            },
        },
        {
            // 降雨量右侧y轴线与为了下面的折线图对齐
            gridIndex: 0,
            type: 'value',
            position: 'right',
            inverse: true,
            axisTick: { show: false },
            splitLine: {
                show: false,
            },
            axisLine: {
                show: true,
            },
        },
        {
            // 温度
            name: '温度\n(℃)',
            nameTextStyle: {
                align: 'center'
            },
            nameLocation: 'end',
            gridIndex: 1,
            type: 'value',
            axisTick: { show: false },
            splitLine: {
                show: false,
            },
            axisLine: {
                show: true,
            },
        },
        {
            // 湿度
            name: ' 湿度\n(hPa)',
            nameTextStyle: {
                align: 'left'
            },
            nameLocation: 'end',
            gridIndex: 1,
            type: 'value',
            position: 'right',
            axisTick: { show: false },
            splitLine: {
                show: false,
            },
            axisLine: {
                show: true,
            },
        },
        {
            // 气压
            name: ' 气压\n(Pa)',
            nameTextStyle: {
                align: 'left'
            },
            nameLocation: 'end',
            gridIndex: 1,
            offset: 50,
            type: 'value',
            position: 'right',
            axisTick: { show: false },
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '降雨量',
            type: 'bar',
            symbol: 'circle',
            symbolSize: 6,
            xAxisIndex: 0,
            yAxisIndex: 0,
            barWidth: 5, // 柱宽
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#0d5592',
                        },
                        {
                            offset: 1,
                            color: '#0ebfd4',
                        },
                    ]),
                    barBorderRadius: [0, 0, 4, 4],
                    borderWidth: 0,
                },
            },
            data: [
                ['2021-08-24', 12],
                ['2021-08-25', 121],
                ['2021-08-26', 55],
                ['2021-08-27', 99],
                ['2021-08-28', 23],
                ['2021-08-29', 45],
                ['2021-08-30', 200],
            ],
        },
        {
            name: '温度',
            type: 'line',
            symbol: 'circle',
            symbolSize: 6,
            xAxisIndex: 1,
            yAxisIndex: 2,
            data: [
                ['2021-08-24', 25],
                ['2021-08-25', 16],
                ['2021-08-26', 18],
                ['2021-08-27', 20],
                ['2021-08-28', 33],
                ['2021-08-29', 30],
                ['2021-08-30', 12],
            ],
        },
        {
            name: '湿度',
            type: 'line',
            symbol: 'circle',
            symbolSize: 6,
            xAxisIndex: 1,
            yAxisIndex: 3,
            data: [
                ['2021-08-24', 50],
                ['2021-08-25', 30],
                ['2021-08-26', 10],
                ['2021-08-27', 70],
                ['2021-08-28', 45],
                ['2021-08-29', 88],
                ['2021-08-30', 22],
            ],
        },
                {
            name: '气压',
            type: 'line',
            symbol: 'circle',
            symbolSize: 6,
            xAxisIndex: 1,
            yAxisIndex: 4,
            data: [
                ['2021-08-24', 250],
                ['2021-08-25', 130],
                ['2021-08-26', 110],
                ['2021-08-27', 70],
                ['2021-08-28', 45],
                ['2021-08-29', 88],
                ['2021-08-30', 22],
            ],
        },
    ],
};
