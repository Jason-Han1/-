            var option = {
                tooltip: {
                    show: true,
                    trigger: 'item',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow',        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter: (param) => {
                        // console.dir(param);
                        return param.seriesName + "年：" + param.data
                    }
                },
                legend: {
                    // selectedMode:false,//取消图例上的点击事件
                    data: ['2017', '2018']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        interval: 10,
                        data: ['属性1.1', '属性1.2', '属性1.3', '属性1.4'],
                        axisTick: {
                            show: true
                        },
                        offset: 30,
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            show: true
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: true
                        }
                    }
                ],
                series: [
                    {
                        name: '2017',
                        type: 'bar',
                        stack: '进度1',
                        data: [121, 32, 142, 52],
                        color: '#F7A35C',
                        label: {
                            show: true,
                            formatter: (param) => {
                                return param.stack;
                            },
                            // rotate:-90
                            position: 'bottom',
                            color: '#000'
                            // padding: [13, 14, 15,16]
                        },
                    },
                    {
                        name: '2018',
                        type: 'bar',
                        stack: '进度1',
                        data: [24.5, 11.1, 25.1, 13.21],
                        color: '#90ED7D',
                        label: {
                            show: true,
                            formatter: (param) => {
                                return param.stack;
                            },
                            position: 'bottom',
                            color: '#000'
                        },
                    },
                    {
                        name: '2017',
                        type: 'bar',
                        stack: '进度2',
                        data: [24.5, 11.1, 25.1, 13.2],
                        color: '#F7A35C',
                        label: {
                            show: true,
                            formatter: (param) => {
                                return param.stack;
                            },
                            position: 'bottom',
                            color: '#000'
                        },
                    },
                    {
                        name: '2018',
                        type: 'bar',
                        stack: '进度2',
                        data: [121, 32, 142, 52],
                        color: '#90ED7D',
                        label: {
                            show: true,
                            formatter: (param) => {
                                return param.stack;
                            },
                            position: 'bottom',
                            color: '#000'
                        },
                    },
                    {
                        name: '2017',
                        type: 'bar',
                        stack: '进度3',
                        data: [24.5, 11.1, 25.1, 13.21],
                        color: '#F7A35C',
                        label: {
                            show: true,
                            formatter: (param) => {
                                return param.stack;
                            },
                            position: 'bottom',
                            color: '#000'
                        },
                    },
                    {
                        name: '2018',
                        type: 'bar',
                        stack: '进度3',
                        data: [24.5, 11.1, 25.1, 13.21],
                        color: '#90ED7D',
                        label: {
                            show: true,
                            formatter: (param) => {
                                return param.stack;
                            },
                            position: 'bottom',
                            color: '#000'
                        },
                    },
                    {
                        name: '2017',
                        type: 'bar',
                        stack: '进度4',
                        data: [121, 32, 142, 52],
                        color: '#F7A35C',
                        label: {
                            show: true,
                            formatter: (param) => {
                                return param.stack;
                            },
                            position: 'bottom',
                            color: '#000'
                        },
                    },
                    {
                        name: '2018',
                        type: 'bar',
                        stack: '进度4',
                        data: [24.5, 11.1, 25.1, 13.21],
                        color: '#90ED7D',
                        label: {
                            show: true,
                            formatter: (param) => {
                                return param.stack;
                            },
                            position: 'bottom',
                            color: '#000'
                        },
                    },
                    {
                        name: '2017',
                        type: 'bar',
                        stack: '进度5',
                        data: [24.5, 11.1, 25.1, 13.21],
                        color: '#F7A35C',
                        label: {
                            show: true,
                            formatter: (param) => {
                                return param.stack;
                            },
                            position: 'bottom',
                            color: '#000'
                        },
                    },
                    {
                        name: '2018',
                        type: 'bar',
                        stack: '进度5',
                        data: [24.5, 11.1, 25.1, 13.21],
                        color: '#90ED7D',
                        label: {
                            show: true,
                            formatter: (param) => {
                                return param.stack;
                            },
                            position: 'bottom',
                            color: '#000'
                        },
                    },
                    {
                        name: '2017',
                        type: 'bar',
                        stack: '进度6',
                        data: [24.5, 11.1, 25.1, 13.21],
                        color: '#F7A35C',
                        label: {
                            show: true,
                            formatter: (param) => {
                                return param.stack;
                            },
                            position: 'bottom',
                            color: '#000'
                        },
                    },
                    {
                        name: '2018',
                        type: 'bar',
                        stack: '进度6',
                        data: [24.5, 11.1, 25.1, 13.21],
                        color: '#90ED7D',
                        label: {
                            show: true,
                            formatter: (param) => {
                                return param.stack;
                            },
                            position: 'bottom',
                            color: '#000'
                        },
                    },

                ]
            };
            console.log(option.legend);
            var showLabelLengend = option.legend.data[0];
            if (option.legend.data.length > 1) {
                var series = option.series;
                for (var i = 0; i < series.length; i++) {
                    if (series[i].name == showLabelLengend) {
                        series[i].label.show = true;
                    } else {
                        series[i].label.show = false;
                    }
                }
            }


            myChart.on('legendselectchanged', function (params) {
                var option = this.getOption();
                // console.dir(option.series);
                // console.dir(params);
                var selected = Object.getOwnPropertyNames(params.selected);
                var showLabelLengend = null;
                for (var i = 0; i < selected.length; i++) {
                    debugger;
                    if (params.selected[selected[i]] == true) {
                        showLabelLengend = selected[i];
                        break;
                    }
                }
                var series = option.series;
                for (var i = 0; i < series.length; i++) {
                    if (series[i].name == showLabelLengend) {
                        series[i].label.show = true;
                    } else {
                        series[i].label.show = false;
                    }
                }
                console.dir(option.series);
                myChart.setOption(option);
            });


            // console.log(option.legend.length);
            if (option && typeof option === "object") {
                myChart.setOption(option, true);
            }