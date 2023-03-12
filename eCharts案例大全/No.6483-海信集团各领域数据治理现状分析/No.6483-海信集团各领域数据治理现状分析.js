var option = {
			title: {
				text: '海信集团各领域数据治理现状分析'
			},
			tooltip: {
				trigger: 'axis'
			},
			color: ['#00A6AA','#16C2C2','#0070C0','#42ACD1','#F0F0F0','#FCB908'],
			legend: {
				left: 'center',
				bottom:'bottom',
				data: ['渠道销售', '营销', '战略', '用户', '研发', '采购','生产','服务','人资','财务']
			},
			radar: [
			{
				indicator: [
				{text: '数据资产', max: 5},
				{text: '数据认责', max: 5},
				{text: '数据标准', max: 5},
				{text: '数据质量', max: 5},
				{text: '数据安全', max: 5},
				{text: '自动化程度', max: 5}
				],
				center: ['25%', '55%'],
				radius: '70%'
			},
			{
				indicator: [
				{text: '流程制度', max: 5},
				{text: '文化建设', max: 5},
				{text: '评估考核', max: 5},
				{text: '平台工具', max: 5},
				{text: '管理组织', max: 5}
				],
				radius: '70%',
				center: ['75%', '50%'],
			},
			],
			series: [
			{
				type: 'radar',
				tooltip: {
					trigger: 'item'
				},
				areaStyle: {},
				data: [
				{value:[2,2,3,2,2,3,],name:'渠道销售'},
				{value:[2,2,3,2,2,3,],name:'营销'},
				{value:[1,2,1,2,2,1,],name:'战略'},
				{value:[5,2,4,3,4,4,],name:'用户'},
				{value:[2,4,4,2,2,3,],name:'研发'},
				{value:[2,2,3,1,2,3,],name:'采购'},
				{value:[2,4,3,2,2,3,],name:'生产'},
				{value:[4,4,4,3,2,4,],name:'服务'},
				{value:[2,3,2,2,3,4,],name:'人资'},
				{value:[3,5,2,4,4,3,],name:'财务'}
				]
			},
			{
				type: 'radar',
				tooltip: {
					trigger: 'item'
				},
				radarIndex: 1,
				areaStyle: {},
				data: [
				{value:[2,3,2,2,2],name:'渠道销售'},
				{value:[2,3,2,2,2],name:'营销'},
				{value:[1,1,1,1,1],name:'战略'},
				{value:[3,2,2,1,3],name:'用户'},
				{value:[3,2,3,2,2],name:'研发'},
				{value:[3,4,3,2,2],name:'采购'},
				{value:[2,4,2,1,2],name:'生产'},
				{value:[3,5,3,1,4],name:'服务'},
				{value:[3,2,2,1,2],name:'人资'},
				{value:[3,4,4,2,4],name:'财务'}
				]
			}
			]
		};