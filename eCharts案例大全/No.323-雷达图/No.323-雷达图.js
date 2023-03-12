 let data = [582, 421.2, 622.1, 625.3, 265, 224]
 let indicator = [{
         name: '套餐1',
         max: 1000
     },
     {
         name: '套餐2',
         max: 1000
     },
     {
         name: '套餐3',
         max: 1000
     },
     {
         name: '套餐4',
         max: 1000
     },
     {
         name: '套餐5',
         max: 1000
     },
     {
         name: '套餐6',
         max: 1000
     },
 ]

 option = {
 
     radar: {
         center: ['50%', '50%'],
         radius: '75%',
         name: {
             formatter: function(name, indicator) {
                 let arr;
                 //   if(name=='开卡绑定数'||name=='渠道批量办理业务'){
                 //         arr = [
                 //         '{a|'+name+'}{b|'+indicator.value+'万}'
                 //     ]
                 //   }else{
                 arr = [
                     '{a|' + name + '}'
                 ]
                 //   }

                 return arr.join('\n')
             },
             textStyle: {
                 rich: { //根据文字的组设置格式
                     a: {
                         color: '#BCDCFF',
                         fontSize: 14,
                         fontWeight: 600,
                         fontFamily: 'Source Han Sans CN',
                     },
                     // b:{
                     //     fontSize:14,
                     //     verticalAlign:'top',
                     //     width:57,
                     //     color:'#8E88FE',
                     //     fontWeight:600,
                     //     align:'center'
                     // },
                 }

             }
         },
         nameGap: 0,
         indicator: indicator,
         splitLine: {
             show: false

         },
         splitArea: {
             show: false
         },
         axisLine: {
             show: false
         }
     },
     series: [{
             // name: '家庭融合包',
             type: 'radar',
             data: [data],
             // value:14,
             label: {
                 show: true,
                 formatter: function(params) {
                     console.log(params)
                     return params.value + '万';
                 },
                 color: '#8E88FE',
                 // position:[-20,-10,-10,-10],
                 align: 'right',
                 distance: 10,
                 align: 'right'
             },
             symbolSize: [6, 6],
             lineStyle: { //边缘颜色
                 width: 0
             },
             itemStyle: {
                 borderWidth: 1,
                 color: '#fff',
                 borderColor: '#F2F063',
             },
             areaStyle: {
                 color: '#7D77F1',
                 opacity: 0.6
             }
         },
         {
             type: 'radar',
             data: [
                 [1000, 1000, 1000, 1000, 1000, 1000],
             ],
             symbol: 'none',
             lineStyle: {
                 width: 0
             },
             itemStyle: {
                 color: '#4175F5'
             },

             areaStyle: {
                 color: '#4175F5',
                 opacity: 0.06
             }
         },
         {
             type: 'radar',
             data: [
                 [900, 900, 900, 900, 900, 900],
             ],

             symbol: 'none',
             lineStyle: {
                 width: 0
             },
             itemStyle: {
                 color: '#2C72C8'
             },

             areaStyle: {
                 color: '#2C72C8',
                 opacity: 0.12
             }
         },
         {
             type: 'radar',
             data: [
                 [800, 800, 800, 800, 800, 800]
             ],

             symbol: 'none',
             lineStyle: {
                 width: 0
             },
             itemStyle: {
                 color: '#4175F5'
             },

             areaStyle: {
                 color: '#4175F5',
                 opacity: 0.18
             }
         },
         {
             type: 'radar',
             data: [
                 [700, 700, 700, 700, 700, 700]
             ],

             symbol: 'none',
             lineStyle: {
                 width: 0
             },
             itemStyle: {
                 color: '#4175F5'
             },

             areaStyle: {
                 color: '#4175F5',
                 opacity: 0.19
             }
         },
         {
             type: 'radar',
             data: [
                 [600, 600, 600, 600, 600, 600],
             ],

             symbol: 'none',
             lineStyle: {
                 width: 0
             },
             itemStyle: {
                 color: '#4175F5'
             },

             areaStyle: {
                 color: '#4175F5',
                 opacity: 0.17
             }
         },
         {
             type: 'radar',
             data: [
                 [500, 500, 500, 500, 500, 500],
             ],
             symbol: 'none',
             lineStyle: {
                 width: 0
             },
             itemStyle: {
                 color: '#4175F5'
             },

             areaStyle: {
                 color: '#4175F5',
                 opacity: 0.16
             }
         },
         {
             type: 'radar',
             data: [
                 [400, 400, 400, 400, 400, 400],
             ],

             symbol: 'none',
             lineStyle: {
                 width: 0
             },
             itemStyle: {
                 color: '#4175F5'
             },

             areaStyle: {
                 color: '#4175F5',
                 opacity: 0.13
             }
         },
     ]
 };