option = {
     "color": ["#63caff", "#3608FE"],
      "grid": {
      "containLabel": true,
        "left": 40,
        "right": 20,
        "bottom": 10,
        "top": 40
    },
    //
    // xAxis: {
    //   show: false,
    //   type: 'value'
    // },
    "xAxis": {
      // show: false,
      // type: 'value',
      "axisLabel": {
        "color": "#c0c3cd",
          "fontSize": 12,
          "interval": 0
      },
      "splitLine": {
        "show": false
      },
      "axisLine": {

        "lineStyle": {
          "color": "#384267",
            "width": 1,
            "type": "dashed"
        },
        "show": false
      },
      // "data": ["博士", "硕士", "本科", "专科", "专科以下", ],

      "data": ["专科以下", "专科", "本科", "硕士", "博士", ],
      // "data":[],
        "type": "category",

        "axisTick":{       //y轴刻度线
        "show":false
      },

    },




    "yAxis": {

      "axisLabel": {
        "color": "#c0c3cd",
          "fontSize": 12
      },

      "splitLine": {
        "show": false,
          "lineStyle": {
          "color": "#384267",
            "type": "dashed"
        }
      },
      "axisLine": {
        "lineStyle": {
          "color": "#384267",
            "width": 1,
            "type": "dashed"
        },
        "show": false
      },
      "name": ""
    },
    "series": [
      {
         "data": [200, 85, 112, 275, 305],
      //  "data":[],
        "type": "bar",
        "barWidth": 10,
        "itemStyle": {
          //加圆角
          emphasis: {
            barBorderRadius: 7
          },
          normal: {
            barBorderRadius: 7
          },
          "color": {
            "x": 0,
            "y": 0,
            "x2": 0,
            "y2": 1,
            "type": "linear",
            "global": false,
            "colorStops": [{
              "offset": 0,
              "color": "#3A1BFD"
            }, {
              "offset": 1,
              "color": "#3BEFFD"
            }],

          }
        },
        "label": {
          "show": true,
          "position": "top",
          "distance": 10,
          "color": "#fff"
        }
      },

    ],
      "tooltip": {
      "trigger": "item",
        "show": true
    }
};
