   function menuFormater(params, label) {
       let obj = null;
       if (params instanceof Array) {
           obj = params[0]
       } else {
           obj = params;
       }
       return obj.dataIndex != 11 ? '' : label;
   }

   var currentMenu;


   var option = {
       title: {
           text: 'echarts 小程序'
       },
       xAxis: {
           position: 'top',
           type: 'value',
           axisTick: {
               show: false
           },
           axisLabel: {
               show: false
           },
           axisLine: {
               show: false
           },
           splitLine: {
               show: false
           }

       },
       yAxis: {
           type: 'category',
           data: ['', '', '', '', '', '', '', '', '', '', '', ''],
           axisTick: {
               show: false
           },
           axisLabel: {
               show: false
           },
           axisLine: {
               show: false
           },
           splitLine: {
               show: false
           }

       },
       series: [{
           name: 'file',
           type: 'bar',
           stack: '总量',
           label: {
               normal: {
                   formatter: function(params) {
                       return menuFormater(params, 'File >')
                   },
                   textStyle: {
                       fontSize: 14,
                       color: '#000'
                   },
                   show: true,
                   position: [10, 10]
               }
           },
           data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300],
           itemStyle: {
               normal: {
                   color: '#99a9bf'
               }
           }
       }, {
           name: 'edit',
           type: 'bar',
           stack: '总量',
           label: {
               normal: {
                   formatter: function(params) {
                       return menuFormater(params, 'Edit')
                   },
                   textStyle: {
                       fontSize: 14,
                       color: '#000'
                   },
                   show: true,
                   position: [10, 10]
               }
           },
           data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300],
           itemStyle: {
               normal: {
                   color: '#99a9bf'
               }
           }
       }, {
           name: 'view',
           type: 'bar',
           stack: '总量',
           label: {
               normal: {
                   formatter: function(params) {
                       return menuFormater(params, 'View')
                   },
                   textStyle: {
                       fontSize: 14,
                       color: '#000'
                   },
                   show: true,
                   position: [10, 10]
               }
           },
           data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300],
           itemStyle: {
               normal: {
                   color: '#99a9bf'
               }
           }
       }, {
           name: 'help',
           type: 'bar',
           stack: '总量',
           label: {
               normal: {
                   formatter: function(params) {
                       return menuFormater(params, 'Help')
                   },
                   textStyle: {
                       fontSize: 14,
                       color: '#000'
                   },
                   show: true,
                   position: [10, 10]
               }
           },
           data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300],
           itemStyle: {
               normal: {
                   color: '#99a9bf'
               }
           }
       }, {
           name: 'about',
           type: 'bar',
           stack: '总量',
           label: {
               normal: {
                   formatter: function(params) {
                       return menuFormater(params, 'About')
                   },
                   textStyle: {
                       fontSize: 14,
                       color: '#000'
                   },
                   show: true,
                   position: [10, 10]
               }
           },
           data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300],
           itemStyle: {
               normal: {
                   color: '#99a9bf'
               }
           },
           barGap: '1%',
       }]
   };

   myChart.on('click', function(params) {
       if(params.seriesName === 'file'){
           showSubMenu(params);
       }
        
       if(params.seriesName === 'view'){
           alert('hello echarts');
           return ;
       }
       if(params.seriesName === 'about'){
           alert('echart 小程序 1.0');
           return ;
       }
        console.log(params)
   });

   myChart.on('mouseover', function(params) {


   });


   function showSubMenu(params) {
       for (var i = 0; i < option.series.length; i++) {
           option.series[i].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300]
       }
     
       option.series[params.seriesIndex].data = [0, 0, 0, 0, 0, 0, 0, 300, 300, 300, 300, 300];
       myChart.setOption(option)
   }