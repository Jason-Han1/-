var option = {
    tooltip : {
        trigger: 'axis',
        formatter: function(params) {
            var s=params[0]['axisValue']+ '<br/>'+'<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:'+params[0]["color"]+'"></span>'+params[0]['seriesName']+": "+params[0]['value']+"%"+'<br/>'+'<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:'+params[1]["color"]+'"></span>'+params[1]['seriesName']+": "+params[1]['value']+"%";
            return s
        }
            
    },
    color: ['#5b9bd6','#ed7d31'],
    xAxis : [{   
        axisLine: {lineStyle: {color: '#c0c7cf'}},
        offset:0,axisLabel: {show: true,color:'#000',},
        type : 'category',axisTick: {show: false},
        data : ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]
    }],
    yAxis : [{
        type : 'value',axisLine: {lineStyle: {color: '#c0c7cf'}},
        axisLabel: {formatter: '{value}%',color: '#000',fontSize:16},
        axisTick: {show: false},splitLine:{show:false},min: 0,max: 100
    }],
    series : [{
        name:'满意度',type:'line',
        data: [30,20,30,40,50,60,70,80,90,80,70,60]
    },{
        name:'满意度2',type:'line',
        data: [40,50,60,70,80,90,100,50,40,30,20,66]
    }]
};

/*
var option = {
    tooltip : {
        trigger: 'axis',
        formatter: function(params) {return params[0].marker+params[0].axisValue+"&nbsp;&nbsp;满意度"+params[0].value+"%";}
    },
    color: ['#ff4800','green'],
    xAxis : [{   
        axisLine: {lineStyle: {color: '#c0c7cf'}},
        offset:0,axisLabel: {show: true,color:'#000',},
        type : 'category',axisTick: {show: false},
        data : ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]
    }],
    yAxis : [{
        type : 'value',axisLine: {lineStyle: {color: '#c0c7cf'}},
        axisLabel: {formatter: '{value}%',color: '#000',fontSize:16},
        axisTick: {show: false},splitLine:{show:false},min: 0,max: 100
    }],
    series : [{
        name:'满意度',type:'line',
        data: [30,20,30,40,50,60,70,80,90,80,70,60]
    },{
        name:'满意度2',type:'line',
        data: [40,50,60,70,80,90,100,50,40,30,20,66]
    }]
};
*/