option = {
    tooltip: {"trigger": "item"},//此处设置为item
    "grid": {
        "left": "0%",
        "right": "0%",
        "bottom": "3%",
        "top": "3%",
        
    },
    "xAxis": {
        "type": "value",
        "show": false,
        "max": 9480000
    },
    "yAxis": {
        "type": "category",
        "data": ["周一"],
        "show": false
    },
    "series": [{
        "type": "bar",
        "stack": "总量",
        "data": [{
            "value": 900000,
            "itemStyle": {
                normal: {
                    "color": "#26ccd8"
                },
                emphasis: {
                    "color": "#26ccd8"
                }
            },tooltip:{
                show: false
            }
        }],
        "barWidth": 40
    }, {
        "type": "bar",
        "stack": "总量",
        "tooltip":{trigger: "item"},    
        "data": [{
            "value": 8580000,
            "itemStyle": {
                normal: {
                    "color": "blue",
                },
                emphasis: {
                    "color": "blue"
                }
            },tooltip:{
                show: true,
                formatter: 'abc<br>sdfd<h2>test</h2>'
            },
        }],
        "barWidth": 40
    }]
}