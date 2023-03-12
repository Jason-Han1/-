var data =  ['2016','2017', '2018', '2019', '2020'];
var value = [40, 80,60,20,30,40,80];
var arr = new Array(value.length).fill(100)
option = {
 backgroundColor: '#FFF',

 xAxis: {
  data: data,
  position: 'bottom',
  type: 'category',
  axisLine: {
   show: true,
   lineStyle: {
    color: '#ECF1F6',
   },
  },
  axisTick: {
   show: false,
  },
  axisLabel: {
   show: true,
   rotate: 0,
   fontSize: 12,
   color: '#3A3A3C',
  },
  splitLine: {
   show: true,
   lineStyle: {
    color: ['#ECF1F6', '#ECF1F6'],
    width: 0,
    type: 'dashed',
   },
  },
  gridIndex: 0,
 },
  legend: {
      top: '4%',
      textStyle: {
        color: '#A1D5FF',
        fontSize: 16
      },

      itemGap: 12 // 设置间距
    },
 yAxis: [{
  axisLine: {
   show: false,
  },
  axisTick: {
   show: false,
  },
  axisLabel: {
   show: true,
   rotate: 0,
   fontSize: 12,
   color: '#6E7D9C',
  },
  splitLine: {
   show: true,
   lineStyle: {
    color: ['#ECF1F6', '#ECF1F6'],
    width: 1,
    type: 'dashed',
   },
  },
 },{
  
      show: true,
      name: '{%}',
      splitLine: { show: false },
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        textStyle: { fontSize: 16, color: '#fff' }

      }
    }
 ],
 series: [
 

  {
   //辅助分割图形
   name:'产值',
   type: 'pictorialBar',
   barWidth: '32%',
   symbol: 'image://data:image/png;base64,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',
   symbolRotate: '0', //倾斜度
   symbolMargin: '-5px', //控制分割图形的大小
   symbolSize: ['100%', 15],
   symbolRepeat: true,
   animation: false,
   itemStyle: {
    normal: {
     barBorderRadius: [10, 10, 0, 0],
     color: '#FFF',
    },
   },
   label: {
    normal: {
     color: '#fff',
     show: true,
     position: ['100%', '45%'],
     fontSize: 22,
     fontWeight: 'bold',
     formatter: function (params) {
      return ' ' + value[params.dataIndex] * 100 + '%';
     },
    },
   },
   data: [3800,4000,4100,5000,3700],
   z: 1,
  },
  {
   name:'累计增速',
   type:'line',
   yAxisIndex: 1,
   data: [12,10,10,18,19],
    lineStyle: {
          normal: {
            width: 3,
            color: '#00ffb4' // 线条颜色
          },
          borderColor: '#00ffb4'
        },
         symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABT0lEQVQokX3SsUvVYRTG8c/vZnNmQWG2ZS4OzoVbEgZtQf4FgSA21uTg4uAU+EcYNF3IiNyi5iRzqEYFB7lmq8aNp3tu3PDSmX6/8z7f9z3POafRfW0gbuA+ZnANZzjCDt7ioC8dBO9hCb/wDZ3Kj+E2WtjAdpIjA9Bz7OEDvmO/zlLFJO6WJrEd8Dqe4gu28BnTeNwX4T1+oItl7AZ8WF4+9qDuAlZwqcAnWKXZxChuhonH1P0Tr3p+unn1on/jlOZB+X6US2P4Co7L09wQSOXmShPtWKu62AwR/zdadcNlTOBdr6xzcVpnE6XttKqLU9XyjOMZTgagfCeXs1ul3UlX29XZO73Xm5c1msw2kZfynxFFE7/tgId4UcON15TyFesFprzZggKvhelvToZ8AYsYLzDeE7koKxdtLvuzcsOWfL6W/GrlsuSf8ObvkuM3BbZSq/0wGp4AAAAASUVORK5CYII=',
        symbolSize: '20',
   areaStyle: { // 区域填充样式
          normal: {
            // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(0,255,180,.8)'

            },
            {
              offset: 1,
              color: 'rgba(25,163,223, 0)'
            }
            ], false)

          }
        }
  }
 ],
};
