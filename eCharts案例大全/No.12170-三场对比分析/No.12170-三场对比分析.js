 var count = 0;
        var scale = 1;
        var echartDatas = [{
        	value: 30,
            name: '西安', 
            selected:true
        }, {
            value: 35,
            name: '西宁'
        }, {
            value: 35,
            name: '银川'
        }
         ];
        var saleData = [{
        	value: 70,
            name: '西安', 
            selected:true
        }, {
            value: 35,
            name: '西宁'
        }, {
            value: 35,
            name: '银川'
        }
         ]
        var echartData = [{
            value: 10,
            name: '1其他'
        }, {
            value: 20,
            name: '1航材'
        }, {
            value: 15,
            name: '1果蔬'
        }, {
            value: 15,
            name: '1电子产品'
        }, {
            value: 30,
            name: '1活动物'
        }, {
            value: 10,
            name: '1危险品'
        }]
        var echartData2 = [{
            value: 10,
            name: '2其他'
        }, {
            value: 20,
            name: '2航材'
        }, {
            value: 15,
            name: '2果蔬'
        }, {
            value: 15,
            name: '2电子产品'
        }, {
            value: 30,
            name: '2活动物'
        }, {
            value: 10,
            name: '2危险品'
        }]
        var echartData3 = [{
            value: 10,
            name: '3其他'
        }, {
            value: 20,
            name: '3航材'
        }, {
            value: 15,
            name: '3果蔬'
        }, {
            value: 15,
            name: '3电子产品'
        }, {
            value: 30,
            name: '3活动物'
        }, {
            value: 10,
            name: '3危险品'
        }];
        var airportData1 = [{
            value: 10,
            name: '1其他'
        }, {
            value: 20,
            name: '1南航'
        }, {
            value: 15,
            name: '1东航'
        }, {
            value: 15,
            name: '1深航'
        }, {
            value: 30,
            name: '1海航'
        }, {
            value: 10,
            name: '1国航'
        }];
        var airportData2 = [{
            value: 10,
            name: '2其他'
        }, {
            value: 20,
            name: '2南航'
        }, {
            value: 15,
            name: '2东航'
        }, {
            value: 15,
            name: '2深航'
        }, {
            value: 30,
            name: '2海航'
        }, {
            value: 10,
            name: '2国航'
        }];
        var airportData3 = [{
            value: 10,
            name: '3其他'
        }, {
            value: 20,
            name: '3南航'
        }, {
            value: 15,
            name: '3东航'
        }, {
            value: 15,
            name: '3深航'
        }, {
            value: 30,
            name: '3海航'
        }, {
            value: 10,
            name: '3国航'
        }]
        var legendData = [{
            name: '三场地面处理货对比'
        }, {
            name: '三场销售运单对比'
        }]
        var rich = {
            yellow: {
                color: "#ffc72b",
                fontSize: 10 * scale,
                padding: [5, 4],
                align: 'center'
            },
            total: {
                color: "#ffc72b",
                fontSize: 40 * scale,
                align: 'center'
            },
            white: {
                color: "#fff",
                align: 'center',
                fontSize: 10 * scale,
                padding: [5, 0]
            },
            blue: {
                color: '#49dff0',
                fontSize: 16 * scale,
                align: 'center'
            }
        }
       
        // 指定图表的配置项和数据
        var option = {
        	     backgroundColor: '#3F0E4C',
        	     title: [{
        	        text:'三场对比分析',
        	        left:'left',
        	        top:'0%',
        	        padding:[24,0],
        	        textStyle:{
        	            color:'#fff',
        	            fontSize:18*scale,
        	            align:'center'
        	        }
        	    }, {
        	        text:'三场地面处理货对比',
        	        left:'36%',
        	        top:'42%',
        	        padding:[24,0],
        	        textStyle:{
        	            color:'#fff',
        	            fontSize:12*scale,
        	            align:'center'
        	        }
        	    },{
        	        text:'三场销售运单对比',
        	        left:'39%',
        	        top:'90%',
        	        padding:[24,0],
        	        textStyle:{
        	            color:'#fff',
        	            fontSize:12*scale,
        	            align:'center'
        	        }
        	    }],
        	    series: [{
        	        name: '三场占比',
        	        type: 'pie',
        	        selectedMode: 'single',
        	        center:['50%','26%'],
        	        radius: ['0%', '15%'],
        	        hoverAnimation: false,
        	        color: ['#c487ee', '#deb140' , '#49dff0'],
        	        emphasis:{
        	        	
        	        },
        	        label: {
        	            normal: {
        	                formatter: function(params, ticket, callback) {
        	                    console.log(params.name)
        	                    return  params.name + params.value + '%';
        	                },
        	                color: "black",
        	                fontSize: 10 * scale,
        	                position: 'inner'
        	            },
        	        },
        	        data: echartDatas
        	    },{
        	        name: '品名',
        	        type: 'pie',
        	        center:['50%','26%'],
        	        radius: ['25%', '35%'],
        	        hoverAnimation: false,
        	        color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
        	        label: {
        	            normal: {
        	                formatter: function(params, ticket, callback) {
        	                	return  params.name +'\n'+ params.value + '%';
        	                },
        	                color: "black",
        	                fontSize: 10 * scale,
        	                position: 'inner'
        	            },
        	        },
        	        data: echartData
        	    },
        	    
        	    
        	    {
        	        name: '三场占比',
        	        type: 'pie',
        	        selectedMode: 'single',
        	        center:['50%','74%'],
        	        radius: ['0%', '15%'],
        	        hoverAnimation: false,
        	        color: ['#c487ee', '#deb140' , '#49dff0'/*, '#034079', '#6f81da', '#00ffb4' */],
        	        label: {
        	            normal: {
        	                formatter: function(params, ticket, callback) {
        	                    console.log(params.name)
        	                    return  params.name + params.value + '%';
        	                },
        	                color: "black",
        	                fontSize: 10 * scale,
        	                position: 'inner'
        	            },
        	        },
        	        data: saleData
        	    },{
        	        name: '品名',
        	        type: 'pie',
        	        center:['50%','74%'],
        	        radius: ['25%', '35%'],
        	        hoverAnimation: false,
        	        color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
        	        label: {
        	            normal: {
        	                formatter: function(params, ticket, callback) {
        	                	return  params.name +'\n'+ params.value + '%';
        	                },
        	                color: "black",
        	                fontSize: 10 * scale,
        	                position: 'inner'
        	            },
        	        },
        	        data: airportData1
        	    }
        	   ]
        	};
        setInterval(function() {
            var r = count % echartDatas.length;
            option.series[0].data[r].selected = true;
            count++;
            var s = count % echartDatas.length;
            option.series[0].data[s].selected = false;
            myChart.setOption(option, true);
        }, 2000);
        setInterval(function() {
        	if(option.series[0].data[0].selected){
        		option.series[1].data=echartData;
        	}else if(option.series[0].data[1].selected){
        		option.series[1].data=echartData2;
        	}else{
        		option.series[1].data=echartData3;
        	}
        },2000);
        setInterval(function() {
            var r = count % saleData.length;
            option.series[2].data[r].selected = true;
            count++;
            var s = count % saleData.length;
            option.series[2].data[s].selected = false;
            myChart.setOption(option, true);
        }, 2000);
        setInterval(function() {
        	if(option.series[0].data[0].selected){
        		option.series[3].data=airportData1;
        	}else if(option.series[0].data[1].selected){
        		option.series[3].data=airportData2;
        	}else{
        		option.series[3].data=airportData3;
        	}
        },2000) 