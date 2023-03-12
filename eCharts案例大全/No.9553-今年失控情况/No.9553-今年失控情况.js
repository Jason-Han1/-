var data = [
        ['2019-01',null],
        ['2019-02',19,0,0,100],
        ['2019-03',11,10,47.62,52.38],
        ['2019-04',57,5,8.06,91.94],
        ['2019-05',20,0,0,100],
        ['2019-06',99,20,16.81,83.19],
        ['2019-07',47,18,27.69,72.31],
        ['2019-08',63,1,1.56,98.44],
        ['2019-09',62,3,4.62,95.38],
        ['2019-10',56,4,6.67,93.33],
        ['2019-11',null],
        ['2019-12',null],
    ]
    
    function outZero(data){
        if(data.indexOf('0') > -1){
            return data.split('0')[1]
        }else{
            return data;
        }
    }
    
    var normalData = [];//正常数据
    var outControlData = [];//失控数据
    
    data.forEach(function(v,i){
        var noramlDataItem = {
            name:outZero(v[0].split('-')[1]) +'月',
            value: v[4],
            normalDataNum : v[1],
            outControlDataNum: v[2],
            normalDataPer: v[4],
            outControlDataPer : v[3]
        }
        var outControlDataItem = {
            name:outZero(v[0].split('-')[1]) +'月',
            value: v[3],
            normalDataNum : v[1],
            outControlDataNum: v[2],
            normalDataPer: v[4],
            outControlDataPer : v[3]
        }
        normalData.push(noramlDataItem)
        outControlData.push(outControlDataItem)
    })

console.log(normalData)
option = {
  "title": {
    "text": "今年失控情况",
    "textStyle": {
      "fontSize": 16,
      "fontWeight": 500,
      "color": "#475669",
      "fontFamily": "Chinese Quote,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
      "fontFeatureSettings": "tnum",
      "fontVariantNumeric": "tabular-nums"
    }
  },
  "tooltip": {
    "trigger": "axis",
    "axisPointer": {
      "type": "shadow"
    }
  },
  "legend": {
    "data": [
      "正常数据",
      "失控数据"
    ],
    "right": 110
  },
  "grid": {
    "left": 10,
    "right": 15,
    "bottom": "3%",
    "containLabel": true
  },
  "xAxis": [
    {
      "type": "category",
      "axisTick": {
        "show": false
      },
      "axisLine": {
        "lineStyle": {
          "color": "#707f96"
        }
      },
      "data": [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ]
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
      min:0,
      max:100,
      "axisLabel": {
        "color": "#707f96",
        formatter:function(value,index){
            return value  + '%';
        }
      },
      "splitLine": {
        "lineStyle": {
          "type": "dashed"
        }
      }
        
    }
  ],
  "series": [
    {
      "name": "正常数据",
      "type": "bar",
      "stack": "广告",
      "color": "#80c0fe",
      "barWidth": 20,
      "data": normalData
    //   [
    //     {
    //       "name": "1月",
    //       "value": null,
    //       "timeRange": null,
    //       "perVal": null
    //     },
    //     {
    //       "name": "2月",
    //       "value": 487,
    //       "timeRange": "2019-02-12~2019-02-28",
    //       "perVal": 100
    //     },
    //     {
    //       "name": "3月",
    //       "value": 508,
    //       "timeRange": "2019-03-02~2019-03-21",
    //       "perVal": 91.7
    //     },
    //     {
    //       "name": "4月",
    //       "value": 1468,
    //       "timeRange": "2019-04-03~2019-04-30",
    //       "perVal": 95.57
    //     },
    //     {
    //       "name": "5月",
    //       "value": 562,
    //       "timeRange": "2019-05-01~2019-05-30",
    //       "perVal": 92.28
    //     },
    //     {
    //       "name": "6月",
    //       "value": 3026,
    //       "timeRange": "2019-06-01~2019-06-30",
    //       "perVal": 92.4
    //     },
    //     {
    //       "name": "7月",
    //       "value": 1737,
    //       "timeRange": "2019-07-01~2019-07-31",
    //       "perVal": 91.09
    //     },
    //     {
    //       "name": "8月",
    //       "value": 1824,
    //       "timeRange": "2019-08-01~2019-08-31",
    //       "perVal": 98.33
    //     },
    //     {
    //       "name": "9月",
    //       "value": 1788,
    //       "timeRange": "2019-09-01~2019-09-30",
    //       "perVal": 92.36
    //     },
    //     {
    //       "name": "10月",
    //       "value": 1639,
    //       "timeRange": "2019-10-01~2019-10-31",
    //       "perVal": 93.23
    //     },
    //     {
    //       "name": "11月",
    //       "value": null,
    //       "timeRange": null,
    //       "perVal": null
    //     },
    //     {
    //       "name": "12月",
    //       "value": null,
    //       "timeRange": null,
    //       "perVal": null
    //     }
    //   ]
    },
    {
      "name": "失控数据",
      "type": "bar",
      "stack": "广告",
      "color": "#ffa5a5",
      "barWidth": 20,
      "data": outControlData
    //   [
    //     {
    //       "name": "1月",
    //       "value": null,
    //       "timeRange": null,
    //       "perVal": null
    //     },
    //     {
    //       "name": "2月",
    //       "value": 0,
    //       "timeRange": "2019-02-12~2019-02-28",
    //       "perVal": 0
    //     },
    //     {
    //       "name": "3月",
    //       "value": 46,
    //       "timeRange": "2019-03-02~2019-03-21",
    //       "perVal": 8.3
    //     },
    //     {
    //       "name": "4月",
    //       "value": 68,
    //       "timeRange": "2019-04-03~2019-04-30",
    //       "perVal": 4.43
    //     },
    //     {
    //       "name": "5月",
    //       "value": 47,
    //       "timeRange": "2019-05-01~2019-05-30",
    //       "perVal": 7.72
    //     },
    //     {
    //       "name": "6月",
    //       "value": 249,
    //       "timeRange": "2019-06-01~2019-06-30",
    //       "perVal": 7.6
    //     },
    //     {
    //       "name": "7月",
    //       "value": 170,
    //       "timeRange": "2019-07-01~2019-07-31",
    //       "perVal": 8.91
    //     },
    //     {
    //       "name": "8月",
    //       "value": 31,
    //       "timeRange": "2019-08-01~2019-08-31",
    //       "perVal": 1.67
    //     },
    //     {
    //       "name": "9月",
    //       "value": 148,
    //       "timeRange": "2019-09-01~2019-09-30",
    //       "perVal": 7.64
    //     },
    //     {
    //       "name": "10月",
    //       "value": 119,
    //       "timeRange": "2019-10-01~2019-10-31",
    //       "perVal": 6.77
    //     },
    //     {
    //       "name": "11月",
    //       "value": null,
    //       "timeRange": null,
    //       "perVal": null
    //     },
    //     {
    //       "name": "12月",
    //       "value": null,
    //       "timeRange": null,
    //       "perVal": null
    //     }
    //   ]
    }
  ]
}