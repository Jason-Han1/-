// function randomData() {
//     return Math.round(Math.random() * 300);
// }

// var geoCoordMap = {
//     上海: [121.4648, 31.2891],
//     尼日利亚: [-4.388361, 11.186148],
//     美国洛杉矶: [-118.24311, 34.052713],
//     香港邦泰: [114.195466, 22.282751],
//     美国芝加哥: [-87.801833, 41.870975],
//     加纳库马西: [-4.62829, 7.72415],
//     英国曼彻斯特: [-1.657222, 51.886863],
//     德国汉堡: [10.01959, 54.38474],
//     哈萨克斯坦阿拉木图: [45.326912, 41.101891],
//     俄罗斯伊尔库茨克: [89.116876, 67.757906],
//     巴西: [-48.678945, -10.493623],
//     埃及达米埃塔: [31.815593, 31.418032],
//     西班牙巴塞罗纳: [2.175129, 41.385064],
//     柬埔寨金边: [104.88659, 11.545469],
//     意大利米兰: [9.189948, 45.46623],
//     乌拉圭蒙得维的亚: [-56.162231, -34.901113],
//     莫桑比克马普托: [32.608571, -25.893473],
//     阿尔及利亚阿尔及尔: [3.054275, 36.753027],
//     阿联酋迪拜: [55.269441, 25.204514],
//     匈牙利布达佩斯: [17.108519, 48.179162],
//     澳大利亚悉尼: [150.993137, -33.675509],
//     美国加州: [-121.910642, 41.38028],
//     澳大利亚墨尔本: [144.999416, -37.781726],
//     墨西哥: [-99.094092, 19.365711],
//     加拿大温哥华: [-123.023921, 49.311753]
// };
// var BJData = [
//     [{
//         name: "尼日利亚",
//         value: randomData()
//     }, {
//         name: "上海",
//     }],
//     [{
//         name: "美国洛杉矶",
//         value: randomData()
//     }, {
//         name: "上海"
//     }],
//     [{
//         name: "香港邦泰",
//         value: randomData()
//     }, {
//         name: "上海"
//     }],
//     [{
//         name: "美国芝加哥",
//         value: randomData()
//     }, {
//         name: "上海"
//     }],
//     [{
//         name: "加纳库马西",
//         value: randomData()
//     }, {
//         name: "上海"
//     }],
//     [{
//         name: "英国曼彻斯特",
//         value: randomData()
//     }, {
//         name: "上海"
//     }],
//     [{
//         name: "德国汉堡",
//         value: randomData()
//     }, {
//         name: "上海"
//     }],
//     [{
//         name: "哈萨克斯坦阿拉木图",
//         value: randomData()
//     }, {
//         name: "上海"
//     }],
//     [{
//         name: "俄罗斯伊尔库茨克",
//         value: randomData()
//     }, {
//         name: "上海"
//     }],
//     [{
//         name: "巴西",
//         value: randomData()
//     }, {
//         name: "上海"
//     }],
//     [{
//         name: "埃及达米埃塔",
//         value: randomData()
//     }, {
//         name: "上海"
//     }],
//     [{
//         name: "西班牙巴塞罗纳",
//         value: randomData()
//     }, {
//         name: "上海"
//     }],
//     [{
//         name: "柬埔寨金边",
//         value: randomData()
//     }, {
//         name: "上海"
//     }],
//     [{
//         name: "意大利米兰",
//         value: randomData()
//     }, {
//         name: "上海"
//     }],
//     [{
//         name: "乌拉圭蒙得维的亚",
//         value: randomData()
//     }, {
//         name: "上海"
//     }],
//     [{
//         name: "莫桑比克马普托",
//         value: randomData()
//     }, {
//         name: "上海"
//     }],
//     [{
//         name: "阿尔及利亚阿尔及尔",
//         value: randomData()
//     }, {
//         name: "上海"
//     }],
//     [{
//         name: "阿联酋迪拜",
//         value: randomData()
//     }, {
//         name: "上海"
//     }],
//     [{
//         name: "匈牙利布达佩斯",
//         value: randomData()
//     }, {
//         name: "上海"
//     }],
//     [{
//         name: "澳大利亚悉尼",
//         value: randomData()
//     }, {
//         name: "上海"
//     }],
//     [{
//         name: "美国加州",
//         value: randomData()
//     }, {
//         name: "上海"
//     }],
//     [{
//         name: "澳大利亚墨尔本",
//         value: randomData()
//     }, {
//         name: "上海"
//     }],
//     [{
//         name: "墨西哥",
//         value: randomData()
//     }, {
//         name: "上海"
//     }],
//     [{
//         name: "加拿大温哥华",
//         value: randomData()
//     }, {
//         name: "上海"
//     }]
// ];
// var convertData = function(data) {
//     var res = [];
//     for (var i = 0; i < data.length; i++) {
//         var dataItem = data[i];
//         var fromCoord = geoCoordMap[dataItem[0].name];
//         var toCoord = geoCoordMap[dataItem[1].name];
//         if (fromCoord && toCoord) {
//             res.push([{
//                     coord: fromCoord,
//                     value: dataItem[0].value
//                 },
//                 {
//                     coord: toCoord
//                 }
//             ]);
//         }
//     }
//     return res;
// };
// var convertData2 = function(data) {
//     var res = [];
//     for (var i = 0; i < data.length; i++) {
//         var dataItem = data[i];
//         var fromCoord = geoCoordMap[dataItem[1].name];
//         var toCoord = geoCoordMap[dataItem[0].name];
//         if (fromCoord && toCoord) {
//             res.push([{
//                     coord: fromCoord,
//                     value: dataItem[0].value
//                 },
//                 {
//                     coord: toCoord
//                 }
//             ]);
//         }
//     }
//     return res;
// };

