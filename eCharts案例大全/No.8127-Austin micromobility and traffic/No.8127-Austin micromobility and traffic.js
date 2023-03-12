var uploadedDataURL = "/asset/get/s/data-1586223266202-KCeNgTQmI.json";

var data = [
{name:"6160", value:31024},
{name:"6163", value:15292},
{name:"6165", value:46999},
{name:"6166", value:58099},
{name:"6167", value:32183},
{name:"6169", value:58146},
{name:"6170", value:38377},
{name:"6171", value:59749},
{name:"6174", value:48569},
{name:"6177", value:13983},
{name:"6181", value:40996},
{name:"6182", value:47775},
{name:"6192", value:38801},
{name:"6197", value:42279},
{name:"6198", value:17750},
{name:"6199", value:24306},
{name:"6211", value:50172},
{name:"6212", value:54320},
{name:"6316", value:34245},
{name:"6331", value:37566},
{name:"6343", value:29568},
{name:"6351", value:8724},
{name:"6354", value:14996},
{name:"6355", value:25858},
{name:"6356", value:4079},
{name:"6366", value:17948},
{name:"6382", value:41837},
{name:"6501", value:143},
{name:"6502", value:21779},
{name:"6523", value:33565},
{name:"6546", value:32503},
{name:"6547", value:33346},
{name:"6548", value:31371},
{name:"6549", value:22602},
{name:"6563", value:30874},
{name:"6669", value:19507}
]


var geoCoordMap = {
"6382":[-97.81062320000001,30.4638901],
"6366":[-97.86483,30.2340565],
"6199":[-97.7531357,30.3534126],
"6211":[-97.7022171,30.419012100000003],
"6198":[-97.7550812,30.354349100000004],
"6502":[-97.71955109999999,30.238802000000003],
"6165":[-97.7952881,30.352457],
"6197":[-97.70792390000001,30.227024100000005],
"6351":[-97.7643051,30.303033799999998],
"6354":[-97.7682571,30.2966995],
"6171":[-97.7468719,30.257143],
"6192":[-97.79743959999999,30.365800899999996],
"6167":[-97.8066635,30.251068100000005],
"6316":[-97.7321243,30.395490600000002],
"6343":[-97.74689479999999,30.361764899999997],
"6331":[-97.7535172,30.23876],
"6163":[-97.7258301,30.1632175],
"6169":[-97.81224820000001,30.257986100000004],
"6547":[-97.7174606,30.231635999999998],
"6548":[-97.7343369,30.350572600000003],
"6181":[-97.6876297,30.182880400000002],
"6549":[-97.8038712,30.2256088],
"6546":[-97.7368851,30.2323151],
"6523":[-97.7170486,30.2985783],
"6563":[-97.83191679999999,30.2113571],
"6174":[-97.69702149999999,30.363140100000003],
"6355":[-97.7926559,30.1838989],
"6166":[-97.8089066,30.253723100000002],
"6669":[-97.71573640000001,30.302623699999998],
"6212":[-97.69590759999998,30.415809600000003],
"6356":[-97.76270290000001,30.310499199999995],
"6170":[-97.8011093,30.2421951],
"6182":[-97.6782227,30.4078522],
"6501":[-97.74961850000001,30.3519115],
"6177":[-97.7939301,30.475255999999998],
"6160":[-97.7894058,30.2282581]
}

