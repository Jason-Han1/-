option = {
    backgroundColor: 'black',
     "textStyle": {
         "color": "#fff",
         "fontSize": 13
     },
     "toolbox": {
         "show": false,
         "feature": {
             "saveAsImage": {
                 "backgroundColor": "#000"
             },
             "restore": {}
         },
         "iconStyle": {
             "borderColor": "#fff"
         }
     },
     "color": ["#3cefff"],
     "tooltip": {},
     "grid": {
         "top": 20,
         "containLabel": true
     },
     "xAxis": [{
         "nameTextStyle": {
             "color": "white",
             "padding": [0, 0, -10, 0],
             "fontSize": 13
         },
         "axisLabel": {
             "color": "#fff",
             "fontSize": 13,
             "textStyle": {
                 "fontSize": 16,
                 "color": "white"
             }
         },
         "axisTick": {
             "lineStyle": {
                 "color": "#ddd",
                 "width": 1
             },
             "show": true,
             "alignWithLabel": true
         },
         "splitLine": {
             "show": false
         },
         "axisLine": {
             "lineStyle": {
                 "color": "white",
                 "width": 1,
                 "fontSize": 16
             },
             "show": false
         },
         "type": "category",
         "data": ["累计", "去年同期", "目标值"],
         "offset": 10
     }],
     "yAxis": [{
         "nameTextStyle": {
             "show": false,
             "color": "#fff",
             "padding": [0, 0, -10, 0],
             "fontSize": 13
         },
         "axisLabel": {
             "color": "#fff",
             "fontSize": 13,
             "show": false,
             "textStyle": {
                 "color": "#82b0ec"
             },
             "formatter": "{value}"
         },
         "axisTick": {
             "show": false,
             "lineStyle": {
                 "color": "#ddd",
                 "width": 1
             },
             "show": false
         },
         "splitLine": {
             "show": false,
             "show": false,
             "lineStyle": {
                 "color": "#0c2c5a"
             }
         },
         "axisLine": {
             "show": false,
             "lineStyle": {
                 "color": "#ddd",
                 "width": 1
             },
             "show": false
         },
         "type": "value"
     }],
     "series": [{
         "name": "",
         "type": "pictorialBar",
         "symbolSize": [60, 10],
         "symbolOffset": [0, -5],
         "symbolPosition": "end",
         "z": 12,
         "label": {
             "normal": {
                 "fontSize": 20,
                 "show": true,
                 "position": "top",
                 "formatter": "{c}"
             }
         },
         "data": [{
             "value": 103,
             "itemStyle": {
                 "normal": {
                     "color": {
                         "x": 0,
                         "y": 0,
                         "x2": 0,
                         "y2": 1,
                         "type": "linear",
                         "global": false,
                         "colorStops": [{
                             "offset": 0,
                             "color": "rgba(0,151,237,1)"
                         }, {
                             "offset": 1,
                             "color": "rgba(74,196,254,1)"
                         }]
                     }
                 }
             }
         }, {
             "value": 82,
             "itemStyle": {
                 "color": {
                     "x": 0,
                     "y": 0,
                     "x2": 0,
                     "y2": 1,
                     "type": "linear",
                     "global": false,
                     "colorStops": [{
                         "offset": 0,
                         "color": "rgba(0,159,101,1)"
                     }, {
                         "offset": 1,
                         "color": "rgba(83,255,193,1)"
                     }]
                 }
             }
         }, {
             "value": "226",
             "itemStyle": {
                 "normal": {
                     "color": {
                         "x": 0,
                         "y": 0,
                         "x2": 0,
                         "y2": 1,
                         "type": "linear",
                         "global": false,
                         "colorStops": [{
                             "offset": 0,
                             "color": "rgba(19,84,222,1)"
                         }, {
                             "offset": 1,
                             "color": "rgba(91,165,244,1)"
                         }]
                     }
                 }
             }
         }]
     }, {
         "name": "",
         "type": "pictorialBar",
         "symbolSize": [60, 10],
         "symbolOffset": [0, 5],
         "z": 12,
         "data": [{
             "value": 103,
             "itemStyle": {
                 "normal": {
                     "color": {
                         "x": 0,
                         "y": 0,
                         "x2": 0,
                         "y2": 1,
                         "type": "linear",
                         "global": false,
                         "colorStops": [{
                             "offset": 0,
                             "color": "rgba(98,199,255,1)"
                         }, {
                             "offset": 1,
                             "color": "rgba(20,159,236,1)"
                         }]
                     }
                 }
             }
         }, {
             "value": 82,
             "itemStyle": {
                 "normal": {
                     "color": {
                         "x": 0,
                         "y": 0,
                         "x2": 0,
                         "y2": 1,
                         "type": "linear",
                         "global": false,
                         "colorStops": [{
                             "offset": 0,
                             "color": "rgba(0,180,115,1)"
                         }, {
                             "offset": 1,
                             "color": "rgba(82,224,185,1)"
                         }]
                     }
                 }
             }
         }, {
             "value": "226",
             "itemStyle": {
                 "normal": {
                     "color": {
                         "x": 0,
                         "y": 0,
                         "x2": 0,
                         "y2": 1,
                         "type": "linear",
                         "global": false,
                         "colorStops": [{
                             "offset": 0,
                             "color": "rgba(15,67,186,1)"
                         }, {
                             "offset": 1,
                             "color": "rgba(43,130,243,1)"
                         }]
                     }
                 }
             }
         }]
     }, {
         "type": "bar",
         "itemStyle": {},
         "barWidth": "60",
         "data": [{
             "value": 103,
             "itemStyle": {
                 "normal": {
                     "color": {
                         "x": 0,
                         "y": 0,
                         "x2": 0,
                         "y2": 1,
                         "type": "linear",
                         "global": false,
                         "colorStops": [{
                             "offset": 0,
                             "color": "rgba(113,204,255,1)"
                         }, {
                             "offset": 1,
                             "color": "#09a4f9"
                         }]
                     }
                 }
             }
         }, {
             "value": 82,
             "itemStyle": {
                 "normal": {
                     "color": {
                         "x": 0,
                         "y": 0,
                         "x2": 0,
                         "y2": 1,
                         "type": "linear",
                         "global": false,
                         "colorStops": [{
                             "offset": 0,
                             "color": "rgba(17,228,151,1)"
                         }, {
                             "offset": 1,
                             "color": "#00af85"
                         }]
                     }
                 }
             }
         }, {
             "value": "226",
             "itemStyle": {
                 "normal": {
                     "color": {
                         "x": 0,
                         "y": 0,
                         "x2": 0,
                         "y2": 1,
                         "type": "linear",
                         "global": false,
                         "colorStops": [{
                             "offset": 0,
                             "color": "rgba(56,155,334,1)"
                         }, {
                             "offset": 1,
                             "color": "#0636a3"
                         }]
                     }
                 }
             }
         }]
     }]
 }