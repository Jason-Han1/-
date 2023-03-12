option = {
    title: {
        text: '近六月维修情况统计',
        left: 'center'
    },
    color: ['#3A85D3','#BBDFFF','#F4BB17'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '80px',
        containLabel: true
    },
    legend: {
        data: ['维修次数', '配件次数','维修费用'],
        top: '30px',
        right: '80px'
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        },
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '维修次数',
            type: 'bar',
            itemStyle: {
              barBorderRadius: [50,50,0,0]  
            },
            barWidth: '60',
            data: [10, 52, 200, 330, 220]
        },
        {
            name: '配件次数',
            type: 'bar',
            itemStyle: {
              barBorderRadius: [50,50,0,0]  
            },
            barWidth: '60',
            data: [10, 52, 200, 330, 220]
        },
        {
            name: '维修费用',
            type: 'line',
            yAxisIndex: 1,
            data: [1000, 500, 2000, 3000, 2000]
        }
    ]
};
