var json = {
    "series": [{

        "type": "tree",
        "data": [{
            "name": "中国",
            "children": [{
                "name": "黑龙江",
                "children": [{
                    "name": "哈尔滨",
                    "value": 1200
                }, {
                    "name": "大庆",
                    "value": 1500
                }]
            }, {
                "name": "广东",
                "children": [{
                    "name": "广州",
                    "children": [{
                        "name": "越秀区",
                        "value": 450,
                        "children": [{
                        "name": "越秀区",
                        "value": 450
                    }, {
                        "name": "白云区",
                        "value": 640,
                        "children": [{
                        "name": "越秀区",
                        "value": 450
                    }, {
                        "name": "白云区",
                        "value": 640
                    }]
                    }]
                    }, {
                        "name": "白云区",
                        "value": 640
                    }]
                }, {
                    "name": "深圳",
                    "value": 3600
                }, {
                    "name": "珠海",
                    "value": 2700
                }]
            }, {
                "name": "台湾",
                "children": [{
                    "name": "台北",
                    "value": 800
                }, {
                    "name": "高雄",
                    "value": 600
                }]
            }, {
                "name": "新疆",
                "children": [{
                    "name": "乌鲁木齐",
                    "value": 300
                }]
            }]
        }],
        "top": "20%",
        "left": "7%",
        "bottom": "20%",
        "right": "20%",
        "symbolSize": [50, 50],

        itemStyle:{
            color:"white"
        },

        "expandAndCollapse": true,
        "animationDuration": 550,
        "animationDurationUpdate": 750,
        "orient": "horizontal",
        "symbol": "roundRect"
        
        
        
    }]
};

myChart.setOption(json);

myChart.getZr().on("click",function(e){
    // alert("你点击了："+e.target.style.text);
})