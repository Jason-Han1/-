  var seriesName = '';
option = {

    title: {
        // text: '分所销售水量占比',
        top: '5%',
        left: 'center',
        textStyle: {
            color: '#FFF',
            align: 'center',
        }
    },
    grid: {
        left: "5%",
        //   right: "2%",
        bottom: "5%",
        top: "15%",
        containLabel: true
    },
    xAxis: {
        type: "category",
          boundaryGap:  true,
        data: ['06.20', '06.21', '06.22', '06.23', '06.24', '06.25', '06.26'],
        show: true,
        axisLabel: {
            // show: true,
            textStyle: {
                color: "#8c8c8c",
                fontSize:10
            }
        },
        axisLine: {
            lineStyle: {
                color: '#8c8c8c',
                
            }
        },
        axisTick: {
            show: true,
            alignWithLabel: true,
        },
    },
    tooltip: {
        show: true,
        trigger: 'item',
        backgroundColor: '#FFF',
        textStyle: {
            color:'#000',
        },
    },
    yAxis: [{
        type: 'value',
        // name: '立方米',
        min: 0,
        max: 500,
        axisLabel: {
            textStyle: {
                color: '#8c8c8c',
                fontSize:10
            }
        },
        axisLine: {
            lineStyle: {    
              color: 'transparent',
            }
        },

        splitLine: {
            show: true,
            lineStyle: {
                color: '#B4B3C0',
                type: "dashed"
            }
        }
    }],
    series: [{
        name:seriesName,
        type: 'line',
        stack: '总量',
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
            normal: {
                color: '#1890FF',
                lineStyle: {
                    color: "#0092f6",
                    width: 2
                },
                areaStyle: {
                    //color: '#94C9EC'
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: 'rgba(7,44,90,0.1)'
                    }, {
                        offset: 1,
                        color: 'rgba(0,146,246,0.9)'
                    }]),
                }
            }
        },
        markPoint: {
            itemStyle: {
                normal: {
                    color: 'red'
                }
            }
        },
        data:[150, 200, 200, 200, 300, 400,500], 
    }, ]
};