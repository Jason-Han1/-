 option = {
    "backgroundColor":"#fff",
    "tooltip":{
        "trigger":"axis",
        "formatter":"{b}<br />成绩是 : {c}分"
    },
    "grid":{
        "show":true,
        "borderColor":"#fff",
        "borderWidth":4,
        "top":"10%",
        "bottom":"10%",
        "left":"10%",
        "right":"10%"
    },
    "legend": {
        "data":["各科成绩"],
        "right":"10%",
        "top":"5%",
        "textStyle":{
            "color":"#2d5094",
            "fontSize":16,
        }
    },
    "xAxis": {
        "data": ["语文","数学","英语","物理","化学","生物"],       //横坐标
        "axisLine":{
            "show":false
        },
        "axisTick":{
            "show":false
        },
        "axisLabel":{
            "show":true,
            "interval":0,
            "rotate":45,
            "color":"#2d5094",
            "fontFamily":"Microsoft YaHei",
            "fontSize":12
        },
        "splitLine":{
            "show":true,
            "lineStyle":{
                "color":"#fff",
                "width":4
            }
        },
        "splitArea":{
            "show":true,
            "areaStyle":{
                "color":["rgba(190,224,255,0.5)"]
            }
        }
    },
    "yAxis": {
        "max":100,
        "axisLine":{
            "show":false
        },
        "axisTick":{
            "show":true,
            "length":15,
            "lineStyle":{
                "color":"#2d5094"
            }
            
        },
        "axisLabel":{
            "show":true,
            "color":"#2d5094",
            "fontFamily":"Microsoft YaHei",
            "margin":18,
            "fontSize":12
        },
        "splitLine":{
            "show":false
        },
        "splitArea":{
            "show":false
        }
    },
    "series": [{
        "name": '各科成绩',
        "data": [70,89,66,90,80,72],        //数据
        "type": 'bar',
        "barWidth":"96%",
    	itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#1690e3'},
                        {offset: 0.5, color: '#1666c5'},
                        {offset: 1, color: '#2d5094'}
                    ]
                )
            },
            emphasis: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#2d5094'},                  
                        {offset: 0.5, color: '#1666c5'},                
                        {offset: 1, color: '#1690e3'}, 
                    ]
                )
            }
        },
        "label":{
            "show":true,
            "position":"top",
            "formatter":["{f1|{c}}","{f2|分}"].join(' '),
            "rich":{
                "f1":{
                    "color":"#2d5094",
                    "fontSize":16,
                    "fontFamily":"Microsoft YaHei"
                },
                "f2":{
                    "color":"#2d5094",
                    "fontSize":10,
                    "fontFamily":"Microsoft YaHei",
                    "verticalAlign":"bottom"
                }
            }
        }
        
    }]
};