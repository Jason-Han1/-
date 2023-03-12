var mapData=[
    //东道主
    ['Russia', '俄罗斯', '#d6d266'],
    //欧洲区
    ['Germany', '德国', '#afb4db'],
    ['France', '法国', '#b7ba6b'],
    ['Spain', '西班牙', '#905a3d'],
    ['Portugal', '葡萄牙', '#f05b72'],
    ['Belgium', '比利时', '#f15b6c'],
    ['United Kingdom', '英格兰', '#5c7a29'],
    ['Iceland', '冰岛', '#b2d235'],
    ['Croatia', '克罗地亚', '#deab8a'],
    ['Switzerland', '瑞士', '#f05b72'],
    ['Sweden', '瑞典', '#fab27b'],
    ['Denmark', '丹麦', '#d71345'],
    ['Serbia', '塞尔维亚', '#694d9f'],
    ['Poland', '波兰', '#b3424a'],
    //亚洲区
    ['Korea', '韩国', '#f8aba6'],
    ['Japan', '日本', '#ca8687'],
    ['Iran', '伊朗', '#b2d235'],
    ['Saudi Arabia', '沙特阿拉伯', '#5c7a29'],
    ['Australia', '澳大利亚', '#bed742'],
    //南美区
    ['Brazil', '巴西', '#ffd400'],
    ['Argentina', '阿根廷', '#ffce7b'],
    ['Uruguay', '乌拉圭', '#df9464'],
    ['Colombia', '哥伦比亚', '#dea32c'],
    ['Peru', '秘鲁', '#aa2116'],
    //非洲区
    ['Egypt', '埃及', '#840228'],
    ['Tunisia', '突尼斯', '#ed1941'],
    ['Nigeria', '尼日利亚', '#007947'],
    ['Morocco', '摩洛哥', '#73b9a2'],
    ['Senegal', '塞内加尔', '#fcaf17'],
    //中北美加勒比海地区
    ['Costa Rica', '哥斯达黎加', '#f3704b'],
    ['Mexico', '墨西哥', '#8552a1'],
    ['Panama', '巴拿马', '#ffce7b']
];
var countrys = function(country, color, name) {
    return {
        name: country,
        value: name,
        itemStyle: {
            borderColor: '#918597',
            areaColor: color
        },

        label: {
            //show: true,
            formatter: function(params) {
                return params.data.value;
            },
            color: '#f5f5f5',
            fontSize: 10,
        },

        emphasis: {
            itemStyle: {
                areaColor: '#2585a6'
            },
            label: {
                show: true,
                color: '#fff',
            }
        },

    }

}
var countryData = [];
for (var i = 0; i < mapData.length; i++) {
    countryData.push(countrys(mapData[i][0], mapData[i][2], mapData[i][1]));
}

option = {
    backgroundColor: '#898989',
    title: {
        text: '2018世界杯参赛国家',
        textStyle: {
            color: '#fff'
        }
    },
    roam: true,

    tooltip: {
        show: true,
        formatter: function(params) {
            return params.data.value;
        },
        borderWidth: 1,
        borderColor: '#fff',
        alwaysShowContent: true,
        //triggerOn: 'none',
    },

    series: [{
        type: 'map',
        mapType: 'world',
        itemStyle: {
            areaColor: '#102b6a',
        },
        emphasis: {
            itemStyle: {
                areaColor: '#E8D3E3'
            }
        },
        data: countryData

    }]
};
var n = 0;
setInterval(function() {
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        name: mapData[n][0],

    })
    myChart.dispatchAction({
        type: 'mapToggleSelect',
        seriesIndex: 0,
        name: mapData[n][0],

    })
    n++;
    if (n == mapData.length) {
        n = 0;
    }
}, 1500);