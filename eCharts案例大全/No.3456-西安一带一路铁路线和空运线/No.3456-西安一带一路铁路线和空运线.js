var dataUrl = '/asset/get/s/data-1621231735954-7hn-LnaK3.json';
let nameMap = {
    'Singapore Rep.': '新加坡',
    'Dominican Rep.': '多米尼加',
    Palestine: '巴勒斯坦',
    Bahamas: '巴哈马',
    'Timor-Leste': '东帝汶',
    Afghanistan: '阿富汗',
    'Guinea-Bissau': '几内亚比绍',
    "Côte d'Ivoire": '科特迪瓦',
    'Siachen Glacier': '锡亚琴冰川',
    'Br. Indian Ocean Ter.': '英属印度洋领土',
    Angola: '安哥拉',
    Albania: '阿尔巴尼亚',
    'United Arab Emirates': '阿联酋',
    Argentina: '阿根廷',
    Armenia: '亚美尼亚',
    'French Southern and Antarctic Lands': '法属南半球和南极领地',
    Australia: '澳大利亚',
    Austria: '奥地利',
    Azerbaijan: '阿塞拜疆',
    Burundi: '布隆迪',
    Belgium: '比利时',
    Benin: '贝宁',
    'Burkina Faso': '布基纳法索',
    Bangladesh: '孟加拉国',
    Bulgaria: '保加利亚',
    'The Bahamas': '巴哈马',
    'Bosnia and Herz.': '波斯尼亚和黑塞哥维那',
    Belarus: '白俄罗斯',
    Belize: '伯利兹',
    Bermuda: '百慕大',
    Bolivia: '玻利维亚',
    Brazil: '巴西',
    Brunei: '文莱',
    Bhutan: '不丹',
    Botswana: '博茨瓦纳',
    'Central African Rep.': '中非',
    Canada: '加拿大',
    Switzerland: '瑞士',
    Chile: '智利',
    China: '中华人民共和国',
    'Ivory Coast': '象牙海岸',
    Cameroon: '喀麦隆',
    'Dem. Rep. Congo': '刚果民主共和国',
    Congo: '刚果',
    Colombia: '哥伦比亚',
    'Costa Rica': '哥斯达黎加',
    Cuba: '古巴',
    'N. Cyprus': '北塞浦路斯',
    Cyprus: '塞浦路斯',
    'Czech Rep.': '捷克',
    Germany: '德国',
    Djibouti: '吉布提',
    Denmark: '丹麦',
    Algeria: '阿尔及利亚',
    Ecuador: '厄瓜多尔',
    Egypt: '埃及',
    Eritrea: '厄立特里亚',
    Spain: '西班牙',
    Estonia: '爱沙尼亚',
    Ethiopia: '埃塞俄比亚',
    Finland: '芬兰',
    Fiji: '斐',
    'Falkland Islands': '福克兰群岛',
    France: '法国',
    Gabon: '加蓬',
    'United Kingdom': '英国',
    Georgia: '格鲁吉亚',
    Ghana: '加纳',
    Guinea: '几内亚',
    Gambia: '冈比亚',
    'Guinea Bissau': '几内亚比绍',
    'Eq. Guinea': '赤道几内亚',
    Greece: '希腊',
    Greenland: '格陵兰',
    Guatemala: '危地马拉',
    'French Guiana': '法属圭亚那',
    Guyana: '圭亚那',
    Honduras: '洪都拉斯',
    Croatia: '克罗地亚',
    Haiti: '海地',
    Hungary: '匈牙利',
    Indonesia: '印度尼西亚',
    India: '印度',
    Ireland: '爱尔兰',
    Iran: '伊朗',
    Iraq: '伊拉克',
    Iceland: '冰岛',
    Israel: '以色列',
    Italy: '意大利',
    Jamaica: '牙买加',
    Jordan: '约旦',
    Japan: '日本',
    Kazakhstan: '哈萨克斯坦',
    Kenya: '肯尼亚',
    Kyrgyzstan: '吉尔吉斯斯坦',
    Cambodia: '柬埔寨',
    Korea: '韩国',
    Kosovo: '科索沃',
    Kuwait: '科威特',
    'Lao PDR': '老挝',
    Lebanon: '黎巴嫩',
    Liberia: '利比里亚',
    Libya: '利比亚',
    'Sri Lanka': '斯里兰卡',
    Lesotho: '莱索托',
    Lithuania: '立陶宛',
    Luxembourg: '卢森堡',
    Latvia: '拉脱维亚',
    Morocco: '摩洛哥',
    Moldova: '摩尔多瓦',
    Madagascar: '马达加斯加',
    Mexico: '墨西哥',
    Macedonia: '马其顿',
    Mali: '马里',
    Myanmar: '缅甸',
    Montenegro: '黑山',
    Mongolia: '蒙古',
    Mozambique: '莫桑比克',
    Mauritania: '毛里塔尼亚',
    Malawi: '马拉维',
    Malaysia: '马来西亚',
    Namibia: '纳米比亚',
    'New Caledonia': '新喀里多尼亚',
    Niger: '尼日尔',
    Nigeria: '尼日利亚',
    Nicaragua: '尼加拉瓜',
    Netherlands: '荷兰',
    Norway: '挪威',
    Nepal: '尼泊尔',
    'New Zealand': '新西兰',
    Oman: '阿曼',
    Pakistan: '巴基斯坦',
    Panama: '巴拿马',
    Peru: '秘鲁',
    Philippines: '菲律宾',
    'Papua New Guinea': '巴布亚新几内亚',
    Poland: '波兰',
    'Puerto Rico': '波多黎各',
    'Dem. Rep. Korea': '朝鲜',
    Portugal: '葡萄牙',
    Paraguay: '巴拉圭',
    Qatar: '卡塔尔',
    Romania: '罗马尼亚',
    Russia: '俄罗斯',
    Rwanda: '卢旺达',
    'W. Sahara': '西撒哈拉',
    'Saudi Arabia': '沙特阿拉伯',
    Sudan: '苏丹',
    'S. Sudan': '南苏丹',
    Senegal: '塞内加尔',
    'Solomon Is.': '所罗门群岛',
    'Sierra Leone': '塞拉利昂',
    'El Salvador': '萨尔瓦多',
    Somaliland: '索马里兰',
    Somalia: '索马里',
    Serbia: '塞尔维亚',
    Suriname: '苏里南',
    Slovakia: '斯洛伐克',
    Slovenia: '斯洛文尼亚',
    Sweden: '瑞典',
    Swaziland: '斯威士兰',
    Syria: '叙利亚',
    Chad: '乍得',
    Togo: '多哥',
    Thailand: '泰国',
    Tajikistan: '塔吉克斯坦',
    Turkmenistan: '土库曼斯坦',
    'East Timor': '东帝汶',
    'Trinidad and Tobago': '特里尼达和多巴哥',
    Tunisia: '突尼斯',
    Turkey: '土耳其',
    Tanzania: '坦桑尼亚',
    Uganda: '乌干达',
    Ukraine: '乌克兰',
    Uruguay: '乌拉圭',
    'United States': '美国',
    Uzbekistan: '乌兹别克斯坦',
    Venezuela: '委内瑞拉',
    Vietnam: '越南',
    Vanuatu: '瓦努阿图',
    'West Bank': '西岸',
    Yemen: '也门',
    'South Africa': '南非',
    Zambia: '赞比亚',
    Zimbabwe: '津巴布韦',
    Comoros: '科摩罗',
};

