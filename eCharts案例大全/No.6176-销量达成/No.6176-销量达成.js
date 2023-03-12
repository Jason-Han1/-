option = {
    backgroundColor:'#FFFFFF' ,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#FFFFFF'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data: ['新增患者数', '销量', '指标','达成率']
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
            type: 'value',
            name: '新增患者数/销量/指标',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '达成率',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value}%'
            }
        }
    ],
    series: [
        {
            name: '新增患者数',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name: '销量',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        
        {
            name: '指标',
            type: 'bar',
            data: [2.2, 5.0, 8.0, 22.4, 24.7, 40.7, 25.6, 192.2, 58.7, 30.8, 10.0, 3.3]
        },
        {
            name: '达成率',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};
