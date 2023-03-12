var showData={
        xData: [
                "2012",
                "2013",
                "2014",
                "2015",
                "2016",
                "2017",
                "2018",
                "2019",
                
            ],
        yData:[4.2, 3.8, 4.5, 1.5, 2.9, 2.8, 3, 3.5],
}
var colorBlue = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#71bff3',
                }, {
                    offset: 1,
                    color: 'transparent',
                },], false);
option = {
     
    backgroundColor: '#0f375f',
    grid: {
                        top: '22%',
                        left: '8%',
                        right: '0',
                        bottom: '6%',
                        containLabel: true,
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow',
                            label: {
                                show: true,
                                color: '#29e0f8',
                            },
                        },
                    },
                    xAxis:
                        {
                            data: showData.xData,
                            axisLine: {
                                show: false,
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#ffffff', //X轴文字颜色
                                },
                            },
                            splitArea: {
                                show: false,
                            },
                            position: 'bottom',
                            // boundaryGap: false,
                        },
                    yAxis: [
                        //折线图
                        {
                            name: '个',
                            type: 'value',
                            nameTextStyle: {
                                color: '#ffffff',
                            },
                            splitLine: {
                                show: false,
                            },
                            axisLine: {
                                show: false,
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#ffffff',
                                    fontSize: '12',
                                },
                            },

                        },


                    ],
                    series: [
                        {
                            name: 'data',
                            color: '#29e0f8',
                            type: 'line',
                            smooth: true, //平滑曲线显示
                            symbolSize: 0, //标记的大小
                            lineStyle: {
                                color: '#22a9dd',
                                width: 2,
                            },
                            areaStyle: {
                                color: colorBlue,
                            },
                            zlevel: 2,
                            data: showData.yData,
                        },

                    ],
};