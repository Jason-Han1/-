var data = ['800', '1200', '1000', '840', '1320', '960', '750','800', '900', '1000', 
			'1200', '1102', '1003', '1014','1015', '856', '917', '818', '919', '920',
			'821', '822', '923', '924','825', '926', '827', '828', '929', '830',
			'1031', '1232', '1133', '1034','935', '1036', '937', '1138', '1099', '1040',
			'941', '1042', '1043', '1044','1045', '1046', '1047', '1248', '1149', '1150',
			'951', '952', '1053', '854','1055', '956', '857', '1058'];
			
var seriesData = [];
for (var i = 0; i < data.length; i++) {
	var itemStyle = {};
	if (i > data.length - 4) {
		itemStyle = {
					normal: {
						//柱形图圆角，初始化效果
						barBorderRadius:[3, 3, 0, 0],
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: "#ff8aa6" // 0% 处的颜色
						}, {
							offset: 0.6,
							color: "#fd7b9a" // 60% 处的颜色
						}, {
							offset: 1,
							color: "#f74f77" // 100% 处的颜色
						}], false)
					},
				};
	} else {
		itemStyle = {
					normal: {
						//柱形图圆角，初始化效果
						barBorderRadius:[3, 3, 0, 0],
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: "#8b7dfe" // 0% 处的颜色
						}, {
							offset: 0.6,
							color: "#7b6bf9" // 60% 处的颜色
						}, {
							offset: 1,
							color: "#7565f5" // 100% 处的颜色
						}], false)
					},
				};
	}
	
	seriesData.push({
		value: data[i],
		itemStyle: itemStyle
	})
}
option = {
	color: ['#3398DB'],
		tooltip: {
			trigger: 'axis',
			axisPointer: {            // 坐标轴指示器，坐标轴触发有效
				type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true,
			
		},
		xAxis: [
			{
				name: '年份',
				color:'#999999',
				type: 'category',
				data: ['1', '2', '3', '4', '5', '6', '7','8', '9', '10', 
				'11', '12', '13', '14','15', '16', '17', '18', '19', '20',
				'21', '22', '23', '24','25', '26', '27', '28', '29', '30',
				'31', '32', '33', '34','35', '36', '37', '38', '99', '40',
				'41', '42', '43', '44','45', '46', '47', '48', '49', '50',
				'51', '52', '53', '54','55', '56', '57', '58'],
                axisTick:{       //x轴刻度线
                  show:false,
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                      color:'#999999'  
                    }
                },
                axisLine: {
                    lineStyle: {
                    show:false,
                    color: '#999', // 颜色
                    }
                }
			}
		],
		yAxis: [
			{
				type: 'value',
				name: 'm³/s',
				min: 400,
				max: 1400,
    			axisTick:{       //Y轴刻度线
                    show:false,
                    },
                axisLabel: {
                    show: true,
                    textStyle: {
                      color:'#999999'  
                    }
                },
                axisLine: {
                    lineStyle: {
                    show:false,
                    color: '#999', // 颜色
                    }
                }
				
			}
		],
		series: [
		{
		    name: '历史径流',
			type: 'bar',
			barWidth: '60%',
			data: seriesData,
		}
	]
};