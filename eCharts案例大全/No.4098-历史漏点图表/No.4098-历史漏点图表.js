let chartData = {
        mon_date: ["2020-03", "2020-04", "2020-05", "2020-06", "2020-07", "2020-08", "2020-09", "2020-10", "2020-11","2020-12","2021-01","2021-02"],  
    mon_end: [0, 0, 0, -2, -2, -1, 0, 0, -3, 0, 0, 0],
    mon_start: [1, 0, 0, 2, 0, 1, 0, 0, 0, 1, 1, 0],
    mon_stay: [5, 5, 5, 5, 3, 3, 3, 3, 0, 1, 2, 2], 
}
option = {
            tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
        },
        legend: {
        data: ['本月未修复', '本月修复', '本月新增']
        },
        grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
        },
        yAxis: [
        {
        type: 'value'
        }
        ],
        xAxis: [
        {
        type: 'category',
        axisTick: {
        show: false
        },
        data: chartData.mon_date
        // [
        //         // "2019-07", "2019-08", "2019-09", "2019-10", "2019-11", "2019-12", "2020-01", "2020-02", 
        //         // "2020-03","2020-04","2020-05","2020-06","2020-07"
        //     ]
        }
        ],
        series: [
        {
        name: '本月未修复',
        type: 'line',
        areaStyle: {},
        smooth: true,
        label: {
        show: true,
        // position: 'inside'
        },
        data: chartData.mon_stay
        },
        {
        name: '本月新增',
        type: 'bar',
        stack: '总量',
        label: {
        show: true
        },
        data: chartData.mon_start
        },
        { 
        name: '本月修复',
        type: 'bar',
        stack: '总量',
        label: {
        show: true,
        position: 'inside'
        },
        data: chartData.mon_end
        }
        ]


};