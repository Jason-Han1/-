var uploadedDataURLy = "/asset/get/s/data-1626583899497-Vob08IkMT.png";

var uploadedDataURL = "/asset/get/s/data-1626583870218-OV2xM4qmR.png";


option = {
    backgroundColor: '#010f1c',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            },
        }
    },
    legend: {
        itemWidth: 20,
         itemHeight: 20,
         data: [
                    {name:'进入', icon:'image://'+uploadedDataURL},
                    {name:'外出', icon:'image://'+uploadedDataURLy}
                ],
        textStyle: {
            fontSize: 12, //字体大小
            color: '#a4dafe', //字体颜色
        },
        right: '3%' //距离右侧
    },
    grid: {
        left: '3%',
        top: '10%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisTick: {
            show: false
        },
        axisLine: {

            lineStyle: {
                color: '#242a3c'
            }
        },
        axisLabel: {
            interval: 0, //设置x轴的标签显示可自适应
            show: true,
            textStyle: {
                color: '#9097a5'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#242a3c'],
                width: 1,
                type: 'solid'
            }
        },
        //                                                                 
        data: ['1月', '2月', '3月', '4月 ', '5月', ' 6月', ' 7月' ]

    }],
    yAxis: [{
        type: 'value',
       
        axisTick: {
            show: false
        },
        axisLine: {
            show: true, //y轴线
            lineStyle: {
                color: '#242a3c'
            }
        },
        axisLabel: {
            // margin: 10,
            textStyle: {
                fontSize: 12,
                color: '#9097a5',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#242a3c'],
                width: 1,
                type: 'solid'
            }
        },


    }],
    series: [{
            name: '进入',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 2,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2,
                    color: '#1ee0e4',
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0,192,255,0.4)'
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(0,192,255,0.4)'
                        },
                        {
                            offset: 0.8,
                            color: 'transparent'
                        }
                    ], false),
                    // shadowColor: 'rgba(232,246,254,0.2)',
                    shadowBlur: 30
                }
            },
            itemStyle: {
                normal: {
                    color: '#1ee0e4',
                    borderColor: '#1ee0e4',
                    borderWidth: 0

                }
            },
            
            data: [50, 80, 40, 90, 60, 80, 50],
        },
        {
            name: '外出',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 2,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2,
                    color: '#eeda48',
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(238,218,72,0.4)'
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(238,218,72,0.4)'
                        },
                        {
                            offset: 0.8,
                            color: 'transparent'
                        }
                    ], false),
                    // shadowColor: 'rgba(232,246,254,0.2)',
                    shadowBlur: 30
                }
            },
            itemStyle: {
                normal: {
                    color: '#eeda48',
                    borderColor: '#eeda48',
                    borderWidth: 0

                }
            },
           
             data: [41, 71, 38, 79, 40, 68, 50,],
        },

    ]
}