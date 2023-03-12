let org_showList = [
 { extraText: '爱尔兰', label: { position: 'right' } },
 { extraText: '朝鲜', label: { position: 'right' } },
 { extraText: '韩国', label: { position: 'left' } },
 { extraText: '中国', label: { position: 'left' } },
 { extraText: '印度', label: { position: 'right' } },
 { extraText: '日本', label: { position: 'right' } },
 { extraText: '德国', label: { position: 'right' } },
 { extraText: '俄罗斯', label: { position: 'right' } },
 { extraText: '美国', label: { position: 'right' } },
 { extraText: '孟加拉国', label: { position: 'right' } },
 { extraText: '莫桑比克', label: { position: 'right' } },
 { extraText: '泰国', label: { position: 'right' } },
 { extraText: '印度尼西亚', label: { position: 'top' } },
];

var country_cn_alias = {
 阿拉伯联合酋长国: '阿联酋',
 捷克: '捷克共和国',
};

// 此部分坐标信息可以通过 https://www.earthol.com/city-493.html 进行校对
// 坐标 为 [经度，纬度]
var echarts_country_cn_to_en = {
 阿尔巴尼亚: {
  en: 'Albania',
  geo: [20.168331, 41.153332],
 },
 阿尔及利亚: {
  en: 'Algeria',
  geo: [1.659626, 28.033886],
 },
 阿富汗: {
  en: 'Afghanistan',
  geo: [67.709953, 33.93911],
 },
 阿根廷: {
  en: 'Argentina',
  geo: [-63.61667199999999, -38.416097],
 },
 阿联酋: {
  en: 'United Arab Emirates',
  geo: [52.9063, 23.341],
 },
 阿曼: {
  en: 'Oman',
  geo: [55.923255, 21.512583],
 },
 阿塞拜疆: {
  en: 'Azerbaijan',
  geo: [47.576927, 40.143105],
 },
 埃及: {
  en: 'Egypt',
  geo: [30.802498, 26.820553],
 },
 埃塞俄比亚: {
  en: 'Ethiopia',
  geo: [40.489673, 9.145000000000001],
 },
 爱尔兰: {
  en: 'Ireland',
  geo: [-8.24389, 53.41291],
 },
 爱沙尼亚: {
  en: 'Estonia',
  geo: [25.013607, 58.595272],
 },
 安道尔: {
  en: 'Andorra',
  geo: [42.54525, 1.576297],
 },
 安哥拉: {
  en: 'Angola',
  geo: [17.873887, -11.202692],
 },
 安提瓜和巴布达: {
  en: 'Antigua and Barb.',
  geo: null,
 },
 奥地利: {
  en: 'Austria',
  geo: [14.550072, 47.516231],
 },
 奥兰: {
  en: 'Aland',
  geo: [39.390897, -99.066067],
 },
 澳大利亚: {
  en: 'Australia',
  geo: [133.775136, -25.274398],
 },
 巴巴多斯: {
  en: 'Barbados',
  geo: [13.167446, -59.555202],
 },
 巴布亚新几内亚: {
  en: 'Papua New Guinea',
  geo: [143.95555, -6.314992999999999],
 },
 巴哈马: {
  en: 'Bahamas',
  geo: [-77.39627999999999, 25.03428],
 },
 巴基斯坦: {
  en: 'Pakistan',
  geo: [69.34511599999999, 30.375321],
 },
 巴拉圭: {
  en: 'Paraguay',
  geo: [-58.443832, -23.442503],
 },
 巴勒斯坦: {
  en: 'Palestine',
  geo: [35.25, 32],
 },
 巴林: {
  en: 'Bahrain',
  geo: [26.066799, 50.511398],
 },
 巴拿马: {
  en: 'Panama',
  geo: [-80.782127, 8.537981],
 },
 巴西: {
  en: 'Brazil',
  geo: [-51.92528, -14.235004],
 },
 白俄罗斯: {
  en: 'Belarus',
  geo: [27.953389, 53.709807],
 },
 百慕大: {
  en: 'Bermuda',
  geo: [-64.7505, 32.3078],
 },
 保加利亚: {
  en: 'Bulgaria',
  geo: [25.48583, 42.733883],
 },
 北马里亚纳群岛: {
  en: 'N. Mariana Is.',
  geo: null,
 },
 北塞浦路斯: {
  en: 'N. Cyprus',
  geo: null,
 },
 贝宁: {
  en: 'Benin',
  geo: [2.315834, 9.30769],
 },
 比利时: {
  en: 'Belgium',
  geo: [4.469936, 50.503887],
 },
 冰岛: {
  en: 'Iceland',
  geo: [-19.020835, 64.963051],
 },
 波多黎各: {
  en: 'Puerto Rico',
  geo: [-66.590149, 18.220833],
 },
 波黑: {
  en: 'Bosnia and Herz.',
  geo: [18.37875, 43.85002],
 },
 波兰: {
  en: 'Poland',
  geo: [19.145136, 51.919438],
 },
 玻利维亚: {
  en: 'Bolivia',
  geo: [-63.58865299999999, -16.290154],
 },
 伯利兹: {
  en: 'Belize',
  geo: [-88.49765, 17.189877],
 },
 博茨瓦纳: {
  en: 'Botswana',
  geo: [24.684866, -22.328474],
 },
 不丹: {
  en: 'Bhutan',
  geo: [90.433601, 27.514162],
 },
 布基纳法索: {
  en: 'Burkina Faso',
  geo: [-1.561593, 12.238333],
 },
 布隆迪: {
  en: 'Burundi',
  geo: [29.918886, -3.373056],
 },
 朝鲜: {
  en: 'Dem. Rep. Korea',
  geo: [127.222504, 40.534302],
 },
 赤道几内亚: {
  en: 'Eq. Guinea',
  geo: null,
 },
 丹麦: {
  en: 'Denmark',
  geo: [9.501785, 56.26392],
 },
 德国: {
  en: 'Germany',
  geo: [10.451526, 51.165691],
 },
 东帝汶: {
  en: 'Timor-Leste',
  geo: [125.727539, -8.874217],
 },
 多哥: {
  en: 'Togo',
  geo: [0.824782, 8.619543],
 },
 多米尼加: {
  en: 'Dominica',
  geo: [15.427289, -61.356377],
 },
 多米尼加共和国: {
  en: 'Dominican Rep.',
  geo: null,
 },
 俄罗斯: {
  en: 'Russia',
  geo: [116.8564, 65.067703],
 },
 厄瓜多尔: {
  en: 'Ecuador',
  geo: [-78.18340599999999, -1.831239],
 },
 厄立特里亚: {
  en: 'Eritrea',
  geo: [39.782334, 15.179384],
 },
 法国: {
  en: 'France',
  geo: [2.213749, 46.227638],
 },
 法罗群岛: {
  en: 'Faeroe Is.',
  geo: null,
 },
 法属波利尼西亚: {
  en: 'Fr. Polynesia',
  geo: null,
 },
 菲律宾: {
  en: 'Philippines',
  geo: [121.774017, 12.879721],
 },
 斐济: {
  en: 'Fiji',
  geo: [-17.850599, 177.776901],
 },
 芬兰: {
  en: 'Finland',
  geo: [25.748151, 61.92410999999999],
 },
 佛得角: {
  en: 'Cape Verde',
  geo: [16, -24],
 },
 福克兰群岛: {
  en: 'Falkland Is.',
  geo: null,
 },
 冈比亚: {
  en: 'Gambia',
  geo: [-15.310139, 13.443182],
 },
 刚果: {
  en: 'Congo',
  geo: [-0.2396, 15.3028],
 },
 刚果民主共和国: {
  en: 'Dem. Rep. Congo',
  geo: [15.27298, -4.37773],
 },
 哥伦比亚: {
  en: 'Colombia',
  geo: [-74.297333, 4.570868],
 },
 哥斯达黎加: {
  en: 'Costa Rica',
  geo: [-83.753428, 9.748916999999999],
 },
 格林纳达: {
  en: 'Grenada',
  geo: [37.18302, -3.602192],
 },
 格陵兰: {
  en: 'Greenland',
  geo: [-42.164707, 76.422188],
 },
 古巴: {
  en: 'Cuba',
  geo: [-77.781167, 21.521757],
 },
 关岛: {
  en: 'Guam',
  geo: [13.3532, 144.653198],
 },
 圭亚那: {
  en: 'Guyana',
  geo: [-58.93018, 4.860416],
 },
 哈萨克斯坦: {
  en: 'Kazakhstan',
  geo: [76.93103, 43.27214],
 },
 海地: {
  en: 'Haiti',
  geo: [-72.285215, 18.971187],
 },
 韩国: {
  en: 'Korea',
  geo: [127.766922, 35.907757],
 },
 荷兰: {
  en: 'Netherlands',
  geo: [5.291265999999999, 52.132633],
 },
 赫德岛和麦克唐纳群岛: {
  en: 'Heard I. and McDonald Is.',
  geo: null,
 },
 黑山共和国: {
  en: 'Montenegro',
  geo: [19.37439, 42.708678],
 },
 洪都拉斯: {
  en: 'Honduras',
  geo: [-86.241905, 15.199999],
 },
 基里巴斯: {
  en: 'Kiribati',
  geo: [-2.8497, -171.623795],
 },
 吉布地: {
  en: 'Djibouti',
  geo: [42.590275, 11.825138],
 },
 吉尔吉斯斯坦: {
  en: 'Kyrgyzstan',
  geo: [74.766098, 41.20438],
 },
 几内亚: {
  en: 'Guinea',
  geo: [-9.696645, 9.945587],
 },
 几内亚比索: {
  en: 'Guinea-Bissau',
  geo: [-15.180413, 11.803749],
 },
 加拿大: {
  en: 'Canada',
  geo: [-106.346771, 56.130366],
 },
 加纳: {
  en: 'Ghana',
  geo: [-1.023194, 7.946527],
 },
 加蓬: {
  en: 'Gabon',
  geo: [11.609444, -0.803689],
 },
 柬埔寨: {
  en: 'Cambodia',
  geo: [104.990963, 12.565679],
 },
 捷克共和国: {
  en: 'Czech Rep.',
  geo: [14.42263, 50.08796],
 },
 津巴布韦: {
  en: 'Zimbabwe',
  geo: [29.154857, -19.015438],
 },
 喀麦隆: {
  en: 'Cameroon',
  geo: [12.354722, 7.369721999999999],
 },
 卡塔尔: {
  en: 'Qatar',
  geo: [51.183884, 25.354826],
 },
 开曼群岛: {
  en: 'Cayman Is.',
  geo: null,
 },
 科摩罗: {
  en: 'Comoros',
  geo: [-11.6474, 43.297699],
 },
 科特迪瓦: {
  en: "Côte d'Ivoire",
  geo: null,
 },
 科威特: {
  en: 'Kuwait',
  geo: [47.481766, 29.31166],
 },
 克罗地亚: {
  en: 'Croatia',
  geo: [15.2, 45.1],
 },
 肯尼亚: {
  en: 'Kenya',
  geo: [37.906193, -0.023559],
 },
 库拉索: {
  en: 'Curaçao',
  geo: null,
 },
 拉脱维亚: {
  en: 'Latvia',
  geo: [24.603189, 56.879635],
 },
 莱索托: {
  en: 'Lesotho',
  geo: [28.233608, -29.609988],
 },
 老挝: {
  en: 'Lao PDR',
  geo: [102.60307, 17.98406],
 },
 黎巴嫩: {
  en: 'Lebanon',
  geo: [35.862285, 33.854721],
 },
 立陶宛: {
  en: 'Lithuania',
  geo: [23.881275, 55.169438],
 },
 利比里亚: {
  en: 'Liberia',
  geo: [-9.429499000000002, 6.428055],
 },
 利比亚: {
  en: 'Libya',
  geo: [17.228331, 26.3351],
 },
 列支敦士登: {
  en: 'Liechtenstein',
  geo: [47.150002, 9.5833],
 },
 卢森堡: {
  en: 'Luxembourg',
  geo: [6.129582999999999, 49.815273],
 },
 卢旺达: {
  en: 'Rwanda',
  geo: [29.873888, -1.940278],
 },
 罗马尼亚: {
  en: 'Romania',
  geo: [24.96676, 45.943161],
 },
 马达加斯加: {
  en: 'Madagascar',
  geo: [46.869107, -18.766947],
 },
 马恩岛: {
  en: 'Isle of Man',
  geo: [54.25, -4.5],
 },
 马耳他: {
  en: 'Malta',
  geo: [35.902241, 14.413739],
 },
 马拉维: {
  en: 'Malawi',
  geo: [34.301525, -13.254308],
 },
 马来西亚: {
  en: 'Malaysia',
  geo: [101.975766, 4.210484],
 },
 马里: {
  en: 'Mali',
  geo: [-3.996166, 17.570692],
 },
 马其顿: {
  en: 'Macedonia',
  geo: [21.745275, 41.608635],
 },
 毛里求斯: {
  en: 'Mauritius',
  geo: [-20.2833, 57.549999],
 },
 毛里塔尼亚: {
  en: 'Mauritania',
  geo: [-10.940835, 21.00789],
 },
 美国: {
  en: 'United States',
  geo: [-95.712891, 37.09024],
 },
 美国维京群岛: {
  en: 'U.S. Virgin Is.',
  geo: null,
 },
 美属萨摩亚: {
  en: 'American Samoa',
  geo: [-14.293662, -170.698357],
 },
 蒙古: {
  en: 'Mongolia',
  geo: [103.846656, 46.862496],
 },
 蒙特塞拉特: {
  en: 'Montserrat',
  geo: [16.735834, -62.192696],
 },
 孟加拉国: {
  en: 'Bangladesh',
  geo: [90.0438, 24.2887],
 },
 秘鲁: {
  en: 'Peru',
  geo: [-75.015152, -9.189967],
 },
 密克罗尼西亚: {
  en: 'Micronesia',
  geo: [5, 152],
 },
 缅甸: {
  en: 'Myanmar',
  geo: [95.956223, 21.913965],
 },
 摩尔多瓦: {
  en: 'Moldova',
  geo: [28.369885, 47.411631],
 },
 摩洛哥: {
  en: 'Morocco',
  geo: [-7.092619999999999, 31.791702],
 },
 莫桑比克: {
  en: 'Mozambique',
  geo: [35.529562, -18.665695],
 },
 墨西哥: {
  en: 'Mexico',
  geo: [-102.552784, 23.634501],
 },
 纳米比亚: {
  en: 'Namibia',
  geo: [18.49041, -22.95764],
 },
 南非: {
  en: 'South Africa',
  geo: [22.937506, -30.559482],
 },
 南乔治亚岛和南桑威奇群岛: {
  en: 'S. Geo. and S. Sandw. Is.',
  geo: null,
 },
 南苏丹: {
  en: 'S. Sudan',
  geo: [30.05489, 7.265386],
 },
 尼泊尔: {
  en: 'Nepal',
  geo: [84.12400799999999, 28.394857],
 },
 尼加拉瓜: {
  en: 'Nicaragua',
  geo: [-85.207229, 12.865416],
 },
 尼日尔: {
  en: 'Niger',
  geo: [8.081666, 17.607789],
 },
 尼日利亚: {
  en: 'Nigeria',
  geo: [8.675277, 9.081999],
 },
 纽埃: {
  en: 'Niue',
  geo: [-19.0333, -169.866699],
 },
 挪威: {
  en: 'Norway',
  geo: [8.468945999999999, 60.47202399999999],
 },
 帕劳: {
  en: 'Palau',
  geo: [7.5216, 134.530807],
 },
 葡萄牙: {
  en: 'Portugal',
  geo: [-8.224454, 39.39987199999999],
 },
 日本: {
  en: 'Japan',
  geo: [138.252924, 36.204824],
 },
 瑞典: {
  en: 'Sweden',
  geo: [18.643501, 60.12816100000001],
 },
 瑞士: {
  en: 'Switzerland',
  geo: [8.227511999999999, 46.818188],
 },
 撒哈拉沙漠: {
  en: 'W. Sahara',
  geo: null,
 },
 萨尔瓦多: {
  en: 'El Salvador',
  geo: [-88.89653, 13.794185],
 },
 萨摩亚: {
  en: 'Samoa',
  geo: [-13.5945, -172.611298],
 },
 塞尔维亚: {
  en: 'Serbia',
  geo: [43.871162, 20.603973],
 },
 塞拉利昂: {
  en: 'Sierra Leone',
  geo: [-11.779889, 8.460555],
 },
 塞内加尔: {
  en: 'Senegal',
  geo: [-14.452362, 14.497401],
 },
 塞浦路斯: {
  en: 'Cyprus',
  geo: [33.429859, 35.126413],
 },
 塞舌尔: {
  en: 'Seychelles',
  geo: [-4.5833, 55.666698],
 },
 沙特阿拉伯: {
  en: 'Saudi Arabia',
  geo: [45.079162, 23.885942],
 },
 圣多美和普林西比: {
  en: 'São Tomé and Principe',
  geo: null,
 },
 圣海伦娜: {
  en: 'Saint Helena',
  geo: [-15.95, -5.7],
 },
 圣卢西亚: {
  en: 'Saint Lucia',
  geo: [13.894094, -60.965061],
 },
 圣皮埃尔和密克隆群岛: {
  en: 'St. Pierre and Miquelon',
  geo: null,
 },
 圣文森特和格林纳丁斯: {
  en: 'St. Vin. and Gren.',
  geo: null,
 },
 斯里兰卡: {
  en: 'Sri Lanka',
  geo: [80.77179699999999, 7.873053999999999],
 },
 斯洛伐克: {
  en: 'Slovakia',
  geo: [19.699024, 48.669026],
 },
 斯洛文尼亚: {
  en: 'Slovenia',
  geo: [14.995463, 46.151241],
 },
 斯威士兰: {
  en: 'Swaziland',
  geo: [31.465866, -26.522503],
 },
 苏丹: {
  en: 'Sudan',
  geo: [30.217636, 12.862807],
 },
 苏里南: {
  en: 'Suriname',
  geo: [-56.027783, 3.919305],
 },
 '所罗门群岛。': {
  en: 'Solomon Is.',
  geo: null,
 },
 索马里: {
  en: 'Somalia',
  geo: [46.199616, 5.152149],
 },
 塔吉克斯坦: {
  en: 'Tajikistan',
  geo: [71.276093, 38.861034],
 },
 泰国: {
  en: 'Thailand',
  geo: [100.992541, 15.870032],
 },
 坦桑尼亚: {
  en: 'Tanzania',
  geo: [-5.6088, 34.5294],
 },
 汤加: {
  en: 'Tonga',
  geo: [-21.149, -175.319595],
 },
 特克斯和凯科斯群岛: {
  en: 'Turks and Caicos Is.',
  geo: null,
 },
 特立尼达和多巴哥: {
  en: 'Trinidad and Tobago',
  geo: [10.418848, -61.293797],
 },
 突尼斯: {
  en: 'Tunisia',
  geo: [9.537499, 33.886917],
 },
 土耳其: {
  en: 'Turkey',
  geo: [35.243322, 38.963745],
 },
 土库曼斯坦: {
  en: 'Turkmenistan',
  geo: [59.556278, 38.969719],
 },
 瓦努阿图: {
  en: 'Vanuatu',
  geo: [166.959158, -15.376706],
 },
 危地马拉: {
  en: 'Guatemala',
  geo: [-90.23075899999999, 15.783471],
 },
 '委内 瑞拉': {
  en: 'Venezuela',
  geo: [-66.58973, 6.42375],
 },
 文莱: {
  en: 'Brunei',
  geo: [114.727669, 4.535277],
 },
 乌干达: {
  en: 'Uganda',
  geo: [32.290275, 1.373333],
 },
 乌克兰: {
  en: 'Ukraine',
  geo: [31.16558, 48.379433],
 },
 乌拉圭: {
  en: 'Uruguay',
  geo: [-55.765835, -32.522779],
 },
 乌兹别克斯坦: {
  en: 'Uzbekistan',
  geo: [64.585262, 41.377491],
 },
 西班牙: {
  en: 'Spain',
  geo: [-3.74922, 40.46366700000001],
 },
 希腊: {
  en: 'Greece',
  geo: [21.824312, 39.074208],
 },
 锡亚琴冰川: {
  en: 'Siachen Glacier',
  geo: null,
 },
 新加坡: {
  en: 'Singapore',
  geo: [103.8, 1.3667],
 },
 新喀里多尼亚: {
  en: 'New Caledonia',
  geo: [165.618042, -20.904305],
 },
 新西兰: {
  en: 'New Zealand',
  geo: [174.885971, -40.900557],
 },
 匈牙利: {
  en: 'Hungary',
  geo: [19.503304, 47.162494],
 },
 叙利亚: {
  en: 'Syria',
  geo: [38.996815, 34.80207499999999],
 },
 牙买加: {
  en: 'Jamaica',
  geo: [-77.297508, 18.109581],
 },
 亚美尼亚: {
  en: 'Armenia',
  geo: [45.038189, 40.069099],
 },
 也门: {
  en: 'Yemen',
  geo: [48.516388, 15.552727],
 },
 伊拉克: {
  en: 'Iraq',
  geo: [43.679291, 33.223191],
 },
 伊朗: {
  en: 'Iran',
  geo: [53.688046, 32.427908],
 },
 以色列: {
  en: 'Israel',
  geo: [34.851612, 31.046051],
 },
 意大利: {
  en: 'Italy',
  geo: [12.56738, 41.87194],
 },
 印度: {
  en: 'India',
  geo: [78.96288, 20.593684],
 },
 印度尼西亚: {
  en: 'Indonesia',
  geo: [113.485001, -0.7366],
 },
 英国: {
  en: 'United Kingdom',
  geo: [-3.435973, 55.378051],
 },
 英属印度洋领地: {
  en: 'Br. Indian Ocean Ter.',
  geo: null,
 },
 约旦: {
  en: 'Jordan',
  geo: [36.238414, 30.585164],
 },
 越南: {
  en: 'Vietnam',
  geo: [108.277199, 14.058324],
 },
 赞比亚: {
  en: 'Zambia',
  geo: [27.849332, -13.133897],
 },
 泽西岛: {
  en: 'Jersey',
  geo: [49.212307, -2.1256],
 },
 乍得: {
  en: 'Chad',
  geo: [18.732207, 15.454166],
 },
 智利: {
  en: 'Chile',
  geo: [-71.542969, -35.675147],
 },
 中非共和国: {
  en: 'Central African Rep.',
  geo: [6.1428, 20.399599],
 },
 中国: {
  en: 'China',
  geo: [104.195397, 35.86166],
 },
 佐治亚州: {
  en: 'Georgia',
  geo: [-82.9000751, 32.1656221],
 },
 中国香港: {
  en: 'Hong Kong',
  geo: [22.264412, 114.167061],
  custom: true,
 },
 中国澳门: {
  en: 'Macao',
  geo: [22.2, 113.5],
  custom: true,
 },
 中国台湾: {
  en: 'Taiwan',
  geo: [23.534, 120.559402],
  custom: true,
 },
 摩纳哥: {
  en: 'Monaco',
  geo: [43.731142, 7.419758],
  custom: true,
 },
};

