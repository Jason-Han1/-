var uploadedDataURL = "/asset/get/s/data-1502779360900-HkKJuGe_W.json";

var geodata = [{
        name: '广州市',
        value: [113.43, 23.26]
    }, {
        name: '佛山市',
        value: [112.98, 23.01]
    }, {
        name: '肇庆市',
        value: [112.47, 23.05]
    },
    {
        name: '云浮市',
        value: [112.03, 22.92]
    },
    {
        name: '阳江市',
        value: [111.90, 21.95]
    }, {
        name: '茂名市',
        value: [110.99, 21.68]
    }, {
        name: '湛江市',
        value: [110.24, 21.25]
    },
];

let regions = []
for (let value of geodata) {

    regions.push({
        name: value.name,
        itemStyle: {
            areaColor: '#3B5077',
            borderWidth: 1,
            borderColor: '#cbb0e3'
        },
        emphasis: {
            label: {
                show: false,
            },

        }
    })
}


$.get(uploadedDataURL, function(gdJson) {
    echarts.registerMap('广东', gdJson);
    option = {
        title: {
            text: '广湛高铁大概路线'
        },

        geo3D: {
            show: true,
            map: '广东',
            groundPlane: {
                show: true,
            },
            boxWidth: 90,
            regionHeight: 3,
            // shading: 'color',

            itemStyle: {
                borderWidth: 1,
                borderColor: '#a3cf62'
            },

            regions: regions,
        },
        series: [{
                type: 'scatter3D',
                coordinateSystem: 'geo3D',
                symbol: 'circle',
                symbolSize: 12,
                itemStyle: {

                    color: '#f26522'
                },
                label: {
                    show: true,
                    distance: 5,
                    position: 'top',
                    formatter: '{b}',
                    textStyle: {
                        color: '#2b4490',
                        borderWidth: 2,
                        borderColor: '#f69c9f',
                        fontWeight: 'bold',
                    }

                },
                data: geodata
            },
            {
                type: 'lines3D',
                coordinateSystem: 'geo3D',
                lineStyle: {
                    color: '#DB7093',
                    width: 1,
                },

                zlevel: 2,
                effect: {
                    show: true,
                    period: 1,
                    trailWidth: 10,
                    trailLength: 0.8,

                },
                data: [{
                        coords: [
                            [113.43, 23.26],
                            [112.98, 23.01]
                        ]
                    },
                    {
                        coords: [
                            [112.98, 23.01],
                            [112.47, 23.05]
                        ]
                    },
                    {
                        coords: [
                            [112.47, 23.05],
                            [112.03, 22.92]
                        ]
                    },
                    {
                        coords: [
                            [112.03, 22.92],
                            [111.90, 21.95]
                        ]
                    },
                    {
                        coords: [
                            [111.90, 21.95],
                            [110.99, 21.68]
                        ]
                    },
                    {
                        coords: [
                            [110.99, 21.68],
                            [110.24, 21.25]
                        ]
                    },

                ],
                blendMode: 'source-over'
            }
        ]

    }

    myChart.setOption(
        option
    );
});