var data = [{
			name:"xxx项目",
			count:20
		},{
			name:"xxx项目",
			count:20
		},{
			name:"xxx项目",
			count:20
		},{
			name:"xxx项目",
			count:20
		},{
			name:"xxx项目",
			count:20
		}];
		var scaleData = [];
		var other = 0;
		for(var i in data ){
			scaleData.push({
				name:data[i].name,
				value:data[i].count
			});
		}
		
		var rich = {
		    white: {
		        color: '#ee7',
		        fontSize: 40,
		        align: 'center',
		        padding: [3, 0]
		    }
		};
		var placeHolderStyle = {
		    normal: {
		        label: {
		            show: false
		        },
		        labelLine: {
		            show: false
		        },
		        color: 'rgba(0, 0, 0, 0)',
		        borderColor: 'rgba(0, 0, 0, 0)',
		        borderWidth: 0
		    }
		};
		var data = [];
		var color=['#87CEEB','#4682B4','#48D1CC','#20B2AA']
		for (var i = 0; i < scaleData.length; i++) {
		    data.push({
		        value: scaleData[i].value,
		        name: scaleData[i].name,
		        itemStyle: {
		            normal: {
		            	color:color[i],
		                borderWidth: 5,
		                shadowBlur: 20
		            }
		        }
		    });
		}
		var seriesObj = [{
		    name: '',
		    type: 'pie',
		    clockWise: false,
		    radius: [0, 238],
		    center:['50%','55%'],
		    hoverAnimation: false,
		    emphasis: {
                label: {
                    show: true,
                    fontSize: 30,
                    color:'#fff',
                    fontWeight: 'bold'
                }
            },
		    itemStyle: {
		        normal: {
		            label: {
		                show: false,
		                position: 'outside',
		                color: '#aef',
		                fontSize: 30,
		                formatter: function(params) {
		                    var percent = 0;
		                    var total = 0;
		                    for (var i = 0; i < scaleData.length; i++) {
		                        total += parseInt(scaleData[i].value);
		                    }
		                    percent = ((params.value / total) * 100).toFixed(2);
		                    if(params.name !== '') {
		                    	return params.name + '\n{white|' + '占比' + percent + '%}';
		                    }else {
		                        return '';
		                    }
		                },
		                rich: rich
		            },
		            labelLine: {
		                length:70,
		                length2:60,
		                show: true,
		                color:'#00ffff'
		            }
		        }
		    },
		    data: data
		}];
		option = {
			color:color,
			graphic: [],
		    tooltip: {
		        show: true,
		        textStyle:{
		        	fontSize:30
		        },
		        formatter: '{b}: {c} 个'
		    },
		    legend: {
		        show: false
		    },
		    toolbox: {
		        show: false
		    },
		    series: seriesObj
		}