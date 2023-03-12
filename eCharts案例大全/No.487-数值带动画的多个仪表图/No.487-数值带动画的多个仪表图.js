// 本示例需在echarts v5.0.0 版本以上支持 真实效果见封面图
cdata=[
    {name:'类型一',data:324},
    {name:'类型二',data:453},
    {name:'类型三',data:133}
]
centerArr=[["17%", "45%"],["50%", "45%"],["83%", "45%"]]
titleArr=[],seriesArr=[];
var linearColor = new echarts.graphic.LinearGradient(0, 0, 0,1, [{
        offset: 0,
        color: '#00E1FD' // 0% 处的颜色
    },
    {
        offset: 1,
        color: '#419FFE' // 100% 处的颜色
    }
]);
cdata.forEach((item,index)=>{
        titleArr.push({
            text:item.name,
            bottom:'38%',
            left:centerArr[index][0],
            textAlign: 'center',
            textStyle:{
                color:'#fff',
                fontSize:25
            }
        })
        seriesArr.push({
          name: item.name,
          type: 'gauge',
          splitNumber: 10,
          radius: '30%',
          center: centerArr[index],
          progress: {
            show: true,
            width: 8,
            itemStyle: { // 属性lineStyle控制线条样式
                color: linearColor
            }
          },
          axisLine: { // 坐标轴线
            lineStyle: { // 属性lineStyle控制线条样式
                width: 5
            }
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: true,
            splitNumber: 5,
            lineStyle: {
                color: '#419FFE', //用颜色渐变函数不起作用
                width: 2,
            },
            length: 10
          },
          splitLine: {
            show: false
          },
          title: {
            show:false
          },
          detail: {
            fontSize: 45,
            fontWeight:'bold',
            color: '#00E1FD',
            offsetCenter: [0, '-5%'],
            valueAnimation: true,
            formatter: '{value}'
          },
          pointer: {
              show: false
          },
          data: [{
              value: item.data
          }]    
        })
      })
option= {
    backgroundColor:'rgba(12, 36, 67, 0.85)',
    title: titleArr,
    series:seriesArr
}