var series = [];
// [
//     ["上海", BJData]
// ].forEach(function(item, i) {
//     series.push(
//         // {
//         //     type: "lines",
//         //     zlevel: 2,
//         //     effect: {
//         //         show: true,
//         //         // color: "#0bc7f3",
//         //         period: 4, //箭头指向速度，值越小速度越快
//         //         trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
//         //         symbol: "arrow", //箭头图标
//         //         symbolSize: 5 //图标大小
//         //     },
//         //     lineStyle: {
//         //         normal: {
//         //             width: 1, //尾迹线条宽度
//         //             opacity: 0, //尾迹线条透明度
//         //             curveness: 0.3 //尾迹线条曲直度
//         //         }
//         //     },
//         //     data: convertData(item[1])
//         // }, {
//         //     type: "lines",
//         //     zlevel: 2,
//         //     effect: {
//         //         show: true,
//         //         color: '#FF0000',
//         //         period: 4, //箭头指向速度，值越小速度越快
//         //         trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
//         //         symbol: "arrow", //箭头图标
//         //         symbolSize: 5 //图标大小
//         //     },
//         //     lineStyle: {
//         //         normal: {
//         //             width: 1, //尾迹线条宽度
//         //             opacity: 0, //尾迹线条透明度
//         //             curveness: -0.3 //尾迹线条曲直度
//         //         }
//         //     },
//         //     data: convertData2(item[1])
//         // },
        
//         // {
//         //     type: "effectScatter",
//         //     coordinateSystem: "geo",
//         //     zlevel: 2,
//         //     rippleEffect: {
//         //         //涟漪特效
//         //         period: 4, //动画时间，值越小速度越快
//         //         brushType: "stroke", //波纹绘制方式 stroke, fill
//         //         scale: 4 //波纹圆环最大限制，值越大波纹越大
//         //     },
//         //     label: {
//         //         normal: {
//         //             show: true,
//         //             position: "right", //显示位置
//         //             offset: [5, 0], //偏移设置
//         //             formatter: "{b}" //圆环显示文字
//         //         },
//         //         emphasis: {
//         //             show: true,
//         //             color: "#FF6A6A"
//         //         }
//         //     },
//         //     symbol: "circle",
//         //     symbolSize: function(val) {
//         //         return 8 + val[2] / 1000; //圆环大小
//         //     },
//         //     itemStyle: {
//         //         normal: {
//         //             show: true,
//         //         },
//         //         emphasis: {
//         //             show: true,
//         //             color: "#FF6A6A"
//         //         }
//         //     },
//         //     data: item[1].map(function(dataItem) {
//         //         return {
//         //             name: dataItem[0].name,
//         //             value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
//         //         };
//         //     })
//         // },
        
