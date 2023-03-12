option = {
//          title: {
//              text: 'ECharts 入门示例'
//          },
backgroundColor: '#fff',
            tooltip: {},
            legend: {
                data:['桩基','承台','墩柱（含肋板）','台帽盖梁','梁板预制','梁板安装','桥面铺装','防撞护栏']
            },
            xAxis: {
                data:['桩基','承台','墩柱（含肋板）','台帽盖梁','梁板预制','梁板安装','桥面铺装','防撞护栏']
            },
            	yAxis : [
					{
						type : 'value',
						splitLine:{
							show:false
						},
						splitArea:{
							show:true,
						},
						min:0,
						max:100,
					}
				],
            series: [
            {
                name: '桩基',
                type: 'bar',
                barGap:'-100%',
                 itemStyle: {
                 	normal: {
                    	color: '#C1232B'
                	}
            	},
//              data: [5, 20, 36, 10, 10, 20]
				data: [5, 0, 0, 0, 0, 0,0,0]
            },
            {
                name: '承台',
                type: 'bar',
                barGap:'-100%',
                 itemStyle: {
                 	normal: {
                    	color: '#B5C334'
                	}
            	},
//              data: [5, 20, 36, 10, 10, 20]
				data: [0, 20, 0, 0, 0, 0,0,0]
            },
            {
                name: '墩柱（含肋板）',
                type: 'bar',
                barGap:'-100%',
                 itemStyle: {
                 	normal: {
                    	color: '#FCCE10'
                	}
            	},
//              data: [5, 20, 36, 10, 10, 20]
				data: [0, 0, 36, 0, 0, 0,0,0]
            },
            {
                name: '台帽盖梁',
                type: 'bar',
                barGap:'-100%',
                 itemStyle: {
                 	normal: {
                    	color: '#E87C25'
                	}
            	},
//              data: [5, 20, 36, 10, 10, 20]
				data: [0, 0, 0, 10, 0, 0,0,0]
            },
            {
                name: '梁板预制',
                type: 'bar',
                barGap:'-100%',
                 itemStyle: {
                 	normal: {
                    	color: '#27727B'
                	}
            	},
//              data: [5, 20, 36, 10, 10, 20]
				data: [0, 0, 0, 0, 10, 0,0,0]
            },
            {
                name: '梁板安装',
                type: 'bar',
                barGap:'-100%',
                 itemStyle: {
                 	normal: {
                    	color: '#FE8463'
                	}
            	},
//              data: [5, 20, 36, 10, 10, 20]
				data: [0, 0, 0, 0, 0, 20,0,0]
            },
            {
                name: '桥面铺装',
                type: 'bar',
                barGap:'-100%',
                 itemStyle: {
                 	normal: {
                    	color: '#3399FE'
                	}
            	},
//              data: [5, 20, 36, 10, 10, 20]
				data: [0, 0, 0, 0, 0, 0,7,0]
            },
            {
                name: '防撞护栏',
                type: 'bar',
                barGap:'-100%',
                 itemStyle: {
                 	normal: {
                    	color: '#73D13D'
                	}
            	},
//              data: [5, 20, 36, 10, 10, 20]
				data: [0, 0, 0, 0, 0, 0,0,1]
            },
              {
            name: '访问来源',
            type: 'pie',
            radius : '28%',
            center: ['75%', '35%'],
//          data:['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
//          data: [5, 20, 36, 10, 10, 20]

            data:[
                {value:5, name:'桩基',itemStyle: {color: '#C1232B'}},
                {value:20, name:'承台',itemStyle: {color: '#B5C334'}},
                {value:36, name:'墩柱（含肋板）',itemStyle: {color: '#FCCE10'}},
                {value:10, name:'台帽盖梁',itemStyle: {color: '#E87C25'}},
                {value:10, name:'梁板预制',itemStyle: {color: '#27727B'}},
                {value:20, name:'梁板安装',itemStyle: {color: '#FE8463'}},
                {value:7, name:'桥面铺装',itemStyle: {color: '#3399FE'}},
                {value:1, name:'防撞护栏',itemStyle: {color: '#73D13D'}}
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
        };