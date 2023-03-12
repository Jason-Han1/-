
      let dataObj=[
        {
          value: 298.78,
          name: '极高风险'
        },
        {
          value: 1312.045718,
          name: '较高风险'
        },
        {
          value: 3784.23,
          name: '中风险'
        },
        {
          value: 6254.33,
          name: '低风险'
        }
      ]
    for (var i = 0; i < dataObj.length; i++) {
        const obj = {
            color: {
                type: 'radial',
                x: 550,
                y: 440,
                r: 120,
                colorStops: [{
                    offset: 1,
                    color: '#fff' // 100% 处的颜色
                }],
                global: true // 缺省为 false
            }
        }
        if (dataObj[i].name === '极高风险') {
            obj.color.colorStops[0].color = '#FF5624'
        }
        if (dataObj[i].name === '较高风险') {
            obj.color.colorStops[0].color = '#FFB700'
        }
        if (dataObj[i].name === '中风险') {
            obj.color.colorStops[0].color = '#FFFF00'
        }
        if (dataObj[i].name === '低风险') {
            obj.color.colorStops[0].color = '#5EA6FE'
        }
        dataObj[i].itemStyle = obj
    }
    option= {
        backgroundColor:'black',
        legend: {
            orient: 'vertical',
            x: 'right',
            icon: 'circle',
            textStyle: {
                color: '#fff',
                fontSize: 14,
                fontFamily: 'PingFangSC',
                fontWeight: 400
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return params.name+'：'+params.value+'k㎡'
            }
        },
        series: [{
            type: 'pie',
            radius: ['0', '110'],
            clockwise: true,
            itemStyle: {
                borderColor: '#04192b',
                borderWidth: 1
            },
            label: {
                normal: {
                    show: true,
                    formatter: (params) => {
                        return '{color' + params.dataIndex + '| ' + params.percent + '%}'
                    },
                    rich: {
                        color0: {
                            fontSize: 18,
                            color: '#FF5624',
                            fontWeight: 400,
                            fontFamily: 'PingFangSC'
                        },
                        color1: {
                            fontSize: 18,
                            color: '#FFB700',
                            fontWeight: 400,
                            fontFamily: 'PingFangSC'
                        },
                        color2: {
                            fontSize: 18,
                            color: '#FFFF00',
                            fontWeight: 400,
                            fontFamily: 'PingFangSC'
                        },
                        color3: {
                            fontSize: 18,
                            color: '#5EA6FE',
                            fontWeight: 400,
                            fontFamily: 'PingFangSC'
                        }
                    }
                }
            },
            labelLine: {
                length: 24
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: dataObj
        }]
    }