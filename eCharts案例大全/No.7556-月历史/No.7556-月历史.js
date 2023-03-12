 var dataIPSxAxis = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
 let dataIPS = [24, 23, 24, 23, 22, 24, 23, 24, 22, 21, 22, 23, 24, 26, 23, 24, 22, 23, 24, 25, 22, 23, 25, 22, 23, 24, 25, 22, 24, 25, 23];

 option = {
     title: {
         text: '月历史',
         textStyle: {
             fontSize: 12,
             fontWeight: 'normal',
             color: '#6ba1bb' //标题颜色
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
         axisLabel: {
             show: true,

             textStyle: {
                 color: '#6ba1bb',
                 fontSize: 12,
             },
             formatter: function(value) {

                 return value;

             },
         },
         axisLine: {
             lineStyle: {
                 color: '#0a2b52',
                 width: 0.5, //这里是为了突出显示加上的
             }
         }
     }],
     yAxis: [{
         type: 'value',
         axisLine: {
             onZero: false,
             lineStyle: {
                 color: '#0a2b52',
                 width: 1, //这里是为了突出显示加上的
             }
         },
         axisLabel: {
             formatter: function(val) {
                 return val;
             },
             show: true,
             textStyle: {
                 color: '#6ba1bb' //字体颜色
             }
         },
         splitLine: { //保留网格线
             show: true,
             lineStyle: { //y轴网格线设置
                 color: '#0a2b52',
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
             markLine: {
                 silent: true,
                 symbol: 'triangle',
                 symbolSize: 5,
                 lineStyle: {
                     color: 'red'
                 },
                 data: [{
                     yAxis: 24
                 }]
             },

             symbolSize: 5, //折线点的大小
             itemStyle: {
                 normal: {
                     color: '#01806f', 
                 }
             },
             lineStyle: { // 系列级个性化折线样式
                 width: 0.5,
                 type: 'solid',
                 color: "#02675f"
             },
             areaStyle: {
                 normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#01806f' // 0% 处的颜色
                     }, {
                         offset: 0.5,
                         color: '#025f5a' // 100% 处的颜色
                     }, {
                         offset: 1,
                         color: '#04122a' // 100% 处的颜色
                     }]), //背景渐变色

                 },
             },
             data: dataIPS,
         },
       

     ]
 };