   var colors = ['#9b92fe', '#7ba5c6', '#1f62ea', '#1990e9', '#49ddfc', '#6bdafe', '#39f381', '#e9e37c'];
   // option
   option = {
       tooltip: {
           trigger: 'item',
           formatter: "{a} <br/>{b}: {c} ({d}%)"
       },
       legend: {
           orient: 'vertical',
           right: '10%',

           data: ["内圆1","内圆2" ]
       },
       series: [{
               name: '访问来源',
               type: 'pie',
               selectedMode: 'single',
               radius: [0, '45%'],
               label: {
                   show: false
               },
               labelLine: {
                   normal: {
                       show: false
                   }
               },
               color: colors,
               label: {
                   normal: {
                       position: 'inner',
                       color: "white"
                   }
               },
               labelLine: {
                   normal: {
                       show: false
                   }
               },

               data: [{
                       value: 335,
                       name: '内圆1'
                   },
                   {
                       value: 679,
                       name: '内圆2'
                   }
               ]
           },
           {
               name: '访问来源',
               type: 'pie',
               radius: ['64%', '85%'],
               color: colors,
               labelLine: {
                   normal: {
                       show: false
                   }
               },
               label: {
                   show: false
               },
               data: [{
                       mx:"种类",
                       value: 335,
                       name: '内圆1'
                   },
                   {
                       value: 310,
                       name: '内圆1'
                   },
                   {
                       value: 234,
                       name: '内圆1'
                   },
                   {
                       value: 135,
                       name: '内圆2'
                   },
                   {
                       value: 1048,
                       name: '内圆2'
                   },
                   {
                       value: 251,
                       name: '内圆2'
                   },
                   {
                       value: 147,
                       name: '内圆2'
                   },
                   {
                       value: 102,
                       name: '内圆2'
                   }
               ]
           }
       ]
   };