option = {
        color: ['#ffdb5c', "#67e0e3", "#37a2da"],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        grid: {
            left: '5px', // 与容器左侧的距离
            right: '5px', // 与容器右侧的距离
            top: '5px', // 与容器顶部的距离
            bottom: '5px', // 与容器底部的距离
        },
        legend: {
            orient: 'vertical',
            icon: "circle",
            bottom: '5%',
            
            data: ['待分配', '待审核', '待处理'],
            textStyle: {
                color: '#88cbe9'
            },
            itemWidth:10,
        },
        series: [{
            name: 'ITSM',
            type: 'pie',
            radius: '60%',
            center: ['65%', '50%'],
            data: [{
                value: 2,
                name: '待处理'
            },
                {
                    value: 7,
                    name: '待审核'
                },
                {
                    value: 18,
                    name: '待分配'
                },

            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            labelLine: {
                normal: {
                    length: 5,
                    length2: 10,
                    lineStyle: {
                        color: '#266998'
                    }
                }

            },
            label: {
                normal: {
                    formatter: function(param) {
                        return param.value
                    },
                    color: '#c3e5f0',


                },

            },
        }]
    };