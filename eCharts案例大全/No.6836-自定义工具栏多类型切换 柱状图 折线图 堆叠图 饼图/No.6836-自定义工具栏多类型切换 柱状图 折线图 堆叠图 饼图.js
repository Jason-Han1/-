     //图表所用的基本数据
     var chartOpt = {
         id: 'chart-panel',
         type: 'bar',
         flag: false,
         title: '',
         legend: ['阿里巴巴', '腾讯', '京东', '百度', '字节跳动'],
         xAxisData: ["2000", "2001", "2002", "2003", ],
         viewData1: [{
                 name: '阿里巴巴',
                 data: ['100', '125', '234', '400']
             },
             {
                 name: '腾讯',
                 data: ['200', '134', '322', '289']
             },
             {
                 name: '京东',
                 data: ['300', '288', '422', '389']
             },
             {
                 name: '百度',
                 data: ['400', '335', '112', '425']
             },
             {
                 name: '字节跳动',
                 data: ['500', '89', '79', '110']
             }
         ],
         viewData2: [{
                 name: '2000',
                 data: ['89', '17', '25', '122', '200']
             },
             {
                 name: '2001',
                 data: ['123', '456', '117', '224', '233']
             },
             {
                 name: '2002',
                 data: ['288', '321', '178', '66', '386']
             },
             {
                 name: '2003',
                 data: ['188', '467', '112', '347', '123']
             },

         ],
         pieTitle: '',
         pieData: [{
             type: 'pie',
             radius: '55%',
             center: ['50%', '60%'],
             data: [{
                     value: '100',
                     name: '阿里巴巴'
                 },
                 {
                     value: '300',
                     name: '腾讯'
                 },
                 {
                     value: '200',
                     name: '京东'
                 },
                 {
                     value: '600',
                     name: '百度'
                 },
                 {
                     value: '123',
                     name: '字节跳动'
                 },
             ],
             emphasis: {
                 itemStyle: {
                     shadowBlur: 10,
                     shadowOffsetX: 0,
                     shadowColor: 'rgba(0, 0, 0, 0.5)'
                 }
             }
         }]
     }

     initEcharts()
     // 对基本数据进行二次遍历 添加必要属性
     function initData() {
         if (chartOpt.type == 'stack') {
             $.each(chartOpt.viewData1, function(index, item) {
                 item.type = 'bar';
                 item.stack = 'stack';
             })
             $.each(chartOpt.viewData2, function(index, item) {
                 item.type = 'bar';
                 item.stack = 'stack';
             })
         } else {
             $.each(chartOpt.viewData1, function(index, item) {
                 item.type = chartOpt.type;
                 item.stack = '';
             })
             $.each(chartOpt.viewData2, function(index, item) {
                 item.type = chartOpt.type;
                 item.stack = '';
             })
         }
     }

     function initEcharts() {
         initData()

         var myChart = echarts.init(document.getElementById(chartOpt.id));
         var color = ['#71BBEE', '#86DDF3', '#FEB2DA', '#B3DFEC', '#B9C0EA', '#E8A5CC', '#8474C7', '#AE8FDC', '#D395E0', '#F282A7', '#F0725C', '#F6AC5A', '#FADA88', '#4893C0', '#8ADFE3', '#55C5D1', '#4699C2', '#5155A0', '#7256A6', '#B39FD5', '#FFD574', '#F79C65', '#FC8476', '#ACBFEA', '#C8D5F6', '#F99DB0'];

         var tooltip = {
             trigger: 'axis',
             axisPointer: {
                 type: 'shadow'
             }
         };
         var grid = {
             left: '3%',
             right: '4%',
             bottom: '3%',
             containLabel: true
         };
         var toolbox = {
             show: true,
             itemGap: 20,
             itemSize: 26,
             right: 0,
             feature: {
                 mySwitch: {
                     show: true,
                     title: '转换视图',
                     icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNklEQVQ4T6WTIU8DQRCF981vQCBwzdwlCDQCQishEFAkSBIEGP4CxaFBgMJhsJCQIKAEg8MR9iZXheBPdB/Zy7W5Xkm4Cytn33wz+2YH7p8H9Xzv/RyAfQAbqtozs8UQwm5dJyK3qvoxBfDe7wA4A5A65wYl4Nk51/2l0eJ+AhgOh0uj0eiR5BOAc1V9i0lm1gyQZdkhgEsR2ep0Ovfjio0AZnZStrlA8jtJktVWgLLVawB7JNdVddAaUEK61eQY8973RWStbmII4SVN035hYhSNBSLCEMLE3CiqJpvZVJFC+JdRled0ATyQvFHVgxhvBciy7BXAvHPuq/wnp60AeZ5vhhDuSB4lSXLVqgMzWyZ5LCLbJFdU9b0xoOZRrzqpmSnUxxWnEAEkPwFcxAWqama2se12/wBk+7IRXm9j1AAAAABJRU5ErkJggg==',
                     onclick: function() {
                         chartOpt.flag = !chartOpt.flag
                         initEcharts();
                     }
                 },
                 myBar: {
                     show: true,
                     title: '切换为柱状图',
                     icon: chartOpt.type == 'bar' ?
                         'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAc0lEQVQ4T2NkoBAw4tIvNO32f2S5d1mqWNXiNQCmCWQYVQwQmnqzAcVV2eoNJLkA7K3//xrBhjAy1YNcBTYAm8nIzoaxsYlBDMBiMskGoAfYqAGqjCSHAXqyxZaUsYnhTEjE5jFEOiBWB5I6eEokQy9cCwAQ39oRZIcmAwAAAABJRU5ErkJggg==' :
                         'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAcUlEQVQ4T+2TYQrAIAhGp3cRj7l2zPAubhgUITaK9nP9Cs3HQ77g2DwwmheRu+8RUfj2FVCHDPYJIOeceitmTksGZqKql0EQ8TSrAojIvXa9R7UCiMjLAL+wH0CwvAMf2yjKUW0YpNk/1nIwO+BNtw0e6FncETIFnTsAAAAASUVORK5CYII=',
                     onclick: function() {
                         chartOpt.type = 'bar';
                         initEcharts();
                     }
                 },
                 myLine: {
                     show: true,
                     title: '切换为折线图',
                     icon: chartOpt.type == 'line' ?
                         'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABdElEQVQ4T62TvUoDQRDHZ/YEUUTIWQh2kmxMZZVCURARG60CElS00EZvgz7D4TvkzhewucYnEDFNCgXBSrMJEcRCyK34URg0u7KXOwkhQkzcanc+fvOfGRahz4M6P+bw82dGF3th/Q/AdPmFsOjCXxSY+TsbDOIFCkyHFwWjs90CgmQ0MgRINgSUrwRLpFsBY24541uJ03ZokAxktSEb2ZeDVLUJcPmNsOh0FGw63APENURc9vfjZz/2ZuUlxMa6b009anuooHQrWDIVtuMhYlUqcoIgr1HhjJ+LX4ay5z6N4Y23vYlaBI1mUBGMxnVlBKj5jLJgvfnKPKIsgJJHgJiGL9wUh/S1ta0mIM8fAKGIAHWf0e3WgNhxZQWl3B0dGti635n8aJ9JpOBJMDr+6xZsm4Bty07+aAtCsITZ7Ro7tFB6F7nkSO8Al9eFRQd7BzhcgQIPCBBQSBQAIUoaCoEAIAHQdu1FopTS76B1/QGDSz/nGyrui2+v+pGrAAAAAElFTkSuQmCC' :
                         'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABTElEQVQ4T62TMUvEMBiGvy89cHFy8Qe4OHl3eTNUFKSIi04HIiq6OPoriv/FpYu/QESXG9q04OQiN4iDcDgUB4WSSEoD5VQ4rYFC8iXv0/fNR5g6Dnb6PM9vpJTRX1j/A9Ba3wLY+o2DNE3jIAiS2oHWegxgfV6AEwshRr1e78ADMgCqDdBajwBczUIb8Z4T9/v9iQfcA1jzh/M8T4hon4h2pJTXvt6It4MgOBwMBs+uXgOyLHtQSq02HUmstRMiumTmgpnD4XCYNpk3jDFHSqmph3oHjwBWmj9PpZTnDXiTme+MMRfMrKqqOg7DsGzH8g6ehBBja+0HgNP2gaIodo0xZ2VZnkRR9D57J97BC4Dln7oQx7GI49h8t+8BrwCW5m3jlwha6zcAi10ALvtCF4AlooSZhbVWEJH7Ajd3Nbdu7zFzHd09wHrSZXwCvbCTPyDeKH4AAAAASUVORK5CYII=',
                     onclick: function() {
                         chartOpt.type = 'line';
                         initEcharts();
                     }
                 },
                 myStack: {
                     show: true,
                     title: '切换为堆叠图',
                     icon: chartOpt.type == 'stack' ?
                         'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAg0lEQVQ4T2NkoBAwUqifAacB/NMeCiIb/jFL/j02y3AaID7tltJfBiawIcwM/96/zFK7R7EB2FyF0wWC029vQLbxfaZqADZXgQ3AJiE07fYqBgaGUKghq99lqYZRbAA2V4FdgM02YsVGDVANg4UBLLrAsfYuS3W10LTbRInRLjMRm0sBMJCbEa2ksw0AAAAASUVORK5CYII=' :
                         'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAgklEQVQ4T+2TwQnAIAxFUzfoBELhO08v7ZDtpfP4oeAEbiAFqeAhgiC91WMk7z8SMsngmwb7pQkIIcw13FobtbAmwHu/GGMyJKUUnXP3MECzahqQvOpEAKtmlQHaB8lDRLYXcgLYhwGaVTbQ0nprPwB7mUFZV94agJNkV+27Y+q90geZX6ERodWiEgAAAABJRU5ErkJggg==',
                     onclick: function() {
                         chartOpt.type = 'stack';
                         initEcharts();
                     }
                 },
                 myPie: {
                     show: true,
                     title: '切换为饼图',
                     icon: chartOpt.type == 'pie' ?
                         'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABuklEQVQ4T6XTPUgcQRQH8P+bWyxCUHcljRhQ4jsJUYgRbLRQEG2sAjGpYhe5uSRESfoU9kLOvY1gl84PAimSLrGy0nQi3KxB0C46J5JCjrt9YQ/28BRzhJtuHvN+w3tvhtDkoibzcSPgBWYeERZA6ALwTSBfijr98eqF1wDPD58C8hbAIREOKnFyGceOgxkRjNssT15G6gAvH74AZCWqYPzsFW+158xYysHd0wx/ipPcIHwGyLtihocSpAa0+4WHiuiHAk2c6N7d+EAVSMnoqU4vJgle3iwB2LOaV+NYDfDy5glAs1b3TieHY0CpaMxm+94nMTcIRyAyV9T8/CrwRgRczHL2X0Dr6pHnlC5+Ws3dDYHOlZ1bF5W2z1bzVILe/mDutDgoWM1uwxKqfQjMoBJsWM33qo30D0aJopzVPFgHtC2bR0phOwUaSZqY3NrhFx4L0ZrV7Li+8YlQsprn64B40+GHL4UkB2DGal6/PG83CPtJsAFE51anh6+NsTYm30yCsCnAdwJ+xXER9IDwAIIlUeWvZ5n7hzcC1Tpz+wNQLf0E6YSSCILjUhlbf17z74ZP+X8/V9O/8S9fwqwRJeEtLQAAAABJRU5ErkJggg==' :
                         'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABjklEQVQ4T6WTP0jbURDHvwclg0uo4FIsKP6+L4RaaBW66BCh1MVJ8M+kWzu0Q1vq7uDuIEILbt1qi9BBt5rJKbpJ4PcuIsTNrVMo4V15JT/5RatBcts77j737u57gj5N+szHrQDv/QcAHwEMAzgws5/Ouc/XC94AqOqSmX0CcA6gEZMBXABYBDBD8lUe0gVQ1ddm9qUTWPXeVwA8Jvk1JqnqspmtkZzMIFeANE2ficihiLxMkuQ4BkSAmU075zayBO/9JoBTkjvRdwXw3i+IyGqSJHO54EoIoVIqldYzn6pOmdkbkivXAe8BkOTbuwDNZnOw1WqdkBzpCajVagPFYnGP5GwOOgQgJfmwZwudOTwH8J3kWHw3Go3pEMIWyejvmsEEgCMRmcqGmFVN03ReRL6RfOC93wbwh2TUSbeQVPWdmW3FnZPcze9bVcfjT0IIv51zL26sMddjFMoPAL8AnHX8owCeANhst9v75XI5iuyf/VfK9Xr9aaFQGDezR2YWOkqskrzsKeX7Hlff1/gXMTWtESTBKS8AAAAASUVORK5CYII=',
                     onclick: function() {
                         chartOpt.type = 'pie';
                         initEcharts();
                     }
                 }
             }
         };
         // 指定图表的配置项和数据
         var option = {
             tooltip: tooltip,
             color: color,
             dataZoom: [{
                 show: true,
                 end: 90,
                 dataBackground: {
                     lineStyle: {
                         opacity: 0
                     },
                     areaStyle: {
                         opacity: 0
                     }
                 }
             }],
             toolbox: toolbox,
             legend: {
                 data: chartOpt.flag ? chartOpt.xAxisData : chartOpt.legend,
             },
             grid: grid,
             xAxis: [{
                 type: 'category',
                 data: chartOpt.flag ? chartOpt.legend : chartOpt.xAxisData,

             }],
             yAxis: [{
                 type: 'value'
             }],
             series: chartOpt.flag ? chartOpt.viewData2 : chartOpt.viewData1
         }
         if (chartOpt.type == 'pie') {
             toolbox.feature.mySwitch.show = false;
             option = {
                 tooltip: {
                     trigger: 'item',
                     formatter: function(params) {
                         var result = ''
                         result += params.marker + params.name + params.value
                         return result
                     }
                 },
                 label: {
                     formatter: function(params) {
                         var result = ''
                         result += params.name + ' : ' + params.percent + '%'
                         return result
                     }
                 },
                 color: color,
                 dataZoom: {
                     show: false
                 },
                 toolbox: toolbox,
                 legend: {
                     data: chartOpt.legend
                 },
                 grid: grid,
                 xAxis: {
                     show: false
                 },
                 yAxis: {
                     show: false
                 },
                 series: chartOpt.pieData
             }
         }

         myChart.setOption(option, true);
         window.onresize = function() {
             myChart.resize();
         }
     }

     //qq 45664741