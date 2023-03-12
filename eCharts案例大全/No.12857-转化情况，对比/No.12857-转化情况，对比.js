option = {
  "series": [
    {
      "name": "",
      "type": "bar",
      "barMinHeight": 23,
      "barWidth": 10,
      "zlevel": 4,
      "itemStyle": {
        "normal": {
          "color": "rgba(0,0,0,0)"
        }
      },
      "label": {
        "normal": {
          "show": true,
          "position": "left",
          "padding": [
            5,
            10
          ],
          "color": "#fff",
          "backgroundColor": {
            "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAeCAYAAADaW7vzAAAA6klEQVR42u2awQnCQBBFU4EleBIkE7AES0gJlmAJlmAJliBuBI8pwRIswRJczxrQhCQ7f+EtTAPvwf7dmSliU0VqbNm+mOoAc6IKdkKIWL2C3eNttUCImpSw3iBEq54xlFuEqNW13CEk97AHWhIp595hD7CEYd/YEiFyYf/nBQYksbAHkFu75YAQwRdYJ+wBI9ZuAYpY2ANDSMrFaoRIZUrVIkTt1QUIdxGPj84wQMR6XIARm8MDxuOK+tHPApDzzxwhTn+MvtNDYIktPQBt1joOXgsC2oxtELZOMhrVIiTNFcUqae6LcV/nDV2+hl0RRf1CAAAAAElFTkSuQmCC"
          }
        }
      },
      "data": [
        null,
        58.7,
        55.56
      ],
      "smooth": true
    },
    {
      "name": "$ALL",
      "type": "bar",
      "stack": "$ALL",
      "barCategoryGap": "50%",
      "data": [
        46,
        27,
        15
      ],
      "smooth": true
    },
    {
      "name": "$ALL",
      "type": "bar",
      "stack": "$ALL",
      "silent": true,
      "data": [
        0,
        19,
        12
      ],
      "itemStyle": {
        "normal": {
          "opacity": 0.2
        }
      },
      "smooth": true
    }
  ],
  "title": {
    "text": "总体转化率：32.61%",
    "textStyle": {
      "color": "#1796e1",
      "fontSize": 14
    }
  },
  "xAxis": [
    {
      "type": "category",
      "data": [
        "第1步[1]",
        "第2步[2]",
        "第3步[3]"
      ],
      "boundaryGap": true,
      "axisLine": {
        "show": true,
        "lineStyle": {
          "color": "#CDCDCD"
        }
      },
      "axisLabel": {
        "show": true,
        "color": "#333"
      },
      "axisTick": {
        "show": false
      },
      "splitLine": false
    }
  ],
  "yAxis": [
    {
      "type": "value",
      "axisLine": {
        "show": false
      },
      "axisTick": {
        "show": false
      },
      "splitLine": {
        "show": true,
        "lineStyle": {
          "color": "#EEEEEE",
          "type": "dashed"
        }
      }
    }
  ],
  "tooltip": {
    "textStyle": {
      "fontSize": 12
    }
  },
  "grid": {
    "top": "5%",
    "left": "2%",
    "right": "2%",
    "bottom": "10%",
    "containLabel": true
  },
  "legend": {
    "selected": {},
    "type": "scroll",
    "data": [
      "$ALL"
    ],
    "bottom": -2,
    "tooltip": {
      "show": true
    }
  }
};
