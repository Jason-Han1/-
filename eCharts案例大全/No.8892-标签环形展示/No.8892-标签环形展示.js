function roundDatas(num) {
     var datas = [];
     for (var i = 0; i < num; i++) {
         datas.push({
             name: 'circle' + i
         });
     }
     return datas;
 }

   option = {
     animationDurationUpdate: 1500,
     roam: true, //鼠标缩放及平移
     focusNodeAdjacency: true, //是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点
    //  graphic: {
    //   elements: [{
    //         type: 'image',
    //         style: {
    //             image: require('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578563258493&di=8603155bb844c2f4c2e82d5c58585b67&imgtype=0&src=http%3A%2F%2Fpic1.zhimg.com%2F50%2Fv2-d5d077f05fdaadf654ab43c85ccd7db2_hd.jpg'),
    //             width: '20%',
    //             height: '20%',
    //               },
    //             left: 'center',
    //         }]
    //       },
     series: [
         {
         type: 'graph',
         tooltip: {},
         ribbonType: true,
         layout: 'circular',
         hoverAnimation: true,
         layoutAnimation: true,
         width: '20%',
         height: '20%',
         circular: {
             rotateLabel: true
         },
         symbolSize: 1,
         itemStyle: {
             normal: {
                 label: {
                     show: false
                 },
                 color: '#6E7467',
             },
             emphasis: {
                 label: {
                     show: false,
                 }
             }
         },
     }, 
     {
         type: 'graph',
         tooltip: {},
         ribbonType: true,
         layout: 'circular',
         hoverAnimation: true,
         layoutAnimation: true,
         width: '45%',
         height: '45%',
         circular: {
             rotateLabel: true
         },
         symbolSize: 1,
         data: roundDatas(300),
         itemStyle: {
             normal: {
                 label: {
                     show: false
                 },
                 color: '#6E7467',
             },
             emphasis: {
                 label: {
                     show: false,
                 }
             }
         },
     }, 
     {
         type: 'graph',
         tooltip: {},
         ribbonType: true,
         layout: 'circular',
         width: '45%',
         height: '45%',
         symbolSize: 40,
    
         startAngle: 0,
         itemStyle: {
             normal: {
                 
                 label: {
                     show: true,
                     position: 'inside',
                     opacity : 0,
                 },
                 border: 'none',
                 borderWidth: 3,
                 color:'#ED7E74',
                  "symbolSize":50,
                   value: 25

             },

         },

         data: [{
             name: '司A1',
    
           
         }, {
             name: '公司A2',
            
            
         }, {
             name: '公司A3',
            
           
         }, {
             name: '公司A4',
            
             
         }, {
             name: '公司A5',
             
             
         }, {
             name: '公司A6',
           
             
         }, {
             name: '公司A7',
          
             
         }, {
             name: '公司A8',
          
          
         }
    
         ],
     },
 {
         type: 'graph',
         tooltip: {},
         ribbonType: true,
         layout: 'circular',
         hoverAnimation: false,
         width: '70%',
         height: '70%',
         circular: {
             rotateLabel: true
         },
         symbolSize: 1,
         data: roundDatas(300),
         itemStyle: {
             normal: {
                 label: {
                     show: false
                 },
                 color: '#6E7467',
             },
             emphasis: {
                 label: {
                     show: false,
                 }
             }
         },
     }, 
     {
         type: 'graph',
         tooltip: {},
         ribbonType: true,
         layout: 'circular',
         width: '70%',
         height: '70%',
         symbolSize: 40,
         startAngle: 15,
         itemStyle: {
             normal: {
                 
                 label: {
                     show: true,
                     position: 'inside',
                     opacity : 0,
                
                 },
                 border: 'none',
                 borderWidth: 3,

             },

         },

         data: [{
             name: '公司A1',
             "symbolSize": 50,
             value: 30,
             itemStyle:{
                  color:'#3FA7DC',
             }
            
         }, {
             name: '公司A2',
             "symbolSize": 50,
             value:40,
                itemStyle:{
                  color:'#3FA7DC',
             }
         }, {
             name: '公司A3',
             "symbolSize": 50,
             value: 30,
                itemStyle:{
                  color:'#3FA7DC',
             }
         }, {
             name: '公司A4',
             "symbolSize": 50,
             value: 40,
                itemStyle:{
                  color:'#3FA7DC',
             }
         }, {
             name: '公司A5',
             "symbolSize": 50,
             value: 30,
                itemStyle:{
                  color:'#3FA7DC',
             }
         }, {
             name: '公司A6',
             "symbolSize": 50,
             value: 40,
                itemStyle:{
                  color:'#3FA7DC',
             }
         }, {
             name: '公司A7',
             "symbolSize": 50,
             value:30,
                itemStyle:{
                  color:'#3FA7DC',
             }
         }, {
             name: '公司A8',
             "symbolSize":50,
             value: 40,
                itemStyle:{
                  color:'#6E7467',
             }
         }
    
         ],
     }
     ]
 };