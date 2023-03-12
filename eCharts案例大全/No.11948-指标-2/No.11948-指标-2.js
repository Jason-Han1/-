option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        symbol: 'none', //去掉折线图中的节点
        smooth: true, //true 为平滑曲线，false为直线
        areaStyle: {},
        itemStyle: {

            normal: {

                color: new echarts.graphic.LinearGradient(

                    0, 0, 0, 1,

                    [

                        {
                            offset: 0,
                            color: '#95FDFC'
                        }, //定义颜色

                        {
                            offset: 0.5,
                            color: '#71F0D3'
                        },

                        {
                            offset: 1,
                            color: '#C0FBBD00'
                        }

                    ]

                )

            },

            emphasis: { //hover时的颜色

                color: new echarts.graphic.LinearGradient(

                    0, 0, 0, 1,

                    [

                        {
                            offset: 0,
                            color: '#37E8E3'
                        },

                        {
                            offset: 0.7,
                            color: '#71F0D3'
                        },

                        {
                            offset: 1,
                            color: '#C0FBBD'
                        }

                    ]

                )

            }
        }
    }]
};