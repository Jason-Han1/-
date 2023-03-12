	var option = {
	    tooltip: {
	        formatter: "{a} <br/>{b} : {c}%"
	    },
	    series: [{
	        min: 100,
	        max: 200,
	        axisLine: {
	            width: 20,
	            show: true,
	            lineStyle: {
	                width: 30,
	                shadowBlur: 0,
	                color: [
	                    [0.2, '#2DC6C8'],
	                    [0.8, '#5AB1EF'],
	                    [1, '#D87A80']
	                ]
	            }
	        },
	        name: '效能异动',
	        type: 'gauge',
	        axisTick: {
	            splitNumber: 30
	        },
	        //detail: {formatter:'{value}%'},
	        detail: {
	            formatter: "{value}%",
	            offsetCenter: [0, "60%"],
	            textStyle: {
	                fontSize: 25,
	                color: "#5BB1EF"
	            }
	        },
	        data: [{
	            value: 180,
	            name: '区教育局'
	        }]
	    }]
	};