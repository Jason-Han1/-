   let tc = ['#a40037', '#cf010b', '#eb7012', '#f19914', '#f7c71b', '#fdf21c', '#cade1b', '#96c71e', '#65af1c', '#019219']
   let uc = ['#7b014a', '#51005c', '#000267', '#004593', '#0162b3', '#007dd1', '#0198f1', '#0197ca', '#0195a3', '#019678']
   option = {
       title: {
           text: '协议组成'
       },
       legend: {
           orient: 'vertical',
           left: 'right',
           data: ['TCP', 'UDP']
       },
       grid: {
           left: '10px',
           right: '10px',
           top: '10px',
           bottom: '10px'
       },
       tooltip: {
           trigger: 'item',
           formatter: function(params) {
               if (params.seriesIndex != 0) {
                   return params.seriesName + '<br>' + params.data.type + '：' + params.value + ' (' + params.percent + '%)'
               } else {
                   return params.seriesName + '<br>' + params.name + '：' + params.value + ' (' + params.percent + '%)'
               }
           }
       },
       series: [{
           name: '传输层',
           type: 'pie',
           radius: [0, '30%'],
           label: {
               position: 'inner',
               formatter: '{b}\n{d}%'
           },
           labelLine: {
               show: false
           },
           selectedMode: 'single',
           data: [{
                   value: 500,
                   name: 'TCP'
               },
               {
                   value: 729,
                   name: 'UDP'
               }
           ]
       }, {
           name: '应用层',
           type: 'pie',
           radius: ['40%', '60%'],
           label: {
               formatter: function(params) {
                   return '{a|' + params.seriesName + '}{abg|}\n{hr|}\n  {b|' + params.data.type + '：}{v|' + params.value + '} {per|' + params.percent + '%}  '
               },
               backgroundColor: '#eee',
               borderColor: '#aaa',
               borderWidth: 0.5,
               borderRadius: 4,
               rich: {
                   a: {
                       color: '#999',
                       lineHeight: 30,
                       align: 'left',
                       padding: [0, 10]
                   },
                   hr: {
                       borderColor: '#aaa',
                       width: '100%',
                       borderWidth: 0.5,
                       height: 0
                   },
                   b: {
                       fontSize: 14,
                       lineHeight: 30
                   },
                   v: {
                       fontSize: 14,
                       lineHeight: 30
                   },
                   per: {
                       fontSize: 12,
                       color: '#eee',
                       backgroundColor: '#334455',
                       padding: [1, 3, 3, 3],
                       borderRadius: 2,
                   }
               }
           },
           data: [{
                   value: 265,
                   name: 'TCP',
                   type: 'TCP1',
                   itemStyle: {
                       color: tc[0]
                   }
               },
               {
                   value: 35,
                   name: 'TCP',
                   type: 'TCP2',
                   itemStyle: {
                       color: tc[1]
                   }
               },
               {
                   value: 200,
                   name: 'TCP',
                   type: 'TCP3',
                   itemStyle: {
                       color: tc[2]
                   }
               },
               {
                   value: 310,
                   name: 'UDP',
                   type: 'UDP1',
                   itemStyle: {
                       color: uc[0]
                   }
               },
               {
                   value: 134,
                   name: 'UDP',
                   type: 'UDP2',
                   itemStyle: {
                       color: uc[1]
                   }
               },
               {
                   value: 35,
                   name: 'UDP',
                   type: 'UDP3',
                   itemStyle: {
                       color: uc[2]
                   }
               },
               {
                   value: 50,
                   name: 'UDP',
                   type: 'UDP4',
                   itemStyle: {
                       color: uc[3]
                   }
               },
               {
                   value: 200,
                   name: 'UDP',
                   type: 'UDP5',
                   itemStyle: {
                       color: uc[4]
                   }
               }
           ]
       }]
   }