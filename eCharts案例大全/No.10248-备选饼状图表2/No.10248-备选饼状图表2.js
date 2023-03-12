var colors = ['#EEEC0D', '#E55125', '#5EA6FE', '#F94ED2', '#67D670', '#67FFFC']
option = {
    backgroundColor: '#333333',
    legend: {
        x : '',
        y : 'top',
        data:[{
            name: '机场接送',
        }, '酒后代驾','高铁接送','道路救援','年检代办','其他'],
        icon: 'circle',
        orient: 'vertical',
        textStyle: {
            color: '#fff',
            fontSize: 14,
            fontWeight: 400,
            fontFamily: 'PingFangSC'
        }
    },
    series : [
        {
            type:'pie',
            color: [
                    {
                        type: 'radial',
                        x: 0.4,
                        y: 0.2,
                        r: 1,
                        colorStops: [{
                            offset: 0, color: '#EEEC0D' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(234, 232, 9, 0.2)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }, 
                    {
                        type: 'radial',
                        x: 0.7,
                        y: 0.4,
                        r: 1,
                        colorStops: [{
                            offset: 0, color: '#E55125' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(229, 81, 37, 0.2)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }, 
                    {
                        type: 'radial',
                        x: 0.8,
                        y: 0.5,
                        r: 1,
                        colorStops: [{
                            offset: 0, color: '#5EA6FE' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(94, 166, 254, 0.2)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }, 
                    {
                        type: 'radial',
                        x: 0.54,
                        y: 0.8,
                        r: 1,
                        colorStops: [{
                            offset: 0, color: '#FC92F7' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(252, 146, 247, 0.2)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }, 
                    {
                        type: 'radial',
                        x: 0.42,
                        y: 0.6,
                        r: 1,
                        colorStops: [{
                            offset: 0, color: '#67D670' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(103, 214, 112, 0.2)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }, 
                    {
                        type: 'radial',
                        x: 0.06,
                        y: 0.52,
                        r: 1.2,
                        colorStops: [{
                            offset: 0, color: '#36FFF8' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(54, 255, 248, 0.2)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }],
            startAngle: 160,
            radius : [90, 142],
            roseType : 'radius',
            label: {
              formatter: (params)=>{
                  console.log(params.dataIndex)
                return '{color'+params.dataIndex+'|'+params.data.value+'% }';
              },
              rich: {
                  color0: {
                        fontSize: 18,
                        fontWeight: 400,
                        fontFamily: 'PingFangSC',
                        color: '#EEEC0D',
                        padding: [0, 6]
                  },
                  color1: {
                       fontSize: 18,
                        fontWeight: 400,
                        fontFamily: 'PingFangSC',
                        color: '#E55125',
                        padding: [0, 6]
                  },
                  color2: {
                       fontSize: 18,
                        fontWeight: 400,
                        fontFamily: 'PingFangSC',
                        color: '#5EA6FE',
                        padding: [0, 6]
                  },
                  color3: {
                       fontSize: 18,
                        fontWeight: 400,
                        fontFamily: 'PingFangSC',
                        color: '#F94ED2',
                        padding: [0, 6]
                  },
                  color4: {
                       fontSize: 18,
                        fontWeight: 400,
                        fontFamily: 'PingFangSC',
                        color: '#67D670',
                        padding: [0, 6]
                  },
                  color5: {
                       fontSize: 18,
                        fontWeight: 400,
                        fontFamily: 'PingFangSC',
                        color: '#67FFFC',
                        padding: [0, 6]
                  }
              }
            },
            labelLine: {
                show: true,
            },
            data: [
                {
                    value:28, name:'酒后代驾',
                    labelLine: {
                        lineStyle: {
                            color: colors[0]
                        }
                    },
                    itemStyle: {
                    }
                },
                {
                    value:22, name:'高铁接送',
                    labelLine: {
                        lineStyle: {
                            color: colors[1]
                        }
                    }
                },
                {
                    value:16, name:'道路救援',
                    labelLine: {
                        lineStyle: {
                            color: colors[2]
                        }
                    }
                },
                {
                    value:20, name:'年检代办',
                    labelLine: {
                        lineStyle: {
                            color: colors[3]
                        }
                    }
                },
                {
                    value:14, name:'其他',
                    labelLine: {
                        lineStyle: {
                            color: colors[4]
                        }
                    }
                },
                {
                    value:16, name:'机场接送',
                    labelLine: {
                        lineStyle: {
                            color: colors[5]
                        }
                    }
                }
            ]
        }
    ]
};
