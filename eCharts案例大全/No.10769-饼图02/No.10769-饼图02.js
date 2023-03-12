option = {
                backgroundColor: '#0c1e55',

 color: ['#00a0fc', '#ffe400', '#ff9a09', '#ef1e5f'],

    tooltip: {
      trigger: 'item',
      // formatter: "   {a} <br/>{b} : {c} ({d}%)"
      formatter: "   企业数：{c}"
    },
    legend: { // 图例-图上面的分类
      orient: 'vertical',
      left: 30,
      //   icon: 'rect',//长方形
      icon: 'circle',
      bottom: "20%",
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 13,
      data: ['蓝色风险', '橙色风险','红色风险','黄色风险', ],
      right: '16%',
      textStyle: {
        fontSize: 14,
        color: '#a6cde8',
        lineHeight: 49
      },
        formatter: function(name) {
            return "" + name + ""
        },
      padding: [2, 2]
    },
    grid: {
      top: '20%',
      left: '53%',
      right: '10%',
      bottom: '6%',
      containLabel: true
    },
   
    series: [
      {          
                      label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false,
                }
            },
         labelLine: {
                normal: {
                    show: false
                }
            },
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
                      { value: 224, name: '蓝色风险' },
          { value: 200, name: '黄色风险' },
          { value: 250, name: '橙色风险' },
          { value: 300, name: '红色风险' },
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
};