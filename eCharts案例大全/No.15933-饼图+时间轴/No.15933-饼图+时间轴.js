option = {
			baseOption: {
				timeline: {
					// y: 0,
					axisType: 'category',
					// realtime: false,
					// loop: false,
					autoPlay: true,
					// currentIndex: 2,
					playInterval: 3000,
					// controlStyle: {
					//     position: 'left'
					// },
					data: ['2013-01-01','2014-01-01','2015-01-01']
				},
				title: {
					subtext: '数据来自国家统计局',
					subtextStyle:{
						align:'center'
					}
				},
				tooltip: {},
				legend: {
					x: 'right',
					data: ['本科生', '硕士', '博士'],
					selectedMode: 'single'
				},
				calculable : true,
				series: [{
						name: '本科生',
						type: 'pie',
						center: ['50%', '50%']
						//radius: '28%'
					},
					{
						name: '硕士',
						type: 'pie',
						center: ['50%', '50%']
						//radius: '28%'
					},
					{
						name: '博士',
						type: 'pie',
						center: ['50%', '50%']
						//radius: '28%'
					}
				]
			},
            options: [
				{
					title: {text: '2013就业'},
					series: [
						
						{name: '硕士',data: [
							{name: '华为', value: 50},
							{name: '百度', value: 10},
							{name: '腾讯', value: 40}
						]},
						{name: '本科生',data: [
							{name: '华为', value: 40},
							{name: '百度', value: 30},
							{name: '腾讯', value: 30}
						]},
						{name: '博士',data: [
							{name: '华为', value: 20},
							{name: '百度', value: 30},
							{name: '腾讯', value: 50}
						]}
					]
				},
				{
					title : {text: '2014就业'},
					series : [
						{name: '硕士',data: [
							{name: '华为', value: 50},
							{name: '百度', value: 30},
							{name: '腾讯', value: 20}
						]},
						{name: '本科生',data: [
							{name: '华为', value: 40},
							{name: '百度', value: 55},
							{name: '腾讯', value: 5}
						]},
						{name: '博士',data: [
							{name: '华为', value: 30},
							{name: '百度', value: 20},
							{name: '腾讯', value: 50}
						]}
					]
				},
				{
					title : {text: '2015就业'},
					series : [
						{name: '硕士',data: [
							{name: '华为', value: 40},
							{name: '百度', value: 20},
							{name: '腾讯', value: 40}
						]},
						{name: '本科生',data: [
							{name: '华为', value: 40},
							{name: '百度', value: 40},
							{name: '腾讯', value: 20}
						]},
						{name: '博士',data: [
							{name: '华为', value: 10},
							{name: '百度', value: 40},
							{name: '腾讯', value: 50}
						]}
					]
				}
			]
        };