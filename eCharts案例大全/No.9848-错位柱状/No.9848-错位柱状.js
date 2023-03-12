option = {
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        legend: {
            data:['买票数量', '验票数量'],
            right: '3%',
            top: '0%',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: '#00a1e4',
                fontSize: 10
            }
        },
        xAxis: {
            type: 'category',
            //刻度文字
            axisLabel: {
                fontSize: 15,
                color: '#00a1e4',
                margin: 8,
                interval: 0,
                formatter: function(val) {
                    return val;
                    //竖排文字
                    // return val.split("").join("\n");
                }
            },
            //轴坐标线
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#00a1e4', //左边线的颜色
                    width: '1' //坐标线的宽度
                }
            },
            //网格分割线
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#00a1e4',
                    width: 1,
                }
            },
            //分割延出线
            axisTick: {
                show: false
            },
            data: ['name', 'name', 'name', 'name']
        },
        yAxis: {
            type: 'value',
            //刻度文字
            axisLabel: {
                fontSize: 15,
                color: '#00a1e4',
                margin: 8,
                interval: 0,
                formatter: function(val) {
                    return val;
                    //竖排文字
                    // return val.split("").join("\n");
                }
            },
            //轴坐标线
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#00a1e4', //左边线的颜色
                    width: '1' //坐标线的宽度
                }
            },
            //分割延出线
            axisTick: {
                show: false
            },
            //网格分割线
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#00a1e4',
                    width: 1,
                }
            },
        },
        series: [{
            barGap: "0%",
            barWidth: '10%',
            name: '买票数量',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: '#00a1e4'
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data: [1000, 2000, 3000, 4000]
        },
            {
                name: '辅助',
                barGap: "0%",
                barWidth: '10%',
                type: 'bar',
                stack: 'A',
                itemStyle: {
                    normal: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    },
                    emphasis: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [1000, 2000, 3000, 4000]
            },
            {
                name: '验票数量',
                barGap: "0%",
                barWidth: '10%',
                type: 'bar',
                stack: 'A',
                itemStyle: {
                    normal: {
                        color: '#edbb35'
                    },
                },
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        // position: 'inside'
                    }
                },
                z:-2,
                data: [1000, 2000, 3000, 4000]
            }
        ]
    };