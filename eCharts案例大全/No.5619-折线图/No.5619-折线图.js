let nowClientHeight = 1080;
let dataX = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
let data= [100,100,100,100,300,100,100,100,];
let textDW = '';
let textName = '';
option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B',
                    }
                },
            },
            grid: {
                left: '10%',
                right: '3%',
                bottom: '18%',
                top: '15%',
                // containLabel: false
            },
            xAxis: [{
                type: 'category',
                data: dataX,
                axisLine: {
                    lineStyle: {
                        color: '#0E2A43'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#ffffff'
                    },
                    // 默认x轴字体大小
                    fontSize: 12 * nowClientHeight / 1080,
                    // margin:文字到x轴的距离
                    margin: 20
                },
            }],
            yAxis: [{
                type: 'value',
                name: textDW,
                nameTextStyle: {
                    color: "#A5B0B2",
                    fontSize: 12 * nowClientHeight / 1080,
                    padding: [0, 30, 0, 0]
                },
                min: 0,
                splitNumber: 3,
                nameGap: 20,
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#fff',
                    }
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 12 * nowClientHeight / 1080,
                    },
                    formatter: '{value}'
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        // type:'dashed',虚线
                        color: 'rgba(0, 83, 120, 0.5)'
                    }
                }
            }],
            series: [{
                name: textName,
                type: 'line',
                data: data,
                symbolSize: 5,
                symbol: 'circle',
                yAxisIndex: 0,
                lineStyle: {
                    normal: {
                        width: 4,
                        color: 'rgba(252, 237, 65, 1)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0, 220, 255, 0)'
                        }, {
                            offset: 1,
                            color: 'rgba(0, 220, 255, 0)'
                        }], false),

                    },
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(255, 255, 255, 1)',
                        borderColor: 'rgba(252, 237, 65, 1)',
                        borderWidth: 5
                    }
                },
            },
            ]
        };