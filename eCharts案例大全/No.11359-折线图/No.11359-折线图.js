 var dataIPSxAxis = ['2019 04/20  ', '2019 04/24', '2019 04/27', '2019 04/29 ', '2019 05/02 ', '2019 05/08'];
 var dataIPS = [20, 60, 50, 80, 120, 100];
 var dataIPS2 = [20, 70, 60, 80, 100, 90];
 option = {
     backgroundColor: '#43544c',
     title: {
         text: '事件-告警联合态势',
         textStyle: {
             fontSize: 12,
             fontWeight: 'normal',
             color: '#0674ca' //标题颜色
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
         left: '5%',
         top: '5%',
         right: '5%',
         bottom: '5%',
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
                 var ret = ""; //拼接加\n返回的类目项
                 var maxLength = 5; //每项显示文字个数
                 var valLength = value.length; //X轴类目项的文字个数
                 var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                 if (rowN > 1) //如果类目项的文字大于3,
                 {
                     for (var i = 0; i < rowN; i++) {
                         var temp = ""; //每次截取的字符串
                         var start = i * maxLength; //开始截取的位置
                         var end = start + maxLength; //结束截取的位置
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
                 return val + '万';
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
             name: '管节实时浇筑',
             type: 'line',
             smooth: true, //折线平滑显示
             //  symbol: "none", //去掉折线点
             stack: 100, //数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加
             symbolSize: 5, //折线点的大小
             areaStyle: {
                 normal: {}
             },
             itemStyle: {
                 normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#1a75bb' // 0% 处的颜色
                     }, {
                         offset: 0.5,
                         color: '#1a75bb' // 100% 处的颜色
                     }, {
                         offset: 1,
                         color: 'transparent' // 100% 处的颜色
                     }]), //背景渐变色
                     lineStyle: { // 系列级个性化折线样式
                         width: 5,
                         type: 'dotted',
                         color: "#02675f"
                     }
                 },
                 emphasis: {
                     color: '#dc8a27', //高亮折线点颜色

                 },

             },

             data: dataIPS,
         },

         {
             name: '管节实时浇筑',
             type: 'line',
             smooth: true,
             stack: 100,
             symbolSize: 5, //折线点的大小
             areaStyle: {
                 normal: {}
             },
             itemStyle: {
                 normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#1a3e85' // 0% 处的颜色
                     }, {
                         offset: 0.5,
                         color: '#1a3e85' // 100% 处的颜色
                     }, {
                         offset: 1,
                         color: 'transparent' // 100% 处的颜色
                     }]), //背景渐变色
                     lineStyle: { // 系列级个性化折线样式
                         width: 0.5,
                         type: 'solid',
                         color: "#4be1ff"
                     }
                 },
                 emphasis: {
                     color: '#02675f',

                 }
             },

             data: dataIPS2,
         },



     ]
 };