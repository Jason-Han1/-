var  colors=[
         "#166eff",
            "#69a0fd",
            "#9ec2ff",
            "#c4daff",
            "#c8cbd2",
            "#b0b7c4",
            "#98a4b9",
            "#778398",
            "#ffc0a9",
            "#ff9898"];
var names=['中标', '落标', '未开标', '评标中']
option = {
    backgroundColor:'#fff',
		legend: {
			top: 25,
			right:10,
			data:names,
			textStyle: { //图例文字的样式
				color: '#333',
				fontSize: 14
			}
		},
		 tooltip: {//提示框，可以在全局也可以在
            trigger: 'item',  //提示框的样式
            formatter: "{b}: {c} ({d}%)",
            color:'rgba(36,37,41,0.8)', //提示框的背景色
            textStyle:{ //提示的字体样式
                color:"#fff",
            }
        },
		series: [{
			type: 'pie',
			radius: '65%',
			center: ['50%', '63%'],
			label: { //饼图图形上的文本标签
				normal: {
					show: true,
					textStyle: {
						fontWeight: 700,
						fontSize: 13 //文字的字体大小
					},
					formatter: '{b}',
				}
			},
			data: [{
				value: 10,
				name: names[0],
				itemStyle: {
					normal: {
						color: colors[0]
					}
				}
			}, {
				value: 32,
				name: names[1],
				itemStyle: {
					normal: {
						color:  colors[1]
					}
				}
			}, {
				value: 10,
				name: names[2],
				itemStyle: {
					normal: {
						color:  colors[2]
					}
				}
			}, {
				value: 1,
				name: names[3],
				itemStyle: {
					normal: {
						color:  colors[3]
					}
				}
			}]
		}]
};