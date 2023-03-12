var colors = ['#66CDAA',  '#B8860B','#FF9080'];

var xData = function() {
    var data = [];
    for (var i = 1; i < 8; i++) {
        if(i==1){
             data.push("基础设施");
        }else if(i==2){
            data.push("食品药品监管");
        }else{
             data.push("事件类型"+i);
        }
       
    }
    return data;
}();
option         = {
backgroundColor: "#020306",
/*title        : {
text           : '地区办理情况',
left           :'45%',
top            :'10%',
textStyle      :{
fontSize       : '15' ,
color          : "#fff"
        }
    },*/
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
        top:'17%',
        bottom:'40%',
        left:'20%',
        right:'20%',
    },   
    legend: {
        data:['在办','办结','办结率'],
         top:'10%',
         right:'40%',
        textStyle:{
            color:'#FFFFFF'
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
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        axisLabel: {
            formatter: '{value}',
             rotate:25,
            textStyle: {
                fontSize: 12,
                color: '#fff'
            }
        },
       /* "axisLabel": {
            "interval": 0,
            textStyle:{
                fontSize:10,
                color: '#ffffff'
            }
        },*/
        "data": xData,
    }],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 2000,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: '#ffffff'
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '',
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: '#ffffff'
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {"name": "在办",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 25,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                   "color": "#06a7ef",
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "#fff"
                        },
                        "position": "insideTop",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            data:[421,356,719,658,458,443,620]
            
        },
        {"name": "办结",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                     "color": "#d872f3",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                
                /*normal:{
                color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00b0ff'
                }, {
                    offset: 0.8,
                    color: '#7052f4'
                }], false)}*/
            }
            },
            data:[121,256,119,258,358,343,220]
            
        },
        {
        name:'办结率',
        yAxisIndex: 1,
        symbolSize:10,
        symbol:'circle',
        type:'line',
        "itemStyle": {
            "normal": {
                "color": "rgba(252,230,48,1)",
                "barBorderRadius": 0,
                "label": {
                    "show": true,
                    "position": "top",
                    formatter: function(p) {
                        return p.value > 0 ? (p.value) : '';
                    }
                }
            }
        },
        data:[80,74,77,89,96,92,90]
    }]
};
