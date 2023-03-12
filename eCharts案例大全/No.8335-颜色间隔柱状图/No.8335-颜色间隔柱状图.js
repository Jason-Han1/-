 var paymethod = ['现金', '支付宝', '微信', '银联', '储蓄卡'];
 var paypercent = [20, 35, 25, 10, 10];
 let data = {
     "chart": [{
             method: paymethod[0],
             value: paypercent[0],
         },

         {
             method: paymethod[1],
             value: paypercent[1],
         },

         {
             method: paymethod[2],
             value: paypercent[2],
         },

         {
             method: paymethod[3],
             value: paypercent[3],
         },

         {
             method: paymethod[4],
             value: paypercent[4],
         },

     ]
 }
 let xAxisPay = [],
     barData = [];
 for (let i = 0; i < data.chart.length; i++) {
     xAxisPay.push(data.chart[i].method);
     barData.push({
         "name": xAxisPay[i],
         "value": data.chart[i].value
     });
 }
 var option = {
     title: '',
     grid: {
         top: '8%',
         left: '7%',
         bottom: '20%',
         containLabel: true
     },
     tooltip: {
         trigger: 'axis',
         axisPointer: {
             type: 'none'
         },
     },
     xAxis: [{
             type: 'category',
             position: "bottom",
             data: paymethod,
             boundaryGap: true,
             offset: 30,
             axisTick: {
                 show: false
             },
             axisLine: {
                 show: false
             },
             axisLabel: {
                 textStyle: {
                     color: '#ec3815',
                     fontFamily: 'PFZT',
                     fontSize: 14
                 }
             }
         }

     ],
     yAxis: [{
         show: false,
         offset: 52,
         splitLine: {
             show: false,
             lineStyle: {
                 color: "rgba(255,255,255,0.2)"
             }
         },
         axisTick: {
             show: false
         },
         axisLine: {
             show: true
         },
         axisLabel: {
             show: false,
             color: '#b6b5ab'
         }
     }],
     series: [{
         name: '支付方式占比',
         type: 'bar',
         xAxisIndex: 0,
         barCategoryGap: '-80%',
         barWidth: 20,
         label: {
             normal: {
                 show: true,
                 position: 'top',
                 fontFamily: 'PFZT',
                 fontSize: 14,
                 formatter: '{c}%'
             }
         },
         itemStyle: {
             normal: {
                 color: function(params) {
                     let colorList = [
                         '#ec3815', '#114861',
                         '#ec3815', '#114861',
                         '#ec3815', '#114861'
                     ];
                     return colorList[params.dataIndex];
                 }
             },
             emphasis: {
                 opacity: 1
             }
         },
         data: barData,
     }, ]
 }