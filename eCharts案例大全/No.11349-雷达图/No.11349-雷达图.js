option = {


    tooltip: {},
    grid: {
        left: '5px', // 与容器左侧的距离
        right: '5px', // 与容器右侧的距离
        top: '20px', // 与容器顶部的距离
        bottom: '20px', // 与容器底部的距离
    },
    legend: {
        orient: 'vertical',
        icon: "circle",
        left: '5px',
        top: '0%',
        data: ['TISM', '网络'],
        textStyle: {
            color: '#88cbe9'
        },
        itemWidth: 10,
    },

    radar: {

        shape: 'circle',
        name: {
            textStyle: {
                color: '#83a9bf',
                // backgroundColor: '#999',
                borderRadius: 0,
                padding: [-10, 5]
            }
        },
        indicator: [{
                name: '告警',
                max: 100
            },
            {
                name: '严重',
                max: 100
            },
            {
                name: '次要',
                max: 100
            },
            {
                name: '重要',
                max: 100
            },

        ],

        splitArea: {
            show: true,

            areaStyle: {

                color: ["#060f2b"] // 图表背景网格的颜色

            }

        },
        splitLine: {

            show: true,

            lineStyle: {

                width: 1,

                color: '#192c4f' // 图表背景网格线的颜色

            }

        }
    },
    series: [{
        name: '告警',
        type: 'radar',
        areaStyle: {
            normal: {

            },

        },
        data: [

            {
                value: [70, 60, 70, 70],
                name: '网络',
                itemStyle: {
                    normal: {
                        color: '#bb9d33'
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.5
                    }
                }
            },
            {
                value: [50, 20, 30, 90],
                name: 'TISM',
                itemStyle: {
                    normal: {
                        color: '#478ca4'
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.5
                    }
                }
            },

        ]
    }]
}