//         //被攻击点
//         // {
//         //     type: "scatter",
//         //     coordinateSystem: "geo",
//         //     zlevel: 2,
//         //     rippleEffect: {
//         //         period: 4,
//         //         brushType: "stroke",
//         //         scale: 4
//         //     },
//         //     label: {
//         //         normal: {
//         //             show: true,
//         //             color: "red",
//         //             position: "right",
//         //             formatter: "{b}",
//         //         },
//         //         emphasis: {
//         //             show: true,
//         //             color: "#FF6A6A"
//         //         }
//         //     },
//         //     symbol: "pin",
//         //     symbolSize: 30,
//         //     itemStyle: {
//         //         normal: {
//         //             show: true,
//         //             color: "red",
//         //         },
//         //         emphasis: {
//         //             show: true,
//         //             color: "#FF6A6A"
//         //         }
//         //     },
//         //     data: [{
//         //         name: item[0],
//         //         value: geoCoordMap[item[0]].concat([100]),
//         //         visualMap: false
//         //     }]
//         // }
//     );
// });


var worldMap = echarts.getMap('world');

option = {
    backgroundColor: 'green', ///rgb(3, 9, 27)
    tooltip: {
        trigger: "item",
        backgroundColor: "#1540a1",
        borderColor: "#FFFFCC",
        showDelay: 0,
        hideDelay: 0,
        enterable: true,
        transitionDuration: 0,
        extraCssText: "z-index:100",
        formatter: function(params, ticket, callback) {
            //根据业务自己拓展要显示的内容
            var res = "";
            var name = params.name;
            var value = params.value[params.seriesIndex + 1];
            res =
                "<span style='color:#fff;'>" +
                name +
                "</span><br/>数据：" +
                value;
            return res;
        }
    },
    // visualMap: {
    //     //图例值控制
    //     show: false,
    //     type: 'piecewise',
    //     pieces: [{
    //             max: 80,
    //             color: 'red'
    //         },
    //         {
    //             min: 80,
    //             max: 120,
    //             color: 'yellow'
    //         },
    //         {
    //             min: 120,
    //             color: 'green'
    //         }
    //     ],
    //     calculable: true,
    // },
    
    // geo: {
    //     map: "nWorld",
    //     show: true,
    //     // label: {
    //     //     show: true,
    //     //     offset:[30,40],
    //     //     // formatter: '{b}',
    //     //     color: '#41768f',
    //     //     fontSize: 5,
    //     //     emphasis: {
    //     //         show: false
    //     //     }
    //     // },
    //     // boundingCoords: [
    //     //     // 定位左上角经纬度
    //     //     [-100, 90],
    //     //     // 定位右下角经纬度
    //     //     [100, -90]
    //     // ],
    //     zoom:1,
    //     roam: false, //是否允许缩放
    //     // layoutCenter: ["50%", "50%"], //地图位置
    //     // center: [0, 0],
    //     // center: ['50%', '50%'],
    //     // layoutSize: "100%",
    //     left: 0, top: 20, right: 0, bottom: 20,
    //     itemStyle: {
    //         normal: {
    //             show: 'true',
    //             borderWidth: 1,
    //             // color: "rgb(6, 31, 48)", //地图背景色
    //             areaColor: '#eee', //rgb(6, 31, 48)
    //             borderColor: "#1EFFEC", //省市边界线
    //             // shadowColor: 'rgba(58, 157, 242, .8)',
    //             // shadowBlur: 12,
    //         },
    //         emphasis: {
    //             show: 'true',
    //             color: "rgba(37, 43, 61, .5)" //悬浮背景
    //         }
    //     },
    //     zlevel: 1
    //     // regions: [{
    //     //     name: '中国',
    //     //     itemStyle: {
    //     //         //'#5ab1d8'
    //     //         areaColor: {
    //     //             type: 'linear',
    //     //             x: 0,
    //     //             y: 0,
    //     //             x2: 0,
    //     //             y2: 1,
    //     //             colorStops: [{
    //     //                 offset: 0, color: '#36698b' // 0% 处的颜色
    //     //             }, {
    //     //                 offset: 1, color: '#60bfe8' // 100% 处的颜色
    //     //             }],
    //     //             global: false // 缺省为 false
    //     //         },
    //     //         color: '#5ab1d8'
    //     //     }
    //     // }],
    //     // nameMap:{
    //     //     'China' : '中国'
    //     // }
    // },

    series: [
      {
            name: 'xxx2',
            type: 'map',
            map: 'nWorld',
            roam: false,
             left: 0, top: 20, right: 0, bottom: 20,
            // layoutCenter: ["50%", "50%"], //地图位置
            // layoutSize: "120%",
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
             itemStyle: {
                areaColor: '#eee', //rgb(6, 31, 48)
                show: 'true',
                borderColor: 'red',
                borderWidth: 1,
                // blend: 'xor',
                // shadowColor: 'rgba(58, 157, 242, .8)',
                // shadowBlur: 12,
                emphasis: {
                    show: 'true',
                    color: "rgba(37, 43, 61, .5)" //悬浮背景
                }
            },
        },
        {
            name: 'xxx3',
            type: 'map',
            map: 'nWorld',
            roam: false,
             left: 0, top: 20, right: 0, bottom: 20,
            // layoutCenter: ["50%", "50%"], //地图位置
            // layoutSize: "120%",
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
             itemStyle: {
                areaColor: '#000', //rgb(6, 31, 48)
                show: 'true',
                borderColor: 'green',
                borderWidth: 1,
                // shadowColor: 'rgba(58, 157, 242, .8)',
                // shadowBlur: 12,
                emphasis: {
                    show: 'true',
                    color: "rgba(37, 43, 61, .5)" //悬浮背景
                }
            },
            // z: 2,
            blendMode: 'xor',
        },
//         {
// 			type: 'custom',
// 			geoIndex: 0,
// 			coordinateSystem: 'geo',
// 			renderItem: renderItem,
// 			itemStyle: {
// 				normal: {
// 					opacity: .5
// 				}
// 			},
// 			animation: false,
// 			silent: true,
// 			data: [0],
// 			z: 20
// 		}
        
    ],
};

