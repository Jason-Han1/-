option = {
    backgroundColor: '#ffffff',
    tooltip: {
        show: false
    },
    xAxis: [{
        type: 'category',
        data: [ '202004', '202005', '202006', '202007', '202008', '202009', '202010','202011','202012','202101','202102','202103'],
        axisLabel: {
            margin: 10,
            color: '#a4a4a4'
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }],
    yAxis: [{
        axisLabel: {
            color: '#a4a4a4',
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        type: 'bar',
        data: [40, 125, 65, 39, 20, 31, 9, 1,2,8,6,8],
        barWidth: '20px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(102,159,239,1)'
                }, {
                    offset: 1,
                    color: 'rgba(170,202,246,1)' 
                }], false)
            }
        },
        label: {
            normal: {
                show: true,
                position: 'top'
                
            }
        }
    }]
};