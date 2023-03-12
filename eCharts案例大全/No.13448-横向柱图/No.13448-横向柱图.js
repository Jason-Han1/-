var option = {
    backgroundColor: '#23243a',
	grid: {
		left: '6%',
		right: '1%',
		bottom: '10%',
		top:30,
	},
    legend: {//图例组件，颜色和名字
        right:10,
		top:0,
		itemGap: 16,
		itemWidth: 18,
		itemHeight: 10,
        textStyle: {
			color: '#a8aab0',
			fontStyle: 'normal',
			fontFamily: '微软雅黑',
			fontSize: 12,            
        }
    },
	yAxis: [
		{
			type: 'category',
			boundaryGap: true,//坐标轴两边留白
			data: ['7:00', '8:00', '9:00'],
			axisLabel: { 
			    interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
				margin:20,
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 12,
				}
			},
			axisTick:{//坐标轴刻度相关设置。
				show: true,
			},
			axisLine:{
			    show: false
			},
			splitLine: { //坐标轴在 grid 区域中的分隔线。
				show: false,
			}
		}
	],
	xAxis: [
		{
			type: 'value',
			splitNumber: 5,
			axisLabel: {
				show: true,
			},
			axisLine:{
				show: false
			},
			axisTick:{
				show: false
			},
			splitLine: {
				show: false
			}

		}
	],
    series : [
        {
            name:'流入',
            type:'bar',
            data:[4.9, 7.3, 9.2],
            barWidth: 10,
            barGap:0,//柱间距离
            label: {//图形上的文本标签
                normal: {
                   show: true,
                   position: 'right',
                   textStyle: {
                       color: '#a8aab0',
                       fontStyle: 'normal',
                       fontFamily: '微软雅黑',
                       fontSize: 12,   
                   },
                },
            },
            itemStyle: {//图形样式
                normal: {
					barBorderRadius: 5,
					color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 1, color: 'rgba(127, 128, 225, 0.7)'
                    }, {
                        offset: 0, color: 'rgba(104, 253, 255, 0.7)'
                    }], false),
                },
            },
            zlevel:9
        },
        {
            name:'流出',
            type:'bar',
            data:[2.9, 5, 4.4],
            barWidth: 10,
            barGap:0.2,//柱间距离
            label: {//图形上的文本标签
                normal: {
                   show: true,
                   position: 'right',
                   textStyle: {
                       color: '#a8aab0',
                       fontStyle: 'normal',
                       fontFamily: '微软雅黑',
                       fontSize: 12,   
                   },
                },
            },
            itemStyle: {//图形样式
                normal: {
					barBorderRadius: 5,
					color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 1, color: 'rgba(127, 128, 225, 0.7)'
                    }, {
                        offset: 0, color: 'rgba(253, 200, 106, 0.7)'
                    }], false),
                },
            },
            zlevel:9
        },
        {
            "type": "pictorialBar",
            symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABMUlEQVRoQ+2aoU4DYRCEZ3uSF2l7fRkMmub6AKCrcHV9AdIQFBKPxiF7oYfBIbAIkia9aSBpgYQQuhlxm+zvZ7PzfXJ/GyzqO7R2/jgZLhHw2WBRk0QL4Joopk3Vf4nU47PAbmEC7yDmRDFrqv5bhCI/CnwV4atZ76J3xMv6pFx3ucivBfZFyGcYpqtxeQOzvakuFfqzwLciDyxw1pyO7ru0/Mcu/yqwW3rT2vHTZHjbpRIHFSAxXlXlVRYQEkgDQpiuUWnAhU0YSgNCmK5RacCFTRhKA0KYrlFpwIVNGEoDQpiuUWnAhU0YSgNCmK5RacCFTRhKA0KYrlFpwIVNGEoDQpiuUWnAhU0YSgNCmK5RacCFTRg6yEDYExPJmEc+Rj2zEkEP3WG/GkT/7BH6u80WK8dsQAaGofUAAAAASUVORK5CYII=',
            "symbolSize": [30, 30],
            symbolRotate:180,
            "symbolOffset": [
                -36,
                0
            ],
            "symbolBoundingData": 300,
            "data": [1,2,3],
            zlevel:100,
            z:100
        }
    ]
};