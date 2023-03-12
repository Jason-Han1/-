option = {
        title: {
            show: true,
            text: '各地区实时市场交易价格',
            left: '10%',
            textStyle: {
                color: '#000000'
            }
        },
        tooltip: {
            show: true
        },
        visualMap: {
            type: 'continuous',
            orient: 'vertical',
            inverse: false,
            realtime: false,
            calculable: true,
            text: ['高', '低'],
            top: '10%',
            left: '10%',
            itemWidth: '20%',
            itemHeight: '100%',
            inRange: {
                color: ['#4cb0dd', '#2d79ad', '#265da0'],
                symbolSize: [1, 10]
            },
            textStyle: {
                color: '#000000'
            }
        },
        series: [{
            name: '各地区实时市场交易价格',
            type: 'map',
            map: '辽宁',
            zoom: 1.5,
            data: [{
                    "name": "沈阳市",
                    "value": getRandom()
                },
                {
                    "name": "抚顺市",
                    "value": getRandom()
                },
                {
                    "name": "本溪市",
                    "value": getRandom()
                },
                {
                    "name": "铁岭市",
                    "value": getRandom()
                },
                {
                    "name": "鞍山市",
                    "value": getRandom()
                },
                {
                    "name": "大连市",
                    "value": getRandom()
                },
                {
                    "name": "丹东市",
                    "value": getRandom()
                },
                {
                    "name": "锦州市",
                    "value": getRandom()
                },
                {
                    "name": "葫芦岛市",
                    "value": getRandom()
                },
                {
                    "name": "朝阳市",
                    "value": getRandom()
                },
                {
                    "name": "营口市",
                    "value": getRandom()
                },
                {
                    "name": "盘锦市",
                    "value": getRandom()
                },
                {
                    "name": "辽阳市",
                    "value": getRandom()
                },
                {
                    "name": "阜新市",
                    "value": getRandom()
                }
            ],
            label: {
                show: true,
                position: 'inside'
            }
        }]
    }
    
    
    function getRandom() {
        return Math.floor(Math.random() * 1000);
    }