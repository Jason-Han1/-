let lineData = [100, 160, 110, 200, 200, 220, 190 ];
let lineData2 = [80, 120, 100, 180, 160, 230, 160 ]
let xAxisData =  ['1', '2', '3', '4', '5', '6', '7']
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

    grid: {
        left: '3%',
        top: '5%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    legend: {
         icon: 'Rect',
         orient: 'horizontal',
         itemWidth:20,
         itemHeight:3,
         textStyle: {
             fontSize: 12, //字体大小
             color: '#e8f7ff', //字体颜色
         },
         right: '3%' //距离右侧
     },
    xAxis: [{
        type: 'category',
        
        boundaryGap: false,
        axisTick: {
            show: false,

            
        },
        axisLine: {

            lineStyle: {
                color: '#376487'
            }
        },
        axisLabel: {
            interval: 0, //设置x轴的标签显示可自适应
            show: true,
            textStyle: {
                color: '#d1d1d1'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#376487'
            }
        },
        data:xAxisData

    }],
    yAxis: [{
        type: 'value',
        name: '单位 / 人',
        nameGap:10,
        nameTextStyle: { //y轴上方单位的颜色
            color: '#d1d1d1'
        },
        axisTick: {
            show: false,
            
        },
        axisLine: {
            show: true, //y轴线
            lineStyle: {
                color: '#376487'
            }
        },
        axisLabel: {
            textStyle: {
                fontSize: 12,
                fontFamily:'',
                color: '#d1d1d1',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#376487'
            }
        },


    }],
    series: [
        {
            name: '进入',
            type: 'line',
            symbol: 'circle',
            symbolSize: 2,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2,
                    color: '#06bcff',
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(6,188,255,0.4)'
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(6,188,255,0.4)'
                        },
                        {
                            offset: 0.8,
                            color: 'rgba(6,188,255,0.2)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(6,188,255,0)'
                        }
                    ], false),
                    // shadowColor: 'rgba(232,246,254,0.2)',
                    shadowBlur: 30
                }
            },
            itemStyle: {
                normal: {
                    color: '#06bcff',
                    borderColor: '#06bcff',
                    borderWidth: 0

                }
            },

            data:lineData ,
        },
        {
            name: '离开',
            type: 'line',
            symbol: 'circle',
            symbolSize: 2,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2,
                    color: '#f7a257',
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(247,162,87,0.4)'
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(247,162,87,0.4)'
                        },
                        {
                            offset: 0.8,
                            color: 'rgba(247,162,87,0.2)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(247,162,87,0)'
                        }
                    ], false),
                    // shadowColor: 'rgba(232,246,254,0.2)',
                    shadowBlur: 30
                }
            },
            itemStyle: {
                normal: {
                    color: '#f7a257',
                    borderColor: '#f7a257',
                    borderWidth: 0

                }
            },

            data:lineData2 ,
        },


    ]
}