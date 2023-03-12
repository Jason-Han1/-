   var colorList = [
       '#2f54eb',
       '#feb513',
       '#30ca40',
       '#a147eb',
       '#fcec13',
       '#8b572a',
       '#e0109c',
       '#fc605f',
       '#50e3c2',
       '#6879ff',
   ]
   var sum = function(arr) {
       return arr.reduce(function(prev, curr, idx, arr) {
           return prev + curr
       })
   }
   var round = function round(value, decimals) {
       return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
   }
   var ratio = function(arr, sum) {
       return arr.map(function(item) {
           return (round(item / sum, 3) * 100).toFixed(1)
       })
   }

   var riskList = [{
       level: "中",
       gender: "女",
       value: 333333
   }, {
       level: "中",
       gender: "男",
       value: 555555
   }, {
       level: "低",
       gender: "女",
       value: 777777
   }, {
       level: "高",
       gender: "男",
       value: 66666
   }, {
       level: "高",
       gender: "女",
       value: 999999
   }, {
       level: "低",
       gender: "男",
       value: 222222
   }]
   // var count = 0
   var man = riskList.filter(x => {
       return x.gender === '男'
   })
   var woman = riskList.filter(x => {
       return x.gender === '女'
   })
   var womanlist = []
   var manlist = []
   // 根据 排序数组
   var orderRiskList = ['高', '中', '低']
   orderRiskList.forEach(x => {
       var m = 0
       man.forEach(item => {
           if (item.level === x) {
               m = item.value
           }
       })
       manlist.push(m)
       var f = 0
       woman.forEach(item => {
           if (item.level === x) {
               f = item.value
           }
       })
       womanlist.push(f)
   })
   // 更改数据，以便tooltip显示
   var mRatio = ratio(manlist, sum(manlist))
   var fRatio = ratio(womanlist, sum(womanlist))
   var mData = []
   var fData = []
   var blankData = []
   for (var i = 0; i < orderRiskList.length; i++) {
       mData.push({
           name: orderRiskList[i],
           value: isNaN(Number(mRatio[i])) ? '' : mRatio[i],
           // value: 0,
           value2: manlist[i],
           tooltip: {
               formatter: function(params) {
                   var s = ''
                   s += '等级：' + params.data.name + '</br>'
                   s += '人数: ' + Number(params.data.value2).toLocaleString() + '</br>'
                   s += '占比: ' + params.data.value + '%'
                   return s
               }
           }
       })
       fData.push({
           name: orderRiskList[i],
           value: isNaN(Number(fRatio[i])) ? '' : fRatio[i],
           value2: womanlist[i],
           tooltip: {
               formatter: function(params) {
                   var s = ''
                   s += '等级：' + params.data.name + '</br>'
                   s += '人数: ' + Number(params.data.value2).toLocaleString() + '</br>'
                   s += '占比: ' + params.data.value + '%'
                   return s
               }
           }
       })
       blankData.push({
           value: 100,
           tooltip: {
               formatter: function(params) {
                   return ''
               }
           }
       })
   }

   option = {
       baseOption: {
           title: {
               text: '不同性别下各个等级人数占比',
               left: 'center',
               textStyle: {
                   fontSize: 18,
                   fontWeight: 700
               }
           },
           tooltip: {
               trigger: 'item'
           },
           timeline: {
               show: false,
               top: 0,
               data: []
           },
           grid: [{
                   show: false,
                   left: '5%',
                   top: '20',
                   bottom: '20%',
                   containLabel: true,
                   width: '37%'
               },
               {
                   show: false,
                   left: '52%',
                   top: '20',
                   bottom: '20%',
                   width: '0%'
               },
               {
                   show: false,
                   right: '2%',
                   top: '20',
                   bottom: '20%',
                   containLabel: true,
                   width: '37%'
               }
           ],
           xAxis: [{
                   type: 'value',
                   inverse: true,
                   axisLine: {
                       show: false
                   },
                   axisTick: {
                       show: false
                   },
                   position: 'top',
                   axisLabel: {
                       show: false
                   },
                   splitLine: {
                       show: false
                   }
               },
               {
                   gridIndex: 1,
                   show: false
               },
               {
                   gridIndex: 2,
                   axisLine: {
                       show: false
                   },
                   axisTick: {
                       show: false
                   },
                   position: 'top',
                   axisLabel: {
                       show: false
                   },
                   splitLine: {
                       show: false
                   }
               }
           ],
           yAxis: [{
                   type: 'category',
                   inverse: true,
                   position: 'right',
                   axisLine: {
                       show: false
                   },
                   axisTick: {
                       show: false
                   },
                   axisLabel: {
                       show: false
                   },
                   data: orderRiskList
               },
               {
                   gridIndex: 1,
                   type: 'category',
                   inverse: true,
                   position: 'left',
                   axisLine: {
                       show: false
                   },
                   axisTick: {
                       show: false
                   },
                   axisLabel: {
                       show: true,
                       textStyle: {
                           color: '#333',
                           fontSize: 14
                       }
                   },
                   data: orderRiskList.map(function(value) {
                       return {
                           value: value,
                           textStyle: {
                               align: 'center'
                           }
                       }
                   })
               },
               {
                   gridIndex: 2,
                   type: 'category',
                   inverse: true,
                   position: 'left',
                   axisLine: {
                       show: false
                   },
                   axisTick: {
                       show: false
                   },
                   axisLabel: {
                       show: false
                   },
                   data: orderRiskList
               }
           ],
           series: []
       },
       options: [{
           series: [{
                   type: 'bar',
                   xAxisIndex: 0,
                   yAxisIndex: 0,
                   itemStyle: {
                       normal: {
                           show: false,
                           color: 'rgba(65, 217, 199, 0.1)',
                           borderWidth: 0
                       },
                       emphasis: {
                           color: 'rgba(65, 217, 199, 0.1)'
                       }
                   },
                   barGap: '-100%',
                   barWidth: '50%',
                   data: blankData
               },
               {
                   name: '男',
                   type: 'bar',
                   xAxisIndex: 0,
                   yAxisIndex: 0,
                   itemStyle: {
                       normal: {
                           show: true,
                           color: function(params) {
                               return colorList[params.dataIndex]
                           },
                           borderWidth: 0,
                           borderColor: '#f8d517'
                       }
                   },
                   label: {
                       normal: {
                           show: true,
                           formatter: (series) => {
                               return mData[series.dataIndex].value + '%'
                           },
                           position: 'left',
                           textStyle: {
                               color: '#223273',
                               fontSize: 14
                           }
                       }
                   },
                   barWidth: '50%',
                   data: mData,
                   markPoint: {
                       symbol: 'image://data:image/svg+xml;base64,PHN2ZyBpZD0i57uEXzI5MDgiIGRhdGEtbmFtZT0i57uEIDI5MDgiIHhtbG5zPSJodHR' +
                           'wOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9' +
                           'IjAgMCAzNi45OTkgNzEuNDgiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IHVybCgjb' +
                           'GluZWFyLWdyYWRpZW50KTsKICAgICAgfQogICAgPC9zdHlsZT4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW' +
                           '50IiB4MT0iMC41IiB5MT0iLTAuMzU2IiB4Mj0iMC41IiB5Mj0iMSIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgo' +
                           'gICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMxYmM4ZmMiIHN0b3Atb3BhY2l0eT0iMC43OCIvPgogICAgICA8c3Rv' +
                           'cCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMTg0YjkiIHN0b3Atb3BhY2l0eT0iMC42OTQiLz4KICAgIDwvbGluZWFyR3JhZGllb' +
                           'nQ+CiAgPC9kZWZzPgogIDxwYXRoIGlkPSLot6/lvoRfMjM1IiBkYXRhLW5hbWU9Iui3r+W+hCAyMzUiIGNsYXNzPSJjbHMtMSIgZD' +
                           '0iTTEyLjg5MSwxNDguMzc5QTE4Ljg3NiwxOC44NzYsMCwwLDAsMCwxNjYuNDg2djEyLjkyMWExLjE2NywxLjE2NywwLDAsMCwxLjE' +
                           '1NiwxLjE1Nkg3LjM5NHYxNS42YS45NzQuOTc0LDAsMCwwLC45NzguOTYzSDI4LjYyN2EuOTc0Ljk3NCwwLDAsMCwuOTc4LS45NjN2' +
                           'LTE1LjZoNC44MTZBMi41OCwyLjU4LDAsMCwwLDM3LDE3Ny45ODRWMTY1LjMzYzAtMTEuNjQ3LTEyLjEyMS0yMC43NDUtMjQuMTA4L' +
                           'TE2Ljk1MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTEyNS42NDkpIi8+CiAgPHBhdGggaWQ9Iui3r+W+hF8yMzYiIGRhdGEtbm' +
                           'FtZT0i6Lev5b6EIDIzNiIgY2xhc3M9ImNscy0xIiBkPSJNNzMuOCwxMC43QTEwLjc1LDEwLjc1LDAsMSwwLDYzLjA1OCwyMS40LDE' +
                           'wLjc0NCwxMC43NDQsMCwwLDAsNzMuOCwxMC43Wm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NC41NSkiLz4KPC9zdmc+Cg==',
                       symbolSize: [25, 50],
                       label: {
                           position: 'right',
                           padding: [0, 0, 0, 10],
                           fontSize: 12,
                           color: '#333333',
                           formatter: '男'
                       },
                       // markPoint 图片的位置
                       data: [{
                           name: '某个屏幕坐标',
                           x: '30%',
                           y: '85%'
                       }],
                       silent: true
                   }
               },
               {
                   type: 'bar',
                   xAxisIndex: 2,
                   yAxisIndex: 2,
                   itemStyle: {
                       normal: {
                           show: true,
                           color: 'rgba(65, 217, 199, 0.1)',
                           borderWidth: 0
                       },
                       emphasis: {
                           color: 'rgba(65, 217, 199, 0.1)'
                       }
                   },
                   barGap: '-100%',
                   barWidth: '50%',
                   data: blankData
               },
               {
                   name: '女',
                   type: 'bar',
                   xAxisIndex: 2,
                   yAxisIndex: 2,
                   itemStyle: {
                       normal: {
                           show: true,
                           color: function(params) {
                               return colorList[params.dataIndex]
                           },
                           borderWidth: 0,
                           borderColor: '#f39c11'
                       }
                   },
                   label: {
                       normal: {
                           show: true,
                           formatter: (series) => {
                               return fData[series.dataIndex].value + '%'
                           },
                           position: 'right',
                           textStyle: {
                               color: '#223273',
                               fontSize: 14
                           }
                       }
                   },
                   barWidth: '50%',
                   data: fData,
                   markPoint: {
                       symbol: 'image://data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5' +
                           'rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzcuOTYgNjkuNSI+CiAgPGRlZnM+CiAgICA8c3R5' +
                           'bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogdXJsKCNsaW5lYXItZ3JhZGllbnQpOwogICAgICB9CiAgICA8L3N0eWxlP' +
                           'gogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSIwLjUiIHgyPSIwLjUiIHkyPSIxIiBncmFkaWVudF' +
                           'VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAzZWJiNyIvPgogICA' +
                           'gICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMGEzN2YiIHN0b3Atb3BhY2l0eT0iMC42OTQiLz4KICAgIDwvbGluZWFy' +
                           'R3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIGlkPSLnu4RfMjkwOSIgZGF0YS1uYW1lPSLnu4QgMjkwOSIgdHJhbnNmb3JtPSJ0cmFuc' +
                           '2xhdGUoMC4wNjIpIj4KICAgIDxwYXRoIGlkPSLot6/lvoRfMjM3IiBkYXRhLW5hbWU9Iui3r+W+hCAyMzciIGNsYXNzPSJjbHMtMS' +
                           'IgZD0iTTc5LjQzNiwxMC40NjdBMTAuNTE4LDEwLjUxOCwwLDEsMCw2OC45MjUsMjAuOTM0LDEwLjUxMiwxMC41MTIsMCwwLDAsNzk' +
                           'uNDM2LDEwLjQ2N1ptMCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkuOTg2KSIvPgogICAgPHBhdGggaWQ9Iui3r+W+hF8yMzgi' +
                           'IGRhdGEtbmFtZT0i6Lev5b6EIDIzOCIgY2xhc3M9ImNscy0xIiBkPSJNMzcuNzg1LDE3Ni4wODNsLTUuNzU1LTIyLjVhMTMuNDE5L' +
                           'DEzLjQxOSwwLDAsMC0yNi4xODItLjIxN2wtNS44LDIyLjdhMy44MjUsMy44MjUsMCwwLDAsLjY2NywzLjIxOCwzLjc1OCwzLjc1OC' +
                           'wwLDAsMCwyLjkyOCwxLjQ3OXMyLjgyNy4wNTgsNS4wNi4wNzJjLjcyNSwyLjE0NiwxLjc4Myw1LjI5MiwyLjc1NCw4LjM1QTMuNzI' +
                           'xLDMuNzIxLDAsMCwwLDE1LDE5MS43NjloNy44NThhMy42NzcsMy42NzcsMCwwLDAsMy41MDgtMi41NTJjLjk3MS0zLjA1OSwyLjA1' +
                           'OS02LjMwNiwyLjc2OS04LjQ1MiwyLjIzMy0uMDE1LDUuMDYtLjAyOSw1LjA2LS4wMjlhMy43NjYsMy43NjYsMCwwLDAsMi45MjgtM' +
                           'S40NjQsMy42ODUsMy42ODUsMCwwLDAsLjY2Ny0zLjE4OVptMCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xMjIuMjY5KSIvPg' +
                           'ogIDwvZz4KPC9zdmc+Cg==',
                       symbolSize: [25, 50],
                       label: {
                           position: 'right',
                           padding: [0, 0, 0, 10],
                           fontSize: 12,
                           color: '#333333',
                           formatter: '女'
                       },
                       // markPoint 图片的位置
                       data: [{
                           name: '某个屏幕坐标',
                           x: '70%',
                           y: '85%'
                       }],
                       silent: true
                   }
               }
           ]
       }]
   }