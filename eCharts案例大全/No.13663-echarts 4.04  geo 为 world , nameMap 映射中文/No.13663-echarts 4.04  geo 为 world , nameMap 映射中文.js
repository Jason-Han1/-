var nameMap = {
    Afghanistan: "阿富汗",
    Albania: "阿尔巴尼亚",
    Algeria: "阿尔及利亚",
    Andorra: "安道尔",
    Angola: "安哥拉",
    Antarctica: "南极洲",
    "Antigua and Barbuda": "安提瓜和巴布达",
    Argentina: "阿根廷",
    Armenia: "亚美尼亚",
    Australia: "澳大利亚",
    Austria: "奥地利",
    Azerbaijan: "阿塞拜疆",
    "The Bahamas": "巴哈马",
    Bahrain: "巴林",
    Bangladesh: "孟加拉国",
    Barbados: "巴巴多斯",
    Belarus: "白俄罗斯",
    Belgium: "比利时",
    Belize: "伯利兹",
    Benin: "贝宁",
    Bermuda: "百慕大",
    Bhutan: "不丹",
    Bolivia: "玻利维亚",
    "Bosnia and Herz.": "波黑",
    Botswana: "博茨瓦纳",
    Brazil: "巴西",
    Brunei: "文莱",
    Bulgaria: "保加利亚",
    "Burkina Faso": "布基纳法索",
    Burundi: "布隆迪",
    Bahamas: "巴哈马国",
    Cambodia: "柬埔寨",
    Cameroon: "喀麦隆",
    Canada: "加拿大",
    "Cape Verde": "佛得角",
    "Central African Rep.": "中非共和国",
    Chad: "乍得",
    Chile: "智利",
    China: "中国",
    Colombia: "哥伦比亚",
    Comoros: "科摩罗",
    Congo: "刚果共和国",
    "Costa Rica": "哥斯达黎加",
    Croatia: "克罗地亚",
    Cuba: "古巴",
    Cyprus: "塞浦路斯",
    "Czech Rep.": "捷克共和国",
    "Côte d'Ivoire": "科特迪瓦",
    Denmark: "丹麦",
    Djibouti: "吉布提",
    "Dominican Rep.": "多米尼加",
    "Dominican Republic": "多明尼加共和国",
    Ecuador: "厄瓜多尔",
    Egypt: "埃及",
    "El Salvador": "萨尔瓦多",
    "Eq. Guinea": "赤道几内亚",
    Eritrea: "厄立特里亚",
    Estonia: "爱沙尼亚",
    Ethiopia: "埃塞俄比亚",
    "Falkland Islands": "福克兰群岛",
    "Faroe Islands": "法罗群岛",
    Fiji: "斐济",
    Finland: "芬兰",
    France: "法国",
    "French Guiana": "法属圭亚那",
    "French Southern and Antarctic Lands": "法属南半球和南极领地",
    Gabon: "加蓬",
    Gambia: "冈比亚",
    "Gaza Strip": "加沙",
    Georgia: "格鲁吉亚",
    Germany: "德国",
    Ghana: "加纳",
    Greece: "希腊",
    Greenland: "格陵兰",
    Grenada: "格林纳达",
    Guadeloupe: "瓜德罗普",
    Guatemala: "危地马拉",
    Guinea: "几内亚",
    "Guinea-Bissau": "几内亚比绍",
    Guyana: "圭亚那",
    Haiti: "海地",
    Honduras: "洪都拉斯",
    "Hong Kong": "香港",
    Hungary: "匈牙利",
    Iceland: "冰岛",
    India: "印度",
    Indonesia: "印尼",
    Iran: "伊朗",
    Iraq: "伊拉克",
    "Iraq-Saudi Arabia Neutral Zone": "伊拉克阿拉伯中立区",
    Ireland: "爱尔兰",
    "Isle of Man": "马恩岛",
    Israel: "以色列",
    Italy: "意大利",
    "Ivory Coast": "科特迪瓦",
    Jamaica: "牙买加",
    "Jan Mayen": "扬马延岛",
    Japan: "日本",
    Jordan: "约旦",
    Kazakhstan: "哈萨克斯坦",
    Kenya: "肯尼亚",
    Kerguelen: "凯尔盖朗群岛",
    Kiribati: "基里巴斯",
    "Dem. Rep. Korea": "朝鲜",
    "Korea": "韩国",
    Kuwait: "科威特",
    Kyrgyzstan: "吉尔吉斯斯坦",
    "Lao PDR": "老挝",
    Latvia: "拉脱维亚",
    Lebanon: "黎巴嫩",
    Lesotho: "莱索托",
    Liberia: "利比里亚",
    Libya: "利比亚",
    Liechtenstein: "列支敦士登",
    Lithuania: "立陶宛",
    Luxembourg: "卢森堡",
    Macau: "澳门",
    Macedonia: "马其顿",
    Madagascar: "马达加斯加",
    Malawi: "马拉维",
    Malaysia: "马来西亚",
    Maldives: "马尔代夫",
    Mali: "马里",
    Malta: "马耳他",
    Martinique: "马提尼克",
    Mauritania: "毛里塔尼亚",
    Mauritius: "毛里求斯",
    Mexico: "墨西哥",
    Moldova: "摩尔多瓦",
    Monaco: "摩纳哥",
    Mongolia: "蒙古",
    Morocco: "摩洛哥",
    Mozambique: "莫桑比克",
    Myanmar: "缅甸",
    Namibia: "纳米比亚",
    Nepal: "尼泊尔",
    Netherlands: "荷兰",
    "New Caledonia": "新喀里多尼亚",
    "New Zealand": "新西兰",
    Nicaragua: "尼加拉瓜",
    Niger: "尼日尔",
    Nigeria: "尼日利亚",
    "Northern Mariana Islands": "北马里亚纳群岛",
    Norway: "挪威",
    Oman: "阿曼",
    Pakistan: "巴基斯坦",
    Panama: "巴拿马",
    "Papua New Guinea": "巴布亚新几内亚",
    Paraguay: "巴拉圭",
    Peru: "秘鲁",
    Philippines: "菲律宾",
    Poland: "波兰",
    Portugal: "葡萄牙",
    "Puerto Rico": "波多黎各",
    Qatar: "卡塔尔",
    Reunion: "留尼旺岛",
    Romania: "罗马尼亚",
    Russia: "俄罗斯",
    Rwanda: "卢旺达",
    "San Marino": "圣马力诺",
    "Sao Tome and Principe": "圣多美和普林西比",
    "Saudi Arabia": "沙特阿拉伯",
    Senegal: "塞内加尔",
    Seychelles: "塞舌尔",
    "Sierra Leone": "塞拉利昂",
    Singapore: "新加坡",
    Slovakia: "斯洛伐克",
    Slovenia: "斯洛文尼亚",
    "Solomon Is.": "所罗门群岛",
    Somalia: "索马里",
    "South Africa": "南非",
    Spain: "西班牙",
    "Sri Lanka": "斯里兰卡",
    "St. Christopher-Nevis": "圣",
    "St. Lucia": "圣露西亚",
    "St. Vincent and the Grenadines": "圣文森特和格林纳丁斯",
    'Sudan': "苏丹",
    Suriname: "苏里南",
    Svalbard: "斯瓦尔巴特群岛",
    Swaziland: "斯威士兰",
    Sweden: "瑞典",
    Switzerland: "瑞士",
    Syria: "叙利亚",
    Taiwan: "台湾",
    Tajikistan: "塔吉克斯坦",
    Tanzania: "坦桑尼亚",
    Thailand: "泰国",
    Togo: "多哥",
    Tonga: "汤加",
    "Trinidad and Tobago": "特里尼达和多巴哥",
    Tunisia: "突尼斯",
    Turkey: "土耳其",
    Turkmenistan: "土库曼斯坦",
    "Turks and Caicos Islands": "特克斯和凯科斯群岛",
    "Timor-Leste": "东帝汶",
    Uganda: "乌干达",
    Ukraine: "乌克兰",
    "United Arab Emirates": "阿联酋",
    "United Kingdom": "英国",
    "United States": "美国",
    Uruguay: "乌拉圭",
    Uzbekistan: "乌兹别克斯坦",
    Vanuatu: "瓦努阿图",
    Venezuela: "委内瑞拉",
    Vietnam: "越南",
    "W. Sahara": "西撒哈拉",
    "Western Samoa": "西萨摩亚",
    Yemen: "也门",
    Yugoslavia: "南斯拉夫",
    "Dem. Rep. Congo": "刚果民主共和国",
    Zambia: "赞比亚",
    Zimbabwe: "津巴布韦",
    "S. Sudan": "南苏丹",
    Somaliland: "索马里兰",
    Montenegro: "黑山",
    Kosovo: "科索沃",
    Serbia: "塞尔维亚"
};
// 国家颜色映射
var colorMapData = [{
        name: "中国",
        value: 1
    }, //亚洲
    {
        name: "朝鲜",
        value: 1
    },
    {
        name: "蒙古",
        value: 1
    },
    {
        name: "越南",
        value: 1
    },
    {
        name: "泰国",
        value: 1
    },
    {
        name: "柬埔寨",
        value: 1
    },
    {
        name: "尼泊尔",
        value: 1
    },
    {
        name: "缅甸",
        value: 1
    },
    {
        name: "印度",
        value: 1
    },
    {
        name: "斯里兰卡",
        value: 1
    },
    {
        name: "巴基斯坦",
        value: 1
    },
    {
        name: "塔吉克斯坦",
        value: 1
    },
    {
        name: "吉尔吉斯斯坦",
        value: 1
    },
    {
        name: "乌兹别克斯坦",
        value: 1
    },
    {
        name: "土库曼斯坦",
        value: 1
    },
    {
        name: "哈萨克斯坦",
        value: 1
    },
    {
        name: "老挝",
        value: 1
    },
    {
        name: "阿富汗",
        value: 1
    },
    {
        name: "菲律宾",
        value: 1
    },
    {
        name: "新加坡",
        value: 5
    },
    {
        name: "印尼",
        value: 2
    },
    {
        name: "韩国",
        value: 1
    },
    {
        name: "黎巴嫩",
        value: 3
    },
    {
        name: "伊拉克",
        value: 1
    },
    {
        name: "孟加拉国",
        value: 1
    },
    {
        name: "伊朗",
        value: 1
    },
    {
        name: "土耳其",
        value: 1
    },
    {
        name: "叙利亚",
        value: 1
    },
    {
        name: "阿联酋",
        value: 1
    },
    {
        name: "马来西亚",
        value: 1
    },
    {
        name: "日本",
        value: 1
    },
    {
        name: "以色列",
        value: 1
    },
    {
        name: "卡塔尔",
        value: 1
    },
    {
        name: "巴林",
        value: 5
    },
    {
        name: "沙特阿拉伯",
        value: 1
    },
    {
        name: "亚美尼亚",
        value: 3
    },
    {
        name: "科威特",
        value: 1
    },
    {
        name: "塞浦路斯",
        value: 3
    },
    {
        name: "阿曼",
        value: 1
    },
    {
        name: "格鲁吉亚",
        value: 3
    },
    {
        name: "阿塞拜疆",
        value: 1
    },
    {
        name: "文莱",
        value: 5
    },
    {
        name: "不丹",
        value: 1
    },
    {
        name: "约旦",
        value: 1
    },
    {
        name: "也门",
        value: 1
    },
    {
        name: "东帝汶",
        value: 1
    },
    {
        name: "卢旺达",
        value: 25
    }, //非洲
    {
        name: "布隆迪",
        value: 25
    },
    {
        name: "乌干达",
        value: 25
    },
    {
        name: "埃塞俄比亚",
        value: 25
    },
    {
        name: "马达加斯加",
        value: 25
    },
    {
        name: "海地",
        value: 25
    },
    {
        name: "肯尼亚",
        value: 25
    },
    {
        name: "索马里",
        value: 25
    },
    {
        name: "厄立特里亚",
        value: 25
    },
    {
        name: "布基纳法索",
        value: 25
    },
    {
        name: "马拉维",
        value: 25
    },
    {
        name: "埃及",
        value: 25
    },
    {
        name: "塞拉利昂",
        value: 25
    },
    {
        name: "坦桑尼亚",
        value: 25
    },
    {
        name: "尼日利亚",
        value: 25
    },
    {
        name: "尼日尔",
        value: 25
    },
    {
        name: "毛里塔尼亚",
        value: 25
    },
    {
        name: "喀麦隆",
        value: 25
    },
    {
        name: "贝宁",
        value: 25
    },
    {
        name: "摩洛哥",
        value: 25
    },
    {
        name: "马里",
        value: 25
    },
    {
        name: "刚果民主共和国",
        value: 25
    },
    {
        name: "几内亚",
        value: 25
    },
    {
        name: "利比里亚",
        value: 25
    },
    {
        name: "多哥",
        value: 25
    },
    {
        name: "毛里求斯",
        value: 25
    },
    {
        name: "莫桑比克",
        value: 25
    },
    {
        name: "阿尔及利亚",
        value: 25
    },
    {
        name: "斯威士兰",
        value: 25
    },
    {
        name: "乍得",
        value: 25
    },
    {
        name: "塞内加尔",
        value: 25
    },
    {
        name: "津巴布韦",
        value: 25
    },
    {
        name: "科特迪瓦",
        value: 25
    },
    {
        name: "赞比亚",
        value: 25
    },
    {
        name: "突尼斯",
        value: 25
    },
    {
        name: "加纳",
        value: 25
    },
    {
        name: "中非共和国",
        value: 25
    },
    {
        name: "安哥拉",
        value: 25
    },
    {
        name: "冈比亚",
        value: 25
    },
    {
        name: "刚果共和国",
        value: 25
    },
    {
        name: "苏丹",
        value: 25
    },
    {
        name: "加蓬",
        value: 25
    },
    {
        name: "利比亚",
        value: 25
    },
    {
        name: "南非",
        value: 25
    },
    {
        name: "纳米比亚",
        value: 25
    },
    {
        name: "博茨瓦纳",
        value: 25
    },
    {
        name: "南苏丹",
        value: 25
    },
    {
        name: "索马里兰",
        value: 25
    },
    {
        name: "赤道几内亚",
        value: 25
    },
    {
        name: "几内亚比绍",
        value: 25
    },
    {
        name: "西撒哈拉",
        value: 25
    },
    {
        name: "莱索托",
        value: 25
    },
    {
        name: "吉布提",
        value: 25
    },
    {
        name: "俄罗斯",
        value: 15
    }, //欧洲
    {
        name: "波兰",
        value: 15
    },
    {
        name: "希腊",
        value: 15
    },
    {
        name: "马其顿",
        value: 15
    },
    {
        name: "阿尔巴尼亚",
        value: 15
    },
    {
        name: "西班牙",
        value: 15
    },
    {
        name: "克罗地亚",
        value: 15
    },
    {
        name: "瑞士",
        value: 15
    },
    {
        name: "英国",
        value: 15
    },
    {
        name: "爱尔兰",
        value: 15
    },
    {
        name: "意大利",
        value: 15
    },
    {
        name: "荷兰",
        value: 15
    },
    {
        name: "黑山",
        value: 15
    },
    {
        name: "斯洛文尼亚",
        value: 15
    },
    {
        name: "德国",
        value: 15
    },
    {
        name: "卢森堡",
        value: 15
    },
    {
        name: "葡萄牙",
        value: 15
    },
    {
        name: "塞尔维亚",
        value: 15
    },
    {
        name: "法国",
        value: 15
    },
    {
        name: "奥地利",
        value: 15
    },
    {
        name: "捷克共和国",
        value: 15
    },
    {
        name: "斯洛伐克",
        value: 15
    },
    {
        name: "拉脱维亚",
        value: 15
    },
    {
        name: "挪威",
        value: 15
    },
    {
        name: "比利时",
        value: 15
    },
    {
        name: "丹麦",
        value: 15
    },
    {
        name: "匈牙利",
        value: 15
    },
    {
        name: "瑞典",
        value: 15
    },
    {
        name: "罗马尼亚",
        value: 15
    },
    {
        name: "保加利亚",
        value: 15
    },
    {
        name: "立陶宛",
        value: 15
    },
    {
        name: "爱沙尼亚",
        value: 15
    },
    {
        name: "白俄罗斯",
        value: 15
    },
    {
        name: "摩尔多瓦",
        value: 15
    },
    {
        name: "芬兰",
        value: 15
    },
    {
        name: "乌克兰",
        value: 15
    },
    {
        name: "科索沃",
        value: 15
    },
    {
        name: "波黑",
        value: 15
    },
    {
        name: "哥斯达黎加",
        value: 32
    }, //北美洲
    {
        name: "萨尔瓦多",
        value: 32
    },
    {
        name: "多米尼加",
        value: 32
    },
    {
        name: "危地马拉",
        value: 32
    },
    {
        name: "洪都拉斯",
        value: 32
    },
    {
        name: "巴拿马",
        value: 32
    },
    {
        name: "古巴",
        value: 32
    },
    {
        name: "牙买加",
        value: 32
    },
    {
        name: "墨西哥",
        value: 32
    },
    {
        name: "波多黎各",
        value: 32
    },
    {
        name: "特立尼达和多巴哥",
        value: 32
    },
    {
        name: "伯利兹",
        value: 32
    },
    {
        name: "加拿大",
        value: 32
    },
    {
        name: "美国",
        value: 32
    },
    {
        name: "巴哈马",
        value: 32
    },
    {
        name: "格陵兰",
        value: 32
    },
    {
        name: "哥伦比亚",
        value: 32
    }, //南美洲
    {
        name: "尼加拉瓜",
        value: 32
    },
    {
        name: "厄瓜多尔",
        value: 32
    },
    {
        name: "秘鲁",
        value: 32
    },
    {
        name: "委内瑞拉",
        value: 32
    },
    {
        name: "玻利维亚",
        value: 32
    },
    {
        name: "巴西",
        value: 32
    },
    {
        name: "智利",
        value: 32
    },
    {
        name: "苏里南",
        value: 32
    },
    {
        name: "乌拉圭",
        value: 32
    },
    {
        name: "巴拉圭",
        value: 32
    },
    {
        name: "圭亚那",
        value: 32
    },
    {
        name: "阿根廷",
        value: 32
    },
    {
        name: "澳大利亚",
        value: 7
    }, //大洋洲
    {
        name: "巴布亚新几内亚",
        value: 7
    },
    {
        name: "斐济",
        value: 7
    },
    {
        name: "新喀里多尼亚",
        value: 7
    },
    {
        name: "新西兰",
        value: 7
    },
    {
        name: "北马里亚纳",
        value: 7
    }
];
var latlong = {},
    latlong1 = {};
