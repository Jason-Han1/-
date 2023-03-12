option ={
    color: ['#07AFF6','#ED8B04','#959595','#F5DB48','#48F5A6'],
 
    legend: {
              show: false,
        orient: 'vertical',
        left: 10,
        data: ['新购', '合格在库', '待见', '不合格在库', '其他']
    },
    series: [
        {
            name: '完成',
            type: 'pie',
            radius: ['60%', '78%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: false,
                    fontSize: '85',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: '新购'},
                {value: 310, name: '合格在库'},
                {value: 234, name: '待见'},
                {value: 135, name: '不合格在库'},
                {value: 1548, name: '其他'}    
            ]
        }
    ]
}
