var uploadedDataURL = 'https://cdn.jsdelivr.net/gh/SHJ33/EchartsMapJson@master/json/province/hebei.json';

var mapData = [
     {name: '张家口', value: 1},
     {name: '邯郸', value: 1},
     {name: '沧州', value: 1},
     {name: '邢台', value: 1},
     {name: '秦皇岛', value: 1},
     {name: '石家庄', value: 1},
     {name: '保定', value: 1},
     {name: '廊坊', value: 1}];
     
var dataV = [{
        name: "张家口",
        value: [114.87,40.82, 1],

    },
    {
        name: "邯郸",
        value: [114.47,36.6,1]
    },

    {
        name: "沧州",
        value: [116.83,38.33,1]
    },
    {
        name: "邢台",
        value: [114.48,37.05,1]
    },
    {
        name: "秦皇岛",
        value: [119.57,39.95,1]
    },
    {
        name: "石家庄",
        value: [114.48,38.03,1]
    },
    {
        name: "保定",
        value: [115.48,38.85,1]
    },
    {
        name: "廊坊",
        value: [116.7,39.53,1]
    },

]

var geoCoordMap = {
   '张家口':[114.87,40.82],
   '邯郸':[114.47,36.6],
   '沧州':[116.83,38.33],
   '邢台':[114.48,37.05],
   '秦皇岛':[119.57,39.95],
   '石家庄':[114.48,38.03],
   '保定':[115.48,38.85],
   '廊坊':[116.7,39.53]
};

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

