option = {
      backgroundColor: '#0e1c47',
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true,
                ///显示最大值、最小值
                markPoint: {
                    symbolSize:0,
                            label: {
                                show: true,
                                position: 'top',
                                color:'auto',
                                fontSize :50,
                            },
                    data: [{
                            name: '最大值',
                            type: 'min'
                        },
                        {
                            name: '最小值',
                            type: 'max'
                        }
 
                    ]
                }
            }]
        };