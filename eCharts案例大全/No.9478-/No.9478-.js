let data = [
    {
        type:'safe',
        all:12,
        complete:10
    },{
        type:'quilty',
        all:12,
        complete:7
    }
    ];
     let complete = (data[0].complete/data[0].all).toFixed(2)*100;
option = {
    backgroundColor: '#000',
    series: [{
            name: '遥感解译信息',
            type: 'pie',
            radius: ['40%', '50%'],
            center: ['50%', '50%'],
            startAngle: 225,
            color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#13ace8'
            }, {
                offset: 1,
                color: '#0167e8'
            }]), "transparent"],
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                borderColor: '#029aff'
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: complete-20,
                    name: '安全监控',
                    label: {
                        normal: {
                            lineHeight:10,
                            formatter: '\n\n\n\n\n\n\n\n\n安全监控\n\n今日',
                            textStyle: {
                                color: '#fff',
                                fontSize: 13

                            }
                        }
                    }
                }, {
                    value: 100-complete,
                    name: '%',
                    label: {
                        normal: {
                            formatter:function(){
                                return data[0].complete
                            },
                            textStyle: {
                                color: '#fff',
                                fontSize: 25

                            }
                        }
                    }
                },
                {
                    value: 20,
                    name: '%',
                    itemStyle:{
                        borderColor: 'transparent'
                    },
                    label: {
                        normal: {
                            formatter: '',
                            textStyle: {
                                color: '#fff',
                                fontSize: 16

                            }
                        }
                    }
                }
            ]
        }

    ]
};