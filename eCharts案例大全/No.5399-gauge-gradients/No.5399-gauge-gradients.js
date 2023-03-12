	/** @type {V2ViewType} */
	var ctx = this||{};
	
	var showData = {
	    name: "百度通过率",
	    text: '30m54s',
	    value: 80.54,
	    unit: "%",
	    rank: 'Top1'
	};
	
	ctx.showData = ctx.showData||showData;
	
	let rate = showData.value / 100;
	
	let activeColor = ['rgba(33,138,255,1)', 'rgba(23,198,255,1)', 'rgba(34,255,222,1)', 'rgba(255,255,255,1)'];
	// 这里在项目基板中要添加ctx.$
	let color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
	        offset: 0,
	        color: activeColor[0], // 0% 处的颜色
	    },
	    {
	        offset: 0.85,
	        color: activeColor[1], // 100% 处的颜色
	    },
	    {
	        offset: 1,
	        color: "rgba(245,249,255,1)", // 100% 处的颜色
	    },
	]);
	let colorSet = [
	    [rate, color],
	    [1, "rgba(0,0,0,0)"],
	];
	let rich = {
	    value: {
	        fontSize: 18,
	        color: "#FFFFFF",
	        fontWeight: "500",
	        fontFamily: 'hanyikaku',
	        padding: [65, 0, 0, 0],
	    },
	    unit: {
	        fontSize: 22,
	        color: "#E5F1FF",
	        fontWeight: "500",
	        padding: [-60, 0, 0, 0],
	    },
	    name: {
	        height: 80,
	        lineHeight: 80,
	        padding: [-40, 0, 0, 0],
	        fontSize: 12,
	        color: "#99C9FF",
	    },
	};
	option = {
	    //   backgroundColor: "#0E1327",
	    series: [{
	        type: "gauge",
	        radius: "57px",
	        startAngle: "222",
	        endAngle: "-42",
	        // splitNumber: 1,
	        pointer: {
	            show: false,
	        },
	        detail: {
	            formatter: [
	                "{name|" + showData.name + "}",
	                "{value|" + showData.text + "}"
	            ].join("\n"),
	            rich: rich,
	            offsetCenter: ["0%", "0%"],
	        },
	        title: {
	            show: false,
	        },
	        axisLine: {
	            show: true,
	            lineStyle: {
	                color: colorSet,
	                width: 10,
	            },
	        },
	        axisTick: {
	            show: false,
	        },
	        splitLine: {
	            show: false,
	        },
	        axisLabel: {
	            show: false,
	        },
	    }, ]
	};
	// return option;
