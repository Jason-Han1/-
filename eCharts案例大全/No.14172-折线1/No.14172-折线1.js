  option = {

            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['采收量','包装量','储藏量','运销量']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2016-06月','2016-07月','2016-08月','2016-09月','2016-10月','2016-11月','2016-12月'],
                splitLine: {
                        show: true,
                        lineStyle: {
                            // 使用深浅的间隔色
                            color: ['#aaa', '#ddd']
                        }
                    },
            },
            yAxis: {
                type: 'value',
                name: 'kg',
                axisTick: {
                        show: false
                    },
                axisLine: {
                        lineStyle: {
                            color: '#3f7fb2'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#000'
                        }
                    }

            },
            series: [
                {
                    name:'采收量',
                    type:'line',
                    stack: '总量',
                    data:[120, 132, 101, 134, 90, 230, 210],
                    symbolSize:10,
                    itemStyle: {
                        normal: {
                            color: '#fd744e',
                        }
                    }
                },
                {
                    name:'包装量',
                    type:'line',
                    stack: '总量',
                    data:[220, 182, 191, 234, 290, 330, 310],
                    symbol:'rect',
                    symbolSize:10,
                    itemStyle: {
                        normal: {
                            color: '#7fc9f7',
                        }
                    }
                },
                {
                    name:'储藏量',
                    type:'line',
                    stack: '总量',
                    data:[150, 232, 201, 154, 190, 330, 410],
                    symbol:'triangle',
                    symbolSize:10,
                    itemStyle: {
                        normal: {
                            color: '#d467cf',
                        }
                    }
                },
                {
                    name:'运销量',
                    type:'line',
                    stack: '总量',
                    data:[320, 332, 301, 334, 390, 330, 320],
                    symbol:'diamond',
                    symbolSize:10,
                    itemStyle: {
                        normal: {
                            color: '#33c737',
                        }
                    }
                },
            ]
        };
