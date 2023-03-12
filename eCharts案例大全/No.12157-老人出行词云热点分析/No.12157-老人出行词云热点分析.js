var uploadedDataURL = "/asset/get/s/data-1549191113335-gRFB1ID5X.csv";


option = {
    title: {
        text: '老人出行热点分析',
        x: 'center',
        textStyle: {
            fontSize: 23
        }

    },
    backgroundColor: '#F7F7F7',
    tooltip: {
        show: true
    },
    toolbox: {
        feature: {
            saveAsImage: {
                iconStyle: {
                    normal: {
                        color: '#FFFFFF'
                    }
                }
            }
        }
    },
    series: [{
        name: '热点分析',
        type: 'wordCloud',
        //size: ['9%', '99%'],
        sizeRange: [2, 50],
        gridSize: 2,
        //textRotation: [0, 45, 90, -45],
        rotationRange: [-45, 90],
        //shape: 'circle',
        textPadding: 0,
        autoSize: {
            enable: true,
            minSize: 6
        },
        textStyle: {
            normal: {
                color: function() {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        data: []
    }]
};
$.ajax({
    "url": uploadedDataURL,
    "dataType": "text",
    "method": "GET",
    "success": function(csvdata) {
        var rows = csvdata.split('\n');
        var JsonList = [];
        for (var r in rows) {

            if (r < 1)
                continue;

            var row = rows[r].slice(1, rows[r].length).split('",');
            //console.log(row);
            JsonList.push({
                name:row[0],
                value:row[1]
            });

        }
        console.log(JsonList);
        option.series[0].data = JsonList;
        myChart.setOption(option);
        //myChart.setOption(option);
myChart.on('click', function(params) {
    //alert((params.name));
   
});

    },
});





