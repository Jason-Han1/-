option = {
          backgroundColor: '#fff',
          grid: {
            top: '18%', bottom: '10%', left: '11%', right: '5%',
          },
          tooltip: {
            trigger: 'axis',
            formatter: function(params) {
    		    return '目标QTF';
    		},
            axisPointer: {
              type: 'shadow',
              label: {
                backgroundColor: '#4c647c'
              }
            },
            textStyle: {
              color: '#fff',
              fontStyle: 'normal',
              fontFamily: '微软雅黑',
              fontSize: 12,
            }
          },
          xAxis: [{
            name:'',
            type: 'category',
            color: '#59588D',
            data: ['一月', '三月', '五月', '七月', '九月', '十一月'],
            axisLabel: {
              margin: 10,
              color: '#262626',
              textStyle: {
                fontSize: 12
              },
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(107,107,107,0.1)',
              }
            },
            axisTick: {
              show: false
            },
          }],
          yAxis: [{
            name:'数量           ',
            axisLabel: {
              formatter: '{value}%',
              color: '#282828',
              textStyle: {
                fontSize: 12
              },
            },
            axisLine: {
              show:false,
              lineStyle: {
                color: 'rgba(107,107,107,0.37)',
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(131,101,101,0.1)',
                type: 'solid',
              }
            }
          }],
          series: [{
            name:'数量',
            type: 'bar',
            // 	data: [40, 80, 50, 36, 30, 35, 40, 60],
            barWidth: '40px',
            data: [91.9, 94.2, 99.2, 98.1, 98.6, 96.9],
            itemStyle: {
              normal: {
                color: function (params) {
                  var index_color = params.value;
                  if (index_color <=95) {
                    return '#ff9966';
                  } else if(index_color >95 &&index_color <=97) {
                    return '#1890ff';
                  }else if(index_color >97 &&index_color <=100) {
                    return '#6673ff';
                  }
                }
              }
            },
            label: {
              normal: {
                show: true,
                fontSize: 16,
                // 			fontWeight: 'bold',
                position: 'top',
                color: function (params) {
                  var index_color = params.value;
                  if (index_color <=93) {
                    return '#6673ff';
                  } else if(index_color >93 &&index_color <=97) {
                    return '#ff9966';
                  }else if(index_color >97 &&index_color <=100) {
                    return '#1890ff';
                  }
                }
              }
            },
    		markLine: {
              symbol:"none",
              itemStyle: {
                normal: {
                  borderWidth: 0,
                  lineStyle: {
                    type: 'dashed',
                    color: '#139948',
                    width: 1,
                  },
                },
              },
    			label: {
    				normal: {
    					fontWeight: 'bold',
    					padding: 2,
    					fontSize: 14,
    					fontFamily: 'Microsoft YaHei',
    					formatter: function(params) {
    						return '目标';
    					},
    				},
    			},
    			data: [{
    				yAxis: 95,
    			},]
    		}
          },
          //利用多数据源方式渲染新的分割线，类型换一个即可
          {
            name:'数量',
            type: 'line',
    		markLine: {
              symbol:"none",
              itemStyle: {
                normal: {
                  borderWidth: 0,
                  lineStyle: {
                    type: 'dashed',
                    color: '#6673ff',
                    width: 1,
                  },
                },
              },
    			label: {
    				normal: {
    					fontWeight: 'bold',
    					padding: 2,
    					fontSize: 14,
    					fontFamily: 'Microsoft YaHei',
    					formatter: function(params) {
    						return '平均';
    					},
    				},
    			},
    			data: [{
    				yAxis: 97,
    			},]
    		}
          }]
        };