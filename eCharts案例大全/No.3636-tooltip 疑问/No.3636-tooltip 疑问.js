option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    tooltip:{
        trigger: 'item',
    },
    yAxis: [
        {
         type: 'value',
         scale: true
        },
        {
         show: false
        }
    ],
    series: [
        {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
        },
        {
        data: [ [0, 0],],
        tooltip:{
            triggerOn: 'click',  // 想让点的标注是点击展示的，线的标注hover 展示
            formatter: function() {
                return 'asdasd'
            }
        },
        yAxisIndex: 1,
        type: 'scatter',
        symbolOffset: [0, 0]
    }]
};