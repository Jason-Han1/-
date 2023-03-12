let dataList = [
		{
			"count":"19",
			"name":"一月"
		},
		{
			"count":"15",
			"name":"二月"
		},
		{
			"count":"42",
			"name":"三月"
		},
		{
			"count":"65",
			"name":"四月"
		},
		{
			"count":"60",
			"name":"五月"
		},
		{
			"count":"68",
			"name":"六月"
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
// maxValue.fill(Math.max(...value)+20,0,value.length);
maxValue.fill(100,0,value.length);

option = {
   tooltip: {
            // show: "true",
            // trigger: 'item',
            // backgroundColor: 'rgba(132,183,243,0.6)', // 背景
            // padding: [8, 10], //内边距
            // extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
            // formatter: function(params) {
            //     if (params.seriesName != "") {
            //         return params.name + ' ：' + params.value ;
            //     }
            // },
    
          },
          title: {
            text: '销售量对比',
            left: 26,
            top: 2,
            textStyle: {
                color: '#505A59',
                fontSize: 27,
                fontWeight: 700,
                fontFamily: 'PingFang SC'
            }
        },
        grid: {
            left: '6%',
            right: '6%',
            bottom: '5%',
            top: '16%',
            containLabel: true
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
                      color: '#A5A7A7',
                      fontSize: '16'
                  },
                  margin: 30,
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
                      color: '#fff',
                      fontSize: '16',
                      backgroundColor: 'rgba(0, 0, 0, .2)',
                      borderRadius: 14,
                      width: 60,
                      height: 28,
                      lineHeight: 28,
                      align: 'center'
                  },
                  formatter: '{value}%',
                   margin: 26,
              },
              data: value,
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
                     color: 'rgba(255, 175, 94, .8)',
                      borderWidth: 0,
                      barBorderRadius: 15,
                  }
              },
            
              zlevel: 2,
              barWidth: '42',
              data: value,
            },
            {
              name: '',
              type: 'bar',
              xAxisIndex: 1,
              zlevel: 1,
              itemStyle: {
                  normal: {
                      color: '#F5F6FC',
                      borderWidth: 0,
                      barBorderRadius: 15,
                    //   shadowBlur: {
                    //       shadowColor: '#f6f6f6',
                    //       shadowBlur: 10,
                    //       shadowOffsetX: 0,
                    //       shadowOffsetY: 2,
                    //   },
                  },
                  emphasis: {
                    // color: '#f6f6f6',
                    // shadowBlur: 15,
                    // shadowColor: '#f6f6f6bf'
                  }
              },
              barWidth: '42',
              data: maxValue
            }
          ]
};