let showCountryLabel = [
    {
        name: '中华人民共和国',
        label: {
            show: true,
        },
    },
    {
        name: '俄罗斯',
        label: {
            show: true,
        },
    },
    {
        name: '美国',
        label: {
            show: true,
        },
    },
    {
        name: '加拿大',
        label: {
            show: true,
        },
    },
    {
        name: '蒙古',
        label: {
            show: true,
        },
    },
    {
        name: '格陵兰',
        label: {
            show: true,
        },
    },
    {
        name: '冰岛',
        label: {
            show: true,
        },
    },
    {
        name: '墨西哥',
        label: {
            show: true,
        },
    },
    {
        name: '巴拿马',
        label: {
            show: true,
        },
    },
    {
        name: '哥伦比亚',
        label: {
            show: true,
        },
    },
    {
        name: '委内瑞拉',
        label: {
            show: true,
        },
    },
    {
        name: '巴西',
        label: {
            show: true,
        },
    },
    {
        name: '玻利维亚',
        label: {
            show: true,
        },
    },
    {
        name: '阿根廷',
        label: {
            show: true,
        },
    },
    {
        name: '瑞德',
        label: {
            show: true,
        },
    },
    {
        name: '芬兰',
        label: {
            show: true,
        },
    },
    {
        name: '法国',
        label: {
            show: true,
        },
    },
    {
        name: '德国',
        label: {
            show: true,
        },
    },
    {
        name: '意大利',
        label: {
            show: true,
        },
    },
    {
        name: '波兰',
        label: {
            show: true,
        },
    },
    {
        name: '乌克兰',
        label: {
            show: true,
        },
    },
    {
        name: '意大利',
        label: {
            show: true,
        },
    },
    {
        name: '哈萨克斯坦',
        label: {
            show: true,
        },
    },
    {
        name: '土库曼斯坦',
        label: {
            show: true,
        },
    },
    {
        name: '塔吉克斯坦',
        label: {
            show: true,
        },
    },
    {
        name: '韩国',
        label: {
            show: true,
        },
    },
    {
        name: '日本',
        label: {
            show: true,
        },
    },
    {
        name: '尼泊尔',
        label: {
            show: true,
        },
    },
    {
        name: '伊朗',
        label: {
            show: true,
        },
    },
    {
        name: '印度',
        label: {
            show: true,
        },
    },
    {
        name: '泰国',
        label: {
            show: true,
        },
    },
    {
        name: '越南',
        label: {
            show: true,
        },
    },
    {
        name: '柬埔寨',
        label: {
            show: true,
        },
    },
    {
        name: '印度尼西亚',
        label: {
            show: true,
        },
    },
    {
        name: '澳大利亚',
        label: {
            show: true,
        },
    },
    {
        name: '马达加斯加',
        label: {
            show: true,
        },
    },
    {
        name: '沙特阿拉伯',
        label: {
            show: true,
        },
    },
    {
        name: '索马里',
        label: {
            show: true,
        },
    },
    {
        name: '埃及',
        label: {
            show: true,
        },
    },
    {
        name: '利比亚',
        label: {
            show: true,
        },
    },
    {
        name: '摩洛哥',
        label: {
            show: true,
        },
    },
    {
        name: '毛里塔尼亚',
        label: {
            show: true,
        },
    },
    {
        name: '乍得',
        label: {
            show: true,
        },
    },
    {
        name: '苏丹',
        label: {
            show: true,
        },
    },
    {
        name: '加纳',
        label: {
            show: true,
        },
    },
    {
        name: '尼日利亚',
        label: {
            show: true,
        },
    },
    {
        name: '刚果民主共和国',
        label: {
            show: true,
        },
    },
    {
        name: '纳米比亚',
        label: {
            show: true,
        },
    },
    {
        name: '莱索托',
        label: {
            show: true,
        },
    },
    {
        name: '南非',
        label: {
            show: true,
        },
    },
];

