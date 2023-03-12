option = {
    backgroundColor: '#fff',
    "grid": {
        "top": "15%",
        "left": "25%",
        "bottom": "10%",
        "right": "10%",
        "containLabel": true
    },
    "xAxis": [{
        "type": "category",
        "data": ["未充分认识“课程思政”的重要性”", "未能充分挖掘本课程所蕴含的思政元素","缺乏有效“课程思政”评价体系","开展“课程思政”教学手段单一","学生自身缺乏理性思考"],
        
       
       
        "axisLabel": {
             rotate:30,
            "textStyle": {
                fontSize:18,
                "color": "#000",
                
            }
        }
        },
        {
            show:false
            
        }
    ],
    "yAxis": [{
        "type": "value",
        "axisLabel": {
            "textStyle": {
                "color": "#000"
            },
            "formatter": "{value}%"
        },
        "splitLine": {
            "lineStyle": {
                "color": "#000000"
            }
        },
        "axisLine": {
            "show": true
        }
    }],
    "series": [{
            "name": "",
            type: 'pictorialBar',
            symbolSize: [20, 10],
            symbolOffset: [0, -6],
            symbolPosition: 'end',
            z: 12,
            //"barWidth": "20",
            "label": {
                "normal": {
                    fontSize:18,
                    "show": true,
                    "position": "top",
                    "formatter": "{c}%"
                }
            },
            "data": [{
                "value": 56.67,
                "itemStyle": {
                    "color":"#9F17FF"// "rgba(149,234,166,1)"
                }
            }, {
                "value": 68.34,
                "itemStyle": {
                    "color": '#388BFF'//"rgba(52,219,207,1)"
                }
            }
            , {
                "value": 70.00,
                "itemStyle": {
                    "color":'#05C3FA'//"rgba(97,214,170,1)"
                }
            }
            , {
                "value": 66.67,
                "itemStyle": {
                    "color":'#FFD52E'//"rgba(150,200,150,1)"
                }
            }
            , {
                "value": 61.67,
                "itemStyle": {
                    "color":'#F6931C'
                }
            }
            ]
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [20, 10],
            symbolOffset: [0, 6],
            z: 12,
            
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [60, 30],
            symbolOffset: [0, 20],
            z: 10,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#14b1eb',
                    borderType: 'dashed',
                    borderWidth: 5
                }
            },
           
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    
                    opacity: 1
                }
            },
            
            "barWidth": "20",
           
            "data": [{
                "value": 56.67,
                "itemStyle": {
                    "color":"#9F17FF"// "rgba(149,234,166,1)"
                }
            }, {
                "value": 68.34,
                "itemStyle": {
                    "color": '#388BFF'//"rgba(52,219,207,1)"
                }
            }
            , {
                "value": 70,
                "itemStyle": {
                    "color":'#05C3FA'//"rgba(97,214,170,1)"
                }
            }
            , {
                "value": 66.67,
                "itemStyle": {
                    "color":'#FFD52E'//"rgba(150,200,150,1)"
                }
            }
            , {
                "value": 61.67,
                "itemStyle": {
                    "color":'#F6931C'
                }
            }],
 

        }


    ]
}
