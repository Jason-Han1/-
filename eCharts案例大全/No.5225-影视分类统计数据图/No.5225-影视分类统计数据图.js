//本人的影视小站(gaze.run)案例

var name_arrs = ['恐怖', '音乐', '传记', '悬疑', '运动', '惊悚', '历史', '科幻', '战争', '爱情', '犯罪', '冒险', '喜剧', '奇幻', '动作', '剧情'];
option = {
    title: {
        text: '影视分类统计数据图',
        x: 'center',
        y: 'top',
        textAlign: 'left'
    },
    color: ['#1D3039'],
    grid: {
        left: '4%',
        right: '4%',
        bottom: '4%',
        top: 30,
        //图形位置包含坐标轴的刻度标签
        //如果图形位置调整好却不包含坐标轴，坐标轴信息会显示不全
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            return '<img style="height: 35px;width: 35px;" src="http://gaze.run/static/img/echarts_svg/' + params[0].name + '.svg"><br>&nbsp' + name_arrs[params[0].dataIndex] + '<br>&nbsp' + params[0].value + '部';
        }
    },
    xAxis: {
        axisLine: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#1D3039'
            }
        },
        type: 'value',
        // min: 0,
        max: 120,
        axisLabel: {
            formatter: '{value}'
        },
    },
    yAxis: {
        name: '分类',
        type: 'category',
        data: ['terror', 'music', 'biography', 'suspense', 'exercise', 'panic', 'history', 'sci_fi', 'war', 'love', 'crime', 'adventure', 'comedy', 'Fantasy', 'action', 'plot'],
        //y轴线样式
        axisLine: {
            show: false
        },
        //设置与x轴平行的线(分割线)不显示
        splitLine: {
            show: false,
        },
        axisTick: {
            alignWithLabel: true
        },
        axisLabel: {
            formatter: function(value, index) {
                // console.log(index);
                return '{' + value + '|}\n' + name_arrs[index] + ' ' + '';
            },
            margin: 16,
            height: 40,
            rich: {
                value: {
                    lineHeight: 65,
                    align: 'right',
                    color: '#34495e',
                },

                terror: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: 'http://gaze.run/static/img/echarts_svg/terror.svg'
                    }
                },

                music: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: 'http://gaze.run/static/img/echarts_svg/music.svg'
                    }
                },

                biography: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: 'http://gaze.run/static/img/echarts_svg/biography.svg'
                    }
                },

                suspense: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: 'http://gaze.run/static/img/echarts_svg/suspense.svg'
                    }
                },

                exercise: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: 'http://gaze.run/static/img/echarts_svg/exercise.svg'
                    }
                },

                panic: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: 'http://gaze.run/static/img/echarts_svg/panic.svg'
                    }
                },

                history: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: 'http://gaze.run/static/img/echarts_svg/history.svg'
                    }
                },

                sci_fi: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: 'http://gaze.run/static/img/echarts_svg/sci_fi.svg'
                    }
                },

                war: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: 'http://gaze.run/static/img/echarts_svg/war.svg'
                    }
                },

                love: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: 'http://gaze.run/static/img/echarts_svg/love.svg'
                    }
                },

                crime: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: 'http://gaze.run/static/img/echarts_svg/crime.svg'
                    }
                },

                adventure: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: 'http://gaze.run/static/img/echarts_svg/adventure.svg'
                    }
                },

                comedy: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: 'http://gaze.run/static/img/echarts_svg/comedy.svg'
                    }
                },

                Fantasy: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: 'http://gaze.run/static/img/echarts_svg/Fantasy.svg'
                    }
                },

                action: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: 'http://gaze.run/static/img/echarts_svg/action.svg'
                    }
                },

                plot: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: 'http://gaze.run/static/img/echarts_svg/plot.svg'
                    }
                },

            }
        }
    },
    series: [{
        type: 'bar',
        barWidth: '30',
        data: [{
                value: 1
            },
            {
                value: 4
            },
            {
                value: 7
            },
            {
                value: 10
            },
            {
                value: 10
            },
            {
                value: 12
            },
            {
                value: 14
            },
            {
                value: 15
            },
            {
                value: 17
            },
            {
                value: 20
            },
            {
                value: 23
            },
            {
                value: 26
            },
            {
                value: 27
            },
            {
                value: 29
            },
            {
                value: 37
            },
            {
                value: 97
            },
        ],
        label: {
            normal: {
                formatter: function(data) {
                    return data.value + '部';
                },
                show: true,
                position: 'right',
                distance: 5,
                color: 'white',
                backgroundColor: '#1D3039',
                padding: 10,
                borderRadius: 20
            }
        },
    }]
};