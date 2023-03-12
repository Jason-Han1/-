 option = {
     backgroundColor: '#fff',
     tooltip: {
         trigger: 'item',
         formatter: '{a} <br/>{b} : {c} ({d}%)'
     },
     color: ['#8fc31f', '#f35833', '#00ccff', '#ffcc00'],
     legend: {
         // orient: 'vertical', // 竖着排列
         x: 'center',
         y: 'bottom',
         data: ['准时', '迟到', '请假', '未到'],
         icon: 'circle',
         formatter: function(name) {
             var oa = option.series[0].data;
             var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
             for (var i = 0; i < option.series[0].data.length; i++) {
                 if (name == oa[i].name) {
                     return name + '     ' + oa[i].value + '     ' + (oa[i].value / num * 100).toFixed(2) + '%';
                 }
             }
         }
     },
     series: [{
         name: '签到比例分析',
         type: 'pie',
         radius: '55%',
         center: ['50%', '50%'],
         selectedMode: 'single',
         selectedOffset: 30,
         clockwise: true,
         data: [{
                 value: 335,
                 name: '准时'
             },
             {
                 value: 310,
                 name: '迟到'
             },
             {
                 value: 234,
                 name: '请假'
             },
             {
                 value: 135,
                 name: '未到'
             }
         ],
         itemStyle: {
             borderWidth: 2,
             borderColor: '#fff',
             emphasis: {
                 shadowBlur: 10,
                 shadowOffsetX: 0,
                 shadowColor: 'rgba(0, 0, 0, 0.5)'
             }
         },
         label: {
             normal: {
                 show: true,
                 // position: 'inside',
                 formatter: '{b} : {c} ({d}%)'
             }
         },
         labelLine: {
             show: true
         }
     }]
 };
 myChart.setOption(option);
 myChart.on('click', function(params) {
     console.log('clickclickclickclick444', params);
 });