var dataGeo = [{name:"48453001100", value:2716001},
{name:"48453000601", value:649404},
{name:"48453000603", value:493862},
{name:"48453000604", value:420860},
{name:"48453001305", value:420413},
{name:"48453000902", value:374539},
{name:"48453001200", value:324591},
{name:"48453000700", value:198923},
{name:"48453001303", value:169405},
{name:"48453001401", value:152856},
{name:"48453000401", value:148573},
{name:"48453002304", value:107791},
{name:"48453001000", value:75999},
{name:"48453000306", value:66030},
{name:"48453000500", value:65889},
{name:"48453000901", value:45563},
{name:"48453001911", value:41651},
{name:"48453000204", value:34786},
{name:"48453000804", value:34676},
{name:"48453000402", value:30271},
{name:"48453000302", value:27131},
{name:"48453001308", value:25731},
{name:"48453001304", value:24732},
{name:"48453000803", value:24561},
{name:"48453002308", value:22722},
{name:"48453001901", value:21936},
{name:"48453002318", value:18536},
{name:"48453002004", value:18346},
{name:"48453002317", value:16619},
{name:"48453002316", value:16602},
{name:"48453001849", value:14733},
{name:"48453001602", value:13194},
{name:"48453001605", value:12169},
{name:"48453000305", value:10675},
{name:"48453002314", value:10630},
{name:"48453002005", value:10372},
{name:"48453001402", value:10150},
{name:"48453000203", value:9978},
{name:"48453001307", value:8878},
{name:"48453002307", value:7548},
{name:"48453001503", value:7158},
{name:"48453000802", value:6795},
{name:"48453000801", value:6678},
{name:"48453000205", value:6431},
{name:"48453001403", value:5549},
{name:"48453000304", value:5515},
{name:"48453002111", value:5494},
{name:"48453002315", value:5033},
{name:"48453001504", value:4122},
{name:"48453002313", value:3920},
{name:"48453001603", value:3884},
{name:"48453002105", value:3877},
{name:"48453000307", value:3588},
{name:"48453001505", value:3488},
{name:"48453000206", value:3465},
{name:"48453000101", value:2669},
{name:"48453002312", value:2504},
{name:"48453002109", value:2449},
{name:"48453001910", value:2131},
{name:"48453001604", value:2089},
{name:"48453002403", value:2058},
{name:"48453002402", value:2035},
{name:"48453001501", value:1855},
{name:"48453002003", value:1819},
{name:"48453001712", value:1660},
{name:"48453001817", value:1612},
{name:"48453002411", value:1402},
{name:"48453001850", value:1330},
{name:"48453001818", value:1313},
{name:"48453002431", value:1286},
{name:"48453002002", value:1102},
{name:"48453001821", value:1073},
{name:"48453002110", value:999},
{name:"48453001804", value:907},
{name:"48453002106", value:855},
{name:"48453001812", value:837},
{name:"48453001820", value:755},
{name:"48453000102", value:715},
{name:"48453002107", value:681},
{name:"48453001753", value:670},
{name:"48453001750", value:646},
{name:"48453002104", value:605},
{name:"48453001823", value:563},
{name:"48453002410", value:553},
{name:"48453002112", value:549},
{name:"48453001713", value:537},
{name:"48453001822", value:534},
{name:"48453001819", value:472},
{name:"48453002422", value:445},
{name:"48453001805", value:403},
{name:"48453001806", value:393},
{name:"48453001754", value:374},
{name:"48453001707", value:371},
{name:"48453002108", value:363},
{name:"48453001826", value:344},
{name:"48453001919", value:336},
{name:"48453001844", value:331},
{name:"48453001811", value:324},
{name:"48453001813", value:305},
{name:"48453001606", value:296},
{name:"48453001728", value:290},
{name:"48453002421", value:279},
{name:"48453001843", value:277},
{name:"48453001845", value:266},
{name:"48453001718", value:259},
{name:"48453002409", value:244},
{name:"48453001751", value:225},
{name:"48453002427", value:219},
{name:"48453002413", value:210},
{name:"48453001833", value:205},
{name:"48453001752", value:198},
{name:"48453001705", value:186},
{name:"48453002419", value:173},
{name:"48453002424", value:172},
{name:"48453001848", value:142},
{name:"48453002412", value:141},
{name:"48453001834", value:132},
{name:"48453001748", value:124},
{name:"48453002426", value:123},
{name:"48453002113", value:115},
{name:"48453001839", value:114},
{name:"48453001747", value:110},
{name:"48453002208", value:102},
{name:"48453001706", value:100},
{name:"48453001722", value:100},
{name:"48453001847", value:99},
{name:"48453001915", value:92},
{name:"48453002202", value:91},
{name:"48453002310", value:77},
{name:"48453002423", value:72},
{name:"48453001719", value:71},
{name:"48453001714", value:69},
{name:"48453001829", value:69},
{name:"48453001740", value:67},
{name:"48491020318", value:64},
{name:"48453002435", value:62},
{name:"48453001917", value:60},
{name:"48453002201", value:60},
{name:"48453001749", value:58},
{name:"48453001914", value:58},
{name:"48453002430", value:58},
{name:"48453002500", value:55},
{name:"48491020406", value:52},
{name:"48453001729", value:49},
{name:"48453001785", value:49},
{name:"48491020311", value:48},
{name:"48453001757", value:47},
{name:"48453001840", value:46},
{name:"48453002429", value:45},
{name:"48453001738", value:40},
{name:"48453001828", value:39},
{name:"48453001856", value:38},
{name:"48453001841", value:36},
{name:"48453001777", value:35},
{name:"48453001746", value:35},
{name:"48453001835", value:34},
{name:"48453001918", value:33},
{name:"48453001832", value:28},
{name:"48491020410", value:28},
{name:"48453002407", value:27},
{name:"48453980000", value:27},
{name:"48491020408", value:26},
{name:"48453001913", value:26},
{name:"48453001769", value:25},
{name:"48453001716", value:25},
{name:"48453001912", value:24},
{name:"48453001824", value:24},
{name:"48453001855", value:22},
{name:"48453001908", value:22},
{name:"48453001737", value:22},
{name:"48453001851", value:21},
{name:"48453001857", value:21},
{name:"48453001786", value:21},
{name:"48491020320", value:21},
{name:"48453001755", value:21},
{name:"48453001760", value:21},
{name:"48453002432", value:20},
{name:"48453001863", value:19},
{name:"48453001846", value:19},
{name:"48453001745", value:18},
{name:"48453001761", value:18},
{name:"48453002433", value:17},
{name:"48453002211", value:17},
{name:"48453002425", value:17},
{name:"48453001776", value:16},
{name:"48453002428", value:16},
{name:"48453001842", value:15},
{name:"48491020405", value:15},
{name:"48491020411", value:14},
{name:"48453002207", value:13},
{name:"48453001862", value:13},
{name:"48491020114", value:12},
{name:"48453001782", value:12},
{name:"48453001774", value:11},
{name:"48453001858", value:11},
{name:"48453001772", value:10},
{name:"48453001916", value:9},
{name:"48491020322", value:9},
{name:"48453001741", value:9},
{name:"48491020409", value:9},
{name:"48453001765", value:9},
{name:"48453002212", value:9},
{name:"48491020510", value:8},
{name:"48021950300", value:8},
{name:"48491020506", value:8},
{name:"48491020504", value:8},
{name:"48021950802", value:8},
{name:"48453001756", value:7},
{name:"48453001864", value:7},
{name:"48491020316", value:7},
{name:"48209010902", value:6},
{name:"48491020404", value:6},
{name:"48491020301", value:6},
{name:"48491020508", value:4},
{name:"48491020328", value:4},
{name:"48209010901", value:4},
{name:"48453001860", value:4},
{name:"48453001854", value:4},
{name:"48453002210", value:4},
{name:"48453001770", value:4},
{name:"48491020703", value:4},
{name:"48491020112", value:4},
{name:"48453002319", value:3},
{name:"48491021505", value:3},
{name:"48453002436", value:3},
{name:"48453001779", value:3},
{name:"48453001781", value:3},
{name:"48453001861", value:3},
{name:"48491021507", value:2},
{name:"48453001783", value:2},
{name:"48491020806", value:2},
{name:"48491020403", value:2},
{name:"48209010908", value:2},
{name:"48209010304", value:2},
{name:"48453002209", value:2},
{name:"48209010907", value:2},
{name:"48453001853", value:2},
{name:"48055960101", value:2},
{name:"48453001768", value:1},
{name:"48021950801", value:1},
{name:"48453001742", value:1},
{name:"48209010906", value:1},
{name:"48209010808", value:1},
{name:"48209010809", value:1},
{name:"48209010905", value:1},
{name:"48209010702", value:1},
{name:"48491020706", value:1},
{name:"48491021403", value:1},
{name:"48491021602", value:1},
{name:"48491020312", value:1},
{name:"48491020203", value:1},
{name:"48453001733", value:1},
{name:"48453001766", value:1},
{name:"48491020805", value:1},
{name:"48021950502", value:1},
{name:"48453002434", value:1},
{name:"48491020509", value:1},
{name:"48021950100", value:1},
{name:"48491020310", value:1},
{name:"48491020327", value:1},
{name:"48491020323", value:1},
{name:"48453001764", value:1},
{name:"48453001775", value:1}]
            
            
            
