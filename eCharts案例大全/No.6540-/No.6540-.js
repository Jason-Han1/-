 let dataIPSxAxis = ['氧气','二氧化碳', '一氧化碳', '粉尘'];
                                  
 let dataIPS = [0.15, 0.26, 0.21,0.25];
 option = {
     backgroundColor: '#021228',
     title: {
         text: '',
         textStyle: {
             fontSize: 12,
             fontWeight: 'normal',
             color: '#99c8e7' //标题颜色
         },
         left: '0%',
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
         bottom: '0px',
         containLabel: true
     },
     xAxis: [{
         type: 'category',
         boundaryGap: true,
         data: dataIPSxAxis,
         axisLabel: {
             show: true,
             textStyle: {
                 color: '#c1c3c6',
                 fontSize: 12,
             },
             
         },
         axisLine: {
             lineStyle: {
                 color: '#0f222e',
                 width: 0.5, //这里是为了突出显示加上的
             }
         }
     }],
     yAxis: [{
         type: 'value',
         axisLine: {
             onZero: false,
             lineStyle: {
                 color: '#0f222e',
                 width: 1, //这里是为了突出显示加上的
             }
         },
         axisLabel: {

             show: true,
             textStyle: {
                 color: '#c1c3c6' //字体颜色
             }
         },
         splitLine: { //保留网格线
             show: true,
             lineStyle: { //y轴网格线设置
                 color: '#0f222e',
                 width: 1,
                 type: 'solid'
             }
         },
     }],
     series: [{
             name: '',
             type: 'line',
             smooth: true,
             symbol: "none", //去掉折线点
             stack: 100,
             itemStyle: {
                 color: '#1d78bd', 
                 
             }, 
             
             lineStyle: { // 系列级个性化折线样式
                         width: 1,
                         type: 'solid',
                         color: "#1d78bd"
                     },
             areaStyle: {
                 normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ 
                         offset: 0,
                         color: 'rgba(24,104,164,0.3)' // 0% 处的颜色
                     }, {
                         offset: 0.5,
                         color: 'rgba(24,104,164,0.2)' // 100% 处的颜色
                     }, {
                         offset: 1,
                         color: 'transparent' // 100% 处的颜色
                     }]), //背景渐变色
                     
                 },
                
             },
             data: dataIPS,
         },

     ]
 };