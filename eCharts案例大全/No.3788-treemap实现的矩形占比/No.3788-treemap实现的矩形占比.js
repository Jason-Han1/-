 var count = 10;
 var data = new Array(count).fill({
     name: '类型名称',
     value: 0
 }).map((el, idx) => {
     return {
         name: el.name + idx,
         value: (idx + 1) * 5
     }
 })
 option = {
     color: ['rgba(52, 119, 246, 1)', 'rgba(52, 119, 246, 0.9)', 'rgba(52, 119, 246, 0.8)', 'rgba(52, 119, 246, 0.7)', 'rgba(52, 119, 246, 0.6)'],
     tooltip: {
         show: true,
         trigger: 'item'
     },
     series: [{

         width: '100%',
         height: '100%',
         type: 'treemap',
         roam: false,
         nodeClick: false,
         breadcrumb: {
             show: false
         },
         itemStyle: {
             borderWidth: 1
         },
         data: data
     }]

 };