    let data = [{
        "name": "Ⅰ类",
        "value": 10
    }, {
        "name": "Ⅱ类",
        "value": 35
    }, {
        "name": "Ⅲ类",
        "value": 20
    }, {
        "name": "Ⅳ类",
        "value": 20
    }, {
        "name": "Ⅴ类",
        "value": 10
    }, {
        "name": "劣Ⅴ类",
        "value": 5
    }];

    let startAngle = -3.6 * data[0].value / 2
    option = {
        backgroundColor: '#03152e',
        "color": ["#68cffe", "#49a1fe", "#65c233", "#f2b71d", "#9600e2", "#e73f60", "#9f9f9f"],
        "legend": {
            "bottom": 0,
            "itemGap": 10,
            "itemWidth": 12,
            "itemHeight": 12,
            //"data": ["Ⅰ类", "Ⅱ类", "Ⅲ类", "Ⅳ类", "Ⅴ类", "劣Ⅴ类"],
            "symbolKeepAspect": false,
            "textStyle": {
                "color": "#57a6ff"
            },
            "icon": "circle"
        },
        tooltip: {},
        "series": [{
            "name": "",
            "type": "pie",
            startAngle: startAngle,
            hoverOffset: 20,
            "radius": ["45%", "70%"],
            "center": ["45%", "45%"],
            "label": {
                "color": "#57a6ff",
                "formatter": "{b}：{c}%"
            },
            "itemStyle": {
                "normal": {
                    "shadowColor": "rgba(0,0,0,0.4)",
                    "shadowBlur": 15
                },
                emphasis: {
                    borderColor: '#03152e',
                    borderWidth: 10
                }
            },
            "labelLine": {
                "lineStyle": {
                    "color": "#57a6ff",
                    "width": 1.5
                }
            },
            "data": data
        }]
    }

    var timeTicket = null;

    function autohover(myChart, dataLength, time) {
        var count = 0;

        function startFn() {

            rotateFn();

            setTimeout(function() {
                myChart.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0, //serieIndex的索引值   可以触发多个
                });
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: (count) % dataLength
                });
                myChart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: (count) % dataLength
                });
                count++;
            }, 10);




        }
        timeTicket && clearInterval(timeTicket);
        timeTicket = setInterval(startFn, time);

        myChart.on('mouseover', function(params) {
            clearInterval(timeTicket);
        });

        myChart.on('mouseout', function(params) {
            timeTicket && clearInterval(timeTicket);
            timeTicket = setInterval(startFn, time);
        });
    }

    autohover(myChart, 6, 1000);

    let startIdx = 5;

    function rotateFn() {
        if (startIdx > data.length - 1) {
            startIdx = 0;
        }
        let curVal = data[startIdx].value;


        let nextVal = startIdx + 1 > data.length - 1 ? data[0].value : data[startIdx + 1].value;


        nextVal = isNaN(nextVal) ? 0 : nextVal;
        curVal = isNaN(curVal) ? 0 : curVal;

        let val = (nextVal + curVal) / 2
        startIdx++;

        val = isNaN(val) ? 0 : val;
        //startAngle -= 360;
        startAngle += (3.6 * val);
        startAngle = startAngle > 36000 ? startAngle - 36000 : startAngle;
        console.log(startAngle);
        myChart.setOption({
            series: [{
                "type": "pie",
                startAngle: startAngle
            }]
        });

    }

    //setInterval(rotateFn, 1000);