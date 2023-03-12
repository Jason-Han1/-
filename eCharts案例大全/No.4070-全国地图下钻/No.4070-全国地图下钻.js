var mapName = "china";


var uploadedXianDataURL = "/asset/get/s/data-1612348433711-0YtdHoWsB.json";

var uploadedXianYangDataURL = "/asset/get/s/data-1612348402826-o627eK3ub.json";

function initImportMapFile(name) {
    const provinceFileName = {
        浙江: 'zhejiang.js',
        安徽: 'anhui.js',
        澳门: 'aomen.js',
        北京: 'beijing.js',
        重庆: 'chongqing.js',
        福建: 'fujian.js',
        甘肃: 'gansu.js',
        广东: 'guangdong.js',
        广西: 'guangxi.js',
        贵州: 'guizhou.js',
        海南: 'hainan.js',
        河北: 'hebei.js',
        黑龙江: 'heilongjiang.js',
        河南: 'henan.js',
        湖北: 'hubei.js',
        湖南: 'hunan.js',
        江苏: 'jiangsu.js',
        江西: 'jiangxi.js',
        吉林: 'jilin.js',
        辽宁: 'liaoning.js',
        内蒙古: 'neimenggu.js',
        宁夏: 'ningxia.js',
        青海: 'qinghai.js',
        山东: 'shandong.js',
        上海: 'shanghai.js',
        山西: 'shanxi.js',
        陕西: 'shanxi1.js',
        四川: 'sichuan.js',
        台湾: 'taiwan.js',
        天津: 'tianjin.js',
        香港: 'xianggang.js',
        新疆: 'xinjiang.js',
        西藏: 'xizang.js',
        云南: 'yunnan.js',
    };
    const cityFileName = {
        西安市: uploadedXianDataURL,
        咸阳市: uploadedXianYangDataURL,
    };
    if (name === 'china') {
        return require('echarts/map/js/china.js');
    } else if (name.indexOf('市') > 0) {
        return echarts.registerMap(name, {
            type: 'FeatureCollection',
            features: require(`${cityFileName[name]}`),
        });
    } else {
        return require(`echarts/map/js/province/${provinceFileName[name]}`);
    }
};

// 动态加载echarts官方各省geojson数据方法，，，该方法只能在自己项目中使用
// initImportMapFile(mapName);

var option = {
    geo: {
        map: mapName,
        zoom: 1.2,
        itemStyle: {
            normal: {
                areaColor: '#09184D',
                borderColor: '#75DCFF',
            },
            emphasis: {
                areaColor: '#09184D',
                borderColor: '#75DCFF',
            },
        },
        label: {
            emphasis: {
                show: true,
                textStyle: {
                    color: '#fff',
                },
            },
        },
    },
    series: [{
        type: 'map',
        map: mapName,
        geoIndex: 0,
        itemStyle: {
            normal: {
                areaColor: '#09184D',
                borderColor: '#75DCFF',
            },
            emphasis: {
                areaColor: '#09184D',
                borderColor: '#75DCFF',
            },
        },
        label: {
            emphasis: {
                show: true,
                textStyle: {
                    color: '#fff',
                },
            },
        },
        data: []
    }],
};
