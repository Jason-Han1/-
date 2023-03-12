 var data = [
        {
            value: 335,
            name: '直接访问'
        },
        {
            value: 310,
            name: '邮件营销'
        },
        {
            value: 234,
            name: '联盟广告'
        },
        {
            value: 135,
            name: '视频广告'
        },
    ];
    option = {
        color: ['#937af5', '#477dff', '#2cc8fe', '#2dd360'],
        title: {
            text: '库龄',
            textStyle: {
                color: '#d6fef6',
                fontWeight: 'normal',
               
                align: 'center',
                textShadowColor: 'white',
            },
            x: 'center',
            y: 'center',
        },
        grid: {
            left: '0',
            top: '0',
            right: '0',
            bottom: '0',
            containLabel: true
        },
        series: [{
                name: '访问来源',
                type: 'pie',
                zlevel: 2,
                radius: ['40%', '60%'],
                avoidLabelOverlap: false,
                label: {
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontWeight: 'bold'
                        }
                    },
                    normal: {
                        formatter: '{b|{b}}\n{c|{c}万}',
                        rich: {
                            b: {
                                color: '#537ba9',
                              
                                align: 'right'
                            },
                            c: {
                                color: '#d3f2ff',
                              
                                align: 'right'
                            },

                        }
                    }
                },
                labelLine: {
                    show: true,
                  
                    length: 40,
                    length2:90,
                },
                itemStyle: {
                    normal: {
                        borderWidth: 2,
                        borderColor: '#152549',
                    }
                },
                data: data
                },
            {
                name: '底色版',
                type: 'pie',
                radius: ['40%', '76%'],
                avoidLabelOverlap: false,
                hoverAnimation: false,
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },

                },
                data: [{
                    value: 335,
                    name: '直接访问',
                    itemStyle: {
                        color: '#283a63'
                    }
                    }]
                }
            ]
    };