let geoCoords = new Map([
    [
        '连云港',
        {
            point: [119.169381, 34.61548],
        },
    ],
    [
        '郑州',
        {
            point: [113.666136, 34.752394],
        },
    ],
    [
        '天津',
        {
            point: [117.210186, 39.014245],
        },
    ],
    [
        '呼和浩特',
        {
            point: [111.764711, 40.877449],
        },
    ],
    [
        '齐齐哈尔',
        {
            point: [123.924569, 47.363299],
        },
    ],
    [
        '满洲里',
        {
            point: [117.456842, 49.59072],
        },
    ],
    [
        '二连浩特',
        {
            point: [111.995683, 43.663274],
        },
    ],
    [
        '乌兰乌德',
        {
            point: [107.58326, 51.84072],
        },
    ],
    [
        '叶卡捷琳堡',
        {
            point: [60.598335, 56.841576],
        },
    ],
    [
        '西安',
        {
            point: [108.922893, 34.35776],
        },
    ],
    [
        '宝鸡',
        {
            point: [107.239398, 34.370345],
        },
    ],
    [
        '兰州',
        {
            point: [103.842824, 36.068168],
        },
    ],
    [
        '武威',
        {
            point: [102.649155, 37.946217],
        },
    ],
    [
        '嘉峪关',
        {
            point: [98.282977, 39.78151],
        },
    ],
    [
        '哈密',
        {
            point: [93.511438, 42.835982],
        },
    ],
    [
        '乌鲁木齐',
        {
            point: [87.619839, 43.840335],
        },
    ],
    [
        '精河',
        {
            point: [83.031527, 44.642452],
        },
    ],
    [
        '阿拉山口',
        {
            point: [82.569924, 45.178858],
        },
    ],
    [
        '阿克斗卡',
        {
            point: [74.995412, 48.326227],
        },
    ],
    [
        '巴尔喀什',
        {
            point: [71.623044, 46.620455],
        },
    ],
    [
        '扎雷克',
        {
            point: [69.121011, 47.922668],
        },
    ],
    [
        '卡拉干达',
        {
            point: [69.121011, 49.768094],
        },
    ],
    [
        '切利诺格勒',
        {
            point: [69.121011, 49.768094],
        },
    ],
    [
        '阿斯塔纳',
        {
            point: [66.030265, 51.084295],
        },
    ],
    [
        '叶西尔',
        {
            point: [67.552688, 51.011472],
        },
    ],
    [
        '托博尔',
        {
            point: [65.345012, 51.011472],
        },
    ],
    [
        '十月城',
        {
            point: [64.60912, 48.436012],
        },
    ],
    [
        '萨马拉',
        {
            point: [52.342676, 53.078814],
        },
    ],
    [
        '萨兰斯克',
        {
            point: [43.585563, 54.085977],
        },
    ],
    [
        '莫斯科',
        {
            point: [37.61616, 55.75696],
        },
    ],
    [
        '乌克兰',
        {
            point: [30.498671, 50.444727],
        },
    ],
    [
        '明斯克',
        {
            point: [27.561637, 53.916397],
        },
    ],
    [
        '华沙',
        {
            point: [20.991532, 52.289297],
        },
    ],
    [
        '柏林',
        {
            point: [13.404954, 52.521409],
        },
    ],
    [
        '汉堡',
        {
            point: [9.992629, 53.554505],
        },
    ],
    [
        '圣彼得堡',
        {
            point: [30.334211, 59.938657],
        },
    ],
    [
        '赫尔辛基',
        {
            point: [24.939374, 60.175857],
        },
    ],
    [
        '首尔',
        {
            point: [126.960147, 37.613887],
        },
    ],
    [
        '阿拉木图',
        {
            point: [76.857223, 43.220205],
        },
    ],
    [
        '新加坡',
        {
            point: [103.865254, 1.361631],
        },
    ],
    [
        '曼谷',
        {
            point: [100.450703, 13.715133],
        },
    ],
    [
        '韩国',
        {
            point: [129.083478, 35.1796],
        },
    ],
]);

