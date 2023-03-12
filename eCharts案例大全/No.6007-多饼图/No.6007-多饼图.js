function chunkOption() {
	//  饼图占位颜色
	let placeHolderStyle = {
		normal: {
			label: { show: false },
			labelLine: { show: false },
			color: 'rgba(0,0,0,0)',
			borderWidth: 0,
		},
		emphasis: { color: 'rgba(0,0,0,0)', borderWidth: 0 },
	};

	// 数据项颜色
	var dataStyle = {
		normal: {
			formatter: '{c}%',
			position: 'center',
			show: true,
			textStyle: { fontSize: '12', fontWeight: 'normal', color: '#fff' },
		},
	};

	function chunkTitle(titles = ['CPU', '内存', '硬盘']) {
		return titles.map((item, index) => {
			return {
				text: item,
				left: +(19 + 30 * index) + '%',
				bottom: 0,
				textAlign: 'center',
				textStyle: { fontWeight: 'normal', fontSize: '12px', color: '#FFF', textAlign: 'center' },
			};
		});
	}

	function chunkSeries(data = []) {
		let series = [];

		data.forEach((item, index) => {
			series.push({
				type: 'pie',
				hoverAnimation: false,
				radius: ['20%', '31%'],
				center: [+(20 + 30 * index) + '%', '50%'],
				startAngle: 225,
				labelLine: {
					normal: { show: false },
				},
				label: {
					normal: { position: 'center',fontSize: '80px' },
				},
				data: [
					{
						value: item,
						itemStyle: {
							normal: {
								color: {
									type: 'linear',
									x: 0,
									y: 0,
									x2: 1,
									y2: 0,
									colorStops: [
										{ offset: 0, color: 'green ' },
										{ offset: 1, color: 'red' },
									],
									global: false,
								},
							},
						},
						label: dataStyle,
					},
					{
						value: 100*1.33333 - item,
						itemStyle: placeHolderStyle,
					},
				],
			});

			series.push({
				type: 'pie',
				hoverAnimation: false,
				radius: ['31%', '33%'],
				center: [+(20 + 30 * index) + '%', '50%'],
				startAngle: 225,
				labelLine: {
					normal: { show: false },
				},
				label: {
					normal: { position: 'center' },
				},
				data: [
					{
						value: 75,
						itemStyle: {
							normal: {
								color: {
									type: 'linear',
									x: 0,
									y: 0,
									x2: 1,
									y2: 0,
									colorStops: [
										{ offset: 0, color: 'red' },
										{ offset: 1, color: 'green' },
									],
									global: false,
								},
							},
						},
					},
					{ value: 25, itemStyle: placeHolderStyle },
				],
			});
		});
		
		return series;
	}

	return {
	    backgroundColor: '#142058',
		title: chunkTitle(),
		series: chunkSeries([20, 30, 100]),
	};
}

option = chunkOption();
console.log(option)
