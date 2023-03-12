	let ctx = this || {};

	var showData = {
	    index: 13,
	    orgName: "吴佩慈(科技路支行)",
	    value: '109',
	    unit: '笔',
	    percent: 80,
	    rank: 1
	}
	ctx.showData = ctx.showData || showData;

	let percent = parseInt(ctx.showData.percent);

	if (percent > 100) {
	    percent = 100
	}
	if (percent < 0) {
	    percent = 0
	}

	option = {
	    //   width: "100%",
	    // backgroundColor: "#04113a",
	    grid: {
	        left: "0",
	        top: "0",
	        bottom: "0"
	    },
	    xAxis: {
	        show: false,
	        type: "value",
	        splitLine: {
	            show: false
	        },
	        axisTick: {
	            show: false
	        },
	        axisLine: {
	            show: false
	        }
	    },
	    yAxis: {
	        type: "category",
	        axisTick: {
	            show: false
	        },
	        axisLine: {
	            show: false
	        },
	        axisLabel: {
	            show: false
	        },
	        // data: ["景德镇"]
	        // data: [showData.name]
	    },
	    series: [{
	            barWidth: 5,
	            z: 10,
	            itemStyle: {
	                //   这里new后面需要添加this.$
	                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
	                        offset: 0,
	                        color: "rgba(28,126,255,1)" // 0% 处的颜色
	                    },
	                    {
	                        offset: 1,
	                        color: "rgba(92,185,255,1)" // 100% 处的颜色
	                    }
	                ]),
	                barBorderRadius: 15
	            },

	            type: "bar",
	            data: [percent]
	        },
	        {
	            type: "bar",
	            barGap: "-100%",
	            barWidth: 5,
	            animation: false,
	            z: -1,
	            itemStyle: {
	                color: "#4C68B3",
	                barBorderRadius: 15
	            },

	            data: [100]
	        }
	    ]
	};

	// return option;