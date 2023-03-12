//ecStat 是 ECharts 的统计扩展，需要额外添加扩展脚本，参加上方“脚本”
// 详情请移步 https://github.com/ecomfe/echarts-stat
// 图中的曲线是通过线性回归拟合出的

var uploadedDataURL = "/asset/get/s/data-1487230909639-B1IpwCzFg.json";

$.getJSON(uploadedDataURL, function (data) {
    
        var myRegression = ecStat.regression('linear', data);

        myRegression.points.sort(function(a, b) {
            return a[0] - b[0];
        });

        myChart.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            xAxis: {
                type: 'value',
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
            },
            yAxis: {
                type: 'value',
                min: 1.5,
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
            },
            series: [{
                name: 'scatter',
                type: 'scatter',
                label: {
                    emphasis: {
                        show: true
                    }
                },
                data: data
            }, {
                name: 'line',
                type: 'line',
                showSymbol: false,
                data: myRegression.points,
                markPoint: {
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'left',
                            formatter: myRegression.expression,
                            textStyle: {
                                color: '#333',
                                fontSize: 14
                            }
                        }
                    },
                    data: [{
                        coord: myRegression.points[myRegression.points.length - 1]
                    }]
                }
            }]
        });
    });