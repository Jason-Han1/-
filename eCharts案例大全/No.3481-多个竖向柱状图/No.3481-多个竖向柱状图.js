option = {
    legend: {
        borderRadius: 5,
icon: "circle",
itemGap: 20,
itemHeight: 10,
itemWidth: 10,
left: 0,
orient: "vertical",
padding: 10,
top: 20,
width: '300px',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
    },
    xAxis: [
        {type: 'category', gridIndex: 0,data:['周一','周二']},
        {type: 'category', gridIndex: 1,data:['周一','周二']}
    ],
    yAxis: [
        {gridIndex: 0},
        {gridIndex: 1}
    ],
    grid: [
        {left: '55%'},
        {right: '55%'}
    ],
    series: [
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1,data: [120, 200],name:'互动'},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1,data: [320, 300],name:'内容'},
        {type: 'bar', xAxisIndex: 0, yAxisIndex: 0,data: [320, 300],name:'互动'},
        {type: 'bar', xAxisIndex: 0, yAxisIndex: 0,data: [320, 300],name:'内容'},
    ]
};
