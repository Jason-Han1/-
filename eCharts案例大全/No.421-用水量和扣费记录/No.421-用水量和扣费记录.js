
let arr = [];
let fee = [];
!function(){
  for(let i = 0;i < 30;i++){
    let temp = Math.random() * 70 + 50;
    let feeTemp = temp + Math.random() * 70
    arr.push(temp.toFixed())
    fee.push(feeTemp.toFixed())
  }
}()

let xAxis = function(){
    let arr = [];
  for(let i = 1;i < 30;i++){
    arr.push('2022年8月' + i + '日')
  }
  return arr
}

option = {
  color:['#2196f3'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  legend: {
    data: ['日用量', '日扣费']
  },
  xAxis: [
    {
      type: 'category',
      data: xAxis(),
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '日用量',
      interval: 50,
      splitLine:{
        show:false
      },
      splitArea:{
        show:false
      },
      axisLabel: {
        formatter: '{value} 吨'
      }
    },
    {
      splitLine:{
        show:false
      },
      splitArea:{
        show:false
      },
      max:1000,
      type: 'value',
      name: '日扣费',
      interval: 50,
      axisLabel: {
        formatter: '{value} 元'
      }
    }
  ],
  series: [
    {
      name: '日用量',
      type: 'bar',

      data: fee,
      label:{
        show:true,
        // distance:-50,
        position:'top',
        color:'#2b9bf4',
        fontSize:12,
        formatter:'{c} 吨'
      },
      itemStyle: {
      						normal: {
      							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      									offset: 0,
      									color: 'rgba(195,230,255,1)'
      								},
      								{
      									offset: 1,
      									color: 'rgba(195,230,255,0.1)'
      								}
      							], false),
      							shadowColor: '#00000011',
      							shadowBlur: 20
      						}
      					},      
    },
    {
      name: '日扣费',
      type: 'line',
      yAxisIndex: 1,
      data: arr,
      smooth:true,
      label:{
        show:true,
        formatter:'{c} 元',
        distance:0,
        color:'#000',
        fontSize:12,
      },
      areaStyle: {
      						normal: {
      							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      									offset: 0,
      									color: 'rgba(195,230,255,0.2)'
      								},
      								{
      									offset: 1,
      									color: 'rgba(195,230,255,0.1)'
      								}
      							], false),
      							shadowColor: '#00000011',
      							shadowBlur: 20
      						}
      					},       
    }
  ]
};