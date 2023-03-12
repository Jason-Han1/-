option = {
    title:{
        text:'注销率'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 50,
        top:30,
        data: ['注销率']
    },
    series: [{
        name: '注销率',
        type: 'pie',
        radius: ['60%', '70%'],
        color:'#FF4500',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 888,
            name: '注销事项数',
            
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 50
                    }
                }
            }
        }, {
            value: 8005,
            name: '其他事项数',
            label: {
                normal: {
                    formatter: '\n注销率',
                    textStyle: {
                        color: '#555',
                        fontSize: 20
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                },
                emphasis: {
                    color: '#aaa'
                }
            },
        }]
    }]
};