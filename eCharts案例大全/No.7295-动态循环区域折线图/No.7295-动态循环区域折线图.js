option = {
     backgroundColor:'#0D246F',
    tooltip: {
        // backgroundColor: 'rgba(0,0,0,0.6)',
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#fff'
            }
        }
    },
    legend: {
        // icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['月计划供气量', '月实际用气量', '月供气量'],
        right: '10px',
        top: '0px',
        textStyle: {
            fontSize: 12,
            color: '#67ADE8'
        }
    },
    grid: {
        left: '10%',
        top: '30',
        x: 35,
        y: 25,
        x2: 8,
        y2: 25,
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                show: false,
                color: '#114482'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#67ADE8',
                fontSize: 14,
            },
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月']
    }],
    yAxis: [{
        type: 'value',
        name:'m³',
        axisTick: {
            // show: true
        },
         nameTextStyle: {
            color: "#ccc"
        },
        axisLine: {
            lineStyle: {
                show: false,

                color: '#114482'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14,
                color: '#67ADE8',
            },
           
        },
         splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#114482'
            }
        },
    }],
    series: [{
        name: '月计划供气量',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(137, 189, 27, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(137, 189, 27, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: '#24FEE6'
            }
        },
        data: [134, 145, 152, 141, 149, 164, 124]
    }, {
        name: '月实际用气量',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 136, 212, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 136, 212, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: '#F73065'
            }
        },
        data: [37.3, 29.2, 49.3, 90.0, 79.6, 20.6, 60.0]
    }, {
        name: '月供气量',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(219, 50, 51, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(219, 50, 51, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: '#2ADAFF'
            }
        },
        data: [84.2, 81.0, 67.5, 62.1, 43.7, 68.5, 51.9]
    },]
};
 var app = {
        currentIndex: -1,
      };
      setInterval(function () {
        var dataLen = option.series[0].data.length;

        // 取消之前高亮的图形
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: app.currentIndex
        });
        app.currentIndex = (app.currentIndex + 1) % dataLen;
        //console.log(app.currentIndex);
        // 高亮当前图形
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: app.currentIndex,
        });
        // 显示 tooltip
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: app.currentIndex
        });


      }, 1000);