var dataGeo = [{name:"48453000101", value:15000},
{name:"48453000203", value:0},
{name:"48453000204", value:0},
{name:"48453000205", value:15000},
{name:"48453000206", value:20000},
{name:"48453000302", value:0},
{name:"48453000304", value:20000},
{name:"48453000305", value:20000},
{name:"48453000306", value:20000},
{name:"48453000307", value:0},
{name:"48453000401", value:0},
{name:"48453000402", value:10000},
{name:"48453000500", value:0},
{name:"48453000601", value:0},
{name:"48453000603", value:0},
{name:"48453000604", value:0},
{name:"48453000700", value:0},
{name:"48453000801", value:20000},
{name:"48453000802", value:20000},
{name:"48453000803", value:10000},
{name:"48453000804", value:10000},
{name:"48453000901", value:10000},
{name:"48453000902", value:10000},
{name:"48453001000", value:10000},
{name:"48453001100", value:10000},
{name:"48453001200", value:10000},
{name:"48453001303", value:10000},
{name:"48453001304", value:10000},
{name:"48453001305", value:10000},
{name:"48453001307", value:20000},
{name:"48453001308", value:20000},
{name:"48453001401", value:10000},
{name:"48453001402", value:10000},
{name:"48453001403", value:10000},
{name:"48453001501", value:5000},
{name:"48453001503", value:15000},
{name:"48453001504", value:5000},
{name:"48453001505", value:5000},
{name:"48453001602", value:20000},
{name:"48453001603", value:15000},
{name:"48453001604", value:5000},
{name:"48453001605", value:10000},
{name:"48453001712", value:15000},
{name:"48453001817", value:5000},
{name:"48453001818", value:5000},
{name:"48453001821", value:5000},
{name:"48453001849", value:5000},
{name:"48453001850", value:5000},
{name:"48453001901", value:10000},
{name:"48453001910", value:10000},
{name:"48453001911", value:10000},
{name:"48453002003", value:15000},
{name:"48453002004", value:20000},
{name:"48453002005", value:20000},
{name:"48453002105", value:20000},
{name:"48453002109", value:20000},
{name:"48453002111", value:20000},
{name:"48453002304", value:10000},
{name:"48453002307", value:20000},
{name:"48453002308", value:20000},
{name:"48453002312", value:15000},
{name:"48453002313", value:20000},
{name:"48453002314", value:20000},
{name:"48453002315", value:20000},
{name:"48453002316", value:20000},
{name:"48453002317", value:20000},
{name:"48453002318", value:20000},
{name:"48453002402", value:15000},
{name:"48453002403", value:20000},
{name:"48453002411", value:20000}]

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
                visualMap: false
            });
        }
    }
    return res;
};


