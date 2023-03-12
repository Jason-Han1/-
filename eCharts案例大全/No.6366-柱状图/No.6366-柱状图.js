option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'none',
        },
        formatter: function (params) {
        }
    },
    color: ['rgb(255, 161, 0)'],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        triggerEvent: true,
        axisTick: {
          show: false  
        },
        axisLine: {
            show: false
        },
        axisLabel: {
          color: '#555'
        },
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
    },
    series: [
        {
            name: '命中规则',
            type: 'bar',
            data: [20, 23, 29, 10, 89, 70, 34, 67, 100, 45, 89, 23, 56, 99, 34, 98, 3, 1, 1000, 34],
            barWidth: 10,
            barMinHeight: 10,
            barCategoryGap: 200,
            itemStyle: {
                normal: {
                    color: 'rgb(255, 161, 0)'
                },
                emphasis: {
                    // backgroundColor: 'rgb(255, 161, 0)',
                    color: 'rgb(255, 161, 0)',
                    borderColor: 'rgb(255, 161, 0)',
                    borderWidth: 4
                }
            }
        }
    ]
};
