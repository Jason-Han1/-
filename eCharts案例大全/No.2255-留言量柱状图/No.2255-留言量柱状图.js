let dataList = [10,20,30,15,22,30]
option={
  backgroundColor:'#fff',
   grid:{
          left:10,
          right:10,
          bottom:20,
          top:10,
          containLabel:true
        },
  yAxis:{
    type:'value',
    axisLabel:'none',
    axisTick:'none',
    axisLine:'none',
    splitNumber:4
  },
  xAxis:{
    type:'category',
    data:['留言总量','留言量2','留言量3','留言量4','留言量5','留言量6'],
    axisTick:'none',
    axisLabel:{
      textStyle:{
        color:'#8C8C8C',
         fontSize:16,
         padding:10
      }
    },
    axisLine:{
      lineStyle:{
          color:'#EFF0F2',
      }
    },
    splitLine:{
      lineStyle:{
        color:'#EFF0F2'
      }
    }
  },
  series:[
    {
      name:'bar',
      type:'bar',
      barWidth:14,
      data:dataList,
      showBackground:true,
      backgroundStyle:{
              color:'#F5F5FC',
        borderRadius:50
      },
      itemStyle:{
        color:'#EB3B2F',
        borderRadius:50
      },
      label:{
        normal:{
          show:true,
          position: 'top',
          fontSize: 20,
          color: '#191919',
          offset: [0, -12],
        },
       
      }
    }
  ]
}
