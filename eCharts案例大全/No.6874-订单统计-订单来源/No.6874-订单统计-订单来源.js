option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['线下门店', '线上店铺']
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
            data: ['12月01', '12月02', '12月03', '12月04', '12月05', '12月06', '12月07']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '线下门店',
            type: 'bar',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '线上店铺',
            type: 'bar',
            data: [120, 132, 101, 134, 90, 230, 210]
        }
    ]
};
