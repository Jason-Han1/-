option = {
   series: [
      {
         type: 'map3D',
         map: 'china',
         name: 'china',
         zlevel: -10,
         boxWidth: 190,
         boxHeight: 30,
         boxDepth: 145, //地图倾斜度
         regionHeight: 4, //地图厚度
         label: {
            show: false, //是否显示市
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
            borderColor: '#A299DA',
         },
         // 鼠标hover高亮
         emphasis: {
            label: {
               show: false, //是否显示标签
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
               borderColor: '#88BAEA',
               borderWidth: 2,
            },
         },
         light: {
            main: {
               intensity: 1,
               shadow: true,
               shadowQuality: 'ultra',
            },
         },
         groundplane: {
            show: false,
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
            detailTexture: '#fff', // 纹理贴图
            textureTiling: 1, // 纹理平铺，1是拉伸，数字表示纹理平铺次数
            roughness: 0.8, // 材质粗糙度，0完全光滑，1完全粗糙
            metalness: 0, // 0材质是非金属 ，1金属
            roughnessAdjust: 0,
         },
         viewControl: {
            //distance: 150,// 地图视角 控制初始大小
            //rotateSensitivity: 1,// 旋转
            //zoomSensitivity: 1,// 缩放
            projection: 'perspective',
            autoRotate: false,
            damping: 0,
            rotateSensitivity: 2, //旋转操作的灵敏度
            rotateMouseButton: 'left', //旋转操作使用的鼠标按键
            zoomSensitivity: 2, //缩放操作的灵敏度
            panSensitivity: 2, //平移操作的灵敏度
            panMouseButton: 'right', //平移操作使用的鼠标按键

            distance: 160, //默认视角距离主体的距离
            minDistance: 100,
            maxDistance: 170,
            //orthographicSize:150,
            //maxOrthographicSize:150,
            //minOrthographicSize:150,
            minAlpha: 30,
            maxAlpha: 80,
            minBeta: -25,
            maxBeta: 45,

            center: [0, 0, 10],

            animation: true,
            animationDurationUpdate: 1000,
            animationEasingUpdate: 'cubicInOut',
         },
         // postEffect: {
         //     enable: true
         // }
      },
   ],
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
};
