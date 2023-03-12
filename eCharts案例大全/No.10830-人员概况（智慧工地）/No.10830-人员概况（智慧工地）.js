option = {
    color: ['#2e73ff', '#4b9ef0'],
    legend: {
        data: [
                {
                    name: '在岗人数',
                    icon: 'circle'
                },
                {
                    name: '进场人数',
                    icon: 'circle'
                }
            ],
        top: 26,
        right: 10,
        textStyle: {
            color: '#555',
            fontSize: 14
        },
        itemGap: 34,
        itemWidth: 10,
        itemHeight: 10
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: '#fff',
        padding: [0, 0, 0, 0],
        textStyle: {
            color: '#333'
        },
        axisPointer: {
            type: 'line',
            animation: true,
            lineStyle: {
                color: 'transparent'
            }
        },
        extraCssText: 'box-shadow: 0px 0px 10px -4px rgba(3, 3, 3, .4)',
        formatter: (params, ticket, callback) => {
            let htmls = '',
                xaxisName = '';
            if (params.length > 0) {
                xaxisName = params[0].axisValue;
                htmls += '<div style="font-size:16px;height:32px;color:#0069FF;border-radius:4px;line-height:36px;padding-left:15px;text-align: left;">' + xaxisName + '</div><div>';
                for (let j = 0; j < params.length; j++) {
                    htmls += '<p style="font-size:14px;padding:4px 23px 6px 15px;color:#333;text-align: left;">' + params[j].seriesName + ' : ' + params[j].data + '%</p>';
                }
                htmls += '</div>';
                return htmls;
            }
        }
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#C0C0C5'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            fontSize: 13,
            color: '#5F5F6B'
        },
        data: ['1月', '2月', '3月', '4月', '5月','6月']
    },
    yAxis: {
        name: '近6个月',
        type: 'value',
        nameRotate: 1,
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#C0C0C5'
            }
        },
        axisTick: {
            show: true
        },
        axisLabel: {
            fontSize: 13,
            color: '#5F5F6B'
        }
    },
    series: [
        {
        name: '在岗人数',
        type: 'bar',
        barWidth: 30,
        barGap: 0,
        data: ['200', '300', '300', '200', '200', '300']
        },
        {
        name: '进场人数',
        type: 'bar',
        barWidth: 30,
        barGap: 0,
        data: ['300', '400', '300', '500', '300', '300']
        }
    ]
};