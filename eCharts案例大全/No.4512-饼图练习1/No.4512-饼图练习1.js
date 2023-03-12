option = {
    tooltip:{
        trigger:'item',
        formatter:function(params){
            // console.log(params)
            var result = params.seriesName + '<br/>' + params.marker +params.name + ' : ' + params.value
            if(params.seriesName=='网元统计'){
                result += ' %'
            }
            return result
        },
    },
    series: [
        {
            name:'网元情况',
            type:'pie',
            radius:[0,'35%'],
            label:{
                position:'inner',
                color:'black',
                fontSize:14
            },
            data:[
                {value:12,name:'告警',itemStyle:{color:'rgb(255,218,186)'}},
                {value:50,name:'正常',itemStyle:{color:'rgb(242,242,242)'}},
                {value:38,name:'劣化',itemStyle:{color:'rgb(255,254,170)'}},
            ]
        },
        {
            name:'网元统计',
            type:'pie',
            radius:['48%','55%'],
            label:{
                show:false
            },
            data:[
                {value:58,name:'MME',itemStyle:{color:'rgb(67,156,248)'}},
                {value:6,name:'SMF',itemStyle:{color:'rgb(58,204,227)'}},
                {value:6,name:'UDM',itemStyle:{color:'rgb(124,199,82)'}},
                {value:11,name:'SGW',itemStyle:{color:'rgb(250,209,85)'}},
                {value:10,name:'PGW',itemStyle:{color:'rgb(255,133,0)'}},
                {value:6,name:'AMF',itemStyle:{color:'rgb(248,91,132)'}},
                {value:6,name:'NSSF',itemStyle:{color:'rgb(153,93,242)'}},
                {value:5,name:'UPF',itemStyle:{color:'rgb(87,110,245)'}},
            ]
        },
    ]
};