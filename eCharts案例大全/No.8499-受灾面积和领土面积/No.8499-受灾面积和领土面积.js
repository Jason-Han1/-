var ma = [0.0, 68.09, 146.34, 215.18, 262.09];
var tu = [0.0, 6.81, 14.63, 21.52, 26.21];
var ji = [0.0, 183.84, 395.13, 580.98, 707.63];


var xData = function() {
    var data = [];
    for (var i = 2020; i < 2101; i+=20) {
        data.push(i + "");
    }
    return data;
}();


option = {
    backgroundColor: '#fff',
    // tooltip: {
    //     trigger: 'axis',
    //     backgroundColor:'rgba(255,255,255,0.1)',
    //     axisPointer: {
    //         type: 'shadow',
    //         label: {
    //             show: true,
    //             backgroundColor: '#7B7DDC'
    //         }
    //     }
    // },
    
    // legend: {
    //     data: ['领土面积', '受灾面积'],
    //     textStyle: {
    //         color: 'black'
    //     },
    //     top:'7%',
    // },

    xAxis: {

        name: "year",
        nameTextStyle:{
            fontSize:28,
        },
        nameLocation: "center",
        nameGap:32,
        data: xData,
        axisLine: {
            lineStyle: {
                color: 'black'
            }
        },
        axisTick:{
            show:false,
        },
        axisLabel:{
            fontSize:18,
            },
    },
    
    
    yAxis: [
        {
            name:"Lost land (km²)",
            nameTextStyle:{
            fontSize:25,
            },
            nameLocation:"center",
            nameGap:43,
            axisLabel:{
                fontSize:18,
            },
            splitLine: {show: false},
            axisLine: {
                lineStyle: {
                    color: 'black',
                }
            },
        },
    ],
    
    
    
    // 保存图片
    toolbox: {
        show: true,
　　    feature: {
　　        saveAsImage: {
    　　　　show:true,
    　　　　excludeComponents :['toolbox'],
    　　　　pixelRatio: 2
　　　　    }
　　    }
    },
    
    
    

    
    series: [
    {
        name: '受灾面积',
        type: 'bar',
        barWidth: 80,
        itemStyle: {
            normal: {
                label:{
                    show:true,
                    position:'top',
                    textStyle:{
                        color: 'black',
                        fontSize: 15,
                    },
                },
                // 角变圆滑
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#7b4397'},
                        {offset: 1, color: '#dc2430'}
                    ]
                )
            }
        },
        data: ma
    }, 
    
    // {
    //     name: '领土面积',
    //     type: 'bar',
    //     barGap: '-100%',
    //     barWidth: 100,
    //     itemStyle: {
    //         normal: {
    //             barBorderRadius: 5,
    //             color: new echarts.graphic.LinearGradient(
    //                 0, 0, 0, 1,
    //                 [
    //                     {offset: 0, color: 'rgba(205,215,166)'},
    //                     {offset: 0.2, color: 'rgba(119,153,130)'},
    //                     {offset: 1, color: 'rgba(34,91,94)'}
    //                 ]
    //             )
    //         }
    //     },
    //     z: -12,
        
    //     data: lingtu,
    // }, 
   ]
};