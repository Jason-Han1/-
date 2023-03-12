        var date = [];
        var of = [];
        for (var j = 0; j < 13; j++) {
            date.push(j); of .push(Math.random() * 100)
        }
        option = {
            grid: {
                top: 20,
                height: '64%',
                width: '85%',
            },
            xAxis: {
                type: 'category',
                name: 'Day',
                data: date,
            },
            yAxis: {
                type: 'value',

            },
            series: [{
                name: 'CRP',
                data: of ,
                type: 'line',
                symbol: 'circle',
                symbolSize: 5,
                lineStyle: {
                    color: 'rgb(254,67,117)'
                },
            }, ],

        };
        var len = date.length;
        setInterval(function() { of .push( of .shift())
            date.push(len++);
            date.shift();
            myChart.setOption({
                xAxis: {
                    data: date
                },
                series: [{
                    data: of
                }]
            });
        }, 1000)