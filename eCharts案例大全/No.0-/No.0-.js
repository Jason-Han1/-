var uploadedDataURL = "/asset/get/s/data-1641348469450-lnHzw8_eG.png";

var uploadedDataURL1 = "/asset/get/s/data-1641347891384-dznNRXRza.png";

var uploadedDataURL2 = "/asset/get/s/data-1641347883453-EYUAHtC5O.png";

	let erArr = [{
	    name: '计生办1',
	    times: 2,
	    type:2
	}, {
	    name: '计生办2',
	    times: 2,
	    type:2
	}, {
	    name: '计生办3',
	    times: 2,
	    type:2
	}, {
	    name: '计生办4',
	    times: 2,
	    type:2
	}, {
	    name: '计生办5',
	    times: 2,
	    type:2
	}, {
	    name: '计生办6',
	    times: 2,
	    type:2
	}, {
	    name: '计生办7',
	    times: 2,
	    type:2
	}, {
	    name: '计生办8',
	    times:2,
	    type:2
	},{
	    name: '计生办9',
	    times: 2,
	    type:2
	}];
	let sumTimes = 0;
	sumTimes = erArr.reduce(function(prev,next){
		
	      return prev + next.times;
	    },0)
	let color = ['#ffffff', '#36fff6', 'rgba(91, 84, 255, 1)', '#67f95f'];
	let oneArr = [{
	    name: '数据中心',
	    times: sumTimes,
	    symbol: 'image://'+uploadedDataURL2,
	    symbolSize: 198,
	    color:"#ffffff",
	    itemStyle: {
	        color: {
	            type: 'linear',
	            x: 0,
	            y: 0,
	            x2: 0,
	            y2: 1,
	            colorStops: [{
	                offset: 0,
	                color: '#ffe93a' // 0% 处的颜色
	            }, {
	                offset: 1,
	                color: '#36fff6' // 100% 处的颜色
	            }],
	            global: false // 缺省为 false
	        }
	    }
	}];

	let allArr = [...oneArr, ...erArr],
	    dataArr = [];
	// 点
	allArr.forEach((el, ind) => {
		var imgUrl= "image://"+uploadedDataURL1;
		var size = 122;
		var show  = true;
		if(el.symbol){
			imgUrl = el.symbol;
			size = el.symbolSize;
			show  = false;
		}
	     el.symbolSize = size;
	        el.symbol =imgUrl
	        el.itemStyle = {
	           
	        };
	    el.label = {
	        normal: {
	            show: show,
	           /* position: "center",*/
	            textStyle:{
	            	fontSize: 25,
		            fontFamily: 'FZLanTingHei-B-GBK',
		            fontWeight: 400,
		            color: '#FFFFFF',
		            
	            }
	        },
	    };

	});

	// 圆形分区
	function group(arr, r) {
	    const newArray = [];
	    const {
	        length: arLen
	    } = arr;
	    arr.forEach((e, ind) => {
	        // 按角度均匀分布
	       const ang = 90 - (360 / arLen).toFixed(2) * (ind + 1);
	                const x = (Math.cos(ang * Math.PI / 180)).toFixed(2) * r;
	                const y = (Math.sin(ang * Math.PI / 180)).toFixed(2) * r;
	                const x1 = (Math.cos(ang * Math.PI / 180)).toFixed(2) * (r - 5);
	                const y1 = (Math.sin(ang * Math.PI / 180)).toFixed(2) * (r - 5);
	                const x0 = (Math.cos(ang * Math.PI / 180)).toFixed(2) * (r - 30);
	                const y0 = (Math.sin(ang * Math.PI / 180)).toFixed(2) * (r - 30);
	                e.value = [x.toFixed(2), y.toFixed(2)]
	                e.twoPoint = [[x1.toFixed(2), y1.toFixed(2)], [x0.toFixed(2), y0.toFixed(2)]];
	        newArray.push(e);
	    });
	    return newArray;
	}

	// 线配置
	function linesConfig(arr) {
	    const [dataArr, targetCoord] = [
	        [],
	        [0, 0]
	    ];
	    arr.forEach((el) => {
	        function getFormatItem(start, end) {
	                    let item = [
	                        {coord: el.twoPoint[start]},// 起点
	                        {
	                            coord: el.twoPoint[end],
	                            lineStyle: {
	                                color: color[el.type],
	                                curveness: el.type === 3 ? 0.1 : 0,
	                            },
	                            effect: {
	                                color: color[el.type],
	                                symbol:"image://"+uploadedDataURL,
	                                symbolSize: [18 * 0.7,34 * 0.7]
	                            }
	                        }, // 终点
	                    ]
	                    return item
	                }
	                switch (el.type) {
	                    case 0:
	                        break;
	                    case 1:
	                        dataArr.push(getFormatItem(0, 1));
	                        break;
	                    case 2:
	                        dataArr.push(getFormatItem(1, 0));
	                        break;
	                    case 3:
	                        dataArr.push(getFormatItem(0, 1));
	                        dataArr.push(getFormatItem(1, 0));
	                        break;
	                }
	    });
	    return dataArr;
	}

	// 点分布
	oneArr = group(oneArr, 0);
	erArr = group(erArr, 40);

	allArr = [...oneArr, ...erArr];
	// 线坐标和配置
	dataArr = linesConfig(allArr);

	function generateData(totalNum, bigvalue, smallvalue, color,width) {
	    let dataArr = [];
	    for (var i = 0; i < totalNum; i++) {
	        if (i % 2 === 0) {
	            dataArr.push({
	                name: (i + 1).toString(),
	                value: bigvalue,
	                itemStyle: {
	                
	                    normal: {
	                        color: color,
	                        borderWidth: width,
	                        borderRadius:20
	                    }
	                }
	            });
	        } else {
	            dataArr.push({
	                name: (i + 1).toString(),
	                value: smallvalue,
	                itemStyle: {
	                    normal: {
	                        color: "rgba(0,0,0,0)",
	                        borderWidth: 0,
	                        "borderRadius":20,
	                    }
	                }
	            });
	        }

	    }
	    return dataArr;
	}

	let dolitData = generateData(100, 25, 20, 'rgb(126,190,255)',5);
	let threeData = generateData(6,30, 10, 'rgba(28, 211, 230, 1)',5);
	let fourData = generateData(12,80, 10, 'rgba(91, 84, 255, 1)',1);
	let radius1 = ['41%', '38%'];
	let radius2 = ['40%', '39%'];
	let height =  document.body.clientHeight;
	if(height < 1000){
		radius1 = ['43%', '40%'];
		radius2 = ['42%', '41%'];
	}
	function getOption(startAngle, radius,startAngle2) {
	    let option = {
	        backgroundColor:"rgba(0,0,0,1)",
	    		tooltip:{
	                formatter:function(param){ 
	                	var str = param.name+' : '+param.data.times+'次';
	                		return str;
	                },
	                
	                textStyle:{
	                	fontSize: 20,
	                },
	                backgroundColor  : 'rgba(0,0,0,0.7)',
        	        textStyle:{
        	        	color:"#ffffff"
        	        },
        	        borderWidth :0
        	 },
	    		  title: {
	    	            text: '数据中心',
	    	            left: 'center',
	    	            top:'center',
	    	            textStyle: {
	    	                color: '#fff',
	    	                fontSize:50
	    	            }
	    	        },
	        xAxis: {
	            show: false,
	            type: "value",
	            max: 50,
	            min: -51,
	        },
	        grid: {
	            top: 10,
	            bottom: 10,
	            left: 10,
	            right: 10,
	        },
	        yAxis: {
	            show: false,
	            type: "value",
	            max: 50,
	            min: -50,
	        },
	        series: [{
	                name: "节点",
	                type: "graph",
	                silent: false,
	                hoverAnimation: false, // 鼠标悬浮高亮
	                cursor: 'default',
	                coordinateSystem: "cartesian2d",
	                z: 3,
	                itemStyle: {
	                    normal: {
	                        shadowColor: "none",
	                    },
	                },
	                emphasis: {
	                    scale: false
	                },
	                data: allArr,
	                
	            },
	            {
	                name: "线图",
	                type: "lines",
	                hoverAnimation: false,
	                silent: false,
	                cursor: 'default',
	                coordinateSystem: "cartesian2d",
	                polyline: false, // 多线段
	                z: 1,
	                lineStyle: {
	                    width: 2,
	                    type: 'dashed',
	                    curveness: 0,
	                },
	                effect: {
	                    show: true,
	                    period: 8, //箭头指向速度，值越小速度越快
	                    trailLength: 0, //特效尾迹长度[0,1]值越大，尾迹越长重
	                    symbol: 'arrow', //箭头图标
	                    symbolSize: 6
	                },
	                emphasis: {
	                    lineStyle: {
	                        type: 'dashed',
	                    }
	                },
	                data: dataArr,
	                tooltip:{
	                	show:false
	                }
	            }, {
	                type: 'pie',
	                name: '旋转圆',
	                zlevel: 20,
	                silent: true,
	                radius: radius1,
	                hoverAnimation: false,
	                startAngle: startAngle,
	                data: threeData,
	                label: {
	                    normal: {
	                        show: false
	                    },
	                },
	                labelLine: {
	                    normal: {
	                        show: false
	                    }
	                },
	                tooltip:{
	                	show:false
	                }
	            }, {
	                type: 'pie',
	                name: '旋转圆',
	                zlevel: 19,
	                silent: true,
	                radius: radius2,
	                hoverAnimation: false,
	                startAngle: startAngle2,
	                data: fourData,
	                label: {
	                    normal: {
	                        show: false
	                    },
	                },
	                labelLine: {
	                    normal: {
	                        show: false
	                    }
	                },
	                tooltip:{
	                	show:false
	                }
	            }
	          
	        ],
	    };
	    
	    return option;
	}
	
	getOption()

	let startAngle = 50; // 初始旋转角度
	let startAngle2 = 50; // 初始旋转角度
	let [minradius, radius, maxradius] = [24, 24, 28] // 初始缩放尺寸
	        let isBig = true // 缩放动画 标识

	        function draw() {
	            startAngle = startAngle - 5
	            startAngle2 = startAngle2 + 5;
	            if (isBig) {
	                radius = radius + 0.5
	                if (radius > maxradius) {
	                    isBig = false
	                }
	            } else {
	                radius = radius - 0.5
	                if (radius < minradius) {
	                    isBig = true
	                }
	            }
	            let option = getOption(startAngle, radius,startAngle2)
	            myChart.setOption(option, true);
	        }

	timer = setInterval(draw, 200);
