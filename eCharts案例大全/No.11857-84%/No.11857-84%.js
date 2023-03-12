option = {
    backgroundColor: "#03141c",
    title: {
        text: "84%",
        subtext: '覆盖率',
        x: 'center',
        y: 'center',
        textStyle: {
            color: "#fff",
            fontSize: 30,
            fontWeight: 'normal'
        },
        subtextStyle: {
            color: "rgba(255,255,255,.45)",
            fontSize: 14,
            fontWeight: 'normal'
        }
    },

    calculable: true,
    series: [

        {
            name: '面积模式',
            type: 'pie',
            radius: [100, 130],
            center: ['50%', '50%'],
            hoverAnimation: false,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
            },
            data: [{
                    value: 34,
                    name: '吴际帅\n牛亚莉',
                    itemStyle: {

                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: '#7AB7F2'
                        }, {
                            offset: 1,
                            color: '#3B8EF5'
                        }])
                    },
                },
                {
                    value: 52,
                    name: 'rose2',
                    itemStyle: {
                        color: "transparent"
                    }
                }
            ]
        },
        {
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
            },
            name: '面积模式',
            type: 'pie',
            radius: [110, 120],
            center: ['50%', '50%'],
            data: [{
                    value: 34,
                    name: '吴际帅\n牛亚莉',
                    itemStyle: {
                        color: "transparent"
                    }
                },
                {
                    value: 52,
                    name: 'rose2',
                    itemStyle: {

                        color: '#434857'
                    },

                }
            ]
        }
    ]
};