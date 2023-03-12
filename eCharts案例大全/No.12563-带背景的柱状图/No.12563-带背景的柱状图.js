option = {
    backgroundColor: '#0f192f',
    title: {
	        text: '支付方式占比',
	        textStyle: {
	        	 align: 'center',
	            color: '#fff',
	            fontSize: 20,
	        },
	        top: '10%',
	        left: '5%',
	    },
    legend: {
        top: '10%',
        right:'2%',
        textStyle: {
            color: '#fff',
        },
        // data: ['室外消火栓检测系统', '火灾自动报警系统', '设施离位报警系统','视频监控系统']
    },
    grid: {
        left: '5%',
        right: '2%',
        bottom: '10%',
        height: "70%",
        containLabel: true
    },

    tooltip: {
        show: "true",
        trigger: 'item',
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        padding: [8, 10], //内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
        formatter: function(params) {
            if (params.seriesIndex == "1" || params.seriesIndex == "2" || params.seriesIndex == "6" || params.seriesIndex == "7") {
                return params.name + '<br>' + params.seriesName + ' ： ' + params.value + '';
            }
            let value = vue.list.series_data[params.seriesIndex].data[params.dataIndex] || '0';
            let name = vue.list.series_data[params.seriesIndex].name;
            return params.name + '<br>' + name + ' ： ' + value + '';

        }
    },
    yAxis: [
        {
        type: 'value',
        name: '',
        gridIndex: 0,
        nameTextStyle: {
            color: '#ebf8ac',
            fontSize: 14,
            padding: [-21, 65, 0, 0]
        },
        axisTick: {
            show: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#ebf8ac',
            }
        },
        splitLine: {
            // interval:1,
            show: true,
            lineStyle: {
                color: '#649BD3',
                width: 1,
                type: 'solid'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#979797',
                fontWeight: 'normal',
                fontSize: '14',
            },
        },
      },
      {
            name:'',
            type: 'value',
            position:'right',
            axisLabel: {
                show: true,
                color: '#fff',
                fontSize: 14,
                formatter:'{value}℃',
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#FFFFFF'
                    }
            },
            axisTick: {
                // show: false
            },
        }
    ],
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#ebf8ac',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#071f2a ',
            }
        },
        axisLabel: {
            inside: false,
            textStyle: {
                color: '#979797',
                fontWeight: 'normal',
                fontSize: '12',
            },
            // formatter:function(val){
            //     return val.split("").join("\n")
            // },
        },
        data: ['4.1', '4.2'],
    }, {
        type: 'category',
        axisLine: {
            show: false,
            

        },
        axisTick: {
            show: false,

        },
        axisLabel: {
            show: false
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#071f2a',
                width: 1,
                type: 'solid'
            }
        },
        data: ['6.1', '6.2', '6.3', '6.4','6.5', '6.6', '6.7'],

    }, ],
    series: [ {
            name: '实体卡',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#288AF6'
                    }, {
                        offset: 1,
                        color: '#6653F2'
                    }]),
                    borderWidth: 0,
                    barBorderRadius: 11,
                }
            },
            zlevel: 2,
            barWidth: '15',
            data: [80, 150, 100, 140,150,120,170]
        }, {
            name: '虚拟卡',
            type: 'bar',
            barWidth: '15',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#73CF7C'
                    }, {
                        offset: 1,
                        color: '#0CBCB5'
                    }]),
                    borderWidth: 0,
                     barBorderRadius: 11,
                }
            },
            zlevel: 2,
            barGap: '30%',
            data: [80, 170, 260, 190,240,220,250]
        }, {
            name: '自助',
            type: 'bar',
            barWidth: '15',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(239,188,67,1)'
                    }]),
                    borderWidth: 0,
                     barBorderRadius: 11,
                }
            },
            zlevel: 2,
            barGap: '30%',
            data: [80, 170, 260, 210,290,190,230]
        }, {
            name: '人工',
            type: 'bar',
            barWidth: '15',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(139,47,232,1)'
                    }]),
                    borderWidth: 0,
                     barBorderRadius: 11,
                }
            },
            zlevel: 2,
            barGap: '30%',
            data: [80, 170, 260, 30,150,180,170]
        }

    ]
};