var geoCoordMap = {
    邢台: [115.190705298948, 37.097571778221],
    莆田: [118.719325055217, 25.364840693011],
    贺州: [111.224238192037, 24.4758790957431],
    重庆: [106.621112543767, 29.5433217136053],
    晋城: [113.29149309479, 35.7227020769905],
    郴州: [112.613498069015, 25.8646957090677],
    韶关: [113.542430757412, 24.8146987586892],
    曲靖: [103.837410949559, 25.464927371708],
    绍兴: [120.36665869583, 29.9021121144783],
    福州: [119.316601573912, 25.4689526375454],
    濮阳: [115.148113503667, 35.5889099392535],
    百色: [106.530713570915, 23.9241055883437],
    安顺: [106.469665986538, 26.3551747436855],
    聊城: [115.958257685784, 36.4411518011218],
    襄阳: [112.294559629828, 31.666834004967],
    锡林郭勒: [116.100262341322, 44.0324325657985],
    河源: [114.82031857389, 23.8937803402547],
    吉首: [109.742300222279, 28.2913247603613],
    渭南: [109.541810839352, 34.5390649602091],
    安阳: [113.842536805683, 36.0308438220802],
    毕节: [104.648420651134, 27.1320142852824],
    佛山: [113.12256087402, 22.9440488382988],
    桂林: [110.335006242418, 25.0687668752717],
    丽水: [119.451879216259, 28.4328505424221],
    中山: [113.435499881292, 22.2607264749926],
    嘉兴: [120.372110096643, 30.4312328462959],
    梅州: [116.260140446987, 23.9024103650109],
    漳州: [117.738910593298, 24.4731420111455],
    厦门: [118.114587893498, 24.5856030126956],
    张掖: [100.461939865806, 38.9353579770563],
    衡水: [115.727803659641, 38.2210508812296],
    河池: [107.392885096528, 24.5271832163125],
    保定: [114.668381083927, 38.6767879089043],
    晋中: [112.766108475972, 37.6715494165975],
    永州: [111.984894527357, 25.667822032434],
    昆明: [103.382908705862, 24.7326785576722],
    新乡: [113.81471992939, 35.2330487071389],
    南宁: [108.372339211756, 22.7600824536268],
    定安: [110.30410416698, 19.4677141572558],
    淄博: [117.921056114664, 36.4525101831287],
    咸宁: [113.814104889625, 29.725144094737],
    阜新: [121.715488363738, 42.091145349405],
    东莞: [113.667961336097, 23.0973683558362],
    兰州: [103.873771249436, 36.0303173629236],
    郑州: [113.971278338352, 34.7014596692247],
    澄迈: [110.012378231631, 19.7385216491689],
    吕梁: [111.165170486324, 37.5438628213859],
    平顶山: [113.300125506289, 33.7450388078203],
    泉州: [118.380927891056, 25.0635911725635],
    崇左: [107.438789624522, 22.4623153314731],
    太原: [112.525867055975, 37.8607988235562],
    上饶: [118.015749906013, 28.4687215327119],
    武威: [102.643447023694, 37.9200056114122],
};

var CData = [
    [{ name: '安顺' }, { name: '安顺', value: 26 }],
    [{ name: '安顺' }, { name: '吕梁', value: 26 }],
];

var S2Data = [
    [{ name: '晋城' }, { name: '晋城', value: 47 }],
    [{ name: '晋城' }, { name: '太原', value: 47 }],
];

var S5Data = [
    [{ name: '晋城' }, { name: '晋城', value: 9 }],
    [{ name: '晋城' }, { name: '晋中', value: 9 }],
    [{ name: '百色' }, { name: '百色', value: 15 }],
    [{ name: '百色' }, { name: '南宁', value: 15 }],
    [{ name: '河源' }, { name: '河源', value: 15 }],
    [{ name: '河源' }, { name: '东莞', value: 15 }],
    [{ name: '漳州' }, { name: '漳州', value: 38 }],
    [{ name: '漳州' }, { name: '泉州', value: 38 }],
    [{ name: '百色' }, { name: '百色', value: 40 }],
    [{ name: '百色' }, { name: '崇左', value: 40 }],
    [{ name: '张掖' }, { name: '张掖', value: 165 }],
    [{ name: '张掖' }, { name: '武威', value: 165 }],
];

