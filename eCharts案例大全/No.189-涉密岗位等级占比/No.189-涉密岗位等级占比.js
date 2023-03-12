var value = [0.40,0.50,0.60,0.72,0.88];

option = {
            backgroundColor:"rgba(10,16,30,1)",
            grid: {
                top: '15%',
                left: '5%',
                right: '15%',
                bottom: '13%'
            },
            tooltip: {
                show: false
            },
            xAxis: {
                type: 'value',
                min: 0,
                max:1,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#ffffff',
                        width: 1
                    },
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: 'rgba(96,118,173,0.3)'
                    }
                },
                axisLabel: {
                    show: false,
                },
                axisTick: {
                    show: false,
                }
            },
            yAxis: {
                //show: false,
                type: 'category',
                splitLine: {
                    show: false,
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    interval: 0,
                    margin: 0,
                    align: 'left',
                    padding: [-50, 0, 0, 0],
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 16
                    }
                },
                axisTick: {
                    show: false
                },
                data : ['王丹丹', '翟凯乐', '王佳', '刘丽','王晓娜']
            },
            series: [{
                //真实数值条形图
                name: "真实值",
                type: 'bar', //pictorialBar
                barWidth: '30%',
                itemStyle: {
                    normal: {
                        borderWidth: 0,
                        color: {
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            colorStops: [{
                                offset: 0,
                                color: '#052a32'
                            }, {
                                offset: 1,
                                color: '#00ffe9'
                            }]
                        }
                    },
                    barBorderRadius: 10
                },
                label: {
                    show: false,
                },
                data : value,
                z: 1
            }, {
                //辅助方格图形
                name: "辅助值",
                type: 'pictorialBar',
                barWidth: '32%',
                symbol: 'rect',
                symbolRepeat: 'true',
                symbolMargin: '80%',
                symbolSize: ['20%', '100%'],
                symbolOffset: ['150%', '0%'],
                symbolRepeat: true,
                itemStyle: {
                    normal: {
                        color: 'rgba(10,16,30,1)'
                    },
                    barBorderRadius: 10
                },
                label: {
                    normal: {
                        color: '#fff',
                        show: false,
                        position: ['100%', '10%'],
                        fontSize: 18,
                        formatter: function(params) {
                            console.info(params);
                            return ' ' + (value[params.dataIndex]*100).toFixed(2) + '%';
                        }
                    }
                },
                data : [1,1,1,1,1],
                z: 2
            },{
                //辅助背景图形
                name: "背景条",
                type: 'bar', //pictorialBar
                barWidth: '30%',
                barGap : '-100%',
                itemStyle: {
                    normal: {
                        borderWidth: 0,
                        color: '#052a32'
                    },
                    barBorderRadius: 10
                },
                data : [1,1,1,1,1],
                z: 0
            },]
        };