
//var myChart = echarts.init(document.getElementById("3dMap"));

//地图加载样式设置
//背景色#151e2e
var autoRotate = false;//是否开启视角绕物体的自动旋转查看。
var autoRotateDirection='cw';//物体自传的方向。默认是 'cw' 也就是从上往下看是顺时针方向，也可以取 'ccw'，既从上往下看为逆时针方向。
var autoRotateSpeed=20;//旋转速度
var autoRotateAfterStill= 3;//在鼠标静止操作后恢复自动旋转的时间间隔。在开启 autoRotate 后有效。
var damping=0.8;//鼠标进行旋转，缩放等操作时的迟滞因子，在大于 0 的时候鼠标在停止操作后，视角仍会因为一定的惯性继续运动（旋转和缩放）。
var rotateSensitivity=1;//旋转操作的灵敏度，值越大越灵敏。支持使用数组分别设置横向和纵向的旋转灵敏度。0不能旋转
var distance = 70; //地图大小   值越大-地图越小，值越小-地图越大
var alpha = 90; //垂直翻转角度
var beta = 0;//视角绕 y 轴，即左右旋转的角度。
var zoomSensitivity = 3;//缩放操作的灵敏度，值越大越灵敏。0表示不能缩放
var center = [ 0, -10, 0 ];//[ 18, 10, 0 ]视角中心点，旋转也会围绕这个中心点旋转，默认为[0,0,0]。
/**
 * 地理位置信息，线条起点终点坐标,及辐射国家需要展示的地点坐标
 */
