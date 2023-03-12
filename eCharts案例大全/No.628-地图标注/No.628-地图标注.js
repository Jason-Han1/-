myChart.showLoading();
var uploadedDataURL = "/asset/get/s/data-1593486529294-SRyGZ7brP.json";
const COORDS_LINE = {
    '东城区': [
        [116.43726800000002, 39.87083700000005],
        [117.2, 39.94]
    ],
    '延庆区': [
        [116.1, 40.485325],
        [115.6, 40.8]
    ]

}
let activeAreaName = '';
myChart.on('mouseover', ({
    name
}) => {
    if (activeAreaName !== name) {
        activeAreaName = name;
        handleChangeOption();
    }
})
myChart.on('globalout', () => {
    activeAreaName = '';
    handleChangeOption();
});
let data = [{
    name: '东城区',
    value: 5
}, {
    name: '延庆区',
    value: 0
}];
function handleChangeOption () {
    option = {
        backgroundColor: '#ccc',
        series: [{
                type: 'map',
                zoom: 1.2,
                z: 2,
                mapType: 'beijing',
                label: {
                    show: false
                },
                emphasis: {
                    label: {
                        show: false
                    },
                    itemStyle: {
                        borderColor: '#EBF3F3',
                        borderWidth: 2,
                        areaColor: '#fff'
                    }
                },
                itemStyle: {
                    borderColor: '#ccc',
                    borderWidth: 2,
                    areaColor: '#fff'
                },
                data: data
            },
            {
                type: 'lines',
                z: 3,
                coordinateSystem: 'geo',
                symbol: 'circle',
                symbolSize: [6, 0],
                color: '#17A597',
                opacity: 1,
                label: {
                    show: true,
                    position: 'end',
                    formatter: [
                        `{title|{b}}`,
                        `{value|{c} 例}`
                    ].join('\n'),
                    backgroundColor: '#eee',
                    borderColor: '#17A597',
                    borderWidth: 1,
                    borderRadius: 4,
                    align: 'center',
                    width: 64,
                    rich: {
                        title: {
                            align: 'center',
                            lineHeight: 17,
                            fontSize: 12,
                            color: '#fff',
                            backgroundColor: '#17A597',
                            width: 64,
                            height: 20,
                            borderRadius: [4, 4, 0, 0]
                        },
                        value: {
                            height: 25,
                            width: 64,
                            color: '#17A597',
                            backgroundColor: '#fff',
                            borderRadius: [0, 0, 4, 4]
                        }
                    }
                },
                lineStyle: {
                    type: 'solid',
                    opacity: 1,
                    color: '#17A597',
                    curveness: 0.1
                },
                data: data.map((item) => {
                    let label = {};
                    if (item.name === activeAreaName) {
                        let width = 92;
                        label = {
                            formatter: [
                                `{title_active|{b}}`,
                                `{value_active|{c} 例}`
                            ].join('\n'),
                            backgroundColor: '#eee',
                            borderColor: '#FFB569',
                            width,
                            rich: {
                                title_active: {
                                    align: 'center',
                                    lineHeight: 17,
                                    fontSize: 12,
                                    color: '#fff',
                                    backgroundColor: '#FFB569',
                                    width,
                                    height: 26,
                                    borderRadius: [4, 4, 0, 0]
                                },
                                value_active: {
                                    height: 32,
                                    lineHeight: 32,
                                    width,
                                    color: '#FFB569',
                                    backgroundColor: '#fff',
                                    borderRadius: [0, 0, 4, 4]
                                }
                            }
                        };
                    }
                    return Object.assign({
                        coords: COORDS_LINE[item.name],
                        label
                    }, item);
                })
            }
        ],
        visualMap: {
            seriesIndex: 0,
            min: 0,
            max: 1000000,
            right: 20,
            bottom: 20,
            type: 'piecewise',
            align: 'left',
            itemWidth: 22,
            itemHeight: 14,
            textStyle: {
                color: '#FFFF',
                fontSize: 14,
                lineHeight: 20
            },
            color: 'green',
            pieces: [{
                    gte: 41,
                    color: '#BF464D',
                    label: '40例以上'

                },
                {
                    gte: 31,
                    lte: 40,
                    color: '#D47E6D',
                    label: '31 - 40例'
                },
                {
                    gte: 21,
                    lte: 30,
                    color: '#DE977C',
                    label: '21 - 30例'
                },
                {
                    gte: 11,
                    lte: 20,
                    color: '#F3CF9C',
                    label: '11 - 20例'
                },
                {
                    gte: 1,
                    lte: 10,
                    color: '#FAF4E0',
                    label: '1 - 10例'
                },
                {
                    value: 0,
                    color: '#fff',
                    label: '0 例'
                }
            ]
        },
        geo: {
            geoIndex: 1,
            map: 'beijing',
            label: {
                show: false
            },
            zoom: 1.2,
            animation: false
        }
    };
    myChart.setOption(option, true);
}
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('beijing', geoJson);
    handleChangeOption();
    myChart.hideLoading();
});