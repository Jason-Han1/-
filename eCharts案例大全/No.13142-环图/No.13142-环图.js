option = {
    series: [{
        type: 'pie',
        center:['50%', '50%'],
        radius: ['50%', '70%'],
        startAngle: 135,
        data:[{
            value: 500,
            name: '30天以内未发还金额',
            itemStyle:{
                normal: {
                    color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                            offset: 0,
                            color: '#588ec5'
                        }, {
                            offset: 1,
                            color: '#93bbd8'
                        }])
                }
            }
        }, {
            value: 182,
            name: '30天以上未发还金额',
            itemStyle:{
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                            offset: 0,
                            color: '#d4a26a'
                        }, {
                            offset: 1,
                            color: '#dec399'
                        }])
                }
            }
        }]
    },{
        type: 'pie',
        center:['50%', '50%'],
        radius: ['45%', '46%'],
        label: {
          show: false,
        },
        data:[{
            value: 500,
            name: '30天以内未发还金额',
             itemStyle:{
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                            offset: 0,
                            color: '#1c76ec'
                        }, {
                            offset: 1,
                            color: '#63c9f7'
                        }])
                }
            }
        }]
    }
    ]
};