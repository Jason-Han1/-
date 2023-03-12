var colorArr = ["#f6ab32", "#f57e46", "#e35857", "#ac58c2", "#4eb468", "#51c4d0", "#5aabe6", "#6f7fe7"],
colorArr = ['#1785ef','#2cb7ff','#fe9f2e','#ffc426','#f36119','#7c3ce6','#e63c90'];

var $data = [{
        name:'name1',
        value:'122',
    },{
        name:'name2',
        value:'99'
    },{
        name:'name3',
        value:'22'
    },{
        name:'name4',
        value:'88'
    },{
        name:'name5',
        value:'44'
    },{
        name:'name6',
        value:'33'
    },{
        name:'name7',
        value:'11'
}]
var xAxisData = [];
var seriesData = [];
for(var i=0;i<$data.length;i++){
    xAxisData.push($data[i].name)
    seriesData.push($data[i].value)
}
option = {
    color:colorArr,
    backgroundColor:'#fff',
    legend: {
        data: ['第一测试','第er测试','整体'],
    },
   legend: {
	    top:30,
		"data": ["破裂、爆裂、断裂", "泄漏", "漏水", "堵塞", "火灾", "泄漏爆燃", "塌陷", "爆炸", "坍塌", "中毒", "断水", "污染", "断电", "裸管、悬空、漂浮、脱落", "燃气破裂、爆裂、断裂", "管道裸管、悬空、漂浮、脱落", "断气", "其他"],
		"type": "scroll"
	},
   "series": [{
		"name": "管线类型",
		"type": "pie",
		"radius": "55%",
		"center": ["50%", "60%"],
		"data": [{
			"name": "破裂、爆裂、断裂",
			"value": "203"
		}, {
			"name": "泄漏",
			"value": "50"
		}, {
			"name": "漏水",
			"value": "46"
		}, {
			"name": "堵塞",
			"value": "44"
		}],
		"itemStyle": {
			"normal": {
			    borderColor: 'rgba(255,255,255,1)',
                    borderWidth:2,
				"label": {
					"show": true,
					"formatter": "{b} : {c} ({d}%)"
				},
				"labelLine": {
					"show": true
				}
			},
			"emphasis": {
				"label": {
					"show": true,
					"formatter": "{b}\n{c} ({d}%)",
					"position": "center",
					"textStyle": {
						"fontSize": "15"
					}
				}
			}
		}
	}]
};