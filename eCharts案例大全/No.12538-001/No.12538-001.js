
option = {
    backgroundColor:"#111c4e",
    xAxis: {
        type: 'category',
        data: ['1月', '1月', '1月', '1月', '1月', '1月', '1月', 
        '1月', '1月', '1月', '1月', '1月', '1月','1月', '1月', 
        '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月',
        '10月', '11月', '12月'],
        axisLabel:{
            interval:0,
            color:'#d3e0fa'
        },
        axisTick: {
            show:false
        }
    },
    yAxis: [{
        type: 'value',
        min:0,
        max:100,
        splitNumber:5,
        axisLine:{
            show:false
        },
        splitLine: {
            show: false
        },
        axisLabel:{
            color:'#d3e0fa'
        },
        axisTick:{
            show:false
        },
        name:'单位(万户)',
        nameTextStyle:{
            color:'#d3e0fa',
        }
    },
    {
        type:'value',
        min:0,
        max:100,
        position:'right',
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel:{
            formatter: '{value} %',
            color:'#d3e0fa'
        },
        splitArea: {
                show: true,
                areaStyle: {
                    color: [ 'rgba(250,250,250,0.05)','rgba(250,250,250,0.0)']
                }
            },
        name:'单位( % )',
        nameTextStyle:{
            color:'#d3e0fa',
        }
    }
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    dataZoom:{
        type:'slider',
        start:0,
        end:35,
        handleSize:'1%',
        maxValueSpan:20,
        height:15
    },
    series: [{
        name: '增幅',
        data: [42, 44, 48, 40, 42, 47, 41,38,46,46,46,46,46,42, 44, 48, 40, 42, 47, 41,38,46,46,46,46,46],
        type: 'line',
        lineStyle:{
            normal:{
                color:'#C0FF3E',
                width:3
            }
        },
        itemStyle:{
            opacity:0
        }
    },
    {
        name: '用户数',
        data: [40, 42, 46, 38, 40, 45, 39,36,44,44,44,44,44,42, 44, 48, 40, 42, 47, 41,38,46,46,46,46,46],
        type: 'bar',
        barWidth: '50%',
        itemStyle:{
            normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#D8BFD8'
                        }, {
                            offset: 1,
                            color: '#a9a6da'
                        }]),
                    }
        }
    }
    ],
    color:['#C0FF3E'],
    legend:{
        data:[
            "增幅",
            "用户数"
        ],
        top:10,
        textStyle:{
            color:'#d3e0fa'
        }
    },
    grid:{
        left:'11%'
    }
};



