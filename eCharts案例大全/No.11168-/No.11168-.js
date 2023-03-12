option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },

    legend: {
        data: ['新报', '续费'],
        left: '45%',
        bottom: 15,
        show: "true"
    },
    xAxis: [{
        type: 'category',
        data: this.monthList,
        axisLine: {
            lineStyle: {
                color: "#999"
            }
        }
    }],
    yAxis: [{
        type: 'value',
        splitNumber: 4,
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#DDD'
            }
        },
        axisLine: {
            show: false,

        }
    }],
    series: [{
            name: '新报',
            type: 'bar',
            data: [88,36,52,89,100,120,66],
            itemStyle: {
                normal: {
                    color: '#96E0B3',
                    barBorderRadius: [100, 100, 0, 0]
                }
            },
            barWidth: 25,
        },
        {
            name: '续费',
            type: 'bar',
            data: [126.23,88,12,5,23,256,124],
            itemStyle: {
                normal: {
                    color: '#F9A589',
                    barBorderRadius: [100, 100, 0, 0]
                }
            },
            barWidth: 25,
        }
    ]
};