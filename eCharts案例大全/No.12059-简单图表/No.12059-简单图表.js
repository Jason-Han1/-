option = {
    tooltip: {
        show: true, // 是否显示
        trigger: 'axis', // 触发类型，默认数据触发，见下图，可选为：'item' | 'axis'
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        show:false
        
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        color: ['#c8c8c8'],
        symbolSize: 12 ,
         // 折线图圆点
        label: {
            normal: {
                show: true,
                //position: 'bottom', // 文字位置
                // 显示的文字
                formatter: '{c}',
                textStyle: {
                    color: '#000' // 文字颜色
                }
            }
        },
    }]
};
