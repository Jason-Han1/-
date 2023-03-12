var data = [{
    "country_code": "unknown",
    "value": 49.52,
    "name": "China",
    "num": 1714
}, {
    "country_code": "US",
    "value": 23.26,
    "name": "United States",
    "num": 805
}, {
    "country_code": "AU",
    "value": 2.46,
    "name": "Australia",
    "num": 85
}, {
    "country_code": "PK",
    "value": 2.08,
    "name": "Pakistan",
    "num": 72
}, {
    "country_code": "GB",
    "value": 1.7,
    "name": "United Kingdom",
    "num": 59
}, {
    "country_code": "SG",
    "value": 1.7,
    "name": "Singapore",
    "num": 59
}, {
    "country_code": "MY",
    "value": 1.68,
    "name": "Malaysia",
    "num": 58
}, {
    "country_code": "CA",
    "value": 1.27,
    "name": "Canada",
    "num": 44
}, {
    "country_code": "DE",
    "value": 1.1,
    "name": "Germany",
    "num": 38
}, {
    "country_code": "JP",
    "value": 0.95,
    "name": "Japan",
    "num": 33
}]
var legendData = data.map(v => {
    return v.name
})
var nameMap = {}

option = {
    title: {
        text: '受众分布地图',
        left: 'left',
        top: 'top'
    },
    backgroundColor: "#fff",
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow'
        },
        backgroundColor: '#fff',
        extraCssText: 'box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.2);',
        textStyle: {
            color: "#333",
        },
        formatter: function(params) {
            var value = (params.value);
            value = value ? value + '%' : '_';
            return params.name + ' : ' + value;
        }
    },
    visualMap: {
        min: 0,
        max: 100,
        calculable: true,
        inRange: {
            color: ['#50a3ba', '#eac736', '#d94e5d']
        },
        textStyle: {
            color: '#fff'
        }
    },
    series: {
        type:'map',
        map:'world',
        roam: true,
        data: data
    },
};