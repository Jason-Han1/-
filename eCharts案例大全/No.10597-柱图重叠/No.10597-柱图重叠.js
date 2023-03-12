var colors = ['#66CDAA',  '#B8860B','#FF9080'];

var xData = ['大米','纯净水','手电筒','防水毯','救生衣','抗生素','消毒液','对讲机'];
option = {
     backgroundColor: "#0e2147",
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
        data:['消耗','总量'],
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
                color: '#fff'
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
                fontSize:12,
                color: '#ffffff'
            }
        },
        "data": xData,
    }],
    yAxis: [
        {
            type: 'value',
            name: '数量',
            splitLine:{
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            // min: 0,
            // max: 400,
            // position: 'left',
            axisLabel: {
                show: false,
                
            }
        },
    ],
    series: [
        {"name": "总量",
            "type": "bar",
             "barGap": "-100%",
             "barMaxWidth": 14,
            "itemStyle": {
                "normal": {
                     "color": "#10C7E8",
                    "barBorderRadius": 4,
                    "label": {
                        "textStyle": {
                            "color": "#fff"
                        },
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
            }
            },
            data:[121,256,119,138,158,173,220,96]
            
        },
        {"name": "消耗",
            "type": "bar",
            "barMaxWidth": 14,
           
            "itemStyle": {
                "normal": {
                   "color": "#F16612",
                    "barBorderRadius": 4,
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
            data:[67,100,43,56,69,74,40,80]
            
        },
        
       ]
};
