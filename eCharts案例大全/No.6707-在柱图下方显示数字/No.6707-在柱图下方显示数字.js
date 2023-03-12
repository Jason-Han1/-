option ={
            grid: {

                bottom: '10%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['23', '24', '25', '26'],
                axisPointer: {
                    type: 'shadow'
                },
                axisLine: {
                    lineStyle: {
                        color: '#437d9d'
                    },

                }, axisLabel: {
                    color: "#fcfdfe",
                    fontSize: 24
                },
                position: 'bottom',
                offset: 30,
                axisTick: {
                    show: true,

                    lineStyle: {

                        type: 'dotted'
                    }
                }
            }, {
                type: 'category',
                data: ['非常满意', '满意', '一般', '不满意'],
                position: 'bottom',
                axisLine: {
                    lineStyle: {
                        color: "#437d9d",
                        width: 1
                    }
                }, axisLabel: {
                    color: "#39c9ff",
                    fontSize: 18
                },
            }],
            yAxis: {
                type: 'value',
                axisLine: { show: false },
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false,
                }
            },
            series: [{
                data: [30, 69, 2, 1],
                type: 'bar',
                barWidth: '20',
                label: {
                    show: false,
                    position: 'top',
                    color: 'white'
                },
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = ['#08d1cf', '#08d1cf', '#08d1cf', '#ff4c86'];
                            return colorList[params.dataIndex];
                        }
                    },
                    emphasis: {
                        opacity: 0.5,
                        color: "#ed5c6d",
                    }
                },
            }]
        };