var uploadedDataURL = "/asset/get/s/data-1586251159275-zIZM68jFQ.json";



datas = [{'name': 'SM', 'value': 1.7, 'label': {'color': '#000'}},
 {'name': 'JX', 'value': 1.7, 'label': {'color': '#000'}},
 {'name': 'GDW', 'value': 1.9, 'label': {'color': '#000'}},
 {'name': 'GDE', 'value': 1.7, 'label': {'color': '#000'}},
 {'name': 'SX3', 'value': 1.8, 'label': {'color': '#000'}},
 {'name': 'HUB', 'value': 1.9, 'label': {'color': '#000'}},
 {'name': 'SC', 'value': 1.8, 'label': {'color': '#000'}},
 {'name': 'SD', 'value': 1.8, 'label': {'color': '#000'}},
 {'name': 'BJ', 'value': 1.8, 'label': {'color': '#000'}},
 {'name': 'LNS', 'value': 1.9, 'label': {'color': '#000'}},
 {'name': 'HLJ', 'value': 2.3, 'label': {'color': '#fff'}},
 {'name': 'HAN', 'value': 1.9, 'label': {'color': '#000'}},
 {'name': 'ZJ', 'value': 2.2, 'label': {'color': '#000'}},
 {'name': 'AH', 'value': 1.9, 'label': {'color': '#000'}},
 {'name': 'IM', 'value': 1.9, 'label': {'color': '#000'}},
 {'name': 'YN', 'value': 1.9, 'label': {'color': '#000'}},
 {'name': 'GS', 'value': 1.9, 'label': {'color': '#000'}},
 {'name': 'JS', 'value': 1.9, 'label': {'color': '#000'}},
 {'name': 'GX', 'value': 2.0, 'label': {'color': '#000'}},
 {'name': 'FJ', 'value': 2.0, 'label': {'color': '#000'}},
 {'name': 'LNN', 'value': 2.0, 'label': {'color': '#000'}},
 {'name': 'HEB', 'value': 2.0, 'label': {'color': '#000'}},
 {'name': 'SX', 'value': 2.1, 'label': {'color': '#000'}},
 {'name': 'TJ', 'value': 2.0, 'label': {'color': '#000'}},
 {'name': 'XJ', 'value': 2.0, 'label': {'color': '#000'}},
 {'name': 'ZM', 'value': 2.0, 'label': {'color': '#000'}},
 {'name': 'JL', 'value': 2.0, 'label': {'color': '#000'}},
 {'name': 'HUN', 'value': 2.1, 'label': {'color': '#000'}},
 {'name': 'HEN', 'value': 2.1, 'label': {'color': '#000'}},
 {'name': 'CQ', 'value': 2.0, 'label': {'color': '#000'}},
 {'name': 'ZH', 'value': 2.0, 'label': {'color': '#000'}}]
;
myChart.showLoading();

$.get(uploadedDataURL, function(usaJson) {
    myChart.hideLoading();

    echarts.registerMap('China', usaJson, {});
    option = {
        title: {
            text: 'mmpo1.25',
            // left: 'right'
        },
        backgroundColor: "#fff",
        borderColor: "#121212",
        visualMap: {

            min: 2,
            max: 5,
            left: 26,
            bottom: 40,
            showLabel: 1,
            text: ["高", "低"],
            pieces: [{
                gt: 2.5,
                // label: "> 4",
                color: "rgb(124,24,24)"
            }, {
                gt: 2.2,
                lte: 2.5,

                color: 'rgb(163,32,32)'
            }, {
                gt: 1.9,
                lte: 2.2,


                color: 'rgb(224,97,97)'
            }, {
                gt: 1.6,
                lte: 1.9,

                color: 'rgb(234,150,150)'
            }, {
                gt: 0.1,
                lte: 1.6,

                color: 'rgb(245,202,202)'
            }, {
                value: 0,
                color: "#ffffff"
            }],
            show: 1
        },
        series: [{

            name: 'qq',
            type: 'map',
            roam: true,
            map: 'China',
            label: {
                show: 1,
                position: 'bottom',
                distance: 220,
                rotate: 30,
                fontSize: 13,
                fontWeight: 'bolder',
                align: 'center',
                fontStyle: "oblique"
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            itemStyle: {
                borderColor: "#fff",
                borderWidth: 1,
                areaColor: "#ddd"


            },

            data: window.datas
        }]
    };

    myChart.setOption(option);
});