var S8Data = [
    [{ name: '邢台' }, { name: '邢台', value: 5 }],
    [{ name: '邢台' }, { name: '衡水', value: 5 }],
    [{ name: '莆田' }, { name: '莆田', value: 5 }],
    [{ name: '莆田' }, { name: '漳州', value: 5 }],
    [{ name: '贺州' }, { name: '贺州', value: 8 }],
    [{ name: '贺州' }, { name: '河池', value: 8 }],
    [{ name: '邢台' }, { name: '邢台', value: 8 }],
    [{ name: '邢台' }, { name: '保定', value: 8 }],
    [{ name: '重庆' }, { name: '重庆', value: 8 }],
    [{ name: '重庆' }, { name: '重庆', value: 8 }],
    [{ name: '郴州' }, { name: '郴州', value: 10 }],
    [{ name: '郴州' }, { name: '永州', value: 10 }],
    [{ name: '韶关' }, { name: '韶关', value: 10 }],
    [{ name: '韶关' }, { name: '漳州', value: 10 }],
    [{ name: '曲靖' }, { name: '曲靖', value: 10 }],
    [{ name: '曲靖' }, { name: '昆明', value: 10 }],
    [{ name: '绍兴' }, { name: '绍兴', value: 10 }],
    [{ name: '绍兴' }, { name: '绍兴', value: 10 }],
    [{ name: '福州' }, { name: '福州', value: 10 }],
    [{ name: '福州' }, { name: '漳州', value: 10 }],
    [{ name: '濮阳' }, { name: '濮阳', value: 15 }],
    [{ name: '濮阳' }, { name: '新乡', value: 15 }],
    [{ name: '晋城' }, { name: '晋城', value: 15 }],
    [{ name: '晋城' }, { name: '晋城', value: 15 }],
    [{ name: '安顺' }, { name: '安顺', value: 15 }],
    [{ name: '安顺' }, { name: '定安', value: 15 }],
    [{ name: '聊城' }, { name: '聊城', value: 15 }],
    [{ name: '聊城' }, { name: '淄博', value: 15 }],
    [{ name: '襄阳' }, { name: '襄阳', value: 15 }],
    [{ name: '襄阳' }, { name: '咸宁', value: 15 }],
    [{ name: '锡林郭勒' }, { name: '锡林郭勒', value: 15 }],
    [{ name: '锡林郭勒' }, { name: '阜新', value: 15 }],
    [{ name: '韶关' }, { name: '韶关', value: 18 }],
    [{ name: '韶关' }, { name: '韶关', value: 18 }],
    [{ name: '吉首' }, { name: '吉首', value: 20 }],
    [{ name: '吉首' }, { name: '毕节', value: 20 }],
    [{ name: '渭南' }, { name: '渭南', value: 21 }],
    [{ name: '渭南' }, { name: '兰州', value: 21 }],
    [{ name: '安阳' }, { name: '安阳', value: 23 }],
    [{ name: '安阳' }, { name: '新乡', value: 23 }],
    [{ name: '毕节' }, { name: '毕节', value: 24 }],
    [{ name: '毕节' }, { name: '郑州', value: 24 }],
    [{ name: '佛山' }, { name: '佛山', value: 25 }],
    [{ name: '佛山' }, { name: '佛山', value: 25 }],
    [{ name: '桂林' }, { name: '桂林', value: 25 }],
    [{ name: '桂林' }, { name: '南宁', value: 25 }],
    [{ name: '丽水' }, { name: '丽水', value: 25 }],
    [{ name: '丽水' }, { name: '丽水', value: 25 }],
    [{ name: '中山' }, { name: '中山', value: 25 }],
    [{ name: '中山' }, { name: '中山', value: 25 }],
    [{ name: '安顺' }, { name: '安顺', value: 25 }],
    [{ name: '安顺' }, { name: '澄迈', value: 25 }],
    [{ name: '嘉兴' }, { name: '嘉兴', value: 30 }],
    [{ name: '嘉兴' }, { name: '嘉兴', value: 30 }],
    [{ name: '梅州' }, { name: '梅州', value: 30 }],
    [{ name: '梅州' }, { name: '漳州', value: 30 }],
    [{ name: '重庆' }, { name: '重庆', value: 33 }],
    [{ name: '重庆' }, { name: '重庆', value: 33 }],
    [{ name: '襄阳' }, { name: '襄阳', value: 33 }],
    [{ name: '襄阳' }, { name: '平顶山', value: 33 }],
    [{ name: '丽水' }, { name: '丽水', value: 35 }],
    [{ name: '丽水' }, { name: '丽水', value: 35 }],
    [{ name: '重庆' }, { name: '重庆', value: 40 }],
    [{ name: '重庆' }, { name: '重庆', value: 40 }],
    [{ name: '聊城' }, { name: '聊城', value: 55 }],
    [{ name: '聊城' }, { name: '上饶', value: 55 }],
    [{ name: '厦门' }, { name: '厦门', value: 62 }],
    [{ name: '厦门' }, { name: '漳州', value: 62 }],
];

var X1Data = [];

var planePath =
    'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push([
                {
                    coord: fromCoord,
                },
                {
                    coord: toCoord,
                },
            ]);
        }
    }
    return res;
};

var color = ['#FF8888', ' #ffa022', '#a6c84c', '#3ed4ff', '	#9400D3'];
var series = [];
[
    ['C', CData],
    ['S2', S2Data],
    ['S5', S5Data],
    ['S8', S8Data],
    ['X1', X1Data],
].forEach(function (item, i) {
    series.push(
        {
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3,
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2,
                },
            },

            data: convertData(item[1]),
        },
        {
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 15,
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2,
                },
            },

            data: convertData(item[1]),
        },
        {
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 15,
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2,
                },
            },

            data: convertData(item[1]),
        },
        {
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 15,
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2,
                },
            },

            data: convertData(item[1]),
        },
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke',
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                },
            },
            symbolSize: function (val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: {
                    color: color[i],
                },
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                };
            }),
        }
    );
});

var option = {
    backgroundColor: '#080a20',
    title: {
        text: '',
        left: 'center',
        textStyle: {
            color: '#fff',
        },
    },
    tooltip: {
        trigger: 'item',
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: [],
        textStyle: {
            color: '#fff',
        },
        selectedMode: 'single',
    },
    geo: {
        map: 'china',
        zoom: 1.2,
        scaleLimit: {
            //控制滚轮缩放大小
            max: 8,
            min: 1,
        },
        label: {
            emphasis: {
                show: false,
            },
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#132937',
                borderColor: '#0692a4',
            },
            emphasis: {
                areaColor: '#0b1c2d',
            },
        },
    },
    series: series,
};
