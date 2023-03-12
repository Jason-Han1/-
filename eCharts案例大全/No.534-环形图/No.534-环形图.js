option = {
  backgroundColor: '#000',
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} t  ({d}%)'
  },
  series: [
    {
      name: '排放量',
      type: 'pie',
      radius: ['33%', '50%'],
      avoidLabelOverlap: false,
      label: {//饼图中间文字设置
        show: false,
        fontSize: '40',
        fontWeight: 'bold',
        position: 'center',
        color:'#efe0ff',
        formatter: (params=>{
            return `{valStyle|${params.percent}}{tStyle|%} \n {txtStyle|总累计占比}`;
        }),
        rich: {
          valStyle: {
                color: '#efe0ff',
                fontSize: '44',
                fontWeight: 'bold'
            },
            tStyle:{
              color: '#efe0ff',
              fontSize: '20',
              padding: [10,2,2,5]
            },
            txtStyle:{
              color: '#398d9c',
              fontSize: '14'
            }
        },
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 735, name: '南通',  itemStyle: {
                         normal: {
                             color: { // 完成的圆环的颜色
                                 colorStops: [{
                                         offset: 0,
                                         color: '#af6ef6' // 0% 处的颜色
                                     },
                                     {
                                         offset: 0.5,
                                         color: '#af6ff5' // 0% 处的颜色
                                     }, {
                                         offset: 1,
                                         color: '#a873e8' // 100% 处的颜色
                                     }
                                 ]
                             },
                         }
                     } },
        { value: 1048,  name: '南京', itemStyle: {
                         normal: {
                             color: { // 完成的圆环的颜色
                                 colorStops: [{
                                         offset: 0,
                                         color: '#549fe4' // 0% 处的颜色
                                     },
                                     {
                                         offset: 0.5,
                                         color: '#2c7fde' // 0% 处的颜色
                                     },
                                     {
                                         offset: 1,
                                         color: '#56a3ec' // 100% 处的颜色
                                     }
                                 ]
                             },
                         }
                     } }

      ]
    }
  ]
};

let index = 0;
setTimeout(()=>{
    setInit();
}, 300);

function setInit(){
  myChart.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      dataIndex: 0
    });
}





myChart.on("mouseover", function(e) {
  if (e.dataIndex != index) {
    myChart.dispatchAction({
      type: "downplay",
      seriesIndex: 0,
      dataIndex: index
    });
  }
});

myChart.on("mouseout", function(e) {
  index = e.dataIndex;
  myChart.dispatchAction({
    type: "highlight",
    seriesIndex: 0,
    dataIndex: e.dataIndex
  });
})