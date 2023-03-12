$('<div class="back">返回</div>').appendTo(
    $('#chart-panel')
);

$('.back').css({
    'position': 'absolute',
    'left': '17px',
    'top': '25px',
    'color': 'rgb(222,222,222)',
    'font-size': '15px',
    'cursor': 'pointer',
    'z-index': '100'
})

$('.back').click(function() {
    renderChina()
})

var neimenggu = "/asset/get/s/data-1636337430226-jP0NQTylZ.json";

var shanxi = "/asset/get/s/data-1636337387463-rURPysXKY.json";

var china = "/asset/get/s/data-1594281065688-80dQTMwuL.json";

var urlMap = {
    '陕西省': {
        name: 'shanxisheng',
        url: shanxi
    },
    '内蒙古自治区': {
        name: 'neimenggu',
        url: neimenggu
    }
}

var data = [
    { province: '陕西省', city: '榆林市', value: 200 },
    { province: '陕西省', city: '延安市', value: 90 },
    { province: '陕西省', city: '铜川市', value: 160 },
    { province: '陕西省', city: '西安市', value: 280 },
    { province: '陕西省', city: '咸阳市', value: 180 },
    { province: '陕西省', city: '汉中市', value: 80 },
    { province: '陕西省', city: '安康市', value: 90 },
    { province: '内蒙古自治区', city: '阿拉善盟' , value: 160 },
    { province: '内蒙古自治区', city: '赤峰市', value: 120}
]

function getProvinceData() {
    // 统计方法count
    const obj = {}
    data.forEach((item) => {
        if (obj[item.province]) {
            obj[item.province] += item.value
        } else {
            obj[item.province] = item.value
        }
    })
    const arr = []
    for(const key in obj) {
        arr.push({
            name: key,
            value: obj[key]
        })
    }
    return arr
}

function renderChina() {
    $.getJSON(china, function(geoJson) {
        echarts.registerMap('china', geoJson)
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {c}'
            },
            series: [{
                type: 'map',
                map: 'china',
                data: getProvinceData()
            }]
        }
        myChart.setOption(option)
        myChart.off('click')
        myChart.on('click', chinaClick)
    })
}

function chinaClick(params) {
    renderProvince(params.name)
}

function renderProvince(name) {
    $.getJSON(urlMap[name].url, function(geoJson) {
        echarts.registerMap(urlMap[name].name, geoJson)
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {c}'
            },
            series: [{
                type: 'map',
                map: urlMap[name].name,
                data: getCityData(name),
                label: {
                    show: true,
                    formatter: '{b}: {c}'
                }
            }]
        }
        myChart.setOption(option)
    })
}

function getCityData(name) {
    const res = data.filter((item) => item.province === name)
    return res.map((item) => ({ name: item.city, value: item.value }))
}

renderChina()