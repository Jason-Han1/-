var option = {
        "tooltip": {
          "trigger": "axis",
          backgroundColor:'white',
       formatter: function (datas) {
        var res = datas[0].name + '<br/>'
        for (var i = 0, length = datas.length; i < length; i++) {
            if(i==0){
               res+='<span style="display:inline-block;color:#3A85FF;width:100px">' +datas[i].seriesName +'</span>' +'<span style="color:#333333;font-size: 16px;">'+ datas[i].value + '</span>';
            }else{
                 res+='<br><span style="color:#12B8FF;width:100px;display:inline-block">' +datas[i].seriesName +'</span>' +'<span style="color:#333333;font-size: 16px;">'+ datas[i].value + '</span>';
            }
           
         }
         return res
       },

        },
        grid: {
          top: '50px',
          left: '55px',
          right: '40px',
          bottom: '30px',

        },
        "legend": {
          top: '0%',
          left: "10px",
          "data": ['工器具总数', '在库总数']
        },
        "calculable": false,
        "xAxis": [{
          "type": "category",
          "axisLine": {
            lineStyle: {
              color: '#ccc'
            }
          },
          "splitLine": {
            "show": false
          },
          "axisTick": {
            "alignWithLabel": false
          },
          "splitArea": {
            "show": false
          },
          "axisLabel": {
            "interval": 0,
          },
          "data": [1,2,3,4,5,6],

          boundaryGap: true //坐标轴两边留白
        }],
        "yAxis": [{
          "type": "value",
          "splitLine": {
            "show": true
          },
          "axisLine": {
            "show": false,
            lineStyle: {
              color: '#CBCBCB'
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
          "name": "工器具总数",
          "type": "bar",
            barGap: "0%",
          "itemStyle": {
            "normal": {
             
              "color": "#3A85FF",
              "barBorderRadius": 0,
              "label": {
                "show": false,
                "position": "top",
                formatter: function (p) {
                  return p.value > 0 ? (p.value) : '';
                }
              }
            }
          },
          "data": [120,20,50,450,45],
          barWidth: 30,//柱图宽度
        }, {
          "name": "在库总数",
          "type": "bar",
          // "stack": "数量",
          "itemStyle": {
            "normal": {
              "color": "#12B8FF",
              "barBorderRadius": 0,
              "label": {
           
                "show": false,
                "position": "top",
                formatter: function (p) {
                  return p.value > 0 ? (p.value) : '';
                }
              }
            }
          },
          "data": [122,20,520,450,445],
          barWidth: 30,//柱图宽度
        }]
      }