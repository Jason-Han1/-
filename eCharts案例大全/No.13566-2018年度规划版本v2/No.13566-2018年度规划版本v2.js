option = {
	"title": {
		"text": "2018年度规划版本v2",
		"x": "center",
		"bottom": "0"
	},
	"color": ["#f6ab32", "#f57e46", "#e35857", "#ac58c2", "#4eb468", "#51c4d0", "#5aabe6", "#6f7fe7"],
	"tooltip": {
		"trigger": "axis",
		"axisPointer": {
			"type": "shadow",
			"shadowStyle": {
				"color": "rgba(0,0,0,0)"
			}
		},
		"textStyle": {
			"color": "#fff"
		}
	},
	"grid": {
		"left": "70px"
	},
	"legend": {
		"data": ["华北分公司"],
		"top": 2,
		"type": "scroll"
	},
	"xAxis": {
		"type": "category",
		"data": ["胶印书刊纸", "精制涂布纸(64g以上)", "数码印刷纸", "高松胶版印刷纸", "轻型胶版纸（＜60克）", "胶印书刊纸（本白全木）", "精品牛皮纸", "伸性纸袋纸", "胶版印刷纸", "胶印书刊纸（68克以下）", "全木浆胶版纸（＜68克）（PB）", "胶版印刷纸（68克以上）", "精品复合原纸", "全木浆轻型胶版纸", "轻型胶版纸", "全木浆胶版纸（≥68克）（PB ）", "全木浆纯质纸(米黄、象牙白）", "高松微涂纸", "涂布纯质纸", "静电复印纸(PA)", "轻型胶版纸（≥60克）", "高白胶版印刷纸（65克以上）", "簿本纸", "精制涂布纸(58-62g)", "复合胶版纸", "期刊杂志纸", "离型原纸", "精制轻量涂布纸", "高白胶版印刷纸", "高强本色胶带纸", "铜版原纸"],
		"axisTick": {
			"show": false
		},
		"axisLine": {
			"show": true,
			"lineStyle": {
				"color": "#439cdc",
				"width": 2
			}
		},
		"z": 2,
	axisLabel: {
                textStyle: {
                    color: '#333333'
                },
                formatter: function (val) {
                    var Long=val.length; 
                    var data=(Long>5)?(val.substring(0,4)+'..'):(val);
                    console.log(data)
                    return  data;
                },

                margin:5,
                interval:0
        }
	},
	
	"yAxis": [{
		"type": "value",
		"axisLabel": {
			"textStyle": {
				"color": "#333333"
			}
		},
		"splitLine": {
			"show": false
		},
		"axisLine": {
			"show": true,
			"lineStyle": {
				"color": "#439cdc",
				"width": 2
			}
		},
		"axisTick": {
			"show": false
		}
	}],
	dataZoom:[{
	     "show": true,
                        "height": 30,
                      
                        bottom:20,
                        // minSpan :10,
                        zoomLock  :false,
                        // minValueSpan:0,
                        endValue:3,
                        minValueSpan:1,
                        maxValueSpan:9,
                        // "end": 20
	}],
	"series": [{
		"name": "华北分公司",
		"type": "bar",
		"label": {
			"normal": {
				"show": true
			}
		},
		"stack": "2018年度规划版本v2",
		"barMaxWidth": 35,
		"data": [8003, 4915, 0, 112, 0, 287, 16361, 1806, 5599, 23463, 3475, 2874, 658, 0, 0, 3174, 7014, 0, 2895, 1801, 0, 1273, 754, 167, 0, 1338, 1635, 213, 775, 938, 0, 754, 167, 0, 1338, 1635, 213, 775, 938, 0, 754, 167, 0, 1338, 1635, 213, 775, 938, 0, 754, 167, 0, 1338, 1635, 213, 775, 938, 0, 754, 167, 0, 1338, 1635, 213, 775, 938, 0]
	}]
}