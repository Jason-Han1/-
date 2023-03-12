var sourceData = [{
		name: '市直归集',
		nameValue:60,
		valueUnit:"亿"
	},
	{
		name: '省级回流',
		nameValue:30,
		valueUnit:"亿"
	},
	{
		name: '五区归集',
		nameValue:30,
		valueUnit:"亿"
	},
	{
		name: '数据中心',
		nameValue:120,
		valueUnit:"亿"
	},
	{
		name: '综合治税',
		nameValue:50,
		valueUnit:"亿"
	},
	{
		name: '市场监管',
		nameValue:20,
		valueUnit:"亿"
	},
	{
		name: '公共信用',
		nameValue:30,
		valueUnit:"亿"
	},
	{
		name: '数据开放',
		nameValue:20,
		valueUnit:"亿"
	}
];
	var sangjiColor = ['#f7a365', '#44eda1', '#00ffff', '#00baff', '#f8b551', '#7ecef4', '#7ecef4', '#7ecef4'];
	var itemStyleSource = [];
	for(let d = 0; d < sourceData.length; d++) {
		sourceData[d].itemStyle = {
			normal: {
				color: sangjiColor[d]
			}
		}
		itemStyleSource.push(sourceData[d]);
	}

	option = {
	    backgroundColor:"#013d5a",
		series: [{
			type: 'sankey',
			layout: 'none',
			top:"12%",
			bottom: '21%',
			left:'3%',
			focusNodeAdjacency: 'allEdges',
			data: itemStyleSource,
			links: [{
					source: '市直归集',
					target: '数据中心',
					value: 6
				},
				{
					source: '省级回流',
					target: '数据中心',
					value: 3
				},
				{
					source: '五区归集',
					target: '数据中心',
					value: 3
				},
				{
					source: '数据中心',
					target: '综合治税',
					value: 5
				},
				{
					source: '数据中心',
					target: '市场监管',
					value: 2
				},
				{
					source: '数据中心',
					target: '公共信用',
					value: 3
				},
				{
					source: '数据中心',
					target: '数据开放',
					value: 2
				}
			],
			label: {
				normal:{
					color:"#fff",
					fontSize:20,
					formatter: function(params, i) {
						console.log(params);
						return "{white|"+params.data.name +"\n}"+params.data.nameValue+" "+params.data.valueUnit;
					},
					rich:{
						white:{
							fontSize:20,
							padding:[10,0,0,0]
						}
					}
				}
				
			},
			lineStyle: {
				normal: {
					color: 'source',
					curveness: 0.5
				}
			},
			itemStyle: {
	            normal: {
	                borderWidth: 1,
	                borderColor: 'transparent'
	            }
	        }
		}]
	}