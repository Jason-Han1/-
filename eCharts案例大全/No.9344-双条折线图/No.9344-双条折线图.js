// var xData = ['aa', 'bb'];
// var yData1 = ['Product','Coin','Ticket'];
var resultList = [{
        product: 'TQB',
        'Coin': 43.3,
        'Ticket': 85.8
    },
    {
        product: 'SC',
        'Coin': 83.1,
        'Ticket': 73.4
    },
    {
        product: 'SUPERFUN',
        'Coin': 86.4,
        'Ticket': 65.2
    }
];



option = {
    title: {
        text: '嘻嘻',
        left: '30%'
    },
    legend: {
        //图例
        data: xData,
        bottom: 'bottom'
    },
    tooltip: {},
    dataset: {
        dimensions: ['product', 'Coin', 'Ticket'],
        //数据
        source: resultList
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            tooltip: {
                show: true,
            },
            inside: false,
            textStyle: {
                fontSize: 14
            },
            interval: 0,
            color: '#666'
        },
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: '#ddd',
            }
        },

    },
    yAxis: {
        axisLine: {
            show: false,
            lineStyle: {
                color: "#333"
            },
        },
    },
    series: [{
            type: 'bar',
            barCategoryGap: '50%',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        color: '#666',
                        fontSize: 14,
                    },
                    color: '#3aa1ff',
                    opacity: 1,
                    shadowBlur: 20,
                    shadowColor: 'rgba(255, 255, 255, 0.5)'
                }
            },
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        color: '#666',
                        fontSize: 14,
                    },
                    color: '#4ecb73',
                    opacity: 1,
                    shadowBlur: 20,
                    shadowColor: 'rgba(255, 255, 255, 0.5)'
                }
            },
        },

    ]
};