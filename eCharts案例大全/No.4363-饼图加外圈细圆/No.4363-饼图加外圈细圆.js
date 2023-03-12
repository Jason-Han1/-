 var data = [{
     "name": "审核",
     "value": 50
 }, {
     "name": "核准",
     "value": 20
 }, {
     "name": "备案",
     "value": 30
 } ]


 option = {

     color: ['#15faff', '#00a0e9', '#5555b5'],
     backgroundColor: '#000',
     title: {
         text: '总计（个）',
         subtext: 7789,
         textStyle: {
             color: '#ffffff',
             fontSize: 14,
             // align: 'center'
         },
         subtextStyle: {
             fontSize: 30,
             color: ['#15faff']
         },
         x: 'center',
         y: 'center',
     },
     grid: {
         bottom: 150,
         left: 100,
         right: '10%'
     },
     legend: {
         orient: 'vertical',
         top: "middle",
         right: "5%",
         textStyle: {
             color: ['#15faff', '#00a0e9', '#5555b5'],
             fontSize: 12,

         },
         icon: 'roundRect',
         data: data,
     },
     series: [
         // 主要展示层的
         {
             radius: ['15%', '25%'],
             center: ['50%', '50%'],
             type: 'pie',
             label: {
                 normal: {
                     padding: [0, -90],
                     show: true,
                     formatter: '{b|{b}:}{c|{c}个}\n{hr|}\n{d|{d}%}',
                     rich: {
                        b: {
                          fontSize: 16,
                          color: '#ffffff',
                          align: 'center',
                          padding: 4
                        },
                        c: {
                          fontSize: 16,
                          align: 'center',
                          padding: 4,
                          color: '#ffffff',
                          fontWeight: 1000
                        },
                        d: {
                          fontSize: 16,
                          align: 'center',
                          padding: 4,
                          color: '#ffffff',
                          fontWeight: 1000
                        }
                      },
                     textStyle: {
                         fontSize: 30,

                     },
                     position: 'outside'
                 },
                 emphasis: {
                     show: true
                 }
             },
             labelLine: {
                 normal: {
                     show: true,
                     length: 40,
                     length2: 150
                 },
                 emphasis: {
                     show: true
                 }
             },
             name: "办结总数",
             data: data,

         },
        {
             name: '外边框',
             type: 'pie',
             clockWise: false, //顺时加载
             hoverAnimation: false, //鼠标移入变大
             center: ['50%', '50%'],
             radius: ['28%', '28%'],
             label: {
                 normal: {
                     show: false
                 }
             },
             data: [{
                 value: 9,
                 name: '',
                 itemStyle: {
                     normal: {
                         borderWidth: 2,
                         borderColor: '#14e9f2'
                     }
                 }
             }]
         },
     ]
 };