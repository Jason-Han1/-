option = {
    title: {
        text: '一周营业额',
        textStyle:{
            color:'#fff', 
        },
    },
    backgroundColor:'#141845',
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
        axisTick: {
            alignWithLabel: true
        },
        axisLine:{lineStyle:{color:"#fff"}}
    }],
    yAxis: [{
        type: 'value',
        axisLine:{lineStyle:{color:"#fff"}}
    }],
    series: [{
        name: '营业额',
        type: 'bar',
        barWidth: '60%',
        data: [490, 400, 450, 300, 200, 100, 50]
    }],
};
// <!DOCTYPE html>
// <html lang="zh">

// 	<head>
// 		<meta charset="UTF-8" />
// 		<title>Document</title>
// 		<style>
// 			#box {
// 				width: 400px;
// 				height: 400px;
// 			}
// 		</style>
// 	</head>

// 	<body>
// 		<div id="box"></div>
// 		<button>返回</button>
// 		<script src="js/common/jquery.min.js"></script>
// 		<script src="js/common/echarts.js"></script>
// 		<script>
// 			show1();

// 			function show1() {
// 				var box = echarts.init($("#box")[0]);
// 				option = {
// 					color: ['#3398DB'],
// 					tooltip: {
// 						trigger: 'axis',
// 						axisPointer: { // 坐标轴指示器，坐标轴触发有效
// 							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
// 						}
// 					},
// 					grid: {
// 						left: '3%',
// 						right: '4%',
// 						bottom: '3%',
// 						containLabel: true
// 					},
// 					xAxis: [{
// 						type: 'category',
// 						data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
// 						axisTick: {
// 							alignWithLabel: true
// 						}
// 					}],
// 					yAxis: [{
// 						type: 'value'
// 					}],
// 					series: [{
// 						name: '营业额',
// 						type: 'bar',
// 						barWidth: '60%',
// 						data: [490, 400, 450, 300, 200, 100, 50]
// 					}],
// 				};
// 				box.setOption(option, true);
// 				box.on('click', function(params) {
// 					console.log(params.name);
// 					//					box.clear();清除画布
// 					if(params.name == "星期一") {
// 						option.xAxis[0].data = ['桌子', '椅子', '塑料凳']
// 						option.series[0].data = ['300', '100', '90']
// 					}
// 					box.setOption(option, true);
// 				})

// 			}

// 			$("body").on("click", "button", function() {
// 				show1();
// 			})
// 		</script>
// 	</body>

// </html>