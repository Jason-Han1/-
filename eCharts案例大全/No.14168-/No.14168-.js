        function randomData() {
            now = new Date(+now + oneDay);
            value = value + Math.random() * 21 - 10;
            return {
                name: now.toString(),
                value: [
                    [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                    Math.round(value)
                ]
            }
        }
        
        
        var data = [];
        var now = +new Date(1997, 9, 3);
        var oneDay = 24 * 3600 * 1000;
        var value = Math.random() * 1000;
        for (var i = 0; i < 1000; i++) {
            data.push(randomData());
        }
        
option = {
    title: {
                right: '17%',
                textStyle: {
                    color: '#f7e1a9',
                    fontFamily: 'STHeiti'
                },
                top: 10,
                padding: 0
            },
            grid: {
                show: true,
                borderWidth: 0,
                height: 156,
                top: '15%',
                left: window.smallGridLeft,
                right: window.smallGridRight,
                    backgroundColor:  {
                      type: 'linear',
                      x: 0.4,
                      y: 0.4,
                      colorStops: [{
                          offset: 0,
                          color: '#895355' // 0% 处的颜色
                      }, {
                          offset: .4,
                          color: '#593640' // 100% 处的颜色
                      }, {
                          offset: 1,
                          color: '#39273d' // 100% 处的颜色
                      }],
                      globalCoord: false // 缺省为 false
                 }
            },

            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#9f520e'
                    }
                },
                axisLabel: window.smallXAxisLabel
            },

            tooltip: {
                show: true,
                trigger: 'axis'
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    show: false
                },
                scale: true,
                boundaryGap: window.smallYBoundaryGap,
                splitNumber: 3,
                splitLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#af4f0a'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: window.smallYAxisLabel
            },
            easing: 'linear',
            series: [{
                name: '视频分享总数',
                type: 'line',
                showSymbol: false,
                lineStyle: {
                    normal: {
                        color: '#f9d47f'
                    }
                },
                data: data,
                markPoint: {
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    }
                }
            }]
};

 setInterval(function () {

        for (var i = 0; i < 5; i++) {
            data.shift();
            data.push(randomData());
        }
    
        chart.setOption({
            series: [{
                data: data
            }]
        });
        }, 200);
