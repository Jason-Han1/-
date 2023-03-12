
var category = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
var barData1 =[0, 0, 0, 0, 0, 0, 0, 1, 18, 20, 43, 0];
var barData2 = [0, 0, 0, 0, 0, 0, 0, 0, 1, 18, 20, 43];
var lineData1 = [0, 0, 0, 0, 0, 0, 0, 100, 1700, 11.11, 115, -100];
var lineData2 = [0, 0, 0, 0, 0, 0, 0, 100, 100, -90.15, -89.17, 0];
option = {
    backgroundColor: 'transparent',
    tooltip: {
        trigger: 'axis',
        // axisPointer: {
        //   type: 'shadow',
        // },
        textStyle: {
            color: '#CFE3FC',
        },
        borderWidth: 0,
        formatter: (params) => {
            let str = '';
            str = `<div class="ring_ratio_popup">
                 <div>
                   <p style="font-size: 14px;">时间同比数据量${params[2].data}</p>
                   <p style="font-size: 14px;">时间环比数据量${params[3].data}</p>
                   <p style="font-size: 14px;">时间同比${params[1].data}%</p>
                     <p style="font-size: 14px;">时间环比${params[0].data}%</p>
                 </div>
                 </div>`;
            return str;
        },
    },
    toolbox: {
        show: true,
        top: -5,
        itemSize: 12,
        feature: {
            magicType: { show: true, type: ['line'] },
            restore: {
                show: true,
            },
            saveAsImage: { show: true },
        },
        iconStyle: {
            normal: {
                // color: '#2679FB', //设置颜色
                fontSize: 12,
            },
        },
    },
    legend: {
        data: ['时间同比数据量', '时间环比数据量', '时间环比', '时间同比'],
        textStyle: {
            color: '#000',
        },
        right: '20%',
        top: '15%',
    },
    grid: {
        x: '8%',
        y: '30%',
        y2: '8%',
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#B4B4B4',
            },
        },
        axisTick: {
            show: false,
        },
    },
    yAxis: [
        {
            name: '(数据量)',
            nameTextStyle: {
                color: '#666',
                padding: [0, 60, 0, -10],
            },
            splitLine: { show: true },
            axisLine: {
                symbol: ['none', 'arrow'],
                symbolSize: [5, 12],
                symbolOffset: [0, 10],
                lineStyle: {
                    color: '#22BF65',
                },
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#666',
                },
            },
            axisTick: {
                show: false,
            },
        },
        {
            name: '(百分比)',
            nameTextStyle: {
                color: '#666',
            },
            splitLine: { show: false },
            axisLine: {
                symbol: ['none', 'arrow'],
                symbolSize: [5, 12],
                symbolOffset: [0, 10],
                lineStyle: {
                    color: '#22BF65',
                },
            },
            axisLabel: {
                formatter: '{value}%',
                textStyle: {
                    color: '#666',
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '时间环比',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 6,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#E08044',
                },
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: ' rgba(224, 128, 68, .6)',
                            },
                            {
                                offset: 0.8,
                                color: 'rgba(255,255,255,0)',
                            },
                        ],
                        false
                    ),
                },
            },
            barWidth: 18,
            itemStyle: {
                normal: {
                    barBorderRadius: [50, 50, 0, 0],
                    color: '#E08044',
                },
            },
            data: lineData1,
        },
        {
            name: '时间同比',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 6,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#2679FB',
                },
            },
            data: lineData2,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(38, 121, 251, .6)',
                            },
                            {
                                offset: 0.8,
                                color: 'rgba(255,255,255,0)',
                            },
                        ],
                        false
                    ),
                },
            },
            barWidth: 20,
            itemStyle: {
                normal: {
                    barBorderRadius: [50, 50, 0, 0],
                    color: '#2679FB',
                },
            },
        },
        {
            name: '时间同比数据量',
            type: 'bar',
            barWidth: 20,
            itemStyle: {
                normal: {
                    barBorderRadius: [50, 50, 0, 0],
                    color: '#22BF66',
                },
            },
            data: barData1,
        },
        {
            name: '时间环比数据量',
            type: 'bar',
            barWidth: 20,
            itemStyle: {
                normal: {
                    barBorderRadius: [50, 50, 0, 0],
                    color: '#667add',
                },
            },
            data: barData2,
        },
    ],
};
