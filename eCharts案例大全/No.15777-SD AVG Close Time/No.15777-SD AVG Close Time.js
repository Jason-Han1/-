var colors = ['#9ACD32', '#2F7ED8', '#9ACD32', '#2F7ED8'];

option = {
    title: {
        text: 'SD AVG Close Time',
        x: 'center',
        subtext: 'Source: Service Desk'
    },
    color: colors,

    tooltip: {
        trigger: 'axis'
    },
    grid: {
        right: '20%'
    },
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['Median CS', 'Median Non-CS', 'Mean CS'],
        top: 40,
        bottom: '20%'
    },
    xAxis: [{
        type: 'category',
        axisLabel: {
            rotate: 45,
            interval: 0

        },
        axisTick: {
            alignWithLabel: true
        },
        data: ['08-29-16', '09-05-16', '09-12-16', '09-19-16', '09-26-16', '10-03-16', '10-10-16', '10-17-16', '10-24-16', '10-31-16', '11-07-16', '11-14-16']
    }],
    yAxis: [{
        nameLocation: 'middle',
        nameGap: 40,
        type: 'value',
        name: 'Mean Close Time',
        position: 'left',
        nameRotate: 90,
        axisLabel: {
            textStyle: {
                color: '#000000'
            }
        },
        nameTextStyle: {
            color: '#000000'
        },
        axisLine: {
            lineStyle: {
                color: colors[2]
            }
        }
    }, {
        nameLocation: 'middle',
        nameGap: 20,
        type: 'value',
        name: 'Median Close Time',
        position: 'right',
        axisLabel: {
            textStyle: {
                color: '#000000'
            }
        },
        nameTextStyle: {
            color: '#000000'
        },
        axisLine: {
            lineStyle: {
                color: colors[0]
            }
        }
    }],
    series: [{
        name: 'Median CS',
        type: 'bar',
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
    }, {
        name: 'Median Non-CS',
        type: 'bar',
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
    }, {
        name: 'Mean CS',
        type: 'line',
        yAxisIndex: 1,
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    }, {
        name: 'Mean Non-CS',
        type: 'line',
        yAxisIndex: 1,
        data: [3.2, 4.2, 3.1, 6.5, 3.3, 4.2, 18.3, 18.4, 11.0, 20.5, 22.0, 16.2]
    }]
};