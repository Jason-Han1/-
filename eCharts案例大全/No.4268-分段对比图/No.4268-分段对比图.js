option = {
	"tooltip": {
		"trigger": "axis",
		"axisPointer": {
			"type": "shadow"
		}
	},
	"grid": [{
		"left": "5%",
		"right": "5%",
		"top": "5%",
		"bottom": "50%",
		"containLabel": true
	},
	{
		"gridindex": 1,
		"left": "50%",
		"right": "5%",
		"top": "65%",
		"bottom": "5%",
		"containLabel": true
	}],
	"xAxis": [{
		"type": "category",
		"data": ["100以内",
		"101-200",
		"201-500",
		"501-1000",
		"1001-2000",
		"2001-5000",
		"5001-10000",
		"10000以上"]
	},
	{
		"gridIndex": 1,
		"type": "value",
		"show": false
	}],
	"yAxis": [{
		"type": "value"
	},
	{
		"gridIndex": 1,
		"type": "category",
		"data": ["进度/百分比"],
		"show": false
	}],
	"legend": {
		"data": ["0-5%",
		"5-10%",
		"10-25%",
		"25-50%",
		"50-75%",
		"75-100%"],
		"y": "60%",
		"x": "55%"
	},
	"series": [{
		"name": "非负整数",
		"type": "pie",
		"radius": "30%",
		"tooltip": {
			"trigger": "item",
			"formatter": "{a} <br/>{b} : {c} ({d}%)"
		},
		"center": ["25%",
		"80%"],
		"data": [{
			"value": 335,
			"name": "100以内"
		},
		{
			"value": 310,
			"name": "101-200"
		},
		{
			"value": 234,
			"name": "201-500"
		},
		{
			"value": 135,
			"name": "501-1000"
		},
		{
			"value": 1548,
			"name": "1001-2000"
		}]
	},
	{
		"type": "bar",
		"data": [820,
		932,
		901,
		934,
		1290,
		1330,
		1320,
		1235],
		"itemStyle": {
			"color": "rgba(18, 192, 213, 1)"
		}
	},
	{
		"xAxisIndex": 1,
		"yAxisIndex": 1,
		"name": "0-5%",
		"type": "bar",
		"stack": "总量",
		"data": [15],
		"barWidth": 50
	},
	{
		"xAxisIndex": 1,
		"yAxisIndex": 1,
		"name": "5-10%",
		"type": "bar",
		"stack": "总量",
		"data": [20]
	},
	{
		"xAxisIndex": 1,
		"yAxisIndex": 1,
		"name": "10-25%",
		"type": "bar",
		"stack": "总量",
		"data": [36]
	},
	{
		"xAxisIndex": 1,
		"yAxisIndex": 1,
		"name": "25-50%",
		"type": "bar",
		"stack": "总量",
		"data": [28]
	},
	{
		"xAxisIndex": 1,
		"yAxisIndex": 1,
		"name": "50-75%",
		"type": "bar",
		"stack": "总量",
		"data": [30]
	},
	{
		"xAxisIndex": 1,
		"yAxisIndex": 1,
		"name": "75-100%",
		"type": "bar",
		"stack": "总量",
		"data": [60]
	}]
};