var geoCoord = {
	"阿富汗": [69.11,34.28],
	"阿尔巴尼亚": [19.49,41.18],
	"阿尔及利亚": [3.08,36.42],
	"美属萨摩亚": [189.57,-14.16],
	"安道​​尔": [1.32,42.31],
	"安哥拉": [13.15,-8.5],
	"安提瓜和巴布达": [298.52,17.2],
	"阿根廷": [300,-36.3],
	"亚美尼亚": [44.31,40.1],
	"阿鲁巴": [289.98,12.32],
	"澳大利亚": [149.08,-35.15],
	"奥地利": [16.22,48.12],
	"阿塞拜疆": [49.56,40.29],
	"巴哈马": [282.8,25.05],
	"巴林": [50.3,26.1],
	"孟加拉": [90.26,23.43],
	"巴巴多斯": [300.7,13.05],
	"白俄罗斯": [27.3,53.52],
	"比利时": [4.21,50.51],
	"伯利兹": [271.7,17.18],
	"贝宁": [2.42,6.23],
	"不丹": [89.45,27.31],
	"玻利维亚": [291.9,-16.2],
	"波斯尼亚和黑塞哥维那": [18.26,43.52],
	"博茨瓦纳": [25.57,-24.45],
	"巴西": [312.45,-15.47],
	"英属维尔京群岛": [295.63,18.27],
	"文莱": [115,4.52],
	"保加利亚": [23.2,42.45],
	"布基纳法索": [-1.3,12.15],
	"布隆迪": [29.18,-3.16],
	"柬埔寨": [104.55,11.33],
	"喀麦隆": [11.35,3.5],
	"加拿大": [246.276507,61.129539],
	"佛得角": [-23.34,15.02],
	"开曼群岛": [278.76,19.2],
	"中非共和国": [18.35,4.23],
	"乍得": [14.59,12.1],
	"智利": [289.6,-33.24],
	"中国": [116.2,39.55],
	"哥伦比亚": [286,4.34],
	"科摩罗": [43.16,-11.4],
	"刚果": [15.12,-4.09],
	"哥斯达黎加": [275.98,9.55],
	"科特迪瓦": [-5.17,6.49],
	"克罗地亚": [15.58,45.5],
	"古巴": [277.78,23.08],
	"塞浦路斯": [33.25,35.1],
	"捷克共和国": [14.22,50.05],
	"朝鲜": [125.3,39.09],
	"刚果(扎伊尔)": [15.15,-4.2],
	"丹麦": [12.34,55.41],
	"吉布提": [42.2,11.08],
	"多米尼加": [298.76,15.2],
	"多米尼加共和国": [290.41,18.3],
	"东帝汶": [125.34,-8.29],
	"厄瓜多尔": [281.65,-0.15],
	"埃及": [31.14,30.01],
	"萨尔瓦多": [270.9,13.4],
	"赤道几内亚": [8.5,3.45],
	"厄立特里亚": [38.55,15.19],
	"爱沙尼亚": [24.48,59.22],
	"埃塞俄比亚": [38.42,9.02],
	"福克兰群岛(马尔维纳斯群岛)": [300.49,-51.4],
	"法罗群岛": [-6.56,62.05],
	"斐济": [178.3,-18.06],
	"芬兰": [25.03,60.15],
	"法国": [2.2,48.5],
	"法属圭亚那": [307.82,5.05],
	"法属波利尼西亚": [210.66,-17.32],
	"加蓬": [9.26,0.25],
	"冈比亚": [-16.4,13.28],
	"格鲁吉亚": [44.5,41.43],
	"德国": [13.25,52.3],
	"加纳": [-0.06,5.35],
	"希腊": [23.46,37.58],
	"格陵兰": [308.65,64.1],
	"瓜德罗普岛": [298.56,16],
	"危地马拉": [269.78,14.4],
	"根西岛": [-2.33,49.26],
	"几内亚": [-13.49,9.29],
	"几内亚比绍": [-15.45,11.45],
	"圭亚那": [301.88,6.5],
	"海地": [287.8,18.4],
	"赫德岛和麦当劳群岛": [74,-53],
	"洪都拉斯": [272.86,14.05],
	"匈牙利": [19.05,47.29],
	"冰岛": [-21.57,64.1],
	"印度": [77.13,28.37],
	"印度尼西亚": [106.49,-6.09],
	"伊朗": [51.3,35.44],
	"伊拉克": [44.3,33.2],
	"爱尔兰": [-6.15,53.21],
	"以色列": [35.12,31.47],
	"意大利": [12.29,41.54],
	"牙买加": [283.5,18],
	"约旦": [35.52,31.57],
	"哈萨克斯坦": [71.3,51.1],
	"肯尼亚": [36.48,-1.17],
	"基里巴斯": [173,1.3],
	"科威特": [48,29.3],
	"吉尔吉斯斯坦": [74.46,42.54],
	"老挝": [102.36,17.58],
	"拉脱维亚": [24.08,56.53],
	"黎巴嫩": [35.31,33.53],
	"莱索托": [27.3,-29.18],
	"利比里亚": [-10.47,6.18],
	"阿拉伯利比亚民众国": [13.07,32.49],
	"列支敦士登": [9.31,47.08],
	"立陶宛": [25.19,54.38],
	"卢森堡": [6.09,49.37],
	"马达加斯加": [47.31,-18.55],
	"马拉维": [33.48,-14],
	"马来西亚": [101.41,3.09],
	"马尔代夫": [73.28,4],
	"马里": [-7.55,12.34],
	"马耳他": [14.31,35.54],
	"马提尼克岛": [298.98,14.36],
	"毛里塔尼亚": [57.3,-20.1],
	"马约特岛": [45.14,-12.48],
	"墨西哥": [260.9,19.2],
	"密克罗尼西亚(联邦) ": [158.09,6.55],
	"摩尔多瓦共和国": [28.5,47.02],
	"莫桑比克": [32.32,-25.58],
	"缅甸": [96.2,16.45],
	"纳米比亚": [17.04,-22.35],
	"尼泊尔": [85.2,27.45],
	"荷兰": [4.54,52.23],
	"荷属安的列斯": [291,12.05],
	"新喀里多尼亚": [166.3,-22.17],
	"新西兰": [174.46,-41.19],
	"尼加拉瓜": [273.8,12.06],
	"尼日尔": [2.06,13.27],
	"尼日利亚": [7.32,9.05],
	"诺福克岛": [168.43,-45.2],
	"北马里亚纳群岛": [145.45,15.12],
	"挪威": [10.45,59.55],
	"阿曼": [58.36,23.37],
	"巴基斯坦": [73.1,33.4],
	"帕劳": [134.28,7.2],
	"巴拿马": [280.75,9],
	"巴布亚新几内亚": [147.08,-9.24],
	"巴拉圭": [302.7,-25.1],
	"秘鲁": [283,-12],
	"菲律宾": [121.03,14.4],
	"波兰": [21,52.13],
	"葡萄牙": [-9.1,38.42],
	"波多黎各": [293.93,18.28],
	"卡塔尔": [51.35,25.15],
	"韩国": [126.58,37.31],
	"罗马尼亚": [26.1,44.27],
	"俄罗斯": [37.35,55.45],
	"卢旺达": [30.04,-1.59],
	"圣基茨和尼维斯": [297.57,17.17],
	"圣卢西亚": [299.42,14.02],
	"圣皮埃尔和密克隆": [303.88,46.46],
	"圣文森特和格林纳丁斯": [298.9,13.1],
	"萨摩亚": [188.5,-13.5],
	"圣马力诺": [12.3,43.55],
	"圣多美和普林西比": [6.39,0.1],
	"沙特阿拉伯": [46.42,24.41],
	"塞内加尔": [-17.29,14.34],
	"塞拉利昂": [-13.17,8.3],
	"斯洛伐克": [17.07,48.1],
	"斯洛文尼亚": [14.33,46.04],
	"所罗门群岛": [159.57,-9.27],
	"索马里": [45.25,2.02],
	"比勒陀利亚": [28.12,-25.44],
	"西班牙": [-3.45,40.25],
	"苏丹": [32.35,15.31],
	"苏里南": [304.9,5.5],
	"斯威士兰": [31.06,-26.18],
	"瑞典": [18.03,59.2],
	"瑞士": [7.28,46.57],
	"阿拉伯叙利亚共和国": [36.18,33.3],
	"塔吉克斯坦": [68.48,38.33],
	"泰国": [100.35,13.45],
	"马其顿": [21.26,42.01],
	"多哥": [1.2,6.09],
	"汤加": [186,-21.1],
	"突尼斯": [10.11,36.5],
	"土耳其": [32.54,39.57],
	"土库曼斯坦": [57.5,38],
	"图瓦卢": [179.13,-8.31],
	"乌干达": [32.3,0.2],
	"乌克兰": [30.28,50.3],
	"阿联酋": [54.22,24.28],
	"英国": [-0.05,51.36],
	"坦桑尼亚": [35.45,-6.08],
	"美国": [260.994344,37.574408],
	"美属维尔京群岛": [295.44,18.21],
	"乌拉圭": [303.89,-34.5],
	"乌兹别克斯坦": [69.1,41.2],
	"瓦努阿图": [168.18,-17.45],
	"委内瑞拉": [293.45,10.3],
	"越南": [105.55,21.05],
	"南斯拉夫": [20.37,44.5],
	"赞比亚": [28.16,-15.28],
	"津巴布韦": [31.02,-17.43],
	"中国香港": [114.109497,22.421185],
	"新加坡": [103.798828,1.428075],
	"日本": [139.746094,35.960223],
	"中国台湾": [121.442871,25.105497],
	"斯里兰卡": [80.700073,7.89603],
	"中非": [20.895996,6.184246],
	"中国澳门": [113.506622,22.159427],
	"南非": [26.125488,-29.094577],
	"毛里求斯": [57.528534,-20.280232],
	"特立尼达和多巴哥": [298.740234,10.682201],
	"刚果（布）": [23.752441,-1.823423],
	"摩洛哥": [-7.090988,31.791221],
	"也门": [47.285156,15.707663],
	"马绍尔群岛": [171.184158,7.133938],
	"刚果（金）": [23.752441,-1.823423],
	"捷克": [14.545898,50.099441],
	"叙利亚": [37.023926,35.038992],
	"荷属圣马丁岛": [296.94942,18.07088],
	"蒙古": [107.050781,47.960502],
	"塞舌尔": [55.489197,-4.679086],
	"巴勒斯坦": [35.230408,31.963814],
	"塞尔维亚共和国": [20.983887,44.048116],
	"黑山共和国": [19.297485,42.674359],
	"摩尔多瓦": [28.421631,47.428087],
	"某海关": [120.418922,32.183969],//根据需要更改此处地名和经纬度即可
};

//总体
var regionData = [];//国家出入境数据
var hg_zt_data_lines1 = [];//地图线条出入境总体情况数据来回跑得点6-20名
var hg_zt_data_lines2 = [];//地图线条出入境总体情况数据6-20名
var hg_zt_data_lines1_top5 = [];//前五名
var hg_zt_data_lines2_top5 = [];//前五名
//出境
var hg_cj_data_lines = [];//6-20名
var hg_cj_data_lines_top5 = [];//前五名
//入境
var hg_rj_data_lines = [];//6-20名
var hg_rj_data_lines_top5 = [];//前五名
//线条末端点点
var point_data_crj=[];//出入境
var point_data_cj=[];//出境
var point_data_rj=[];//入境
//valueMap中的最大值最小值
var min=0;
var max=0;

