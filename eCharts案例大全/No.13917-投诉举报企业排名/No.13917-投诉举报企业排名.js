var colors = ['#2978aa',  '#3470a3'];

/*var xData = function() {
    var data = [];
    for (var i = 1; i < 13; i++) {
        data.push(i+'月');
    }
    return data;
}();*/
option = {
    backgroundColor:'#FFFFFF',
    title: {
        text: '检查类型违规趋势分析',
        textStyle:{
             fontSize: '15'
        }
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
        grid: {
        top:80,
        left:'5%',
       right:'50%',
        bottom:'65%'
    }, 
    legend: {
        data:['日常检查','专项检查','其他检查'],
        align: 'left',
        left: 30,
        top:40,
         "axisLabel": {
            "interval": 0,
            textStyle:{
                fontSize:8
            }
        }
    },
     "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#000'
            }
        },
        "axisLabel": {
            "interval": 0,
            textStyle:{
                fontSize:8
            }
        },
        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    }],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            "axisLabel": {
                formatter: '{value} ',
                "interval": 0,
                textStyle:{
                    fontSize:6
                }
            }
            
        },
        
    ],
    series: [
       /* {name:'不合格问题批次数',
            type:'bar',
           itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#60c9ed'
                }, {
                    offset: 1,
                    color: '#a7d8e8'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        */
        {
        name:'日常检查',
         color:'#4594dd' ,
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:2,//折线宽度
                    }
                }
            },
        data:[234,230,240,250,269,260,321,321,300,281,271,270]
    },{
        name:'专项检查',
         color: '#43c32e',
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:2,//折线宽度
                    }
                   
                }
            },
        data:[201,210,217,210,220,225,248,250,260,258,248,240]
    },{
        name:'其他检查',
         color: '#2ec3c1',
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:2,//折线宽度
                    }
                   
                }
            },
        data:[140,142,130,135,147,140,150,159,163,152,148,140]
    }]
};
