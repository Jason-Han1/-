// 定义重点病
var bzMap = {
data:Array(),
get:function(key){return this.data[key];},
set:function(key, value) {this.data[key] = value;return;}
}
bzMap.set('1','高血压');
bzMap.set('2','糖尿病');
bzMap.set('3','高血脂');
bzMap.set('4','哮喘');
bzMap.set('5','冠心病');
bzMap.set('6','慢性肾炎');
bzMap.set('7','重症精神病');
bzMap.set('8','小儿哮喘');
bzMap.set('9','湿疹');
bzMap.set('10','过敏性鼻炎');
bzMap.set('11','先心病');
bzMap.set('12','癫痫');
bzMap.set('13','发育迟缓');
bzMap.set('14','儿童肥胖');
bzMap.set('15','小儿厌食症');

// 指定图表的配置项和数据
var option = {
	title : {
		text : '重点病种综合统计',
		subtext : '不同年龄段按颜色区分',
		//x:'center',
		//y:'bottom',
		//padding:[40,5,5,5]
		textStyle: {
			"fontSize": 14,
			"fontWeight": "bolder",
			"color": "#333"
		}
	},
	tooltip : {
		trigger: 'axis',
		axisPointer:{
			show: true,
			type : 'cross',
			lineStyle: {
				type : 'dashed',
				width : 1
			}
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
		//x:713,
		//y:15,
		//width:200
	},
	legend : {
		data : ['男性', '女性']
	},
	dataRange: {
		min: 0,
		max: 100,
		orient: 'horizontal',
		y: 30,
		x: 'center',
		//text:['高','低'],           // 文本，默认为数值文本
		color:['lightgreen','orange'],
		splitNumber: 5,
		formatter:function(value1,value2){
			return value1+'-'+value2+'岁';
		}
	},
	xAxis : [
		{
			type : 'category',
			axisLabel: {
				formatter : function(v) {
					return bzMap.get(v);
				}
			},
			data : function (){
				var list = [];
				var len = 0;
				while (len++ < 15) {
					list.push(len);
				}
				return list;
			}()
		}
	],
	yAxis : [
		{
			type : 'value'
		}
	],
	animation: false,
	series : [
		{
			name:'男性',
			type:'scatter',
			tooltip : {
				trigger: 'item',
				formatter : function (params) {
					/*return params.seriesName + ' （'  + '类目' + params.value[0] + '）<br/>'
						   + params.value[1] + ', ' 
						   + params.value[2]; */
					return '病种：' + bzMap.get(params.value[0]) + '<br/>'
						   + '总数：'+params.value[2]+'人<br/>'
						   + '分布：'+params.seriesName+'人群，年龄'+params.value[2] + '岁';
				},
				axisPointer:{
					show: true
				}
			},
			symbolSize: function (value){
				return Math.round(value[2]/10);
			},
			data: (function () {
				var d = [];
				var len = 0;
				var value;
				while (len++ < 15) {
					d.push([
						len,
						(Math.random()*30).toFixed(0) - 0,
						(Math.random()*100).toFixed(0) - 0
					]);
				}
				return d;
			})()
		},
		{
			name:'女性',
			type:'scatter',
			tooltip : {
				trigger: 'item',
				formatter : function (params) {
					/*return params.seriesName + ' （'  + '类目' + params.value[0] + '）<br/>'
						   + params.value[1] + ', ' 
						   + params.value[2]; */
					return '病种：' + bzMap.get(params.value[0]) + '<br/>'
						   + '总数：'+params.value[2]+'人<br/>'
						   + '分布：'+params.seriesName+'人群，年龄'+params.value[2] + '岁';
				},
				axisPointer:{
					show: true
				}
			},
			symbolSize: function (value){
				return Math.round(value[2]/10);
			},
			data: (function () {
				var d = [];
				var len = 0;
				var value;
				while (len++ < 15) {
					d.push([
						len,
						(Math.random()*30).toFixed(0) - 0,
						(Math.random()*100).toFixed(0) - 0
					]);
				}
				return d;
			})()
		}
	]
};
