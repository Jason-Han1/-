     //固定资产投资第一个图
            getGdzctzFirst() {
                let that = this;
                let params = {};
                axios.get('/backend/jjjc/getGdzctzFirst', params).then(function (res) {
                    var MAX = res.data.data.maxList;
                    var VALUE = res.data.data.valueData[0].value;
                    var VALUE2 = res.data.data.valueData[1].value;
                    var VALUELine = res.data.data.valueLine;
                    var xlabel = res.data.data.xlabel;
                    let legendData = res.data.data.legendData;
                    let dom = 10;
                    let barWidth = 10;
                    let manColors = [];
                    let womanColors = [];
                    for (let i = 0; i < 10; i++) {
                        manColors.push({
                            type: 'linear',
                            x: 0,
                            x2: 1,
                            y: 0,
                            y2: 0,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: 'rgba(247, 253, 58, 1)', // 最左边
                                },
                                {
                                    offset: 0.5,
                                    color: 'rgba(183, 163, 60, 1)', // 左边的右边 颜色
                                },
                                {
                                    offset: 0.5,
                                    color: 'rgba(247, 253, 58, 1)', // 右边的左边 颜色
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(247, 253, 58, 1)',
                                },
                            ],
                        });
                        womanColors.push({
                            type: 'linear',
                            x: 0,
                            x2: 1,
                            y: 0,
                            y2: 0,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: 'rgba(134, 60, 183, 1)', // 最左边
                                },
                                {
                                    offset: 0.5,
                                    color: 'rgba(134, 60, 183, 1)', // 左边的右边 颜色
                                },
                                {
                                    offset: 0.5,
                                    color: 'rgba(52, 74, 186, 1)', // 右边的左边 颜色
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(52, 74, 186, 1)',
                                },
                            ],
                        });
                    }
                    let myySecond = echarts.init(document.getElementById('gdzctzFirst'));
                    let myySecondoption = {
                        grid: {
                            top: '30%',
                            left: '4%',
                            right: '4%',
                            bottom: '20%',
                            containLabel: true
                        },
                        // title: {
                        //     text: '各季度农林牧鱼业总产值和增速',
                        //     left: 'center',
                        //     textStyle: {
                        //         color: 'rgba(36, 173, 254, 1)',
                        //         fontSize: 8
                        //     }
                        // },
                        legend: {
                            data: legendData,
                            bottom: 'bottom',
                            type: 'scroll',
                            textStyle: {
                                color: 'rgba(36, 173, 254, 1)',
                                fontSize: 8
                            },
                            //图例标记的图形高度
                            itemHeight: 5,
                            //图例标记的图形宽度
                            itemWidth: 10,
                        },
                        xAxis: {
                            type: 'category',
                            data: xlabel,
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: 'rgba(36, 173, 254, 1)',
                                }
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLabel: {
                                textStyle: {
                                    color: 'rgba(36, 173, 254, 1)'
                                },
                                fontSize: 8
                            }
                        },
                        yAxis: {
                            type: 'value',
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: 'rgba(36, 173, 254, 1)',
                                }
                            },
                            splitLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: false,
                                textStyle: {
                                    color: 'rgba(36, 173, 254, 1)'
                                },
                                fontSize: 8
                            },
                        },
                        series: [
                            {
                                name: '建筑安装工程投资',
                                type: 'bar',
                                barWidth: barWidth,
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: 'rgba(252, 212, 52, 1)'
                                        }, {
                                            offset: 1,
                                            color: 'rgba(252, 100, 52, 1)'
                                        }]),
                                    },
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'top',
                                        fontSize: 8,
                                        color: 'rgba(36, 173, 254, 1)',
                                        offset: [0, -2]
                                    }
                                },
                                data: VALUE,
                            },
                            {
                                name: '建筑安装工程投资',
                                z: 2,
                                type: 'pictorialBar',
                                data: VALUE,
                                symbol: 'diamond',
                                symbolOffset: ['-63%', '50%'],
                                symbolSize: [barWidth, barWidth * 0.5],
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: 'rgba(252, 212, 52, 1)'
                                        }, {
                                            offset: 1,
                                            color: 'rgba(252, 100, 52, 1)'
                                        }]),
                                    },
                                },
                            },
                            {
                                name: '建筑安装工程投资',
                                z: 3,
                                type: 'pictorialBar',
                                symbolPosition: 'end',
                                data: VALUE,
                                symbol: 'diamond',
                                symbolOffset: ['-63%', '-50%'],
                                symbolSize: [barWidth, barWidth * 0.5],
                                itemStyle: {
                                    normal: {
                                        borderWidth: 0,
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: 'rgba(247, 253, 58, 1)'
                                        }, {
                                            offset: 1,
                                            color: 'rgba(247, 253, 58, 1)'
                                        }]),
                                    },
                                },
                            },
                            // ---------------------分割线---------------------
                            {
                                name: '计划总投资',
                                type: 'bar',
                                barWidth: barWidth,
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: 'rgba(52, 74, 186, 1)'
                                        },
                                            {
                                                offset: 1,
                                                color: 'rgba(134, 60, 183, 1)'
                                            }
                                        ]),
                                    },
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'top',
                                        fontSize: 8,
                                        color: 'rgba(36, 173, 254, 1)',
                                        offset: [0, -2]
                                    }
                                },
                                data: VALUE2,
                            },
                            {
                                name: '计划总投资',
                                z: 2,
                                type: 'pictorialBar',
                                data: VALUE2,
                                symbol: 'diamond',
                                symbolOffset: ['63%', '50%'],
                                symbolSize: [barWidth, barWidth * 0.5],
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: 'rgba(52, 74, 186, 1)'
                                        },
                                            {
                                                offset: 1,
                                                color: 'rgba(134, 60, 183, 1)'
                                            }
                                        ]),
                                    },
                                },
                            },
                            {
                                name: '计划总投资',
                                z: 3,
                                type: 'pictorialBar',
                                symbolPosition: 'end',
                                data: VALUE2,
                                symbol: 'diamond',
                                symbolOffset: ['63%', '-50%'],
                                symbolSize: [barWidth, barWidth * 0.5],
                                itemStyle: {
                                    normal: {
                                        borderWidth: 0,
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: 'rgba(58, 213, 253, 1)'
                                        },
                                            {
                                                offset: 1,
                                                color: 'rgba(58, 213, 253, 1)'
                                            }
                                        ]),
                                    },
                                },
                            },
                            {
                                type: 'line',
                                stack: 'Total',
                                name: '建筑安装工程投资增速',
                                emphasis: {
                                    focus: 'series'
                                },
                                data: VALUELine,
                                lineStyle: {
                                    color: 'rgba(252, 52, 52, 1)',
                                },
                            },
                        ]
                    }
                    myySecondoption && myySecond.setOption(myySecondoption);
                })
                    .catch(function (err) {
                        console.log(err);
                    });
            },