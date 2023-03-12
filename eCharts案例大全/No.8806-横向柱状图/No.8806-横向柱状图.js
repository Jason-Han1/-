option = {
    backgroundColor:'#000',
            color: ['#fff'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function (objs, index) {
                    let obj = objs[0];
                    return `${obj.name}<br/>${obj.marker}${obj.seriesName} : ${obj.value}%`;
                },
            },
            grid: {
                top: '3%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,

            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                data: [0, 20, 40, 60, 80, 100],
                interval: 20,
                min: 0,
                max: 100,
                splitLine: {
                    show:false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#fff',

                    }
                },
                axisTick: {
                    show: false,
                }
            },
            yAxis: {
                type: 'category',
                boundaryGap: true,
                splitArea: {
                    areaStyle: {
                        opacity: 0
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff',

                    }
                },
                data: [
                    '人均建设用地',
                    '人均非建设用地',
                    '人均公共用地',
                    '人均公共设施用地',
                    '人均绿地广场用地',
                    ' 人均商服用地',
                ],
                axisTick: {
                 show:false
                }
            },
            series: [
                {
                    name: 'Scoring Attributes',
                    barMaxWidth: 20,
                    type: 'bar',
                    label: {
                        normal: {
                            textStyle: {
        						color: '#fff'
        					},
                            show: true,
                            position: 'right',
                            formatter: "{c}"
                        }
                    },
                     itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#01FEEF'
                            }, {
                                offset: 1,
                                color: '#00B7FF'
                            }])
                        },
                    },
                    data: [20,30,50,78,50,30]
                },

            ]
        };