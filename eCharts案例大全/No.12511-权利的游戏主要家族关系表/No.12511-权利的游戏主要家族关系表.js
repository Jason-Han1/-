option = {
	tooltip: {
		show: true, // 默认显示
		showContent: true, // 是否显示提示框浮层
		trigger: 'item', // 触发类型，默认数据项触发
		triggerOn: 'mousemove', // 提示触发条件，mousemove鼠标移至触发，还有click点击触发
		alwaysShowContent: false, // 默认离开提示框区域隐藏，true为一直显示
		showDelay: 100, // 浮层显示的延迟，单位为 ms，默认没有延迟，也不建议设置。在 triggerOn 为 'mousemove' 时有效。
		hideDelay: 2000, // 浮层隐藏的延迟，单位为 ms，在 alwaysShowContent 为 true 的时候无效。
		enterable: false, // 鼠标是否可进入提示框浮层中，默认为false，如需详情内交互，如添加链接，按钮，可设置为 true。
		position: 'right', // 提示框浮层的位置，默认不设置时位置会跟随鼠标的位置。只在 trigger 为'item'的时候有效。
		confine: false, // 是否将 tooltip 框限制在图表的区域内。
		
		// 外层的 dom 被设置为 'overflow: hidden'，或者移动端窄屏，导致 tooltip 超出外界被截断时，此配置比较有用。
		transitionDuration: 0.2, // 提示框浮层的移动动画过渡时间，单位是秒，设置为 0 的时候会紧跟着鼠标移动。
	},

	legend: {
		// 图例显示（显示在右上角），name:类别名称，icon:图例的形状（默认是roundRect圆角矩形）。
		show: true,
		data: [
			{ name: '史塔克家族' },
			{ name: '兰尼斯特家族' },
			{ name: '拜拉席恩家族' },
			{ name: '坦格利安家族' },
			{ name: '徒利家族' },
			{ name: '艾林家族' },
			{ name: '提利尔家族' },
			{ name: '马泰尔家族' },
			{ name: '葛雷乔伊家族' },
			{ name: '其他家族' },
		]
	},

	series: [{
		type: 'graph', // 关系图
		//name: '冰与火之歌:', // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
		layout: 'force', // 图的布局，类型为力导图，'circular' 采用环形布局，见示例 Les Miserables
		legendHoverLink: true, // 是否启用图例 hover(悬停) 时的联动高亮。
		hoverAnimation: true, // 是否开启鼠标悬停节点的显示动画
		coordinateSystem: null, // 坐标系可选
		xAxisIndex: 0, // x轴坐标 有多种坐标系轴坐标选项
		yAxisIndex: 0, // y轴坐标 
		
		force: {
			// 力引导图基本配置
			// initLayout: , // 力引导的初始化布局，默认使用xy轴的标点
			repulsion: 500, // 节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
			gravity: 0.02, // 节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
			edgeLength: 200, // 边的两个节点之间的距离，这个距离也会受 repulsion影响 。值越大则长度越长
			layoutAnimation: true // 因为力引导布局会在多次迭代后才会稳定，这个参数决定是否显示布局的迭代动画
			// 在浏览器端节点数据较多（>100）的时候不建议关闭，布局过程会造成浏览器假死。                        
		},

		roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启，true 为都开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'
		nodeScaleRatio: 0.6, // 鼠标漫游缩放时节点的相应缩放比例，当设为0时节点不随着鼠标的缩放而缩放
		draggable: true, // 节点是否可拖拽，只在使用力引导布局的时候有用。
		focusNodeAdjacency: true, // 是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。
		symbol:'circle', // 关系图节点标记的图形。
		// ECharts 提供的标记类型包括：'circle'(圆形), 'rect'（矩形）, 'roundRect'（圆角矩形）,
		// 'triangle'（三角形）, 'diamond'（菱形）, 'pin'（大头针）, 'arrow'（箭头）
		// 也可以通过 'image://url' 设置为图片，其中 url 为图片的链接。'path:// 这种方式可以任意改变颜色并且抗锯齿
		// symbolSize: 10 , // 也可以用数组分开表示宽和高，例如 [20, 10] 如果需要每个数据的图形大小不一样，
		// 可以设置为如下格式的回调函数：(value: Array|number, params: Object) => number|Array
		// symbolRotate:, // 关系图节点标记的旋转角度。注意在 markLine 中当 symbol 为 'arrow' 时会忽略 symbolRotate 强制设置为切线的角度。
		// symbolOffset:[0,0], // 关系图节点标记相对于原本位置的偏移。[0, '50%']
		edgeSymbol: ['none', 'arrow'], // 边两端的标记类型，可以是一个数组分别指定两端，也可以是单个统一指定。
		// 默认不显示标记，常见的可以设置为箭头，如下：edgeSymbol: ['circle', 'arrow']
		edgeSymbolSize: 10, // 边两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定。

		itemStyle: { // ========图形样式，有 normal 和 emphasis 两个状态。
			// normal 是图形在默认状态下的样式；
			// emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
			normal: { // 默认样式
				label: {
					show: true
				},
				borderType: 'solid', // 图形描边类型，默认为实线，支持 'solid'（实线）, 'dashed'(虚线), 'dotted'（点线）。
				borderColor: 'rgba(205, 149, 12, 0.4)', // 设置图形边框为淡金色,透明度为0.4
				borderWidth: 0, // 图形的描边线宽。为 0 时无描边。
				opacity: 1 // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
			},
			emphasis: {
				// 高亮状态
			}
		},
		
		lineStyle: { // ========关系边的公用线条样式。
			normal: {
				color: 'rgba(135, 135, 135, 0.4)',
				width: '6', //线的粗细
				type: 'solid', // 线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
				curveness: 0.1, // 线条的曲线程度，从0到1
				opacity: 0.5 // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
			},
			emphasis: {
				// 高亮状态
			}
		},

		label: { // ========结点图形上的文本标签
			normal: {
				show: true, // 是否显示标签。
				position: 'inside', // 标签的位置。['50%', '50%'] [x,y]
				textStyle: { // 标签的字体样式
					color: '#fff', // 字体颜色 #cde6c7 #d1c7b7 #d9d6c3 #d3d7d4
					fontStyle: 'normal', // 文字字体的风格 'normal'标准 'italic'斜体 'oblique' 倾斜
					fontWeight: 'bolder', // 'normal'标准，'bold'粗的，'bolder'更粗的，'lighter'更细的，或100 | 200 | 300 | 400...
					fontFamily: 'sans-serif', // 文字的字体系列
					fontSize: 12, // 字体大小
				}
			},
			emphasis: {
				// 高亮状态
			}
		},
		
		edgeLabel: { // ========连接线上的文本标签 
			normal: {
				show: true, // 不显示连接线上的文字，如果显示只能显示结点的value值，而不是连接线的值
				textStyle: {
					color: '#999',
					fontSize: 10
				},
				formatter: "{c}"
			},
			emphasis: {
				// 高亮状态
			}
		},
		
		categories: [ // name(类别名称)要同legend(图例）按次序一致
			{ name: '史塔克家族' },
			{ name: '兰尼斯特家族' },
			{ name: '拜拉席恩家族' },
			{ name: '坦格利安家族' },
			{ name: '徒利家族' },
			{ name: '艾林家族' },
			{ name: '提利尔家族' },
			{ name: '马泰尔家族' },
			{ name: '葛雷乔伊家族' },
			{ name: '其他家族' },
		],

		// 设置结点node的数据
		// category: 类别序号，从0开始
		// name: 结点图形显示的文字
		// value: 鼠标点击结点，显示的数字
		// symbolSize: 结点图形的大小
		// symbol: 类目节点标记图形，默然为圆形
		// label: 标签样式
		data: [
			// 史塔克家族
			{ category: '史塔克家族', name: '艾德·史塔克', symbolSize: 60, tooltip: { formatter: '公爵，临冬城公爵，北境守护' } },
			{ category: '史塔克家族', name: '罗柏·史塔克', symbolSize: 60, tooltip: { formatter: '长子，临冬城继承人，十四岁，冰原狼名叫灰风' } },
			{ category: '史塔克家族', name: '珊莎·史塔克', symbolSize: 100, tooltip: { formatter: '长女，十一岁，冰原狼名叫淑女' } },
			{ category: '史塔克家族', name: '艾莉亚·史塔克', symbolSize: 100, tooltip: { formatter: '幼女，九岁，冰原狼名叫娜梅莉亚' } },
			{ category: '史塔克家族', name: '布兰登·史塔克', symbolSize: 100, tooltip: { formatter: '次子，小名“布兰”，七岁，冰原狼名叫夏天' } },
			{ category: '史塔克家族', name: '瑞肯·史塔克', symbolSize: 50, tooltip: { formatter: '幼子，三岁，冰原狼名叫毛毛狗' } },
			{ category: '史塔克家族', name: '琼恩·雪诺', symbolSize: 100, tooltip: { formatter: '琼恩·雪诺，十四岁，冰原狼名叫白灵' } },

			{ category: '史塔克家族', name: '布兰登·史塔克(老)', symbolSize: 30, tooltip: { formatter: '长兄，被伊里斯二世杀害' } },
			{ category: '史塔克家族', name: '莱安娜·史塔克', symbolSize: 30, tooltip: { formatter: '妹妹，死于多恩山区' } },
			{ category: '史塔克家族', name: '班扬·史塔克', symbolSize: 60, tooltip: { formatter: '弟弟，现任守夜人军团首席游骑兵' } },

			// 兰尼斯特家族
			{ category: '兰尼斯特家族', name: '泰温·兰尼斯特', symbolSize: 60, tooltip: { formatter: '凯岩城公爵，西境守护，兰尼斯港之盾' } },
			{ category: '兰尼斯特家族', name: '乔安娜·兰尼斯特', symbolSize: 50, tooltip: { formatter: '堂妹，生提利昂时死于难产' } },
			{ category: '兰尼斯特家族', name: '瑟曦·兰尼斯特', symbolSize: 100, tooltip: { formatter: '劳勃·拜拉席恩一世的夫人，詹姆的双胞胎姐姐' } },
			{ category: '兰尼斯特家族', name: '詹姆·兰尼斯特', symbolSize: 100, tooltip: { formatter: '弑君者，瑟曦的双胞胎弟弟' } },
			{ category: '兰尼斯特家族', name: '提利昂·兰尼斯特', symbolSize: 100, tooltip: { formatter: '小恶魔，侏儒' } },

			{ category: '兰尼斯特家族', name: '凯冯·兰尼斯特', symbolSize: 60, tooltip: { formatter: '泰温的长弟' } },

			// 拜拉席恩家族
			{ category: '拜拉席恩家族', name: '劳勃·拜拉席恩一世', symbolSize: 60, tooltip: { formatter: '七大王国国王' } },
			{ category: '拜拉席恩家族', name: '乔佛里·拜拉席恩', symbolSize: 80, tooltip: { formatter: '长子，铁王座继承人，十二岁' } },
			{ category: '拜拉席恩家族', name: '弥赛菈·拜拉席恩', symbolSize: 60, tooltip: { formatter: '女儿，八岁' } },
			{ category: '拜拉席恩家族', name: '托曼·拜拉席恩', symbolSize: 80, tooltip: { formatter: '幼子，七岁' } },

			{ category: '拜拉席恩家族', name: '史坦尼斯·拜拉席恩', symbolSize: 80, tooltip: { formatter: '龙石岛公爵' } },
			{ category: '拜拉席恩家族', name: '蓝礼·拜拉席恩', symbolSize: 80, tooltip: { formatter: '风息堡公爵' } },

			{ category: '拜拉席恩家族', name: '希琳·拜拉席恩', symbolSize: 80, tooltip: { formatter: '史坦尼斯和赛丽丝的女儿' } },

			// 坦格利安家族
			{ category: '坦格利安家族', name: '伊里斯·坦格利安二世', symbolSize: 50, tooltip: { formatter: '国王，君临沦陷时被詹姆·兰尼斯特杀害' } },
			{ category: '坦格利安家族', name: '蕾拉·坦格利安', symbolSize: 50, tooltip: { formatter: '夫人与妹妹，坦格利安的蕾拉王后，在龙石岛死于难产' } },
			{ category: '坦格利安家族', name: '雷加·坦格利安', symbolSize: 50, tooltip: { formatter: '铁王座继承人，龙石岛亲王，在三叉戟河之役中被劳勃·拜拉席恩杀死' } },
			{ category: '坦格利安家族', name: '韦赛里斯·坦格利安', symbolSize: 60, tooltip: { formatter: '自称韦赛里斯三世，七国统治者，被人唤作“乞丐王”' } },
			{ category: '坦格利安家族', name: '丹妮莉丝·坦格利安', symbolSize: 100, tooltip: { formatter: '人称“风暴降生”丹妮莉丝，十三岁的少女' } },

			// 徒利家族
			{ category: '徒利家族', name: '霍斯特·徒利', symbolSize: 60, tooltip: { formatter: '奔流城公爵' } },
			{ category: '徒利家族', name: '凯特琳·徒利', symbolSize: 60, tooltip: { formatter: '长女，嫁给艾德·史塔克公爵' } },
			{ category: '徒利家族', name: '莱莎·徒利', symbolSize: 60, tooltip: { formatter: '次女，嫁给琼恩·艾林公爵' } },
			{ category: '徒利家族', name: '艾德慕·徒利', symbolSize: 60, tooltip: { formatter: '爵士，奔流城继承人' } },

			{ category: '徒利家族', name: '布林登·徒利', symbolSize: 60, tooltip: { formatter: '爵士（黑鱼）' } },

			// 艾林家族
			{ category: '艾林家族', name: '琼恩·艾林', symbolSize: 50, tooltip: { formatter: '前鹰巢城公爵，峡谷守护者，东境守护，国王之手，刚刚去世' } },
			{ category: '艾林家族', name: '劳勃·艾林', symbolSize: 50, tooltip: { formatter: '体弱多病的六岁男孩，现任鹰巢城公爵和峡谷守护者' } },

			// 提利尔家族
			{ category: '提利尔家族', name: '梅斯·提利尔', symbolSize: 60, tooltip: { formatter: '高庭公爵，南境守护，边疆守护者，河湾至高统领' } },
			{ category: '提利尔家族', name: '维拉斯·提利尔', symbolSize: 50, tooltip: { formatter: '长子，高庭继承人' } },
			{ category: '提利尔家族', name: '加兰·提利尔', symbolSize: 60, tooltip: { formatter: '次子，爵士（勇武的加兰）' } },
			{ category: '提利尔家族', name: '洛拉斯·提利尔', symbolSize: 50, tooltip: { formatter: '幼子，爵士（百花骑士）' } },
			{ category: '提利尔家族', name: '玛格丽·提利尔', symbolSize: 80, tooltip: { formatter: '十四岁的少女' } },

			// 马泰尔家族
			{ category: '马泰尔家族', name: '道朗·马泰尔', symbolSize: 50, tooltip: { formatter: '阳戟城公爵，多恩亲王' } },
			{ category: '马泰尔家族', name: '亚莲恩·马泰尔', symbolSize: 80, tooltip: { formatter: '长女，阳戟城继承人' } },
			{ category: '马泰尔家族', name: '昆廷·马泰尔', symbolSize: 60, tooltip: { formatter: '长子' } },
			{ category: '马泰尔家族', name: '崔斯丹·马泰尔', symbolSize: 50, tooltip: { formatter: '次子' } },
			{ category: '马泰尔家族', name: '伊莉亚·马泰尔家族', symbolSize: 50, tooltip: { formatter: '嫁给雷加·坦格利安王子，君临沦陷时遇害' } },
			
			// 葛雷乔伊家族
			{ category: '葛雷乔伊家族', name: '巴隆·葛雷乔伊', symbolSize: 60, tooltip: { formatter: '铁群岛总头领，海盐王与磐岩王，海风之子，派克岛掠夺者之首' } },
			{ category: '葛雷乔伊家族', name: '罗德利克·葛雷乔伊', symbolSize: 50, tooltip: { formatter: '长子，葛雷乔伊家族叛乱期间战死于海疆城' } },
			{ category: '葛雷乔伊家族', name: '马伦·葛雷乔伊', symbolSize: 50, tooltip: { formatter: '次子，葛雷乔伊家族叛乱期间战死于派克岛城墙上' } },
			{ category: '葛雷乔伊家族', name: '阿莎·葛雷乔伊', symbolSize: 80, tooltip: { formatter: '女儿，“黑风号”船长' } },
			{ category: '葛雷乔伊家族', name: '席恩·葛雷乔伊', symbolSize: 80, tooltip: { formatter: '席恩·葛雷乔伊，铁群岛继承人，现为艾德·史塔克公爵养子' } },

			{ category: '葛雷乔伊家族', name: '攸伦·葛雷乔伊', symbolSize: 80, tooltip: { formatter: '鸦眼，宁静号船长，凶徒、海盗和掠夺者' } },
			{ category: '葛雷乔伊家族', name: '维克塔利昂·葛雷乔伊', symbolSize: 80, tooltip: { formatter: '铁岛舰队总司令' } },
			{ category: '葛雷乔伊家族', name: '伊伦·葛雷乔伊', symbolSize: 80, tooltip: { formatter: '湿发，侍奉淹神的僧侣' } },
			
			// 其他家族
			{ category: '其他家族', name: '赛丽丝·佛罗伦', symbolSize: 60, tooltip: { formatter: '来自佛罗伦家族' } },
			{ category: '其他家族', name: '米妮莎·河安', symbolSize: 50, tooltip: { formatter: '河安家族的米妮莎，难产而死' } },
			{ category: '其他家族', name: '艾勒莉·海塔尔', symbolSize: 50, tooltip: { formatter: '旧镇的海塔尔家族的艾勒莉' } },
			{ category: '其他家族', name: '奥莲娜·雷德温', symbolSize: 60, tooltip: { formatter: '荆棘女王' } },
			{ category: '其他家族', name: '亚拉妮丝·哈尔洛', symbolSize: 50, tooltip: { formatter: '哈尔洛家族的亚拉妮丝' } },
			{ category: '其他家族', name: '卓戈·卡奥', symbolSize: 60, tooltip: { formatter: '草原民族多斯拉克规模最大卡拉萨的首领' } },

			// 戴佛斯·席渥斯
			// 山姆威尔·塔利
			// 塔斯的布蕾妮
			// 巴利斯坦·赛尔弥
			// 阿利欧·何塔
			// 琼恩·克林顿
			// 亚历斯·奥克赫特
			// 梅丽珊卓
			// 威尔
			// 克里森学士
			// 齐特
			// 梅里·佛雷
			// 佩特
			// 瓦拉米尔
			// 格雷果·克里冈
			// 桑铎·克里冈
			// 乔拉·莫尔蒙
		],

		// 设置连线edges的数据
		links: [ 
			// 史塔克家族
			{ source: '艾德·史塔克', target: '凯特琳·徒利', value: '妻子' },
			{ source: '艾德·史塔克', target: '罗柏·史塔克', value: '长子' },
			{ source: '艾德·史塔克', target: '珊莎·史塔克', value: '长女' },
			{ source: '艾德·史塔克', target: '艾莉亚·史塔克', value: '幼女' },
			{ source: '艾德·史塔克', target: '布兰登·史塔克', value: '次子' },
			{ source: '艾德·史塔克', target: '瑞肯·史塔克', value: '幼子' },
			{ source: '凯特琳·徒利', target: '罗柏·史塔克', value: '长子' },
			{ source: '凯特琳·徒利', target: '珊莎·史塔克', value: '长女' },
			{ source: '凯特琳·徒利', target: '艾莉亚·史塔克', value: '幼女' },
			{ source: '凯特琳·徒利', target: '布兰登·史塔克', value: '次子' },
			{ source: '凯特琳·徒利', target: '瑞肯·史塔克', value: '幼子' },

			{ source: '艾德·史塔克', target: '琼恩·雪诺', value: '私生子' },
			{ source: '艾德·史塔克', target: '席恩·葛雷乔伊', value: '义子' },
			{ source: '艾德·史塔克', target: '布兰登·史塔克(老)', value: '哥哥' },
			{ source: '艾德·史塔克', target: '莱安娜·史塔克', value: '妹妹' },
			{ source: '艾德·史塔克', target: '班扬·史塔克', value: '弟弟' },

			// 兰尼斯特家族
			{ source: '泰温·兰尼斯特', target: '乔安娜·兰尼斯特', value: '妻子' },
			{ source: '泰温·兰尼斯特', target: '瑟曦·兰尼斯特', value: '长女' },
			{ source: '泰温·兰尼斯特', target: '詹姆·兰尼斯特', value: '长子' },
			{ source: '泰温·兰尼斯特', target: '提利昂·兰尼斯特', value: '次子' },
			{ source: '乔安娜·兰尼斯特', target: '瑟曦·兰尼斯特', value: '长女' },
			{ source: '乔安娜·兰尼斯特', target: '詹姆·兰尼斯特', value: '长子' },
			{ source: '乔安娜·兰尼斯特', target: '提利昂·兰尼斯特', value: '次子' },

			{ source: '泰温·兰尼斯特', target: '凯冯·兰尼斯特', value: '弟弟' },

			{ source: '瑟曦·兰尼斯特', target: '詹姆·兰尼斯特', value: '情人' },

			// 拜拉席恩家族
			{ source: '劳勃·拜拉席恩一世', target: '瑟曦·兰尼斯特', value: '妻子' },
			{ source: '劳勃·拜拉席恩一世', target: '乔佛里·拜拉席恩', value: '长子' },
			{ source: '劳勃·拜拉席恩一世', target: '弥赛菈·拜拉席恩', value: '长女' },
			{ source: '劳勃·拜拉席恩一世', target: '托曼·拜拉席恩', value: '次子' },
			{ source: '瑟曦·兰尼斯特', target: '乔佛里·拜拉席恩', value: '长子' },
			{ source: '瑟曦·兰尼斯特', target: '弥赛菈·拜拉席恩', value: '长女' },
			{ source: '瑟曦·兰尼斯特', target: '托曼·拜拉席恩', value: '次子' },

			{ source: '劳勃·拜拉席恩一世', target: '史坦尼斯·拜拉席恩', value: '一弟' },
			{ source: '劳勃·拜拉席恩一世', target: '蓝礼·拜拉席恩', value: '二弟' },
			{ source: '劳勃·拜拉席恩一世', target: '艾德·史塔克', value: '义弟' },

			{ source: '史坦尼斯·拜拉席恩', target: '赛丽丝·佛罗伦', value: '妻子' },
			{ source: '史坦尼斯·拜拉席恩', target: '希琳·拜拉席恩', value: '女儿' },
			{ source: '赛丽丝·佛罗伦', target: '希琳·拜拉席恩', value: '女儿' },

			{ source: '蓝礼·拜拉席恩', target: '洛拉斯·提利尔', value: '情人' },
			{ source: '托曼·拜拉席恩', target: '玛格丽·提利尔', value: '妻子' },

			// 坦格利安家族
			{ source: '伊里斯·坦格利安二世', target: '蕾拉·坦格利安', value: '妻子' },
			{ source: '伊里斯·坦格利安二世', target: '雷加·坦格利安', value: '长子' },
			{ source: '伊里斯·坦格利安二世', target: '韦赛里斯·坦格利安', value: '次子' },
			{ source: '伊里斯·坦格利安二世', target: '丹妮莉丝·坦格利安', value: '次子' },
			{ source: '蕾拉·坦格利安', target: '雷加·坦格利安', value: '长子' },
			{ source: '蕾拉·坦格利安', target: '韦赛里斯·坦格利安', value: '次子' },
			{ source: '蕾拉·坦格利安', target: '丹妮莉丝·坦格利安', value: '次子' },

			{ source: '雷加·坦格利安', target: '伊莉亚·马泰尔家族', value: '妻子' },

			{ source: '伊里斯·坦格利安二世', target: '泰温·兰尼斯特', value: '好友' },

			{ source: '丹妮莉丝·坦格利安', target: '卓戈·卡奥', value: '丈夫' },

			// 徒利家族
			{ source: '霍斯特·徒利', target: '米妮莎·河安', value: '妻子' },
			{ source: '霍斯特·徒利', target: '凯特琳·徒利', value: '长女' },
			{ source: '霍斯特·徒利', target: '莱莎·徒利', value: '次女' },
			{ source: '霍斯特·徒利', target: '艾德慕·徒利', value: '长子' },
			{ source: '霍斯特·徒利', target: '布林登·徒利', value: '弟弟' },

			{ source: '米妮莎·河安', target: '凯特琳·徒利', value: '长女' },
			{ source: '米妮莎·河安', target: '莱莎·徒利', value: '次女' },
			{ source: '米妮莎·河安', target: '艾德慕·徒利', value: '长子' },

			// 艾林家族
			{ source: '琼恩·艾林', target: '莱莎·徒利', value: '妻子' },
			{ source: '琼恩·艾林', target: '劳勃·艾林', value: '长子' },
			{ source: '莱莎·徒利', target: '劳勃·艾林', value: '长子' },

			{ source: '琼恩·艾林', target: '艾德·史塔克', value: '义子' },
			{ source: '琼恩·艾林', target: '劳勃·拜拉席恩一世', value: '义子' },
			
			// 提利尔家族
			{ source: '梅斯·提利尔', target: '艾勒莉·海塔尔', value: '妻子' },
			{ source: '梅斯·提利尔', target: '维拉斯·提利尔', value: '长子' },
			{ source: '梅斯·提利尔', target: '加兰·提利尔', value: '次子' },
			{ source: '梅斯·提利尔', target: '洛拉斯·提利尔', value: '幼子' },
			{ source: '梅斯·提利尔', target: '玛格丽·提利尔', value: '女儿' },
			{ source: '艾勒莉·海塔尔', target: '维拉斯·提利尔', value: '长子' },
			{ source: '艾勒莉·海塔尔', target: '加兰·提利尔', value: '次子' },
			{ source: '艾勒莉·海塔尔', target: '洛拉斯·提利尔', value: '幼子' },
			{ source: '艾勒莉·海塔尔', target: '玛格丽·提利尔', value: '女儿' },

			{ source: '奥莲娜·雷德温', target: '梅斯·提利尔', value: '儿子' },

			// 马泰尔家族
			{ source: '道朗·马泰尔', target: '亚莲恩·马泰尔', value: '长女' },
			{ source: '道朗·马泰尔', target: '昆廷·马泰尔', value: '长子' },
			{ source: '道朗·马泰尔', target: '崔斯丹·马泰尔', value: '次子' },
			{ source: '道朗·马泰尔', target: '伊莉亚·马泰尔家族', value: '妹妹' },

			// 葛雷乔伊家族
			{ source: '巴隆·葛雷乔伊', target: '亚拉妮丝·哈尔洛', value: '妻子' },
			{ source: '巴隆·葛雷乔伊', target: '罗德利克·葛雷乔伊', value: '长子' },
			{ source: '巴隆·葛雷乔伊', target: '马伦·葛雷乔伊', value: '次子' },
			{ source: '巴隆·葛雷乔伊', target: '阿莎·葛雷乔伊', value: '长女' },
			{ source: '巴隆·葛雷乔伊', target: '席恩·葛雷乔伊', value: '幼子' },
			{ source: '亚拉妮丝·哈尔洛', target: '罗德利克·葛雷乔伊', value: '长子' },
			{ source: '亚拉妮丝·哈尔洛', target: '马伦·葛雷乔伊', value: '次子' },
			{ source: '亚拉妮丝·哈尔洛', target: '阿莎·葛雷乔伊', value: '长女' },
			{ source: '亚拉妮丝·哈尔洛', target: '席恩·葛雷乔伊', value: '幼子' },

			{ source: '巴隆·葛雷乔伊', target: '攸伦·葛雷乔伊', value: '弟弟' },
			{ source: '巴隆·葛雷乔伊', target: '维克塔利昂·葛雷乔伊', value: '弟弟' },
			{ source: '巴隆·葛雷乔伊', target: '伊伦·葛雷乔伊', value: '弟弟' },
		]
	}]
};