let dataList = [
		{
			"count":"100",
			"name":"A"
		},
		{
			"count":"90",
			"name":"B"
		},
		{
			"count":"80",
			"name":"C"
		},
		{
			"count":"70",
			"name":"D"
		},
		{
			"count":"50",
			"name":"E"
		}
	]
let value = [];
let xData = [];
let maxValue = [];
for (const assetDeviceSafetyVo of dataList) {
  value.push(assetDeviceSafetyVo.count);
  maxValue.push(assetDeviceSafetyVo.count);
  xData.push(assetDeviceSafetyVo.name);
}
maxValue.fill(Math.max(...value)+20,0,value.length);

option = {
   tooltip: {
            show: "true",
            trigger: 'item',
            backgroundColor: 'rgba(132,183,243,0.6)', // 背景
            padding: [8, 10], //内边距
            extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
            formatter: function(params) {
                if (params.seriesName != "") {
                    return params.name + ' ：' + params.value ;
                }
            },
    
          },
          xAxis: [
            {
              type: 'category',
              axisTick: {
                  show: false
              },
              axisLine: {
                  show: false,
              },
              axisLabel: {
                  inside: false,
                  textStyle: {
                      color: '#999999',
                      fontWeight: 'normal',
                      fontSize: '12',
                  },
              },
              data: xData,
            }, 
            {
              type: 'category',
              axisTick: 'none',
              axisLine: 'none',
              show: true,
              axisLabel: {
                  textStyle: {
                      color: '#999999',
                      fontSize: '12'
                  },
              },
              data: value
            }
          ],
          yAxis: {
              type: 'value',
              axisTick: {
                  show: false
              },
              axisLine: {
                  show: false,
              },
              splitLine: {
                  show: false,
              },
              axisLabel: {
                  show:false,
              },
          },
          series: [
            {
              type: 'bar',
              itemStyle: {
                  normal: {
                     show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#9fd0e7'
                    }, {
                        offset: 1,
                        color: 'rgb(46,200,207,1)'
                    }]),
                      borderWidth: 0,
                  },
                  emphasis: {
                      shadowBlur: 15,
                      shadowColor: 'rgba(159,208, 231, 0.7)'
                  }
              },
            
              zlevel: 2,
              barWidth: '15',
              data: value,
            },
            {
              name: '',
              type: 'bar',
              xAxisIndex: 1,
              zlevel: 1,
              itemStyle: {
                  normal: {
                      color: '#f6f6f6',
                      borderWidth: 0,
                      shadowBlur: {
                          shadowColor: '#f6f6f6',
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowOffsetY: 2,
                      },
                  },
                  emphasis: {
                    color: '#f6f6f6',
                    shadowBlur: 15,
                    shadowColor: '#f6f6f6bf'
                  }
              },
              barWidth: '15',
              data: maxValue
            }
          ]
};
