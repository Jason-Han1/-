
option = {
    backgroundColor: '#20b7db',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['占有率']
    },
    
    series: [{
        
        name: '饼图一',
        type: 'pie',
        radius: ['60%', '70%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        
        data: [{
            value: 20,
            name: '占有率',
            itemStyle:{
            normal:{
                color:'#fff'
            }
        },
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 50,
                        color:'#fff',
                    },
                    fontWeight: 'bolder'
                }
            }
        }, {
            value: 80,
            name: '占位',
            
            
            label: {
                normal: {
                    formatter: '\n完成率',
                    textStyle: {
                        color: '#fff',
                        fontSize: 20
                    }
                }
            },
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#10abcf'
                },
                emphasis: {
                    color: '#10abcf'
                }
            },
            hoverAnimation: false
        }]
    }]
};