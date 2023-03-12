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
    legend: {
        icon: 'circle',
        data: ['采集', '在办办结', '办结', '办结率'],
        textStyle: {
            color: ['#00BAFF', '#5FFF88', '#FFE763', '#FD6768']
        }
    },
    xAxis: [

        {
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: 24
                }
            },
            axisTick: { //y轴刻度线
                show: false
            },
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [

        {
            "axisTick": { //y轴刻度线
                "show": false
            },
            type: 'value',
            interval: 50,
            splitLine: {
                show: false
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: "#fff",
                    fontSize: 24
                }
            },

        },
        {
            type: 'value',
            show: false,
        }
    ],
    series: [{
            name: '采集',
            type: 'bar',
            data: [200.0, 4.9, 7.0, 230.2, 25.6, 76.7]
        },
        {
            name: '在办办结',
            type: 'bar',
            data: [200.6, 5.9, 90.0, 26.4, 280.7, 70.7]
        },
        {
            name: '办结',
            type: 'bar',
            data: [200.6, 5.9, 9.0, 260.4, 28.7, 500.4]
        },
        {
            name: '办结率',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 30.3, 4.5, 60.3, 100.2]
        }
    ],
    color: ['#00BAFF', '#5FFF88', '#FFE763', '#FD6768']
};