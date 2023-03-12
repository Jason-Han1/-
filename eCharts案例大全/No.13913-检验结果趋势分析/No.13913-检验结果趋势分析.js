var colors = ['#2978aa',  '#3470a3'];

var xData = function() {
    var data = [];
    for (var i = 1; i < 13; i++) {
        data.push(i+'月');
    }
    return data;
}();
option = {
    backgroundColor:'#FFFFFF',
    title: {
        text: '检验结果趋势分析',
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
        left:'10%',
       right:'40%',
        bottom:'65%'
    }, 
    legend: {
        data:['不合格问题批次数','产品控制批次数','完成整改批次数','行政处罚批次数'],
        align: 'left',
        left: 30,
        top:40
    },
     "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#000'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
            textStyle:{
                fontSize:15
            }
        },
        "data": xData,
    }],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 1500,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        },
        
    ],
    series: [
        {name:'不合格问题批次数',
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
            barWidth:'40%',
            data:[1227,756,998,847,1117,993,1317,993,1220,845,1055,941]},
        {
        name:'产品控制批次数',
         color:'#4594dd' ,
            type:'line',
            itemStyle : {
                normal : {
                    /*lineStyle:{
                        width:3,//折线宽度
                    },
                   */
                }
            },
        data:[234,123,412,321,134,211,321,134,211,321,134,211]
    },{
        name:'完成整改批次数',
         color: '#43c32e',
            type:'line',
            itemStyle : {
                normal : {
                    /*lineStyle:{
                        width:3,//折线宽度
                    },*/
                   
                }
            },
        data:[652,321,121,212,412,321,134,211,314,331,234,311]
    },{
        name:'行政处罚批次数',
         color: '#2ec3c1',
            type:'line',
            itemStyle : {
                normal : {
                    /*lineStyle:{
                        width:3,//折线宽度
                    },*/
                   
                }
            },
        data:[167,211,132,345,311,321,321,321,321,412,321,134]
    }]
};
