app.title = '折柱混合';

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    color: ['#9199fa', '#72b2ee', '#eb6877'],
    legend: {
        data:['销售商品提供劳动收到的现金','营业收入','劳动收到的现金/营业收入']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisPointer: {
                type: 'shadow'
            },
            axisLine: {
                lineStyle: {
                    color: '#999'
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '金额（万元）',
            min: 0,
            max: 250,
            interval: 50,
            axisLine: {
                lineStyle: {
                    color: '#999'
                }
            }
        },
        {
            type: 'value',
            name: '',
            min: 0,
            max: 100,
            interval: 10,
            axisLabel: {
                formatter: '{value}%'
            },
            axisLine: {
                lineStyle: {
                    color: '#999'
                }
            }
        }
    ],
    series: [
        {
            name:'销售商品提供劳动收到的现金',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name:'营业收入',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name:'劳动收到的现金/营业收入',
            type:'line',
            yAxisIndex: 1,
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};