// 将hsv转成rgb
function hsvtorgb(h, s, v) {
 var s = s / 100;
 var v = v / 100;
 var h1 = Math.floor(h / 60) % 6;
 var f = h / 60 - h1;
 var p = v * (1 - s);
 var q = v * (1 - f * s);
 var t = v * (1 - (1 - f) * s);
 var r, g, b;
 switch (h1) {
  case 0:
   r = v;
   g = t;
   b = p;
   break;
  case 1:
   r = q;
   g = v;
   b = p;
   break;
  case 2:
   r = p;
   g = v;
   b = t;
   break;
  case 3:
   r = p;
   g = q;
   b = v;
   break;
  case 4:
   r = t;
   g = p;
   b = v;
   break;
  case 5:
   r = v;
   g = p;
   b = q;
   break;
 }
 return 'rgb(' + Math.round(r * 255) + ',' + Math.round(g * 255) + ',' + Math.round(b * 255) + ')';
}

// 生成颜色列表
function genColorList(maxCount, colorbase, colorSep) {
 let outList = [];
 for (let i = 0; i < maxCount; i++) {
  outList.push({ value: i + 1, color: hsvtorgb(i * colorSep + colorbase, 57, 92) });
 }
 return outList;
}

function get_geo_by_cn(cn_name, value) {
 // 检查是否需要转换国家名
 if (country_cn_alias.hasOwnProperty(cn_name)) {
  cn_name = country_cn_alias[cn_name];
 }
 if (echarts_country_cn_to_en.hasOwnProperty(cn_name)) {
  let org_geo = echarts_country_cn_to_en[cn_name]['geo'];
  org_geo.concat(Math.round(value));
  return org_geo;
 } else {
  console.log(cn_name + ' not found in echarts_country_cn_to_en');
 }
}

