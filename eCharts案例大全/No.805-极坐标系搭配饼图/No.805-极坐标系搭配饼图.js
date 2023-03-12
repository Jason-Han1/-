 function rand(m, n) {
     if (!n) {
         return Math.floor(Math.random() * m);
     } else {
         var c = n - m + 1;
         return Math.floor(Math.random() * c + m);
     }
 }

 function getMax(arr, key) {
     var max = 0,
         len = arr.length;
     for (var i = 0; i < len; i++) {
         var item = arr[i][key];
         if (max < item) max = item;
     }
     return max;
 }

 function getValArr(arr, key) {
     var val = [],
         len = arr.length;
     for (var i = 0; i < len; i++) {
         val.push(arr[i][key]);
     }
     return val;
 }

 var arr = [];
 for (var i = 0; i < 10; i++) {
     arr.push({
         name: '类目名称' + rand(99),
         amount: rand(99999) / 100 // 采购金额
     });
 }

 var max = getMax(arr, 'amount'),
     angleAxisData = getValArr(arr, 'name');
 $.each(arr, function(i, e) {
     e.value = (e.amount / max * 100).toFixed(2);
 });
 option = {
     backgroundColor: '#222',
     tooltip: {
         trigger: 'item',
         textStyle: {
             fontSize: 16,
             color: '#fff',
             fontFamily: 'Microsoft YaHei'
         }
     },
     angleAxis: {
         type: 'category',
         axisLine: {
             lineStyle: {
                 color: '#6d8a92'
             }
         },
         axisLabel: {
             interval: 0,
             fontSize: 14,
             color: '#fff',
             fontFamily: 'Microsoft YaHei'
         },
         axisTick: {
             show: false
         },
         data: angleAxisData,
         z: 10
     },
     radiusAxis: {
         max: 100,
         min: 0,
         axisTick: {
             show: false
         },
         axisLine: {
             show: true,
             lineStyle: {
                 color: '#6d8a92'
             }
         },
         axisLabel: {
             formatter: '{value}%',
             textStyle: {
                 fontSize: 11,
                 color: '#61d9fb',
                 fontFamily: 'Microsoft YaHei'
             }
         },
         splitLine: {
             show: true,
             lineStyle: {
                 color: '#6d8a92'
             }
         },
         splitArea: {
             areaStyle: {
                 color: 'transparent'
             }
         }
     },
     polar: {
         center: ['50%', '50%'],
         radius: '74%',
     },
     series: [{
         type: 'bar',
         data: arr,
         itemStyle: {
             color: function(params) {
                 var colorList = ['#5cc6ca', '#d87a7f', '#f5b97f', '#5ab1ef', '#b6a2de', '#8d98b3', '#e5d02d', '#97b552', '#956f6d', '#d0579c'];
                 return colorList[params.dataIndex];
             }
         },
         coordinateSystem: 'polar',
     }]
 };