var title="本周完成情况";
var xname=["周一","周二","周三","周四","周五","周六","周日"];
var data1=[10,9,8,7,6,5,4]
var data2=[7,6,5,4,3,2,1]
option = {
          // backgroundColor: "#fff",
          "title": {
            "text": title,
            y: "2%",
            x: "10px",
            textStyle: {
              fontSize: '14'
            },
          },
          "tooltip": {
            "trigger": "axis",
            "axisPointer": {
              "type": "shadow",
            },
          },
          grid: {
            top: '50px',
            left: '55px',
            right: '40px',
            bottom: '30px',
          },
          "legend": {
            top: '2%',
            left: "130px",
            "data": ['总数', '未完成数']
          },
          "calculable": true,
          "xAxis": [{
            "type": "category",
            "axisLine": {
              lineStyle: {
                color: '#90979c'
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
            },
            "data": xname,
          }],
          "yAxis": [{
            "type": "value",
            "splitLine": {
              "show": true
            },
            "axisLine": {
              "show": true,
              lineStyle: {
                color: '#90979c'
              }
            },
            "axisTick": {
              "show": false
            },
            "axisLabel": {
              "interval": 0,
            },
            "splitArea": {
              "show": false
            },
          }],
          "series": [{
            "name": "总数",
            "type": "bar",
            // "stack": "数量",
            "itemStyle": {
              "normal": {
                "color": "#2F81F1",
                "barBorderRadius": 0,
                "label": {
                  "show": false,
                  "position": "inside",
                  formatter: function(p) {
                    return p.value > 0 ? (p.value) : '';
                  }
                }
              }
            },
            "data": data1
          }, {
            // "name": "未完成数",
            // "type": "line",
            // "stack": "数量",
            // symbolSize:10,
            // symbol:'circle',
            // "itemStyle": {
            //   "normal": {
            //     "color": "#E54421",
            //     "barBorderRadius": 0,
            //     "label": {
            //       "show": true,
            //       "position": "top",
            //       formatter: function(p) {
            //         return p.value > 0 ? (p.value) : '';
            //       }
            //     }
            //   }
            // },
            // "data":data2
            "name": "未完成数",
            "type": "bar",
            // "stack": "数量",
            "itemStyle": {
              "normal": {
                "color": "#E54421",
                "barBorderRadius": 0,
                "label": {
                  "show": false,
                  "position": "inside",
                  formatter: function(p) {
                    return p.value > 0 ? (p.value) : '';
                  }
                }
              }
            },
            "data":data2
          }]
        }