function get_en_by_cn(cn_name) {
 if (country_cn_alias.hasOwnProperty(cn_name)) {
  cn_name = country_cn_alias[cn_name];
 }
 if (echarts_country_cn_to_en.hasOwnProperty(cn_name)) {
  return echarts_country_cn_to_en[cn_name]['en'];
 } else {
  console.log(cn_name + ' not found in echarts_country_cn_to_en');
 }
}

function process_data(color_list_count, showList) {
 // 生成15种颜色
 let colorList = genColorList(color_list_count, 160, 5);
 // 首先解决嵌套问题
 let color_index = 2;
 let base_map_data = [];
 let tip_map_data = [];
 for (let i = 0; i < showList.length; i++) {
  // 首先设置value
  if (showList[i]['value'] === undefined) {
   showList[i]['value'] = color_index;
  }
  color_index = color_index + 1;
  if (color_index >= 15) {
   color_index = 0;
  }
  // 然后判断是否包含下属国家
  let base_cell = JSON.parse(JSON.stringify(showList[i]));
  let tip_cell = JSON.parse(JSON.stringify(showList[i]));

  if (showList[i].hasOwnProperty('sub') && showList[i]['sub'].length > 0) {
   // 如果有下属国家
   for (let sub_index in showList[i]['sub']) {
    // 遍历地区，加入到base_map中
    base_cell = JSON.parse(JSON.stringify(showList[i]['sub'][sub_index]));
    // 设置统一的值
    base_cell['value'] = showList[i]['value'];
    // 设置英文国家名
    base_cell['name'] = get_en_by_cn(showList[i]['sub'][sub_index]['extraText']);
    // base地图只需要name和value
    base_map_data.push(base_cell);
   }
   // 用列表中的第一个作为国家名
   delete tip_cell['sub'];
   tip_cell['value'] = get_geo_by_cn(showList[i]['sub'][0]['extraText'], tip_cell['value']);
   tip_map_data.push(tip_cell);
  } else {
   base_cell['name'] = get_en_by_cn(base_cell['extraText']);
   base_map_data.push(base_cell);

   tip_cell['value'] = get_geo_by_cn(tip_cell['extraText'], tip_cell['value']);
   tip_map_data.push(tip_cell);
  }
 }

 // // 处理tip_map_data
 // for (let i = 0; i < tip_map_data.length; i++) {
 // 	// 生成base_map_data的数据

 // 	// 获得中文国家名
 // 	cn_country_name = showList[i]["extraText"]
 // 	// 检查是否需要转换国家名
 // 	if (country_cn_alias.hasOwnProperty(showList[i]["extraText"])) {
 // 		cn_country_name = country_cn_alias[showList[i]["extraText"]]
 // 	}
 // 	if (echarts_country_cn_to_en[cn_country_name] === undefined) {
 // 		// 检查国家是否在对应表中
 // 		console.log(cn_country_name + " not found en name")
 // 	} else {
 // 		// 获取英文名
 // 		showList[i]["name"] = echarts_country_cn_to_en[cn_country_name]["en"]
 // 		// 拼接坐标和值
 // 		let geoCoord = echarts_country_cn_to_en[cn_country_name]["geo"]
 // 		showList[i]["value"] = geoCoord.concat(Math.round(showList[i]["value"]))
 // 		showList[i]["extraStyle"] = undefined
 // 	}
 // }
 return { colorList: colorList, base_map_data: base_map_data, tip_map_data: tip_map_data };
}
let org_info = process_data(15, org_showList);
var colorList = org_info['colorList'];
var base_map_data = org_info['base_map_data'];
var tip_map_data = org_info['tip_map_data'];
console.log(tip_map_data);

