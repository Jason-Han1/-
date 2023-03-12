var provinceCoordMapURL = "/asset/get/s/data-1560418516456-DF5UUs75L.json";
var cityCoordMapUrl = "/asset/get/s/data-1560416673122-dUE1snuVj.json";
var flag = 'image://data:image/png;base64,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'

function convertData (data, geoCoordMap) {
    data = data.filter(name => geoCoordMap[name]).map(name => ({name, value: 1}));
    var res = data.map(item => {
        return {name: item.name, value: geoCoordMap[item.name].concat(item.value)};
    });
    return res;
}

var data = `青岛
济南
上海
淄博
威海
潍坊
烟台
济宁
德州
滨州
临沂
日照
聊城
莱芜
南宁
长沙
海口
桂林
茂名
玉林
百色
河池
柳州
防城港
深圳
贵港
佛山
衡阳
西安
昆明
遵义
玉溪
红河哈尼族彝族自治州
普洱
乌鲁木齐
吴忠
六盘水
安顺
福州
淮安
宁波
无锡
泉州
厦门
莆田
合肥
镇江
阜阳
杭州
南通
武汉
太原
鄂尔多斯
呼和浩特
黄冈
阳泉
邯郸
石家庄
北京
保定
天津
邢台
自贡
成都
南充
遂宁
宜宾
巴中
绵阳
阿坝
甘孜
雅安
德阳
广元
资阳
眉山
达川
乐山
泸州
内江
凉山
广安
攀枝花
大庆
铁岭
营口
北票
大连
齐齐哈尔
哈尔滨
长春
锦州
朝阳
盘锦
绥化
恩施
丹东
郑州
徐州
西宁
三亚
大庆
鞍山
葫芦岛
抚顺
琼海
连云港
文昌
重庆
南京
沈阳
郴州
大同`
data = data.split(/\r?\n/).filter(i => i)


myChart.showLoading()

Promise.all([$.getJSON(provinceCoordMapURL), $.getJSON(cityCoordMapUrl)])
.then(([provinceCoordMap, cityCoordMap]) => {
    myChart.hideLoading();

    data = convertData(data, cityCoordMap)

    option = {
        title: {
            text: '哈哈，欧耶',
            x:'center'
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x:'right',
            data:['活跃']
        },
        geo: {
            map: 'china',
            label: {
                show: true,
                color: '#C66A1E',
                fontSize: 20,
            },
        },
        series: [
            {
                name: '活跃',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: data,
                symbol: flag,
                label: {
                    formatter: '\n{b}',
                    show: true,
                    color: '#333',
                    fontSize: 13,
                    fontWeight: 'lighter'
                },
                symbolSize: [40, 60]
            }
        ]
    };
    
    myChart.setOption(option);
});

