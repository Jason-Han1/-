  var ReportPie1data = [{
     "name": "互联网直接售彩",
     "value": 456
 }, {
     "name": "互联网间接售彩",
     "value": 231
 }, {
     "name": "社交软件售彩",
     "value": 121
 }, {
     "name": "电子投注",
     "value": 45
 }, {
     "name": "自助选号",
     "value": 154
 }, {
     "name": "网络直播",
     "value": 67
 },  {
     "name": "视频信彩",
     "value": 67
 },  {
     "name": "即开票集中销售",
     "value": 67
 },  {
     "name": "其他",
     "value": 67
 }, 
 
 ]


 option = {
     backgroundColor:'#003366',
     color: ['#d34e58', '#f49d13', '#f6d748', '#45dbf6', '#44aff0', '#4877f4', '#4f46f6', '#ad45f4', '#f845f1'],
    //  title: {
    //      text: '总计',
    //      subtext:7789,
    //      textStyle: {
    //          color: '#fff',
    //          fontSize: 12,
    //      },
    //      subtextStyle: {
    //          fontSize: 14,
    //          color: '#fff',
    //          fontWeight:'bold'
    //      },
    //      x: 'center',
    //      y: '48%',
    //  },
     grid: {
        //  bottom: 150,
        //  left: 100,
        //  right: '10%'
     },
     tooltip: {
         trigger: 'item',
        //  formatter: function(obj, index) {
        //     return `${obj.name}<br/>${obj.marker}${obj.value}万元 ${obj}`;
        // },
         formatter: '{b}<br/> {c}亿元  ({d}%)'
     },
     legend: {
        //  orient: 'vertical',
        formatter:'item',
         left: 'center',
         textStyle: {
             

         },
         icon: 'roundRect',
         formatter: function( name ) {
                return '{a|' + name + '}';
           },
           textStyle: {
               rich:{
                   a: {
                       width: 280,
                       color: '#f2f2f2',
                       fontSize: 10,
                   }
               }
           },
         data: ReportPie1data,
     },
     series: [
         // 主要展示层的
         {
             radius: ['40%', '70%'],
             center: ['50%', '60%'],
             type: 'pie',
             label: {
            show:false
            },
            
          
             data: ReportPie1data,

         },
         // 边框的设置
         {
             radius: ['0%', '30%'],
             center: ['50%', '60%'],
             type: 'pie',
             labelLine: {
                 normal: {
                     show: false
                 },
                 emphasis: {
                     show: false
                 }
             },
             label: {
                normal: {
                    position: 'center',
                    formatter: '{top|总销售}\n'+'{bottom|99999}',
                    rich: {
                        top: {
                            fontSize: 12,
                            color: '#fff',
                            
                        },
                        bottom: {
                            fontSize: 14,
                            color: '#fff',
                            fontWeight: 'bold',
                            padding: [0, 0, 5, 0],
                        }
                    }
                }
            },
             animation: false,
             tooltip: {
                 show: false
             },
             data: [{
                 value: 1,
                 itemStyle: {
                     color: "#1291ff",
                 },
             }],
         }
     ]
 };
