 var seriesData=70
 var colorArr=['#0077F2','#F3CC49']
 var data = [{
         value: seriesData,
         name: '已完成',
     },
     {
         value: 100-seriesData,
         name: '进行中',
     }
 ]
 var Filldata = data[0].value / (data[0].value + data[1].value )
 option = {
     tooltip: {
         trigger: 'item',
         formatter: function(res) {

             if (res.componentSubType == 'liquidFill') {
                 return ''
             } else {
                 return '' + res.name + '：' + res.data.value + '项';
             }
         }
     },
     color:colorArr,
     title: {
         text: (Filldata * 100).toFixed(0) + '%',
         left: 'center',
         top: 'center',
         textStyle: {
             fontSize: 16,
             fontWeight: 'normal',
             color: '#fff'
         }
     },
     series: [
         {
             type: 'pie',
             radius: ['86%', '92%'],
             label: {
                 show: false,
             },
             labelLine: {
                 normal: {
                     show: false
                 }
             },
             hoverAnimation: false,
             data: data
         }
     ]
 }