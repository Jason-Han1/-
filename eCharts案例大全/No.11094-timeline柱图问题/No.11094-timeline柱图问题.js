option = {
    baseOption: {
        timeline: { 
            axisType: 'category', 
            orient: 'H',
            autoPlay: false,
            inverse: true,
            playInterval: 1000,
            left: '30%',
			right: '30%',
			bottom: null,
			width: null,
			height: 30,
			label: {
                normal: {
                    textStyle: {
                        color: '#999'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            symbol: 'none',
            lineStyle: {
                color: '#555'
            },
            checkpointStyle: {
                color: '#bbb',
                borderColor: '#777',
                borderWidth: 2
            },
            controlStyle: {
                showNextBtn: false,
                showPrevBtn: false,
                normal: {
                    color: '#666',
                    borderColor: '#666'
                },
                emphasis: {
                    color: '#aaa',
                    borderColor: '#aaa'
                }
            },
            data: ['地区', '客户']
        },
        backgroundColor: '#fff',
        title: [{
                text: '',
                textAlign: 'center',
                // right: '3%',
                right: 0,
                top: 20,
                textStyle: {
                    fontSize: 30,
                    color: 'rgba(0, 0, 0, 0.9)'
                }
            }
        ],
        tooltip: {
            padding: 5,
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1
        },
        grid: {
            top: 80, bottom: '40%',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    label: {
                        show: true,
                        formatter: function(params) {
                            return params.value.replace('\n', '');
                        }
                    }
                }
            }
        },
        xAxis: {
            type: 'category',
            name: '',
            nameLocation: 'middle',
            nameTextStyle: {
                fontSize: 12
            },
            splitLine: {
                show: false
            },
            axisTick: {
                lineStyle: {
                    color: '#777b7d'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#777b7d'
                }
            },
            data: ["2015", "2016", "2017", "2018", "2019"],
            axisLabel: {
                textStyle: {
                    color: '#777b7d'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: '',
            nameGap: 15,
            // min: -5,
    
            nameTextStyle: {
                color: '#777b7d',
                fontSize: 12
            },
            axisLine: {
                lineStyle: {
                    color: '#777b7d'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#777b7d'
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#777b7d'
                }
            }
        }
    }, 
    options: [
        {
            legend: {
                right: 10,
                data:['北','上','广']
            },
            series: [
                {
                    name:'北',
                    type: 'bar',
                    stack: '总量',
                    data: [1, 2, 3, 4, 5]
                },
                {
                    name:'上',
                    type: 'bar',
                    stack: '总量',
                    data: [1, 2, 3, 4, 5]
                },
                {
                    name:'广',
                    type: 'bar',
                    stack: '总量',
                    data: [5, 2, 3, 4, 5]
                },
                {
                    name: '占比',
                    type: 'pie',
                    center: ['50%', '85%'],
                    radius: '28%',
                    data: [
                        {name: '北', value: 10},
                        {name: '上', value: 30},
                        {name: '广', value: 100}
                    ]
                }
            ]
        },
        {
            legend: {
                right: 10,
                data:['张三','李四']
            },
            series: [
                {
                    name:'张三',
                    type: 'bar',
                    stack: '总量',
                    data: [1, 12, 3, 4,5]
                },
                {
                    name:'李四',
                    type: 'bar',
                    stack: '总量',
                    data: [12, 2, 3, 4,9]
                },
                {
                    name: '占比',
                    type: 'pie',
                    center: ['50%', '85%'],
                    radius: '28%',
                    data: [
                        {name: '张三', value: 20},
                        {name: '李四', value: 17}
                    ]
                }
            ]
        }
    ]

};