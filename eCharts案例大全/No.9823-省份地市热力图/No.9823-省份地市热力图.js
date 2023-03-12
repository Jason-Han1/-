var data = [
    ["103.823557", "36.058039", 11334],
    ["105.724998", "34.578529", 7883],
    ["102.634697", "37.929996", 5598],
    ["107.638372", "35.734218", 5346],
    ["100.455472", "38.932897", 4346],
    ["98.277304", "39.786529", 2686],
    ["98.510795", "39.744023", 2468],
    ["106.684691", "35.54279", 1202],
    ["103.212006", "35.599446", 1036],
    ["104.173606", "36.54568", 936],
    ["102.187888", "38.514238", 722],
    ["102.911008", "34.986354", 713],
    ["104.626294", "35.579578", 702],
    ["104.929379", "33.388598", 702]
]
let areaData = [];
data.map(item => { //扩大热力图效果
    areaData.push(...new Array(3).fill(item))
})
let mapMax = Math.max(...data.map(item => item[2]))
let mapMin = Math.min(...data.map(item => item[2]))
option = {
    backgroundColor: '#333',
    visualMap: {
        bottom: 100,
        left: 100,
        color: ['#ff4601', '#fffc00', '#87cffa'],
        min: mapMin,
        max: mapMax,
        calculable: true,
        textStyle: {
            color: '#fff',
            fontSize: 12
        }
    },
    geo: {
        map: '甘肃',
        layoutCenter: ['55%', '50%'],
        layoutSize: 650,
        top: 0,
        label: {
            normal: {
                show: true,
                color: '#fff'
            },
            emphasis: {
                color: '#fff'
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#17439a',
                borderColor: '#fff'
            },
            emphasis: {
                areaColor: '#17439a',
                borderColor: '#fff'
            }
        }
    },
    series: [{
        name: 'AQI',
        type: 'heatmap',
        coordinateSystem: 'geo',
        blurSize: 40,
        data: areaData
    }]
}