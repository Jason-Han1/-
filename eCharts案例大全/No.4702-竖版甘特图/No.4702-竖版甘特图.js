var colors = ["#668ed6", "#23c2db", "#9cdc82", "#3a76af", "#d15b7f"]; //颜色
var xData = ["2020-12-01","2020-12-02","2020-12-03","2020-12-04","2020-12-05","2020-12-06","2020-12-07","2020-12-08"]
var seriesData = [
	{
		"itemStyle":{
			"normal":{
				"color":"#668ed6"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-01",
			"value":[0,"2020-12-01 07:45","2020-12-02 06:11","2020-12-01 07:45","2020-12-02 06:11","任务0"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#23c2db"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-02",
			"value":[1,"2020-12-01 06:11","2020-12-01 06:41","2020-12-02 06:11","2020-12-02 06:41","任务1"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#9cdc82"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-02",
			"value":[1,"2020-12-01 06:41","2020-12-01 07:45","2020-12-02 06:41","2020-12-02 07:45","任务2"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#3a76af"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-02",
			"value":[1,"2020-12-01 07:45","2020-12-01 11:32","2020-12-02 07:45","2020-12-02 11:32","任务3"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#d15b7f"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-02",
			"value":[1,"2020-12-01 11:32","2020-12-01 11:57","2020-12-02 11:32","2020-12-02 11:57","任务4"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#668ed6"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-02",
			"value":[1,"2020-12-01 11:57","2020-12-02 01:30","2020-12-02 11:57","2020-12-03 01:30","任务0"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#23c2db"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-03",
			"value":[2,"2020-12-01 01:30","2020-12-01 01:53","2020-12-03 01:30","2020-12-03 01:53","任务1"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#9cdc82"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-03",
			"value":[2,"2020-12-01 01:53","2020-12-01 07:44","2020-12-03 01:53","2020-12-03 07:44","任务2"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#3a76af"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-03",
			"value":[2,"2020-12-01 07:45","2020-12-01 08:25","2020-12-03 07:45","2020-12-03 08:25","任务3"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#d15b7f"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-03",
			"value":[2,"2020-12-01 08:25","2020-12-02 03:50","2020-12-03 08:25","2020-12-04 03:50","任务4"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#668ed6"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-04",
			"value":[3,"2020-12-01 03:50","2020-12-01 04:20","2020-12-04 03:50","2020-12-04 04:20","任务0"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#23c2db"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-04",
			"value":[3,"2020-12-01 04:20","2020-12-01 07:45","2020-12-04 04:20","2020-12-04 07:45","任务1"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#9cdc82"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-04",
			"value":[3,"2020-12-01 07:45","2020-12-01 12:29","2020-12-04 07:45","2020-12-04 12:29","任务2"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#3a76af"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-04",
			"value":[3,"2020-12-01 12:29","2020-12-01 12:54","2020-12-04 12:29","2020-12-04 12:54","任务3"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#d15b7f"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-04",
			"value":[3,"2020-12-01 12:54","2020-12-01 20:21","2020-12-04 12:54","2020-12-04 20:21","任务4"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#668ed6"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-04",
			"value":[3,"2020-12-01 20:21","2020-12-01 20:44","2020-12-04 20:21","2020-12-04 20:44","任务0"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#23c2db"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-04",
			"value":[3,"2020-12-01 20:44","2020-12-02 04:44","2020-12-04 20:44","2020-12-05 04:44","任务1"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#9cdc82"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-05",
			"value":[4,"2020-12-01 04:44","2020-12-01 05:19","2020-12-05 04:44","2020-12-05 05:19","任务2"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#3a76af"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-05",
			"value":[4,"2020-12-01 05:19","2020-12-01 07:44","2020-12-05 05:19","2020-12-05 07:44","任务3"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#d15b7f"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-05",
			"value":[4,"2020-12-01 07:45","2020-12-02 01:18","2020-12-05 07:45","2020-12-06 01:18","任务4"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#668ed6"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-06",
			"value":[5,"2020-12-01 01:18","2020-12-01 01:38","2020-12-06 01:18","2020-12-06 01:38","任务0"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#23c2db"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-06",
			"value":[5,"2020-12-01 01:38","2020-12-01 07:44","2020-12-06 01:38","2020-12-06 07:44","任务1"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#9cdc82"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-06",
			"value":[5,"2020-12-01 07:45","2020-12-01 12:10","2020-12-06 07:45","2020-12-06 12:10","任务2"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#3a76af"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-06",
			"value":[5,"2020-12-01 12:10","2020-12-01 12:30","2020-12-06 12:10","2020-12-06 12:30","任务3"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#d15b7f"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-06",
			"value":[5,"2020-12-01 12:30","2020-12-01 15:12","2020-12-06 12:30","2020-12-06 15:12","任务4"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#668ed6"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-06",
			"value":[5,"2020-12-01 15:12","2020-12-01 15:37","2020-12-06 15:12","2020-12-06 15:37","任务0"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#23c2db"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-06",
			"value":[5,"2020-12-01 15:37","2020-12-01 19:44","2020-12-06 15:37","2020-12-06 19:44","任务1"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#9cdc82"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-07",
			"value":[6,"2020-12-01 07:45","2020-12-01 08:23","2020-12-07 07:45","2020-12-07 08:23","任务2"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#3a76af"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-07",
			"value":[6,"2020-12-01 08:23","2020-12-01 23:29","2020-12-07 08:23","2020-12-07 23:29","任务3"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#d15b7f"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-07",
			"value":[6,"2020-12-01 23:29","2020-12-01 23:54","2020-12-07 23:29","2020-12-07 23:54","任务4"]
	},
	{
		"itemStyle":{
			"normal":{
				"color":"#668ed6"
				}
			},
			"label":{
				"normal":{
					"show":true,
					"position":"inside",
					"formatter": function(params){
						let info = [];
						params.value[5] && info.push(params.value[5]);
						params.value[6] && info.push(params.value[6]);
						params.value[7] && info.push(params.value[7]);
						return info.join('\n')
					},
					"textStyle":{
						"fontSize":10
					}
				}
			},
			"name":"2020-12-07",
			"value":[6,"2020-12-01 23:54","2020-12-02 07:44","2020-12-07 23:54","2020-12-08 07:44","任务0"
		]
	}
];

function getzf(num) {
	if (parseInt(num) < 10) {  num = '0' + num; }  
	return num; 
}


// echart配置
var option = {
    color: colors,
    tooltip: {//提示框
        formatter: function (params) {
			return '<div>任务名称：'+params.value[5] + '<div>开始时间：'+params.value[3].substr(5,16)+ '<div>结束时间：'+params.value[4].substr(5,16);;
        },//数据的值
        textStyle: {
            fontSize: 10
        }
    },
    legend: {//图例
        data: xData,
        bottom: '1%',
        selectedMode: false, // 图例设为不可点击
        textStyle: {
            color: '#000'
        }
    },
    toolbox:{
        feature: {
            saveAsImage: {}
        }
    },
    grid: {//绘图网格
        left: '3%',
        right: '3%',
        top: '20px',
        bottom: '10%',
        containLabel: true
    },
    xAxis: {                   
        data: xData
    },
    yAxis: {
        type: 'time',               
        interval: 3600  * 1000,   //以一个小时递增 
        min: '2020-12-01 00:00:00', //将data里最小时间的整点时间设为min,否则min会以data里面的min为开始进行整点递增
        max: '2020-12-02 08:00:00',
        axisLabel: {
            formatter: function (value) {
                var date = new Date(value);
                return getzf(date.getHours()) + ':00';
            },                   
        }
    },
    series: [
        {
            type: 'custom',                
            renderItem: function (params, api) {//开发者自定义的图形元素渲染逻辑，是通过书写 renderItem 函数实现的
                var categoryIndex = api.value(0);//这里使用 api.value(0) 取出当前 dataItem 中第一个维度的数值。
                var start = api.coord([categoryIndex, api.value(1)]); // 这里使用 api.coord(...) 将数值在当前坐标系中转换成为屏幕上的点的像素值。
                var end = api.coord([categoryIndex, api.value(2)]);
                var width = 70;

                return {
                    type: 'rect',// 表示这个图形元素是矩形。还可以是 'circle', 'sector', 'polygon' 等等。
                    shape: echarts.graphic.clipRectByRect({ // 矩形的位置和大小。
                        x: start[0] - width / 2,
                        y: end[1],
                        width: width,
                        height: start[1] - end[1]
                    }, { // 当前坐标系的包围盒。
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    }),
                    style: api.style()
                };
            },
            encode: {
                x: 0, // data 中『维度1』和『维度2』对应到 X 轴
                y: [1, 2]// data 中『维度0』对应到 Y 轴
            },
            data: seriesData
        }
    ]
};