$.get(uploadedDataURL, function (geoJson) {
    echarts.registerMap('hebei', geoJson);
    option = {
       	series: [{
       		type: 'map3D',
       		map: 'hebei',
       		name: 'hebei',
       		zlevel: -10,
       		boxWidth: 120,
       		boxHeight:200,
       		boxDepth: 150,//地图倾斜度
       		regionHeight: 5,//地图厚度
       		// environment: 'imgs/19.jpeg',
       		//环境贴图，这里用的是渐变色
       		environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
       					  offset: 0, color: '#00aaff' // 天空颜色
       					}, {
       					  offset: 0.7, color: '#FFF' // 地面颜色
       					}, {
       					  offset: 1, color: '#A2875E' // 地面颜色
       					}], false),
       		// 标签设置
       		/*groundPlane:{
       			show:true,
       			color:'#aaa'
       		},*/
       		label: {
       			show: false,//是否显示市
       			// formatter: '{b} : test{c}',
       			/*textStyle: {
       				color: "#000",//文字颜色
       				fontSize: 16,//文字大小
       				fontFamily: '微软雅黑',
       				// opacity: 0,
       				backgroundColor: "rgba(0,0,0,0)",//透明度0清空文字背景 
       			},*/
       		},
       		//三维视觉属性
       		itemStyle: {
       			//opacity: 1, // 透明度
       			//color: '#4575b4',//地图颜色
       			//borderWidth: 1.5,//分界线宽度   
       			//borderColor: "#459bca",//分界线颜色
       			areaColor: '#6554C0',
       			//color: '#6554C0',
       			opacity: 1,
       			borderWidth: 0.5,
       			borderColor: '#A299DA'
       		},
       		// 鼠标hover高亮
       		emphasis: {
       			label: {
       				show: false,//是否显示标签
       				/*textStyle: {
       					color: 'yellow',//高亮文字颜色
       					fontSize: 32,
       					fontFamily: '微软雅黑'
       				},
       				formatter: '{b}: {c}'*/
       			},
       			//高亮区块颜色
       			// itemStyle: {
       			//     color: '#000'
       			// }
       			itemStyle: {
       				areaColor: '#61A4E4',
       				//color: '#61A4E4',
       				borderColor:'#88BAEA',
       				borderWidth:2,
       			}
       		},
       		light: {
       			main: {
       				intensity:1,
       				shadow: true,
       				shadowQuality: 'ultra',
       			},
       
       		},
       		groundplane: {
       			show: false
       		},
       		//data: data,
       		
       		//用了没有效果，还没找到原因，求指点
       		/*regions: [
       			{   // 可对单个地图区域进行设置
       				name: '昌平区',    // 所对应的地图区域的名称
       				//regionHeight: '', // 区域的高度，可以设置不同的高度用来表达数据的大小。当 GeoJSON 为建筑的数据时，也可以通过这个值表示简直的高度。
       				itemStyle: {    // 单个区域的样式设置
       					color: '#00FF00',
       					opacity: 1,
       					borderWidth: 0.4,
       					borderColor: '#5F9EA0'
       				},
       			}, {
       				name: '海淀区',
       				itemStyle: {
       					color: '#EEEE00',
       					opacity: 1,
       					borderWidth: 0.4,
       					borderColor: '#5F9EA0'
       				}
       			}
       		],*/
       		/*  
       			shading三维图形的着色效果,值：
       				'color'只显示颜色，不受光照等因素影响。
       				'lambert'通过景点的lambert着色表现光照的明暗
       				'realistic'真是感渲染
       		*/
       		shading: 'realistic',
       		// 真实感材质相关配置 shading: 'realistic'时有效
       		realisticMaterial: {
       			//detailTexture: 'https://cdn.jsdelivr.net/gh/SHJ33/examples@master/Glass_Frosted_C_10cm.mat.jpg', // 纹理贴图
       			detailTexture:'#fff',
       			textureTiling: 1, // 纹理平铺，1是拉伸，数字表示纹理平铺次数
       			//textureOffset: 1,
       			roughness: 1, // 材质粗糙度，0完全光滑，1完全粗糙
       			metalness: 0, // 0材质是非金属 ，1金属
       			roughnessAdjust: 0
       		},
       		/*lambertMaterial:{
       		   detailTexture: 'https://cdn.jsdelivr.net/gh/SHJ33/examples@master/Glass_Frosted_C_10cm.mat.jpg', // 纹理贴图
       		   textureTiling: 1, // 纹理平铺，1是拉伸，数字表示纹理平铺次数
       		   textureOffset: 1,
       		},*/
       	
       		viewControl: {
       			//distance: 150,// 地图视角 控制初始大小
       			//rotateSensitivity: 1,// 旋转
       			//zoomSensitivity: 1,// 缩放
       			projection: 'perspective',
       			autoRotate: false,
       			damping: 0,
       			rotateSensitivity: 2,//旋转操作的灵敏度
       			rotateMouseButton: 'left', //旋转操作使用的鼠标按键
       			zoomSensitivity:2, //缩放操作的灵敏度
       			panSensitivity:2, //平移操作的灵敏度
       			panMouseButton: 'right', //平移操作使用的鼠标按键
       			
       			distance: 160, //默认视角距离主体的距离
       			minDistance: 100,
       			maxDistance: 170,
       			//orthographicSize:150,
       			//maxOrthographicSize:150,
       			//minOrthographicSize:150,
       			minAlpha:30,
       			maxAlpha:80,
       			minBeta:-25,
       			maxBeta:45,
       			
       			center:[0,0,10],
       		   
       			animation: true,
       			animationDurationUpdate: 1000,
       			animationEasingUpdate: 'cubicInOut'
       		},
       		// postEffect: {
       		//     enable: true
       		// }
       	}/*,
        {
            type: 'scatter3D',
            coordinateSystem: 'geo3D',
            zlevel: 3,
            symbol: 'circle',
            symbolSize: 10,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                    
                    textStyle: {
                        color: '#fff',
                        // borderWidth: 1,
                        // borderColor: 'red',
                        fontWeight: "bold",
                        fontSize: 11,
                        backgroundColor: 'transparent' // 字体背景色
                    },

                }
            },

            data: dataV,
            itemStyle: { //坐标点颜色
                normal: {
                    show: true,
                    color: '#c0e6f2',
                    shadowBlur: 20,
                    shadowColor: '#fff'
                },
                emphasis: {
                    areaColor: '#f00'
                }
            },

        }*/],
    	/*dataRange: {
       		splitList: splitList
       	},*/
       	// ECharts 视觉映射「visualMap」组件 注释掉 dataRange 后可查看效果
       	// visualMap: {
       	//     show: false,
       	//     min: 0,
       	//     max: 15,
       	//     inRange: {
       	//         color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
       	//     }
    	// }
    }
    myChart.setOption(option);
});