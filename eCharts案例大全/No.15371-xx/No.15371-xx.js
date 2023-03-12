option =  {
      "calculable": true,
      "toolbox": {
        "show": true,
        "feature": {
          "restore": {
            "show": true,
            "title": "还原"
          },
          "saveAsImage": {
            "show": true,
            "title": "保存为图片",
            "type": "png",
            "lang": [
              "点击保存"
            ]
          }
        }
      },
      "tooltip": {
        "trigger": "axis"
      },
      "legend": {
        "data": [
          "PV",
          "UV"
        ]
      },
      "xAxis": [
        {
          "data": [
            "2017-04-16",
            "2017-04-17",
            "2017-04-18",
            "2017-04-19"
          ],
          "type": "category",
          "boundaryGap": false
        }
      ],
      "yAxis": [
        {
            "type": "value",
            min:0,
            max: 20000715,
            // show: false
        },{
            "type": "value",
            min:0,
            max: 5000170,
            // show: false
        }, {
            min:0,
            max: 100,
            // show: false
        }
      ],
      "series": [
        {
          "data": [
            {
              "name": "PV",
              "value": 12420727
            },
            {
              "name": "PV",
              "value": 1768706
            },
            {
              "name": "PV",
              "value": 3208820
            },
            {
              "name": "PV",
              "value": 19000715
            }
          ],
          "name": "PV",
          "type": "line",
          "smooth": true,
          yAxisIndex: 0
        },
        {
          "data": [
            {
              "name": "UV",
              "value": 3391009
            },
            {
              "name": "UV",
              "value": 684318
            },
            {
              "name": "UV",
              "value": 1319537
            },
            {
              "name": "UV",
              "value": 4500170
            }
          ],
          "name": "UV",
          "type": "line",
          "smooth": true,
          yAxisIndex: 1
        },{
          "data": [
            {
              "name": "x",
              "value": 33
            },
            {
              "name": "x",
              "value": 68
            },
            {
              "name": "x",
              "value": 13
            },
            {
              "name": "x",
              "value": 45
            }
          ],
          "name": "x",
          "type": "line",
          "smooth": true,
          yAxisIndex: 2
        }
      ]
    }