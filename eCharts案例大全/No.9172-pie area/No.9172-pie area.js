option = {
    backgroundColor: '#102C60',
    color: ['#213B7A', '#54FEFE', '#0097EE', '#3D4969', '#35CEBA'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [{
            name: '行业获得融资比例概览',
            type: 'pie',
            radius: ['18%', '70%'],
            roseType: 'area',
            label: {
                normal: {
                    show: true,
                    formatter: '{b|{b}}\n{hr|}\n{d|占比{d}%}',
                    rich: {
                        b: {
                            fontSize: 14,
                            color: 'rgba(255,255,255,0.8)',
                            align: 'center',
                            padding: 6
                        },
                        hr: {
                            borderColor: '#0097EE',
                            width: '100%',
                            borderWidth: 1,
                            height: 0
                        },
                        d: {
                            fontSize: 14,
                            color: '#fff',
                            align: 'center',
                            padding: 6,
                        },
                    },
                    position: 'outside'
                },
                emphasis: {
                    show: true
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 1,
                    length2: 40,
                    lineStyle: {
                        color: '#0097EE',
                        width: 1
                    },
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                    value: 24,
                    name: '公交'
                },
                {
                    value: 28,
                    name: '地铁'
                },
                
            ]
        },
        // 边框的设置
       
    ]
};