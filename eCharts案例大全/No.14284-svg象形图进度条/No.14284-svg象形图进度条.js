var pathSymbols = {
				jiankong: 'path://M16.3471038,3.78050854 C14.2007804,2.895743 12.2082458,0 9.99995428,0 C7.79166276,0 5.79917391,2.895743 3.65285051,3.78048549 C1.20994416,4.78755312 0,4.90063531 0,5.61121371 C0,6.20386948 1.08043055,7.25989484 1.42958698,7.68799827 C1.7787434,8.11610171 1.7193811,8.80097962 1.74189626,9.09276669 C4.70182841,10.2421897 10,10.3082504 10,10.3082504 C10,10.3082504 15.2981487,10.2421897 18.2581266,9.09276669 C18.2806418,8.80095657 18.2212795,8.11605561 18.5704359,7.68797522 C18.9195923,7.25989484 20,6.20386948 20,5.61121371 C20,4.90063531 18.7900787,4.78753007 16.3471266,3.78048549 L16.3471038,3.78050854 Z M12.0273473,6.29224231 C11.7521824,7.8173997 10.9451339,9.09910538 9.99997714,9.09910538 C9.1908257,9.09910538 8.09880613,7.83719945 7.97276694,6.29224231 C7.83420156,4.59398113 8.71581296,3.48540229 9.99997714,3.48540229 C11.2841413,3.48540229 12.3251875,4.64116401 12.0273473,6.29224231 Z M2.15740955,10.7911892 C2.32751901,12.5852914 5.77412151,16 10.0017144,16 C14.2306787,16 17.6781269,12.5831016 17.8461792,10.7894835 C16.1809945,11.5904632 13.2890421,12.1204696 10,12.1204696 C6.71338086,12.1204696 3.82318856,11.5912468 2.15740955,10.7911892 L2.15740955,10.7911892 Z'
			
			};
var maxData = 100;
var curData=50;
var curColor = "#FF6FA6"

var option = {
            backgroundColor:"#000",
				yAxis: {
					data: ['使用人数'],
					inverse: true,
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						show: false
					}
				},
				xAxis: {
					max: maxData,
					splitLine: {
						show: false
					},
					axisLabel: {
						show: false
					},
					axisTick: {
						show: false
					},
					axisLine: {
						show: false
					}
				},
				series: [{
						type: 'pictorialBar',
						symbol: pathSymbols.jiankong,
						symbolRepeat: 'fixed',
						symbolClip: true,
						symbolSize: ['40px', '40px'],
						symbolBoundingData: maxData,
						itemStyle: {
							normal: {
								color: curColor,
								opacity: 0.1,
							}
						},
						data: [maxData],
						z: 10
					},
					{
						type: 'pictorialBar',
						symbol: pathSymbols.jiankong,
						symbolRepeat: 'fixed',
						symbolClip: true,
						symbolSize: ['40px', '40px'],
						symbolBoundingData: maxData,
						itemStyle: {
							normal: {
								color: curColor,
							}
						},
						label: {
							normal: {
								show: false,
								formatter: function(params) {
									return params.data.name;
								},
								position: 'outside',
								offset: [-80, 0],
								textStyle: {
									fontSize: 35,
									color: curColor,
									fontFamily: 'Agency FB'
								}
							}
						},
						data: [curData],
						z: 5
					}
				]
			};