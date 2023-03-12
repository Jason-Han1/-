option = {
    color: ['rgba(252,198,198,0.5)','rgba(189,193,207,0.5)','rgba(183,235,230,0.5)','rgba(255,222,198,0.5)','rgba(200,215,255,0.5)'],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['颜色1', '颜色2','颜色3', '颜色4','颜色5', '折线1','折线2']
    },
    xAxis: [
        {
            type: 'category',
            data: ['2015-01-03', '2015-02-03', '2015-03-03', '2015-04-03', '2015-05-03', '2015-06-03', '2015-07-03', '2015-08-03', '2015-09-03', '2015-10-03', '2015-11-03', '2015-12-03'],
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '累计收益（%）',
            axisLabel: {
                formatter: '{value} %'
            }
        },
        {
            show: false,
            type: 'value',
            name: '颜色'
        },
    ],
    series: [
        {
            name: '颜色1',
            type: 'bar',
            barGap: 0,
            barCategoryGap: 0,
            barWidth: '100.2%',
            emphasis: { // 将高亮取消，此处可以循环遍历数组，将颜色进行配置
                itemStyle: {
                    color: 'rgba(252,198,198,0.5)'
                }
            },
            data: [20,20,20,null,null,null,null,null,null,null,null,null] // 取折线图的最大值
        },
        {
            name: '颜色2',
            type: 'bar',
            barGap: 0,
            barWidth: '100.2%',
            barCategoryGap: 0,
            emphasis: {
                itemStyle: {
                    color: 'rgba(189,193,207,0.5)'
                }
            },
            data: [null,null,20,20,20,null,null,null,null,null,null,null]
        },
        {
            name: '颜色3',
            type: 'bar',
            barGap: 0,
            barCategoryGap: 0,
            barWidth: '100.2%',
            emphasis: {
                itemStyle: {
                    color: 'rgba(183,235,230,0.5)'
                }
            },
            data: [null,null,null,null,20,20,20,20,null,null,null,null]
        },
        {
            name: '颜色4',
            type: 'bar',
            barGap: 0,
            barWidth: '100.2%',
            barCategoryGap: 0,
            emphasis: {
                itemStyle: {
                    color: 'rgba(255,222,198,0.5)'
                }
            },
            data: [null,null,null,null,null,null,null,20,20,20,null,null]
        },
        {
            name: '颜色5',
            type: 'bar',
            barGap: 0,
            barCategoryGap: 0,
            barWidth: '100.2%',
            emphasis: {
                itemStyle: {
                    color: 'rgba(200,215,255,0.5)'
                }
            },
            data: [null,null,null,null,null,null,null,null,null,20,20,20]
        },
        {
            name: '折线1',
            type: 'line',
            yAxisIndex: 1,
            data: [12,10,15,18,20,15,16,8,2,10,9,12],
            lineStyle: {
                color: '#1d76f1'
            },
            itemStyle: {
                color: '#1d76f1'
            }
        },
        {
            name: '折线2',
            type: 'line',
            yAxisIndex: 1,
            data: [2,4,6,8,5,12,14,16,18,9,10,16],
            lineStyle: {
                color: '#ffb984'
            },
            itemStyle: {
                color: '#ffb984'
            }
        }
    ]
};