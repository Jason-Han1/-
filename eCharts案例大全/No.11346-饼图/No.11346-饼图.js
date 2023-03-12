option = {
    color: ['#32b16c', "#eb6877"],
    title: {
        text: '296',
        left:'5px',
        subtext: '总数',
        textStyle: {
            color: '#4effff',
            fontSize: 12,
            // align: 'center'
        },
        subtextStyle: {
            fontSize: 12,
            color: ['#85c7e3']
        },
       
    },
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
    // legend: {
    //     orient: 'vertical',
    //     itemWidth: 10,
    //     itemHeight: 10,
    //     right: '1%',
    //     top:'30%',
    //     data: ['空闲','使用'],
    //     textStyle: {
    //         color: '#ffffff',
    //         fontSize: 16,
    //     },
    // },
    series: [{
        name: '总数',
        type: 'pie',
        radius: ['40%', '80%'],
        center: ['50%', '50%'],
        data: [{
                value: 200,
                name: '已安装'
            },
            {
                value: 310,
                name: '未安装'
            },

        ],
        itemStyle: {
            emphasis: {
                show: false,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
            }
        },

        labelLine: {
            normal: {
                length: 5,
                length2: 5,
                lineStyle: {
                    color: '#266998'
                }
            }

        },

    }]
};