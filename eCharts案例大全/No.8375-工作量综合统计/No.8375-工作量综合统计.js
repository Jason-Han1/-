var option = {
	title : {
		text : '工作量综合统计',
		subtext : '参与医生多少用圆点面积大小区分',
		textStyle: {
			"fontSize": 14,
			"fontWeight": "bolder",
			"color": "#333"
		}
	},
	tooltip : {
		trigger: 'item',
		formatter : function (params) {
			var date = new Date(params.value[0]);
			data = date.getFullYear() + '-'
				   + (date.getMonth() + 1) + '-'
				   + date.getDate() + ' '
				   + date.getHours() + ':'
				   + date.getMinutes();
			return data + '<br/>'
				   + params.value[1] + ', ' 
				   + params.value[2];
		}
	},
	toolbox: {
		show : false,
		feature : {
			mark : {show: true},
			dataView : {show: true, readOnly: false},
			restore : {show: true},
			saveAsImage : {show: true}
		}
	},
	grid : {
		x : '25',
		x2 : '10',
		y2 : '65'
	},
	dataZoom: {
		show: true,
		start : 0,
		end : 100
	},
	legend : {
		show : false,
		data : ['签约患者量']
	},
	xAxis : [
		{
			type : 'time',
			splitNumber:10
		}
	],
	yAxis : [
		{
			type : 'value'
		}
	],
	series : [
		{
			name: '签约患者量',
			type: 'line',
			showAllSymbol: true,
			symbolSize: function (value){
				return Math.round(value[2]/10) + 2;
			},
			data: (function () {
				var d = [];
				var len = 0;
				var now = new Date();
				var value;
				while (len++ < 30) {
					d.push([
						new Date(2016, 3, 25, 0, len*24*24),
						(Math.random()*60).toFixed(2) - 0,
						(Math.random()*100).toFixed(2) - 0
					]);
				}
				return d;
			})()
		}
	]
};
