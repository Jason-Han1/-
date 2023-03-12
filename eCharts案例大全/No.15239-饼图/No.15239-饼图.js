 option = {
     tooltip: {
         trigger: 'item',
         formatter: "{a} <br/>{b} : {c} ({d}%)"
     },
     legend: {
         orient: 'vertical',
         left: 'left',
         data: ['待办任务']
     },
     series: [{
         name: '事件处置',
         type: 'pie',
         radius: ['40%', '60%'],
         label: {
             normal: {
                 position: 'center'
             }
         },
         data: [{
             value: 3,
             name: '待办',
             label: {
                 normal: {
                     formatter: '{d}%',
                     textStyle: {
                         fontSize: 16,
                         fontWeight: 'bold'
                     }
                 }
             },
             itemStyle: {
                 normal: {
                     color: '#007be8'
                 },
                 emphasis: {
                     color: '#007be8'
                 }
             }
         }, {
             value: 10,
             name: '占位',
             label: {
                 normal: {
                     formatter: '\n待办',
                     textStyle: {
                         color: '#555',
                         fontSize: 12
                     }
                 }
             },
             tooltip: {
                 show: false
             },
             itemStyle: {
                 normal: {
                     color: '#aaa'
                 },
                 emphasis: {
                     color: '#aaa'
                 }
             },
             hoverAnimation: false
         }]
     }]
 };