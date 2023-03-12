option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle:{
                type:'dashed'
            }
        },
         formatter: function(params) {
            // console.log(params);
                return (
                  params[0].name +
                  "<br/>" +
                  params[0].seriesName +
                  " : " +
                  params[0].value +
                  "%" +
                  "<br/>" +
                  params[1].seriesName +
                  " : " +
                  params[1].value +
                  "%"
                );
              
          }
    },
    legend: {
        data: ['参与率', '正确率'],
    },
    grid: {
        top: 'middle',
        left: '3%',
        right: '4%',
        bottom: '3%',
        height: '80%',
        containLabel: true
    },
    toolbox: {
        show: true,
    },
    xAxis: [{
        data: ['2019-7-1', '2019-7-2', '2019-7-3', '2019-7-4', '2019-7-5', '2019-7-6', '2019-7-7'],
        axisLine: {
            show: false,
            lineStyle: {
                color: '#999' //Y轴颜色
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
            }
        },
    }],
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} %'
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#999' //Y轴颜色
            }
        },
        splitLine: {
            lineStyle: {
                
                type: 'dashed',
            }
        },
        axisTick: {
            show: false
        },
    },
    series: [{
            name: '参与率',
            type: 'line',
            min: 10,
            max: 40,
            data: [32, 34, 39, 35, 38, 36, 100],
            itemStyle: {
                normal: {
                    color: '#5C8EF2',
                }
            },
            lineStyle:{
                normal: {
                     width: 3,
                }
            },
            smooth: true,
        },
        {
            name: '正确率',
            type: 'line',
            min: 10,
            max: 40,
            data: [25, 22, 26, 28, 27, 26, 23],
            itemStyle: {
                normal: {
                    width:3,
                    color: '#FFAC36',
                    // borderWidth: 4,
                }
            },
            lineStyle:{
                normal: {
                     width: 3,
                }
            },
            smooth: true,
        }
    ]
};