 let dataIPSxAxis = ['2020 07.24  ', '2020 07.25', '2020 07.26', '2020 07.27', '2020 07.28', '2020 07.29', '2020 07.30','2020 07.31', '2020 08.01'];
 let dataIPS = [30000, 50000, 35000, 60000, 45000, 61000, 55000, 45000, 43000];
 option = {
     backgroundColor: '#021228',
     title: {
         text: '流量 （M）',
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
         boundaryGap: false,
         data: dataIPSxAxis,
         axisLabel: {
             show: true,
             textStyle: {
                 color: '#6ba1bb',
                 fontSize: 12,
             },
             formatter: function(value) {
                 //debugger
                 let ret = ""; //拼接加\n返回的类目项
                 let maxLength = 5; //每项显示文字个数
                 let valLength = value.length; //X轴类目项的文字个数
                 let rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                 if (rowN > 1) //如果类目项的文字大于3,
                 {
                     for (let i = 0; i < rowN; i++) {
                         let temp = ""; //每次截取的字符串
                         let start = i * maxLength; //开始截取的位置
                         let end = start + maxLength; //结束截取的位置
                         //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                         temp = value.substring(start, end) + "\n";
                         ret += temp; //凭借最终的字符串
                     }
                     return ret;
                 } else {
                     return value;
                 }
             },
         },
         axisLine: {
             lineStyle: {
                 color: '#033e59',
                 width: 0.5, //这里是为了突出显示加上的
             }
         }
     }],
     yAxis: [{
         type: 'value',
         axisLine: {
             onZero: false,
             lineStyle: {
                 color: '#033e59',
                 width: 1, //这里是为了突出显示加上的
             }
         },
         axisLabel: {

             show: true,
             textStyle: {
                 color: '#6ba1bb' //字体颜色
             }
         },
         splitLine: { //保留网格线
             show: true,
             lineStyle: { //y轴网格线设置
                 color: '#105b8a',
                 width: 1,
                 type: 'solid'
             }
         },
     }],
     series: [{
             name: '流量 （M）',
             type: 'line',
             smooth: true,
             symbol: "none", //去掉折线点
             stack: 100,
             itemStyle: {
                 color: '#1cccff', 
                 emphasis: {
                     color: '#1cccff',

                     
                 }
             }, 
             markLine: {
                 silent: true,
                 symbol: ['none','triangle'],
                 symbolSize: 5,
                 lineStyle: {
                     color: '#208de8'
                 },
                 label:{
                   show:false  
                 },
                 data: [
                     {
                        yAxis: 10000
                     },
                     {
                        yAxis: 20000
                     },
                     {
                        yAxis: 30000
                     },
                     {
                        yAxis: 40000
                     }
                 ]
             },
             lineStyle: { // 系列级个性化折线样式
                         width: 1,
                         type: 'solid',
                         color: "#1cccff"
                     },
             areaStyle: {
                 normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: 'rgba(28,204,255,0.5)' // 0% 处的颜色
                     }, {
                         offset: 0.5,
                         color: 'rgba(28,204,255,0.3)' // 100% 处的颜色
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