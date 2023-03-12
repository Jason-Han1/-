
option = {
     legend: {
        right: '15',
        top: '20',
        textStyle: {
            color: '#666',
            fontSize: 13,
        },
        itemWidth: 22,
        itemHeight: 14,
        itemGap: 12,
        icon: 'circle',
        data: [{
            name: '预发',
            icon: 'circle'
        }, {
            name: '生产',
            icon: 'circle' 
        },
        {
            name: '峰值',
            icon:'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7'
        }]
        // data: ['预发', '生产','峰值']

    },
    backgroundColor: '#fff',
    // color: [new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
    //     offset: 0,
    //     color: "#13ace8"
    // }, {
    //     offset: 1,
    //     color: "#0167e8"
    // }], false)],
    grid: {
        left: '8%',
        right: '10%',
        top: '12%',
        bottom: '18%',
        containLabel: true
    },
    
    yAxis: [{
        data: ["预发", "生产"],
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#ccc',
            }
        },
        axisLabel: {
            show: true,
            color: "#ccc",
            fontSize: 18
        },


    }],
    xAxis: [{
        axisTick: {
            show: false
        },
        type: 'value',
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            color: '#ccc'
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed'
            }
        }
    }, ],
    series: [{
        name: '预发',
        type: 'bar',
        barWidth: 15,
        yAxisIndex: 0,
        label: {
            normal: {
                show: false,
                position: 'right',
                textStyle: {
                    color: "#ccc",
                    fontSize: 14
                }
            }
        },
       
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{


                     // 0% 处的颜色   
                    offset: 0, color: '#EAB1F1'  },
                   {
                    
                    // 100% 处的颜色
                   offset: 1, color: '#CD74D2' 
                  }], false),
                barBorderRadius: [0, 5, 5, 0],
            }
        },
        data: [50, 0],
        z: 2,
    }, 
    {
        name: '生产',
        type: 'bar',
        barWidth: 15,
        yAxisIndex: 0,
         barGap: '-100%',
        label: {
            normal: {
                show: false,
                position: 'right',
                textStyle: {
                    color: "#ccc",
                    fontSize: 14
                }
            }
        },
        itemStyle: {
            normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{


                     // 0% 处的颜色   
                    offset: 0, color: '#7AC1FF '  },
                   {
                    
                    // 100% 处的颜色
                   offset: 1, color: '#5396FF' 
                  }], false),
                barBorderRadius: [0, 5, 5, 0],
            }
        },
        data: [0, 60],
         z: 2,
    },
    {
         name: '峰值',
         type: 'bar',
         stack: 'b',
         yAxisIndex: 0,
          barGap: '-100%',
         barWidth: 15,
         data: [100, 200],
         label: {
             normal: {
                 show: true,
                 position: 'right',
                 distance: 10,
                 formatter: function(param) {
                     return param.value
                 },
                 textStyle: {
                     color: '#ccc',
                     fontSize: '16'
                 }
             }
         },
         itemStyle: {
             normal: {
                 color: '#fff'
             }
         },
         z: 1
     }, 
     ]
};