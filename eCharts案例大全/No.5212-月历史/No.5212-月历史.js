 var dataIPSxAxis = ['1', '2', '3', '4', '5', '6'];
 let dataIPS = [24, 23, 24, 23, 22, 24, 23, 24, 22, 21, 22, 23, 24, 25, 23, 24, 22, 23, 24, 25, 22, 23, 25, 22, 23, 24, 25, 22, 24, 25, 23];
 let dataIPS2 = [55, 56, 54, 53, 56, 57, 58, 55, 57, 54, 55, 52, 54, 53, 52, 55, 56, 53, 52, 54, 55, 56, 57, 58, 65, 55, 61, 57, 65, 56, 57];



 option = {
     title: {
         text: '月历史',
         textStyle: {
             fontSize: 12,
             fontWeight: 'normal',
             color: '#79868b' //标题颜色
         },
         left: '2%',
     },
     tooltip: {
         trigger: 'axis',
         axisPointer: {
             type: 'cross',
             label: {
                 backgroundColor: '#6a7985',
             },
         }
     },


     grid: {
         left: '5px',
         top: '25px',
         right: '20px',
         bottom: '10px',
         containLabel: true
     },
     xAxis: [{
         type: 'category',
         boundaryGap: false,
         data: dataIPSxAxis,
         axisTick: {
             lineStyle: {
                 color: '#79868b',
                 width: 1, //这里是为了突出显示加上的
             }
         },
         axisLabel: {
             show: true,

             textStyle: {
                 color: '#79868b',
                 fontSize: 12,
             },
             formatter: function(value) {

                 return value;

             },
         },
         axisLine: {
             lineStyle: {
                 color: '#79868b',
                 width: 0.5, //这里是为了突出显示加上的
             }
         }
     }],
     yAxis: [{
         type: 'value',
         axisTick: {
             lineStyle: {
                 color: '#79868b',
                 width: 1, //这里是为了突出显示加上的
             }
         },
         axisLine: {
             onZero: false,
             lineStyle: {
                 color: '#79868b',
                 width: 1, //这里是为了突出显示加上的
             }
         },
         axisLabel: {
             formatter: function(val) {
                 return val;
             },
             show: true,
             textStyle: {
                 color: '#79868b' //字体颜色
             }
         },
         splitLine: { //保留网格线
             show: true,
             lineStyle: { //y轴网格线设置
                 color: '#79868b',
                 width: 1,
                 type: 'solid'
             }
         },
     }],

     series: [{
             name: '温度',
             type: 'line',
             smooth: true,
             symbol: "none", //去掉折线点
             stack: 100,

             symbolSize: 5, //折线点的大小
             itemStyle: {
                 normal: {
                     color: '#52bca7',
                 }
             },
             lineStyle: { // 系列级个性化折线样式
                 width: 0.5,
                 type: 'solid',
                 color: "#52bca7"
             },
             areaStyle: {
                 normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: 'rgba(82,188,167,0.8)' // 0% 处的颜色
                     }, {
                         offset: 0.5,
                         color: 'rgba(82,188,167,0.8)' // 100% 处的颜色
                     }, {
                         offset: 1,
                         color: 'rgba(82,188,167,0.8)' // 100% 处的颜色
                     }]), //背景渐变色

                 },
             },
             data: dataIPS,
         },
         {
             name: '湿度',
             type: 'line',
             smooth: true,
             symbol: 'none',

             itemStyle: {
                 normal: {
                     color: '#4876a6',
                 }
             },
             lineStyle: {
                 width: 0.5,
                 type: 'solid',
                 color: "#4876a6"
             },
             areaStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                             offset: 0,
                             color: 'rgba(72,118,166,0.8)'
                         }, {
                             offset: 0.8,
                             color: 'rgba(72,118,166,0.5)'
                         },
                         {
                             offset: 1,
                             color: 'transparent' // 100% 处的颜色
                         }
                     ], false),

                 }
             },

             data: dataIPS2,
         },

     ]
 };