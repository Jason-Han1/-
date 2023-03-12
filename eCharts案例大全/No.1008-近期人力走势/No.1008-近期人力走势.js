var data = {
  title: [ '3/1', '3/2', '3/3', '3/4', '3/5'],
  J43TCNum: [155,142,138,31,22],
 X39TCNum: [459,464,458,476,446],
  X39DHNum: [451,451,442,458,461],
   X27DHNum: [291,287,283,288,289],
    bmPubNum: [751,754,745,793,796],
    zbNum: [369,364,364,365,370],
    totalNum: [2477,2463,2431,2412,2385],
};
function getTableLine(num) {
   var list = [];
   var bottom = 240;
   var height = 30;
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
var lineList = getTableLine(8);
 
 
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
       text: '  \n日期\nJ43-TC\nX1739-TC\nX1739-DH\nX1727-DH\n表面共用\n周边\n合计',
       bottom:25,
       left: 32,
       textStyle: {
           lineHeight: 30,
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
       bottom:275,
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
          length:244, // 竖线的长度
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
                  '}\n{table|' + data. J43TCNum[indexNum] +
                  '}\n{table|' + data.X39TCNum[indexNum] +
                  '}\n{table|' + data.X39DHNum[indexNum] +
                  '}\n{table|' + data.X27DHNum[indexNum] +
                  '}\n{table|' + data.bmPubNum[indexNum] +
                  '}\n{table|' + data.zbNum[indexNum] + 
                 '}\n{table|' + data. totalNum[indexNum]+'}' ;
           },
           rich: {
               table: {
                   lineHeight: 30,
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
      maxInterval: 40, // 自动计算的坐标轴最小间隔大小。
    //   splitNumber : 5,
     silent: false, // 坐标轴是否是静态无法交互
     max: 2520,
     min:2340,
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
          formatter: '{value} ',
          color: '#191919',
          fontWeight: 'bold' ,
          fontSize: 14 ,
      }
      
  },
   ],
   series: [
    {
       name: '人力',
       type: 'line',
       barWidth:36,
       itemStyle:{
               normal:{
                color:'#3cadfd'
                },
       },
       label: {
           show: true,
           position: 'top',
             formatter: '{c} ',
             textStyle: {  //数值样式
					color: '#3cadfd',
						fontSize: 14,
  	}
       },
       yAxisIndex: 0,
       data: data.totalNum
   }, 
],
   graphic: lineList
};
