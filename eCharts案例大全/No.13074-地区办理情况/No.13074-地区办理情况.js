var colors = ['#66CDAA',  '#B8860B','#FF9080'];

var xData = function() {
    var data = [];
    for (var i = 1; i < 13; i++) {
        data.push("地区"+i);
    }
    return data;
}();
option = {
     backgroundColor: "#113A71",
    title: {
        text: '地区办理情况',
          left:'45%',
           top:'10%',
        textStyle:{
             fontSize: '15' ,
             color: "#fff"
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
        top:'20%',
        bottom:'45%',
        left:'20%',
        right:'20%',
    },   
    legend: {
        data:['受理数','办结数','办理率'],
        align: 'right',
         top:'14%',
         right:'20%',
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
        "axisLabel": {
            "interval": 0,
            textStyle:{
                fontSize:10,
                color: '#ffffff'
            }
        },
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
        {"name": "受理数",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 15,
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
            data:[421,356,719,658,458,443,620,416,551,721,466,632]
            
        },
        {"name": "办结数",
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
            data:[121,256,119,258,358,343,220,216,151,221,266,532]
            
        },
        {
        name:'办理率',
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
        data:[11,4,7,8,6,2,10,8,10,5,5,4]
    }]
};
