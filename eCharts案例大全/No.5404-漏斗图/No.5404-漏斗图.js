option = {
        backgroundColor:"#000",
		// 弹框提示
		tooltip: {
			show:false,
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c}%" // a对应系列名称,b对应数据项名称,c对应数据项值.
		},
		// 图例
		legend: {
			show:false,
			data: ['本市', '省内', '省外', '国外', '情况不明']
		},
		// 金字塔块的颜色
		color: ['#FF0000', '#FFFF00', '#33ff00', '#33ffff', '#0000ff', ],
		// 系列
		series: [
		{
			name: '就业范围分析',
			type: 'funnel',//funnel
			left: '10%',
			width: '80%',
			maxSize: '80%',
			sort : 'ascending',
			gap: 20,
		label: {
			normal: {
			position: 'right', // 标签的位置:'left'漏斗图的左侧）、'right'(右侧)、'inside'(内部) [ default: 'outside' ]
			formatter: '{c}%', // 标签文本
			textStyle: {
				// color: '#fff'
			}
			},
			emphasis: { // 本系列每个数据项中特定的 tooltip 设定
				position:'inside',
				formatter: '{b}: {c}%'
			}
		},
		itemStyle: {
			normal: {
			opacity: 1 // 系列2图形透明度
			// borderColor: '#fff', // 图形边框颜色
			// borderWidth: 3 // 图形边框宽度大小
			}
		},
		// 系列2数据(数据项值和数据项名称)
		// 系列2(内金字塔)的数据项值才是真实的数据值,通过ajax请求获取数据后展示.
		// 至于系列1和系列2的数据项名一般相同或是相关联的.
		data: [
			{value: 5, name: '国外'},
			{value: 12, name: '情况不明'},
			{value: 18, name: '国内'}
		]
	}
		]
		};