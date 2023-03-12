let yData = [75.35,97.63,73.12,45.69,-999];
let y2Data=['一流大学均值','全省均值','同层次院校均值','全国均值','本校值']
let y3Data=[69.63,56.99,80.20,79.49,-999]
let res = [75.39,69.63] //本校值
let getvalue1 = [];
let color = [
    {
        type:'linear',
        colorStops:[
            {
                offset:0,
                color:'#008AFF'
            },
            {
                offset:1,
                color:'#21F7FF'
            }
        ]
    },
    {
        type:'linear',
        colorStops:[
            {
                offset:0,
                color:'#FB6A66'
            },
            {
                offset:1,
                color:'#FF977B'
            }
        ]
    }
]
option = {
    backgroundColor:'black',
    grid: [
        {
            left: '5%',
            width: '12%',
            top: '10%',
            bottom: '0%',
            containLabel: true,
        },
        {
            left: '20%',
            width: '12%',
            top: '10%',
            bottom: '0%',
            containLabel: true,
        },
        {
            left: '35%',
            width: '12%',
            top: '10%',
            bottom: '0%',
            containLabel: true,
        },
        {
            left: '40%',
            width: '12%',
            top: '10%',
            bottom: '0%',
            containLabel: true,
        },
        {
            left: '57%',
            width: '12%',
            top: '10%',
            bottom: '0%',
            containLabel: true,
        },
        {
            left: '67%',
            width: '12%',
            top: '10%',
            bottom: '0%',
            containLabel: true,
        },
         {
            left: '82%',
            width: '12%',
            top: '10%',
            bottom: '0%',
            containLabel: true,
        },
    ],
    xAxis: [
        
        {
            gridIndex: 0,
            axisLabel:{
                show:false
            },
            splitLine:{
                show:false
            },
            inverse:true,
            max:400,
        },
        {
            gridIndex: 1,
            axisLabel:{
                show:false
            },
            splitLine:{
                show:false
            },
            max:400,
        },
        {
            gridIndex:2,
            axisLabel:{
                show:false
            },
            splitLine:{
                show:false
            }
        },
         {
            gridIndex:3,
            axisLabel:{
                show:false
            },
            splitLine:{
                show:false
            }
        },
        {
            gridIndex:4,
            axisLabel:{
                show:false
            },
            splitLine:{
                show:false
            }
        },
          {
            gridIndex: 5,
            axisLabel:{
                show:false
            },
            splitLine:{
                show:false
            },
            inverse:true,
            max:400,
        },
        {
            gridIndex: 6,
            axisLabel:{
                show:false
            },
            splitLine:{
                show:false
            },
            max:400,
        },
    ],
    yAxis: [
     
        {
            data: yData,
            gridIndex: 0,
            axisLabel: {
                show: false,
            },
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            }
        },
        {
            data: yData,
            gridIndex: 1,
            axisLabel: {
                show: false,
            },
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            }
        },
           {
            data: yData,
            gridIndex: 2,
            axisLabel:{
                 textStyle:{
                    align:'center'
                },
                formatter:function(params){
                  console.log(params)
                  if(params==-999){
                      return `{a|${res[0]}}`
                  }else{
                    return `{b|${params}}`
                  }
                },
               rich:{
                   a:{
                       color:"#42F1B4",
                       fontSize:14
                   },
                   b:{
                        color:'#3AD3FF',
                        fontSize:14
                   }
               }
            },
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            }
        },
         {
            data: y2Data,
            gridIndex: 3,
            align: 'auto',
            axisLabel:{
                textStyle:{
                    color:'#CAEEFF',
                    fontSize:14,
                    align:'center'
                },
                  formatter:function(params){
                  console.log(params)
                  if(params=='本校值'){
                      return `{a|${params}}`
                  }else{
                    return `{b|${params}}`
                  }
                },
               rich:{
                   a:{
                       color:"#42F1B4",
                       fontSize:14
                   },
                   b:{
                        color:'#CAEEFF',
                        fontSize:14
                   }
               }
            },
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            }
        },
         {
            data: y3Data,
            gridIndex: 4,
            align: 'auto',
            axisLabel:{
                 textStyle:{
                    align:'center'
                },
                formatter:function(params){
                  console.log(params)
                  if(params==-999){
                      return `{a|${res[1]}}`
                  }else{
                    return `{b|${params}}`
                  }
                },
               rich:{
                   a:{
                       color:"#42F1B4",
                       fontSize:14
                   },
                   b:{
                        color:'#3AD3FF',
                        fontSize:14
                   }
               }
            },
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            }
        },
         {
            data: yData,
            gridIndex: 5,
            axisLabel: {
                show: false,
            },
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            }
        },
        {
            data: yData,
            gridIndex: 6,
            axisLabel: {
                show: false,
            },
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            }
        },
    ],
    series: [
      
        {
            name:'优于',
            type: 'bar',
            data: [220, 182, 191, 234],
            xAxisIndex: 0,
            yAxisIndex: 0,
            barWidth:14,
            itemStyle:{
                borderRadius:[7,7,7,7],
                color:color[0],
                opacity:1
            },
        },
        {
            name:'优于',
            type: 'bar',
            data: [400, 400, 400, 400],
            xAxisIndex: 0,
            yAxisIndex: 0,
            barGap:'-100%',
            barWidth:14,
            itemStyle:{
                borderRadius:[7,7,7,7],
                color:color[0],
                opacity:0.2
            },
        },
        {
            name:'差于',
            type: 'bar',
            data: [220, 182, 191, 234],
            xAxisIndex: 1,
            yAxisIndex: 1,
            barWidth:14,
            itemStyle:{
                borderRadius:[7,7,7,7],
                color:color[1],
                opacity:1
            }
        },
        {
            name:'差于',
            type: 'bar',
            data: [400, 400, 400, 400],
            xAxisIndex: 1,
            yAxisIndex: 1,
            barGap:'-100%',
            barWidth:14,
            itemStyle:{
                borderRadius:[7,7,7,7],
                color:color[1],
                opacity:0.2
            }
        },
          {
            name:'优于',
            type: 'bar',
            data: [220, 182, 191, 234],
            xAxisIndex: 5,
            yAxisIndex: 5,
            barWidth:14,
            itemStyle:{
                borderRadius:[7,7,7,7],
                color:color[0],
                opacity:1
            },
        },
        {
            name:'优于',
            type: 'bar',
            data: [400, 400, 400, 400],
            xAxisIndex: 5,
            yAxisIndex: 5,
            barGap:'-100%',
            barWidth:14,
            itemStyle:{
                borderRadius:[7,7,7,7],
                color:color[0],
                opacity:0.2
            },
        },
        {
            name:'差于',
            type: 'bar',
            data: [220, 182, 191, 234],
            xAxisIndex: 6,
            yAxisIndex: 6,
            barWidth:14,
            itemStyle:{
                borderRadius:[7,7,7,7],
                color:color[1],
                opacity:1
            }
        },
        {
            name:'差于',
            type: 'bar',
            data: [400, 400, 400, 400],
            xAxisIndex: 6,
            yAxisIndex: 6,
            barGap:'-100%',
            barWidth:14,
            itemStyle:{
                borderRadius:[7,7,7,7],
                color:color[1],
                opacity:0.2
            }
        },
    ],
};
