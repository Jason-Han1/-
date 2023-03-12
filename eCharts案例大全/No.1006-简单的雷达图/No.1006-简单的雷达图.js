let value=92;
let order='Ⅳ'
option = {   
 backgroundColor:"#031d33",
 tooltip: {},

  title: [
        {
            text: value, 
            left: '48%',
            top: '45%',
            textAlign: 'center',
            textStyle: {
                fontSize: '50',
                fontWeight: '400',
                color: '#fff',
                textAlign: 'center',
            },
        },
         {
            text: '分', 
            left: '53%',
            top: '47.5%',
            textAlign: 'center',
            textStyle: {
                fontSize: '25',
                fontWeight: '400',
                color: '#fff',
                textAlign: 'center',
            },
        },
 {
            subtext: '限电轮次：'+order,
            left: '50%',
            top: '51%',
            textAlign: 'center',
            subtextStyle: {
                fontSize: '15',
                fontWeight: '400',
                color: '#fff',
                textAlign: 'center',
            },
        },
        
    ],
  radar: {
     name: {
              textStyle: {
                color: "#c1c3c4",
                fontSize: 14
              },
     },
    indicator: [
      { name: '单位增加值能耗', max: 6500 },
      { name: '能耗消费进度', max: 6000 },
      { name: '柔性调控参与率', max: 30000 },
      { name: '亩均论英雄评级', max: 38000 },
      { name: '腾出用能总量', max: 52000 },
    ],
                axisLine: {
              lineStyle: {
               
                color: "rgba(153, 209, 246, 0.5)" // 轴线颜色
              }
            },
      splitArea: {
              show: false,
              areaStyle: {
                color: "rgba(255,0,0,0)" // Rader图背景颜色
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                width: 1,
                color: "rgba(153, 209, 246, 0.5)" // 网格分割线颜色
              }
            }
  },

  series: [
    {
        name:'柔性调控评价',
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
           areaStyle: {
            color: 'rgba(64, 158, 255, 0.2)'
          },
                            itemStyle: {
                    normal: {
                      color: "#c8eeff",
                      borderColor: "#2cc1fa"
                    }
                  },
                     lineStyle: {
                    color: "rgba(146, 225, 255, 1)",
                    width: 1
                  }
        }
      ]
    }
  ]
};