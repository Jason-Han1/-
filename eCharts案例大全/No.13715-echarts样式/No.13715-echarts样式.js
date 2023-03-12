option = {
    color:'#ff9e9e',
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        name:'时间',
        nameTextStyle:{
            color:'#666666',
            fontFamily: "PingFang-SC-Medium",
	        fontSize: 10,
        },
        axisLine:{  
            lineStyle:{  
                color:"#b5b5b5"
            }  
        },
        axisLabel: {
            show: true,
            textStyle: {
                fontFamily: "PingFang-SC-Medium",
            	fontSize: 12,
            	color: "#666666"
            }
        }
    },
    yAxis: {
        type : 'value',
        name:'12123322',
        nameTextStyle:{
            color:'#666666',
            fontFamily: "PingFang-SC-Medium",
	        fontSize: 10,
        },
        axisLine:{  
            lineStyle:{  
                color:"#b5b5b5"
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                fontFamily: "PingFang-SC-Medium",
            	fontSize: 12,
            	color: "#666666"
            }
        },
        splitLine:{  
                show:true  ,
                lineStyle:{
                opacity: 0.4,
	            backgroundColor: "rgba(181, 181, 181, 0.2)"
            }
        }
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {normal:{opacity:0.2}}
    }]
};
