var data = [
        26, 
        302, 
        116, 
        350
]

var i = 0 ;

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
      "name": "\u8bc4\u8bba\u6570", 
      // 不同类目的柱子间宽度
      "barGap": "10%", 
      "itemStyle": {
        "normal": {
          "color": null
        }
      },
    //   "barWidth": 30,
      "barMaxWidth": "80", 
      "field_id": "5c18d86c9a4f0c548bf99cca", 
      "tooltip": {
        // "formatter": this.getNormalFormatterHandler({ttype: 'num', digit: 0, millesimal: false, showText: true, showAxis: true})
      }, 
      "label": {
        "normal": {
          "position": "insideBottom", 
          "align": "center", 
        //   "formatter": this.getNormalFormatterHandler({ttype: 'num', digit: 0, millesimal: false, showText: false, showAxis: false}), 
          "textBorderWidth": 2, 
          "show": true
        }
      }, 
      "animation": false, 
      "data": data,
      "type": "bar", 
      "id": "5c18d86c9a4f0c548bf99cca"
    },
    {
        type: 'custom',
        // renderItem: function (params, api) {
        //     console.log(params);
        //     // console.log(api);
        //     var categoryIndex = api.value(0);
        //     var start = api.coord([api.value(1), categoryIndex]);
        //     var end = api.coord([api.value(2), categoryIndex]);
        //     var height = api.size([0, 1])[1] * 0.6;

        //     var rectShape = echarts.graphic.clipRectByRect({
        //         x: start[0],
        //         y: start[1] - height / 2,
        //         width: end[0] - start[0],
        //         height: height
        //     }, {
        //         x: params.coordSys.x,
        //         y: params.coordSys.y,
        //         width: params.coordSys.width,
        //         height: params.coordSys.height
        //     });

        //     return rectShape && {
        //         type: 'rect',
        //         shape: rectShape,
        //         style: api.style()
        //     };
        // },
        tooltip: {
            show: false
        },
        renderItem: function(params, api) {
            console.log(params.coordSys)
          var y = api.coord([0, api.value(1)])[1];
          return {
              type: 'text',
              style: {
                  text: data[params.dataIndex],
                  fill: '#000',
                  x: api.coord([api.value(0), 0])[0],
                  y: y,
              },
            //   position: [api.coord([api.value(0), 0])[0], y]
          }  
        },
        data: data
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
        "\u98df\u7269",
        "fasdfasfdasdf"
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
        "show": true
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
      "top": 40, 
      "right": '40%', 
      "bottom": 20, 
      "containLabel": true, 
      "left": 20
    },
    {
      "top": 40, 
      "right": 0, 
      "bottom": 20, 
      "containLabel": true, 
    }
  ], 
  "xAxis": [
    {
      "nameLocation": "middle", 
      "splitNumber": "10", 
      "minInterval": 1, 
      "name": "", 
      "show": false, 
 
      "axisLabel": {
        "textStyle": {
          "color": "#787878", 
          "fontSize": 10
        }, 
        "inside": false, 
        "rotate": 0, 
        "show": true
      }, 
      "nameTextStyle": {
        "color": "#787878", 
        "fontSize": 10
      }, 
      "nameGap": 35, 
      "axisLine": {
        "lineStyle": {
          "color": "#A6A6A6"
        }, 
        "show": false
      }, 
      "triggerEvent": true, 
      "z": 10, 
      "type": "value", 
      "axisTick": {
        "show": false
      }
    }
  ], 
  "dataZoom": [
    {
      "end": 100, 
      "bottom": "0%", 
      "show": false, 
      "xAxisIndex": [
        0
      ], 
      "start": 0, 
      "type": "slider"
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
        // "onclick": self.downloadData, 
        "show": true
      }, 
      "myShowOption": {
        "title": "\u7f16\u8f91", 
        "icon": "image://http://echarts.baidu.com/images/favicon.png", 
        // "onclick": self.showOption, 
        "show": true
      }, 
      "myGoBack": {
        "title": "\u8fd4\u56de", 
        "icon": "image://http://echarts.baidu.com/images/favicon.png", 
        // "onclick": self.goBack, 
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