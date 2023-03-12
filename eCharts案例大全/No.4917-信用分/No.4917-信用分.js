option = {
    series: [{
        name: '信用评分',
        type: 'gauge',
        detail: {
            color: '#33CC33',
            fontSize: 65,
            fontWeight: 'normal',
            offsetCenter: [0, '-20%']
        },
        data: [{
            value: 720,
            name: '信用良好'
        }],
        pointer: {
	    	show: true
	    },
	    title: {
	        offsetCenter: [0, '30%'],
	        fontSize: 25,
	        color: '#33CC33'
	    },
	    min:0,
        max:1000,
        splitNumber: 10,
        axisLine: {
            show: true,
            lineStyle: {
                color: [
                    [1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0.1,
                            color: "#E43F3D"
                        },
                        {
                            offset: 0.15,
                            color: "#E98E2C"
                        },
                        {
                            offset: 0.2,
                            color: "#DDBD4D"
                        },
                        {
                            offset: 0.8,
                            color: "#7CBB55"
                        },
                        {
                            offset: 1,
                            color: "#9CD6CE"
                        }
                    ])]
                ]

            }
        },
        axisLabel: {
	    	formatter: function(e) {
                switch (e + "") {
                    case "100":
                        return "极差";
                    case "300":
                        return "较差";
                    case "500":
                        return "一般";
                    case "700":
                        return "良好";
                    case "900":
                        return "优秀";
                    default:
                        return e;
                }
            },
	        textStyle: {
	            fontSize: 15
	        }
	    }

    }]
};

