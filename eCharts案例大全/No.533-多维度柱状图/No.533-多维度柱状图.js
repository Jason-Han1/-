var xData = [
    '2021-03',
    '2021-04',
    '2021-05',
    '2021-06',
    '2021-07',
    '2021-08',
    '2021-09',
    '2021-10',
    '2021-11',
    '2021-12',
];
var data = {
    bqs: [95284.5, 110640.25, 88141.5, 111738.25, 27134.25, 0, 0, 0, 0, 0],
    hbl: [15, 17, -20, 27, -75, -100, 100, 100, 100, 100],
    sqs: [83108.5, 95284.5, 110640.25, 88141.5, 111738.25, 27134.25, 0, 0, 0, 0],
    tbl: [248, 98, 66, 53, -63, -100, -100, -100, -100, -100],
    tqs: [27425, 55983.25, 53158, 73186, 74439.75, 86922.75, 107109.25, 102578.5, 126522.25, 123338.75],
};
let series = [];
if (this.showTip == 'year') {
    series = [
        {
            type: 'bar',
            name: '今年',
            yAxisIndex: 0,
            itemStyle: {
                color: '#1EF37D',
                barBorderRadius: [12, 12, 0, 0],
            },
            barWidth: 16,
            data: data.bqs,
        },
        {
            name: '同比',
            yAxisIndex: 1,
            type: 'line',
            stack: '总量',
            smooth: true,
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#973e77',
                    },
                    {
                        offset: 1,
                        color: '#462a86',
                    },
                ]),
            },
            data: data.tbl,
            symbolSize: 8,
        },
    ];
} else {
    series = [
        {
            type: 'bar',
            name: '今年',
            yAxisIndex: 0,
            itemStyle: {
                color: '#1EF37D',
                barBorderRadius: [12, 12, 0, 0],
            },
            barWidth: 16,
            data: data.bqs,
        },
        {
            type: 'bar',
            name: '去年',
            yAxisIndex: 0,
            itemStyle: {
                color: '#fee725',
                barBorderRadius: [12, 12, 0, 0],
            },
            barWidth: 16,
            data: data.tqs,
        },
        {
            name: '同比',
            yAxisIndex: 1,
            type: 'line',
            stack: '总量',
            smooth: true,
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#973e77',
                    },
                    {
                        offset: 1,
                        color: '#462a86',
                    },
                ]),
            },
            data: data.tbl,
            symbolSize: 8,
        },
        {
            name: '环比',
            yAxisIndex: 1,
            type: 'line',
            stack: '总量',
            smooth: true,
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#119cca',
                    },
                    {
                        offset: 1,
                        color: '#09399c',
                    },
                ]),
            },
            data: data.hbl,
            symbolSize: 8,
        },
    ];
}
option = {
    backgroundColor:'blurScope',
    color: ['#ff5561', '#00d0fd'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        textStyle: {
            color: '#CFE3FC',
        },
        borderWidth: 1,
        formatter: (params) => {
            let str = '';
            if (this.showTip == 'year') {
                str = `<div>
                 <div>
                   <p style="font-size: 14px;color:#1EF37D">今年${data.bqs[params[0].dataIndex]} TEU</p>
                   <p style="font-size: 14px;color:#FF5561">同比${params[1].value}%</p>
                 </div>
                 </div>`;
            } else {
                str = `<div>  
                 <div>
                   <p style="font-size: 14px;color:#1EF37D">今年${data.bqs[params[0].dataIndex]} TEU</p>
                   <p style="font-size: 14px;color:#09F3F8">环比${params[3].value}%</p>
                   <p style="font-size: 14px;color:#FF5561">同比${params[2].value}%</p>
                 </div>
                 </div>`;
            }
            return str;
        },
    },
    legend: {
        // icon: "circle",
        top: '8%',
        selectedMode: false,
        left: 'center',
        itemWidth: 16,
        itemHeight: 10,
        textStyle: {
            color: '#fff',
        },
        itemGap: 50,
    },
    grid: {
        left: '20px',
        right: '20px',
        top: '20%',
        bottom: '20px',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            axisTick: {
                show: false,
            },
            data: xData,
            axisLine: {
                lineStyle: {
                    color: '#fff',
                },
                onZero: false,
            },
            axisLabel: {
                interval: 0,
                color: '#fff',
                fontSize: 16,
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#FFF',
                },
                symbol: ['none', 'arrow'],
                symbolSize: [5, 12],
                symbolOffset: [0, 10],
            },
            axisLabel: {
                interval: 0,
                color: '#fff',
                fontSize: 16,
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(39, 57, 75, 1)',
                    width: 1,
                    type: 'solid',
                },
            },
        },
        {
            type: 'value',
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(207, 227, 252, 1)t',
                },
                symbol: ['none', 'arrow'],
                symbolSize: [5, 12],
                symbolOffset: [0, 10],
            },
            axisLabel: {
                interval: 0,
                color: function (value) {
                    if (value > 0) {
                        return '#00FCF9';
                    } else if (value < 0) {
                        return '#FF4E00';
                    } else {
                        return '#fff';
                    }
                },
                formatter: '{value} %',
                fontSize: 16,
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(39, 57, 75, 1)',
                    width: 1,
                    type: 'solid',
                },
            },
        },
    ],
    series: series,
};
