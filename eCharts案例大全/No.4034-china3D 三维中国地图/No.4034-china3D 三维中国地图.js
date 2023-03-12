var geoCoordMap = {
	新疆: [86.61, 40.79],
	西藏: [89.13, 30.66],
	黑龙江: [128.34, 47.05],
	吉林: [126.32, 43.38],
	辽宁: [123.42, 41.29],
	内蒙古: [112.17, 42.81],
	北京: [116.4, 40.4],
	宁夏: [106.27, 36.76],
	山西: [111.95, 37.65],
	河北: [115.21, 38.44],
	天津: [117.04, 39.52],
	青海: [97.07, 35.62],
	甘肃: [103.82, 36.05],
	山东: [118.01, 36.37],
	陕西: [108.94, 34.46],
	河南: [113.46, 34.25],
	安徽: [117.28, 31.86],
	江苏: [120.26, 32.54],
	上海: [121.46, 31.28],
	四川: [103.36, 30.65],
	湖北: [112.29, 30.98],
	浙江: [120.15, 29.28],
	重庆: [107.51, 29.63],
	湖南: [112.08, 27.79],
	江西: [115.89, 27.97],
	贵州: [106.91, 26.67],
	福建: [118.31, 26.07],
	云南: [101.71, 24.84],
	台湾: [121.01, 23.54],
	广西: [108.67, 23.68],
	广东: [113.98, 22.82],
	海南: [110.03, 19.33],
	澳门: [113.54, 22.19],
	香港: [114.17, 22.32],
};

//原始数据 mock
var originData = [
	{
		name: "黑龙江",
		value: 28,
		children: [
			{ name: "哈尔滨市", value: 4 },
			{ name: "齐齐哈尔市", value: 24 },
		],
	},
	{
		name: "四川",
		value: 18,
		children: [
			{ name: "德阳", value: 4 },
			{ name: "成都", value: 14 },
		],
	},
	{
		name: "内蒙古",
		value: 15,
		children: [
			{ name: "呼和浩特市", value: 7 },
			{ name: "呼伦贝尔市", value: 8 },
		],
	},
];

var convertData = function (data) {
	var res = [];
	for (var i = 0; i < data.length; i++) {
		var geoCoord = geoCoordMap[data[i].name];
		if (geoCoord) {
			res.push({
				name: data[i].name,
				value: geoCoord.concat(data[i].value),
			});
		}
	}
	return res;
};
var chinaData = convertData(originData);
var regions = [];
originData.forEach((item) => {
	regions.push({
		name: item.name,
		height: 5,
		itemStyle: { color: "#eddaad" },
		label: {
			show: false,
		},
		emphasis: {
			itemStyle: { color: "#eddaad" },
			label: { show: true },
		},
	});
});
option = {
	title: {
        text: '各省油站总数概览',
        textStyle: {
            color: '#208edc',
            fontSize: 14,
            fontWeight: 'normal',
        },
        left: 5,
        top: 5,
    },
	geo3D: {
		map: "china",
		shading: "lambert",
		regionHeight: 4,
		itemStyle: {
			opacity: 1,
			borderWidth: 1,
			borderColor: "#fff8e3",
		},
		emphasis: {
			label: {
				distance: 20,
			},
			itemStyle: {
				color: "#8aceff",
			},
		},
		groundPlane: {
			show: true,
			color: "#fff",
		},
		regions: regions,
		boxHeight: 24,
		lambertMaterial: {
			detailTexture: '/asset/get/s/data-1491896059428-B1QbPbq6e.jpg',
			textureTiling: 20,
		},
		postEffect: {
			enable: true,
			SSAO: {
				enable: true,
				radius: 3,
				intensity: 1.3,
				quality: "high",
			},
		},
		//分帧超采样
		temporalSuperSampling: {
			enable: true,
		},
		light: {
			//主光源
			main: {
				intensity: 1,
				shadow: true,
				shadowQuality: "high",
				alpha: 40,
				beta: 77,
			},
			//全局环境光
			ambient: {
				intensity: 0.2,
			},
		},
		viewControl: {
			distance: 70,
			minDistance: 65,
			maxDistance: 95,
			alpha: 30,
			beta: 15,

			minAlpha: 25,
			maxAlpha: 70,
			minBeta: 15,
			maxBeta: 15,
		},
	},
	series: [
		{
			type: "bar3D",
			name: "bar3D",
			coordinateSystem: "geo3D",
			//倒角
			bevelSize: 0.8,
			bevelSmoothness: 2,
			minHeight: 3,
			itemStyle: {
				color: "#00960c",
			},
			emphasis: {
				label: {
					show: false,
				},
			},
			shading: "color",
			data: chinaData,
		},
	],
};