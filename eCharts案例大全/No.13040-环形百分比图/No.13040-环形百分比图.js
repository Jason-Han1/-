option = {
    series: [{
        color:["#00F5FF","#DCDCDC"],
        name: '访问来源',
        type: 'pie',
        radius: ['60%', '70%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: true,
                position: 'center'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: 75,
                name: '75%',
                label: {
                    normal: {
                        textStyle: {
                            fontSize: '60',
                            fontWeight: 'bold'
                        }
                    }
                },
            },
            {
                value: 25,
                name: '搜索引擎占比',
                label: {
                    normal: {
                         textStyle: {
                            fontSize: '20',
                            color:'#999',
                            fontWeight: 'bold'
                        },
                        padding: [150, 0, 0, 0]
                    }
                },
            }
        ]
    }]
};