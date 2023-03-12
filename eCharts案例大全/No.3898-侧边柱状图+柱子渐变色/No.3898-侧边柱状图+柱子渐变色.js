option = {
        backgroundColor: 'black',
        grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            top: '10%',
            containLabel: true
        },
        tooltip: {
            show: false,
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function(params) {
                return params[0].name + '<br/>' +
                    "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                    params[0].seriesName + ' : ' + params[0].value + ' %<br/>'
            }
        },
        xAxis: [{
            show: true,
          
            type: '',
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: 18
                }
            }
        },{
            show: true,
            type: '',
              min:0,
            max:100,
            name:"价格指数1",
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },

            axisLabel: {
                        textStyle: {
                            color: '#fff',
                            fontSize: 18
                        },
                        formatter: '{value} %'
                    },
            interval:25,
        }],
        yAxis: [{
            type: 'category',
            inverse: true,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    fontSize: 18
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#fff",
                }
            },
            data: ['5年（含）-10（不含）', '10年（含）-15（不含）', '15年（含）-20（不含）', '20（含）以上', '5年以下']
        }],
        series: [{
                name: '价格指数',
                type: 'bar',
                zlevel: 1,
                 symbolSize: 12,
                xAxisIndex: 0,
                itemStyle: {
                    normal: {
                        barBorderRadius: 0,
                        color: new echarts.graphic.LinearGradient(
                            0, 1, 1, 1,
                            [{
                                    offset: 0,
                                    color: 'rgba(0,190,239,.2)'
                                },
                                {
                                    offset: 0.5,
                                    color: 'rgba(0,190,239,.8)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(0,190,239,1)'
                                }
                            ]
                        )
                    },
                },
                barWidth: 25,
                data: [600, 950, 520, 270, 720]
            },
        {
                name: '价格指数1',
                type: 'line',
                zlevel: 1,
                xAxisIndex: 1,
                itemStyle: {
                    normal: {
                        barBorderRadius: 0,
                        color: new echarts.graphic.LinearGradient(
                            0, 1, 1, 1,
                            [{
                                    offset: 0,
                                    color: 'rgba(0,190,239,.2)'
                                },
                                {
                                    offset: 0.5,
                                    color: 'rgba(0,190,239,.8)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(0,190,239,1)'
                                }
                            ]
                        )
                    },
                },
                barWidth: 25,
                data: [20, 33,47, 89, 100]
            },
        ]
    };
