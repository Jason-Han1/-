option = {
    backgroundColor: "#030d22",
    tooltip: {
        textStyle :{
            fontSize :16
        },
      trigger: "axis",
      show:true,
      formatter : function(params){
          console.log(params);
          return "第"+params[0].name+'环'+'<br>'+params[0].seriesName+':'+params[0].data+'m³'+'<br>'+params[1].seriesName+':'+params[1].data+'m³';
      }
    },
    grid: {
        top: '5%',
        left: '5%',
        right: '10%',
        bottom: '8%',
        containLabel: true
    },
    legend: {
        itemGap: 50,
        data: ['同步注浆量' ,'补浆量'],
        textStyle: {
            color: '#f9f9f9',
            borderColor: '#fff',
            fontSize:16
        },
    },
    xAxis: [{
        show:true,
        name:'环数',
        nameTextStyle:{
			color:'#fff',
		    fontSize:14,
		},
        type: 'category',
        boundaryGap: true,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: false,
            lineStyle: {
                color: '#f9f9f9'
            },
        },
        axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                color: '#d1e6eb',
                margin: 0,
                fontSize:18
            },
        },
        axisTick: {
            show: false,
        },
        data: ['1', '2', '3', '4', '5', '6', '7','8','9','10' ],
    }],
    yAxis: [{
        type: 'value',
        min: 0,
         max: 10,
        splitNumber: 7,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.05)'
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show:false,
            margin: 20,
            textStyle: {
                color: '#d1e6eb',
                fontSize:16

            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
        name: '同步注浆量',
        type: 'line',
        // smooth: true, //是否平滑曲线显示
        // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 6,
        lineStyle: {
            normal: {
                color: "#28ffb3", // 线条颜色
            },
            borderColor: '#f0f'
        },
        label: {
            show: true,
            position: 'top',
            textStyle: {
                color: '#fff',
                fontSize:18
            }
        },
        itemStyle: {
            normal: {
                color: "#28ffb3",
                fontSize:18

            }
        },
        areaStyle: { //区域填充样式
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0,154,120,1)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(0,0,0, 0)'
                    }
                ], false),
                shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
        data: [8, 5, 6, 8, 5, 6, 8,5,7,5]
    }, {
        name: '补浆量',
        type: 'line',
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 6,
         label: {
             show: true,
            position: 'top',
            textStyle: {
                color: '#fff',
                fontSize:18
            }
        },
        itemStyle: {
             normal: {
                color: "rgba(255,100,166,0.7)",
                fontSize:18

            }
        },
           areaStyle: { //区域填充样式
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(255,100,166,0.7)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(255,100,166,0)'
                    }
                ], false),
                shadowColor: 'rgba(255,100,166,0.9)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
        data: [1, 3, 2, 3, 1, 2, 3,1,2,3]
    }]
};