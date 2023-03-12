var uploadedDataURL = "/asset/get/s/data-1585652700669-eIhBAXP1d.json";
// var uploadedDataURL = "/asset/get/s/data-1583388859893-1WqjsZC4.json";


// mmpo1.25


datas =[{'name': 'SM', 'value': 96, 'label': {'color': '#000'}},
 {'name': 'JX', 'value': 95, 'label': {'color': '#000'}},
 {'name': 'GDW', 'value': 92, 'label': {'color': '#000'}},
 {'name': 'GDE', 'value': 95, 'label': {'color': '#000'}},
 {'name': 'SX3', 'value': 100, 'label': {'color': '#fff'}},
 {'name': 'HUB', 'value': 100.5, 'label': {'color': '#fff'}},
 {'name': 'SC', 'value': 99, 'label': {'color': '#fff'}},
 {'name': 'SD', 'value': 105, 'label': {'color': '#fff'}},
 {'name': 'BJ', 'value': 102, 'label': {'color': '#fff'}},
 {'name': 'LNS', 'value': 95, 'label': {'color': '#000'}},
 {'name': 'HLJ', 'value': 96, 'label': {'color': '#000'}},
 {'name': 'HAN', 'value': 95, 'label': {'color': '#000'}},
 {'name': 'ZJ', 'value': 99, 'label': {'color': '#fff'}},
 {'name': 'AH', 'value': 95, 'label': {'color': '#000'}},
 {'name': 'IM', 'value': '-', 'label': {'color': '#000'}},
 {'name': 'YN', 'value': 98, 'label': {'color': '#000'}},
 {'name': 'GS', 'value': 93, 'label': {'color': '#000'}},
 {'name': 'JS', 'value': 98.6, 'label': {'color': '#000'}},
 {'name': 'GX', 'value': 94, 'label': {'color': '#000'}},
 {'name': 'FJ', 'value': 95, 'label': {'color': '#000'}},
 {'name': 'LNN', 'value': '-', 'label': {'color': '#000'}},
 {'name': 'HEB', 'value': 99, 'label': {'color': '#fff'}},
 {'name': 'SX', 'value': 95, 'label': {'color': '#000'}},
 {'name': 'TJ', 'value': 99, 'label': {'color': '#fff'}},
 {'name': 'XJ', 'value': 92, 'label': {'color': '#000'}},
 {'name': 'ZM', 'value': 95, 'label': {'color': '#000'}},
 {'name': 'JL', 'value': '-', 'label': {'color': '#000'}},
 {'name': 'HUN', 'value': 98, 'label': {'color': '#000'}},
 {'name': 'HEN', 'value': 97, 'label': {'color': '#000'}},
 {'name': 'CQ', 'value': 99, 'label': {'color': '#fff'}},
 {'name': 'ZH', 'value': 95, 'label': {'color': '#000'}}]

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
                 gte: 102,
                label: "> 4",
                color: "rgb(124,24,24)"
            }, {
                gte: 99,
                lt: 102,
                label: "2.8+",
                color: 'rgb(163,32,32)'
            }, {
                gte: 96,
                lt: 99,
                
                label: "2.8+",
                color: 'rgb(224,97,97)'
            }, {
                gte: 93,
                lt: 96,
                label: "2.6-2.8",
                color: 'rgb(234,150,150)'
            }, {
                gte: 90,
                lt: 93,
                label: "2.5-2.6",
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
               show:1,
            position:'bottom',
            distance:220,
            rotate:30,
            fontSize:13,
            fontWeight:'bolder',
            align:'center',
            fontStyle:"oblique"
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            itemStyle: {
                borderColor: "#fff",
                borderWidth: 1,
                areaColor:"#ddd"


            },

            data: window.datas
        }]
    };

    myChart.setOption(option);
});