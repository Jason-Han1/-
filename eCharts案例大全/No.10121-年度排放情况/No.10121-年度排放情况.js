option ={
    backgroundColor:"#fff",
		grid: {
			left: '30',
			right: '0',
			top: '64',
			bottom: '24'
		},
		tooltip: {
			trigger: 'item',
			confine: true,
			formatter: "{b}"+'年'+" : {c}"+'万吨'
		},
		xAxis: {
			data: ['2017', '2018', '2019'],
			axisLabel: {
			    show:false
			},
			axisTick: {
				show: false
			},
			
			axisLine: {
				show: false
			},
			z: 10
		},
		yAxis: {
		    axisLabel: {
			    show:false
			},
			splitLine: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			}
		},
		series: [{
            "name": "",
            type: 'pictorialBar',
            symbolSize: [45, 20],
            symbolOffset: [0, -8],
            symbolPosition: 'end',
            z: 12,
            "label": {
                "normal": {
                    "show": false
                }
            },
            color: "#FFF",
            data:  [20,30,40]
        },{
            "name": "",
            type: 'pictorialBar',
            symbolSize: [45, 20],
            symbolOffset: [0, -9],
            symbolPosition: 'end',
            z: 13,
            "label": {
                "normal": {
                    "show": false
                }
            },
            itemStyle: {
				color: (params) => {
                    let colors = ['#4150d8', '#28bf7e', '#ed7c2f', '#f2a93b', '#f9cf36', '#4a5bdc', '#4cd698', '#f4914e', '#fcb75b', '#ffe180', '#b6c2ff', '#96edc1']
                    return colors[params.dataIndex]
                }
			},
            data:  [20,30,40]
        },{
			type: 'bar',
			barWidth: '45',
			label:{
			    show:true,
			    position:'top',
			    color:'#3a3a3a',
			    fontSize:15,
			    fontWeight:'bold'
			},
			itemStyle: {
				barBorderRadius: [0, 0, 22, 22],
				color: (params) => {
                    let colors = ['#4150d8', '#28bf7e', '#ed7c2f', '#f2a93b', '#f9cf36', '#4a5bdc', '#4cd698', '#f4914e', '#fcb75b', '#ffe180', '#b6c2ff', '#96edc1']
                    return colors[params.dataIndex]
                }
			},
			data: [20,30,40]
		}]
	};