var hg_zt_json=[{"cname":"中国香港","itemcode":"344","tcc":1036.0,"tvus":38666.424,"declnoCn":null},{"cname":"美国","itemcode":"840","tcc":488.0,"tvus":3398.382,"declnoCn":null},{"cname":"印度尼西亚","itemcode":"360","tcc":276.0,"tvus":1885.393,"declnoCn":null},{"cname":"新加坡","itemcode":"702","tcc":221.0,"tvus":7536.933,"declnoCn":null},{"cname":"越南","itemcode":"704","tcc":216.0,"tvus":4508.869,"declnoCn":null},{"cname":"日本","itemcode":"392","tcc":127.0,"tvus":5314.732,"declnoCn":null},{"cname":"墨西哥","itemcode":"484","tcc":93.0,"tvus":508.838,"declnoCn":null},{"cname":"德国","itemcode":"276","tcc":88.0,"tvus":760.449,"declnoCn":null},{"cname":"韩国","itemcode":"410","tcc":81.0,"tvus":1999.957,"declnoCn":null},{"cname":"法国","itemcode":"250","tcc":67.0,"tvus":222.893,"declnoCn":null},{"cname":"中国台湾","itemcode":"158","tcc":63.0,"tvus":691.455,"declnoCn":null},{"cname":"马来西亚","itemcode":"458","tcc":60.0,"tvus":1213.809,"declnoCn":null},{"cname":"加拿大","itemcode":"124","tcc":60.0,"tvus":1041.583,"declnoCn":null},{"cname":"泰国","itemcode":"764","tcc":59.0,"tvus":599.239,"declnoCn":null},{"cname":"以色列","itemcode":"376","tcc":58.0,"tvus":333.721,"declnoCn":null},{"cname":"伊朗","itemcode":"364","tcc":55.0,"tvus":520.063,"declnoCn":null},{"cname":"意大利","itemcode":"380","tcc":53.0,"tvus":557.737,"declnoCn":null},{"cname":"英国","itemcode":"826","tcc":41.0,"tvus":1461.128,"declnoCn":null},{"cname":"印度","itemcode":"356","tcc":34.0,"tvus":12.809,"declnoCn":null},{"cname":"澳大利亚","itemcode":"036","tcc":26.0,"tvus":511.352,"declnoCn":null},{"cname":"西班牙","itemcode":"724","tcc":24.0,"tvus":74.199,"declnoCn":null},{"cname":"缅甸","itemcode":"104","tcc":23.0,"tvus":9.706,"declnoCn":null},{"cname":"菲律宾","itemcode":"608","tcc":21.0,"tvus":219.078,"declnoCn":null},{"cname":"中国","itemcode":"156","tcc":19.0,"tvus":4052.807,"declnoCn":null},{"cname":"比利时","itemcode":"056","tcc":18.0,"tvus":59.988,"declnoCn":null},{"cname":"瑞士","itemcode":"756","tcc":14.0,"tvus":31.189,"declnoCn":null},{"cname":"阿联酋","itemcode":"784","tcc":13.0,"tvus":12.323,"declnoCn":null},{"cname":"老挝","itemcode":"418","tcc":12.0,"tvus":10.56,"declnoCn":null},{"cname":"冰岛","itemcode":"352","tcc":12.0,"tvus":7.12,"declnoCn":null},{"cname":"俄罗斯","itemcode":"643","tcc":11.0,"tvus":75.697,"declnoCn":null},{"cname":"荷兰","itemcode":"528","tcc":11.0,"tvus":27.893,"declnoCn":null},{"cname":"新西兰","itemcode":"554","tcc":10.0,"tvus":116.475,"declnoCn":null},{"cname":"哥斯达黎加","itemcode":"188","tcc":10.0,"tvus":52.725,"declnoCn":null},{"cname":"奥地利","itemcode":"040","tcc":10.0,"tvus":45.632,"declnoCn":null},{"cname":"丹麦","itemcode":"208","tcc":10.0,"tvus":26.194,"declnoCn":null},{"cname":"智利","itemcode":"152","tcc":8.0,"tvus":580.71,"declnoCn":null},{"cname":"瑞典","itemcode":"752","tcc":7.0,"tvus":34.548,"declnoCn":null},{"cname":"柬埔寨","itemcode":"116","tcc":7.0,"tvus":2.873,"declnoCn":null},{"cname":"阿曼","itemcode":"512","tcc":6.0,"tvus":231.0,"declnoCn":null},{"cname":"秘鲁","itemcode":"604","tcc":6.0,"tvus":39.93,"declnoCn":null},{"cname":"科特迪瓦","itemcode":"384","tcc":6.0,"tvus":15.198,"declnoCn":null},{"cname":"巴西","itemcode":"076","tcc":6.0,"tvus":4.4,"declnoCn":null},{"cname":"马里","itemcode":"466","tcc":5.0,"tvus":17.137,"declnoCn":null},{"cname":"中国澳门","itemcode":"446","tcc":4.0,"tvus":510.853,"declnoCn":null},{"cname":"加纳","itemcode":"288","tcc":4.0,"tvus":66.56,"declnoCn":null},{"cname":"马绍尔群岛","itemcode":"584","tcc":4.0,"tvus":49.094,"declnoCn":null},{"cname":"波兰","itemcode":"616","tcc":4.0,"tvus":20.05,"declnoCn":null},{"cname":"葡萄牙","itemcode":"620","tcc":3.0,"tvus":11.949,"declnoCn":null},{"cname":"肯尼亚","itemcode":"404","tcc":3.0,"tvus":10.196,"declnoCn":null},{"cname":"埃及","itemcode":"818","tcc":3.0,"tvus":2.142,"declnoCn":null},{"cname":"捷克","itemcode":"203","tcc":2.0,"tvus":27.456,"declnoCn":null},{"cname":"乌兹别克斯坦","itemcode":"860","tcc":2.0,"tvus":15.563,"declnoCn":null},{"cname":"南非","itemcode":"710","tcc":2.0,"tvus":14.784,"declnoCn":null},{"cname":"巴基斯坦","itemcode":"586","tcc":2.0,"tvus":13.95,"declnoCn":null},{"cname":"毛里求斯","itemcode":"480","tcc":2.0,"tvus":12.49,"declnoCn":null},{"cname":"贝宁","itemcode":"204","tcc":2.0,"tvus":5.876,"declnoCn":null},{"cname":"斯洛伐克","itemcode":"703","tcc":2.0,"tvus":4.025,"declnoCn":null},{"cname":"保加利亚","itemcode":"100","tcc":2.0,"tvus":3.562,"declnoCn":null},{"cname":"拉脱维亚","itemcode":"428","tcc":2.0,"tvus":1.551,"declnoCn":null},{"cname":"科威特","itemcode":"414","tcc":2.0,"tvus":1.266,"declnoCn":null},{"cname":"巴哈马","itemcode":"044","tcc":1.0,"tvus":11967.569,"declnoCn":null},{"cname":"摩洛哥","itemcode":"504","tcc":1.0,"tvus":8.524,"declnoCn":null},{"cname":"埃塞俄比亚","itemcode":"231","tcc":1.0,"tvus":8.472,"declnoCn":null},{"cname":"乌克兰","itemcode":"804","tcc":1.0,"tvus":7.661,"declnoCn":null},{"cname":"古巴","itemcode":"192","tcc":1.0,"tvus":6.523,"declnoCn":null},{"cname":"哥伦比亚","itemcode":"170","tcc":1.0,"tvus":5.58,"declnoCn":null},{"cname":"约旦","itemcode":"400","tcc":1.0,"tvus":4.14,"declnoCn":null},{"cname":"斯洛文尼亚","itemcode":"705","tcc":1.0,"tvus":3.6,"declnoCn":null},{"cname":"中非","itemcode":"140","tcc":1.0,"tvus":3.058,"declnoCn":null},{"cname":"列支敦士登","itemcode":"438","tcc":1.0,"tvus":2.826,"declnoCn":null},{"cname":"喀麦隆","itemcode":"120","tcc":1.0,"tvus":2.75,"declnoCn":null},{"cname":"委内瑞拉","itemcode":"862","tcc":1.0,"tvus":1.919,"declnoCn":null},{"cname":"塞舌尔","itemcode":"690","tcc":1.0,"tvus":1.718,"declnoCn":null},{"cname":"孟加拉","itemcode":"050","tcc":1.0,"tvus":0.914,"declnoCn":null}];
var hg_cj_json=[{"cname":"美国","itemcode":"840","tcc":405.0,"tvus":2305.75,"declnoCn":"出境"},{"cname":"中国香港","itemcode":"344","tcc":168.0,"tvus":2338.967,"declnoCn":"出境"},{"cname":"墨西哥","itemcode":"484","tcc":89.0,"tvus":473.612,"declnoCn":"出境"},{"cname":"日本","itemcode":"392","tcc":87.0,"tvus":755.092,"declnoCn":"出境"},{"cname":"以色列","itemcode":"376","tcc":58.0,"tvus":333.721,"declnoCn":"出境"},{"cname":"伊朗","itemcode":"364","tcc":55.0,"tvus":520.063,"declnoCn":"出境"},{"cname":"韩国","itemcode":"410","tcc":53.0,"tvus":544.506,"declnoCn":"出境"},{"cname":"马来西亚","itemcode":"458","tcc":47.0,"tvus":455.245,"declnoCn":"出境"},{"cname":"印度","itemcode":"356","tcc":30.0,"tvus":0.804,"declnoCn":"出境"},{"cname":"泰国","itemcode":"764","tcc":28.0,"tvus":101.542,"declnoCn":"出境"},{"cname":"缅甸","itemcode":"104","tcc":23.0,"tvus":9.706,"declnoCn":"出境"},{"cname":"比利时","itemcode":"056","tcc":17.0,"tvus":57.876,"declnoCn":"出境"},{"cname":"加拿大","itemcode":"124","tcc":15.0,"tvus":80.19,"declnoCn":"出境"},{"cname":"老挝","itemcode":"418","tcc":12.0,"tvus":10.56,"declnoCn":"出境"},{"cname":"法国","itemcode":"250","tcc":11.0,"tvus":32.975,"declnoCn":"出境"},{"cname":"英国","itemcode":"826","tcc":11.0,"tvus":41.453,"declnoCn":"出境"},{"cname":"俄罗斯","itemcode":"643","tcc":11.0,"tvus":75.697,"declnoCn":"出境"},{"cname":"中国台湾","itemcode":"158","tcc":10.0,"tvus":30.509,"declnoCn":"出境"},{"cname":"菲律宾","itemcode":"608","tcc":10.0,"tvus":144.692,"declnoCn":"出境"},{"cname":"哥斯达黎加","itemcode":"188","tcc":10.0,"tvus":52.725,"declnoCn":"出境"},{"cname":"意大利","itemcode":"380","tcc":9.0,"tvus":47.681,"declnoCn":"出境"},{"cname":"德国","itemcode":"276","tcc":8.0,"tvus":24.748,"declnoCn":"出境"},{"cname":"西班牙","itemcode":"724","tcc":7.0,"tvus":50.189,"declnoCn":"出境"},{"cname":"荷兰","itemcode":"528","tcc":7.0,"tvus":23.987,"declnoCn":"出境"},{"cname":"科特迪瓦","itemcode":"384","tcc":6.0,"tvus":15.198,"declnoCn":"出境"},{"cname":"柬埔寨","itemcode":"116","tcc":6.0,"tvus":0.0,"declnoCn":"出境"},{"cname":"秘鲁","itemcode":"604","tcc":6.0,"tvus":39.93,"declnoCn":"出境"},{"cname":"印度尼西亚","itemcode":"360","tcc":5.0,"tvus":22.62,"declnoCn":"出境"},{"cname":"马里","itemcode":"466","tcc":5.0,"tvus":17.137,"declnoCn":"出境"},{"cname":"智利","itemcode":"152","tcc":5.0,"tvus":23.512,"declnoCn":"出境"},{"cname":"巴西","itemcode":"076","tcc":5.0,"tvus":0.004,"declnoCn":"出境"},{"cname":"波兰","itemcode":"616","tcc":4.0,"tvus":20.05,"declnoCn":"出境"},{"cname":"中国","itemcode":"156","tcc":4.0,"tvus":3297.5,"declnoCn":"出境"},{"cname":"加纳","itemcode":"288","tcc":4.0,"tvus":66.56,"declnoCn":"出境"},{"cname":"肯尼亚","itemcode":"404","tcc":3.0,"tvus":10.196,"declnoCn":"出境"},{"cname":"瑞典","itemcode":"752","tcc":3.0,"tvus":9.669,"declnoCn":"出境"},{"cname":"丹麦","itemcode":"208","tcc":3.0,"tvus":24.059,"declnoCn":"出境"},{"cname":"澳大利亚","itemcode":"036","tcc":3.0,"tvus":0.375,"declnoCn":"出境"},{"cname":"越南","itemcode":"704","tcc":3.0,"tvus":3.675,"declnoCn":"出境"},{"cname":"葡萄牙","itemcode":"620","tcc":2.0,"tvus":9.666,"declnoCn":"出境"},{"cname":"科威特","itemcode":"414","tcc":2.0,"tvus":1.266,"declnoCn":"出境"},{"cname":"乌兹别克斯坦","itemcode":"860","tcc":2.0,"tvus":15.563,"declnoCn":"出境"},{"cname":"贝宁","itemcode":"204","tcc":2.0,"tvus":5.876,"declnoCn":"出境"},{"cname":"毛里求斯","itemcode":"480","tcc":2.0,"tvus":12.49,"declnoCn":"出境"},{"cname":"埃及","itemcode":"818","tcc":2.0,"tvus":0.0,"declnoCn":"出境"},{"cname":"埃塞俄比亚","itemcode":"231","tcc":1.0,"tvus":8.472,"declnoCn":"出境"},{"cname":"古巴","itemcode":"192","tcc":1.0,"tvus":6.523,"declnoCn":"出境"},{"cname":"孟加拉","itemcode":"050","tcc":1.0,"tvus":0.914,"declnoCn":"出境"},{"cname":"斯洛文尼亚","itemcode":"705","tcc":1.0,"tvus":3.6,"declnoCn":"出境"},{"cname":"南非","itemcode":"710","tcc":1.0,"tvus":2.3,"declnoCn":"出境"},{"cname":"喀麦隆","itemcode":"120","tcc":1.0,"tvus":2.75,"declnoCn":"出境"},{"cname":"巴基斯坦","itemcode":"586","tcc":1.0,"tvus":1.45,"declnoCn":"出境"},{"cname":"新加坡","itemcode":"702","tcc":1.0,"tvus":4.72,"declnoCn":"出境"},{"cname":"捷克","itemcode":"203","tcc":1.0,"tvus":0.569,"declnoCn":"出境"},{"cname":"哥伦比亚","itemcode":"170","tcc":1.0,"tvus":5.58,"declnoCn":"出境"},{"cname":"乌克兰","itemcode":"804","tcc":1.0,"tvus":7.661,"declnoCn":"出境"},{"cname":"中非","itemcode":"140","tcc":1.0,"tvus":3.058,"declnoCn":"出境"},{"cname":"阿联酋","itemcode":"784","tcc":1.0,"tvus":0.98,"declnoCn":"出境"},{"cname":"约旦","itemcode":"400","tcc":1.0,"tvus":4.14,"declnoCn":"出境"}];
var hg_rj_json=[{"cname":"中国香港","itemcode":"344","tcc":868.0,"tvus":36327.457,"declnoCn":"入境"},{"cname":"印度尼西亚","itemcode":"360","tcc":271.0,"tvus":1862.773,"declnoCn":"入境"},{"cname":"新加坡","itemcode":"702","tcc":220.0,"tvus":7532.213,"declnoCn":"入境"},{"cname":"越南","itemcode":"704","tcc":213.0,"tvus":4505.194,"declnoCn":"入境"},{"cname":"美国","itemcode":"840","tcc":83.0,"tvus":1092.632,"declnoCn":"入境"},{"cname":"德国","itemcode":"276","tcc":80.0,"tvus":735.701,"declnoCn":"入境"},{"cname":"法国","itemcode":"250","tcc":56.0,"tvus":189.918,"declnoCn":"入境"},{"cname":"中国台湾","itemcode":"158","tcc":53.0,"tvus":660.946,"declnoCn":"入境"},{"cname":"加拿大","itemcode":"124","tcc":45.0,"tvus":961.393,"declnoCn":"入境"},{"cname":"意大利","itemcode":"380","tcc":44.0,"tvus":510.056,"declnoCn":"入境"},{"cname":"日本","itemcode":"392","tcc":40.0,"tvus":4559.64,"declnoCn":"入境"},{"cname":"泰国","itemcode":"764","tcc":31.0,"tvus":497.697,"declnoCn":"入境"},{"cname":"英国","itemcode":"826","tcc":30.0,"tvus":1419.675,"declnoCn":"入境"},{"cname":"韩国","itemcode":"410","tcc":28.0,"tvus":1455.451,"declnoCn":"入境"},{"cname":"澳大利亚","itemcode":"036","tcc":23.0,"tvus":510.977,"declnoCn":"入境"},{"cname":"西班牙","itemcode":"724","tcc":17.0,"tvus":24.01,"declnoCn":"入境"},{"cname":"中国","itemcode":"156","tcc":15.0,"tvus":755.307,"declnoCn":"入境"},{"cname":"瑞士","itemcode":"756","tcc":14.0,"tvus":31.189,"declnoCn":"入境"},{"cname":"马来西亚","itemcode":"458","tcc":13.0,"tvus":758.564,"declnoCn":"入境"},{"cname":"冰岛","itemcode":"352","tcc":12.0,"tvus":7.12,"declnoCn":"入境"},{"cname":"阿联酋","itemcode":"784","tcc":12.0,"tvus":11.343,"declnoCn":"入境"},{"cname":"菲律宾","itemcode":"608","tcc":11.0,"tvus":74.386,"declnoCn":"入境"},{"cname":"奥地利","itemcode":"040","tcc":10.0,"tvus":45.632,"declnoCn":"入境"},{"cname":"新西兰","itemcode":"554","tcc":10.0,"tvus":116.475,"declnoCn":"入境"},{"cname":"丹麦","itemcode":"208","tcc":7.0,"tvus":2.135,"declnoCn":"入境"},{"cname":"阿曼","itemcode":"512","tcc":6.0,"tvus":231.0,"declnoCn":"入境"},{"cname":"瑞典","itemcode":"752","tcc":4.0,"tvus":24.879,"declnoCn":"入境"},{"cname":"墨西哥","itemcode":"484","tcc":4.0,"tvus":35.226,"declnoCn":"入境"},{"cname":"中国澳门","itemcode":"446","tcc":4.0,"tvus":510.853,"declnoCn":"入境"},{"cname":"马绍尔群岛","itemcode":"584","tcc":4.0,"tvus":49.094,"declnoCn":"入境"},{"cname":"印度","itemcode":"356","tcc":4.0,"tvus":12.005,"declnoCn":"入境"},{"cname":"荷兰","itemcode":"528","tcc":4.0,"tvus":3.906,"declnoCn":"入境"},{"cname":"智利","itemcode":"152","tcc":3.0,"tvus":557.198,"declnoCn":"入境"},{"cname":"拉脱维亚","itemcode":"428","tcc":2.0,"tvus":1.551,"declnoCn":"入境"},{"cname":"斯洛伐克","itemcode":"703","tcc":2.0,"tvus":4.025,"declnoCn":"入境"},{"cname":"保加利亚","itemcode":"100","tcc":2.0,"tvus":3.562,"declnoCn":"入境"},{"cname":"列支敦士登","itemcode":"438","tcc":1.0,"tvus":2.826,"declnoCn":"入境"},{"cname":"摩洛哥","itemcode":"504","tcc":1.0,"tvus":8.524,"declnoCn":"入境"},{"cname":"葡萄牙","itemcode":"620","tcc":1.0,"tvus":2.283,"declnoCn":"入境"},{"cname":"塞舌尔","itemcode":"690","tcc":1.0,"tvus":1.718,"declnoCn":"入境"},{"cname":"巴西","itemcode":"076","tcc":1.0,"tvus":4.396,"declnoCn":"入境"},{"cname":"巴哈马","itemcode":"044","tcc":1.0,"tvus":11967.569,"declnoCn":"入境"},{"cname":"巴基斯坦","itemcode":"586","tcc":1.0,"tvus":12.5,"declnoCn":"入境"},{"cname":"柬埔寨","itemcode":"116","tcc":1.0,"tvus":2.873,"declnoCn":"入境"},{"cname":"委内瑞拉","itemcode":"862","tcc":1.0,"tvus":1.919,"declnoCn":"入境"},{"cname":"比利时","itemcode":"056","tcc":1.0,"tvus":2.112,"declnoCn":"入境"},{"cname":"埃及","itemcode":"818","tcc":1.0,"tvus":2.142,"declnoCn":"入境"},{"cname":"南非","itemcode":"710","tcc":1.0,"tvus":12.484,"declnoCn":"入境"},{"cname":"捷克","itemcode":"203","tcc":1.0,"tvus":26.887,"declnoCn":"入境"}];
$(function(){
	hg_zt(hg_zt_json);//出入境总体情况
	hg_cj(hg_cj_json);//出境
	hg_rj(hg_rj_json);//入境
});

