option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['线上店铺', '微信', '货到付款', '线下门店', '现金', '微信2', '支付宝', '其它支付']
    },
    grid: {
        left: '4%',
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
            name: '微信',
            type: 'bar',
            stack: '线上店铺',
            data: [120, 112, 111, 144, 90, 230, 210]
        },
        {
            name: '货到付款',
            type: 'bar',
            stack: '线上店铺',
            data: [200, 220, 190, 190, 300, 100, 110]
        },
        {
            name: '现金',
            type: 'bar',
            stack: '搜索引擎',
            data: [620, 732, 701, 734, 1090, 1130, 1120]
        },
        {
            name: '微信2',
            type: 'bar',
            stack: '搜索引擎',
            data: [120, 132, 101, 134, 290, 230, 220]
        },
        {
            name: '支付宝',
            type: 'bar',
            stack: '搜索引擎',
            data: [60, 72, 71, 74, 190, 130, 110]
        },
        {
            name: '其它支付',
            type: 'bar',
            stack: '搜索引擎',
            data: [62, 82, 91, 84, 109, 110, 120]
        }
    ]
};
