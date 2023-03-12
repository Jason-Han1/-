option = {
	    color: ["rgba(0,183,238, 1)", "rgba(86,199,60, 1)"],
	    tooltip: {
	        show: true,
	        trigger: "item"
	    },
	    legend: {
	        show: true,
	        icon: "circle",
	        right: '20%',
	        top: 'center',
	        orient: "vertical",
	        itemGap: 30,
	        textStyle: {
	            fontSize: 15,
	            color: "#000"
	        },
	        data: ["2016年", "2017年"]
	    },
	    radar: {
	        center: ["35%", "50%"],
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
	            name: "三无、五保",
	            max: 88
	        }, {
	            name: "低保",
	            max: 88
	        }, {
	            name: "残疾",
	            max: 88
	        }, {
	            name: "失独",
	            max: 88
	        }, {
	            name: "高龄",
	            max: 88
	        }, {
	            name: "突出贡献",
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
	    }, {
	        name: "2017年",
	        type: "radar",
	        symbol: "circle",
	        symbolSize: 10,
	        itemStyle: {
	            normal: {
	                color:'rgba(0,183,238, 1)',
	                borderColor: "rgba(0,183,238, 0.4)",
	                borderWidth: 10
	            }
	        },
	        areaStyle: {
	            normal: {
	                "color": "rgba(0,183,238, 1)"
	            }
	        },
	        lineStyle: {
	            normal: {
	                color: "rgba(0,183,238, 1)",
	                width: 2,
	            }
	        },
	        data: [
	            [60, 60, 65, 60, 70, 40]
	        ]
	    }]
	};