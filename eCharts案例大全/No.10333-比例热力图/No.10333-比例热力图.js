option = {
    backgroundColor:'#fff',
    grid: {
        left: '2%',
        right: '5%',
        top: '7%',
        bottom: '6%',
        containLabel: true
    },
    "tooltip": {
        "show": false
    },
    "xAxis": {
        "position": "buttom",
        "type": "category",
        "data": ["不了解", "了解20%-40%", "了解40%-60%", "了解60%-80%", "了解80%以上",  "合计"],
        "splitArea": {
            "show": true
        },
        axisLabel: {
            textStyle: {
                fontSize:14,
                color: '#000'
            }
        },
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        }
    },
    "yAxis": {
        "nameLocation": "end",
        "type": "category",
        "data": ["科技制造业", "文化产业", "商务服务", "物流仓储", "制造业"],
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            textStyle:{
                fontSize:15,
            },
            "rich": {
                "red": {
                    "color": "#f00"
                }
            }
        },
        "splitArea": {
            "show": false
        }
    },
    "visualMap": {
        show:false,
        "min": 0,
        "max": 50,
        "calculable": false,
        "orient": "horizontal",
        "right": "60%",
        "top": "0",
        "color": [ '#f9cf67','#e92b77']
    },
    "series": [{
        "name": "优良天数",
        "type": "heatmap",
        data: [
            [0, 0, 53.5],
            [0, 1, 7.7],
            [0, 2, 26.4],
            [0, 3, 34.1],
            [0, 4, 12.4],
            
            [1, 0, 39.9],
            [1, 1, 3.21],
            [1, 2, 43.3],
            [1, 3, 15.4],
            [1, 4, 31.0],
            
            [2, 0, 19.0],
            [2, 1, 12.5],
            [2, 2, 17.9],
            [2, 3, 18.2],
            [2, 4, 22.0],
            
            [3, 0, 31.0],
            [3, 1, 38.5],
            [3, 2, 72.5],
            [3, 3, 11.4],
            [3, 4, 6.9],
            
            [4, 0, 9.5],
            [4, 1, 0.0],
            [4, 2, 1.9],
            [4, 3, 2.3],
            [4, 4, 18.8],
            
            [5, 0, 100],
            [5, 1, 100],
            [5, 2, 100],
            [5, 3, 100],
            [5, 4, 100]
            
            
        ],
        "label": {
            "normal": {
                fontSize:20,
                "show": true,
                formatter: function(data) {
                        return data.value[2].toFixed(1)  + '%';
                    }
            }
        },
        "itemStyle": {
            "normal": {
                "borderColor": "rgba(255, 255, 255, 0.8)"
            },
            "emphasis": {
                "shadowBlur": 10,
                "shadowColor": "rgba(255, 255, 255, 0.5)"
            }
        }
    }]
}