// option.blendMode = 'xor',




function renderItem(params, api) {
    var roundedsPoints = [];
    // var coords = [9][0];
    
    function render( callBack ) {
        // console.log( worldMapCopy.geoJson.features[41].geometry.coordinates[9][0] );
        /* callBack( worldMapCopy.geoJson.features[41].geometry.coordinates[9][0] ); */
        
//         for(let i=0; i<worldMapCopy.geoJson.features.length; i++) {
// 			/* setTimeout( () => { */
// 				for(let j=0; j< worldMapCopy.geoJson.features[i].geometry.coordinates.length; j++ ) {
// 					/* setTimeout( () => { */
// 						var coordinates = worldMapCopy.geoJson.features[i].geometry.coordinates;
// 						var minCoordsOrNot = coordinates[j];
						
// 						if( typeof minCoordsOrNot[0] == 'number') {
							
// 							// roundedsPoints.push( coordinates );
// 							callBack( coordinates );
// 						}else {
// 							for(let k=0; k< worldMapCopy.geoJson.features[i].geometry.coordinates[j].length; k++ ){
// 								/* setTimeout( () => { */
// 									var coordinates = worldMapCopy.geoJson.features[i].geometry.coordinates[j];
// 									// var minCoords = coordinates[k];
// 									// roundedsPoints.push( coordinates[k] );
// 									callBack( coordinates[k] );
// 								/* }, 0); */
// 							}
// 						}
// 					/* },0); */
// 				}
// 			/* },0); */
        
//         }
    }
   
    
    
    // for (var i = 0; i < coords.length; i++) {
    //     points.push(api.coord(coords[i]));
    // }

    // var color = api.visual('color');


// ctx.shadowColor='red';
// ctx.shadowBlur=12;

// // stroke the shadowed rounded rectangle
// ctx.stroke();
// ctx.stroke();
// ctx.stroke();

// // set compositing to erase everything outside the stroke
// ctx.globalCompositeOperation='destination-in';
// ctx.fill();


    /* setTimeout( () => {  */
        
        /* var ctxMain = api.getZr().painter.getLayers()[0].ctx; */
        const canvasSum = document.createElement('canvas');
		canvasSum.width = myChart.getWidth();
		canvasSum.height = myChart.getHeight();
		canvasSum.style.width = `${myChart.getWidth() / devicePixelRatio}px`;
		canvasSum.style.height = `${myChart.getHeight() / devicePixelRatio}px`;
		var ctxSum = canvasSum.getContext('2d');

		
		
		var buildInsetShadow = ( points ) => {
		    
			var canvas = document.createElement('canvas');
			
    		canvas.width = myChart.getWidth();
    		canvas.height = myChart.getHeight();
    		canvas.style.width = `${myChart.getWidth() / devicePixelRatio}px`;
    		canvas.style.height = `${myChart.getHeight() / devicePixelRatio}px`;
    		var ctx = canvas.getContext('2d');
    		document.body.appendChild(canvas);
    		
			
            drawShape(ctx, points);
            ctx.fill();
            ctx.globalCompositeOperation = 'xor';
            ctx.fill();
            ctx.shadowColor='red';
            ctx.shadowBlur=12;
            ctx.fill();
            
            ctx.globalCompositeOperation = 'source-in';
            // ctx.fillStyle =  'rgba(58, 157, 242, .8)';
			ctx.fillStyle =  'red';
            ctx.fillRect(0, 0, myChart.getWidth(), myChart.getHeight());
            
            ctx.globalCompositeOperation = 'destination-in';
            ctx.fill();
            
            ctxSum.drawImage(canvas,0,0);
            
            document.body.removeChild(canvas);
        }
		
		render( buildInsetShadow );
		
		/* ctxMain.drawImage(canvas,0,0); */
        
    /* }, 0 ); */


function drawShape(ctx, shape ) {
    // console.log( shape );
    ctx.beginPath();
    var coord = api.coord( shape[0] );
    ctx.moveTo(coord[0], coord[1]);
    var i = 1;
    
    while(i < shape.length) {
      coord = api.coord( shape[i] );;
      ctx.lineTo(coord[0], coord[1]);
      i++;
    }
    ctx.closePath();
}

    return {
		type: 'image',
		/* z2: -10, */
		style: {
			image: canvasSum,
			/* height: myChart.getHeight(),
			width: myChart.getWidth(), */
		}
	}
    // return {
    //     type: 'group',
    //     children: [
    //          {
    //             type: 'polygon',
    //             shape: {
    //                 points:  points,
    //                 // echarts.graphic.clipPointsByRect(points, {
    //                 //     x: params.coordSys.x,
    //                 //     y: params.coordSys.y,
    //                 //     width: params.coordSys.width,
    //                 //     height: params.coordSys.height
    //                 // })
    //             },
    //             style: api.style({
    //                 shadowColor: 'green',
    //                 shadowBlur: 50,
    //                 stroke: 'red',
    //                 lineWidth: 1,
    //                 blend: 'destination-in',
    //                 color: 'transparent'
    //             })
    //         },
    //     ]
        
    // };
}

