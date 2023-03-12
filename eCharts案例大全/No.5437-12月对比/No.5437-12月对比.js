option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    color: ['#96bfff','#e7bcf3','#9d96f5','#67e0e3','#ff9f7f','#32c5e9','#f46f8f' ],
    legend: {
        data: ['工作底稿', '版本一']
    },
    barCategoryGap: '50%',
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '工作底稿',
            type: 'bar',
            data: [320, 332, 301, 334,320, 332, 301, 334,320, 332, 301, 334]
        },
        {
            name: '版本一',
            type: 'bar',
            stack: '广告',
            data: [120, 132, 101, 134,120, 132, 101, 134,120, 132, 101, 134,]
        }
        
    ]
};
