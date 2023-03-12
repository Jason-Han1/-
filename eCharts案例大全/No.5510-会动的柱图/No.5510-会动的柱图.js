var xData = function() {
    var data = [];
    for (var i =1; i < 8; i++) {
        data.push(i + "");
    }
    return data;
  }();

option = {
animationDuration: function (idx) {
    // 越往后的数据时长越大
    return idx * 10000;
},
      "tooltip": {
          "trigger": "axis",
          "axisPointer": {
              "type": "shadow",
              textStyle: {
                  color: "#fff"
              }
  
          },
      },
    "grid": {
        "borderWidth": 0,
        "top": 110,
        "bottom": 75,
        textStyle: {
            color: "#fff"
        }
    },
    "legend": {
        x: '4%',
        top: 45,
        textStyle: {
            color: '#fff',
        },
    },
  
  
    "calculable": true,
    "xAxis": [
        {
        "type": "category",
        "axisLine": {
            lineStyle: {
              color: 'rgba(47,123,251,1)'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
            textStyle: {
              color: '#fff',
              fontWeight: 'normal',
              fontSize: '12',
          },
  
        },
        "data": xData,
    },
    {
      type: 'category',
      axisLine: {
          show:false
      },
      axisTick: {
          show: false
      },
      axisLabel: {
          show: false
      },
      splitArea: {
          show: false
      },
      splitLine: {
          show: false
      },
  
  },
    {
      type: 'category',
      axisLine: {
          show:false
      },
      axisTick: {
          show: false
      },
      axisLabel: {
          show: false
      },
      splitArea: {
          show: false
      },
      splitLine: {
          show: false
      },
  
  }
  ],
    "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            lineStyle: {
                color: 'rgba(47,123,251,1)'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
            textStyle: {
              color: '#fff',
              fontWeight: 'normal',
              fontSize: '12',
          },
           
        },
        "splitArea": {
            "show": false
        },
  
    }],
    "series": [
        
        {
          "name": "昨日额定产能",
          "type": "bar",
          stack: "今日", 
          barWidth: 13,
          "barMaxWidth": 20,
        "itemStyle": {
            "normal": {
              color: "rgb(47,123,251)",
                "label": {
                    "show": false,
                    "textStyle": {
                        "color": "#fff"
                    },
                    "position": "insideTop",
                    formatter: function(p) {
                        return p.value > 0 ? (p.value) : '';
                    }
                }
            }
        },
        "label": {
          "show": false,
          "position": "top",
          formatter: function(p) {
              return p.value > 0 ? (p.value) : '';
          }
      },
      z:6,
        "data": [
           19,
          33,
          15,
          16,
          22,
          22,
          12,
          
        ],
    },
    {
      "name": "昨日计划产能",
      "type": "bar",
        stack: "产能",
        xAxisIndex: 1,
      //   barGap: '-100%',
        barWidth: 13,
        "itemStyle": {
            show: true,
            "normal": {
              color: "rgba(0,216,191,1)",
              
            }
        },
        "label": {
          "show": true,
          align:'right',
          "position": "top",
          formatter: function(p) {
                //  return(series[0].data[p.dataIndex] +'/'+p.value) 
                 return(p.value +'/'+p.value) 
          }
      },
        "data": [                                      
            29,
              43,
              25,
              26,
              32,
              32,
              22,
            
             
        ]
    }, 
        {
          "name": "昨日实际产能",
          "type": "line",
          symbolSize:10,
          symbol:'circle',
            "itemStyle": {
                "normal": {
                    color: "rgba(136,161,204,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            z:6,
            "data": [
                 98,
              99,
              91,
              91,
              98,
              99,
              96,
             
             
            ]
        },
        {
          "name": "今日额定产能",
          "type": "bar",
          // stack: "产能", 
          barWidth: 13,
          z:6,
          "barMaxWidth": 20,
          // "barGap": "10%",
        "itemStyle": {
            "normal": {
              color: "rgba(14,29,232,1)",
                // "label": {
                //     "show": false,
                //     "textStyle": {
                //         "color": "#fff"
                //     },
                //     "position": "insideTop",
                //     formatter: function(p) {
                //         return p.value > 0 ? (p.value) : '';
                //     }
                // }
            },
  
        },
        "label": {
          "show": false,
          "textStyle": {
              "color": "#fff"
          },
          "position": "insideTop",
          formatter: function(p) {
              return p.value > 0 ? (p.value) : '';
          }
      }, 
   
        "data": [
           19,
          33,
          15,
          16,
          22,
          22,
          12,
         
          
        ],
    },
  
        {
          "name": "今日计划产能",
          "type": "bar",
           xAxisIndex: 1,
           barWidth: 13,
          // "stack": "定额总量",
            "itemStyle": {
                "normal": {
                  color: "rgba(64,171,211,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return(p.value +'/'+p.value) 
                        }
                    }
                }
            },
            "data": [
              39,
              53,
              35,
              36,
              42,
              42,
              32,
             
             
            ]
        }, 
        {
          "name": "今日实际产能",
          "type": "line",
          
          symbolSize:10,
          symbol:'circle',
            "itemStyle": {
                "normal": {
                  color: "#3361d8",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            z:6,
            "data": [
               68,
              79,
              61,
              71,
              68,
              79,
              76,
             
             
           
            ]
        },
    ]
   
};
             
       option.timeTicket = setInterval(function(){
                 var data0 =  option.series[0].data;
                 var data1 =  option.series[1].data;
                 var data2 =  option.series[2].data;
                 var data3 =  option.series[3].data;
                 var data4 =  option.series[4].data;
                 var data5 =  option.series[5].data;
                 var kk =     option.xAxis[0].data;
                var p1 = data0.shift();
                data0.push(p1);

                var p2 = data1.shift();
                data1.push(p2);

                var p3 = data2.shift();
                data2.push(p3);

                var p4 = data3.shift();
                data3.push(p2);

                var p5 = data4.shift();
                data4.push(p5);

                var p6 = data5.shift();
                data5.push(p6);

                var k1 = kk.shift();
                kk.push(k1);

                // var k2 = qq .shift();
                // kk.push(k2);
              myChart.setOption(option);
         },10000)