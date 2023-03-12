var uploadedDataURL = "/asset/get/s/data-1585563179271-04v54P_aS.json";

myChart.showLoading();


$.getJSON(uploadedDataURL, function(res) {

    myChart.hideLoading();

    myChart.setOption({
        title: {
            text: '男女身高体重关系图',
            subtext: '抽样调查来自: Heinz  2003'
        },
        grid: {
            left: '3%',
            right: '7%',
            bottom: '3%',
            containLabel: true
        },
        tooltip: {
            // trigger: 'axis',
            show: true,
            formatter: function(params) {
                if (params.value.length > 1) {
                    return params.seriesName + ' :<br/>' +
                        params.value[0] + 'cm ' +
                        params.value[1] + 'kg ';
                } else {
                    return params.seriesName + ' :<br/>' +
                        params.name + ' : ' +
                        params.value + 'kg ';
                }
            },
            axisPointer: {
                show: true,
                type: 'cross',
                lineStyle: {
                    type: 'dashed',
                    width: 1
                }
            }
        },
        toolbox: {
            feature: {
                dataZoom: {},
                brush: {
                    type: ['rect', 'polygon', 'clear']
                },
                saveAsImage: {}
            }
        },
        brush: {},
        legend: {
            data: ['女性', '男性'],
            left: 'center'
        },
        xAxis: [{
            type: 'value',
            scale: true,
            axisLabel: {
                formatter: '{value} cm'
            },
            splitLine: {
                show: false
            }
        }],
        yAxis: [{
            type: 'value',
            scale: true,
            axisLabel: {
                formatter: '{value} kg'
            },
            splitLine: {
                show: false
            }
        }],
        series: [{
                name: '女性',
                type: 'scatter',
                data: res.woman,
                markArea: {
                    silent: true,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderWidth: 1,
                            borderType: 'dashed'
                        }
                    },
                    data: [
                        [{
                            name: '女性分布区间',
                            xAxis: 'min',
                            yAxis: 'min'
                        }, {
                            xAxis: 'max',
                            yAxis: 'max'
                        }]
                    ]
                },
                markPoint: {
                    data: [{
                            type: 'max',
                            name: '最大值'
                        },
                        {
                            type: 'min',
                            name: '最小值'
                        }
                    ]
                },
                markLine: {
                    lineStyle: {
                        normal: {
                            type: 'solid'
                        }
                    },
                    data: [{
                            type: 'average',
                            name: '平均值'
                        },
                        {
                            xAxis: 160
                        }
                    ]
                }
            },
            {
                name: '男性',
                type: 'scatter',
                data: res.man,
                markArea: {
                    silent: true,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderWidth: 1,
                            borderType: 'dashed'
                        }
                    },
                    data: [
                        [{
                            name: '男性分布区间',
                            xAxis: 'min',
                            yAxis: 'min'
                        }, {
                            xAxis: 'max',
                            yAxis: 'max'
                        }]
                    ]
                },
                markPoint: {
                    data: [{
                            type: 'max',
                            name: '最大值'
                        },
                        {
                            type: 'min',
                            name: '最小值'
                        }
                    ]
                },
                markLine: {
                    lineStyle: {
                        normal: {
                            type: 'solid'
                        }
                    },
                    data: [{
                            type: 'average',
                            name: '平均值'
                        },
                        {
                            xAxis: 170
                        }
                    ]
                }
            }
        ]
    })
})