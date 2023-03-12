var uploadedDataURL = "/asset/get/s/data-1586251159275-zIZM68jFQ.json";



datas = [{'name': 'LNN', 'value': 53.1, 'label': {'color': '#fff'}},
 {'name': 'TJ', 'value': 53.1, 'label': {'color': '#fff'}},
 {'name': 'LNS', 'value': 53.1, 'label': {'color': '#fff'}},
 {'name': 'ZH', 'value': 49.5, 'label': {'color': '#fff'}},
 {'name': 'GX', 'value': 47.6, 'label': {'color': '#fff'}},
 {'name': 'SX3', 'value': 53.1, 'label': {'color': '#fff'}},
 {'name': 'BJ', 'value': 54.9, 'label': {'color': '#fff'}},
 {'name': 'SX', 'value': 54.9, 'label': {'color': '#fff'}},
 {'name': 'SD', 'value': 56.8, 'label': {'color': '#fff'}},
 {'name': 'HEN', 'value': 54.9, 'label': {'color': '#fff'}},
 {'name': 'HEB', 'value': 53.1, 'label': {'color': '#fff'}},
 {'name': 'AH', 'value': 49.5, 'label': {'color': '#fff'}},
 {'name': 'GDW', 'value': 49.5, 'label': {'color': '#fff'}},
 {'name': 'FJ', 'value': 53.1, 'label': {'color': '#fff'}},
 {'name': 'YN', 'value': 56.8, 'label': {'color': '#fff'}},
 {'name': 'SM', 'value': 54.9, 'label': {'color': '#fff'}},
 {'name': 'ZM', 'value': 49.5, 'label': {'color': '#fff'}},
 {'name': 'JS', 'value': 54.9, 'label': {'color': '#fff'}},
 {'name': 'ZJ', 'value': 56.8, 'label': {'color': '#fff'}},
 {'name': 'GDE', 'value': 49.5, 'label': {'color': '#fff'}},
 {'name': 'IM', 'value': '-', 'label': {'color': '#000'}},
 {'name': 'HLJ', 'value': '-', 'label': {'color': '#000'}},
 {'name': 'JL', 'value': '-', 'label': {'color': '#000'}},
 {'name': 'GS', 'value': '-', 'label': {'color': '#000'}},
 {'name': 'HUB', 'value': 53.1, 'label': {'color': '#fff'}},
 {'name': 'SC', 'value': 56.8, 'label': {'color': '#fff'}},
 {'name': 'HUN', 'value': 54.9, 'label': {'color': '#fff'}},
 {'name': 'CQ', 'value': 53.1, 'label': {'color': '#fff'}},
 {'name': 'JX', 'value': 49.5, 'label': {'color': '#fff'}},
 {'name': 'XJ', 'value': 54.9, 'label': {'color': '#fff'}},
 {'name': 'HAN', 'value': 49.5, 'label': {'color': '#fff'}}]
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
                gte: 50,
                lt: 60,
                // label: "> 4",
                color: "rgb(45,153,45)"
            }, {
                gt: 40,
                lte: 50,

                color: 'rgb(91,178,91)'
            }, {
                gt: 30,
                lte: 40,


                color: 'rgb(137,204,137)'
            }, {
                gt: 20,
                lte: 30,

                color: 'rgb(183,229,183)'
            }, {
                gt: 10,
                lte: 20,

                color: 'rgb(200,250,200)'
            }, {
                value: 0,
                color: "rgb(169,169,169)"
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
                areaColor: "rgb(169,169,169)"


            },

            data: window.datas
        }]
    };

    myChart.setOption(option);
});