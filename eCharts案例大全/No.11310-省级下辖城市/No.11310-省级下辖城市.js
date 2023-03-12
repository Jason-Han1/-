var uploadedDataURL = "/asset/get/s/data-1559020853290-YCSshQA9J.json";


function calcSymbol(val, min, max, limitMin, limitMax) {
    let nomalVal = (val - min) / (max - min) * (limitMax - limitMin) + limitMin;
    return nomalVal;
}

$.getJSON(uploadedDataURL, function(geoJson) {
    console.log('res', geoJson)
    echarts.registerMap('hefei', geoJson);

    option = {
        "title": {
            "show": false,
            "text": "全国门店布局",
            "left": "24px",
            "top": "24px",
            "textStyle": {
                "fontWeight": "normal",
                "fontSize": 20,
                "color": "#444",
            }
        },
        "tooltip": {
            "trigger": "item",
            "backgroundColor": "#fff",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "textStyle": {
                "color": "#333333"
            },
            formatter: function(params, ticket, callback) {
                if (!params.data || !params.data.cityId) {
                    return
                }
                let personNum = null,
                    personUnit = '',
                    saleNum = null,
                    saleUnit = '',
                    htmls = '';
                if (params.data.person > 100000) {
                    personNum = (params.data.person / 10000).toFixed(2);
                    personUnit = '万人次';
                } else {
                    personNum = params.data.person;
                    personUnit = '人次';
                }
                if (params.data.sale > 100000) {
                    saleNum = (params.data.sale / 10000).toFixed(2);
                    saleUnit = '万元';
                } else {
                    saleNum = params.data.sale;
                    saleUnit = '元';
                }
                htmls += '<div style="font-size:16px;height:31px;color:#0068FF;border-radius:4px;line-height:31px;padding-left:15px;padding-right:15px">' + params.data.name + '</div>' +
                    '<div>' +
                    '<p style="font-size:14px;padding:4px 15px;color:"#444444"">' + '开业时间: ' + params.data.openDate.split(' ')[0] + '</p>' +
                    '<p style="font-size:14px;padding:4px 15px;color:"#444444"">' + '今日客流: ' + personNum + personUnit + '</p>' +
                    '<p style="font-size:14px;padding:4px 15px;color:"#444444"">' + '今日销售额: ' + saleNum + saleUnit + '</p>' +
                    '</div>'
                return htmls;
            },
            "extraCssText": "box-shadow: 0px 0px 10px -4px rgba(3, 3, 3, .4)"
        },
        "geo": {
            "map": "hefei",
            "scaleLimit": {
                "min": 1
            },
            "label": {
                "emphasis": {
                    "show": true,
                    "color": '#fff'
                },
                "normal": {
                    "show": true,
                    "color": '#fff'
                }
            },
            "itemStyle": {
                "normal": {
                    "areaColor": "#2274e2",
                    "borderColor": "#87ebff"
                },
                "emphasis": {
                    "areaColor": "#2274e2",
                    "show": false
                }
            },
            "roam": true
        },
        "series": [{
                "type": "scatter",
                "name": "city",
                "coordinateSystem": "geo",
                "label": {
                    "normal": {
                        "show": false,
                        "position": "right",
                        "formatter": "{b}"
                    },
                    "emphasis": {
                        "show": false
                    }
                },
                "itemStyle": {
                    "normal": {
                        "show": true,
                        "color": "#ffef34"
                    }
                },
                "symbolSize": function(val, params) {
                    if (params.data.person && typeof(params.data.person) === 'number') {
                        return calcSymbol(params.data.person, 203, 400, 10, 50);
                    } else {
                        return 0
                    }
                },
                "data": [{
                        "id": 2,
                        "name": "北京（有数据）",
                        "cityId": 2,
                        "cityName": "合肥",
                        "value": [
                            117.4007434375,
                            31.7372341132813
                        ],
                        "sale": "--",
                        "person": 272,
                        "openDate": "2018-10-01 00:00:00"
                    },
                    {
                        "id": 455,
                        "name": "许顺强门店",
                        "cityId": 2,
                        "cityName": "合肥",
                        "value": [
                            117.371783476563,
                            32.380844953125
                        ],
                        "sale": "--",
                        "person": "--",
                        "openDate": "2019-05-27 00:00:00"
                    },
                    {
                        "id": 436,
                        "name": "上海02店",
                        "cityId": 75,
                        "cityName": "合肥",
                        "value": [
                            117.283042,
                            31.86119
                        ],
                        "sale": "--",
                        "person": 395,
                        "openDate": "2019-05-01 00:00:00"
                    },
                    {
                        "id": 437,
                        "name": "广州01店",
                        "cityId": 199,
                        "cityName": "广州市",
                        "value": [
                            113.297874,
                            23.138527
                        ],
                        "sale": "--",
                        "person": 302,
                        "openDate": "2019-05-01 00:00:00"
                    },
                    {
                        "id": 54,
                        "name": "北京02店",
                        "cityId": 2,
                        "cityName": "北京",
                        "value": [
                            116.52521,
                            39.938854
                        ],
                        "sale": "--",
                        "person": 376,
                        "openDate": "2018-07-25 00:00:00"
                    },
                    {
                        "id": 438,
                        "name": "广州02店",
                        "cityId": 199,
                        "cityName": "广州市",
                        "value": [
                            113.310524,
                            23.045977
                        ],
                        "sale": "--",
                        "person": 405,
                        "openDate": "2019-04-30 00:00:00"
                    },
                    {
                        "id": 439,
                        "name": "深圳01店",
                        "cityId": 201,
                        "cityName": "深圳市",
                        "value": [
                            114.11054,
                            22.531364
                        ],
                        "sale": "--",
                        "person": 259,
                        "openDate": "2019-05-01 00:00:00"
                    },
                    {
                        "id": 440,
                        "name": "北京03店",
                        "cityId": 2,
                        "cityName": "北京",
                        "value": [
                            116.24781,
                            39.990574
                        ],
                        "sale": "--",
                        "person": 479,
                        "openDate": "2019-04-30 00:00:00"
                    },
                    {
                        "id": 441,
                        "name": "北京04店",
                        "cityId": 2,
                        "cityName": "北京",
                        "value": [
                            116.54677,
                            39.855114
                        ],
                        "sale": "--",
                        "person": 340,
                        "openDate": "2019-05-01 00:00:00"
                    },
                    {
                        "id": 442,
                        "name": "西安01店",
                        "cityId": 294,
                        "cityName": "西安市",
                        "value": [
                            109.00396,
                            34.36634
                        ],
                        "sale": "--",
                        "person": 367,
                        "openDate": "2019-05-07 00:00:00"
                    },
                    {
                        "id": 443,
                        "name": "新疆01店",
                        "cityId": 331,
                        "cityName": "乌鲁木齐市",
                        "value": [
                            87.595695,
                            43.814114
                        ],
                        "sale": "--",
                        "person": 203,
                        "openDate": "2019-05-01 00:00:00"
                    },
                    {
                        "id": 444,
                        "name": "内蒙古01店",
                        "cityId": 27,
                        "cityName": "呼和浩特市",
                        "value": [
                            111.779655,
                            40.82746
                        ],
                        "sale": "--",
                        "person": 500,
                        "openDate": "2019-05-08 00:00:00"
                    },
                    {
                        "id": 29,
                        "name": "上海01店",
                        "cityId": 75,
                        "cityName": "上海",
                        "value": [
                            121.48054,
                            31.239882
                        ],
                        "sale": "--",
                        "person": 353,
                        "openDate": "2018-11-01 00:00:00"
                    },
                    {
                        "id": 445,
                        "name": "广西01店",
                        "cityId": 220,
                        "cityName": "南宁市",
                        "value": [
                            108.35735,
                            22.798088
                        ],
                        "sale": "--",
                        "person": 217,
                        "openDate": "2019-05-01 00:00:00"
                    }
                ]
            },
            {
                "type": "map",
                "map": "hefei",
                "geoIndex": 0,
                "roam": true,
                // "mapType":"map",
                "scaleLimit": {
                    "min": 10
                },
                "label": {
                    "normal": {
                        "show": false
                    },
                    "emphasis": {
                        "show": true,
                        "color": "#fff"
                    }
                },
                "itemStyle": {
                    "normal": {
                        "areaColor": "#2274e2",
                        "borderColor": "#87ebff"
                    }
                },
                "data": [{
                        "name": "广西壮族自治区",
                        "value": 217
                    },
                    {
                        "name": "新疆",
                        "value": 203
                    },
                    {
                        "name": "陕西",
                        "value": 367
                    },
                    {
                        "name": "上海",
                        "value": 748
                    },
                    {
                        "name": "广东",
                        "value": 966
                    },
                    {
                        "name": "内蒙古自治区",
                        "value": 500
                    },
                    {
                        "name": "北京",
                        "value": 1467
                    }
                ]
            }
        ]
    }
    console.log(option)
    myChart.setOption(option, true);
})