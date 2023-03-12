var uploadedDataURL = "/asset/get/s/data-1610086387700-zPQmVL4O4.geojson";


var data = [
		{ name: '勉阳镇', value: (Math.random() * 1000 + 100).toFixed(0) },
		{ name: '武侯镇', value: (Math.random() * 1000 + 100).toFixed(0) },
		{ name: '周家山镇', value: (Math.random() * 1000 + 100).toFixed(0) },
		{ name: '同沟寺镇', value: (Math.random() * 1000 + 100).toFixed(0) },
		{ name: '新街子镇', value: (Math.random() * 1000 + 100).toFixed(0) },
		{ name: '老道寺镇', value: (Math.random() * 1000 + 100).toFixed(0) },
		{ name: '褒城镇', value: (Math.random() * 1000 + 100).toFixed(0) },
		{ name: '金泉镇', value: (Math.random() * 1000 + 100).toFixed(0) },
		{ name: '定军山镇', value: (Math.random() * 1000 + 100).toFixed(0) },
		{ name: '温泉镇', value: (Math.random() * 1000 + 100).toFixed(0) },
		{ name: '元墩镇', value: (Math.random() * 1000 + 100).toFixed(0) },
		{ name: '阜川镇', value: (Math.random() * 1000 + 100).toFixed(0) },
		{ name: '新铺镇', value: (Math.random() * 1000 + 100).toFixed(0) },
		{ name: '青羊驿镇', value: (Math.random() * 1000 + 100).toFixed(0) },
		{ name: '茶店镇', value: (Math.random() * 1000 + 100).toFixed(0) },
		{ name: '镇川镇', value: (Math.random() * 1000 + 100).toFixed(0) },
		{ name: '漆树坝镇', value: (Math.random() * 1000 + 100).toFixed(0) },
		{ name: '张家河镇', value: (Math.random() * 1000 + 100).toFixed(0) },
		{ name: '长沟河镇', value: (Math.random() * 1000 + 100).toFixed(0) },
	]
$.get(uploadedDataURL, function(getJSON) {
    echarts.registerMap("勉县", getJSON)
    option = {
        visualMap: {
            show: true,
            min: 0,
            max: 1000,
            calculable: true,
            realtime: false,
            inRange: {
                color: ['#2884db', '#244779']
            },
            textStyle:{
                color:'#fff'
            }
        },
        series: [{
            tooltip: {
                trigger: 'item'
            },
            zlevel:1,
            name: '勉县',
            type: 'map3D',
            map: '勉县',
            boxDepth: 120, //地图倾斜度
            regionHeight: 3, //地图厚度
            label: {
                show: true, //是否显示市
                textStyle: {
                    color: "#fff", //文字颜色
                    fontSize: 12, //文字大小
                    fontFamily: '微软雅黑',
                    backgroundColor: "rgba(0,0,0,0)", //透明度0清空文字背景
                },
            },
            itemStyle: {
                opacity: 0.9, // 透明度
                borderWidth: 0.6, //分界线宽度
                borderColor: "#207fce", //分界线颜色
            },
            groundplane: {
                show: false
            },
            data: data,
            // shading: 'realistic',
            // 真实感材质相关配置 shading: 'realistic'时有效
            realisticMaterial: {
                detailTexture: '#fff', // 纹理贴图
                textureTiling: 1, // 纹理平铺，1是拉伸，数字表示纹理平铺次数
                roughness: 0, // 材质粗糙度，0完全光滑，1完全粗糙
                metalness: 0, // 0材质是非金属 ，1金属
                roughnessAdjust: 0
            },
            viewControl:{
				projection: 'perspective',	
				distance: 120,	
				center:[-5,-22,0]
			}
        },
        
        
    ],
        // dataRange: {
        //     show: false,
        //     splitList: splitList
        // },
        animation: false
    };
    myChart.setOption(option);
    myChart.on("click", chartClick);
})
