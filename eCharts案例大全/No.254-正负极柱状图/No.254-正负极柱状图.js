option = {
    color: ["#4D94F1"],
		grid: {
			left: "10%",
			right: "10%",
			top: "2%",
			bottom: "10%",
			containLabel: true,
		},
		xAxis: [
			{
				type: "category",
				data: ["0分以下", "0-4分", "5-9分", "10-14分", "15分以上"],
				// data: echelonchart.xAxis,
				boundaryGap: true,
				axisLine: {
					show: true,
				},
				axisLabel: {
					interval: 0,
					margin: 16,
					color: "#666666",
					fontSize: 12,
				},
				axisTick: {
					show: false,
				},
			},
		],
		yAxis: [
			{
				type: "value",
				show: false,
			},
		],
		series: [
			{
				name: "班级梯队",
				type: "bar",
				barWidth: "50%",
				// data: echelonchart.yAxis,
				data: [
					// 配置单独的孩子所在的那一项的具体样式
					{
						value: 2,
						label: {
							show: true,
							position: "top",
							color: "#FF6900",
							formatter({ value }) {
								return `${value}人`;
							},
						},
						itemStyle: {
							color: "#FF6900",
							borderWidth: 2,
							borderType: "solid",
							borderColor: "#FF6900",
						},
					},
					{
						value: -8,
						label: {
							show: true,
							position: "bottom",
							color: "#91CC75",
							formatter({ value }) {
								return `${value}人`;
							},
						},
						itemStyle: {
							color: "#91CC75",
							borderWidth: 2,
							borderType: "solid",
							borderColor: "#91CC75",
							borderRadius: [0, 0, 50, 50],
						},
					},
					{
						value: 10,
						label: {
							show: true,
							position: "top",
							color: "#FF6900",
							formatter({ value }) {
								return `${value}人`;
							},
						},
						itemStyle: {
							color: "#FF6900",
							borderWidth: 2,
							borderType: "solid",
							borderColor: "#FF6900",
						},
					},
					6,
					0,
				], 
				
				// radius: ["85%", "100%"],
				avoidLabelOverlap: false,
				hoverAnimation: false,
			    
			    // 统一设置其他的 未单独设置样式的 数据柱状图样式
				itemStyle: {
					borderRadius: [50, 50, 0, 0],
					// 通过描边模拟 数据为0时 也显示一点点高度
					borderWidth: 2,
					borderType: "solid",
					borderColor: "#4D94F1",
				},
				label: {
					show: true,
					position: "top",
					color: "#4D94F1",
					formatter({ value }) {
						return `${value}人`;
					},
				},
                
				labelLine: {
					show: false,
				},
			},
		],
		
}