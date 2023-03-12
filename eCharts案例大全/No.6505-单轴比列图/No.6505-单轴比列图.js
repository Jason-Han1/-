option = {
    backgroundColor:'#fff',
    tooltip: {
        show: false,
        formatter: "{b} <br> {c}%"

    },
    xAxis: [{
        type :'value',
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false,
        }
    }],
    yAxis: [{
        type: 'category',
        data: [''],
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
            }
        },

    }],
    series: [
        {
            name:'在线',
            type:'bar',
            barWidth:30,
            stack: '监测站点',
            label: {
                normal: {
                    distance: 3,
                    align: 'center',
                    verticalAlign: 'middle',
                    borderRadius: 1, 
                    show: true,
                    position: 'top',
                    formatter: '{name|{a}}\n\n\n{value|{c}}',
                    textStyle: {
                rich: {
                  name: {
                    fontSize: "12",
                    borderRadius: 1,
                    borderWidth: 10,
                    borderColor: '#5292FF',
                    backgroundColor: '#5292FF',
                    fontWeight: 500,
                    color: "#fff",
                  },
                  value: {
                    fontSize: "12",
                    fontWeight: 500,
                    color: "#fff",
                  }
                },
              },
                }
            },
            itemStyle: {
                color: '#5292FF',
                barBorderRadius: [5,0,0,5],
            },
            data:[{
                value:84,
                itemStyle: {
                normal: {
                    color: {
                        type: 'bar',
                        colorStops: [{
                            offset: 0,
                            color: '#5292FF' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#5292FF' // 100% 处的颜色
                        }],
                        globalCoord: false, // 缺省为 false

                    }
                }
            }
            }]
        },
        {
            name:'离线',
            type:'bar',
            barWidth:30,
            stack: '监测站点',
            itemStyle: {
                color: '#D0D7DF',
                barBorderRadius : [
            0,
            5,
            5,
            0,
          ],
            },
            
            label: {
                normal: {
                    distance: 3,
                    align: 'center',
                    verticalAlign: 'middle',
                    show: true,
                    position: 'top', 
                    formatter: '{name|{a}}\n\n\n{value|{c}}',
                    
                    textStyle: {
                rich: {
                  name: {
                    fontSize: "12",
                    borderRadius: 1,
                    borderWidth: 10,
                    borderColor: '#D0D7DF',
                    backgroundColor: '#D0D7DF',
                    fontWeight: 500,
                    color: "#fff",
                  },
                  value: {
                    fontSize: "12",
                    fontWeight: 500,
                    color: "#fff",
                  }
                },
              },
                }
            },
            data:[{
                value:16,
                itemStyle: {
                normal: {
                    color: {
                        type: 'bar',
                        colorStops: [{
                            offset: 0,
                            color: '#D0D7DF' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#D0D7DF' // 100% 处的颜色
                        }],
                        globalCoord: false, // 缺省为 false

                    }
                }
            }
            }]
        },
    ]
};