latlong.AF = {
    latitude: 33,
    longitude: 65
};
latlong.AL = {
    latitude: 41,
    longitude: 20
};
latlong.DZ = {
    latitude: 28,
    longitude: 3
};
latlong.CN = {
    latitude: 35,
    longitude: 105
};
latlong1.AF = {
    latitude: 32,
    longitude: 65
};
latlong1.AL = {
    latitude: 43,
    longitude: 21
};
latlong1.DZ = {
    latitude: 34,
    longitude: 4
};
latlong1.CN = {
    latitude: 35,
    longitude: 98
};
var mapData = [{
        code: "AF",
        name: "Afghanistan",
        value: 32358260,
        color: "#eea638",
        number: 1
    },
    {
        code: "AL",
        name: "Albania",
        value: 3215988,
        color: "#d8854f",
        number: 2
    },
    {
        code: "DZ",
        name: "Algeria",
        value: 35980193,
        color: "#de4c4f",
        number: 3
    },
    {
        code: "CN",
        name: "China",
        value: 1347565324,
        color: "#eea638",
        number: 4
    }
];
var max = -Infinity;
var min = Infinity;
mapData.forEach(function(itemOpt) {
    if (itemOpt.value > max) {
        max = itemOpt.value;
    }
    if (itemOpt.value < min) {
        min = itemOpt.value;
    }
});
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
var option = {
    visualMap: {
        type: 'piecewise',
        min: 1,
        max: 5,
        pieces: [{
                gt: 40
            }, // (41, Infinity] 一带一路
            {
                gt: 30,
                lte: 40
            }, // (31, 40]  北、南美
            {
                gt: 20,
                lte: 30
            }, // (21, 30]  非洲
            {
                gt: 10,
                lte: 20
            }, // (11, 20]  欧洲
            {
                gt: 5,
                lte: 10
            }, // (6, 10]   大洋洲
            {
                lt: 5
            } // (-Infinity, 5) 亚洲
        ],
        text: ["High", "Low"],
        inRange: {
            color: ["#8ff202", "#e9e9eb", "#004fed", "#01e098", "#00deeb", "#ffdc7b"]
        },
        show: false
    },
    geo: {
        show: true,
        type: "map",
        map: "world",
        roam: true,
        zoom: 1,
        nameMap: nameMap,
        selectedMode: "single",
        label: {
            normal: {
                show: false,
                color: "#fff"
            },
            emphasis: {
                show: true,
                color: "#ff5400",
                fontSize: 22,
                fontWeight: "bold"
            }
        },
        itemStyle: {
            normal: {
                areaColor: "#02dce3",
                borderColor: "#017688"
            },
            emphasis: {
                areaColor: "#ffdc7b"
            }
        }
    },
    series: [{
            name: "mapBg",
            type: "map",
            map: "world",
            geoIndex: 0,
            roam: true,
            selectedMode: "single",
            nameMap: nameMap,
            data: colorMapData
        },
        {
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "pin",
            symbolSize: 20,
            data: mapData.map(function(itemOpt) {
                return {
                    name: itemOpt.name,
                    value: [
                        latlong[itemOpt.code].longitude,
                        latlong[itemOpt.code].latitude,
                        itemOpt.value
                    ],
                    label: {
                        emphasis: {
                            position: "right",
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#000'
                        }
                    }
                };
            })
        },
        {
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "circle",
            symbolSize: 20,
            data: mapData.map(function(itemOpt) {
                return {
                    name: itemOpt.name,
                    value: [
                        latlong1[itemOpt.code].longitude,
                        latlong1[itemOpt.code].latitude,
                        itemOpt.value
                    ],
                    label: {
                        emphasis: {
                            position: "right",
                            show: false,
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#000'
                        }
                    }
                };
            })
        },
    ]
};

 myChart.on('click', function(params) {
	/*  
	 * 点击放大区域，但并不准确
	 */
	var e = params.event;
	var geoCoord = myChart.convertFromPixel('series', [e.offsetX, e.offsetY]);
	myChart.setOption({
		geo: {
		  zoom: 1.5,
		},
		series: [{
			center: geoCoord,
			animationDurationUpdate: 1000,
			animationEasingUpdate: 'cubicInOut'
		}]
	});
 });