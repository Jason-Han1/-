 option = {
     backgroundColor: '#000',
     grid: {
         top: '10%',
         // right: 15,
         left: 'left',
         bottom: 0,
         containLabel: true
     },
     color: ['#3f9e97', '#00817e'],
     textStyle: {
         color: 'rgba(255, 255, 255, 0.9)'
     },
     tooltip: {
         trigger: 'axis',
         axisPointer: {
             type: 'shadow',

         },
         textStyle: {
             fontSize: 14
         },
         formatter: function(params, ticket, callback) {
             // console.log(params);    ////可以打印出来看看数据结构哦
             let axisValueLabel = params[0].axisValueLabel
             let sumVal = 0;
             let src = axisValueLabel + '<br>';
             for (x in params) {
                 sumVal += Number(params[x].value)
                 src += params[x].marker + params[x].seriesName + ": " + params[x].value + '<br>';
             }
             src += params[x].marker + '补偿总电量' + ": " + sumVal + '<br>';
             return src
         },
     },
     legend: [{
             itemWidth: 35,
             itemHeight: 10,
             formatter: (name) => {
                 return name
             },
             data: [{
                 name: '蒸发量',
                 icon: 'roundRect',
                 textStyle: {
                     fontSize: 14,
                     color: 'rgba(255, 255, 255, 0.9)'
                 },

             }, ],
             top: '4%',
             align: 'right',
             right: '30%', //调整位置
             // orient: 'vertical',
             // x: 'right',//图例位置
             //  y: 'center'//延Y轴居中
         },
         {
             itemWidth: 35,
             itemHeight: 10,
             formatter: (name) => {
                 return name
             },
             data: [{
                 name: '降水量',
                 icon: 'roundRect',
                 textStyle: {
                     fontSize: 14,
                     color: 'rgba(255, 255, 255, 0.9)'
                 }
             }],
             top: '4%',
             align: 'right',
             right: '10%', //调整位置
             // orient: 'vertical',
             // x: 'right',//图例位置
             //  y: 'center'//延Y轴居中
         },
     ],
     yAxis: [{
             type: 'category',
             data: ['塘寨发电', '构皮滩', '大方发电', '大龙发电', '毕节热电', '桐梓发电', '索风营', '沙陀', '东方', '乌江渡', '格里桥', '大花水', '思林', '洪家渡'],
             axisPointer: {
                 type: 'shadow'
             },
             axisLabel: {
                 formatter: '{value}',
                 fontSize: 14
             },
             "axisTick": { //y轴刻度线
                 "show": false
             },
             "splitLine": { //网格线
                 "show": false
             }
         },

     ],
     xAxis: [{
         type: 'value',
         // name: '水量',
         // min: 0,
         // max: 250,
         // interval: 50,
         splitNumber: 4, //最少分段数4
         axisLabel: {
             formatter: '{value}',
             fontSize: 14
         },
         "axisTick": { //y轴刻度线
             "show": false
         },
         "splitLine": { //网格线
             "show": false
         }
     }],
     series: [{
             name: '蒸发量',
             type: 'bar',
             label: {
                 show: true,
                 position: 'insideRight',
                 textStyle: {
                     fontSize: 14
                 },
             },
             zlevel: 3,
             data: [200, 300, 200, 500, 600, 300, 200, 400, 200, 500, 300, 200, 300, 200]
         },
         {
             name: '降水量',
             type: 'bar',
             label: {
                 show: true,
                 position: 'insideRight',
                 textStyle: {
                     fontSize: 14
                 },
             },
             barGap: '-100%', //添加此配置项即为重叠效果
             zlevel: 2,
             data: [800, 900, 1000, 1200, 1500, 1400, 1700, 1800, 700, 1300, 600, 800, 700, 600]
         },
     ]
 };