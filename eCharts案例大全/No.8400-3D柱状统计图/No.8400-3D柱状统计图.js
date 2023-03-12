var colors = [{
    type: 'linear',
    x: 0,
    x2: 0,
    y: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#27f7fa'
    }, {
        offset: 0.5,
        color: '#27f7fa'
    }, {
        offset: 0.5,
        color: '#23c3e2dd'
    }, {
        offset: 1,
        color: '#23c3e2dd'
    }]
}, {
    type: 'linear',
    x: 0,
    x2: 0,
    y: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#7153d3aa'
    }, {
        offset: 0.5,
        color: '#7153d3aa'
    }, {
        offset: 0.5,
        color: '#352a6b'
    }, {
        offset: 1,
        color: '#352a6b'
    }]
}];


var barWidth = 30;

option = {
          title: {
            text: 'Awesome Chart'
          },
          xAxis: [{
            axisLabel: {
              show: true,
              textStyle: {
                color: '#3F60EA' // X轴文字颜色
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#3F60EA'
              }
            },
            splitLine: {
              show: false
            },
          },{
            type: 'value',
            gridIndex: 0,
            min: 50,
            max: 100,
            splitNumber: 8,
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitArea: {
              show: true,
              areaStyle: {
                color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
              }
            }
          }],
          yAxis: [{
            data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            axisLabel: {
              show: true,
              textStyle: {
                color: '#3F60EA'
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#3F60EA'
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: true
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#3F60EA'
              }
            }
          }],
          series: [{
            "name": "",
            "type": "pictorialBar",
            "symbolSize": [10, 20],
            "symbolOffset": [5, 0],
            "symbolPosition": "end",
            "z": 12,
            "label": {
              "normal": {
                "show": true,
                "position": "right",
                "formatter": "{c}%"
              }
            },
            "data": [60, 70, 80, 90, 60, 70, 80],
            "itemStyle": {
              "normal": {
                "opacity": 3.7,
                color:'#4589af'
              }
            }
          }, {
            "name": "",
            "type": "pictorialBar",
            "symbolSize": [10, 20],
            "symbolOffset": [-5, 0],
            "z": 12,
            "data": [60, 70, 80, 90, 60, 70, 80],
            "itemStyle": {
              "normal": {
                "opacity": 3.7,
                color:'#54a7d5'
              }
            }
          }, {
            "type": "bar",
            "itemStyle": {
              "normal": {
                "opacity": 3.7,
                color:'#56BDEC'
              }
            },
            "barWidth": "20",
            "data": [60, 70, 80, 90, 60, 70, 80],
            "markLine": {
              "silent": true,
              "symbol": "none",
              "label": {
                "position": "middle",
                "formatter": "{b}"
              },
              "data": [{
                "name": "目标值",
                "yAxis": 70,
                "lineStyle": {
                  "color": "#ffc832"
                },
                "label": {
                  "position": "end",
                  "formatter": "{b}\n {c}%"
                }
              }]
            }
          }]
        }