var hainan = "/asset/get/s/data-1574826602531-Q95ZXI68.json";

var anding = "/asset/get/s/data-1574824498988-zIfCsYjU.json";

var baisha = "/asset/get/s/data-1574824562939-cWphOhKM.json";

var baoting = "/asset/get/s/data-1574824611836-trMwgpmI.json";

var chengmai = "/asset/get/s/data-1574824620688-1BY2wHbB.json";

var danzhou = "/asset/get/s/data-1574824628294-CMT9kwPG.json";

var dongfang = "/asset/get/s/data-1574824633698-d58iTLa7.json";

var haikou = "/asset/get/s/data-1574824639035-8D_kOG0Q.json";

var ledong = "/asset/get/s/data-1574824643839-jMLtEPyM.json";

var linggao = "/asset/get/s/data-1574824648835--msBTgvr.json";

var lingshui = "/asset/get/s/data-1574824654280-ZbSaHw4V.json";

var qionghai = "/asset/get/s/data-1574824660022--OkVFIKW.json";

var qiongzhong = "/asset/get/s/data-1574824665357-0ut3cu_w.json";

var sansha = "/asset/get/s/data-1574824676673-jGi7oq3E.json";

var sanya = "/asset/get/s/data-1574824696851-jqF_p_M-.json";

var tunchang = "/asset/get/s/data-1574824702108-cKJUtxbC.json";

var wanning = "/asset/get/s/data-1574824719020-EFrwjxGK.json";

var wenchang = "/asset/get/s/data-1574824723965-5D7-LKsVG.json";

var wuzhishan = "/asset/get/s/data-1574824728045-q9wYeUSn.json";

//随机数
function randomData() {
	return Math.round(Math.random() * 1000);
}

