option = {
				backgroundColor: "rgba(128, 128, 128, 0)",
				title: {
				 text: "测试提交",
				 left: "center",
				 top: "2%"
				},
				tooltip: {
					trigger: "axis",
				},
				legend: {
					data: [
					    "5g总流量",
					    "4g总流量"
					    ],
					bottom: "4%",
					textStyle: {
						fontSize: 10,
						fontStyle: "normal",
						fontWeight: "normal",
					},
					itemWidth: 22,
					itemHeight: 10,
				},
				grid: {
					top: "10%",
					left: "3%",
					right: "5%",
					bottom: "10%",
					containLabel: true,
				},
				xAxis: {
					type: "category",
					splitLine: {
						show: false,
					},
					axisTick: {
						show: false,
					},
					data: [],
					axisLabel: {
						show: true,
						textStyle: {
							fontSize: 10,
						},
					},
				},
				color: ['#F39800', '#3F96FF'],
				yAxis: [
					{
						type: "value",
						axisTick: {
							show: false,
						},
						axisLabel: {
							show: true,
							textStyle: {
								fontSize: 10,
							},
							formatter: "{value}" + '%',
						},
					},
					{
						type: "value",
						axisTick: {
							show: false,
						},
						interval: 20,
						axisLabel: {
							show: false,
							textStyle: {
								fontSize: 10,
							},
						},
					},
				],
				series: [
				    {
				     type: "bar",
      				name: "5g总流量",
      				data: [5,8,10,14],
      				barWidth: "10%",
				    },
				    {
				     type: "bar",
      				name: "4g总流量",
      				data: [15,38,110,114],
      				barWidth: "10%",
				    }
				],
			};
