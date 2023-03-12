option = {
    title: {
        text: '拥堵时序图'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['拥堵', '缓行', '畅通']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
                {
            name: '畅通',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            color:'#92D050',
            data: [900, 700, 500, 200, 600, 800, 900]
        },

        {
            name: '缓行',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            color:'#FFE669',
            data: [90, 200, 300, 300, 100, 100, 50]
        },

        {
            name: '拥堵',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            color:'#ED7D31',
            data: [10, 100, 200, 500, 300, 100, 50]
        },

    ]
};

