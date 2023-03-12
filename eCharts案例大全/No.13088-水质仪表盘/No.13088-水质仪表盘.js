option = {
        backgroundColor: 'white',
		title : {
			top : 5,
			left : 'center',
			textStyle : {
				color : '#000'
			}
		},
		toolbox :{"feature":{"saveAsImage":{"show":true}},"top":10,"left":"right"},
		tooltip : {
			show : true,
			formatter : "{c}%",
			backgroundColor : '#F7F9FB',
			borderColor : '#92DAFF',
			borderWidth : '1px',
			textStyle : {
				color : 'black'
			}
		},
		series : [ {
			name : '达标率',
			type : 'gauge',
			max : 100,
			radius : '75%', //图表尺寸
			center : [ "50%", "45%" ],
			axisLine : {
				show : true,
				lineStyle : {
					width : 15,
					shadowColor : 'rgba(0,0,0,0.4)',
					shadowOffsetY : 10,
					shadowBlur : 10,
					color : [ [ 0.3, '#DD3F36' ], [ 0.7, '#FAE521' ],
							[ 1, '#37B70C' ] ]
				}
			},
			axisTick : {
				show : false,
				splitNumber : 10
			},
			splitLine : {
				show : true,
				length : 18,
				lineStyle : {
					color : 'rgba(0,0,0,0.6)'
				}
			},
			axisLabel : {

				distance : 5,
				textStyle : {
					color : "#000",
					fontSize : 10,
				},
				formatter : function(e) {
					return e
				}
			},
			pointer : {
				show : true,
				length : '75%',
				width : 4
			},
			detail : { //指针评价
				show : true,
				offsetCenter : [ 0, '22%' ],
				formatter : function(e) {
					return e + '%'
				},
				width : 56,
				height : 20,
				textStyle : {
					fontSize : 13,
					color : "black",
					fontWeight : 'bolder'
				},
				backgroundColor : '#A9DAFF',
				borderWidth : 2,
				borderColor : '#45E4D0',
				shadowColor : 'black', //默认透明
				shadowBlur : 5

			},
			title : {
				textStyle : {
					fontSize : 16,
					fontWeight : 'bolder',
					fontStyle : 'normal',
					color : "#000"
				},
				offsetCenter : [ 0, '75%' ]
			},
			data : [ {
				name : name,
				value : parseInt(Math.random()*100)
			} ]
			
		} ]
	};