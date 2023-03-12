 let defaultData = [8.09, 9.48, 11.67, 14.03, 16.12]
 let defaultData1 = [15.41, 18.71, 23.12, 28.78, 32.51]
 let defaultData2 = [22.85, 27.94, 35.13, 44.58]
 let defaultData3 = [30.24, 38.08, 45.97, 64.50]
 let titlename = ['2016', '2017', '2018', '2019', '2020'];

 option = {
     title: [{
             text: '恒瑞医药近五年营业收入情况',
             left: 'center',
             textStyle: {
                 color: '#FFFFFF',
                 align: 'center',
             }
         },
         {

             id: 'statistic',
             text: '单位：亿元',
             right: '0%',
             top: '9%',
             textStyle: {
                 color: '#fff',
                 fontSize: 11
             }

         }
     ],

     grid: {
         // left: '50px',  // 如果离左边太远就用这个......
         // right: '70px',
         // bottom: '100px',
         // top: '90px',
         containLabel: true,
     },
     backgroundColor: '#0A2E5D',
     tooltip: {
         trigger: 'axis',
         axisPointer: {
             type: 'shadow'
         }
     },
     color: [
         '#905a3d',
         '#2a5caa',
         '#1d953f',
         '#3bc7ff',
     ],
     legend: {
         left: 'right',
         top: 40,

         textStyle: {
             color: '#CACACA',
             fontSize: 15,
         },
         icon: 'roundRect',
         data: ['一季报', '中报', '三季报', '年报']
     },

     xAxis: {
         axisLabel: {
             color: '#CACACA',
             fontSize: 20,
             interval: 0,
             rotate: 45
         },
         axisLine: {
             show: true,
             lineStyle: {
                 color: `#AAAAAA`
             }

         },
         type: 'category',
         data: titlename
     },
     yAxis: {
         axisLabel: {
             color: '#CACACA',
             fontSize: 20,
         },
         axisLine: {
             show: true,
             lineStyle: {
                 color: `#AAAAAA`
             }

         },
         type: 'value',
     },
     series: [{
             name: '一季报',
             type: 'bar',
             barWidth: 18,

             itemStyle: {
                 normal: {
                     barBorderRadius: 100,
                     shadowColor: 'rgba(255, 255, 255, 1)',
                     shadowBlur: 3,
                     color: (params) => {

                         const color = {
                             type: 'linear',
                             x: 0,
                             y: 0,
                             x2: 1,
                             y2: 0,
                             colorStops: [{
                                 offset: 1,
                                 color: '#FFAB0C', // 0% 处的颜色
                             }, {
                                 offset: 0,
                                 color: '#FCFFBA', // 100% 处的颜色
                             }],
                             globalCoord: false, // 缺省为 false
                         }
                         return color
                     },


                 },
             },
             data: defaultData
         },
         {
             name: '中报',
             type: 'bar',
             barWidth: 18,

             itemStyle: {
                 normal: {
                     barBorderRadius: 100,
                     shadowColor: 'rgba(255, 255, 255, 1)',
                     shadowBlur: 3,
                     color: (params) => {

                         const color = {
                             type: 'linear',
                             x: 0,
                             y: 0,
                             x2: 1,
                             y2: 0,
                             colorStops: [{
                                 offset: 1,
                                 color: '#2a5caa', // 0% 处的颜色
                             }, {
                                 offset: 0,
                                 color: '#BAF7FF', // 100% 处的颜色
                             }],
                             globalCoord: false, // 缺省为 false
                         }
                         return color
                     },


                 },
             },
             data: defaultData1
         },
         {
             name: '三季报',
             type: 'bar',
             barWidth: 18,

             itemStyle: {
                 normal: {
                     barBorderRadius: 100,
                     shadowColor: 'rgba(255, 255, 255, 1)',
                     shadowBlur: 3,
                     color: (params) => {

                         const color = {
                             type: 'linear',
                             x: 0,
                             y: 0,
                             x2: 1,
                             y2: 0,
                             colorStops: [{
                                 offset: 1,
                                 color: '#1d953f', // 0% 处的颜色
                             }, {
                                 offset: 0,
                                 color: '#FCFFBA', // 100% 处的颜色
                             }],
                             globalCoord: false, // 缺省为 false
                         }
                         return color
                     },


                 },
             },
             data: defaultData2
         },
         {
             name: '年报',
             type: 'bar',
             barWidth: 18,

             itemStyle: {
                 normal: {
                     barBorderRadius: 100,
                     shadowColor: 'rgba(255, 255, 255, 1)',
                     shadowBlur: 3,
                     color: (params) => {

                         const color = {
                             type: 'linear',
                             x: 0,
                             y: 0,
                             x2: 1,
                             y2: 0,
                             colorStops: [{
                                 offset: 1,
                                 color: '#3bc7ff', // 0% 处的颜色
                             }, {
                                 offset: 0,
                                 color: '#BAF7FF', // 100% 处的颜色
                             }],
                             globalCoord: false, // 缺省为 false
                         }
                         return color
                     },


                 },
             },
             data: defaultData3
         }
     ]
 };