option = {
    title: {
        text: '折线示例'
    },
    tooltip: {
        trigger: 'axis',
        position: function(point, params, dom, rect, size){
            console.log(dom.clientWidth)
        },
    },
    legend: {
        data:['数据1','数据2']
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'数据1',
            type:'line',
            data:[11, 11, 15, 13, 12, 13, 10]
        },
        {
            name:'数据2',
            type:'line',
            data:[1, -2, 2, 5, 3, 2, 0]
        }
    ]
};
