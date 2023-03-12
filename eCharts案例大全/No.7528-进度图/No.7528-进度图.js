 var xData = ['日均交易量', '日均交易金额']
 var yData = ['70', '75', '76', '80', '95', '75', '76', '90']
 var colorList = ['yellow', 'skyblue']
 var index = -1
 var visualMapPiecesData = []

 for (var i = 0; i < xData.length; i++) {
     visualMapPiecesData.push({
         value: yData[i],
         label: xData[i],
         color: colorList[i]
     })
 }
 
 
 option = {
    //  backgroundColor: "#000",
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
        //  data: xData,
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
     visualMap: {
         right: 40,
         bottom: '0',
         orient: 'horizontal',
         textStyle: {
             color: '#fff'
         },
         pieces: visualMapPiecesData,
         outOfRange: [{}]
     },
     series: [{
         type: 'bar',
         data: yData,
         coordinateSystem: 'polar',
         stack: 'a',
         z: 100,
         itemStyle: {
             normal: {
                 color: function(params) {
                     index = (index + 1) % colorList.length
                     return colorList[index]
                 }
             }
         }
     },{
         type: 'bar',
         data: [100, 100, 100, 100, 100, 100, 100, 100],
         coordinateSystem: 'polar',
         stack: 'a',
         itemStyle: {
             normal: {
                 color: "rgba(0,0,0,0.4)"
             }
         }
      }]
 }