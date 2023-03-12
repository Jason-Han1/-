this.dateList = ['2020-01-01','2020-01-22','2020-05-21','2020-11-01','2020-11-11'];
this.numList = [12,15,17,20];

option = {
    backgroundColor: '#fff',
    grid: {
        top: '25%',
        right: '5%',
        left: '10%',
        bottom: '15%'
    },
    xAxis: {
        type: 'category',
        data: this.dateList,
        color: '#565656',
        axisLabel: {
            interval: 0,
            color: '#565656',
            textStyle: {
                fontSize: 10
            },
            rich: {
                a: {
                    align: 'right',
                    fontSize: 10
                }
            },
            formatter: (params, index) => {
                if (index === 0) {
                    return this.dateList[index]
                } else if (index === this.dateList.length - 1) {
                    return '{a|' + this.dateList[index] + '             }'
                }
                return ''
            },
        },
        axisLine: {
            lineStyle: {
                color: '#eee',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        offset: 10
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            // formatter: '{value}',
            color: '#929292',
            textStyle: {
                fontSize: 10
            },
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(107,107,107,0)',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#eee',
            }
        },
        splitNumber: 3
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['市盈率(TTM)']
    },
    series: [{
        name: '市盈率(TTM)',
        data: this.numList,
        type: 'line',
        color: '#ABB8D7',
        symbol: 'none'
    }]
}