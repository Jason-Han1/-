var home = "image:///asset/get/s/data-1544514405859-oal-uuABu.png";

var  task_scheduling = "image:///asset/get/s/data-1544514213101-eEzMS0vx4.png";//任务调度

var  server = "image:///asset/get/s/data-1544514208221-yNcetloRp.png";//前置服务器

var middle_table = "image:///asset/get/s/data-1544514203431-anU298V_z.png";//表

var datacenter = "image:///asset/get/s/data-1544514198345-kfpUB8q6e.png";//数据中心

let symbolSizeSetting = 30;//图标大小
			let labelOne = {//文字1省级市级五区
					normal: {
						position: "bottom",
						distance:0,	//离图标多远					
						show: true,
						textStyle: {
							fontSize: 20,
							color:'#00eaff',
							fontFamily:'microsoftYaHei'
						},
					}
				};
			let labelTwo = {//文字2
					normal: {
						position: "bottom",
						show: true,
						distance:0,	
						textStyle: {
							fontSize: 18,
							color:'#fff',
							fontWeight:'500',
							fontFamily:'microsoftYaHei'
						},
					}
				};
				let labelThree = {//文字3
					normal: {
						position: "bottom",
						show: true,
						textStyle: {
							fontSize: 16,
							color:'#00eaff',
							fontFamily:'microsoftYaHei'
						},
					}
				};
				let lineColorOne = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: '#58B3CC'
					}, {
						offset: 1,
						color: '#F58158'
					}])
			let dataList = [
						{
							name: "省级",
							symbol:home,
							symbolSize: symbolSizeSetting,
							draggable: false,
							fixed: true,
							value: [0, 210],
							label: labelOne,
						},
						{
							name: "市级",
							symbol:home,
							symbolSize: symbolSizeSetting,
							draggable: false,
							fixed: true,
							value: [0, 150],
							label: labelOne,
						},
						{
							name: "五区",
							symbol:home,
							symbolSize: symbolSizeSetting,
							draggable: false,
							fixed: true,
							value: [0, 90],
							label: labelOne,
						},
						{
							name: "省级中间表",
							symbol:middle_table,
							symbolSize: symbolSizeSetting,
							draggable: false,
							fixed: true,
							value: [100, 240],
							label: labelTwo,
						},
						{
							name: "市级中间表",
							symbol:middle_table,
							symbolSize: symbolSizeSetting,
							draggable: false,
							fixed: true,
							value: [100, 150],
							label: labelTwo,
						},
						{
							name: "五区中间表",
							symbol:middle_table,
							symbolSize: symbolSizeSetting,
							draggable: false,
							fixed: true,
							value: [100, 60],
							label: labelTwo,
						}, {
							name: "任务调度",
							value: [200, 150],
							draggable: false,
							symbol:task_scheduling,
							symbolSize: symbolSizeSetting,
							label: labelThree,
						},
						//节点B,C,D ....n
						{
							name: "前置服务器1",
							symbol:server,
							symbolSize: symbolSizeSetting,
							draggable: false,
							value: [300, 280],
							label: labelTwo,
						}, {
							name: "前置服务器2 ",
							symbol:server,
							symbolSize: symbolSizeSetting,
							draggable: false,
							value: [300, 230],
							label: labelTwo,
						}, {
							name: "前置服务器3",
							symbol:server,
							symbolSize: symbolSizeSetting,
							draggable: false,
							value: [300, 180],
							label: labelTwo,
						},{
							name: "前置服务器4",
							symbol:server,
							symbolSize: symbolSizeSetting,
							draggable: false,
							value: [300, 130],
							label: labelTwo,
						}, {
							name: "前置服务器5",
							symbol:server,
							symbolSize: symbolSizeSetting,
							draggable: false,
							value: [300, 80],
							label: labelTwo,
						}, {
							name: "前置服务器6",
							symbol:server,
							symbolSize: symbolSizeSetting,
							draggable: false,
							value: [300, 30],
							label: labelTwo,
						}, {
							name: "数据中心",
							symbol: datacenter,
							symbolSize: symbolSizeSetting,
							draggable: false,
							value: [400, 150],
							label: labelThree,
						}
					]
			option = {
				grid: {
					left: '6%',
					top: '1%',
					bottom:'5%',
				},
				textStyle: {
					color: '#f00',
					fontSize: 16,
					fontWeight: 600,
				},
				backgroundColor:"#013954",
				animationDuration: 1500,
				animationEasingUpdate: 'quinticInOut',
				xAxis: {
					show: false,
					type: 'value'
				},
				yAxis: {
					show: false,
					type: 'value'
				},
				series: [{
					type: 'graph',
					coordinateSystem: 'cartesian2d',
					legendHoverLink: false,
					hoverAnimation: true,
					nodeScaleRatio: false,
					roam: false,
					lineStyle: {//去掉自带的那条线，不要删
						normal: {
							width: 0,
							shadowColor: 'none',
							color: 'transparent'
						},
					},
					data: dataList,
				}, 
				{
					type: 'lines', //大数据到节点A。。。节点A到大数据
					coordinateSystem: 'cartesian2d',
					z: 1,
					effect: {
						show: true,
						smooth: true,
						trailLength: 0,
						symbol: "arrow",
						color: '#ffc776',
						symbolSize: 8,
						period: 6,
						loop: true,
					},
					lineStyle: {
						normal: {
							curveness: 0.3,
							color: lineColorOne,
							opacity: 0.6,
							width: 1,
						}
					},
					data: [{
						coords: [
							[0, 150],
							[100, 150]
						]
					}]
				},
				{
					type: 'lines', //大数据2到节点1B，，，，节点1B到大数据2
					coordinateSystem: 'cartesian2d',
					z: 1,
					effect: {
						show: true,
						smooth: true,
						trailLength: 0,
						symbol: "arrow",
						color: '#ffc776',
						symbolSize: 8,
						period: 6,
						loop: true,
					},
					lineStyle: {
						normal: {
							curveness: 0.3,
							color: lineColorOne,
							width: 1,
						}
					},
					data: [{
						coords: [
							[0, 210],
							[100, 240]
						]
					}]
				},{
					type: 'lines', //大数据3到节点1C,节点1C到大数据3
					coordinateSystem: 'cartesian2d',
					z: 1,
					effect: {
						show: true,
						smooth: true,
						trailLength: 0,
						symbol: "arrow",
						color: '#ffc776',
						symbolSize: 8,
						period: 6,
						loop: true,
					},
					lineStyle: {
						normal: {
							curveness: -0.3,
							color: lineColorOne,
							width: 1,
						}
					},
					data: [{
						coords: [
							[0, 90],
							[100, 60]
						]
					}]
				},{
					type: 'lines', //大数据到块1,2,...n
					coordinateSystem: 'cartesian2d',
					z: 1,
					effect: {
						show: true,
						smooth: true,
						trailLength: 0,
						symbol: "arrow",
						color: '#ffc776',
						symbolSize: 8,
						period: 6,
						loop: true,
					},
					lineStyle: {
						normal: {
							curveness: 0.2,
							color: lineColorOne,
							width: 1,
						}
					},
					data: [{
						coords: [
							[100, 240],
							[200, 150]
						]
					}, {
						coords: [
							[100, 150],
							[200, 150]
						]
					}, {
						coords: [
							 [100, 60],
							[200, 150]
						]
					},     {
						coords: [
							[200, 150],
							[100, 240],
						]
					}, {
						coords: [
							[200, 150],
							[100, 150],
						]
					}, {
						coords: [
							[200, 150],
							[100, 60],
						]
					}]
				}, 
				{
					type: 'lines', //块1,2...n到节点A,B...N
					coordinateSystem: 'cartesian2d',
					// animationDelay: 10000,
					z: 1,
					effect: {
						show: true,
						smooth: true,
						trailLength: 0,
						symbol: "arrow",
						color: '#ffc776',
						symbolSize: 8,
						period: 6,
						loop: true,
					},
					lineStyle: {
						normal: {
							curveness: 0.2,
							color: lineColorOne,
							width: 1,
						}
					},
					data: [{
						coords: [
							[200, 150],
							[300, 280]
						]
					}, {
						coords: [
							[200, 150],
							[300, 230]
						]
					}, {
						coords: [
							[200, 150],
							[300, 180]
						]
					}, {
						coords: [
							[200, 150],
							[300, 130]
						]
					}, {
						coords: [
							[200, 150],
							[300, 80]
						]
					}, {
						coords: [
							[200, 150],
							[300, 30]
						]
					}]
				}, {
					type: 'lines', //节点A,B...N到节点X
					coordinateSystem: 'cartesian2d',
					z: 1,
					effect: {
						show: true,
						smooth: true,
						trailLength: 0,
						symbol: "arrow",
						color: '#ffc776',
						symbolSize: 8,
						period: 6,
						loop: true,
					},
					lineStyle: {
						normal: {
							curveness: 0.2,
							color: lineColorOne,
							width: 1,
						}
					},
					data: [{
						coords: [
							[300, 280],
							[400, 150]
						]
					}, {
						coords: [
							[300, 230],
							[400, 150]
						]
					}, {
						coords: [
							[300, 180],
							[400, 150]
						]
					}, {
						coords: [
							[300, 130],
							[400, 150]
						]
					}, {
						coords: [
							[300, 80],
							[400, 150]
						]
					}, {
						coords: [
							[300, 30],
							[400, 150]
						]
					}]
				}]
			};