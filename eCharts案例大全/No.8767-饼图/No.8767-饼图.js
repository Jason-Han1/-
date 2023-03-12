 var xdata = [];
 xdata.push({
     name: 123456,
     value: 11
 });
 xdata.push({
     name: '微信',
     value: 22
 });

 option = {
     tooltip: {
         trigger: 'item',
         formatter: "{a} <br/>{b} : {c} ({d}%)"
     },
     series: [{
         name: '渠道情况',//鼠标移上去进行展示的文字
         type: 'pie',
         radius: '55%', //控制饼图的大小
         center: ['50%', '50%'],//控制饼图的大概位置
         clockwise: false,
         data: xdata,  //放数据的地方

         label: {
             normal: {
                 textStyle: {
                     color: '#fff',
                     fontSize: 14,
                 }
             }
         },
         labelLine: {
             normal: {
                 show: false
             }
         },
         selectedMode: 'single',
         itemStyle: {
             emphasis: {
                 borderWidth: 0,
                 shadowBlur: 0,
                 shadowOffsetX: 0,
                 shadowColor: 'rgba(0, 0, 0, 0.5)'
             }
         }
     }],
     color: [
         '#00acee',
         '#52cdd5',
         '#79d9f1',
         '#a7e7ff',
         '#c8efff'
     ],
 };