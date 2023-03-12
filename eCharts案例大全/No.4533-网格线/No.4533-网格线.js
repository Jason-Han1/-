var xdata =  [ "11-02","11-03", "11-04", "11-05", "11-06","11-07", "11-08" ];
option = {
    "backgroundColor": "#1e213a",
    "title": {
        "text": "周心率趋势分析",
        "x": "5%",
        "textStyle": {
            "color": "#e8e7e7",
            "fontSize": 11.5
        }
    },
    "xAxis": [{
            "data": xdata,
            "axisLabel": {
                "color": "#e8e7e7",
                "fontSize": 8,
                "height": 30
            }
        },
        {
            type:"value",
            show:true,
            min:0,
            max:100,
            "axisLabel": {
                show:false
            },
            position:"bottom",
             minorTick:{
              show:true   
            },
            minorSplitLine:{    // 细 分割横线
                show:true,
                lineStyle:{
                    color:"#424775"
                }
            }
        }
    ],
    "yAxis": [{
            "min": 40,
            "max": 80,
            "axisLabel": {
                "color": "#e8e7e7",
                "fontSize": 10
            },
            splitLine: {    //Y轴 分割横线
                show: true,
                lineStyle:{
                    color:"red"
                }
            },
            axisLine: {     //Y轴 轴线
                // show: false,
                lineStyle:{
                    color:"yellow"
                }
            },
            axisTick: { 
                // show: false,
                lineStyle:{
                    color:"#ffffff"
                }
            },
            minorTick:{
              show:true   
            },
            minorSplitLine:{    // 细 分割横线
                show:true,
                lineStyle:{
                    color:"#424775"
                }
            }
            
        },{
            min:40,
            max:100,
            splitNumber:10,
            splitLine:{
                show:false
            },
            minorSplitLine:{    // 细 分割横线
                show:true,
                lineStyle:{
                    color:"#424775"
                }
            }
        }
    ],
    "series": [{
            "name": "心率均值",
            "type": "line",
            "data": [
                62,
                63,
                61,
                62,
                61,
                63,
                61
            ],
            "connectNulls": true,
            "symbolSize": 0,
            "itemStyle": {
                "color": "rgb(108 179 226 / 50%)"
            }
        }
    ]
}