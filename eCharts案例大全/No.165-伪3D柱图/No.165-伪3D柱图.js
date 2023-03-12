let value=92;
let order='Ⅳ'
option = {   
  title: [
        {
            text: value, 
            left: '50%',
            top: '45%',
            subtext: '限电轮次：'+order,
            textAlign: 'center',
            textStyle: {
                fontSize: '50',
                fontWeight: '400',
                color: '#8b8d90',
                textAlign: 'center',
            },
        },
         {
            text: '分', 
            left: '55%',
            top: '47.5%',
            textAlign: 'center',
            textStyle: {
                fontSize: '25',
                fontWeight: '400',
                color: '#8b8d90',
                textAlign: 'center',
            },
        },
        
    ],
  radar: {
    indicator: [
      { name: '单位增加值能耗', max: 6500 },
      { name: '能耗消费进度', max: 6000 },
      { name: '柔性调控参与率', max: 30000 },
      { name: '亩均论英雄评级', max: 38000 },
      { name: '腾出用能总量', max: 52000 },
    ],
  },

  series: [
    {
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
           areaStyle: {
            color: 'rgba(64, 158, 255, 0.2)'
          }
        }
      ]
    }
  ]
};