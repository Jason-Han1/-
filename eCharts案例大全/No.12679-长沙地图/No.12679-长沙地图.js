const url = "/asset/get/s/data-1544624363051-6ZfHdGzWX.json";

let data = [
    // 自建
    {
        "name": '长沙河西云基地',
        "type": 2,
        "value": [112.881443, 28.213865]
    },
    {
        "name": '长沙IDC汇聚机房',
        "type": 2,
        "value": [113.041796, 28.147744]
    },
    {
        "name": '长沙联通DIA机房',
        "type": 2,
        "value": [112.997307, 28.120618]
    },
    {
        "name": '友谊嘉园2楼综合机房',
        "type": 2,
        "value": [112.998307, 28.130618]
    },
    {
        "name": '荷花园机房',
        "type": 2,
        "value": [113.031831, 28.21035]
    },
    {
        "name": '湖南IDC机房',
        "type": 3,
        "value": [113.046476, 28.222912]
    },
    {
        "name": '长沙麓谷IDC机房',
        "type": 4,
        "value": [112.902418, 28.203998]
    },
    {
        "name": '长沙专线机房',
        "type": 4,
        "value": [113.026503, 28.18822]
    },
    {
        "name": '湖南铁通IDC机房',
        "type": 1,
        "value": [113.011626, 28.198773]
    },
    {
        "name": '湖南移动IDC机房	',
        "type": 1,
        "value": [113.094392, 28.240952]
    },
    {
        "name": '红网机房',
        "type": 3,
        "value": [113.004506, 28.15421]
    },
    {
        "name": '长沙软件园数据中心机房',
        "type": 3,
        "value": [112.89923, 28.220855]
    },
    {
        "name": '荷花园电信综合楼7楼机房',
        "type": 3,
        "value": [113.012503, 28.18822]
    },
    // 租用
    {
        "name": '湖南长沙麓谷IDC数据中心',
        "type": 2,
        "value": [113.002068, 28.271485]
    },
    {
        "name": '长沙市麓谷电信机房',
        "type": 1,
        "value": [113.002068, 28.217085]
    },
    {
        "name": '长沙市麓谷电信机房',
        "type": 1,
        "value": [113.011443, 28.225165]
    },
    {
        "name": '长沙麓谷机房',
        "type": 1,
        "value": [113.010443, 28.235165]
    },
    {
        "name": '长沙麓谷电信机房',
        "type": 1,
        "value": [113.01443, 28.246165]
    },
    {
        "name": '长沙电信',
        "type": 1,
        "value": [113.01443, 28.256165]
    },
    {
        "name": '湖南联通数字阅读基地IDC机房',
        "type": 3,
        "value": [112.98443, 28.223165]
    },
    {
        "name": '麓谷机房',
        "type": 1,
        "value": [112.98043, 28.234165]
    },
    {
        "name": '长沙麓谷电信机房',
        "type": 1,
        "value": [113.02443, 28.230165]
    },
    {
        "name": '麓谷IDC机房',
        "type": 1,
        "value": [112.99443, 28.242165]
    },
    {
        "name": '长沙机房',
        "type": 1,
        "value": [112.97443, 28.215165]
    },
    {
        "name": '长沙麓谷电信机房',
        "type": 1,
        "value": [113.00043, 28.235165]
    },
    {
        "name": '长沙麓谷数据中心',
        "type": 1,
        "value": [113.00143, 28.253165]
    },
    {
        "name": '移动东片区机房',
        "type": 2,
        "value": [112.96043, 28.250165]
    },
    {
        "name": '中国电信麓谷数据中心',
        "type": 2,
        "value": [112.97743, 28.250165]
    },
    {
        "name": '麓谷电信机房',
        "type": 1,
        "value": [112.98043, 28.203165]
    },
    {
        "name": '长沙麓谷机房',
        "type": 1,
        "value": [112.99043, 28.231165]
    },
    {
        "name": '麓谷电信IDC机房',
        "type": 1,
        "value": [113.03043, 28.251165]
    },
    {
        "name": '长沙电信灾备中心',
        "type": 2,
        "value": [112.99043, 28.253165]
    },
    {
        "name": '长沙电信麓谷机房',
        "type": 4,
        "value": [112.99043, 28.213165]
    },
    {
        "name": '深圳招商网络湖南运营中心',
        "type": 4,
        "value": [112.95043, 28.213165]
    },
    {
        "name": '移动东片区机房',
        "type": 4,
        "value": [112.99043, 28.1683165]
    },
    {
        "name": '电信机房',
        "type": 1,
        "value": [112.99943, 28.1783165]
    },
    {
        "name": '赛尔网络中南大学网络中心',
        "type": 4,
        "value": [112.93943, 28.1683165]
    },
    {
        "name": '麓谷电信机房',
        "type": 1,
        "value": [113.03943, 28.2403165]
    },
    {
        "name": '长沙电信麓谷数据中心',
        "type": 1,
        "value": [113.02843, 28.2403165]
    },
    {
        "name": '长沙麓谷机房',
        "type": 4,
        "value": [113.03843, 28.2303165]
    },
    {
        "name": '湖南长沙网通机房',
        "type": 4,
        "value": [112.97843, 28.1503165]
    },
    {
        "name": '电信机房',
        "type": 1,
        "value": [112.97843, 28.1403165]
    },
    {
        "name": '长沙移动机房',
        "type": 2,
        "value": [112.96843, 28.1503165]
    },
    {
        "name": '长沙麓谷电信机房',
        "type": 1,
        "value": [112.97843, 28.1703165]
    },
    {
        "name": '长沙机房',
        "type": 4,
        "value": [113.05843, 28.2103165]
    },
    {
        "name": '长沙联通',
        "type": 3,
        "value": [113.06843, 28.2003165]
    },
    {
        "name": '长沙电信机房',
        "type": 3,
        "value": [113.03843, 28.1703165]
    },
    {
        "name": '湖南联通阅读基地IDC机房',
        "type": 4,
        "value": [113.01843, 28.1603165]
    },
    {
        "name": '长沙电信东塘机房',
        "type": 1,
        "value": [112.95843, 28.1803165]
    }
]

// $('#chart-panel div').width(298)
// $('#chart-panel div').height(422)

const colors = {
    1: '#ccf',
    2: '#0f0',
    3: '#db302f',
    4: '#06f'
}

data = data.map(item => {
    item.itemStyle = {
        normal: {
            color: colors[item.type]
        }
    }
    return item
})
$.getJSON(url, function(json) {
    echarts.registerMap('changsha', json)
    option = {
        backgroundColor: '#030303',
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return params.name;
            }
        },
        geo: {
            map: 'changsha',
            center: [112.982279, 28.2109],
            zoom: 3,
            roam: true,
            layoutSize: '100%',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: 'rgb(19, 91, 153)',
                    borderColor: 'rgb(9, 54, 95)'
                },
                emphasis: {
                    areaColor: 'rgb(10, 105, 187)'
                }
            }
        },
        series: [{
            name: '机房',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: data,
            symbolSize: 8,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        }]
    }

    myChart.setOption(option);
})