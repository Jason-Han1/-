var max_value = [102, 88, 68, 120, 130, 87, 210];
var min_value = [32, 32, 22, 54, 64, 27, 100];
var median_value = [];
var diff_value = [];
for (var i = 0; i < max_value.length; i++) {
    median_value.push((max_value[i] + min_value[i]) / 2);
    diff_value.push(max_value[i] - min_value[i]);
}

option = {
    title: {
        text: '区域区间和线'
    },
    tooltip: {
        trigger: 'axis',
        // formatter: '{b}<br/>{a2}: {c2}<br/>{a3}:  {c3}<br/>{a0}:  {c0}<br/>{a1}:  {c1} '
    },
    legend: {
        data: ['最小值', '中位数', '最大值', '差值']
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
            name: '最小值',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            stack: '最大值',
            data: min_value,
            itemStyle: {
                normal: {
                    color: 'rgb(219,50,51)',
                    borderColor: 'rgba(219,50,51,0.2)',
                    borderWidth: 12
                }
            },
        },
        {
            name: '差值',
            type: 'line',
            smooth: true,
            showSymbol: false,
            stack: '最大值',
            data: diff_value,
            lineStyle: {
                normal: {
                    width: 0
                }
            },
            areaStyle: { // 填充区域
                color: '#d9eafa'
            }
        },
        {
            name: '最大值',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            data: max_value,
            itemStyle: {
                normal: {
                    color: 'rgb(0,136,212)',
                    borderColor: 'rgba(0,136,212,0.2)',
                    borderWidth: 12

                }
            },
        },
        {
            name: '中位数',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            data: median_value,
            itemStyle: {
                normal: {
                    color: 'rgb(137,189,27)',
                    borderColor: 'rgba(137,189,2,0.27)',
                    borderWidth: 12
                }
            },
        },

    ]
};