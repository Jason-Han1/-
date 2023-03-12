 let data = {
     xData: [
         '2020-08-17',
         '2020-08-18',
         '2020-08-19',
         '2020-08-20',
         '2020-08-21',
         '2020-08-22',
         '2020-08-23',
         '2020-08-24',
         '2020-08-25',
         '2020-08-26'
     ]
     // yData: [0.1, 0.15, 0.18, 0.25, 0.23, 0.32, 0.33, 0.36, 0.57, 0.72, 0.45]
 }

 let xData = [
     '2020-08-17',
     '2020-08-18',
     '2020-08-19',
     '2020-08-20',
     '2020-08-21',
     '2020-08-22',
     '2020-08-23',
     '2020-08-24',
     '2020-08-25',
     '2020-08-26'
 ]

 let totDay = xData.length
 let generateData = []
 let spreadData = []
 let disappearData = []
 let dieData = []
 let secondData = []

 let trueData = []
 let predictData = []

 let generateDataIdx = [0, 1]
 let spreadDataIdx = [0, 1, 2, 3]
 let disappearDataIdx = [0, 0, 0, 1, 2, 3]
 let dieDataIdx = [0, 0, 0, 0, 0, 1, 2, 3]
 let secondDataIdx = [0, 0, 0, 0, 0, 0, 0, 1, 2, 3]

 let predictSet = new Set()
 predictSet.add('2020-08-22')
 predictSet.add('2020-08-23')
 predictSet.add('2020-08-24')
 predictSet.add('2020-08-25')
 predictSet.add('2020-08-26')

 let colorMap = {
     发生阶段: '#D24136',
     扩散阶段: '#EB8A3E',
     消弥阶段: '#EBB582',
     消亡阶段: '#785A46',
     二次扩散阶段: '#217CA3'
 }

 function hex2rgb(a) {
     if (a == '') {
         return ''
     }
     a = a.substring(1)
     a = a.toLowerCase()
     let b = new Array()
     for (let x = 0; x < 3; x++) {
         b[0] = a.substr(x * 2, 2)
         b[3] = '0123456789abcdef'
         b[1] = b[0].substr(0, 1)
         b[2] = b[0].substr(1, 1)
         b[20 + x] = b[3].indexOf(b[1]) * 16 + b[3].indexOf(b[2])
     }
     return 'rgba(' + b[20] + ',' + b[21] + ',' + b[22]
 }

 for (let i = 0; i < totDay; i++) {
     generateData.push('-')
     spreadData.push('-')
     disappearData.push('-')
     dieData.push('-')
     secondData.push('-')
     predictData.push('-')
     trueData.push('-')
 }

 generateData[0] = 0
 for (let i = 0; i < totDay; i++) {
     if (generateDataIdx[i]) {
         generateData[i] = Math.random() * 200
     }

     if (spreadDataIdx[i] > 1) {
         spreadData[i] = Math.random() * 200
     } else if (spreadDataIdx[i] === 1) {
         spreadData[i] = generateData[i]
     }

     if (disappearDataIdx[i] > 1) {
         disappearData[i] = Math.random() * 200
     } else if (disappearDataIdx[i] === 1) {
         disappearData[i] = spreadData[i]
     }

     if (dieDataIdx[i] > 1) {
         dieData[i] = Math.random() * 200
     } else if (dieDataIdx[i] === 1) {
         dieData[i] = disappearData[i]
     }

     if (secondDataIdx[i] > 1) {
         secondData[i] = Math.random() * 200
     } else if (secondDataIdx[i] === 1) {
         secondData[i] = dieData[i]
     }
 }

 console.log(dieData)

 let series = [{
         data: [{
             name: '发生阶段',
             value: 1
         }],
         label: {
             show: true,
             position: 'inside',
             formatter: '{b}',
             offset: [0, 10],
             textStyle: {
                 color: '#D24136'
             }
         },
         type: 'bar',
         barGap: 0,
         barWidth: '11.1%',
         itemStyle: {
             normal: {
                 color: '#fff'
             }
         },
         xAxisIndex: 1,
         yAxisIndex: 1
     },
     {
         data: [{
             name: '扩散阶段',
             value: 1
         }],
         label: {
             show: true,
             position: 'inside',
             formatter: '{b}',
             offset: [0, 10],
             textStyle: {
                 color: '#EB8A3E'
             }
         },
         type: 'bar',
         barGap: 0,
         barWidth: '22.2%',
         itemStyle: {
             normal: {
                 color: '#fff'
             }
         },
         xAxisIndex: 1,
         yAxisIndex: 1
     },
     {
         data: [{
             name: '消弥阶段',
             value: 1
         }],
         label: {
             show: true,
             position: 'inside',
             formatter: '{b}',
             offset: [0, 10],
             textStyle: {
                 color: '#EBB582'
             }
         },
         type: 'bar',
         barGap: 0,
         barWidth: '22.2%',
         itemStyle: {
             normal: {
                 color: '#fff'
             }
         },
         xAxisIndex: 1,
         yAxisIndex: 1
     },
     {
         data: [{
             name: '消亡阶段',
             value: 1
         }],
         label: {
             show: true,
             position: 'inside',
             formatter: '{b}',
             offset: [0, 10],
             textStyle: {
                 color: '#785A46'
             }
         },
         type: 'bar',
         barGap: 0,
         barWidth: '22.2%',
         itemStyle: {
             normal: {
                 color: '#fff'
             }
         },
         xAxisIndex: 1,
         yAxisIndex: 1
     },
     {
         data: [{
             name: '二次扩散阶段',
             value: 1
         }],
         label: {
             show: true,
             position: 'inside',
             formatter: '{b}',
             offset: [0, 10],
             textStyle: {
                 color: '#217CA3'
             }
         },
         type: 'bar',
         barCategoryGap: 0,
         barGap: 0,
         barWidth: '22.2%',
         itemStyle: {
             normal: {
                 color: '#fff'
             }
         },
         xAxisIndex: 1,
         yAxisIndex: 1
     }
 ]
 series.push({
     name: '发生阶段',
     data: generateData,
     type: 'line',
     xAxisIndex: 0,
     yAxisIndex: 0,
     itemStyle: {
         normal: {
             color: '#D24136',
             lineStyle: {
                 width: 2
             },
             areaStyle: {
                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: hex2rgb('#D24136') + ',0.2)'
                     },
                     {
                         offset: 1,
                         color: hex2rgb('#D24136') + ',0.1)'
                     }
                 ])
             }
         }
     },
     predict: false
 })

 series.push({
     name: '扩散阶段',
     data: spreadData,
     type: 'line',
     xAxisIndex: 0,
     yAxisIndex: 0,
     itemStyle: {
         normal: {
             color: '#EB8A3E',
             lineStyle: {
                 width: 2
             },
             areaStyle: {
                 color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                         offset: 0,
                         color: hex2rgb('#EB8A3E') + ',0.2)'
                     },
                     {
                         offset: 1,
                         color: hex2rgb('#EB8A3E') + ',0.1)'
                     }
                 ])
             }
         }
     },
     predict: false
 })

 series.push({
     name: '消弥阶段',
     data: disappearData,
     type: 'line',
     xAxisIndex: 0,
     yAxisIndex: 0,
     itemStyle: {
         normal: {
             color: '#EBB582',
             lineStyle: {
                 width: 2
             },
             areaStyle: {
                 color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                         offset: 0,
                         color: hex2rgb('#EBB582') + ',0.2)'
                     },
                     {
                         offset: 1,
                         color: hex2rgb('#EBB582') + ',0.1)'
                     }
                 ])
             }
         }
     },
     markPoint: {
         label: {
             normal: {
                 show: true,
                 align: 'center',
                 color: 'WHITE'
             }
         },
         itemStyle: {
             normal: {
                 color: 'red'
             }
         },
         data: [{
             coord: [4, disappearData[4]]
         }]
     },
     predict: false
 })

 series.push({
     name: '消弥阶段',
     data: disappearData,
     type: 'line',
     xAxisIndex: 0,
     yAxisIndex: 0,
     itemStyle: {
         normal: {
             color: '#EBB582',
             lineStyle: {
                 width: 2
             },
             areaStyle: {
                 color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                         offset: 0,
                         color: hex2rgb('#EBB582') + ',0.2)'
                     },
                     {
                         offset: 1,
                         color: hex2rgb('#EBB582') + ',0.1)'
                     }
                 ])
             }
         }
     },
     markPoint: {
         label: {
             normal: {
                 show: true,
                 align: 'center',
                 color: 'WHITE'
             }
         },
         itemStyle: {
             normal: {
                 color: 'red'
             }
         },
         data: [{
             coord: [4, disappearData[4]]
         }]
     },
     predict: false
 })

 let disappearData1 = []
 for (let i = 0; i < disappearData.length; i++) {
     disappearData1.push('-')
 }
 disappearData1[4] = disappearData[4]
 disappearData1[5] = dieData[5]
 disappearData[5] = '-'

 series.push({
     name: '消弥阶段',
     data: disappearData1,
     type: 'line',
     xAxisIndex: 0,
     yAxisIndex: 0,
     itemStyle: {
         normal: {
             color: '#EBB582',
             lineStyle: {
                 width: 2,
                 type: 'dashed' //'dotted'虚线 'solid'实线
             }
         }
     },
     predict: true
 })

 series.push({
     name: '消亡阶段',
     data: dieData,
     type: 'line',
     xAxisIndex: 0,
     yAxisIndex: 0,
     itemStyle: {
         normal: {
             color: '#785A46',
             lineStyle: {
                 width: 2,
                 type: 'dashed' //'dotted'虚线 'solid'实线
             }
         }
     },
     markPoint: {
         symbolOffset: [0, '-20%'],
         itemStyle: {
             normal: {
                 color: 'red',
                 label: {
                     color: 'red',
                     position: 'bottom',
                     formatter: function(params) {
                         //格式化展现（标签+值）
                         return '二次扩散起点'
                     }
                 }
             }
         },
         data: [{
             name: '二次扩散起点',
             coord: [7, dieData[7]]
         }]
     },
     predict: true
 })

 series.push({
     name: '二次扩散阶段',
     data: secondData,
     type: 'line',
     xAxisIndex: 0,
     yAxisIndex: 0,
     itemStyle: {
         normal: {
             color: '#217CA3',
             lineStyle: {
                 width: 2,
                 type: 'dashed' //'dotted'虚线 'solid'实线
             }
         }
     },
     predict: true
 })

 series.push({
     name: '预测',
     data: predictData,
     type: 'line',
     xAxisIndex: 0,
     yAxisIndex: 0,
     itemStyle: {
         normal: {
             color: '#217CA3',
             lineStyle: {
                 width: 2,
                 type: 'dashed' //'dotted'虚线 'solid'实线
             }
         }
     },
     predict: true
 })

 series.push({
     name: '实际',
     data: trueData,
     type: 'line',
     xAxisIndex: 0,
     yAxisIndex: 0,
     itemStyle: {
         normal: {
             color: '#217CA3',
             lineStyle: {
                 width: 2,
                 type: 'dashed' //'dotted'虚线 'solid'实线
             }
         }
     },
     predict: true
 })

 /**
    双X轴标签对应，伪实现思路：
    底部的标签也是柱状图，对应包含的区域为上方X轴条数占总数的比例，设为宽度即可
*/
 option = {
     backgroundColor: '#fff',
     tooltip: {
         trigger: 'axis',
         // axisPointer: {
         //     type: 'shadow'
         // },
         extraCssText: 'padding:5px;display:flex;font-size:12px;line-height:24px;color:black;background:#fff;box-shadow:0 0 3px rgba(0, 0, 0, 0.2)',
         formatter: function(params) {
             let date = ''
             let state = ''
             let value = 0
             for (let i = 0; i < params.length; i++) {
                 let obj = params[i]
                 // console.log(obj.seriesName, "obj")
                 if (obj.value !== '-') {
                     value = obj.value
                     date = obj.axisValue
                     state = obj.seriesName
                     break
                 }
             }
             let type = '实际'
             if (predictSet.has(date)) {
                 type = '预测'
             }
             let lineType = type === '实际' ? 'solid' : 'dashed'

             let html = ''
             html += `<div><span style="display:inline-block; margin-bottom:5px; width:20px; height:10px; border-bottom: 1px ${lineType} ${
              colorMap[state]
            }"></span><span style="margin-left:10px">${type}:</span><span style="margin-left:10px;font-weight:500; font-size:18px">${value.toFixed(
              0
            )}</span><span style="padding:5px; margin-left:10px; background:${hex2rgb(
              colorMap[state]
            )}, 0.3);border-radius:4px; color:${colorMap[state]}">${state}</span> </div>`
             return html
         }
     },
     legend: {
         show: true,
         top: 10,
         itemWidth: 15,
         itemHeight: 15,
         data: [{
                 name: '预测',
                 icon: 'line'
             },
             {
                 name: '实际',
                 icon: 'line',
                 color: 'black'
             },
             {
                 name: '发生阶段',
                 icon: 'rect'
             },
             {
                 name: '扩散阶段',
                 icon: 'rect'
             },
             {
                 name: '消弥阶段',
                 icon: 'rect'
             },
             {
                 name: '消亡阶段',
                 icon: 'rect'
             },
             {
                 name: '二次扩散阶段',
                 icon: 'rect'
             }
         ]
     },
     grid: [{
             top: 50,
             bottom: 60,
             left: 40,
             right: 40
         },
         {
             left: 40,
             right: 40,
             height: 40,
             bottom: 20
         }
     ],
     xAxis: [{
             type: 'category',
             data: data.xData,
             boundaryGap: false,
             gridIndex: 0,
             axisLabel: {
                 color: '#333'
             },
             axisLine: {
                 lineStyle: {
                     color: '#e7e7e7'
                 }
             },
             axisTick: {
                 lineStyle: {
                     color: '#e7e7e7'
                 }
             },
             zlevel: 2
         },
         {
             type: 'category',
             gridIndex: 1,
             axisLine: {
                 show: false
             },
             zlevel: 1
         }
     ],
     yAxis: [{
             type: 'value',
             gridIndex: 0,
             axisLabel: {
                 color: '#333'
             },
             splitLine: {
                 lineStyle: {
                     type: 'dashed'
                 }
             },
             axisLine: {
                 lineStyle: {
                     color: '#ccc'
                 }
             },
             axisTick: {
                 lineStyle: {
                     color: '#ccc'
                 }
             }
         },
         {
             type: 'value',
             gridIndex: 1,
             axisLabel: {
                 show: false
             },
             axisLine: {
                 show: false
             },
             splitLine: {
                 show: false
             },
             axisTick: {
                 show: false
             }
         }
     ],
     series: series
 }