// var myChart = echarts.init(document.getElementById('e'));
    var colorList = {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#FFD194' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#D1913C' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    };
    var colorList2 = {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#43cea2' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#185a9d' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    }
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            },
            formatter:'{b} 比例 : {c2}',
            extraCssText:'width:auto;height:auto;'
        },
        legend: {
            data: ['男生', '女生', '比例'],
            top: '6%',
            right: '10%',
            textStyle: {
                fontSize:16,
                color: '#8597c1'
            }
        },
        xAxis: [
            {
                type: 'category',
                data: ['幼儿园', '小学', '初中', '高中'],
                axisPointer: {
                    type: 'shadow'
                },
                axisLine: {
                    lineStyle: {
                        color: '#8597c1'
                    }
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    interval: '0',
                    textStyle: {
                        fontSize: 16,
                        color: '#8597c1'
                    }
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                min: 0,
                max: 7,
                interval: 1,
                axisLine: {
                    lineStyle: {
                        color: '#8597c1'
                    }
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    interval: '0',
                    textStyle: {
                        fontSize: 16,
                        color: '#8597c1'
                    }
                },
            },
            {
                type: 'value',
                min: 0,
                max: 0.20,
                interval: 0.05,
                axisLine: {
                    lineStyle: {
                        color: '#8597c1'
                    }
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    interval: '0',
                    textStyle: {
                        fontSize: 16,
                        color: '#8597c1'
                    }
                },


            }
        ],
        series: [
            {
                name: '男生',
                type: 'bar',
                data: [1, 3, 1, 1],
                itemStyle: {
                    color: function (params) {
                        return colorList;
                    },
                },
            },
            {
                name: '女生',
                type: 'bar',
                data: [2, 5, 3, 2],
                itemStyle: {
                    color: function (params) {
                        return colorList2;
                    },
                },
            },
            {
                name: '比例',
                type: 'line',
                yAxisIndex: 1,
                data: [0.08, 0.08, 0.14, 0.06],
                itemStyle: {
                    color: '#135058'
                }
            }
        ]
    };
    myChart.setOption(option);
