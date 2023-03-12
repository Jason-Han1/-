var data = {
    grade: ['等级1', '等级2', '等级3', '等级4', '等级5', '等级6', '等级7', '等级8', '等级9', '等级10'],
    cost: [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0],
    totalCost: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
};
var option = {
    backgroundColor: '#fff',
    grid: {
        //  height: '320',
        left: '10%',
        right: '10%',
        containLabel: true
    },
    xAxis: {
        show: false,
    },
    yAxis: {
        inverse: true,
        type: 'category',
        axisLabel: {
            show: true,
            color: '#666',
            fontSize: 14,
            padding: [0, 20, 0, 0]
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        data: data.grade,

    },
    series: [{
        type: 'bar',
        barGap: '-100%',
        barWidth: '7',
        z: 1,
        data: data.totalCost,
        label: {
            normal: {
                show: true,
                position: 'right',
                color: '#666',
                fontSize: 14,
                offset: [30, 0],
                formatter: function(param) {
                    return data.cost[param.dataIndex] * 100 + '%';
                },
            }
        },
        itemStyle: {
            emphasis: {
                color: 'eee'
            },
            normal: {
                color: '#eee',

            }

        },


    }, {
        type: 'bar',
        barWidth: '7',
        z: 2,
        data: data.cost,
        itemStyle: {
            normal: {
                barBorderRadius: 16,
                color: '#68b837'
            },
        },
        max: 1

    }]
}