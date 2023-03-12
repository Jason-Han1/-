option = {
            color: ['#F2A695', '#8693F3', '#FCC667', '#FA76CD'],
            //title: {
            //    text: '任务完成情况',
            //    x: 'center'
            //},
            grid: {
                left: '0',
                right: '0',
                bottom: '20%',
                containLabel: true
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {c} ({d}%)'
            },
            legend: {//右侧图例
                orient: 'vertical',
                itemGap: 20,
                top: '25%',
                right: '10%',
                icon: 'circle',
                data: ['失败','成功','待执行']
            },
            formatter: function (name) {
                var _index = 0
                var _dataList = option.series[0].data
                var arr
                _dataList.forEach(function(item,i){
                    if (item.name === name) {
                        _index = i
                    }
                })
                arr = [
                    name + ' |   ',
                    _dataList[_index].value + '条'
                ]
                // 注意，换行仍是使用 '\n'。
                return arr.join('')
            },
            series: [
                {
                    name: '任务完成情况',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: { // 图形样式
                        normal: {
                            borderColor: '#ffffff',
                            borderWidth: 5
                        }
                    },
                    label: {//圈内文字
                        normal: {
                            show: false,
                            position: 'center',
                            formatter: '{text|{b}}\n{value|{c}}',
                            rich: {
                                text: {
                                    color: '#666',
                                    fontSize: 14,
                                    align: 'center',
                                    verticalAlign: 'middle',
                                    padding: 5
                                },
                                value: {
                                    color: '#8693F3',
                                    fontSize: 24,
                                    align: 'center',
                                    verticalAlign: 'middle'
                                }
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [{value:335, name:'失败'},
                        {value:310, name:'成功'},
                        {value:234, name:'待执行'},]
                }
            ]
        }