function getCountryLabel(country) {
    if (!country) {
        return [];
    }
    let labels = [];
    for (let i = 0; i < country.length; i++) {
        labels.push(country[i].name);
    }
    return labels;
}

let countryLabel = getCountryLabel(showCountryLabel);

let railwayLineStyle = {
    color: 'white',
    width: 4,
    type: 'dashed',
};
let railwayEmphasis = {
    lineStyle: {
        color: 'yellow',
        width: 5,
    },
};

let flyLineStyle = {
    color: 'green',
    width: 4,
    type: 'solid',
    join: 'round',
    curveness: 0.3,
};
let flyEmphasis = {
    lineStyle: {
        color: 'red',
        width: 5,
        curveness: 0.3,
    },
};

let effectScatterDataLabel = {
    show: true,
    formatter: (v) => {
        return v.data.name;
    },
};

let railwayLine1 = {
    name: '一带一路铁路线路一',
    coords: ['西安', '郑州', '呼和浩特', '二连浩特', '乌兰乌德', '叶卡捷琳堡', '莫斯科', '明斯克'],
};
let railwayLine2 = {
    name: '一带一路铁路线路二',
    coords: ['西安', '郑州', '天津', '齐齐哈尔', '满洲里', '乌兰乌德', '叶卡捷琳堡', '莫斯科', '乌克兰'],
};
let railwayLine3 = {
    name: '一带一路铁路线路三',
    coords: [
        '西安',
        '宝鸡',
        '兰州',
        '武威',
        '嘉峪关',
        '哈密',
        '乌鲁木齐',
        '阿拉山口',
        '阿克斗卡',
        '莫斯科',
        '明斯克',
        '华沙',
        '柏林',
        '汉堡',
    ],
};

