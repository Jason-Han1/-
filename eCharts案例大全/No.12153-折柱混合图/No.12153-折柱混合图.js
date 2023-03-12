let x_data = ['2时', '4时', '6时', '8时', '10时', '12时', '14时', '16时', '18时', '20时', '22时', '24时'];
let a_data = ["60", "72", "59", "70", "71", "89", "64", "62", "71", "46", "39", "40"]; //a线图数据
let b_data = ["45", "67", "34", "68", "23", "45", "78", "34", "79", "34", "27", "89"]; //b线图数据
let base_data = ["45", "67", "34", "68", "23", "45", "64", "34", "71", "34", "27", "40"]; //柱图隐藏数据
let delta_data = ['15', '5', '25', '2', '48', '44', '14', '28', '8', '12', '12', '49']; //a-b柱图显示数据



option = {
    backgroundColor: "#fff",
    color: "#FF9F7F",
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(67,100,247,0.8)',
        //padding: [10, 20],
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: 'rgba(67,100,247,0.08)'
            }
        },
        formatter: function(params) {
            let showlabel = params[0].seriesName + ':' + params[0].value + '<br />' +
                params[1].seriesName + ':' + params[1].value + '<br />' +
                params[3].seriesName + ':' + params[3].value;
            return showlabel;
        },
    },
    legend: {
        show: false,
        data: ''
    },
    xAxis: [{
        axisLine: {
            lineStyle: {
                color: '#666'
            }
        },
        type: 'category',
        axisTick: {
            show: false,
            alignWithLabel: true
        },
        data: x_data
    }],
    yAxis: [

        {
            type: 'value',
            name: '票数',
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#666'
                }
            },
            position: 'left',
            axisLabel: {
                formatter: '{value} '
            }
        },

    ],
    series: [{
            name: '票数',
            type: 'line',
            smooth: true,
            symbol: 'emptyCircle',
            symbolSize: 2,
            yAxisIndex: 0,
            itemStyle: {
                color: 'rgb(214,127,143)',
            },
            data: a_data
        },

        {
            name: '分票数',
            type: 'line',
            smooth: true,
            symbol: 'emptyCircle',
            symbolSize: 2,
            yAxisIndex: 0,
            itemStyle: {
                color: 'rgb(214,127,143)',
            },
            data: b_data
        },
        {
            name: '辅助',
            type: 'bar',
            barWidth: 10,
            yAxisIndex: 0,
            stack: '总人数',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: base_data,
        },
        {
            name: '差值',
            type: 'bar',
            stack: '总人数',
            yAxisIndex: 0,
            barWidth: 10,
            itemStyle: {
                color: 'rgb(86,135,196)',
            },
            label: {
                normal: {
                    show: false,
                    position: 'top'
                }
            },
            data: delta_data,
        }
    ]
};