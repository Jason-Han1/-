	var option = {
	    tooltip: {
	        formatter: "{a} <br/>{b} : {c}%"
	    },
	    series: [{
	        min: 0,
	        max: 100,
	        axisLine: {
	            width: 20,
	            show: true,
	            lineStyle: {
	                width: 30,
	                shadowBlur: 0,
	                color: [
	                    [0.6, '#ed1941'],
	                    [0.8, '#f58220'],
	                    [1, '#1d953f']
	                ]
	            },
	            
	        },
	        name: '健康系统度',
	        type: 'gauge',
	        axisTick: {
	            splitNumber: 30
	        },
	              axisLabel: {
            formatter: function(e) {
                switch (e + "") {
                  case "30":
                        return "不健康";
                    case "70":
                        return "良好";
                    case "100":
                        return "健康";
                    default:
                        return e;
                }
            },
            textStyle: {
                fontSize: 12,
                fontWeight: ""
            }
        },
           title: { //标题
                show: true,
                offsetCenter: [0, "-26%"], // x, y，单位px
                textStyle: {
                    // color: "borderWidth",
                    fontSize: 20 //表盘上的标题文字大小
                }
            },
	        //detail: {formatter:'{value}%'},
	        detail: {
	            formatter: "{value}%",
	            offsetCenter: [0, "60%"],
	            textStyle: {
	                fontSize: 35,
	               // color: "#5BB1EF"
	            }
	        },
	        data: [{
	            value: 90,
	            name: '健康系统度'
	        }]
	    }]
	};