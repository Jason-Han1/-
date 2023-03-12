var pieColors = ['#ffcc8b','#f5f5f5']
option = {
    backgroundColor:'#fff',
    title:[
        {
            text:'实验室个数（个）',
            top:'80%',
            left:'10%',
            textStyle:{
                fontSize:'14px',
            }
        },
        {
            text:'实验室占比（%）',
            top:'30%',
            left:'10%',
            textStyle:{
                fontSize:'14px',
            }
        }
        ],
    xAxis: [{
        name:'上报率',
        nameTextStyle:{
            color:'#333'
        },
        type: 'category',
        data: ['0～60', '60～80', '80～100', '>=100'],
        axisLine:{
            lineStyle:{
                color:'#23c6c8',
                width:2
            }
        },
        axisTick:{
            show:false
        },
        axisLabel:{
            color:'#333'
        }
    }],
    yAxis: [{
        type: 'value',
        show:false
        
    }],
    grid:{
      top:'50%',
      left:'20%'
    },
    series: [{
        xAxisIndex:0,
        yAxisIndex:0,
        data: [120, 200, 150, 80],
        type: 'bar',
        itemStyle:{
            color:'#add5ff'
        },
        barWidth:40,
        label:{
            show:true,
            position:'top',
            color:'#333'
        }
    },{
        data: [
            {   
                value:7.14,
                remainVal:92.86
            },{
                value:92.86,
                remainVal:7.14
            }],
        silent:true,
        type: 'pie',
        radius:'50px',
        center:['30%','30%'],
        itemStyle:{
            normal:{
                color:function(params){
                    return pieColors[params.dataIndex]
                }
            }
            
        },
        label:{
            show:true,
            position:'inside',
            color:'#1e1e1e',
            formatter:function(params){
                if(params.dataIndex == 1){
                    console.log(params)
                    return params.data.remainVal;
                }
            }
        },
        
        labelLine:{
            show:true
        }
    },{
        data: [
            {   
                value:7.14,
                remainVal:92.86
            },{
                value:92.86,
                remainVal:7.14
            }],
        startAngle:102.852,
        silent:true,
        type: 'pie',
        radius:'50px',
        center:['45%','30%'],
        itemStyle:{
            normal:{
                color:function(params){
                    return pieColors[params.dataIndex]
                }
            }
            
        },
        label:{
            show:true,
            position:'inside',
            color:'#1e1e1e',
            formatter:function(params){
                if(params.dataIndex == 1){
                    console.log(params)
                    return params.data.remainVal;
                }
            }
        },
        labelLine:{
            show:false
        }
    },{
        data: [
            {   
                value:72.14,
                remainVal:27.86
            },{
                value:27.86,
                remainVal:7.14
            }],
        startAngle:219.852,
        silent:true,
        type: 'pie',
        radius:'50px',
        center:['65%','30%'],
        itemStyle:{
            normal:{
                color:function(params){
                    return pieColors[params.dataIndex]
                }
            }
            
        },
        label:{
            show:true,
            position:'inside',
            color:'#1e1e1e',
            formatter:function(params){
                if(params.dataIndex == 1){
                    console.log(params)
                    return params.data.remainVal;
                }
            }
        },
        labelLine:{
            show:false
        }
    },{
    data: [
        {   
            value:7.14,
            remainVal:92.86
        },{
            value:92.86,
            remainVal:7.14
        }],
    silent:true,
        type: 'pie',
        radius:'50px',
        center:['80%','30%'],
        itemStyle:{
            normal:{
                color:function(params){
                    return pieColors[params.dataIndex]
                }
            }
            
        },
        label:{
            show:true,
            position:'inside',
            color:'#1e1e1e',
            formatter:function(params){
                if(params.dataIndex == 1){
                    console.log(params)
                    return params.data.remainVal;
                }
            }
        },
        labelLine:{
            show:false
        }
    }]
};
