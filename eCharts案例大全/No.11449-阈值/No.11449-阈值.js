let xAxisValue = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
var dataValue = [12.0, 14.9, 15.0, 13.2, 15.6, 16.7, 15.6, 16.2, 15.6, 14.0, 16.4, 13.3];
var dataValueMax = Math.max.apply(null, dataValue);
var dataValueMin = Math.min.apply(null, dataValue);
option = {
    title : {
        left:'center',
        text: '电压',
        subtext: '最大值='+dataValueMax+'V;最小值='+dataValueMin+'V;平均值='+dataValue[0]
    },
    tooltip : {
        trigger: 'axis'
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : xAxisValue
        }
    ],
    yAxis : [
        {
            name:'V1',
            type : 'value'
        }
    ],
    series : 
        {
            name:'V',
            type:'bar',
            data:dataValue,
            markLine : {
                data : [
                    {name:'max',lineStyle:{color:'#fb4aac'}, yAxis: 17.5},
                    {name:'min',lineStyle:{color:'#f0fb4a'}, yAxis: 3.2},
                    {name:'average',lineStyle:{color:'#496bcc'}, yAxis: 14.2},
                ]
            },
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        position:'top',
                        color:'#000'
                    },
                    
                    color:function(params){
                        if(params.value==dataValueMax){
                            return '#fb4aac'
                        }else if(params.value == dataValueMin){
                            return '#f0fb4a'
                        }else{
                            return '#496bcc'
                        }
                    }
                }
            }
        }
};