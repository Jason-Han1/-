function getDayColor(data) {
    if (data <= 50) {
        return '#34e1ab'
    }
    if (data <= 55) {
        return '#f8f430'
    }
    if (data <= 60) {
        return '#f89e30'
    }
    if (data <= 65) {
        return '#fa4b53'
    }
    if (data > 65) {
        return '#c43139'
    }
}

function getNightColor(data) {
    if (data <= 40) {
        return '#34e1ab'
    }
    if (data <= 45) {
        return '#f8f430'
    }
    if (data <= 50) {
        return '#f89e30'
    }
    if (data <= 55) {
        return '#fa4b53'
    }
    if (data > 55) {
        return '#c43139'
    }
}

var data = [{
        name: "万州区",
        id: "500101",
        value: "52.4"
    },
    {
        name: "涪陵区",
        id: "500102",
        value: "54.4"
    },
    {
        name: "渝中区",
        id: "500103",
        value: "53.3"
    },
    {
        name: "大渡口区",
        id: "500104",
        value: "53.3"
    },
    {
        name: "江北区",
        id: "500105",
        value: "53.1"
    },
    {
        name: "沙坪坝区",
        id: "500106",
        value: "51.7"
    },
    {
        name: "九龙坡区",
        id: "500107",
        value: "52.9"
    },
    {
        name: "南岸区",
        id: "500108",
        value: "53.2"
    },
    {
        name: "北碚区",
        id: "500109",
        value: "51.2"
    },
    {
        name: "万盛经开区",
        id: "500110",
        value: "52.8"
    },
    {
        name: "双桥经开区",
        id: "500111",
        value: "49.7"
    },
    {
        name: "渝北区",
        id: "500112",
        value: "53"
    },
    {
        name: "巴南区",
        id: "500113",
        value: "53.3"
    },
    {
        name: "黔江区",
        id: "500114",
        value: "54.5"
    },
    {
        name: "长寿区",
        id: "500115",
        value: "52.3"
    },
    {
        name: "江津区",
        id: "500116",
        value: "52.7"
    },
    {
        name: "合川区",
        id: "500117",
        value: "53.5"
    },
    {
        name: "永川区",
        id: "500118",
        value: "55"
    },
    {
        name: "南川区",
        id: "500119",
        value: "52.7"
    },
    {
        name: "两江新区",
        id: "500122",
        value: "52"
    },
    {
        name: "綦江区",
        id: "500222",
        value: "56.1"
    },
    {
        name: "潼南区",
        id: "500223",
        value: "51.2"
    },
    {
        name: "铜梁区",
        id: "500224",
        value: "55.5"
    },
    {
        name: "大足区",
        id: "500225",
        value: "53.2"
    },
    {
        name: "荣昌区",
        id: "500226",
        value: "52.8"
    },
    {
        name: "璧山区",
        id: "500227",
        value: "52.9"
    },
    {
        name: "梁平区",
        id: "500228",
        value: "53.7"
    },
    {
        name: "城口县",
        id: "500229",
        value: "52.5"
    },
    {
        name: "丰都县",
        id: "500230",
        value: "55.1"
    },
    {
        name: "垫江县",
        id: "500231",
        value: "54.2"
    },
    {
        name: "武隆区",
        id: "500232",
        value: "53.2"
    },
    {
        name: "忠县",
        id: "500233",
        value: "53.3"
    },
    {
        name: "开州区",
        id: "500234",
        value: "54.5"
    },
    {
        name: "云阳县",
        id: "500235",
        value: "52.3"
    },
    {
        name: "奉节县",
        id: "500236",
        value: "54.9"
    },
    {
        name: "巫山县",
        id: "500237",
        value: "54.2"
    },
    {
        name: "巫溪县",
        id: "500238",
        value: "52.9"
    },
    {
        name: "石柱县",
        id: "500240",
        value: "52.8"
    },
    {
        name: "秀山县",
        id: "500241",
        value: "51.2"
    },
    {
        name: "酉阳县",
        id: "500242",
        value: "53.6"
    },
    {
        name: "彭水县",
        id: "500243",
        value: "53.6"
    }
]


var xAxisData = [];
var seriesData = [];
data.forEach((item) => {
    xAxisData.push(item.name);
    item.itemStyle = {
        color: getDayColor(item.value)
    }
    seriesData.push(item);
})





option = {
    "tooltip": {
        "trigger": "axis"
    },
    "xAxis": [{
        "name": "月份",
        "type": "category",
        "axisTick": {
            "alignWithLabel": true
        },
        "data": xAxisData
    }],
    "grid": {
        "borderWidth": 0,
        "top": 110,
        "bottom": 95
    },
    "dataZoom": [{
        "show": true,
        "height": 30,
        "xAxisIndex": [
            0
        ],
        bottom: 30,
        "start": 0,
        "end": 20,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
            color: "#d3dee5",

        },
        textStyle: {},
        borderColor: "#90979c"


    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 35
    }],
    "yAxis": [{
        "type": "value"
    }],
    "series": [{
        data: seriesData,
        type: 'bar',
        barWidth: 20
    }]
}