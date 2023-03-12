dataArr=[2066.951,2084.630,2147.689,2129.435,2110.906,2120.116,2136.213,2128.635,2128.635]
xData=["10","11","12","13","14","15","16","17","18"]
singleBarWidth=6
function getColor(color) {
    return {
      type: 'linear',
      x: 0,
      y: 1,
      x2: 0,
      y2: 0,
      colorStops: [{
          offset: 0, color: color[0]// 0% 处的颜色
      }, {
          offset: 1, color: color[1] // 100% 处的颜色
      }]
    }
}
option = {
    backgroundColor:'rgba(12, 36, 67, 0.85)',
    tooltip: {
        trigger: 'axis',
        formatter: "{b}: {c}"
    },
    xAxis: {
        axisLine: {
          lineStyle: {
                color: 'rgba(255, 255, 255, 0.2)'
            }
        },
        splitLine: {show: false},
        axisTick: {show: false},
        //轴线上的字
        axisLabel: {
            show: true,
            color: '#fff'
        },
        data:xData
    },
	yAxis: {
              type: 'value',
              name: '产量(t)',
              axisTick: {show: false},
              nameTextStyle:{color:'#fff'},
              //轴线上的字
              axisLabel: {
                color:'#fff'
              },
              axisLine: {show:false},
              //网格线
              splitLine: {
                show:true,
                lineStyle: {
                      color: 'rgba(255, 255, 255, 0.2)'
                  }
              }
          },
	series:[
	    {
            type: 'bar',
            name: '产量',
		    data:dataArr,
            barWidth:singleBarWidth, //统计条宽度
            itemStyle:{
		    		  color:getColor(["#0069A5","#00A8CC"])
		    	  }
           
        },
        {
              type: 'bar',
		    	  	data:dataArr,
              barWidth:singleBarWidth, //统计条宽度
              barGap: '-2%',
              itemStyle:{
		    	  	  color:getColor(["#019BC4","#00CFFF"])
		    	    }
            },
            {
              z:3,
              type: 'pictorialBar',
              symbolPosition: 'end',
              data: dataArr,
              symbol: 'diamond',
              symbolOffset: [0, '-50%'],
              symbolSize: [singleBarWidth*2, singleBarWidth*2 * 0.5],
              itemStyle: {
                borderWidth: 0,
                color: '#6FF7FF'
              },
            }
	]
};