 option = {
		color: ['#2ecc71', '#35a2ff', ],
			title: {
			text: '识别任务覆盖率',
			left: '5%',
			top: '2%',
			textStyle: {
				fontWeight: 600,
				fontSize: 14,
				lineHeight: 26,
			}
		},
		legend: {
			show: true,
//			orient: 'vertical',
			left: 'center',
			bottom: '0',
			itemGap: 20,
			icon: 'circle',
			itemWidth: 10,
			itemHeight: 10,
			formatter:function(params){
			    console.log(params);
			}
			
// 			data: ['未覆盖\t\t\t\t\t10%', '已覆盖\t\t\t\t\t90%', ]
		},
		series: [{
			type: 'pie',
			center: ['50%', '50%'],
			radius: ['42%', '62%'],
			label: {
				normal: {
					show: false,
				}
			},
			itemStyle: {
				normal: {
					borderColor: '#fff',
					borderWidth: 2,
				}
			},
			data: [{
				value: 10,
				name: '未覆盖\t\t\t\t\t10%',

			}, {
				value: 90,
				name: '已覆盖\t\t\t\t\t90%',
			}, {
			

			}, ]
		}]
	};