option = {
     title: {
        text: '一周网点领解现统计',
        left: 'center',
        top: 2,
        textStyle: {
          fontSize: 20
        },
      },
    color:['#5b9bd5','#ed7d31','#a9d18e','#ffc000'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    legend: {
        left:'center',
        bottom:'2%',
        data: ['网点领现', '网点解现']
    },
    xAxis: [
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '网点领现',
            type: 'bar',
            data: [10, 52, 200, 334, 390, 330, 220]
        },
         {
            name: '网点解现',
            type: 'bar',
            data: [10, 52, 200, 334, 390, 330, 220]
        }
    ]
};
