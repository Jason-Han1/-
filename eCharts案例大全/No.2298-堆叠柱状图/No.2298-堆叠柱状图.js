option = {
//          title: {
//              text: 'ECharts 入门示例'
//          },
            tooltip: {},
            legend: {
                data:['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [
            {
                name: '衬衫',
                type: 'bar',
                barGap:'-100%',
                 itemStyle: {
                 	normal: {
                    	color: '#C1232B'
                	}
            	},
//              data: [5, 20, 36, 10, 10, 20]
				data: [5, 0, 11, 0, 0, 0]
            },
            {
                name: '羊毛衫',
                type: 'bar',
                barGap:'-100%',
                stack: 'total',
                 itemStyle: {
                 	normal: {
                    	color: '#B5C334'
                	}
            	},
//              data: [5, 20, 36, 10, 10, 20]
				data: [0, 20, {
            value: 20,
            itemStyle: {
                color: 'black'
            }
        }, 0, 0, 0]
            },
            {
                name: '雪纺衫',
                type: 'bar',
                barGap:'-100%',stack: 'total',
                 itemStyle: {
                 	normal: {
                    	color: '#FCCE10'
                	}
            	},
//              data: [5, 20, 36, 10, 10, 20]
				data: [0, 0, 36, 0, 0, 0]
            },
            {
                name: '裤子',
                type: 'bar',
                barGap:'-100%',stack: 'total',
                 itemStyle: {
                 	normal: {
                    	color: '#E87C25'
                	}
            	},
//              data: [5, 20, 36, 10, 10, 20]
				data: [0, 0, 11, 10, 0, 0]
            },
            {
                name: '高跟鞋',
                type: 'bar',
                barGap:'-100%',stack: 'total',
                 itemStyle: {
                 	normal: {
                    	color: '#27727B'
                	}
            	},
//              data: [5, 20, 36, 10, 10, 20]
				data: [0, 0,11, 0, 10, 0]
            },
            {
                name: '袜子',
                type: 'bar',
                barGap:'-100%',stack: 'total',
                 itemStyle: {
                 	normal: {
                    	color: '#FE8463'
                	}
            	},
				data: [0, 0, 33, 0, 0, 20]
            },
            ]
        };