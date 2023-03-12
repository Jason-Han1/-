 var name = ["2019", "2020"];
 var option = {
     backgroundColor: "#000",
     //  "tooltip": {
     //      "confine": true,
     //      "transitionDuration": 0.5,
     //      "enterable": true,
     //      "extraCssText": "padding: 10px 15px;max-height:256px;overflow: auto;box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.16) 0px 3px 10px"
     //  },
     tooltip: {
         trigger: 'item',
         axisPointer: { // 坐标轴指示器，坐标轴触发有效
             type: 'line' // 默认为直线，可选为：'line' | 'shadow'
         },
         textStyle: {
             fontSize: 24
         }
     },
     "legend": {
         "left": "center",
         "top": "5%",
         "show": true,
         "type": "scroll",
         "data": name,
         "itemWidth": 20,
         "itemHeight": 15,
         "itemGap": 30,
         "textStyle": {
             "fontSize": 20,
             "color": "#fff",
             "fontFamily": "Microsoft YaHei"
         },
     },
     "grid": [{
         "left": "15%",
         "right": "53%",
         "top": 60,
         "bottom": "30"
     }, {
         "left": "53.5%",
         "right": "20%",
         "top": 60,
         "bottom": "30"
     }, {
         "left": "80%",
         "right": "10%",
         "top": 60,
         "bottom": "30"
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
             "color": "#FFA880",
             "interval": "auto"
         },
         "data": ['20岁以下', '20-30岁', '30-40岁', '40-50岁', '50-60岁', '60岁以上'],
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
             "fontSize": 12,
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
             "fontSize": 20,
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
         "data": [123, 556, 456, 478, 566, 122],
         barWidth: 15,
         color: '#00f3df',
         "xAxisIndex": 0,
         "yAxisIndex": 0,
         "label": {
             "position": "left",
             "fontFamily": "Microsoft YaHei",
             "show": true,
             "fontSize": 20,
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
         "data": [123, 556, 456, 478, 566, 456],
         barWidth: 15,
         color: '#01b3e0',
         "xAxisIndex": 1,
         "yAxisIndex": 1,
         "label": {
             "position": "right",
             "fontFamily": "Microsoft YaHei",
             "show": true,
             "fontSize": 20,
             "color": "#fff"
         }
     }],
 }