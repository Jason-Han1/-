option = {
    backgroundColor: "#fff",
    series: [
        {
            name:'访问来源',
            type:'pie',
            // center: ["50%","40%"],
            radius: ['60%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center',
                },
                emphasis: {
                    show: false,
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
            silent: true,
            data:[
                {
                    value:135, 
                    name:'直接访问',
                    itemStyle: {
                        color: ["blue"]  
                    }
                    
                },
                {
                    value:110, 
                    name:'邮件营销',
                    itemStyle: {
                        color: ["red"]  
                    },
                    
                },
                {
                    value:834, 
                    name:'联盟广告',
                    itemStyle: {
                        color: ["yellow"]  
                    }
                    
                },
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            animation: false,
            radius: ['0%', '60%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    formatter: [
                        '{a|2520.00}',
                        '{b|应付合计}'
                    ].join('\n'),
                    rich: {
                        a: {
                            color: '#333',
                            fontWeight: 700,
                            fontSize: 40
                        },
                        b: {
                            color: "#333",
                            fontSize: 20,
                            lineHeight: 40
                        },
                    },
                    color: "#333",
                },
                emphasis: {
                    show: false,
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
            itemStyle: {
                color: "#fff"
            },
            silent: true,
            data:[
                {value:1},
            ]
        }
    ]
};
