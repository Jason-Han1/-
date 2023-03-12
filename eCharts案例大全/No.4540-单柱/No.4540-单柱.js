option = {
    xAxis: {
        type: 'value',
        min:0,
        max:100,
        maxInterval:1,
        axisLine:{
           lineStyle:{
               color:'#65a6e3',
               width:10
           } 
        },
        splitLine:{
            show:false
        },
        axisLabel:{
            color:'#606060',
            margin:19,
            formatter:function(params){
                if(params == 5){
                    return 'P5'
                }
                if( params == 50 ){
                    return '中位数'
                }
                if( params == 95){
                    return 'P95'
                }
            }
        }
    },
    yAxis: {
        type: 'value',
        show:false
    },
    series: [{
        type:'line',
        data:[],
        clip:false,
        markPoint:{
            type:'min',
            symbol:'triangle',
            symbolSize:10,
            symbolOffset:[0,10],
            itemStyle:{
                color:'#65a6e3'
            },
            data:[
                {
                    coord:[5,0]
                }
            ]
        }
    },{
        type:'line',
        data:[],
        clip:false,
        markPoint:{
            type:'min',
            symbol:'triangle',
            symbolSize:10,
            symbolOffset:[0,10],
            itemStyle:{
                color:'#65a6e3'
            },
            data:[
                {
                    coord:[50,0]
                }
            ]
        }
    },{
        type:'line',
        data:[],
        clip:false,
        markPoint:{
            type:'min',
            symbol:'triangle',
            symbolSize:10,
            symbolOffset:[0,10],
            itemStyle:{
                color:'#65a6e3'
            },
            data:[
                {
                    coord:[95,0]
                }
            ]
        }
    },{
        type:'bar',
        data:[0,10],
        barWidth:2,
        itemStyle:{
            color:'#373737'
        },
        markPoint:{
         symbol:'rect',
         symbolOffset:[0,-13],
         symbolSize:20,
         itemStyle:{
                color:'#ffa47f'
            },
         data:[
                {
                    coord:[10,0],
                    value:38
                }
             ]
        }
    }]
};
