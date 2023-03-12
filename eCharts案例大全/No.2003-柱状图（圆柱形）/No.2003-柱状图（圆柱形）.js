let dataList = ['5000', '4000', '3000'];
 option = {
    tooltip: {
        trigger: 'item',
    },
    grid: {
        left: '2%',
        top: '25%',
        right: '2%',
        bottom: 0,
        containLabel: true,
    },

    xAxis: [
        {
            data: ['2019年', '2020年', '2021年'],
            axisLabel: {
                textStyle: {
                    color: '#000',
                    fontSize: 12,
                },
                margin: 12, //刻度标签与轴线之间的距离。
            },

            axisLine: {
                show: true, //不显示x轴
                lineStyle: {
                    color: '#151436',
                },
            },
            axisTick: {
                show: false, //不显示刻度
            },
            boundaryGap: true,
        },
    ],
    yAxis: [
        {
            name: '单位：万立方米',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#151436',
                },
            },
            splitLine: {
                show: true,
                width: 0.08,
                lineStyle: {
                    type: 'solid',
                    color: '#151436',
                },
            },
            axisLabel: {
                color: '#000',
            },
            nameTextStyle: {
                color: '#000',
            },
        },
    ],
    series: [
        {
            //柱底圆片
            name: '',
            type: 'pictorialBar',
            symbolSize: [25, 10], //调整截面形状
            symbolOffset: [0, 6],
            z: 12,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#163fac',
                            },
                            {
                                offset: 1,
                                color: '#163fac',
                            },
                        ],
                        false
                    ),
                },
            },
            data: dataList,
        },

        //柱体
        {
            name: '',
            type: 'bar',
            barWidth: 25,
            barGap: '0%',
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        type: 'linear',
                        global: false,
                        colorStops: [
                            {
                                //第一节下面
                                offset: 0,
                                color: '#437ef7',
                            },
                            {
                                offset: 1,
                                color: '#0f2166',
                            },
                        ],
                    },
                },
            },

            data: dataList,
        },

        //柱顶圆片
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [25, 10], //调整截面形状
            symbolOffset: [0, -6],
            z: 12,
            symbolPosition: 'end',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#71a3fe',
                            },
                            {
                                offset: 1,
                                color: '#71a3fe',
                            },
                        ],
                        false
                    ),
                },
            },
            data: dataList,
        },
    ],
};
