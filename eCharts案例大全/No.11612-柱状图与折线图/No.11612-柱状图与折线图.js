option = {
    backgroundColor: "#05224d",
title: {
        left: 'left',
        text: '概率',
        show:false
    },
    tooltip: {
        trigger: 'axis',
        formatter:'{a}:{c}',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    grid: {
        show:false,
        top:'30',
        bottom:'60',
        right:'60',
        left:'60'
    },
    legend: {
    itemGap: 50,
        data: ['检测数' ,'合格率'],
        textStyle: {
            color: '#f9f9f9',
            borderColor: '#fff'
        },
    },
    
    xAxis: [
        {
            type: 'category',
            axisTick:{
            show:false,
        },
        axisLabel:{
            interval: 0,
            rotate:0,
            textStyle: {
                color:'#fff',
                 fontSize:12,
            }
        },
        axisLine: {
        	show:false,
            lineStyle: {
                type: 'solid',
                color:'#fff',
                width:'1  ',                                                //坐标线的宽度
              
            }
        },
            data: ['总体', '稳态工况', '加载减速', '不透光烟度', '双怠速'],

        }
    ],

//设置两个y轴，左边显示数量，右边显示概率

    yAxis: [
        {
            type: 'value',
            name: '数量',
            show:true,
            interval: 50,
            min: 0,
            max: 20,
            interval: 4,
             splitLine: {
				show: false,
				lineStyle: {
					color: '#40A1EA', //网格横线颜色
					width: 1,
					type: 'solid'
				}
			},
			axisTick: {
				show: false,
			},
			axisLabel: {
                	textStyle: {
					color: '#fff',
					fontSize: 12, //坐标值得具体的颜色
				}
            },
			axisLine: {
				show: false,
			},
        },
        {
            type: 'value',
            name: '概率',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
                formatter: '{value} %',
                	textStyle: {
					color: '#fff',
					fontSize: 12, //坐标值得具体的颜色
				}
            },
            splitLine: {
				show: false,
				lineStyle: {
					color: '#40A1EA', //网格横线颜色
					width: 1,
					type: 'solid'
				}
			},
			axisTick: {
				show: false,
			},
			axisLine: {
				show: false,
			},
        }
    ],

//每个设备分数量、概率2个指标，只要让他们的name一致，即可通过，legeng进行统一的切换

    series: [
        {
            name:'检测数',
            type:'bar',
            barWidth:10,
            data:[9,8,7,6,6],
            itemStyle: {
            normal: {
                barBorderRadius: [10, 10, 0, 0],
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#a163ff'},
                        
                        {offset: 1, color: '#6e18d7'}
                    ]
                ),
                opacity: 0.85
            }
        },
            
        },
         {
            name:'合格率',
            type:'line',
            yAxisIndex: 1,    //这里要设置哪个y轴，默认是最左边的是0，然后1，2顺序来。
            data:[19,12,8,6,14],
             areaStyle: { //区域填充样式
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(6,44,99,1)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(8,22,41, 1)'
                    }
                ], false),
                shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
            symbolSize:10,
            itemStyle:{
            normal:{
            color:"#0063ff"
            }
            
            }
        },
      
    ]
};
