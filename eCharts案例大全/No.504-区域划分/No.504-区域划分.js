option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  tooltip:{},
  yAxis: {
    type: 'value',
    interval:1,
    splitLine:{
      show:false,
    },
    axisLabel:{
      formatter:function(e){
        if(e==60||e==120||e==220||e==280){
          return e+"D"
        }
      }
    }
  },
  series: [
    {
      data: [150, 230, -24, 218, 135, 147, 290],
      type: 'line',
      markArea:{
        tooltip:{show:false},
        silent:true,
        label:{position:'insideBottomRight '},
        data:[
              [
            {
                yAxis: "120"
            },
            {
                yAxis: 60,
                name: '轻度近视',
            }
        ],[
          {valueDim:"y"},{yAxis:60,itemStyle:{color:"green"},
            name: '严重近视',
          }
          ],
          [
            {
                yAxis: "220"
            },
            {
                yAxis: 120,itemStyle:{color:"red"},name: '中毒近视',
            }
        ],[
            {
                yAxis: "220"
            },
            {
                yAxis: 280,itemStyle:{color:"blue"},name: '轻微近视',
            }
        ],[
          {yAxis:280,itemStyle:{color:"yellow"},name: '无近视',},
           {valueDim:"y"}
        ],]
      }
    }
  ]
};