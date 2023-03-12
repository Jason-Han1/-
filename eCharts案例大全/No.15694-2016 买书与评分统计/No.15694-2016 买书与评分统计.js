option = {
    baseOption: {
        tooltip: {},
        title: [{
            text: '2016 买书与评分统计',
            left: 'center'
        }, {
            text: '2016 年买书花费\n2101.06 元',
            left: '71%',
            top: '69%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                fontSize: 15
            },
            backgroundColor: 'rgba(210, 250, 220, 0.5)'
        }, {
            text: '读完\n44 本',
            left: '27.5%',
            top: '35%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                fontSize: 20
            }
        }],
        textStyle: {
            fontSize: 14
        },
        series: [{
            color: ['#d0648a', '#e593b0'],
            type: 'pie',
            startAngle: 23,
            radius: ['42%', '49%'],
            center: ['28%', '40%'],
            data: [{
                name: '纸质书读完',
                value: 25
            }, {
                name: '电子书读完',
                value: 19
            }],
            label: {
                normal: {
                    formatter: '{b}：\n{c}本'
                }
            }
        }, {
            color: ['#d0648a', '#e593b0'],
            type: 'pie',
            startAngle: 38,
            radius: ['51%', '53%'],
            center: ['28%', '40%'],
            data: [{
                name: '纸质书用时',
                value: 60.9
            }, {
                name: '电子书用时',
                value: 39.1
            }],
            label: {
                normal: {
                    formatter: '{b}：\n{c}%'
                }
            },
            labelLine: {
                normal: {
                    length: 40
                }
            }
        }, {
            color: ['#d0648a', '#e593b0'],
            type: 'pie',
            startAngle: 180,
            radius: ['18%', '28%'],
            center: ['65%', '75%'],
            data: [{
                name: '购买纸质书',
                value: 51
            }, {
                name: '购买电子书',
                value: 20
            }],
            label: {
                normal: {
                    formatter: '{b}：\n{c}本'
                }
            },
            labelLine: {
                normal: {
                    length: 80
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.8
                }
            }
        }, {
            color: ['#347268', '#22ccae'],
            type: 'pie',
            startAngle: 180,
            radius: ['30%', '32%'],
            center: ['71%', '70%'],
            data: [{
                name: '纸质书支出',
                value: 1917.31
            }, {
                name: '电子书支出',
                value: 183.75
            }],
            label: {
                normal: {
                    formatter: '{b}：\n{c}元'
                }
            },
            labelLine: {
                normal: {
                    length: 40
                }
            }
        }, {
            color: ['#347268', '#0e8a77', '#22a994', '#22ccae', '#63cdb9'],
            type: 'pie',
            radius: ['20%', '45%'],
            center: ['28%', '40%'],
            startAngle: 0,
            data: [{
                name: '一颗星',
                value: 2
            }, {
                name: '两颗星',
                value: 1
            }, {
                name: '三颗星',
                value: 3
            }, {
                name: '四颗星',
                value: 21
            }, {
                name: '五颗星',
                value: 17
            }],
            label: {
                normal: {
                    formatter: '{b}：\n{c}本'
                }
            },
            labelLine: {
                normal: {
                    length: 30
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.9
                }
            }
        }, {
            name: '公众号打赏',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: '#22C3AA'
                }
            },
            symbolSize: 6,
            data: [974.39 - 23.68],
            stack: 'income',
            barWidth: 30,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: function(obj) {
                        return obj.value + '元';
                    }
                }
            }
        }, {
            name: '送羡辙书',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: '#AEE2D9'
                }
            },
            symbolSize: 6,
            data: [733.43],
            stack: 'income',
            barWidth: 30,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: function(obj) {
                        return obj.value + '元';
                    }
                }
            }
        }, {
            name: '实际买书花费',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: '#D0648A'
                }
            },
            data: [2101.06],
            barWidth: 30,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: function(obj) {
                        return obj.value + '元';
                    }
                }
            }
        }],
        xAxis: {
            show: false,
            axisTick: {
                show: false
            },
            inverse: true
        },
        yAxis: [{
            show: false,
            interval: 0,
            nameLocation: 'end',
            data: [
                ' '
            ],
            axisTick: {
                show: false
            }
        }],
        grid: [{
            left: '60%',
            bottom: '60%',
            top: 100,
            right: 20
        }],
        legend: {
            show: true,
            data: ['公众号打赏', '送羡辙书', '实际买书花费'],
            right: 15,
            top: 35,
            align: 'right',
            orient: 'vertical'
        }
    },
    media: [{
        query: {
            maxWidth: 600
        },
        option: {
            title: [{
                left: 'center'
            }, {
                left: '50%',
                top: '72%'
            }, {
                left: '48%',
                top: '22%'
            }],
            series: [{
                radius: ['42%', '48%'],
                center: ['50%', '25%']
            }, {
                startAngle: 180,
                radius: ['28%', '38%'],
                center: ['50%', '75%'],
                labelLine: {
                    normal: {
                        length: 30
                    }
                }
            }, {
                startAngle: 0,
                radius: ['40%', '42%'],
                center: ['50%', '75%'],
                labelLine: {
                    normal: {
                        length: 20
                    }
                }
            }, {
                radius: ['25%', '45%'],
                center: ['50%', '25%'],
                labelLine: {
                    normal: {
                        length: 30
                    }
                }
            }]
        }
    }]
}