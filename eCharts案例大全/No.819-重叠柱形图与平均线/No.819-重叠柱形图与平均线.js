        var option = {
            title: {
                text: '单位 %',
                left: '25px',
                textStyle: {
                    color: '#666',
                    fontWeight: '400',
                    fontSize: 12,
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                x: 'right'
            },
            color: [
                '#fdad61', '#68bfa3', '#4a8df0'
            ],
            grid: {
                left: '0%',
                right: '8%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                axisTick: {
                  show: false  
                },
                axisLabel: {
                    interval: 0
                },
                data: ['地区1', '地区2', '地区3', '地区4', '地区5']
            }],
            yAxis: [{
                show: false,
                type: 'value',
                name: '单位 %',
            }],
            series: [

                {
                    name: '当月完成',
                    type: 'bar',
                    stack: 'Ad',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [220, 182, 191, 234, 290]
                }, {
                    name: '累计完成',
                    type: 'bar',
                    stack: 'Ad',
                    emphasis: {
                        focus: 'series'
                    },
                    label: {
                        show: true,
                        position: 'top'
                    },
                    data: [150, 232, 201, 154, 190]
                },
                {
                    name: '均值',
                    type: 'line',
                    emphasis: {
                        focus: 'series'
                    },
                    lineStyle: {
                        color: 'transparent'
                    },
                    symbol: "none",
                    data: [],
                    markLine: {　　　　　　
                        data: [{
                            type: 'average',
                            name: '平均值'
                        }]　　　　
                    }
                },
            ]
        };
        // 计算总数
        var sum = 0;
        var num = 0;
        var arr = option.series[0].data;
        var arr1 = option.series[1].data;
        var arr2 = option.series[2].data;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        for (var i = 0; i < arr.length; i++) {
            sum += arr1[i];
        }

        // 计算总数均值
        for (var i = 0; i < arr.length; i++) {
            num = arr1[i] + arr[i];
            arr2.push(num);
            num = 0;
        }
        option.series[1].label.formatter = function(params) { return (params.value / sum * 100).toFixed(2); };
        option.series[2].data = arr2;