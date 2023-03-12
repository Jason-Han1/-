let data={
    xValue:[420,440,460,480,500,520],
    dataValue:[[468,1.22],[482,1.16],[495,1.08],[500,1.39],[515,0.9]]
    // dataValue:[1.22,1.16,1.08,1.39,0.9]
}
let pointColor = ["#EEA12E","#29AAF4","#1BEF91","#177EFB","#B9F219"];
let pointLavel = ['中山','仁济','市六','市一','瑞金'];

option = {
    backgroundColor: '#0e2147',
// 	grid: {
// 	    top: "67",
// 	    left: "32",
// 	    bottom: "15",
// 	    right: "39",
// 	    containLabel: true
// 	},
	legend: {
	    show:false,
		top: '2%'
	},
	xAxis: {
	    name: 'DRG组数',
	    nameLocation: 'end',
	    nameTextStyle: {
	        color: '#5C91C4',
	        fontSize: 12,
	    },
		type: 'value',
		min: 410,
		axisTick: {
		    show: false
		},
		axisLine: {
		    show:true,
		    lineStyle: {
		        color: "#5C91C4"
		    }
		},
		axisLabel: {
		    textStyle: {
		        color: "#5C91C4"
		    },
		    margin: 20,
		    showMinLabel:false,
		},
		splitLine: {
		    show:false
		},
		data: data.xValue
	},
	yAxis: [
	    {
	    name: 'CMI',
	    nameTextStyle:{
	      color: '#5C91C4',
	      fontSize: 14,
	    },
		type: 'value',
        // type: 'category',
		position: 'left',
		min: 0.8,
		interval: 0.2,
		axisLabel: {
		    formatter: '{value}',
		    textStyle: {
				color: '#5C91C4', 
		        fontSize: 12
		    },
		},
		axisLine: { show: false },
		axisTick: { show: false },
		splitLine: {
		    lineStyle: {
		        color: '#5C91C4',
		        type: 'dashed'
		    }
		}
	}],
	series: [{
			name: '配送率',
			type: 'line',
			symbol: 'circle',
			symbolSize: 14,
			lineStyle:{
			  opacity:0,  
			},
			label: {
                show: true,
                // position: 'top',
                textStyle: {
                    color: function (params) {
                      return pointColor[params.dataIndex]
                    },
                    fontSize:16,
                },
                formatter: function(params){
                    return pointLavel[params.dataIndex];
                }
            },
			itemStyle: {
                color:  function (params) {
                  return pointColor[params.dataIndex]
                }
            },
			data: data.dataValue
		}
	]
};