option = option = {
    color: [{
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0, color: '#4bf3f7' 
        }, {
             offset: 0.5, color: '#4bf3f7' 
        },{
            offset: 1, color: '#247196' 
        }],
        globalCoord: false 
    },'rgba(0,0,0,0)',],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['完成数', '未完成数']
    },
    series: [
        {
            name: '完成',
            type: 'pie',
            radius: ['80%', '95%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [400,300]
        }
    ]
}
