option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['3月1日', '3月1日', '3月1日', '3月1日', '3月1日', '3月1日', '3月1日','3月1日']
    },
    yAxis: {
        show:false,
        type: 'value',
    },
    series: [{
        data: [1120, 932, 1101, 934, 890, 730, 840,820],
        type: 'line',
        symbol: 'emptyCircle', //去掉折线图中的节点
        symbolSize:8,
        smooth: false, //true 为平滑曲线，false为直线
        areaStyle: {},
        label:{
            show:true,
            color:"fff",
        },
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