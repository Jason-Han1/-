option = {
			title: {
				text: '项目进度'
			},
			legend: {
				data: ['项目进度']
			},
			xAxis: {
				type: 'time'
			},

			yAxis: {

				data: ['计划时间', '实际时间']

			},
			tooltip: {
				show :true,
				trigger: 'axis',
				formatter: function(params) {
					 var res=params[0].name+"</br>"
					   var date0=params[0].data;
					   var date1=params[1].data;
						date0=date0.getFullYear()+"-"+(date0.getMonth()+1)+"-"+date0.getDate();
					   date1=date1.getFullYear()+"-"+(date1.getMonth()+1)+"-"+date1.getDate();
					   res+=params[0].seriesName+":"+date0+"</br>"
					   res+=params[1].seriesName+":"+date1+"</br>"
					return res;
				}
			},
			grid : {
				left: '12%',
				right: '10%'
			},
			series: [

				{
					name: '开始时间',
					type: 'bar',
					stack: '总量',
					barWidth: '20%',
					itemStyle: {
						normal: {
							color: 'rgba(0,0,0,0)'
						}
					},
					data: [
						new Date("2016/01/01"),
						new Date("2016/03/01")

					]
				},{
					name: '结束时间',
					type: 'bar',
					stack: '总量',
					barWidth: '20%',
					itemStyle: {
						normal: {
							color: '#25B59E',
							barBorderRadius: 0,//柱形边框圆角半径，单位px，支持传入数组分别指定柱形4个圆角半径
							shadowColor: 'rgba(0, 0, 0, 0)',//阴影颜色。支持的格式同color
							shadowBlur: 0//图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
						}
					},
					data: [
						new Date("2016/10/30"),
						new Date("2016/12/30")

					]
				}
			]
		};