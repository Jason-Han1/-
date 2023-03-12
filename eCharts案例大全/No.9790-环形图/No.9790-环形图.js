 var dataStyle = {
     normal: {
         label: {
             show: false
         },
         labelLine: {
             show: false
         },
     }
 };
 var placeHolderStyle = {
     normal: {
         color: 'rgba(0,0,0,0)',
         label: {
             show: false
         },
         labelLine: {
             show: false
         }
     },
     emphasis: {
         color: 'rgba(0,0,0,0)'
     }
 };
 option = {
     backgroundColor: '#0b214a',
     color: ['#654dfe', '#3e94ff', '#5ff2ff', '#8bff63', '#fff263'],
     tooltip: {
         show: true,
         formatter: "{b} : {c}"
     },
     series: [{
             name: 'Line 4',
             type: 'pie',
             clockWise: false, //是否顺时针显示
             startAngle: 0, //起始角度
             hoverAnimation: false,
             clockwise: false,
             radius: ['50%', '55%'],
             itemStyle: dataStyle,

             data: [{
                     value: 7645434,
                     name: '1'
                 }, {
                     value: 3612343,
                     name: '总数',
                     tooltip: {
                         show: false
                     },
                     itemStyle: placeHolderStyle
                 }

             ]
         }, {
             name: 'Line 3',
             type: 'pie',
             clockWise: false,
             startAngle: 0, //起始角度
             radius: ['40%', '45%'],
             itemStyle: dataStyle,
             hoverAnimation: false,

             data: [{
                 value: 2632321,
                 name: '2'
             }, {
                 value: 2212343,
                 name: '总数',
                 tooltip: {
                     show: false
                 },
                 itemStyle: placeHolderStyle
             }]
         }, {
             name: 'Line 2',
             type: 'pie',
             clockWise: false,
             startAngle: 0, //起始角度
             hoverAnimation: false,
             radius: ['30%', '35%'],
             itemStyle: dataStyle,

             data: [{
                 value: 1823323,
                 name: '3'
             }, {
                 value: 1812343,
                 name: '总数',
                 tooltip: {
                     show: false
                 },
                 itemStyle: placeHolderStyle
             }]
         },
         {
             name: 'Line 1',
             type: 'pie',
             clockWise: false, //是否顺时针
             startAngle: 0, //起始角度
             radius: ['20%', '25%'],
             itemStyle: dataStyle,
             hoverAnimation: false,

             data: [{
                     value: 1342221,
                     name: '4'
                 }, {
                     value: 1912343,
                     name: '总数',
                     tooltip: {
                         show: false
                     },
                     itemStyle: placeHolderStyle
                 }

             ]
         },
         {
             name: 'Line 0',
             type: 'pie',
             clockWise: false,
             startAngle: 0, //起始角度
             hoverAnimation: false,
             radius: ['10%', '15%'],
             itemStyle: dataStyle,

             data: [{
                 value: 1223323,
                 name: '5'
             }, {
                 value: 1812343,
                 name: '总数',
                 tooltip: {
                     show: false
                 },
                 itemStyle: placeHolderStyle
             }]
         },

     ]
 };