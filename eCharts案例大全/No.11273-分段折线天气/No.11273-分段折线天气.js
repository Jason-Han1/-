var uploadedDataURL = "/asset/get/s/data-1559207360829-nfdWxJ0Es.json";
console.log(uploadedDataURL)
$.getJSON(uploadedDataURL, function (rawData) {
    console.log(rawData)
});

option = {
        backgroundColor:"#fff",    // 设置整体图表的背景颜色
		tooltip: {
			trigger: 'axis',
			backgroundColor: '#FFFFFF',
			borderColor: '#D9D9D9',
			lineHeight: 17,
			axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
			},
			textStyle: {
				color: '#4d4d4d',
				fontSize: 12,
			},
			extraCssText: 'box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1)',
		},
		
		xAxis: {
		    "axisLine": {
                "lineStyle": {
                    "color": "#eee"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#eee"
                }
            },
			boundaryGap : false,
			data: ['2009/6/13', '2009/6/14', '2009/6/15', '2009/6/16', '2009/6/17', '2009/6/18', '2009/6/19', '2009/6/20'],
			
		},
		yAxis: {
		    "type": "value",
            "name": "(万元)",
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#eee"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#eee",
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": "#eee",
                    "width": 2,
                    type:'dotted' 
                }
            },
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#eee",
                    "width": 2
                }
            }
		},
		dataZoom: [{
            type: 'inside',
            xAxisIndex: 0,
            minSpan: 5
        }, {
            type: 'slider',
            xAxisIndex: 0,
            minSpan: 5,
            height: 20,
            bottom: 15,
            handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '120%'
        }],
		series: [{
			data: [820, 932, 901, 934, 1290, 1330, 1320, 1320],
			type: 'line',
			markArea: {//设置具体区域的背景颜色，选择不同区间 设置图表对应的背景颜色
				silent: true,
				data: [
					[{
						xAxis:'2009/6/13',
						itemStyle:{
							color:'rgba(255,255,255,0.3)'
						}

					}, {
						xAxis:'2009/6/20'
					}],
					[{
						xAxis:'2009/6/15',
						itemStyle:{
							color:'#505765'
						}
					}, {
						xAxis:'2009/6/16'
					}],
					[{
						xAxis:'2009/6/17',
						itemStyle:{
							color:'#f4b9a9'
						}
					}, {
						xAxis:'2009/6/20'
					}],
					[{
						xAxis:'2009/6/18',
						itemStyle:{
							color:'#a5aeb44f'
						}
					}, {
						xAxis:'2009/6/19'
					}]

				]
			}
		}]
	};
