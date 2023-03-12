var maxData = 200;

option = {
   "title": {
      "text": ""
    },
    "backgroundColor": "#101a3c",
    "grid": {
      "left": "10%",
      "top": 10,
      "bottom": 10
    },
    "tooltip": {
      "trigger": "item",
      "textStyle": {
        "fontSize": 12
      },
      "formatter": "{b0}:{c0}"
    },
    "xAxis": {
      "max": 300,
      "splitLine": {
        "show": false
      },
      "axisLine": {
        "show": false
      },
      "axisLabel": {
        "show": false
      },
      "axisTick": {
        "show": false
      }
    },
    "yAxis": [
      {
        "type": "category",
        "inverse": false,
        "data": [
          "山西",
          "四川",
          "西藏",
          "北京",
          "上海",
          "内蒙古",
          "云南",
          "黑龙江",
          "广东",
          "江苏"
        ],
        "axisLine": {
          "show": false
        },
        "axisTick": {
          "show": false
        },
        "axisLabel": {
          "margin": -4,
          "textStyle": {
            "color": "#fff",
            "fontSize": 16.25
          }
        }
      },
    
    ],
    "series": [
      {
        "type": "pictorialBar",
        symbol: 'rect',
        "symbolRepeat": true, // "fixed",
        "symbolMargin": "5%",
        "symbolClip": true,
        "symbolSize": 22.5,
        // "symbolPosition": "start",
        "symbolOffset": [
          20,
          0
        ],
        // "symbolBoundingData": 300,
        "data": [
          21,
          42,
          67,
          81,
          86,
          94,
          166,
          220,
          249,
          262
        ],
        // "z": 10
      },
      {
        "type": "pictorialBar",
        "itemStyle": {
          "normal": {
            "opacity": 0.3
          }
        },
        "label": {
          "normal": {
            "show": false
          }
        },
        "animationDuration": 0,
        "symbolRepeat": "fixed",
        "symbolMargin": "5%",
        symbol: 'rect',
        "symbolSize": 22.5,
        "symbolBoundingData": 300,
        "symbolPosition": "start",
        "symbolOffset": [
          20,
          0
        ],
        "data": [
          13,
          42,
          67,
          81,
          86,
          94,
          166,
          220,
          249,
          262
        ],
        "z": 5
      }
    ]
};


// Make dynamic data.
function random() {
    return +(Math.random() * (maxData - 10)).toFixed(1);
}
setInterval(function () {
    var dynamicData = [random(), random(), random(), random(),random(), random(), random(), random(),random(),random()];
    myChart.setOption({
        series: [{
            data: dynamicData.slice()
        }, {
            data: dynamicData.slice()
        }]
    })
}, 3000)