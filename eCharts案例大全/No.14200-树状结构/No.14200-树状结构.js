var json = {
    "series": [{

        "type": "tree",
        "data": [{
            "name": "中国",
            "children": [{
                "name": "黑龙江",
				value:"2222222222222222222",
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
                        "value": 450
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
        "itemStyle":{ //设置边框的属性
			normal: {
				color:'#40b2f8',
				borderWidth:0
			}
		},
		label:{ //内容位置等属性
			normal: {
                verticalAlign: 'middle',
                align: 'center',
                fontSize: 9,
				color:'#FFF'
            }
		},
		lineStyle:{  //连线颜色
			normal: {
				color:'#ccc', 
				width:1.5
			}
		},
		emphasis:{
			
		},
		leaves:{
			label:{show:true}
		},
		"top": "20%",
        "left": "7%",
        "bottom": "20%",
        "right": "20%",
        "symbolSize": [80, 30],

        "expandAndCollapse": true,
        "animationDuration": 550,
        "animationDurationUpdate": 750,
        "orient": "vertical",
        "symbol": "rect",
		"initialTreeDepth": 2,
    }]
};



							   
		myChart.setOption(json);
		
		
		myChart.on('click',function(params){
			alert(params.value);
		})