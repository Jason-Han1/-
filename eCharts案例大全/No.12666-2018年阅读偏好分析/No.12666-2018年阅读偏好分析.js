var colors = [
    "#2ec7c9",
    "#b6a2de",
    "#5ab1ef",
    "#ffb980",
    "#d87a80",
    "#8d98b3",
    "#e5cf0d",
    "#97b552",
    "#95706d",
    "#dc69aa",
    "#07a2a4",
    "#9a7fd1",
    "#588dd5",
    "#f5994e",
    "#c05050",
    "#59678c",
    "#c9ab00",
    "#7eb00a",
    "#6f5553",
    "#c14089"
];
var bgColor = '#2E2733';
var categorys=[
    {name: '教育', max: 15},
    {name: '励志', max: 25},
    {name: '散文', max: 25},
    {name: '小说', max: 25},
    {name: '艺术', max: 25},
    {name: '其他', max: 25}
];
var year2016=[6, 3, 5, 7, 1,0];
var year2017=[10, 4, 10, 4, 8, 4];
var year2018=[9, 7, 15, 22, 4, 5];
var fontSize=25;
 
  var option = {
      title: {
          text: '2018年阅读偏好分析',
          textStyle:{
              color:'#fff',
              fontSize:30
          },
          subtext:'阅读偏好{r|小说}类书籍\n18年{r|小说、散文}类增多',
           subtextStyle:{
            fontSize:22,
            align: 'center',
            color:'#DDD',
            textShadowColor: 'rgba(0,0,0,0.3)',
            textShadowBlur: 5,
            rich:{
                r: {
                color: 'rgba(255,0,0,0.9)',
                fontWeight:'bold',
                fontSize:25,
            },
         
            }
        },
        textStyle: {
            fontSize: 30,
            align: 'center',
            textShadowColor: 'rgba(0,0,0,0.3)',
            textShadowBlur: 5,
        },
        
      },
      tooltip: {
          trigger: 'item',
          //formatter:'{b}</br> {c}',
          textStyle: {
            color: '#fff',
            fontSize: fontSize,
            textShadowColor: '#333',
            textShadowBlur: 10,
            textShadowOffsetX: 5,
            textShadowOffsetY: 5,
            },
      },
      legend: {
          bottom: 20,
          itemWidth: 12,
          itemHeight: 12,
          data: ['2016年', '2017年','2018年'],
          textStyle: {
              color: colors,
              fontSize:fontSize
          }
      },
      radar: {
          radius: '70%',
          splitNumber: 4,
          axisLine: {
              lineStyle: {
                  color: '#fff',
                  opacity: 0.8
              }
          },
          splitLine: {
              lineStyle: {
                  color: '#fff',
                  opacity: 0.5
              }
          },
          splitArea: {
              areaStyle: {
                  color: 'rgba(127,95,132,.3)',
                  opacity: 1,
                  shadowBlur: 45,
                  shadowColor: 'rgba(0,0,0,.5)',
                  shadowOffsetX: 0,
                  shadowOffsetY: 15,
              }
          },
          name: {
            
                show: true,
                color: '#fff',
                fontSize: fontSize,
                textShadowColor: '#333',
                textShadowBlur: 10,
                textShadowOffsetX: 5,
                textShadowOffsetY: 5,
            
        },
          indicator:categorys
      },
      series: [{
          name: '阅读类别统计',
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
              normal: {
                  shadowBlur: 13,
                  shadowColor: 'rgba(0,0,0,.2)',
                  shadowOffsetX: 0,
                  shadowOffsetY: 10,
                  opacity: .8
              }
          },
          
          data: [ {
              value: year2018,
              name: '2018年',
          },{
              value: year2017,
              name: '2017年',
          },{
              value: year2016,
              name: '2016年',
          },]
      }],
      color: colors,
      backgroundColor: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.7,
          colorStops: [{
              offset: 0,
              color: '#b6a2de' // 0% 处的颜色
          }, {
              offset: .4,
              color: '#9a7fd1' // 100% 处的颜色
          }, {
              offset: 1,
              color: '#59678c' // 100% 处的颜色
          }],
          globalCoord: false // 缺省为 false
      }
  };