let flyLine1 = {
    name: '一带一路飞行线路一',
    coords: ['首尔', '西安'],
};
let flyLine2 = {
    name: '一带一路飞行线路一',
    coords: ['阿拉木图', '西安'],
};
let flyLine3 = {
    name: '一带一路飞行线路一',
    coords: ['新加坡', '西安'],
};
let flyLine4 = {
    name: '一带一路飞行线路一',
    coords: ['叶卡捷琳堡', '西安'],
};
let flyLine5 = {
    name: '一带一路飞行线路一',
    coords: ['曼谷', '西安'],
};
let flyLine6 = {
    name: '一带一路飞行线路一',
    coords: ['西安', '首尔'],
};
let flyLine7 = {
    name: '一带一路飞行线路一',
    coords: ['西安', '阿拉木图'],
};
let flyLine9 = {
    name: '一带一路飞行线路一',
    coords: ['西安', '叶卡捷琳堡'],
};
let flyLine10 = {
    name: '一带一路飞行线路一',
    coords: ['西安', '曼谷'],
};
let flyLine11 = {
    name: '一带一路飞行线路一',
    coords: ['西安', '莫斯科'],
};

let effectScatterPointData = [
    {
        name: '西安',
    },
    {
        name: '满洲里',
    },
    {
        name: '乌兰乌德',
    },
    {
        name: '叶卡捷琳堡',
    },
    {
        name: '莫斯科',
    },
    {
        name: '汉堡',
    },
    {
        name: '阿拉山口',
    },
    {
        name: '曼谷',
    },
    {
        name: '新加坡',
    },
    {
        name: '首尔',
    },
    {
        name: '明斯克',
    },
    {
        name: '乌克兰',
    },
    {
        name: '呼和浩特',
    },
    {
        name: '阿拉木图',
    },
];

function lineDataBuild(line) {
    if (!line) {
        return [];
    }
    let coords = [];
    for (let i = 0; i < line.length; i++) {
        coords.push(cityCoordConvert(line[i]));
    }
    return coords;
}

function pointDataBuild(points, container) {
    if (!points) {
        return [];
    }
    for (let i = 0; i < points.length; i++) {
        container.push({
            coord: cityCoordConvert(points[i]),
            value: points[i],
        });
    }
}

function effectScatterDataBuild(data) {
    if (!data) {
        return [];
    }
    let innerData = [];
    innerData.push.apply(innerData, data);
    for (let i = 0; i < innerData.length; i++) {
        innerData[i].value = cityCoordConvert(innerData[i].name);
        innerData[i].label = effectScatterDataLabel;
    }
    return innerData;
}

