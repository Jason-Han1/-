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
        data: ['采购金额', '撤销金额', '实际采购金额']
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
            name: '采购金额',
            type: 'line',
            areaStyle: {},
            data: [250, 320, 270, 300, 280, 250, 250, 280, 260, 310, 220, 250]
        },
        {
            name: '实际采购金额',
            type: 'line',
            areaStyle: {},
            data: [190, 220, 150, 140, 200, 180, 180, 170, 130, 130, 120, 110]
        },
        {
            name: '撤销金额',
            type: 'line',
            areaStyle: {},
            data: [10, 100, 90, 60, 10, 40, 70, 50, 80, 80, 80, 40]
        }
    ]
};



myChart.setOption(option);

function randomData() {
    return Math.round(Math.random() * 1000);
}