
option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', ],
            axisTick: {
                show:false,
                alignWithLabel: true
            },
            axisLabel:{
                show:false,
            }
        }
    ],
    yAxis : [
        {
            show:false,
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '30%',
            label:{
              normal:{
                  show:true,
                  position:'bottom',
                  formatter:'{c}% \n{b}',
                  textStyle:{
                      color:'#666'
                  }
              }  
            },
            itemStyle:{
              normal:{
                  barBorderRadius:100,
                  color:function(idx) {
                      console.log(idx)
                      var color = ['#feffff','#b8bbbb','#9a9b9c','#666768','#3d3c3e']
                      return color[idx.dataIndex % color.length]
                  }
              }  
            },
            data:[31, 28, 28, 26, 21]
        }
    ]
};
