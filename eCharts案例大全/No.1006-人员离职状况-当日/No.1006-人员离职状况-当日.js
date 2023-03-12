var data = {
  title: [ '合计', '派遣工', '正式工'],
dismissionNum: [29,28,1],
dismissionRate: [1.2,2.5,0.1],
};
function getTableLine(num) {
   var list = [];
   var bottom = 80;
   var height = 40;
   for (var i = 0; i < num; i++) {
       list.push({
           type: 'line',
           bottom: bottom - i * height,
           left:15,
           style: {
               fill: '#333',
               stroke:'#d5d5d5',
           },
           shape: {
               x1: 0,
               y1: 0,
               x2: 1087,
               y2: 0
           }
 
       });
   }
   return list;
}
var lineList = getTableLine(2);

 
option = {
   title: [
        {
           text:'单位：人',
          right:'1%',
           top:'1%',
           textStyle:{
               fontSize: 14,
               color:'#9d9d9d',
                 fontWeight: 'lighter',
           },
       },
       {
           text:'当日',
          left:'1%',
           top:'1%',
           textStyle:{
               fontSize: 16,
               color:'#9d9d9d',
                 fontWeight: 'bold',
           },
       },
       {
       text: '  \n项目\n离职人数',
       bottom:30,
       left: 32,
       textStyle: {
           lineHeight: 40,
           fontSize: 14,
          fontWeight: 'normal',
           formatter: function(value) {
               return '{table|' + value + '}';
           },
           rich: {
               table: {
                   align: 'center'
               }
           }
       }
   }],
   grid: {
      bottom: 125,
      left: 120,
      right: 20,
      top:'12%',
   },
   xAxis: [{
       type: 'category',
      boundaryGap: true,
       data: data.title,
       axisLine:{
           lineStyle:{
               color:'#d5d5d5', // 更改坐标轴颜色
           }
       },
      axisTick: {
          length:85, // 竖线的长度
      },
       axisLabel: {
           interval:0,
            textStyle:{
              color:'#333',
          },
           formatter: function(value, index) {
               var indexNum = 0;
              for(var i = 0; i < data.title.length; i++){
                  if(value == data.title[i]){
                      indexNum = i;
                  }
              }
              return '{table|' + value +
                  '}\n{table|' + data.dismissionNum[indexNum] +'}';
           },
           rich: {
               table: {
                   lineHeight: 40,
                   align: 'center',
                   fontSize: 14, // table里文字字体大小
               }
           }
       }
   }],
   yAxis: [
  {
      type: 'value',
       scale : true,
      maxInterval: 5, // 自动计算的坐标轴最小间隔大小。
    //   splitNumber : 5,
     silent: false, // 坐标轴是否是静态无法交互
     max: 3,
     min:0,
     axisLine: {
        show: true ,
      lineStyle: { // 刻度线的样式设置。
        color: '#d5d5d5', // 刻度线的颜色
        width: 1 ,
        type: 'solid' , 
      } , 
     },
     axisTick: {
          show: true ,
           inside: true , // 坐标轴刻度是否朝内，默认朝外。
            lineStyle: { // 刻度线的样式设置。
        color: '#d5d5d5', // 刻度线的颜色
        width: 1 ,
        type: 'solid' , 
      } , 
     },
      splitLine: {
          show: false
      },
      axisLabel: {
          formatter: '{value} %',
          color: '#191919',
          fontWeight: 'bold' ,
          fontSize: 14 ,
      }
      
  },
   ],
  series: [
    {
      name: '离职率',
      type: 'bar',
      barWidth:46,
      itemStyle:{
              normal:{
                color:function(params){
                     var colorList =['#eb6776','#3cadfd','#fdad3c'];
                    return colorList[params.dataIndex];
                },
                      label: {
          show: true,
          position: 'top',
             formatter: '{c} %',
             textStyle: {  //数值样式
						fontSize: 14,
						color:'auto',
  	}
      },
                },
                
     },   
     yAxisIndex: 0,
      data: data.dismissionRate
  }, 
    ],
   graphic: lineList
};

