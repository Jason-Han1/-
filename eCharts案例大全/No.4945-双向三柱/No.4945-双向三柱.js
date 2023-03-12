option = {
    "数据节点1": 60,
    "数据节点2": 80,
    color:["rgba(15,198,255,","rgba(0,218,242,","rgba(165,224,232,"],
    "baseOption": {
    "backgroundColor": '#080b30',
        "title": [{
                "x": "60%",
                "y": "2%",
                "textAlign": "center",
                "text": "LAST",
                "textStyle": {
                    "color": "rgba(171, 253, 254, 1)",
                    "fontSize": 20
                }
            },
            {
                "x": "38%",
                "y": "2%",
                "textAlign": "center",
                "text": "TOP",
                "textStyle": {
                    "color": "rgba(171, 253, 254, 1)",
                    "fontSize": 20
                }
            }
        ],
        "timeline": {
            "show": false,
            "top": 0,
            "data": []
        },
        "grid": [{
                "show": false,
                "left": "5%",
                "top": "10%",
                "bottom": "8%",
                "containLabel": true,
                "width": "37%"
            },
            {
                "show": false,
                "left": "51%",
                "top": "11%",
                "bottom": "8%",
                "width": "0%"
            },
            {
                "show": false,
                "right": "7%",
                "top": "10%",
                "bottom": "8%",
                "containLabel": true,
                "width": "37%"
            }
        ],
        "xAxis": [{
                "type": "value",
                "inverse": true,
                "axisLine": {
                    "show": false
                },
                "axisTick": {
                    "show": false
                },
                "position": "top",
                "axisLabel": {
                    "show": true,
                    formatter: function(value) {
                        return value + "%"
                    },
                    color:"#fff"
                },
                "splitLine": {
                    "show": true,
                    lineStyle:{
                        color:"rgba(255,255,255,0.5)"
                    }
                }
            },
            {
                "gridIndex": 1,
                "show": false
            },
            {
                "gridIndex": 2,
                "axisLine": {
                    "show": false
                },
                "axisTick": {
                    "show": false
                },
                "position": "top",
                "axisLabel": {
                    "show": true,
                    formatter: function(value) {
                        return value + "%"
                    },
                    color:"#fff"
                },
                "splitLine": {
                    "show": true,
                    lineStyle:{
                        color:"rgba(255,255,255,0.5)"
                    }
                }
            }
        ],
        "yAxis": [{
                "type": "category",
                "inverse": true,
                "position": "right",
                "axisLine": {
                    "show": false
                },
                "axisTick": {
                    "show": false
                },
                "axisLabel": {
                    "show": false
                },
                "data": [
                    "波司登CMT",
                    "波司登ODM",
                    "雪冰(童)"
                ]
            },
            {
                "gridIndex": 1,
                "type": "category",
                "inverse": true,
                "position": "center",
                "axisLine": {
                    "show": false
                },
                "axisTick": {
                    "show": false
                },
                "axisLabel": {
                    "show": true,
                    "padding": [
                        20,
                        0,
                        0,
                        0
                    ],
                    "textStyle": {
                        "color": "#ffffff",
                        "fontSize": 20
                    },
                    "align": "center"
                },
                "data": [
                    "波司登CMT",
                    "波司登ODM",
                    "雪冰(童)"
                ]
            },
            {
                "gridIndex": 2,
                "type": "category",
                "inverse": true,
                "position": "left",
                "axisLine": {
                    "show": false
                },
                "axisTick": {
                    "show": false
                },
                "axisLabel": {
                    "show": false
                },
                "data": [
                    "波司登CMT",
                    "波司登ODM",
                    "雪冰(童)"
                ]
            }
        ],
         tooltip: {
                    show: true,
                    trigger: 'axis',
                    //formatter: '{b}<br/>{a}: {c}人',
                    axisPointer: {
                        type: 'shadow',
                    },
                     "borderWidth": 1,
    "borderColor": "rgba(63, 212, 255, 1)",
    "backgroundColor": "rgba(9, 17, 32, 1)",
     formatter: function (params, ticket, callback) {
         console.log(params);
          var htmlStr = '';
          let m=0;
          for(var i=0;i<params.length;i=i+2){
              m++;
         var param = params[i];
         var xName = param.name;//x轴的名称
         var seriesName = param.seriesName;//图例名称
         var value = param.value;//y轴值
         var color = param.color;//图例颜色
         if(i===0){
           htmlStr += xName + '<br/>';//x轴的名称
         }
        //  console.log(params.length);
        //  console.log(value[7]);
         htmlStr +='<div>';
         //为了保证和原来的效果一样，这里自己实现了一个点的效果
         htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:'+color.colorStops[0].color+';"></span>';
         //圆点后面显示的文本
         //htmlStr += seriesName + '：' + value;
         if(params[0].axisIndex==0){
         htmlStr += params[0].data[i+8-m] + '：' + params[0].data[m]+ '<br/>';
         }else{
         htmlStr += params[0].data[i+8-m] + '：' + params[0].data[3+m]+ '<br/>';
             
         }
         
         htmlStr += '</div>';
          }
          return htmlStr;
                 }
                },
        "series": []
    },
    "options": [{
        "series": [{
                "type": "bar",
                "barWidth": "10%",
                stack: "1",
                "xAxisIndex": 0,
                "yAxisIndex": 0,
                "itemStyle": {
                    "normal": {
                        "color":function color(params){
                                let color={
                                    
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            colorStops: [{
                                offset: 0,
                                color: option.color[0]+"0.8)" // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: option.color[0]+"0)"  // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                                }
                                return color
                            }

                    }
                },
                "label": {
                    "normal": {
                        "show": false,
                        "position": "left",
                        "color": "#fff",
                        "offset": [
                            2,
                            0
                        ]
                    }
                },
                "animationEasing": "elasticOut"
            },
            {
                type: "bar",
                barWidth: 25,
                stack: "1",
                itemStyle: {
                    normal: {
                        color: function color(params){
                            return option.color[0]+"1)"
                        }

                    }
                },
                data: [2,2,2]
            },
            {
                "type": "bar",
                "barWidth": "10%",
                stack: "2",
                "xAxisIndex": 0,
                "yAxisIndex": 0,
                "itemStyle": {
                    "normal": {
                         "color":function color(params){
                                let color={
                                    
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            colorStops: [{
                                offset: 0,
                                color: option.color[1]+"0.8)" // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: option.color[1]+"0)"  // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                                }
                                return color
                            }

                    }
                },
                "label": {
                    "normal": {
                        "show": false,
                        "position": "left",
                        "color": "function color(params) {\n                  var colorList = params.value[2] <= that.option.数据节点1 ? \"#f52a76\" : params.value[2] > that.option.数据节点1 && params.value[2] <= that.option.数据节点2 ? \"#ffff00\" : \"#0ef8fe\";\n                  return colorList;\n                }",
                        "offset": [
                            2,
                            0
                        ]
                    }
                }
            },
             {
                type: "bar",
                barWidth: 25,
                stack: "2",
                itemStyle: {
                    normal: {
                        color: function color(params){
                            return option.color[1]+"1)"
                        }

                    }
                },
                data: [2,2,2]
            },
            {
                "type": "bar",
                "barWidth": "10%",
                "xAxisIndex": 0,
                "yAxisIndex": 0,
                stack: "3",
               "itemStyle": {
                    "normal": {
                          "color":function color(params){
                                let color={
                                    
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            colorStops: [{
                                offset: 0,
                                color: option.color[2]+"0.8)" // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: option.color[2]+"0)"  // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                                }
                                return color
                            }

                    }
                },
                "label": {
                    "normal": {
                        "show": false,
                        "position": "left",
                        "color": "function color(params) {\n                  var colorList = params.value[2] <= that.option.数据节点1 ? \"#f52a76\" : params.value[2] > that.option.数据节点1 && params.value[2] <= that.option.数据节点2 ? \"#ffff00\" : \"#0ef8fe\";\n                  return colorList;\n                }",
                        "offset": [
                            2,
                            0
                        ]
                    }
                }
            },
             {
                type: "bar",
                barWidth: 25,
                stack: "3",
                itemStyle: {
                    normal: {
                        color: function color(params){
                            return option.color[2]+"1)"
                        }

                    }
                },
                data: [2,2,2]
            },
            {
                "type": "bar",
                "xAxisIndex": 2,
                "yAxisIndex": 2,
                stack: "4",
                "barWidth": "10%",
                "itemStyle": {
                    "normal": {
                         "color":function color(params){
                                let color={
                                    
                            type: 'linear',
                            x: 1,
                            y: 0,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0,
                                color: option.color[0]+"0.8)" // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: option.color[0]+"0)"  // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                                }
                                return color
                            }

                    }
                },
                "label": {
                    "normal": {
                        "show": false,
                        "position": "right",
                        "color": "#fff",
                        "offset": [
                            2,
                            0
                        ]
                    }
                },
                "animationEasing": "elasticOut"
            },
              {
                type: "bar",
                barWidth: 25,
                xAxisIndex: 2,
                yAxisIndex: 2,
                stack: "4",
                itemStyle: {
                    normal: {
                        color: function color(params){
                            return option.color[0]+"1)"
                        }

                    }
                },
                data: [2,2,2]
            },
            {
                "type": "bar",
                "xAxisIndex": 2,
                "yAxisIndex": 2,
                stack: "5",
                "barWidth": "10%",
                "label": {
                    "normal": {
                        "show": false,
                        "position": "right",
                        "color": "function color(params) {\n                  var colorList = params.value[4] <= that.option.数据节点1 ? \"#f52a76\" : params.value[4] > that.option.数据节点1 && params.value[4] <= that.option.数据节点2 ? \"#ffff00\" : \"#0ef8fe\";\n                  return colorList;\n                }",
                        "offset": [
                            2,
                            0
                        ]
                    }
                },
               "itemStyle": {
                    "normal": {
                         "color":function color(params){
                                let color={
                                    
                            type: 'linear',
                            x: 1,
                            y: 0,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0,
                                color: option.color[1]+"0.8)" // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: option.color[1]+"0)"  // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                                }
                                return color
                            }

                    }
                },
            },
            {
                type: "bar",
                barWidth: 25,
                xAxisIndex: 2,
                yAxisIndex: 2,
                stack: "5",
                itemStyle: {
                    normal: {
                        color: function color(params){
                            return option.color[1]+"1)"
                        }

                    }
                },
                data: [2,2,2]
            },
            {
                "type": "bar",
                "xAxisIndex": 2,
                "yAxisIndex": 2,
                stack: "6",
                "barWidth": "10%",
                "label": {
                    "normal": {
                        "show": false,
                        "position": "right",
                        "color": "function color(params) {\n                  var colorList = params.value[4] <= that.option.数据节点1 ? \"#f52a76\" : params.value[4] > that.option.数据节点1 && params.value[4] <= that.option.数据节点2 ? \"#ffff00\" : \"#0ef8fe\";\n                  return colorList;\n                }",
                        "offset": [
                            2,
                            0
                        ]
                    }
                },
               "itemStyle": {
                    "normal": {
                          "color":function color(params){
                                let color={
                                    
                            type: 'linear',
                            x: 1,
                            y: 0,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0,
                                color: option.color[2]+"0.8)" // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: option.color[2]+"0)"  // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                                }
                                return color
                            }

                    }
                },
            },
            {
                type: "bar",
                barWidth: 25,
                xAxisIndex: 2,
                yAxisIndex: 2,
                stack: "6",
                itemStyle: {
                    normal: {
                        color: function color(params){
                            return option.color[2]+"1)"
                        }

                    }
                },
                data: [2,2,2]
            },
        ],
        "dataset": {
            "source": [
                [
                    "product",
                    "TOP1",
                    "TOP2",
                    "TOP3",
                    "LAST1",
                    "LAST2",
                    "LAST3",
                    "NAME1",
                    "NAME2",
                    "NAME3"
                ],
                [
                    "波司登CMT",
                    90,
                    20,
                    20,
                    100,
                    100,
                    30,
                    "江苏康欣1",
                    "常熟制衣1",
                    "江苏雪中1飞",
                ],
                [
                    "波司登ODM",
                    100,
                    81,
                    20,
                    100,
                    10,
                    30,
                    "江苏康欣2",
                    "常熟制衣2",
                    "江苏雪中2飞",
                ],
                [
                    "雪冰(童)",
                    100,
                    10,
                    20,
                    100,
                    100,
                    60,
                    "江苏康欣3",
                    "常熟制衣3",
                    "江苏雪中3飞",
                ]
            ]
        }
    }]
}