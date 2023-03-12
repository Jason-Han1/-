option = {
    title: {
        text: '月度考勤统计分析',
        subtext: '全勤/非全勤人数占比',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['非全勤', '全勤']
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [{
                value: 2,
                name: '非全勤'
            },{
                value: 12,
                name: '全勤'
            }
            
        ]
    }]
};