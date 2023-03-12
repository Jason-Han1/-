option = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '5%',
        left: 'center'
    },
    series: [
        // 环
        {
            name: '',
            type: 'pie',
            radius: ['50%', '60%'],
            avoidLabelOverlap: false,
            zlevel:2,
            z: 3,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: false,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            silent: true,
            data: [
                {value: 1048, name: '搜索引擎',itemStyle: {color:'rgba(19,73,246)'}},
                {value: 735, name: '直接访问',itemStyle: {color:'rgba(1, 225,250)'}},
            ]
        },
        // 饼
        {
            name: '',
            type: 'pie',
            radius: [0, '70%'],
            avoidLabelOverlap: false,
            silent: true,
            label: {
                show: false,
                position: 'center',
                normal:{
                    fontSize: 30, 
                    color: '#fff',
                    position: 'inner',
                    formatter: params => {
                    return (
                         params.percent.toFixed(0) + '%'
                        );
                    },
                 }
            },
            // legendHoverLink:false,
            emphasis: {
                label: {
                    show: false,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {
                    value: 1048, 
                    name: '搜索引擎',
                    itemStyle: {
                        color: 'rgba(5,42,79,0.8)',
                    },
                
                },
                {
                    value: 735, 
                    name: '直接访问',
                    itemStyle: {
                        color: 'rgba(0,225,251,0.3)',
                    }
                },
            ]
        },
        // 底层圆
        {
            itemStyle: {
                normal: {
                    color: 'rgba(5,42,79)'
                }
            },
            type: 'pie',
            silent: true, //取消高亮
            radius: ['0%', '70%'],
            center: ["50%", "50%"],
            hoverAnimation: false, //取消动画效果
            data: ['1'],
            label: {
                normal: {
                    show: false,
                }
            },
            z: -1
        }
    ]
};
