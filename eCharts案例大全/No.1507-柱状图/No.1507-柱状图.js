var  category = [
        {
            name: '线索嫌疑人',
            value: 1245
        },
        {
            name: '高危采集',
            value: 13334
        },
        {
            name: '入所人员',
            value: 2320
        },
        {
            name: '打处人员',
            value: 3654
        },
        {
            name: '苏州重点人员',
            value: 11202
        },
        {
            name: '人工采集',
            value: 22
        },
        {
            name: '部/省重点人员',
            value: 3
        }
    ]; 
    var categoryInside = [category[0].value/100,category[1].value/100,category[2].value/100,category[3].value/100,category[4].value/100,category[5].value/100,category[6].value/100]
    var categoryOutside = [category[0].value/1000,category[1].value/1000,category[2].value/1000,category[3].value/1000,category[4].value/1000,category[5].value/100,category[6].value/1000]
    var colorList = [new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
          offset: 0,
          color: 'rgba(245, 190, 4, 0)'
        }, {
          offset: 1,
          color: '#F5BE04'
        }], false), new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
          offset: 0,
          color: 'rgba(192, 210, 203, 0)'
        }, {
          offset: 1,
          color: '#C0D2CB'
        }], false), new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
          offset: 0,
          color: 'rgba(255, 138, 0, 0)'
        }, {
          offset: 1,
          color: '#FF8A00'
        }], false), new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
          offset: 0,
          color: '#2F3C77'
        }, {
          offset: 1,
          color: '#00FCFF'
        }], false)]
     var colorList1 = ['#F5BE04','#A8B9B7','#FF6C00','#10FFF7']
    var option = {
        xAxis: {
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        grid: {
            left: '17%',
            top: '5%',
            right: '5%',
            bottom: '0%',
            containLabel: true
        },
        yAxis: [{
            type: "category",
            inverse: true,
            data: category,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
            }
        },
        {
            type: "category",
            inverse: true,
            data: category,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
            }
        }],
        series: [
            {
                type: "bar",
                stack:'圆',
                yAxisIndex: 0,
                barWidth: 7,
                z: 2,
                data: category.map((item, i) => {
                    itemStyle = {
                        color: i > 3 ? colorList[3] : colorList[i]
                    }
                    return {
                        value: item.value,
                        name: item.name,
                        itemStyle: itemStyle
                    };
                }),
                label: {
                    normal: {
                        show: true,
                        position: ['-50', '-30'],
                        rich: {
                            a1: {
                                width: 50,
                                height: 20,
                                color: '#FFC600',
                                fontFamily: 'DIN',
                                fontStyle: 'italic',
                                fontSize: 15,
                                fontWeight: '500',
                                align: 'center',
                                padding: [0,0,0,0]
                            },
                            a2: {
                                width: 50,
                                height: 18,
                                color: '#C0D2CB',
                                fontFamily: 'DIN',
                                fontStyle: 'italic',
                                fontSize: 15,
                                fontWeight: '500',
                                align: 'center',
                                padding: [0,0,0,0]
                            },
                            a3: {
                                width: 50,
                                height: 18,
                                color: '#FF6C00',
                                fontFamily: 'DIN',
                                fontStyle: 'italic',
                                fontSize: 15,
                                fontWeight: '500',
                                align: 'center',
                                padding: [0,0,0,0]
                            },
                            a4: {
                                width: 50,
                                height: 18,
                                color: '#42EBFF',
                                fontFamily: 'DIN',
                                fontStyle: 'italic',
                                fontSize: 14,
                                fontWeight: '500',
                                align: 'center',
                                padding: [0,0,0,0]
                            },
                            c: {
                                color: '#00F6FF',
                                align: 'top',
                                fontSize: 14,
                                padding: [0,0,0,6]
                            }
                        },
                        formatter: function(data) {
                            if (data.dataIndex < 7) {
                                if (data.dataIndex < 4) {
                                    return [
                                    '{a' + (data.dataIndex + 1) + '|NO.' + (data.dataIndex + 1) + '}'+ '{c|' + data.name + '}'
                                    ].join('\n')
                                } else {
                                    return [
                                    '{a4' + '|NO.' + (data.dataIndex + 1) + '}'+ '{c|' + data.name + '}'
                                    ].join('\n')
                                }
                                
                            } 
                        }
                    }
                },
                animationEasing: "elasticOut"
            },
            {
            name: '内圆',
            type: 'scatter',
            stack:'圆',
            yAxisIndex: 0,
            data: categoryInside.map((item, i) => {
                itemStyle = {
                    color: i > 3 ? colorList1[3] : colorList1[i]
                }
                return {
                    value: item,
                    itemStyle: itemStyle
                };
            }),
            symbolSize: 12,
            z: 2
        }, 
        {
            name: '外圆',
            type: 'scatter',
            stack:'圆',
            yAxisIndex: 0,
            symbolSize: 21,
            data: categoryOutside.map((item, i) => {
                itemStyle = {
                    color: 'rgba(0,0,0,0)',
                    borderColor: i > 3 ? colorList1[3] : colorList1[i],
                    borderWidth: 2,
                    opacity: 1,
                    shadowColor: i > 3 ? colorList1[3] : colorList1[i],
                    shadowBlur: 5
                }
                return {
                    value: item,
                    itemStyle: itemStyle
                };
            }),
            z: 2
        }, 
        {
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [20000,20000,20000,20000,20000,20000,20000],
            barWidth: 6,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#233E78'
                  }, {
                    offset: 1,
                    color: '#233E78'
                  }], false),
                    barBorderRadius: 10,
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    align:'right',
                    padding: [0,0,50,-80],
                    formatter: function (data) {
                        return '{a|'+ category[data.dataIndex].value + '}' + '{b|'+ '人' + '}'
                    },
                    rich: {
                        a:{
                            fontFamily: 'DIN Alternate',
                            fontWeight: 'bold',
                            color: '#fff',
                            textShadowBlur: 10,
                            textShadowColor: '#0F67A5',
                            fontSize: 20,
                        },
                        b:{
                            fontFamily: 'PingFang SC',
                            color: '#00F6FF',
                            fontSize: 12,
                            padding: [0,0,0,5]
                        },
                    }
                }
            },
            z: 1
        }, 
        ]
}