// var offcanvas = myChart.getRenderedCanvas({
//         pixelRatio: 2,
//         backgroundColor: '#fff'
//     });
    


// myChart.clear();
// myChart.dispose();
// myChart.setOption( {
//     color: {
//         image: offcanvas, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
//         repeat: 'no-repeat' // 是否平铺, 可以是 'repeat-x', 'repeat-y', 'no-repeat'
//     },
// });


var splitLatitude = -170;
var str = JSON.stringify( worldMap );
var worldMapCopy = JSON.parse( str );
var worldMapCopy2 = JSON.parse( str );


function transformCoord(arr) {
    // var bounding = {x: -169.94833984375, y: -55.776855468749964, width: 361.23232421874997, height: 139.34169921874994};
    // // var bounding = getBoundingRect();
    // var rate1 = bounding.width / myChart.getWidth();
    // var rate2 = bounding.height / myChart.getHeight();

    // arr[0] +=  rate1 * ( arr[0]> 0 ? 1 : -1 );
    // arr[1] +=  rate2 * ( arr[0]> 0 ? 1 : -1 );
    return arr;
}

    worldMapCopy.geoJson.features.forEach( (countryItem,countryIndex) => { //国
        
         countryItem.geometry.coordinates.forEach( (regionItem, regionIndex) => { //区域
            var isBreak1 = false;
            regionItem.every( (lLItem, indexLL) => { //区域坐标点，经纬度 Latitude Longitude
                if( typeof lLItem[0] == 'number'){
                    var latitude = lLItem[0];
                    var sym = latitude < splitLatitude ? 360 + latitude : latitude;
                    worldMapCopy.geoJson.features[countryIndex].geometry.coordinates[regionIndex][indexLL][0] = sym;
                    // worldMapCopy2.geoJson.features[countryIndex].geometry.coordinates[regionIndex][indexLL][0] = sym;
                    
                    worldMapCopy2.geoJson.features[countryIndex].geometry.coordinates[regionIndex][indexLL] = 
                    transformCoord( [sym, lLItem[1]] );
    
                    if( sym !== latitude ){
                        isBreak1 = true;
                        return false;
                    }
                }else{
                    var isBreak2 = false;
                    lLItem.every( (minLLItem, indexMinLL) => {
                        var latitude = minLLItem[0];
                        var sym = latitude < splitLatitude ? 360 + latitude : latitude;
                        worldMapCopy.geoJson.features[countryIndex].geometry.coordinates[regionIndex][indexLL][indexMinLL][0] = sym;
                        worldMapCopy2.geoJson.features[countryIndex].geometry.coordinates[regionIndex][indexLL][indexMinLL] = 
                         transformCoord( [sym, minLLItem[1]] );
    
                        if( sym != latitude ){
                            isBreak2 = true;
                            return false;
                        }else{
                            return true; 
                        }
                        
                    } );
                    
                    if( isBreak2 ) {
                        lLItem.forEach( (minLLItem, indexMinLL) => { 
                            var shouldMove = minLLItem[0] < 0 ? 360 + minLLItem[0] : minLLItem[0];
                            worldMapCopy.geoJson.features[countryIndex].geometry.coordinates[regionIndex][indexLL][indexMinLL][0] = shouldMove;
                            worldMapCopy2.geoJson.features[countryIndex].geometry.coordinates[regionIndex][indexLL][indexMinLL] = 
                    transformCoord( [shouldMove, minLLItem[1]] );
    
                        } );
                    }
                }
                return true;
            });
            
            if( isBreak1 ) {
                regionItem.forEach( (lLItem, indexLL) => { //区域坐标点，经纬度 Latitude Longitude
                    if( typeof lLItem[0] == 'number'){
                        var shouldMove = lLItem[0] < 0 ? 360 + lLItem[0] : lLItem[0];
                        worldMapCopy.geoJson.features[countryIndex].geometry.coordinates[regionIndex][indexLL][0] = shouldMove;
                    
                        worldMapCopy2.geoJson.features[countryIndex].geometry.coordinates[regionIndex][indexLL] = 
                    transformCoord( [shouldMove, lLItem[1]] );
    
                    }else{
                       var isBreak3 = false;
                        lLItem.every( (minLLItem, indexMinLL) => {
                            var latitude = minLLItem[0];
                            var sym = latitude < splitLatitude ? 360 + latitude : latitude;
                             
                            worldMapCopy.geoJson.features[countryIndex].geometry.coordinates[regionIndex][indexLL][indexMinLL][0] = sym;
                            
                            worldMapCopy2.geoJson.features[countryIndex].geometry.coordinates[regionIndex][indexLL][indexMinLL] = 
                    transformCoord( [sym, minLLItem[1]] );
    
                            
                            if( sym != latitude ){
                                isBreak3 = true;
                                return false;
                            }else{
                                return true; 
                            }
                            
                        } );
                        
                        if( isBreak3 ) {
                            lLItem.forEach( (minLLItem, indexMinLL) => { 
                               var shouldMove = minLLItem[0] < 0 ? 360 + minLLItem[0] : minLLItem[0];
                                worldMapCopy.geoJson.features[countryIndex].geometry.coordinates[regionIndex][indexLL][indexMinLL][0] = shouldMove ;
                                worldMapCopy2.geoJson.features[countryIndex].geometry.coordinates[regionIndex][indexLL][indexMinLL] = 
                    transformCoord( [shouldMove, minLLItem[1]] );
    
                                
                            } );
                        }
                    }
                });
            }
         });
    });


