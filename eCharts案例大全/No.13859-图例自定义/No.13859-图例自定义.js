app.title = '堆叠条形图';
let dict = {
    '低危': 'xxxxxxxxxxxxx',
    '中危': 'yyyyyyyyyyyyyyyyy'
}
option = {
    legend: {
        data: ['低危', '中危'],
        formatter: (params) => {
            return dict[params]
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['高危', '低危', '中危']
    },
    series: [
        {
            name: '中危',
            type: 'bar',
            stack: 'all',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [0, 0, 320]
        },
        {
            name: '低危',
            type: 'bar',
            stack: 'all',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [0, 230, 0]
        },
        {
            name: '高危',
            type: 'bar',
            stack: 'all',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [210, 0, 0]
        }
    ]
};