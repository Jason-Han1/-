 var data1 = [5, 20, 36, 10, 10, 20];
var data2 = [15, 18, 46, 20, 8, 23];
var data3 = [15, 30, 46, 20, 20, 30];
var data_kind = ['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子'];
var data_month = ['1月','2月'];
var data_color = ['#C1232B','#B5C334','#FCCE10','#E87C25','#27727B','#FE8463'];

var my_all = {"data":[data1,data2],"class":data_kind,"time":data_month,"color":data_color};

option = {
	timeline: {
		axisType: 'category',
		autoPlay: true,
		playInterval: 5000,
		data: my_all.time
	},
	options: [{
			title: {
				text: '例子',
				left: 'left'
			},
			tooltip : {
						
			},
			legend: {
//              data:['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
				data: my_all.class
            },
			toolbox: {
				show: true,
				orient: 'vertical',
				x: 'right',
				y: 'center',
				feature: {
					mark: {
						show: true
					},
					dataView: {
						show: true,
						readOnly: false
					},
					magicType: {
						show: true,
						type: ['line', 'bar']
					},
					restore: {
						show: true
					},
					saveAsImage: {
						show: true
					}
				}
			},
			calculable: true,
			grid: {
				y: 100,
				y2: 100
			},
			xAxis: [{
				type: 'category',
				axisLabel: {
					interval: 0
				},
				data: my_all.class
			}],
			yAxis: [{
				type: 'value',
				name: '元'
			}],
			series: [
				{name: '衬衫',type: 'bar',barGap:'-100%',itemStyle: {normal: {color: '#C1232B'}},data: [5, 0, 0, 0, 0, 0],
				tooltip : {formatter: '1月  <br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#C1232B"></span>{b} : {c} '}},
				{name: '羊毛衫',type: 'bar',barGap:'-100%',itemStyle: {normal: {color: '#B5C334'}},data: [0, 20, 0, 0, 0, 0],
				tooltip : {formatter: '1月  <br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#B5C334"></span>{b} : {c} '}},
				{name: '雪纺衫',type: 'bar',barGap:'-100%',itemStyle: {normal: {color: '#FCCE10'}},data: [0, 0, 36, 0, 0, 0],
				tooltip : {formatter: '1月  <br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#FCCE10"></span>{b} : {c} '}},
				{name: '裤子',type: 'bar',barGap:'-100%',itemStyle: {normal: {color: '#E87C25'}},data: [0, 0, 0, 10, 0, 0],
				tooltip : {formatter: '1月  <br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#E87C25"></span>{b} : {c} '}},
				{name: '高跟鞋',type: 'bar',barGap:'-100%',itemStyle: {normal: {color: '#27727B'}},data: [0, 0, 0, 0, 10, 0],
				tooltip : {formatter: '1月  <br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#27727B"></span>{b} : {c} '}},
				{name: '袜子',type: 'bar',barGap:'-100%',itemStyle: {normal: {color: '#FE8463'}},data: [0, 0, 0, 0, 0, 20],
				tooltip : {formatter: '1月  <br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#FE8463"></span>{b} : {c} '}},
				{
		            name: '1月',
		            type: 'pie',
		            tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
		            radius : '28%',
		            center: ['75%', '35%'],
		//          data:['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
		//          data: [5, 20, 36, 10, 10, 20]
					
		
		            data:[
		                {value:5, name:'衬衫',itemStyle: {color: '#C1232B'}},
		                {value:20, name:'羊毛衫',itemStyle: {color: '#B5C334'}},
		                {value:36, name:'雪纺衫',itemStyle: {color: '#FCCE10'}},
		                {value:10, name:'裤子',itemStyle: {color: '#E87C25'}},
		                {value:10, name:'高跟鞋',itemStyle: {color: '#27727B'}},
		                {value:20, name:'袜子',itemStyle: {color: '#FE8463'}}
		            ],
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
			]
		},
		{
			//  var data2 = [15, 18, 46, 20, 8, 23];
			series: [
				{name: '衬衫',type: 'bar',barGap:'-100%',itemStyle: {normal: {color: '#C1232B'}},data: [15, 0, 0, 0, 0, 0],
				tooltip : {formatter: '2月  <br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#C1232B"></span>{b} : {c} '}},
				{name: '羊毛衫',type: 'bar',barGap:'-100%',itemStyle: {normal: {color: '#B5C334'}},data: [0, 18, 0, 0, 0, 0],
				tooltip : {formatter: '2月  <br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#B5C334"></span>{b} : {c} '}},
				{name: '雪纺衫',type: 'bar',barGap:'-100%',itemStyle: {normal: {color: '#FCCE10'}},data: [0, 0, 46, 0, 0, 0],
				tooltip : {formatter: '2月  <br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#FCCE10"></span>{b} : {c} '}},
				{name: '裤子',type: 'bar',barGap:'-100%',itemStyle: {normal: {color: '#E87C25'}},data: [0, 0, 0, 20, 0, 0],
				tooltip : {formatter: '2月  <br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#E87C25"></span>{b} : {c} '}},
				{name: '高跟鞋',type: 'bar',barGap:'-100%',itemStyle: {normal: {color: '#27727B'}},data: [0, 0, 0, 0, 8, 0],
				tooltip : {formatter: '2月  <br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#27727B"></span>{b} : {c} '}},
				{name: '袜子',type: 'bar',barGap:'-100%',itemStyle: {normal: {color: '#FE8463'}},data: [0, 0, 0, 0, 0, 23],
				tooltip : {formatter: '2月  <br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#FE8463"></span>{b} : {c} '}},
				{
		            name: '2月',
		            type: 'pie',
		            tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
		            radius : '28%',
		            center: ['75%', '35%'],
		//          data:['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
		//          data: [5, 20, 36, 10, 10, 20]
					
		
		            data:[
		                {value:5, name:'衬衫',itemStyle: {color: '#C1232B'}},
		                {value:20, name:'羊毛衫',itemStyle: {color: '#B5C334'}},
		                {value:36, name:'雪纺衫',itemStyle: {color: '#FCCE10'}},
		                {value:10, name:'裤子',itemStyle: {color: '#E87C25'}},
		                {value:10, name:'高跟鞋',itemStyle: {color: '#27727B'}},
		                {value:20, name:'袜子',itemStyle: {color: '#FE8463'}}
		            ],
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
			]
		}
	]
};