echarts.registerMap('nWorld',worldMapCopy);

echarts.registerMap('n2World',worldMapCopy2);


// var zr = myChart.getZr();

// var position = [ 200, 200];
// var shape = {
// 	x:10,
// 	y:20,
// 	width:200,
// 	height:1
// };

// console.log(echarts.graphic);
// var rect =  new echarts.graphic.Rect({
// 	position: position,
// 	scale:[1,1],
// 	shape:shape,
// 	style:{
// 		fill:'red',
// 		text: 'zRender Rect',
// 	},
// 	zlevel:0,
// 	z:3
// });
// var rect2 =  new echarts.graphic.Rect({
// 	position: position,
// 	scale:[1,1],
//     shape: shape,
// 	style:{
// 		fill:'green',
// 		text: 'zRender Rect',
// 		shadowColor:'blue',
// 		shadowBlur: 12,
// 		globalCompositeOperation: 'source-in',
// 	},
// 	zlevel:0,
// 	z: 3
// });
// console.log( zr );
// zr.add(rect);
// zr.add(rect2);

function getBoundingRect() {
    // 获取系列
    var seriesModel = myChart.getModel().getSeriesByIndex(option.series.length - 1)
    // 获取地理坐标系实例
    var coordSys = seriesModel.coordinateSystem;
    
    return coordSys.getBoundingRect();
}



// setTimeout( () => {
//     console.log( getBoundingRect() );
//     // 获取系列
//     var seriesModel = myChart.getModel().getSeriesByIndex(option.series.length - 1)
//     // 获取地理坐标系实例
//     var coordSys = seriesModel.coordinateSystem;
    
//   oordSys.getBoundingRect() 

// }, 0 );
