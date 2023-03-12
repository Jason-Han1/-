option = {
    title:{
        text:'12个月优良污染天数及优良率',
         textStyle: {
            color: 'rgb(200,100,200)'
        }
    },
    //color: ['#3398DB', '#5676ff'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    colors: ['#b6ec80', '00c0ff'],
    legend: {
        orient: 'horizontal',
        show:true,
        top: 10,
        left:'center',
        icon: 'roundRect',
        data: ['优', '良','轻度','中度','重度','严重'],
        itemWidth: 10,
        itemHeight: 10,
        textStyle:{
            fontSize:10,
            // lineHeight:12,
            // padding: [3, 0, 0, 0]
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        splitLine: {
            show: false
        }, //去除网格线
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#999999',
                fontSize: 12,
                width: 1
            }
        },
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    }],
    yAxis: [{
        type: 'value',
        name:'天',
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }, //去除网格线
        axisLine: {
            show: true,
            lineStyle: {
                color: '#999999',
                fontSize: 12,
                width: 1
            }
        }
    }, {
        type: 'value',
        name: '百分比',
        min: 0,
        max: 100,
        interval: 20,
        axisLabel: {
            formatter: '{value} %'
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }, //去除网格线
        axisLine: {
            show: true,
            lineStyle: {
                color: '#999999',
                fontSize: 12,
                width: 1
            }
        }
    }],
    series: [{
            name: '优',
            type: 'bar',
            stack: '总量',
            barWidth: '20%',
            color: '#00E400',
            data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
        },
        {
            name: '良',
            type: 'bar',
            stack: '总量',
            barWidth: '20%',
            color: '#FFED4C',
            data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
        },
        {
            name: '轻度',
            type: 'bar',
            stack: '总量',
            barWidth: '20%',
            color: '#FF7B1E',
            data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
        },
        {
            name: '中度',
            type: 'bar',
            stack: '总量',
            barWidth: '20%',
            color: '#DB0627',
            data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
        },
        {
            name: '重度',
            type: 'bar',
            stack: '总量',
            barWidth: '20%',
            color: '#881055',
            data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
        },
        {
            name: '严重',
            type: 'bar',
            stack: '总量',
            barWidth: '20%',
            color: '#7E0000',
            data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
        },
        {
            name: '昼间超标率',
            type: 'line',
            smooth:true,
            yAxisIndex: 1,
            stack: '总量',
            data: [20, 15, 25, 10, 18, 25, 22, 18, 13, 27, 20, 15],
            symbol: 'circle',
            symbolSize:8,
            lineStyle: {
                color: 'rgba(47,120,254)'
            },
             itemStyle: {
                color: 'rgba(47,120,254)',
                borderType:'solid',
                borderWidth:1,
                borderColor:'#FFF',
            },
            areaStyle: { //区域填充样式
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(47,120,254,0.8)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(47,120,254, 0)'
                    }
                ], false),
                shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
        }
    ]
}