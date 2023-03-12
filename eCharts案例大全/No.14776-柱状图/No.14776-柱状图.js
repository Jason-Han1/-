
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
            data : ['1月', '2月', '3月', '4月', '5月','6月' ],
            axisTick: {
                show:false,
                alignWithLabel: false
            },
            axisLabel:{
                show:false,
            },
             axisLine: {
                show:false,
            },
            
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
                      var color = ['#dc4e54','#db8258','#eda350','#a6a34b','#84aa6d','#84abab']
                      return color[idx.dataIndex % color.length]
                  }
              }  
            },
            data:[31, 28, 28, 26, 21,25]
        }
    ]
};
