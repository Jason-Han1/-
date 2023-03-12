name = ["收", "文"];

option = {
        backgroundColor:'black',
          tooltip: {
            trigger: 'item',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'line' // 默认为直线，可选为：'line' | 'shadow'
            },
            textStyle: {
              fontSize: 14
            }
          },
          "legend": {
            "right": "5%",
            "top": "5%",
            "show": true,
            "type": "scroll",
            "data": name,
            "itemWidth": 10,
            "itemHeight": 10,
            "itemGap": 30,
            "textStyle": {
              "fontSize": 16,
              "color": "#fff",
              "align": "center",
              "fontFamily": "Microsoft YaHei"
            },
          },
          "grid": [{
            "left": "10%",
            "right": "60%",
            "top": 30,
            "bottom": "10"
          }, {
            "left": "60%",
            "right": "10%",
            "top": 30,
            "bottom": "10"
          }, {
            "left": "80%",
            "right": "10%",
            "top": 30,
            "bottom": "10"
          }],
          "xAxis": [{
            "type": "value",
            "gridIndex": 0,
            "inverse": true,
            // padding:[20,20,20,20],
            "axisLine": {
              "show": false,
              "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "red"
              }
            },
            "splitLine": {
              "show": false,
              "lineStyle": {
                "type": "dotted",
                "color": "#ccc",
                "width": 1
              }
            },
            "axisTick": {
              "show": false,
              "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "#fff"
              }
            },
            "axisLabel": {
              "show": false,
              "fontFamily": "Microsoft YaHei",
              "fontSize": 20,
              "color": "fff",
              "interval": "auto",
              "rotate": "0",
            },
            "data": [],
          }, {
            "type": "value",
            "gridIndex": 1,
            "inverse": false,
            "axisLine": {
              "show": false,
              "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "red"
              }
            },
            "splitLine": {
              "show": false,
              "lineStyle": {
                "type": "dotted",
                "color": "red",
                "width": 1
              }
            },
            "axisTick": {
              "show": false,
              "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "red"
              }
            },
            "axisLabel": {
              "show": false,
              "fontFamily": "Microsoft YaHei",
              "fontSize": 12,
              "color": "#fff",
              "interval": "auto",
              "rotate": "0"
            },
            "data": [],
          }, {
            "type": "value",
            "gridIndex": 2,
            "inverse": false,
            "axisLine": { //只有这个
              "show": false,
              "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "red"
              }
            },
            "splitLine": {
              "show": false,
              "lineStyle": {
                "type": "dotted",
                "color": "#ccc",
                "width": 1
              }
            },
            "axisTick": {
              "show": false,
              "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "red"
              }
            },
            "axisLabel": {
              "show": false,
              "fontFamily": "Microsoft YaHei",
              "fontSize": 12,
              "color": "red",
              "interval": "auto",
              "rotate": "0"
            },
            "data": [],
          }],
          "yAxis": [{
            "type": "category",
            "gridIndex": 0,
            "axisLine": {
              "show": false,
              "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "red"
              }
            },
            "splitLine": {
              "show": false,
              "lineStyle": {
                "type": "dotted",
                "color": "#ccc",
                "width": 1
              }
            },
            "axisTick": {
              "show": false,
              "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "#888888"
              }
            },
            "axisLabel": {
              "show": true,
              "fontFamily": "Microsoft YaHei",
              "fontSize": 16,
              "color": "#ffffff",
              "align": "center",
              "interval": "auto",
              "padding": [0, 0, 0, 240]
            },

            "data": ['社', '工业', '资源', '基础', '固定'],
            "position": "right"
          }, {
            "type": "category",
            "gridIndex": 1,
            "axisLine": {
              "show": false,
              "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "#888888"
              }
            },
            "splitLine": {
              "show": false,
              "lineStyle": {
                "type": "dotted",
                "color": "#ccc",
                "width": 1
              }
            },
            "axisTick": {
              "show": false,
              "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "#888888"
              }
            },
            "axisLabel": {
              "show": false,
              "fontFamily": "Microsoft YaHei",
              "fontSize": 16,
              "color": "#fff",
              "interval": "auto"
            },
            "data": [],

          }, {
            "type": "category",
            "gridIndex": 2,
            "axisLine": {
              "show": false,
              "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "#888888"
              }
            },
            "splitLine": {
              "show": false,
              "lineStyle": {
                "type": "dotted",
                "color": "#ccc",
                "width": 1
              }
            },
            "axisTick": {
              "show": true,
              "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "#888888"
              }
            },
            "axisLabel": {
              "show": true,
              "fontFamily": "Microsoft YaHei",
              "fontSize": 16,
              "color": "#777575",
              "interval": "auto"
            }
          }],
          "series": [{
            "colId": "col402utokg",
            "name": name[0],
            "type": "bar",
            //  type: 'pictorialBar',
            //  symbol: 'images', //可以使用自定义图片作为柱状图形
            //  symbol: 'image://' + BASE_PATH + '/pages/transportation/pages/supply/img/qianlvzz.png',
            "stack": null,
            "data": [285,362,321,510,600],
            barWidth: 10,
            color: '#00F6FF',
            "xAxisIndex": 0,
            "yAxisIndex": 0,
            "label": {
              "position": "left",
              "fontFamily": "Microsoft YaHei",
              "show": true,
              "fontSize": 16,
              "color": "#fff"
            }
          }, {
            "colId": "col3kkgr6h9",
            "name": name[1],
            "type": "bar",
            //  type: 'pictorialBar',
            //  symbol: 'images',  //可以使用自定义图片作为柱状图形
            //  symbol: 'image://' + BASE_PATH + '/pages/transportation/pages/supply/img/qianlanzz.png',
            "stack": null,
            "data": [225,191,243,400,360],
            barWidth: 10,
            color: '#FFEA00',
            "xAxisIndex": 1,
            "yAxisIndex": 1,
            "label": {
              "position": "right",
              "fontFamily": "Microsoft YaHei",
              "show": true,
              "fontSize": 16,
              "color": "#fff"
            }
          }],
        };