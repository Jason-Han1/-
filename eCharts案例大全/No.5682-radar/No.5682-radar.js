option = {
	    color: ["rgba(0,183,238, 1)", "rgba(86,199,60, 1)"],
	    tooltip: {
	        show: true,
	        trigger: "item"
	    },
	    legend: {
	        show: false,
	        icon: "circle",
	        right: '20%',
	        top: 'center',
	        orient: "vertical",
	        itemGap: 30,
	        textStyle: {
	            fontSize: 15,
	            color: "#000"
	        },
	    },
	    radar: {
	        center: ["50%", "50%"],
	        radius: "70%",
	        startAngle: 90,
	        splitNumber: 4,
	        shape: "circle",
	        splitArea: {
	            areaStyle: {
	                color: ["transparent"]
	            }
	        },
	        axisLabel: {
	            show: false,
	            fontSize: 20,
	            color: "#000",
	            fontStyle: "normal",
	            fontWeight: "normal"
	        },
	        axisLine: {
	            show: true,
	            lineStyle: {
	                type:"dashed",
	                color: "#000"
	            }
	        },
	        splitLine: {
	            show: true,
	            lineStyle: {
	                type:"dashed",
	                color: "#000"
	            }
	        },
	        indicator: [{
	            name: "小学",
	            max: 88
	        }, {
	            name: "中学",
	            max: 88
	        }, {
	            name: "高中",
	            max: 88
	        }, {
	            name: "大学",
	            max: 88
	        }]
	    },
	    series: [{
	        name: "2016年",
	        type: "radar",
	        symbol: "circle",
	        symbolSize: 10,
	        areaStyle: {
	            normal: {
	                color: "rgba(86,199,60, 0.4)"
	            }
	        },
	        itemStyle:{
	            color:'rgba(86,199,60, 1)',
	            borderColor:'rgba(86,199,60, 0.3)',
	            borderWidth:10,
	        },
	        lineStyle: {
	            normal: {
	                color: "rgba(86,199,60, 1)",
	                width: 2
	            }
	        },
	        data: [
	            [80, 50, 55, 80, 50, 80]
	        ]
	    }]
	};