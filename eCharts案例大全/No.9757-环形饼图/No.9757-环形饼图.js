 option = {
     backgroundColor: '#0b214a',
     title: {
         text: '年龄',
         left: 284,
         top: 40,
         textStyle: {
             fontSize: '16',
             color: '#fff',
         }
     },
     tooltip: {
         trigger: 'item',
         formatter: "{a} <br/>{b}: {c} ({d}%)"
     },
     legend: {
         orient: 'vertical',
         left: '65%',
         top: '45%',
         itemWidth: 13,
         itemHeight: 13,
         textStyle: {
             color: '#ffffff',
             fontsize: 14,
             lineHeight: 18,
         }
     },
     color: ['#30cd7f', '#06a3ff', '#e7c161', '#d24d45', ' #2fd9c2'],
     series: [{ //主要
             name: '年龄',
             type: 'pie',
             radius: ['30%', '50%'],
             center: ['40%', '50%'],
             avoidLabelOverlap: false,
             label: {
                 normal: {
                     show: false,
                     position: 'center'
                 },
             },
             labelLine: {
                 normal: {
                     show: false
                 }
             },
             itemStyle: {
                 borderWidth: 4, //设置border的宽度有多大
                 borderColor: "rgba(19,28,105,0.5)",
             },
             data: [{
                     value: 335,
                     name: '35岁以下占50% 全省40% 全国50%'
                 },
                 {
                     value: 335,
                     name: '38-45岁占20% 全省40% 全国50% '
                 },
                 {
                     value: 335,
                     name: '46-55岁占20% 全省40% 全国50%'
                 },
                 {
                     value: 335,
                     name: '56-60岁占10% 全省40% 全国50%'
                 },
                 {
                     value: 335,
                     name: '60岁以上占10% 全省40% 全国50%',

                 }
             ]
         }, { //外边框
             radius: ['54%', '55%'],
             center: ['40%', '50%'],
             type: 'pie',
             label: {
                 normal: {
                     show: false
                 },
                 emphasis: {
                     show: false
                 }
             },
             labelLine: {
                 normal: {
                     show: false
                 },
                 emphasis: {
                     show: false
                 }
             },
             animation: false,
             tooltip: {
                 show: false
             },
             data: [{
                 value: 1,
                 itemStyle: {
                     color: "rgba(17,61,123,0.6)",
                 },
             }],
         },
         { //内边框
             radius: ['20%', '21%'],
             center: ['40%', '50%'],
             type: 'pie',
             label: {
                 normal: {
                     show: false
                 },
                 emphasis: {
                     show: false
                 }
             },
             labelLine: {
                 normal: {
                     show: false
                 },
                 emphasis: {
                     show: false
                 }
             },
             animation: false,
             tooltip: {
                 show: false
             },
             data: [{
                 value: 1,
                 itemStyle: {
                     color: "rgba(17,61,123,0.6)",
                 },
             }],
         },
         { //内边框背景
             radius: ['50%', '55%'],
             center: ['40%', '50%'],
             type: 'pie',
             label: {
                 normal: {
                     show: false
                 },
                 emphasis: {
                     show: false
                 }
             },
             labelLine: {
                 normal: {
                     show: false
                 },
                 emphasis: {
                     show: false
                 }
             },
             animation: false,
             tooltip: {
                 show: false
             },
             data: [{
                 value: 1,
                 itemStyle: {
                     color: "rgba(19,28,105,0.5)",
                 },
             }],
         },
         { //内边框背景
             radius: ['21%', '33%'],
             center: ['40%', '50%'],
             type: 'pie',
             label: {
                 normal: {
                     show: false
                 },
                 emphasis: {
                     show: false
                 }
             },
             labelLine: {
                 normal: {
                     show: false
                 },
                 emphasis: {
                     show: false
                 }
             },
             animation: false,
             tooltip: {
                 show: false
             },
             data: [{
                 value: 1,
                 itemStyle: {
                     color: "rgba(19,28,105,0.5)",
                 },
             }],
             zlevel: 999,
         }
     ]
 };