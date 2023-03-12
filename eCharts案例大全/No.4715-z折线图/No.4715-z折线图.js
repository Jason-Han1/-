// 测试数据
var data_date = ['2019-12', '2020-01', '2020-02', '2020-03', '2020-04','2020-05','2020-06','2020-07','2020-08','2020-09','2020-10','2020-11']; // 日期
var data_blod = [34, 23, 14, 32, 14,34, 23, 14, 32, 14,23,34]; // 血小板计数
option = {
    title: {
        show:false
    },
    grid: {
        left: '5%',
        right: '10%',
        top: '20%',
        bottom: '15%',
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            return params.name + '：' + params.value + 
            '<br/>2019.' + params.name.substring(5,7) + 
            '：' + params.value +
            '<br/>同比降低：'+params.value
        }
    },
    legend: {
        show: false,
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            color: '#ACCFFF'
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#344B83'
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#344B83'
            }
        },
        data: data_date
    }],
    yAxis: [{
            type: 'value',
            name: '',
            min: 0.0,
            max: 50.0,
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#ACCFFF'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#344B83'
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#344B83'
                }
            }
        },

    ],
    series: [
        {
            name: '血小板计数',
            type: 'line',
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
                normal: {
                    color: "#EBC648",
                    lineStyle: {
                        color: "#EBC648",
                        width: 3
                    },
                }
            },
            data: data_blod
        },

    ]
};