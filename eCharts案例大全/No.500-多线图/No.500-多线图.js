option = {
    backgroundColor: '#080b30',
    title: {
        text: '多线图',
        textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 20,
        },
        top: '5%',
        left: 'center',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(0, 255, 233,0)',
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(255, 255, 255,1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(0, 255, 233,0)',
                        },
                    ],
                    global: false,
                },
            },
        },
    },
    legend: {
        // data: ['示范', '一级', '二级'],
        orient: 'horizontal',   // 水平
        //type: 'plain',          // 普通图例
        icon: "circle",
        top: 40,
        left: 120,
        // right: '5%',
        // bottom: '15%',
        //width:280,              // 宽度
        itemGap: 2,            // 间隔
        itemWidth: 10,          // 图形宽度。
        itemHeight: 10,         // 图形高度。
        borderWidth: 0,
        textStyle: {
            fontSize: '14px',
        	color: '#4ca9ff',
        }
    },
    grid: {
        top: '5%',
        left: '5%',
        right: '15%',
        bottom: '15%',
        // containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#56a4cd',
                },
            },
            splitArea: {
                // show: false,
                color: '#f00',
                lineStyle: {
                    color: '#f00',
                },
            },
            axisLabel: {
                color: '#fff',
            },
            splitLine: {
                show: false,
            },
            "axisTick":{       //y轴刻度线
              "show":false
            },
            boundaryGap: true,
            data: ['A', 'B', 'C', 'D', 'E', 'F'],
        },
    ],

    yAxis: [
        {
            type: 'value',
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)',
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#56a4cd',
                },
            },
            axisLabel: {
                show: true,
                margin: 20,
                textStyle: {
                    color: '#d1e6eb',
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '示范',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
                normal: {
                    color: '#00b3f4',
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#00b3f4',
                },
            },
            itemStyle: {
                color: '#00b3f4',
                borderColor: '#fff',
                borderWidth: 3,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            tooltip: {
                show: false,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(0,179,244,0.3)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,179,244,0)',
                            },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(0,179,244, 0.9)',
                    shadowBlur: 20,
                },
            },
            data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02],
        },
        {
            name: '一级',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
                normal: {
                    color: '#00ca95',
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#00ca95',
                },
            },

            itemStyle: {
                color: '#00ca95',
                borderColor: '#fff',
                borderWidth: 3,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            tooltip: {
                show: false,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(0,202,149,0.3)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,202,149,0)',
                            },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(0,202,149, 0.9)',
                    shadowBlur: 20,
                },
            },
            data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14],
        },
        {
            name: '二级',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
                normal: {
                    color: '#ffde32',
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#ffde32',
                },
            },

            itemStyle: {
                color: '#ffde32',
                borderColor: '#fff',
                borderWidth: 1,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            tooltip: {
                show: false,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(255,222,50,0.3)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(255,222,50,0.3)',
                            },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(255,222,50,0.3)',
                    shadowBlur: 20,
                },
            },
            data: [181.55, 298.35, 114.02, 79.55, 189.57, 256.14],
        }
    ],
};
