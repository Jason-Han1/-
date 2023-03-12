var data = [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310, 310, 220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310, 310, ]

        // 指定图表的配置项和数据 
        var option = {
            roam: false, // 禁止滚轮事件
            tooltip: {
                show: false,
            },
            grid: {
                x: '0%', //距离左边
                x2: '0%', //距离右边
                y: '15%', // 上距离
                y2: '15%', // 下距离
            },
            xAxis: {
                axisLabel: {
                    interval: 0, //横轴信息全部显示
                    rotate: 0, //0度角倾斜显示
                    show: true,
                    textStyle: {
                        color: '#333333'
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: '#B6C1C4',
                    },
                },
                axisTick: {
                    show: false,
                },
                data: ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日', '11日', '12日', '13日', '14日', '15日', '16日', '17日', '18日', '19日', '20日', '21日', '22日', '23日', '24日', '25日', '27日', '28日', '29日', '30日', ]
            },
            yAxis: {
                show: false,
            },

            series: [{
                name: 'a',
                tooltip: {
                    show: false
                },
                data: data,

                type: 'bar',
                barWidth: 30,
                // 基准线
                markLine: {
                    silent: true, // 不响应鼠标事件
                    symbol: ['none', 'none'],
                    position: 'top',
                    label: {
                        show: false,
                    },
                    lineStyle: {
                        normal: {
                            color: '#D3D3D3' // 这儿设置安全基线颜色
                        }
                    },
                    data: [{
                        name: '平均线',
                        // 支持 'average', 'min', 'max'
                        type: 'average'
                    }, ],
                },
                label: {
                    show: true, // 柱子顶部的数值
                    position: 'top',
                    top: 0,
                    fontSize: 12,
                    offset: [0, -10],
                    formatter: function(params) {
                        let num = params.value;
                        if (num > 1024) {
                            return (num / 1024).toFixed(2) + 'GB'
                        } else if (num < 1024 && num > 0) {
                            return num.toFixed(2) + 'MB'
                        } else {
                            return '';
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: "#4729FB" // 0% 处的颜色
                        }, {
                            offset: 0.5,
                            color: "#3077F7" // 50% 处的颜色
                        }, {
                            offset: 1,
                            color: "#1FB0F4" // 100% 处的颜色
                        }], false)
                    }
                },
                // barGap: 0
            }, {
                type: 'bar',
                barWidth: 20,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: "#235DFF" // 0% 处的颜色
                        }, {
                            offset: 0.5,
                            color: "#59ACF7" // 50% 处的颜色
                        }, {
                            offset: 1,
                            color: "#71CAFF" // 100% 处的颜色
                        }], false)
                    }
                },
                barGap: 0,
                data: data.map(item => item + 1.5)
            }, {
                name: 'b',
                tooltip: {
                    show: false
                },
                type: 'pictorialBar',
                itemStyle: {
                    borderWidth: 0,
                    borderColor: '#47A6FF',
                    color: '#1AC0F4',

                },
                symbol: 'path://M 0,0 l 120,0 l -30,60 l -120,0 z',
                symbolSize: ['13', '3'],
                symbolOffset: ['-1', '-2'], // 左右 ，上下
                symbolRotate: 0,
                symbolPosition: 'end',
                data: data,
                z: 3
            }],

            // 可左右滑动
            dataZoom: [{
                show: false,
                realtime: true,
                start: 30,
                end: 50
            }, {
                type: 'inside',
                realtime: false,
                start: 30,
                end: 50,
                zoomOnMouseWheel: false, // 禁用滚轮
            }],
        };