//总体
function hg_zt(data){
	//console.log(data);
	$.each(data,function(i,p){
		//区域数据
		if(i==0){max=p.tcc;}
		if(i==(data.length-1)){min=p.tcc;}
		var dataRegion={
			name : p.cname ,
			value : [p.tcc,p.tvus,(i+1)]
		};
		regionData.push(dataRegion);
		
		//出入境总体线条数据
		//前五名红色
		var from_toNameCoords=geoCoord[p.cname];
		if(!from_toNameCoords){console.log("该国家未匹配到经纬度:"+p.cname);}
		if(from_toNameCoords && i<=4){//识别不了经度信息的必须剔除  不然会报错  痛过
			var linesdata1= {
					fromName : '某海关',
					toName : p.cname,
					coords : [geoCoord['某海关'],from_toNameCoords],
					value : [p.tcc,p.tvus,(i+1)]
				};
			hg_zt_data_lines1_top5.push(linesdata1);
			var linesdata2= {
					fromName: p.cname,
					toName : '某海关',
					coords : [from_toNameCoords,geoCoord['某海关']],
					value : [p.tcc,p.tvus,(i+1)]
				};
			hg_zt_data_lines2_top5.push(linesdata2);
			var pointdata={
					name:p.cname,
					value:from_toNameCoords,
					pc:p.tcc,
					hz:p.tvus,
					pm:(i+1)
			};
			point_data_crj.push(pointdata);
		}//else{console.log(p.cname);}
		//后十五名
		if(from_toNameCoords && i>4 && i<20){//识别不了经度信息的必须剔除  不然会报错  痛过
			var linesdata1= {
					fromName : '某海关',
					toName : p.cname,
					coords : [geoCoord['某海关'],from_toNameCoords],
					value : [p.tcc,p.tvus,(i+1)]
				};
			hg_zt_data_lines1.push(linesdata1);
			var linesdata2= {
					fromName: p.cname,
					toName : '某海关',
					coords : [from_toNameCoords,geoCoord['某海关']],
					value : [p.tcc,p.tvus,(i+1)]
				};
			hg_zt_data_lines2.push(linesdata2);
			var pointdata={
					name:p.cname,
					value:from_toNameCoords,
					pc:p.tcc,
					hz:p.tvus,
					pm:(i+1)
			};
			point_data_crj.push(pointdata);
		}//else{console.log(p.cname);}
	});
};
//出境
function hg_cj(data){
	$.each(data,function(i,p){
		//前五名红色
		var from_toNameCoords=geoCoord[p.cname];
		if(!from_toNameCoords){console.log("该国家未匹配到经纬度:"+p.cname);}
		if(from_toNameCoords && i<=4){//识别不了经度信息的必须剔除  不然会报错  痛过
			var linesdata1= {
					fromName : '某海关',
					toName : p.cname,
					coords : [geoCoord['某海关'],from_toNameCoords],
					value : [p.tcc,p.tvus,(i+1)]
				};
			hg_cj_data_lines_top5.push(linesdata1);
			var pointdata={
					name:p.cname,
					value:from_toNameCoords,
					pc:p.tcc,
					hz:p.tvus,
					pm:(i+1)
			};
			point_data_cj.push(pointdata);
		}//else{console.log(p.cname);}
		//后十五名
		if(from_toNameCoords && i>4 && i<20){//识别不了经度信息的必须剔除  不然会报错  痛过
			var linesdata1= {
					fromName : '某海关',
					toName : p.cname,
					coords : [geoCoord['某海关'],from_toNameCoords],
					value : [p.tcc,p.tvus,(i+1)]
				};
			hg_cj_data_lines.push(linesdata1);
			var pointdata={
					name:p.cname,
					value:from_toNameCoords,
					pc:p.tcc,
					hz:p.tvus,
					pm:(i+1)
			};
			point_data_cj.push(pointdata);
		}//else{console.log(p.cname);}
	});
};
//入境
function hg_rj(data){
	$.each(data,function(i,p){
		//前五名红色
		var from_toNameCoords=geoCoord[p.cname];
		if(!from_toNameCoords){console.log("该国家未匹配到经纬度:"+p.cname);}
		if(from_toNameCoords && i<=4){//识别不了经度信息的必须剔除  不然会报错  痛过
			var linesdata2= {
					fromName: p.cname,
					toName : '某海关',
					coords : [from_toNameCoords,geoCoord['某海关']],
					value : [p.tcc,p.tvus,(i+1)]
				};
			hg_rj_data_lines_top5.push(linesdata2);
			var pointdata={
					name:p.cname,
					value:from_toNameCoords,
					pc:p.tcc,
					hz:p.tvus,
					pm:(i+1)
			};
			point_data_rj.push(pointdata);
		}//else{console.log(p.cname);}
		//后十五名
		if(from_toNameCoords && i>4 && i<20){//识别不了经度信息的必须剔除  不然会报错  痛过
			var linesdata2= {
					fromName: p.cname,
					toName : '某海关',
					coords : [from_toNameCoords,geoCoord['某海关']],
					value : [p.tcc,p.tvus,(i+1)]
				};
			hg_rj_data_lines.push(linesdata2);
			var pointdata={
					name:p.cname,
					value:from_toNameCoords,
					pc:p.tcc,
					hz:p.tvus,
					pm:(i+1)
			};
			point_data_rj.push(pointdata);
		}//else{console.log(p.cname);}
	});
	toMap();
};
//绘制3D地图
function toMap(){
	option = {
		tooltip : {
			show : true,
			trigger: 'item',
		    formatter : function(params){
		        // console.log(params);
		        var data = params.data;
		        if(params.seriesName=='World_3DMap' && data.value[0]){
		        	//console.log(params);
		        	return '<b style="font-size:18px;">出入境总体情况</b><br />国家: <b style="font-size:16px;color:#f4b766;">'+
                    data.name + 
                    '</b><br /> 总批次: '+data.value[0]+
                    ' (批次)<br /> 总货值: '+data.value[1]+
                    ' (万美元)'+'<br />业务量排名: <b style="font-size:14px;color:red;">'+ data.value[2]+'</b> 名';
		        }
		        if(params.seriesName=='scatter3D'){
		        	//console.log(params);
		        	return '<b style="font-size:20px;">北京</b>';
                   
		        }
		        if(params.seriesName=='出入境'){
		        	//console.log(params);
		        	return '<b style="font-size:18px;">出入境总体情况</b><br />国家: <b style="font-size:16px;color:#f4b766;">'+
		        	params.name + 
                    '</b><br /> 总批次: '+data.pc+
                    ' (批次)<br /> 总货值: '+data.hz+
                    ' (万美元)'+'<br />业务量排名: <b style="font-size:14px;color:red;">'+ data.pm+'</b> 名';
		        }
		        if(params.seriesName=='出境'){
		        	//console.log(params);
		        	return '<b style="font-size:18px;">出境</b><br />国家: <b style="font-size:16px;color:#f4b766;">'+
		        	params.name + 
                    '</b><br /> 批次: '+data.pc+
                    ' (批次)<br /> 货值: '+data.hz+
                    ' (万美元)'+'<br />业务量排名: <b style="font-size:14px;color:red;">'+ data.pm+'</b> 名';
		        }
		        if(params.seriesName=='入境'){
		        	//console.log(params);
		        	return '<b style="font-size:18px;">入境</b><br />国家: <b style="font-size:16px;color:#f4b766;">'+
		        	params.name + 
                    '</b><br /> 批次: '+data.pc+
                    ' (批次)<br /> 货值: '+data.hz+
                    ' (万美元)'+'<br />业务量排名: <b style="font-size:14px;color:red;">'+ data.pm+'</b> 名';
		        }
		        return "";
		    },
		    textStyle: {
		        colol: '#FFFFFF'
		    },
		    axisPointer : {
		        type: 'shadow'
		    }
		},
		legend : {
//			right : '1%',
//			bottom : '1%',
			left:'5%',
			top:10,
			zlevel:10,
			orient :'horizontal',//图例列表的布局朝向。可选：'horizontal','vertical'
			data : [ '出入境','出境', '入境' ],
			selectedMode : 'single', //multiple 多选,single
			selected : {
				'出境' : false,
				'入境' : false,
			},
			textStyle : {
				color : '#b14516',
				fontWeight : 'bold',
				fontSize : 14
			},
			inactiveColor : '#ccc' //inactive 关闭的意思 关闭的颜色
		},
		visualMap : [ {
			show : true,
			seriesIndex : 0,
			dimension : 0,//取第一维度,批次
//			left:10,
//			top:10,
			right:10,
			bottom:10,
			zlevel:10,
			calculable:true,
			min : min,
			max : max,
			inRange : {//由低到高
				color : ['#73dbf9','#4aadf2','#3e99ee','#4a70d2','#4c4cd5','#1d269f','#0d1474']
			},
			textStyle:{
				color:'#fff',
				fontSize:14
			}
		} ],
		geo3D : {
			show : false,
			map : 'world',
			viewControl : {
				autoRotate : autoRotate,
				distance : distance, //地图大小   值越大-地图越小，值越小-地图越大
				alpha : alpha, //垂直翻转角度
				beta : beta,
				zoomSensitivity : zoomSensitivity,
				center : center,
				autoRotateDirection: autoRotateDirection,
				autoRotateSpeed: autoRotateSpeed,
				autoRotateAfterStill: autoRotateAfterStill,
				damping: damping,
				rotateSensitivity: rotateSensitivity,
			},
		//environment: 'background.png',//默认'auto'环境贴图，支持純颜色值，渐变色，全景贴图的 url
		},
		series : [ 
		  {
			type : 'map3D',
			map : 'world',
			name : 'World_3DMap',
			height:'auto',
			zlevel : 3,
			boxWidth : 'auto',
			boxHeight : 'auto',
			boxDepth : 'auto',
			regionHeight : 3,
			environment: '#151e2e',
			//'color' 只显示颜色，不受光照等其它因素的影响。
			//'lambert' 通过经典的 lambert 着色表现光照带来的明暗
			//'realistic' 真实感渲染，配合 light.ambientCubemap 和 postEffect 使用可以让展示的画面效果和质感有质的提升
			//shading:'lambert',
			top : '0',
			instancing : false, //instancing会将 GeoJSON 中所有的 geometry 合并成一个，在 GeoJSON 拥有特别多（上千）的 geometry 时可以有效提升绘制效率。
			//environment: 'background.png',
			viewControl : {
				autoRotate : autoRotate,
				distance : distance, //地图大小   值越大-地图越小，值越小-地图越大
				alpha : alpha, //垂直翻转角度
				beta : beta,
				zoomSensitivity : zoomSensitivity,
				center : center,
				autoRotateDirection: autoRotateDirection,
				autoRotateSpeed: autoRotateSpeed,
				autoRotateAfterStill: autoRotateAfterStill,
				damping: damping,
				rotateSensitivity: rotateSensitivity,
			},
			itemStyle : {
				areaColor: "#dafbfb",
				opacity : 1,
				borderWidth : 0.3,
				borderColor : '#545454'
			},
			emphasis : { //当鼠标放上去  地区区域是否显示名称
				label : {
					show : true,
					textStyle : {
						color : 'red',
						fontSize : 20,
						backgroundColor : 'rgba(0,23,11,0)'
					}
				},
				itemStyle : {
					areaColor : "#e3c854",
					opacity : 1,
				},
			},
			light: { //光照阴影
	             main: {
	                 color: '#fff', //光照颜色
	                 intensity: 1, //光照强度
	                 shadowQuality: 'high', //阴影亮度
	                 shadow: false, //是否显示阴影
	                 alpha:55,
	                 beta:10
	 
	             },
	              ambient: {
	                 intensity: 0.22
	             }
	         },
			data : regionData
		}, { //出入境总体---进
			type : 'lines3D',
			name : '出入境',
			polyline:true,
			coordinateSystem : 'geo3D',
			zlevel : 5,
			silent: false,//开启鼠标触发事件,然并卵
			effect : {
				show : true,
				period : 8,
				trailLength : 0.1,
				trailColor : '#ffffff',
				trailWidth : 2
			},
			lineStyle : {
				normal : {
					color : '#749c21',
					width : 1,
					opacity: 1,
				}
			},
			data : hg_zt_data_lines1
		},{ //出入境总体---出
			type : 'lines3D',
			name : '出入境',
			polyline:true,
			silent: false,
			coordinateSystem : 'geo3D',
			zlevel : 5,
			effect : {
				show : true,
				period :8,
				trailLength : 0.1,
				trailColor : '#ffffff',
				trailWidth : 2
			},
			lineStyle : {
				normal : {
					color : '#749c21',
					width : 1,
					opacity: 1,
				}
			},
			data :hg_zt_data_lines2
		},{ //出入境总体---出top5
			type : 'lines3D',
			name : '出入境',
			polyline:true,
			coordinateSystem : 'geo3D',
			zlevel : 5,
			effect : {
				show : true,
				period : 8,
				trailLength : 0.1,
				trailColor : '#ffffff',
				trailWidth : 3
			},
			lineStyle : {
				normal : {
					color : 'red',
					width : 2,
					opacity: 1,
				}
			},
			data :hg_zt_data_lines2_top5
		},{ //出境后15名
			type : 'lines3D',
			name : '出境',
			coordinateSystem : 'geo3D',
			zlevel : 5,
			effect : {
				show : true,
				period : 8,
				trailLength : 0.1,
				trailColor : '#ffffff',
				trailWidth : 2
			},
			lineStyle : {
				normal : {
					color : '#ffa020',
					width : 1,
					opacity: 1,
				}
			},
			data : hg_cj_data_lines
		}, { //出境top5
			type : 'lines3D',
			name : '出境',
			coordinateSystem : 'geo3D',
			zlevel : 5,
			effect : {
				show : true,
				period : 8,
				trailLength : 0.1,
				trailColor : '#ffffff',
				trailWidth : 3
			},
			lineStyle : {
				normal : {
					color : 'red',
					width : 2,
					opacity: 1,
				}
			},
			data :hg_cj_data_lines_top5
		}, { //入境后15名
			type : 'lines3D',
			name : '入境',
			coordinateSystem : 'geo3D',
			zlevel : 5,
			effect : {
				show : true,
				period : 8,
				trailLength : 0.1,
				trailColor : '#ffffff',
				trailWidth : 2
			},
			lineStyle : {
				normal : {
					color : '#41ce95',
					width : 1,
					opacity: 1,
				}
			},
			data : hg_rj_data_lines
		}, { //入境top5
			type : 'lines3D',
			name : '入境',
			coordinateSystem : 'geo3D',
			zlevel : 5,
			effect : {
				show : true,
				period : 8,
				trailLength : 0.1,
				trailColor : '#ffffff',
				trailWidth : 3
			},
			lineStyle : {
				normal : {
					color : 'red',
					width : 2,
					opacity: 1,
				}
			},
			data : hg_rj_data_lines_top5
		}, {//红色五角星
			name: 'scatter3D',
	        type: "scatter3D",
	        zlevel : 5,
	        coordinateSystem: 'geo3D',
	        symbol: 'path://M512,422l512-128.6L707.6,474.7L512,422z M1024,293.4H632.8L512,422L1024,293.4z M512,422l316.4,346 L707.6,474.7L512,422z M512,586.7L828.4,768L512,422V586.7z M632.8,293.4L512,0v422L632.8,293.4z M195.6,768L512,586.7V422 L195.6,768z M512,0L391,293.4L512,422V0z M391,293.4H0L512,422L391,293.4z M316.4,474.7L195.6,768L512,422L316.4,474.7z M0,293.4 l316.4,181.3L512,422L0,293.4z',
	        symbolSize: 20,
	        opacity: 1,
	        label: {
	             show: false,
	         },
	        itemStyle: {
	        	color: "red",
	        	opacity: 1,
	        },
	        data:[[116.394653,39.913950,'北京']]
		},{//线条末端点点
	         name: '出入境',
	         type: "scatter3D",
	         coordinateSystem: 'geo3D',
	         symbol: 'circle',// 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
	         symbolSize: 10,
	         opacity: 1,
	         zlevel:5,
	         itemStyle: {
	        	 color:'#ffa022',
	             borderWidth: 1,
	             borderColor: '#f9d78a',
	             opacity: 1,
	         },
	         emphasis: { //当鼠标放上去  地区区域是否显示名称
	             itemStyle: {
	            	color: "#9ce7f2",
	             },
	             label: {
		             show: false,
		         },
	         },
	 		   data :point_data_crj
	       },{//线条末端点点
		         name: '出境',
		         type: "scatter3D",
		         coordinateSystem: 'geo3D',
		         symbol: 'circle',// 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
		         symbolSize: 10,
		         opacity: 1,
		         zlevel:5,
		         itemStyle: {
		        	 color:'#ffa022',
		             borderWidth: 1,
		             borderColor: '#f9d78a',
		             opacity: 1,
		         },
		         emphasis: { //当鼠标放上去  地区区域是否显示名称
		             itemStyle: {
		            	color: "#9ce7f2",
		             },
		             label: {
			             show: false,
			         },
		         },
		 		   data :point_data_cj
		       },{//线条末端点点
			         name: '入境',
			         type: "scatter3D",
			         coordinateSystem: 'geo3D',
			         symbol: 'circle',// 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
			         symbolSize: 10,
			         opacity: 1,
			         zlevel:5,
			         itemStyle: {
			        	 color:'#ffa022',
			             borderWidth: 1,
			             borderColor: '#f9d78a',
			             opacity: 1,
			         },
			         emphasis: { //当鼠标放上去  地区区域是否显示名称
			             itemStyle: {
			            	color: "#9ce7f2",
			             },
			             label: {
				             show: false,
				         },
			         },
			 		   data :point_data_rj
			       },]
	};
//	myChart.setOption(option);
}