// var convertData2 = function(data) {
//     var res = [];
//     for (var i = 0; i < data.length; i++) {
// 		res.push(data[i]);
//     }
//     return res;
// };

option = {
 baseOption: {
  // backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [
  //     {
  //         offset: 0,
  //         color: '#f7f8fa'
  //     }, {
  //         offset: 1,
  //         color: '#cdd0d5'
  //     }
  // ]),
  backgroundColor: '#ffffff',
  visualMap: {
   // 类型为离散
   type: 'piecewise',
   seriesIndex: 0,
   show: false,
   left: 'left',
   top: 'bottom',
   pieces: colorList,
  },
  grid: {
   left: '6%',
   right: '70%',
   top: '65%',
   height: 'auto',
   bottom: '6%',
  },
  xAxis: {
   show: false,
   axisLine: {
    show: false,
    lineStyle: {
     color: 'rgba(121,121,121,0.3)',
     //color:'red'
    },
   },
   splitLine: {
    show: false,
   },
  },
  yAxis: {
   type: 'category',
   axisTick: {
    show: false,
   },
   axisLine: {
    show: false,
    lineStyle: {
     color: 'rgba(121,121,121,0.3)',
     //color:'red'
    },
   },
   axisLabel: {
    show: false,
    textStyle: {
     //  color: '#ddd'
    },
   },
  },
  geo: {
   map: 'world',
   show: true,
   roam: true,
   label: {
    emphasis: {
     show: false,
    },
   },
   itemStyle: {
    normal: {
     areaColor: '#a6a6a6',
     borderColor: '#ffffff',
     shadowColor: '#1773c3',
     shadowBlur: 0,
    },
   },
  },
  series: [
   {
    name: '底图',
    type: 'map',
    mapType: 'world',
    roam: true,
    label: {
     normal: {
      show: false,
     },
     emphasis: {
      show: false,
     },
    },
    itemStyle: {
     normal: {
      areaColor: '#a6a6a6',
      borderColor: '#ffffff',
      shadowColor: '#1773c3',
      shadowBlur: 0,
      opacity: 1,
     },
    },
    data: base_map_data,
   },
   {
    name: '前5',
    type: 'effectScatter',
    coordinateSystem: 'geo',
    data: tip_map_data,
    // data: convertData(dataTopN[i].data),
    symbolSize: 8,
    // color: (238,25,27,1),
    showEffectOn: 'emphasis',
    hoverAnimation: true,
    label: {
     normal: {
      formatter: function (p) {
       return '{a|' + p.data.extraText + '}';
      },
      rich: {
       a: {
        fontFamily: 'Microsoft YaHei',
        borderRadius: 5,
        color: 'white',
        fontSize: 19,
        backgroundColor: 'rgba(0,0,0,0.7)',
        lineHeight: 24,
        height: 28,
        textAlign: 'center',
        padding: [0, 8, 4, 8],
       },
      },
      position: 'right',
      show: true,
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      // textBorderColor: (0,0,0,1),
      shadowColor: 'black',
      shadowBlur: 0,
     },
    },
    itemStyle: {
     normal: {
      color: '#e0092c',
      shadowBlur: 0,
      shadowColor: '#333',
     },
    },
    zlevel: 1,
   },
  ],
 },
 options: [],
};