function cityCoordConvert(city) {
    if (!city) {
        return [];
    }
    return geoCoords.get(city).point;
}

let railwayLinesData = [railwayLine1, railwayLine2, railwayLine3];

let flayLinesData = [
    flyLine1,
    flyLine2,
    flyLine3,
    flyLine4,
    flyLine5,
    flyLine6,
    flyLine7,
    flyLine9,
    flyLine10,
    flyLine11,
];

let series = [];

let railwaySeriesData = [];
let railwayPointsData = [];

for (let i = 0; i < railwayLinesData.length; i++) {
    let coords = [];
    coords.push.apply(coords, railwayLinesData[i].coords);
    railwayLinesData[i].coords = lineDataBuild(coords);
    railwayLinesData[i].lineStyle = railwayLineStyle;
    railwayLinesData[i].emphasis = railwayEmphasis;
    railwaySeriesData.push(railwayLinesData[i]);
    pointDataBuild(coords, railwayPointsData);
}

let railwayPoints = new Set(railwayPointsData);
railwayPointsData.length = 0;
railwayPointsData = Array.from(railwayPoints);

let railwaySeries = {
    type: 'lines',
    coordinateSystem: 'geo',
    polyline: true,
    effect: {
        show: true,
        period: 3,
        symbol: 'triangle',
        symbolSize: 11,
    },
    data: railwaySeriesData,
    // markPoint: {
    //   data: railwayPointsData
    // }
};

series.push(railwaySeries);

let flySeriesData = [];
let flyPointsData = [];

for (let i = 0; i < flayLinesData.length; i++) {
    let coords = [];
    coords.push.apply(coords, flayLinesData[i].coords);
    flayLinesData[i].coords = lineDataBuild(coords);
    flayLinesData[i].lineStyle = flyLineStyle;
    flayLinesData[i].emphasis = flyEmphasis;
    flySeriesData.push(flayLinesData[i]);
    pointDataBuild(coords, flyPointsData);
}

let flyPoints = new Set(flyPointsData);
flyPointsData.length = 0;
flyPointsData = Array.from(flyPoints);

let flySeries = {
    type: 'lines',
    coordinateSystem: 'geo',
    effect: {
        show: true,
        period: 3,
        symbol: 'triangle',
        symbolSize: 11,
    },
    data: flySeriesData,
    // markPoint: {
    //   data: flyPointsData
    // }
};

series.push(flySeries);

let effectScatterSeries = {
    type: 'effectScatter',
    coordinateSystem: 'geo',
    rippleEffect: {
        period: 3,
        scala: 5,
    },
    symbol: 'circle',
    symbolSize: 17,
    data: effectScatterDataBuild(effectScatterPointData),
};

series.push(effectScatterSeries);

//高亮地图填充色
let lightColor = 'red';
// 散点图默认颜色
let ScatterColor = 'yellow';
// 地图默认状态填充色
let mapAreaColor = '#06265c';

$.getJSON(dataUrl, function (worldJson) {

    echarts.registerMap('world', worldJson);

    option = {
        backgroundColor: '#000',
        animation: false,
        geo: {
            show: true,
            map: 'world',
            nameMap: nameMap,
            roam: true,
            zoom: 1,
            label: {
                show: false,
                color: 'white',
            },
            itemStyle: {
                areaColor: mapAreaColor,
                color: 'white',
            },
            emphasis: {
                focus: 'none',
                label: {
                    show: true,
                    color: 'white',
                    formatter: (params) => {
                        if (!countryLabel.includes(params.name)) {
                            return '';
                        }
                        return params.name;
                    },
                },
                itemStyle: {
                    areaColor: mapAreaColor,
                },
            },
            regions: showCountryLabel,
        },
        series: series,
    };

    myChart.setOption(option);

    myChart.on('click', function (params) {
        if (params.componentType === 'series' && params.componentSubType === 'lines') {
            alert(params.data.name);
        }
    });
});
