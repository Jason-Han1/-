let data = {
    "chart": [{
            month: "1月",
            value: 138,
            ratio: 14.89
        },

        {
            month: "2月",
            value: 114,
            ratio: 79.49
        },

        {
            month: "3月",
            value: 714,
            ratio: 75.8
        },

        {
            month: "4月",
            value: 442,
            ratio: 19.8
        },

        {
            month: "5月",
            value: 622,
            ratio: 44.5
        },


        {
            month: "6月",
            value: 528,
            ratio: 87.3
        }

    ]
}


let xAxisMonth = [],
    barData = [],
    lineData = [];
for (let i = 0; i < data.chart.length; i++) {
    xAxisMonth.push(data.chart[i].month);
    barData.push({
        "name": xAxisMonth[i],
        "value": data.chart[i].value
    });
    lineData.push({
        "name": xAxisMonth[i],
        "value": data.chart[i].ratio
    });
}

option = {
    backgroundColor: "#020d22",
    title: '',
    grid: {
        top: '24%',
        left: '7%',
        bottom: '6%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0]["data"].name + "<br/>" + '训练人次: ' + params[1]["data"].value + "<br/>" + '合格率: ' + params[0]["data"].value;
        }
    },
    xAxis: [
        {
            type: 'category',
            show: true,
            data: ['3月', '4月', '5月', '6月', '7月', '8月'],
            axisLabel: {
                textStyle: {
                    color: '#b6b5ab'
                }
            }
        },
        {
            type: 'category',
            position: "bottom",
            // data: xAxisMonth,
            boundaryGap: true,
            // offset: 40,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#b6b5ab'
                }
            }
        }

    ],
    yAxis: [{
        show: true,
        splitLine: {
            show: false,
            lineStyle: {
                color: "rgba(255,255,255,0.2)"
            }
        },
        axisLine: {
            show: true
        },
        axisLabel: {
            show: true,
            color: '#b6b5ab'
        }
    }],
    color: ['#A7F5F9'],
    series: [{
            name: '训练人次',
            type: 'pictorialBar',
            xAxisIndex: 1,
            barWidth: 10,
            symbol: 'path://d="M150 130 L130 50 L170 50 Z"',
            itemStyle: {
                emphasis: {
                    opacity: 1
                }
            },
            data: barData,
        },
        {
            symbol: 'circle',
            symbolSize: 16,
            symbolOffset: [0, '-50%'],
            symbolPosition: 'end',
            name: "完成率",
            type: "pictorialBar",
            xAxisIndex: 0,
            data: barData
        }
    ]
}