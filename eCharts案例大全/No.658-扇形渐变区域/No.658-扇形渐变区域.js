option = {
    backgroundColor : '#040D36',
    tooltip : {
        trigger : 'item',
        formatter : "{b}:{c} ({d}%)"
    },
    series: [
        {
            type: 'pie',
            zlevel: 5,
            radius: ['14%', '60%'],
            center: ['50%', '50%'],
            roseType: 'area',
            data : [
                {
                    name : '天气污染源',
                    value : '620',
                    itemStyle : {
                        normal : {
                            color: "rgba(40, 242, 230, 1)",
                            borderWidth: 0
                        }
                    }
                },
                {
                    name : '人为污染源',
                    value : '580',
                    itemStyle : {
                        normal : {
                            color: "rgba(36, 180, 255, 0.5)",
                            borderWidth: 0
                        }
                    }
                },
                {
                    name : '无机污染源',
                    value : '500',
                    itemStyle : {
                        normal : {
                            color: "rgba(255, 201, 92, 0.5)",
                            borderWidth: 0
                        }
                    }
                },
                {
                    name : '物理污染源',
                    value : '109',
                    itemStyle : {
                        normal : {
                            color: "rgba(244, 255, 77, 0.5)",
                            borderWidth: 1
                        }
                    }
                }
            ],
            label: {
                normal: {
                    color: '#88A8D6'
                },
            },
            labelLine: {
                normal: {
                    length2 : 60,
                    lineStyle : {
                        color: '#88A8D6'
                    }
                }
            }
        }, 
     
        {
            type: 'pie',
            zlevel: 7,
            silent: true,
            radius: ['61%', '60%'],
            hoverAnimation: false,
            color: 'red',
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [1,1,1]
        },
    ]
};