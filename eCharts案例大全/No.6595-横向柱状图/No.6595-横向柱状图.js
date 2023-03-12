var datay = ['1', '1', '1','1'];
var data = [3.66, 2.86, 1.82,2];
var option = {
		    tooltip: {
		    	show:false,
		        trigger: 'axis',
		        axisPointer: {
		            type: 'shadow'
		        }
		    },
		    legend: {
		        show: false
		    },
		    grid: {
		        left: 470
		    },
		    graphic:[{
                type: 'text',
                left: '7%',
                top: '18%',
                style: {
                    fill: '#fff',
                    text: '应上报项目',
                    font: '48px 微软雅黑'
                }
            },{
                type: 'text',
                left: '6%',
                top: '8%',
                style: {
                    fill: '#48D1CC',
                    text: '1349',
                    font: '65px 微软雅黑'
                }
            },{
                type: 'text',
                left: '21%',
                top: '8.5%',
                style: {
                    fill: '#FFF',
                    text: '个',
                    font: '45px 微软雅黑'
                }
            },{
                type: 'text',
                left: '7%',
                top: '48%',
                style: {
                    fill: '#fff',
                    text: '已上报项目',
                    font: '48px 微软雅黑'
                }
            },{
                type: 'text',
                left: '6%',
                top: '38%',
                style: {
                    fill: '#48D1CC',
                    text: '1349',
                    font: '65px 微软雅黑'
                }
            },{
                type: 'text',
                left: '21%',
                top: '38.5%',
                style: {
                    fill: '#FFF',
                    text: '个',
                    font: '45px 微软雅黑'
                }
            },{
                type: 'text',
                left: '7%',
                top: '78%',
                style: {
                    fill: '#fff',
                    text: '上报率',
                    font: '48px 微软雅黑'
                }
            },{
                type: 'text',
                left: '10%',
                top: '68%',
                style: {
                    fill: '#48D1CC',
                    text: '90',
                    font: '65px 微软雅黑'
                }
            },{
                type: 'text',
                left: '17%',
                top: '68.5%',
                style: {
                    fill: '#FFF',
                    text: '%',
                    font: '45px 微软雅黑'
                }
            },{
                type: 'text',
                left: '37%',
                top: '10%',
                style: {
                    fill: '#fff',
                    text: '六月完成投资额',
                    font: '48px 微软雅黑'
                }
            },{
                type: 'text',
                left: '37%',
                top: '30%',
                style: {
                    fill: '#fff',
                    text: '1-6月完成投资额',
                    font: '48px 微软雅黑'
                }
            },{
                type: 'text',
                left: '37%',
                top: '50%',
                style: {
                    fill: '#fff',
                    text: '6月增速',
                    font: '48px 微软雅黑'
                }
            },{
                type: 'text',
                left: '37%',
                top: '70%',
                style: {
                    fill: '#fff',
                    text: '1-6月增速',
                    font: '48px 微软雅黑'
                }
            }],
		    xAxis: {
		        type: 'value',
		
		        splitLine: {
		            show: false
		        },
		        axisLabel: {
		            show: false
		        },
		        axisTick: {
		            show: false
		        },
		        axisLine: {
		            show: false
		        }
		
		    },
		    yAxis: {
		        type: 'category',
		        inverse: true,
		        axisLine: {
		            show: false
		        },
		        axisTick: {
		            show: false
		        },
		        axisPointer: {
		            label: {
		                show: false,
		                margin: 30
		            }
		        },
		        data:datay,
		        axisLabel: {
		            show:false,
		            margin: 100,
		            fontSize: 14,
		            align: 'left',
		            color: '#333'
		        }
		    },
		    series: [{
		            z: 2,
		            name: 'value',
		            type: 'bar',
		            barWidth:'20',
		            data: data,
		            itemStyle:{
						color:'#87CEFA'
					},
		            label: {
		                show: false,
		                position: 'right',
		                color: '#333333',
		                fontSize: 14,
		                offset: [10, 0]
		            }
		        }
		
		    ]
		};