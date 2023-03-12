 option = {
        backgroundColor:'white',
        xAxis: [{type: 'category',axisTick:{show:false}}],
        yAxis: [{type: 'category'}],
        dataset: {
            source: [
                ["Country","Income"],
                ['其他地区', "<50亿元", 24, 2],
                ['京津冀', "<50亿元", 20, 1],
                 ['珠三角', "<50亿元", 18, 0],
                 ['长三角', "<50亿元", 54, 3],
               
                ['京津冀', "50-100亿元", 8, 1],
                ['长三角', "50-100亿元", 27, 2],
                ['珠三角', "50-100亿元",13, 0],
                ['其他地区', "50-100亿元", 22, 2],
              
                ['京津冀', "100-300亿元", 10, 1],
                ['长三角', "100-300亿元", 36, 2],
                ['珠三角', "100-300亿元", 10, 0],
                ['其他地区', "100-300亿元", 14, 2],
               
                ['京津冀', "300-1000亿元", 6, 1],
                ['长三角', "300-1000亿元", 18, 2],
                ['珠三角', "300-1000亿元", 3, 0],
                ['其他地区', "300-1000亿元", 4, 2],
             
                ['京津冀', ">1000亿元", 2, 1],
                ['长三角', ">1000亿元", 2, 2],
                ['珠三角', ">1000亿元", 1, 0],
                ['其他地区', ">1000亿元", 1, 2],
                               
                ]
        },
        grid:{top:'10%',bottom:'40%'},//最终设置div高度
        series: [
            {
                type: 'scatter',
                encode: {
                    y: 'Country',
                    x: 'Income'
                },
                symbolSize: function (val) {
                    return val[2];
                },
                itemStyle:{
                    normal:{
                        color:'#2C92D5',
                    }
                }
            }
        ]
    };
    
    
    // 或者
// option = {
//     legend: {},
//     tooltip: {},
//     xAxis: [{type: 'category',splitLine:{show:false},axisTick:{show:false}}],
//     yAxis: [{type: 'value',max:2,splitLine:{show:false},axisLabel:{show:false},axisTick:{show:false}}],
//     dataset: {
//         source: [
//             ["Income"],
//             [0,1,2],[10,1,5],[20,1,3],[30,1,6],[40,1,2],[50,1,7]
//         ]
//     },
//     grid:{top:'50%',bottom:'40%'},
//     series: [{
//         type: 'scatter',
//         symbolSize: function (val) {
//             return val[2] * 5;
//         },
//     }]
// }
