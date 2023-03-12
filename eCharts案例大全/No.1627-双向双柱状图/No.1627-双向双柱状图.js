xData=['居民医保', '职工医保', '居民养老', '职工养老', '机关养老',]
data1=['84','13','43','63','22'],
data2=['54','73','32','53','41'],
data3=['54','73','32','53','41'],
data4=['44','53','92','13','31'],
option = {
   backgroundColor: 'rgba(7, 29, 29,1)',
   timeline: {
            show: false,
            top: 0,
            data: []
          },
          tooltip: {
				show: true,
				trigger: 'axis',
				formatter: function(params) {
					console.log(params);
					if(params[0].componentIndex==0){
						return '<span style="font-weight:bolder;">'+params[0].name + ' - 人员情况</span><br/>' +
							'<span style="display:inline-block; width:10px; height:10px; border-radius:100px; margin-right:5px; background:'+params[0].color.colorStops[1].color+'"></span>'+params[0].seriesName + ' : ' + params[0].value+"万人<br/>"+
							'<span style="display:inline-block; width:10px; height:10px; border-radius:100px; margin-right:5px; background:'+params[1].color.colorStops[1].color+'"></span>'+params[1].seriesName + ' : ' + params[1].value+'万人';
						
					}else{
						return '<span style="font-weight:bolder;">'+params[0].name + ' - 机构情况</span><br/>' +
							'<span style="display:inline-block; width:10px; height:10px; border-radius:100px; margin-right:5px; background:'+params[0].color.colorStops[0].color+'"></span>'+params[0].seriesName + ' : ' + params[0].value+"个<br/>"+
							'<span style="display:inline-block; width:10px; height:10px; border-radius:100px; margin-right:5px; background:'+params[1].color.colorStops[0].color+'"></span>'+params[1].seriesName + ' : ' + params[1].value+'个';
						
					}
					
				}
			},
          /*title: {
             text: 'XXXX完成项目数',
             textStyle: {
                color: '#FFFFFF',
                fontWeight: '800',
                fontSize: '20',
              },
             left: 'center',
             top: '2%',
         },*/
          legend: {
            show: true,
            top: '7%',
            right:0,
            textStyle: {
              color: '#CDD7D7'
            },
            data: ['参保数', '实际缴费数']
          },
          grid: [
				// 左边柱子
				{
					show: false,
					left: '2%',
					top: '10%',
					bottom: '20',
					containLabel: true,
					width: '43%'
				},
				// 中间
				{
					show: false,
					left: '51%',
					top: '10%',
					bottom: '20',
					width: '0%'
				},
				// 右边柱子
				{
					show: false,
					right: '2%',
					top: '10%',
					bottom: '20',
					containLabel: true,
					width: '43%'
				}
			],
          xAxis: [
            {
              name:'万人',
              type: 'value',
              inverse: true,
              axisLine: {
                show: true,
                lineStyle:{
                  color: '#189cfe' ,
                }
              },
              nameLocation: 'start' ,
              nameGap:10,
              axisTick: {
                show: true
              },
              axisLabel: {
                show: true,
                color:'#FFF',
              },
              min:0,/*  min 和 max 属性，确保坐标轴分隔段数大小一致    */
              max:100,
              splitLine: {
                show: false
              }
            },
            {
              gridIndex: 1,
              show: false
            },
            {
              name:'个',
              gridIndex: 2,
              axisLine: {
                show: true,
                lineStyle:{
                  color: '#189cfe' ,
                }
              },
              nameLocation: 'start' ,
              nameGap:10,
              axisTick: {
                show: true
              },
              min:0,/*  min 和 max 属性，确保坐标轴分隔段数大小一致    */
              max:100,
              axisLabel: {
                show: true,
                color:'#FFF',
              },
              splitLine: {
                show: false
              }
            }
          ],
          yAxis: [
            {
              type: 'category',
              inverse: true,
              position: 'right',
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false
              },
              data: xData
            },
            {
              gridIndex: 1,
              type: 'category',
              inverse: true,
              position: 'center',
              axisLine: {
                show: false
              },
              
              axisTick: {
                show: false
              },
              axisLabel: {
                show: true,
                align: 'center',
                color: '#FFF',
                fontSize: 14
              },
              data: xData
            },
            {
              gridIndex: 2,
              type: 'category',
              inverse: true,
              position: 'left',
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false
              },
              data: xData
            }
          ],
          series: [
            {
              name: '参保数',
              type: 'bar',
              xAxisIndex: 0,
              yAxisIndex: 0,
              barWidth: 8,
              barGap: '0%',
              showBackground: true,
              backgroundStyle:{
                borderRadius: [100,0,0,0],
                color:"#11294d",
              },
              itemStyle: {
                borderRadius: [100,0,0,100],
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: '#56c8ff'
                  },
                  {
                    offset: 1,
                    color: '#08c1f8'
                  }
                ])
              },
              /*label: {
                show: true,
                position: 'left',
                color: '#4BE6E6'
              },*/
              data:data1
            },
            {
              name: '实际缴费数',
              type: 'bar',
              xAxisIndex: 0,
              yAxisIndex: 0,
              barWidth: 8,
              barGap: '0%',
              showBackground: true,
              backgroundStyle:{
                borderRadius: [0,0,0,100],
                color:"#11294d",
              },
              itemStyle: {
                borderRadius: [100,0,0,100],
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: '#f2f59e'
                  },
                  {
                    offset: 1,
                    color: '#f4b979'
                  }
                ])
              },
              /*label: {
                show: true,
                position: 'left',
                color: '#4BE6E6'
              },*/
              data:data2
            },
            {
              name: '参保数',
              type: 'bar',
              xAxisIndex: 2,
              yAxisIndex: 2,
              barWidth: 8,
              barGap: '0%',
              showBackground: true,
              backgroundStyle:{
                borderRadius: [0,100,0,0],
                color:"#11294d",
              },
              itemStyle: {
                borderRadius: [0,100,100,0],
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: '#08c1f8'
                  },
                  {
                    offset: 1,
                    color: '#56c8ff'
                  }
                ])
              },
              /*label: {
                show: true,
                position: 'right',
                color: '#F29740'
              },*/
              data: data3
            },
            {
              name: '实际缴费数',
              type: 'bar',
              xAxisIndex: 2,
              yAxisIndex: 2,
              barWidth: 8,
              barGap: '0%',
              showBackground: true,
              backgroundStyle:{
                borderRadius: [0,0,100,0],
                color:"#11294d",
              },
              itemStyle: {
                borderRadius: [0,100,100,0],
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: '#f4b979'
                  },
                  {
                    offset: 1,
                    color: '#f2f59e'
                  }
                ])
              },
              /*label: {
                show: true,
                position: 'right',
                color: '#F29740'
              },*/
              data: data4
            }
          ]
};
