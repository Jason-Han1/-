
option = {
    title: {
        text: 'Awesome Chart'
    },
    tooltip: {
        trigger: 'axis',
        hideDelay: 0,
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        textStyle: {
          color: '#333'
        },
        enterable: true,
        confine: true,
        extraCssText: 'overflow-y: auto; box-shadow: 0 2px 20px rgba(0,0,0,.2);'
      },
    xAxis: {
          name: null,
          type: 'category',
          nameTextStyle: {
            color: '#666',
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: '#666'
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#EAEAEA'],
              width: 1,
            }
          },
          // data: xAxisData
        },
    yAxis: {},
     dataZoom: [{
        type: 'inside',
        // start: startValue,
        // end: endValue,
        xAxisIndex: 0,
      }, {      
        height: '26px',          
        start: 0,
        end: 0,
        xAxisIndex: 0,        
        handleSize: '80%',
        showDetail: true,
        fillerColor: 'rgba(193, 178, 152, 0.4)',
        dataBackground: {
          lineStyle: {
            color: '#EC808D'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#EC808D'
            }, {
              offset: 1,
              color: '#FFF'
            }])
          }
        },
        handleStyle: {
          color: '#C4B295',            
          shadowBlur: 3,
          shadowColor: 'rgba(0, 0, 0, 0.6)',
          shadowOffsetX: 2,
          shadowOffsetY: 2,
        },
      }],
    series: [
        {
        type: 'line',
        data:[
            ["2019-05-14", 1.0889],
            ["2019-06-03", 1.0899],
            ["2019-06-04", 1.0899],
            ["2019-06-05", 1.0899],
            ["2019-06-06", 1.0907],
            ["2019-06-10", 1.0907],
            ["2019-06-11", 1.0907],
            ["2019-06-12", 1.0907],
            ["2019-06-13", 1.0907],
            ["2019-06-14", 1.0969],
            ["2019-07-01", 1.1136],
            ["2019-07-02", 1.1136],
            ["2019-07-03", 1.1136],
            ["2019-07-04", 1.1136],
            ["2019-07-05", 1.1182],
            ["2019-07-08", 1.1182],
            ["2019-07-09", 1.1182],
            ["2019-07-10", 1.1182],
            ["2019-07-11", 1.1182],
            ["2019-07-12", 1.1154],
        ]
      },
    {
        type: 'line',
        data: [
            ["2019-06-18", 1.2079],
            ["2019-06-19", 1.2206],
            ["2019-06-20", 1.2471],
            ["2019-06-21", 1.242],
            ["2019-06-24", 1.2468],
            ["2019-06-25", 1.2392],
            ["2019-06-26", 1.2387],
            ["2019-06-27", 1.2477],
            ["2019-06-28", 1.2493],
            ["2019-07-01", 1.2614],
            ["2019-07-02", 1.2614],
            ["2019-07-03", 1.2582],
            ["2019-07-04", 1.2555],
            ["2019-07-05", 1.2566],
            ["2019-07-08", 1.2407],
            ["2019-07-09", 1.2371],
            ["2019-07-10", 1.2361],
            ["2019-07-11", 1.2364],
            ["2019-07-12", 1.2398],
        ]
      }
    ]
};