option = {
    title: {
        // text: '帕累托图模拟',
        // subtext:'数据纯属瞎、编',
        left:'left',
    },
    tooltip: {
        trigger:'item',
        formatter:'{c}%'
        /*axisPointer:{
            type:'line'
        }*/
    },
    legend: {
        data:['指标', {name:'增长率（%）',icon:'circle'}],
        // icon:'roundRect',
        // orient:'vertical',
        // right:'14%',
        // bottom:'60%'
    },
    xAxis: [
        {
            splitLine:{
                show:false
            },
            data: ['Issue A', 'Issue B', 'Issue C', 'Issue D', 'Issue E', 'Issue F', '其他']
        },
        {
            splitLine:{
                show:false
            },
            boundaryGap:false,
            axisLabel:{
                show:false
            },
            data:['Issue A', 'Issue B', 'Issue C', 'Issue D', 'Issue E', 'Issue F', '其他','total']
        }
    ],
    yAxis: [
        {
            type:'value',
            max:200,
            axisLabel:{
                // show:false
            },
            axisTick:{
                show:false
            },
            splitLine:{
                show:false
            }
        },
        {
            type:'value',
            axisLabel:{
                // show:false
            },
            axisTick:{
                show:false
            },
            splitLine:{
                show:false
            }
        }
    ],
    series: [
        {
            name:'指标', 
            type:'bar',
            xAxisIndex:0,
            yAxisIndex:0,
            // silent:true,
    barWidth:'100%',
    //         label:{
    //             normal:{
    //                 show:true,
    //                 position:'top',
    //                 //formatter:'{c}
    //                 textStyle:{
    //                     fontWeight:'bold',
    //                     fontSize:20
    //                 }
    //             }
    //         },
            data:[150, 45, 32, 15, 6, 2, 20]
        },
        {
            name:'增长率（%）', 
            type:'line',
            xAxisIndex:1,
            yAxisIndex:1,
            smooth:true,
            clipOverflow:false,
            symbolSize:9,
            itemStyle:{
                normal:{
                    //color:,
                    //borderColor:,
                    borderWidth:3,
                }
            },
            lineStyle:{
                normal:{
                    //color:,
                    width:4,
                }
            },
            data:[0, 28, 50, 68, 81, 91, 97, 100]
        }
    ]
};
