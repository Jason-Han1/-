     var xData = ['粥', '小笼包', '生煎', '汤包', '炸酱面']
     var yData = ['70', '75', '76', '90', '95']
     var colorList = ['#97e7ff', '#75f5ff', '#00deff', '#0093ff', '#2a5fcf']
     var visualMapPiecesData = []
     // visualMap: {
     //   pieces: [
     //     { value: 123, label: '123（自定义特殊颜色）', color: 'grey' }
     //   ]
     // }
     for (var i = 0; i < xData.length; i++) {
         visualMapPiecesData.push({
             value: yData[i],
             label: xData[i],
             color: colorList[i]
         })
     }
     option = {
         title: {
             text: '早餐统计'
         },
         angleAxis: {
             axisLine: {
                 show: false
             },
             axisTick: {
                 show: false
             },
             axisLabel: {
                 show: false
             },
             splitLine: {
                 show: false
             },
             clockwise: false
         },
         radiusAxis: {
             type: 'category',
             data: xData,
             z: 100,
             axisLine: {
                 show: false
             },
             axisTick: {
                 show: false
             },
             axisLabel: {
                 show: false
             },
             splitLine: {
                 show: false
             }
         },
         polar: {},
         tooltip: {
             trigger: 'item',
             formatter: function(params, ticket, callback) {
                 return params.name + ' : ' + ' (' + params.data + '%)'
             }
         },
         visualMap: {
             top: 40,
             x: 'left',
             orient: 'vertical',
             textStyle: {
                 color: '#000'
             },
             pieces: visualMapPiecesData,
             outOfRange: {
                 color: '#999'
             }
         },
         series: [{
             type: 'bar',
             data: yData,
             coordinateSystem: 'polar',
             itemStyle: {
                 normal: {
                     // 定制显示（按顺序）
                     color: function(params) {
                         return colorList[params.dataIndex]
                     }
                 }
             }
         }]
     }