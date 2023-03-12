
 option = {
     backgroundColor:'#222',
  tooltip: {
 trigger: 'axis',
 axisPointer: {type: 'shadow'},
},"grid": {
  "top": "25%",
"right":"45",
"bottom":"20",
"left":"30",

},
 "legend": {
   "data": [
     {"name": "人保"},
     {"name": "太保"},
     {"name": "平安"}/***
     {"name": "人保增速"},
     {"name": "太保增速"},
     {"name": "平安增速"}***/
   ],
   "top": "0%",
   "textStyle": {
    "color": "rgba(255,255,255,0.9)"//图例文字
   }
 },

 "xAxis": [
   {
     "type": "category",
     data: ['2016', '2017', '2018', '2019'],
     axisLine: { lineStyle: {color: "rgba(255,255,255,.1)"}},
     axisLabel:  { textStyle: {color: "rgba(255,255,255,.7)", fontSize: '14', },
         },
 
     },
],
 "yAxis": [
   {
     "type": "value",
     "name": "单位万",
     splitLine: {
      show: false,
     
  },
     "axisLabel": {
       "show": true,
       fontSize:14,
       color: "rgba(255,255,255,.6)"
      
     },
     axisLine: {
      min:0,
      max:10,
       lineStyle: {color: 'rgba(255,255,255,.4)'}
      },//左线色
     
   },
   {
     "type": "value",
     "name": "增速",
     "show": true,
     "axisLabel": {
       "show": true,
       fontSize:14,
       formatter: "{value} %",
       color: "rgba(255,255,255,.6)"
     },
   axisLine: {lineStyle: {color: 'rgba(255,255,255,.4)'}},//右线色
    splitLine: {show:true,lineStyle: {color:'rgba(255,255,255,.1)'}},//x轴线
   },
 ],
 "series": [
  
   {
     "name": "人保",
     "type": "bar",
     "data": [36.6,38.80, 40.84, 41.60],
     "barWidth": "30",
     "itemStyle": {
       "normal": {
        barBorderRadius: 5,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#8bd46e'
      }, {
          offset: 1,
          color: '#09bcb7'
      }]),
       }
     },
     "barGap": "0.2"
   },
   {
    "name": "太保",
    "type": "bar",
    "data":[14.8,14.1, 15, 16.30],
    "barWidth": "30",
    "itemStyle": {
      "normal": {
       barBorderRadius: 5,
       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#248ff7'
    }, {
        offset: 1,
        color: '#6851f1'
    }]),
      }
    },
    "barGap": "0.2"
  },
  {
    "name": "平安",
    "type": "bar",
    "data":[9.2,9.1, 9.85, 8.9],
    "barWidth": "30",
    "itemStyle": {
      "normal": {
       barBorderRadius: 5,
       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
         offset: 0,
         color: '#fccb05'
     }, {
         offset: 1,
         color: '#f5804d'
     }]),
      }
    },
    "barGap": "0.2"
  },
   {
     "name": "人保增速",
     "type": "line",
     "yAxisIndex": 1,
 
     "data": [0,6.01, 5.26, 1.48],
   lineStyle: {
   normal: {
     width: 2
   },
 },
     "itemStyle": {
       "normal": {
         "color": "#86d370",
    
       }
     },
     "smooth": true
   }
   ,
   {
     "name": "太保增速",
     "type": "line",
     "yAxisIndex": 1,
 
     "data": [0, -4.73, 6.38,8.67],
   lineStyle: {
   normal: {
     width: 2
   },
 },
     "itemStyle": {
       "normal": {
         "color": "#3496f8",
    
       }
     },
     "smooth": true
   } ,
   {
     "name": "平安增速",
     "type": "line",
     "yAxisIndex": 1,
 
     "data":[0,-1.09, 8.24, -9.64],
   lineStyle: {
   normal: {
     width: 2
   },
 },
     "itemStyle": {
       "normal": {
         "color": "#fbc30d",
    
       }
     },
     "smooth": true
   }
 ]
};

        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });

	