var convertlineData = function(data) {
		var res = [];
		for(var i = 0; i < data.length; i++) {
			var dataItem = data[i];
			var fromCoord = chinaGeoCoordMap[dataItem[0].name];
			var toCoord = [116.4551,40.2539];
			if(fromCoord && toCoord) {
				res.push([{
					coord: fromCoord,
					value: dataItem[0].value
				}, {
					coord: toCoord,
				}]);
			}
		}
		return res;
	};
	
	
$.get(uploadedDataURL, function(geoJson) {
    echarts.registerMap('Austin', geoJson);
    myChart.setOption(option = {
        backgroundColor: '#404a59',
        title: {
            text: 'Austin micromobility and traffic',
            subtext: 'Muyang Lu',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item'
        },
        geo: {
            map: 'Austin',
            data: [{
                name: '48453001766',
                value: 4822023
            }],
            label: {
                normal: {
                    show: false,
                    textStyle: {
                        color: '#aaa'
                    }
                },
                emphasis: {
                    show: true,
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#111'
                },
                emphasis: {
                    areaColor: '#2a939d'
                }
            }
        },
        visualMap: {
            left: 'right',
            min: 0,
            max: 20000,
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            },
            text: ['High', 'Low'], // 文本，默认为数值文本
            calculable: true
        },

        series: [{
            name: 'Scooter Start',
            type: 'map',
            map: 'Austin',
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#031525',
                    borderColor: '#3B5077',
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            },
            animation: true,
            data: dataGeo
        }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            visualMap: false,
            symbolSize: function(val) {
                return val[2] / 2000;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'yellow',
                    shadowBlur: 10,
                    shadowColor: 'yellow'
                }
            },
            zlevel: 5
        }
			]
    });
});