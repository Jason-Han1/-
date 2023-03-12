option = {
    title: {
        text: '游客评价数据趋势图',
        x: 'center',
        y: 0,
        textStyle:{
            color:'#151E26',
            fontSize:14,
            fontWeight:'normal',
        },
        
    },
    legend: {
        data: ['OTA数据总量', '微博数据总量'],
        textStyle: {
            color: '#B4B4B4'
        },
        top:'7%',
    },
    grid:{
        x:'12%',
        width:'82%',
        y:'12%',
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2021-06-09', '2021-06-10', '2021-06-11', '2021-06-12', '2021-06-13', '2021-06-14', '2021-06-15'],
        axisLine: {
            lineStyle: {
                color: '#F1F1F1'
            }
        },
        axisTick:{
            show:false,
        },
       axisLabel:{
            color: '#151E26'
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#F1F1F1'
            }
        },
    },
    yAxis: [{
        name: 'OTA数据总量',
        nameTextStyle: {
            color: '#151E26'
        },
        axisTick: {show: false},
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#F1F1F1'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#F1F1F1',
            }
        },
        
        axisLabel:{
            color: '#151E26',
            formatter:'{value} ',
        }
    },
        {
        name: '微博数据总量',
        nameTextStyle: {
            color: '#151E26'
        },
        axisTick: {show: false},
        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#F1F1F1',
            }
        },
        axisLabel:{
            color: '#151E26',
            formatter:'{value} ',
        }
    }],
    
    series: [{
        name: 'OTA数据总量',
        type: 'line',
        smooth: true,
        yAxisIndex: 1,
        symbol: 'none',
        itemStyle: {
                normal: {
                color:'#29BB9D'},
        },
        areaStyle: { //区域填充样式
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(41, 187, 157, 0.17)"


                    },
                    {
                        offset: 1,
                        color: "rgba(41, 187, 157, 0)"
                    }
                ], false),
                shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
        data: [12148,18547
                ,19852,13587,12475
                ,11478,10247,6578]
    }, 
    
    {
        name: '微博数据总量',
        type: 'line',
        smooth: true,
        symbol: 'none',
        itemStyle: {
            normal: {
                color: '#FFC41F'
            }
        },
        areaStyle: { //区域填充样式
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(255, 196, 31, 0.21)"


                    },
                    {
                        offset: 1,
                        color: "rgba(255, 247, 4, 0)"
                    }
                ], false),
                shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
        data: [4600,5500,7500
                ,8500,12500,21500
                ,23200,25250,4600,5500,6500
                ,8500,22500,21500,9900,12500,14000,21500
                ,23200,24450,25250,7500]
    }
   ]
};
