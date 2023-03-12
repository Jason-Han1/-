var option = {
  "ext_js_list": [], 
  "title": {
    "y": "", 
    "text": "", 
    "textStyle": {
      "fontWeight": 700
    }, 
    "x": "center", 
    "show": false
  }, 
  "color": [
    "#577CAD", 
    "#FFA51B", 
    "#EF635C", 
    "#7FBAC4", 
    "#48A47D", 
    "#BCB52B", 
    "#B46A88", 
    "#B29688", 
    "#9FACA4", 
    "#6B6B6B"
  ], 
  "series": [
    {
      "markLine": {
        "data": [], 
        "label": {
          "normal": {
            "fontStyle": "normal", 
            "show": true, 
            "padding": [
              4, 
              10
            ], 
            "fontSize": 12, 
            "position": "left", 
            "formatter": "{c}"
          }
        }
      }, 
      "name": "\u8bc4\u8bba\u6570", 
      "barGap": "10%", 
      "itemStyle": {
        "normal": {
          "color": null
        }
      }, 
      "barMaxWidth": "100", 
      "field_id": "5c18d86c9a4f0c548bf99cca", 
      "tooltip": {
        // "formatter": this.getNormalFormatterHandler({ttype: 'num', digit: 0, millesimal: false, showText: true, showAxis: true})
      }, 
      "label": {
        "normal": {
          "position": "insideLeft", 
        //   "formatter": this.getNormalFormatterHandler({ttype: 'num', digit: 0, millesimal: false, showText: false, showAxis: false}), 
          "show": true
        }
      }, 
      "animation": false, 
      "data": [
        26, 
        302, 
        116, 
        350
      ], 
      "type": "bar", 
      "id": "5c18d86c9a4f0c548bf99cca"
    }, 
    {
      "show": false,
      "name": "\u95e8\u5e97\u540d\u79f0", 
      "barGap": "10%", 
      "itemStyle": {
        "normal": {
          "color": "#efefef"
        }
      }, 
      "barMaxWidth": "100", 
      "field_id": "5c3feb9a5ecf835403bb02eb", 
      "tooltip": {
        // "formatter": this.getNormalFormatterHandler({ttype: 'num', digit: 2, millesimal: false, showText: true, showAxis: true})
      }, 
      "xAxisIndex": 1, 
      "animation": false, 
      "yAxisIndex": 1, 
      "data": [
        26, 
        302, 
        116, 
        350
      ], 
      "label": {
        "normal": {
          "position": "insideLeft", 
          "color": "#000",
          align: "center",
        //   "formatter": this.getNormalFormatterHandler({ttype: 'num', digit: 2, millesimal: false, showText: false, showAxis: false}), 
          "show": true
        },
        
      }, 
      "type": "bar", 
      "id": "5c3feb9a5ecf835403bb02eb"
    },
    {
      "show": false,
      "name": "\u95e8\u5e97\u540d\u79f0", 
      "barGap": "10%", 
      "itemStyle": {
        "normal": {
          "color": "#efefef"
        }
      }, 
      emphasis: {
          label: {
                show: false,
                color: "#000"
          },
            itemStyle: {
                color: "#efefef",
                opacity: 0
            }  
      },
      "barMaxWidth": "100", 
      "field_id": "5c3feb9a5ecf835403bb02ec", 
      "tooltip": {
        // "formatter": this.getNormalFormatterHandler({ttype: 'num', digit: 2, millesimal: false, showText: true, showAxis: true})
      }, 
      "xAxisIndex": 2, 
      "animation": false, 
      "yAxisIndex": 2, 
      "data": [
        26, 
        302, 
        116, 
        350
      ], 
      "label": {
        "normal": {
          "position": "insideLeft", 
          "color": "#000",
        //   "formatter": this.getNormalFormatterHandler({ttype: 'num', digit: 2, millesimal: false, showText: false, showAxis: false}), 
          "show": true
        }
      }, 
      "type": "bar", 
      "id": "5c3feb9a5ecf835403bb02ec"
    }
  ], 
  "yAxis": [
    {
      "nameLocation": "middle", 
      "splitNumber": "10", 
      "minInterval": 1, 
      "name": "", 
      "show": true, 
      "data": [
        "\u4f18\u60e0", 
        "\u670d\u52a1", 
        "\u73af\u5883", 
        "\u98df\u7269"
      ], 
      "axisLabel": {
        "textStyle": {
          "color": "#787878", 
          "fontSize": 10
        }, 
        "inside": false, 
        "rotate": 0, 
        "show": true
      }, 
      "boundaryGap": [
        "10%", 
        "10%"
      ], 
      "nameTextStyle": {
        "color": "#787878", 
        "fontSize": 10
      }, 
      "nameGap": 35, 
      "axisLine": {
        "lineStyle": {
          "color": "#A6A6A6"
        }, 
        "show": true
      }, 
      "triggerEvent": true, 
      "z": 10, 
      "type": "category", 
      "axisTick": {
        "show": false
      }
    }, 
    {
      "nameLocation": "middle", 
      "splitNumber": "10", 
      "minInterval": 1, 
      "name": "", 
      "show": false, 
      "data": [
        "\u4f18\u60e0", 
        "\u670d\u52a1", 
        "\u73af\u5883", 
        "\u98df\u7269"
      ], 
      "axisLabel": {
        "textStyle": {
          "color": "#787878", 
          "fontSize": 10
        }, 
        "inside": false, 
        "rotate": 0, 
        "show": false
      }, 
      "boundaryGap": [
        "10%", 
        "10%"
      ], 
      "nameTextStyle": {
        "color": "#787878", 
        "fontSize": 10
      }, 
      "nameGap": 35, 
      "axisLine": {
        "lineStyle": {
          "color": "#A6A6A6"
        }, 
        "show": true
      }, 
      "triggerEvent": true, 
      "z": 9, 
      "type": "category", 
      "gridIndex": 1, 
      "axisTick": {
        "show": false
      }
    },
    {
      "nameLocation": "middle", 
      "splitNumber": "10", 
      "minInterval": 1, 
      "name": "", 
      "show": false, 
      "data": [
        "\u4f18\u60e0", 
        "\u670d\u52a1", 
        "\u73af\u5883", 
        "\u98df\u7269"
      ], 
      "axisLabel": {
        "textStyle": {
          "color": "#787878", 
          "fontSize": 10
        }, 
        "inside": false, 
        "rotate": 0, 
        "show": false
      }, 
      "boundaryGap": [
        "10%", 
        "10%"
      ], 
      "nameTextStyle": {
        "color": "#787878", 
        "fontSize": 10
      }, 
      "nameGap": 35, 
      "axisLine": {
        "lineStyle": {
          "color": "#A6A6A6"
        }, 
        "show": true
      }, 
      "triggerEvent": true, 
      "z": 10, 
      "type": "category", 
      "gridIndex": 2, 
      "axisTick": {
        "show": false
      }
    }
  ], 
  "tooltip": {
    "axisPointer": {
      "type": "shadow"
    }, 
    "trigger": "item", 
    "extraCssText": "border-radius: 0px;", 
    "textStyle": {
      "fontSize": 12
    }
  }, 
  "visualMap": [], 
  "grid": [
    {
      "width": "50%", 
      "left": 100
    }, 
    {
      "width": "20%", 
      "left": "50%",
    //   "right": 40
    },
    {
      "width": "20%", 
      "right": 0
    }
  ], 
  "xAxis": [
    {
      "nameLocation": "middle", 
      "axisTick": {
        "show": false
      }, 
      "scale": false, 
      "name": "", 
      "show": true, 
      "axisLabel": {
        "textStyle": {
          "color": "#787878", 
          "fontSize": 10
        }, 
        // "formatter": this.getNormalFormatterHandler({ttype: 'num', digit: 2, millesimal: false, showText: false, showAxis: false}), 
        "show": true
      }, 
      "splitLine": {
        "lineStyle": {
          "color": "#e9e9e9"
        }
      }, 
      "nameTextStyle": {
        "color": "#787878", 
        "fontSize": 10
      }, 
      "splitNumber": 5, 
      "axisLine": {
        "show": false
      }, 
      "nameGap": 35, 
      "type": "value"
    }, 
    {
      "nameLocation": "middle", 
      "axisTick": {
        "show": false
      }, 
      "scale": false, 
      "name": "", 
      "show": false, 
      "axisLabel": {
        "textStyle": {
          "color": "#787878", 
          "fontSize": 10
        }, 
        // "formatter": this.getNormalFormatterHandler({ttype: 'num', digit: 2, millesimal: false, showText: false, showAxis: false}), 
        "show": true
      }, 
      "splitLine": {
        "lineStyle": {
          "color": "#e9e9e9"
        }
      }, 
      "nameTextStyle": {
        "color": "#787878", 
        "fontSize": 10
      }, 
      "splitNumber": 2, 
      "axisLine": {
        "show": false
      }, 
      "nameGap": 35, 
      "type": "value", 
      "gridIndex": 1
    },
    {
      "nameLocation": "middle", 
      "axisTick": {
        "show": false
      }, 
      "scale": false, 
      "name": "", 
      "show": false, 
      "axisLabel": {
        "textStyle": {
          "color": "#787878", 
          "fontSize": 10
        }, 
        // "formatter": this.getNormalFormatterHandler({ttype: 'num', digit: 2, millesimal: false, showText: false, showAxis: false}), 
        "show": true
      }, 
      "splitLine": {
        "lineStyle": {
          "color": "#e9e9e9"
        }
      }, 
      "nameTextStyle": {
        "color": "#787878", 
        "fontSize": 10
      }, 
      "splitNumber": 2, 
      "axisLine": {
        "show": false
      }, 
      "nameGap": 35, 
      "type": "value", 
      "gridIndex": 2
    }
  ], 
  "dataZoom": [
    {
      "end": 100, 
      "show": false, 
      "start": 0, 
      "yAxisIndex": [
        0, 
        1
      ], 
      "type": "slider", 
      "left": "0%"
    }
  ], 
  "toolbox": {
    "feature": {
      "restore": {
        "show": true
      }, 
      "saveAsImage": {
        "show": true
      }, 
      "dataView": {
        "readOnly": false, 
        "show": true
      }, 
      "mark": {
        "show": true
      }, 
      "myDownloadData": {
        "title": "\u4e0b\u8f7d\u6570\u636e", 
        "icon": "image://http://echarts.baidu.com/images/favicon.png", 
        "onclick": self.downloadData, 
        "show": true
      }, 
      "myShowOption": {
        "title": "\u7f16\u8f91", 
        "icon": "image://http://echarts.baidu.com/images/favicon.png", 
        "onclick": self.showOption, 
        "show": true
      }, 
      "myGoBack": {
        "title": "\u8fd4\u56de", 
        "icon": "image://http://echarts.baidu.com/images/favicon.png", 
        "onclick": self.goBack, 
        "show": false
      }
    }, 
    "show": false
  }, 
  "legend": {
    "textStyle": {
      "padding": 0, 
      "lineHeight": 10, 
      "fontSize": 10
    }, 
    "show": true, 
    "itemHeight": 12, 
    "itemGap": 5, 
    "padding": 0, 
    "itemWidth": 12, 
    "pageTextStyle": {}, 
    "data": [
      {
        "name": "\u8bc4\u8bba\u6570", 
        "icon": "circle"
      }
    ], 
    "left": "left"
  }
  }