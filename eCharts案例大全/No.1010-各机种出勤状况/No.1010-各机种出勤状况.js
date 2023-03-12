var data = {
  title: [ 'J43-TC', 'X139-TC', 'X1739-DH', 'X1727-DH'],
  currentNum: [22,446,796,461],
  dueNum: [21,439,761,437],
  actualNum: [19,420,724,413],
  attRate: [95.2,95.2,95.1,95.8],
  targetRate: [95.1,95.1,95.1,95.1],
};
function getTableLine(num) {
   var list = [];
   var bottom = 150;
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
var lineList = getTableLine(5);
 
 
option = {
   title: [
       {
           text:'各机种出勤状况',
          left:'1%',
           top:'1%',
           textStyle:{
               fontSize: 16,
               color:'#9d9d9d',
                 fontWeight: 'bold',
           },
       },
        {
           text:'(不含共用):',
        left:'12%',
           top:'1%',
           textStyle:{
               fontSize: 16,
               color:'#9d9d9d',
                fontWeight: 'lighter',
           },
       },
       {
       text: '  \n单位\n现有人数\n应到人数\n实到人数\n出勤率',
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
   legend: {
       data: ['实际', '目标'],
       orient : 'horizontal',
       itemHeight : 13,
        x: 'right',
        padding:[25,20,25,20],
        textStyle:{
            fontSize:14,
            fontFamily:'',
        }
   },
   grid: {
       bottom: 190,
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
          length:160, // 竖线的长度
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
                  '}\n{table|' + data.currentNum[indexNum] +
                  '}\n{table|' + data.dueNum[indexNum] +
                  '}\n{table|' + data.actualNum[indexNum] +
                  '}\n{table|' + data.attRate[indexNum] + '%}';
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
      maxInterval: 5, // 自动计算的坐标轴最小间隔大小。
    //   splitNumber : 5,
     silent: false, // 坐标轴是否是静态无法交互
     max: 100,
     min:70,
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
       name: '实际',
       type: 'bar',
       barWidth:36,
       itemStyle:{
               normal:{
                color:'#b477f9'
                },
       },
       label: {
           show: true,
           position: 'top',
             formatter: '{c} %',
             textStyle: {  //数值样式
					color: '#b477f9',
						fontSize: 14,
  	}
       },
       yAxisIndex: 0,
       data: data.attRate
   }, 
    {
       name: '目标',
       type: 'line',
       symbol:'none',
       itemStyle:{
               normal:{
                color:'#fdad3c'
                },
       },
       label: {
          show: false,
          position: 'top',
          formatter: '{c} %'
       },
       yAxisIndex: 0,
       data: data.targetRate
   }],
   graphic: lineList
};

