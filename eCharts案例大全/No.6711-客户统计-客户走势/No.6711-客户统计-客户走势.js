option = {
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
        data: ['新增客户数', '成交客户数', '复购客户数']
    },
    grid: {
        left: '4%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['12月01', '12月02', '12月03', '12月04', '12月05', '12月06', '12月07', '12月08', '12月09', '12月10', '12月11', '12月12']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
            name: '新增客户数',
            type: 'line',
            areaStyle: {},
            data: [200, 320, 201, 304, 210, 220, 251, 221, 214, 310, 221, 215]
        },
        {
            name: '成交客户数',
            type: 'line',
            areaStyle: {},
            data: [190, 220, 110, 240, 200, 180, 180, 171, 134, 130, 123, 119]
        },
        {
            name: '复购客户数',
            type: 'line',
            areaStyle: {},
            data: [19, 22, 11, 24, 20, 10, 20, 11, 34, 30, 23, 19]
        }
    ]
};



myChart.setOption(option);

function randomData() {
    return Math.round(Math.random() * 1000);
}