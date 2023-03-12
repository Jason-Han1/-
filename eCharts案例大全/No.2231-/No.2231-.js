var piedata = [{
        name: '水路运输',
        value: 9834899.5
    },
    {
        name: '铁路运输',
        value: 35975.8
    },
    {
        name: '公路运输',
        value: 3103988.4
    },
    {
        name: '航空运输',
        value: 2478583.1
    },
    {
        name: '邮件运输',
        value: 118873.6
    },
    {
        name: '其它运输',
        value: 51835.6
    },
]

option = {
    tooltip: {
        trigger: 'axis'
    },
    grid: [{
        bottom: '15%%',
        top: '15%',
        left: '15%',
        right: '40%',
    }],
    toolbox: {
        feature: {
            saveAsImage: {show: true}
        }
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '降水量',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            type: 'pie',
            radius: '55%',
            data: piedata,
            bottom: '0%',
            top: '15%',
            left: '65%',
            right: '0',
        }
    ]
};