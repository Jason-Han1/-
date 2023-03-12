 var dataIPSxAxis = ['2019 04/20  ', '2019 04/24', '2019 04/27', '2019 04/29 ', '2019 05/02 ', '2019 05/08'];
 var dataIPS = [20, 60, 50, 80, 120, 100];
 option = {
     backgroundColor: '#021228',
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
     color: ["#0080ff", "#4cd5ce"],
     toolbox: {
         // feature: {
         //     saveAsImage: {}
         // }
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
             smooth: true,
             symbol: "none", //去掉折线点
             stack: 100,
             itemStyle: {
                 normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#01806f' // 0% 处的颜色
                     }, {
                         offset: 0.5,
                         color: '#01806f' // 100% 处的颜色
                     }, {
                         offset: 1,
                         color: 'transparent' // 100% 处的颜色
                     }]), //背景渐变色
                     lineStyle: { // 系列级个性化折线样式
                         width: 0.5,
                         type: 'solid',
                         color: "#02675f"
                     }
                 },
                 emphasis: {
                     color: '#02675f',
                     lineStyle: { // 系列级个性化折线样式
                         width: 0.5,
                         type: 'dotted',
                         color: "#02675f" //折线的颜色
                     }
                 }
             }, //线条样式
             symbolSize: 5, //折线点的大小
             areaStyle: {
                 normal: {}
             },
             data: dataIPS,
         },

     ]
 };