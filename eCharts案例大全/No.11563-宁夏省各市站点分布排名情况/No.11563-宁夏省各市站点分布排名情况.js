option = {
    backgroundColor: "#20263f",
    title: {
        text: "宁夏省各市站点分布排名情况",
        left: "center",
        textStyle: {
            color: "#fff"
        }
    },
    tooltip: {
        show: true,
        formatter: function(params) {
            return params.name + '：' + params.data['value'] + '个'
        },
    },
    grid: {
        left: 120
    },
    xAxis: {
        show: false
    },
    yAxis: {
        type: 'category',
        inverse: true,
        nameGap: 16,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            margin: 100,
            textStyle: {
                color: '#fff',
                align: 'left',
                fontSize: 14
            },
            rich: {
                a: {
                    color: '#fff',
                    backgroundColor: '#FAAA39',
                    width: 20,
                    height: 20,
                    align: 'center',
                    borderRadius: 2
                },
                b: {
                    color: '#fff',
                    backgroundColor: '#4197FD',
                    width: 20,
                    height: 20,
                    align: 'center',
                    borderRadius: 2
                }
            },
            formatter: function(params) {
                if (parseInt(params.slice(0, 1)) < 3) {
                    return [
                        '{a|' + (parseInt(params.slice(0, 1)) + 1) + '}' + '  ' + params.slice(1)
                    ].join('\n')
                } else {
                    return [
                        '{b|' + (parseInt(params.slice(0, 1)) + 1) + '}' + '  ' + params.slice(1)
                    ].join('\n')
                }
            }
        },
        data: ["0石嘴山市", "1银川市", "2吴忠市", "3中卫市", "4固原市"]
    },
    series: [{
        name: 'barSer',
        type: 'bar',
        roam: false,
        visualMap: false,
        zlevel: 2,
        barMaxWidth: 8,
        barGap: 0,
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = [
                        {
                            colorStops: [{
                                offset: 0,
                                color: '#FFD119' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#FFAC4C' // 100% 处的颜色
                            }]
                        }, 
                        {
                            colorStops: [{
                                offset: 0,
                                color: '#00C0FA' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#2F95FA' // 100% 处的颜色
                            }]
                        }
                    ];
                    if (params.dataIndex < 3) {
                        return colorList[0]
                    } 
                    else {
                        return colorList[1]
                    }
                },
                barBorderRadius: 15
            }
        },
        data: [{
            name: '石嘴山市',
            value: 1
        }, {
            name: '银川市',
            value: 2
        }, {
            name: '吴忠市',
            value: 3
        }, {
            name: '中卫市',
            value: 4
        }, {
            name: '固原市',
            value: 5
        }]
    }]
}