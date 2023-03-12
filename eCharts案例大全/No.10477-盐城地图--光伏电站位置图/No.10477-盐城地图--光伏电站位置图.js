var uploadedDataURL = "/asset/get/s/data-1565167628683-H2UBzGr37.geojson";
// var uploadedDataURL = "/asset/get/s/data-1565146237296-6kBrnYkc-.geojson";

var mtPath = "path://M515.9 949.5c-10.6 0-16.4-1.3-20.1-5.6-2.2-2.6-227-269.5-287-398.7-21.6-46.3-33.1-96.5-33.1-145.6 0-185 152.6-335.4 340.2-335.4s340.2 151.5 340.2 337.6c0 56.2-10.5 98.7-36.4 146.6-71.4 132.4-281.2 392.3-283.3 394.9-2.5 3.1-7 6.2-19.9 6.2h-0.6z m0-679.3c-72.1 0-130.8 58.7-130.8 130.8s58.7 130.8 130.8 130.8S646.7 473.1 646.7 401c0.1-72.1-58.6-130.8-130.8-130.8z"
$.get(uploadedDataURL, function(nantong) {
    echarts.registerMap('yancheng', nantong);

    // 指定图表的配置项和数据
    var option = {
        tooltip: {
            trigger: 'item',
			backgroundColor: 'rgba(166, 200, 76, 0.82)',
			borderColor: '#FFFFCC',
			showDelay: 0,
			hideDelay: 0,
			enterable: true,
			transitionDuration: 0,
			extraCssText: 'z-index:100',
			formatter: function(params, ticket, callback) {
				//根据业务自己拓展要显示的内容
				var res = "";
				var name = params.name;
				var value = params.value;
				res = "<span style='color:#fff;'>" + value[2] + "</span><br/>" + value[3];
				return res;
			}
        },
        grid: {
            top: 20,
            bottom: 20,
        },
        // backgroundColor:"#2b2b2b",
        geo: {
			map: 'yancheng',
			aspectScale:'1',
			zoom: 1.2,
			label: {
			    normal:{
			        position: [10, 10],
			        show: true,
			        color: 'grey'
			    },
				emphasis: {
					show: false
				}
			},
			roam: true, //是否允许缩放
			itemStyle: {
				normal: {
					color: 'rgba(7,157,233,0.4)', //地图背景色
				    // 	borderColor: '#516a89', //省市边界线00fcff 516a89
				    borderColor: '#ddd',
					borderWidth: 1
				},
				emphasis: {
				    show: false,
				    // 	color: 'rgba(37, 43, 61, .5)' //悬浮背景
				    color:'#3093d8'
				}
			}
		},
        series: [
            {
    	        type: 'graph',
    	        coordinateSystem: 'geo',
    	        zlevel: 2,
    	        rippleEffect: {
    	            brushType: 'stroke'
    	        },
    	        label: {
    	            normal: {
    	                show: true,
    	                position: 'right',
    	                formatter: '{b}'
    	            }
    	        },
    	        symbolSize: 18,
    	        symbolKeepAspect: true,
    	        itemStyle: {
    	        	normal: {
    	        		color: '#545',
		            },
		            emphasis: {
		                areaColor: '#2B91B7'
		            }
    	        },
    	        data: [ 
    	            {
    	                symbol: mtPath,
    	                itemStyle:{
    	                    normal:{color:"#fff"}
                        },
    	               // name: '响水场站',
    	                value: [119.907418,34.425561,'响水场站','2019年6月投入运营']
    	            },
    	            {
    	                symbol: mtPath,
    	                itemStyle:{
    	                    normal:{color:"#fff"}
                        },
    	               // name: '大丰场站',
    	                value: [120.651218,33.18941,'大丰场站','2019年6月投入运营']
    	            },
    	            {
    	                symbol: mtPath,
    	                itemStyle:{
    	                    normal:{color:"#fff"}
                        },
    	               // name: '建湖场站',
    	                value: [119.836568,33.448473,'建湖场站','2019年6月投入运营']
    	            },
    	            {
    	                symbol: mtPath,
    	                itemStyle:{
    	                    normal:{color:"#fff"}
                        },
    	               // name: '盐城',
    	                value: [120.172957,33.360686,'响水场站','2019年6月投入运营']
    	            }
    	        ]
    	    }
        ]
    };

    myChart.on('click', function(param) {

    });
    myChart.setOption(option);

})