option = {
		 visualMap: {//左竖条
			 min: 0,
			 max: 1000,
			 left: 'left',
			 top: 'bottom',
			 text: ['高', '低'],
			 calculable: true, //是否显示拖拽用的手柄
			 orient: 'vertical',//'horizontal', //拖拽用的手柄:水平/垂直
			 //颜色范围
			 inRange: {
				 color: ['#4f7482', 'rgba(127,161,169,0.4)', '#f5f8fd']
			 }
		 },
	    title : {//标题
			top : '10%',
	        text: '海南省地图',
	        left: 'center',
			subtext : '',
	        textStyle:{
	            color: '#ccc',
	            fontSize:16,
	            fontWeight:'normal',
	            fontFamily:"Microsoft YaHei"
	        },
	        subtextStyle:{
	        	color: '#ccc',
	            fontSize:13,
	            fontWeight:'normal',
	            fontFamily:"Microsoft YaHei"
	        }
	    },
	    tooltip: {//提示
	        trigger: 'item',
			formatter: function(params) {
				return params.name+":"+params.value;
			}
	    },
	   series: [ 
		{
			name:map,//名字
			map: map,//导入地图参数
			type: 'map3D',//map 地图类型
			regionHeight: 2,
			boxWidth:70,//宽
			//boxHeight:50,
			boxDepth:50,//深
		    // top:'-10%',
			// 环境贴图，支持純颜色值，渐变色，全景贴图的 url。默认为 'auto'，在配置有 light.ambientCubemap.texture 的时候会使用该纹理作为环境贴图。否则则不显示环境贴图。
			environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{      // 配置为垂直渐变的背景
				offset: 0, color: '#00aaff' // 天空颜色
			}, {
				offset: 0.7, color: '#998866' // 地面颜色
			}, {
				offset: 1, color: '#998866' // 地面颜色
			}], false),
            label: {//标签样式
	            normal:{
					show:true,
					//distance: 50, // 标签距离图形的距离，在三维的散点图中这个距离是屏幕空间的像素值，其它图中这个距离是相对的三维距离
					//formatter:, // 标签内容格式器
					textStyle:{
						color:'#999',
						fontSize:13,
						// fontSize: 8, // 字体大小
						// opacity: 1, // 字体透明度
						// backgroundColor: 'rgba(0,23,11,0)' // 字体背景色
					}
	            },
	            emphasis: {
	                show: true,
	                textStyle:{
						color:'#001923',
						fontSize:13
					}
	            }
	        },
	        itemStyle: {//地图样式
	            normal: {
	                areaColor: '#323c48',//默认地图块颜色
	                borderColor: 'dodgerblue',//地图边线颜色
					borderWidth: 0.5, //地图边线粗细
	            },
				emphasis: {
					areaColor: '#2B91B7' //鼠标悬停颜色
				},
				color: 'rgba(95,158,160,0.5)', // 地图板块的颜色
				opacity: 1, // 图形的不透明度 [ default: 1 ]
				borderWidth: 0.5, // (地图板块间的分隔线)图形描边的宽度。加上描边后可以更清晰的区分每个区域 [ default: 0 ]
				borderColor: '#000' // 图形描边的颜色。[ default: #333 ]
	        },
			groundPlane: {			// 地面可以让整个组件有个“摆放”的地方，从而使整个场景看起来更真实，更有模型感。
				show: false,				// 是否显示地面。[ default: false ]
				color: '#aaa'			// 地面颜色。[ default: '#aaa' ]
			}, light: {                    // 光照相关的设置。在 shading 为 'color' 的时候无效。  光照的设置会影响到组件以及组件所在坐标系上的所有图表。合理的光照设置能够让整个场景的明暗变得更丰富，更有层次。
				main: {                     // 场景主光源的设置，在 globe 组件中就是太阳光。
					color: '#fff',              //主光源的颜色。[ default: #fff ]
					intensity: 1.2,             //主光源的强度。[ default: 1 ]
					shadow: false,              //主光源是否投射阴影。默认关闭。    开启阴影可以给场景带来更真实和有层次的光照效果。但是同时也会增加程序的运行开销。
					//shadowQuality: 'high',      // 阴影的质量。可选'low', 'medium', 'high', 'ultra' [ default: 'medium' ]
					alpha: 55,                  // 主光源绕 x 轴，即上下旋转的角度。配合 beta 控制光源的方向。[ default: 40 ]
					beta: 10                    // 主光源绕 y 轴，即左右旋转的角度。[ default: 40 ]
				},
				ambient: {                  // 全局的环境光设置。
					color: '#fff',              // 环境光的颜色。[ default: #fff ]
					intensity: 0.5              // 环境光的强度。[ default: 0.2 ]
				}
			},

			viewControl: {			// 用于鼠标的旋转，缩放等视角控制。
				projection: 'perspective',		// 投影方式，默认为透视投影'perspective'，也支持设置为正交投影'orthographic'。
				autoRotate: false,				// 是否开启视角绕物体的自动旋转查看。[ default: false ]
				autoRotateDirection: 'cw',		// 物体自传的方向。默认是 'cw' 也就是从上往下看是顺时针方向，也可以取 'ccw'，既从上往下看为逆时针方向。
				autoRotateSpeed: 10,			// 物体自传的速度。单位为角度 / 秒，默认为10 ，也就是36秒转一圈。
				autoRotateAfterStill: 3,		// 在鼠标静止操作后恢复自动旋转的时间间隔。在开启 autoRotate 后有效。[ default: 3 ]
				damping: 0,						// 鼠标进行旋转，缩放等操作时的迟滞因子，在大于等于 1 的时候鼠标在停止操作后，视角仍会因为一定的惯性继续运动（旋转和缩放）。[ default: 0.8 ]
				rotateSensitivity: 1,			// 旋转操作的灵敏度，值越大越灵敏。支持使用数组分别设置横向和纵向的旋转灵敏度。默认为1, 设置为0后无法旋转。	rotateSensitivity: [1, 0]——只能横向旋转； rotateSensitivity: [0, 1]——只能纵向旋转。
				zoomSensitivity: 1,				// 缩放操作的灵敏度，值越大越灵敏。默认为1,设置为0后无法缩放。
				panSensitivity: 1,				// 平移操作的灵敏度，值越大越灵敏。默认为1,设置为0后无法平移。支持使用数组分别设置横向和纵向的平移灵敏度
				panMouseButton: 'left',			// 平移操作使用的鼠标按键，支持：'left' 鼠标左键（默认）;'middle' 鼠标中键 ;'right' 鼠标右键(注意：如果设置为鼠标右键则会阻止默认的右键菜单。)
				rotateMouseButton: 'left',		// 旋转操作使用的鼠标按键，支持：'left' 鼠标左键;'middle' 鼠标中键（默认）;'right' 鼠标右键(注意：如果设置为鼠标右键则会阻止默认的右键菜单。)

				distance: 80,					// [ default: 100 ] 默认视角距离主体的距离，对于 grid3D 和 geo3D 等其它组件来说是距离中心原点的距离,对于 globe 来说是距离地球表面的距离。在 projection 为'perspective'的时候有效。
				minDistance: 40,				// [ default: 40 ] 视角通过鼠标控制能拉近到主体的最小距离。在 projection 为'perspective'的时候有效。
				maxDistance: 400,				// [ default: 400 ] 视角通过鼠标控制能拉远到主体的最大距离。在 projection 为'perspective'的时候有效。

				alpha: 52, 						// 视角绕 x 轴，即上下旋转的角度。配合 beta 可以控制视角的方向。[ default: 40 ]
				beta: -5,						// 视角绕 y 轴，即左右旋转的角度。[ default: 0 ]
				minAlpha: -360,					// 上下旋转的最小 alpha 值。即视角能旋转到达最上面的角度。[ default: 5 ]
				maxAlpha: 360,					// 上下旋转的最大 alpha 值。即视角能旋转到达最下面的角度。[ default: 90 ]
				minBeta: -360,					// 左右旋转的最小 beta 值。即视角能旋转到达最左的角度。[ default: -80 ]
				maxBeta: 360,					// 左右旋转的最大 beta 值。即视角能旋转到达最右的角度。[ default: 80 ]

				center: [0,0,0],				// 视角中心点，旋转也会围绕这个中心点旋转，默认为[0,0,0]。

				animation: true,				// 是否开启动画。[ default: true ]
				animationDurationUpdate: 1000,	// 过渡动画的时长。[ default: 1000 ]
				animationEasingUpdate: 'cubicInOut'		// 过渡动画的缓动效果。[ default: cubicInOut ]
			},
            data:data//数据
        }	
    ]
	};