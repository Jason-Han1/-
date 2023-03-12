var x = [];
var y = [];
var i = 0;

function AddData() {
    y.push(Math.random());
    if(x.length>=50)
    {
        x.splice(0,1);
        y.splice(0,1);
    }
    x.push(i + 1);
    i++;
}

function Set() {
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                animation: false,
                label: {
                    backgroundColor: '#505765'
                },
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        xAxis: {
            data: x
        },
        yAxis: {
            splitLine: {
                show: false
            }
        },
        dataZoom: [{
                startValue: '2014-06-01'
            },
            {
                type: 'inside'
            }
        ],
        series: {
            type: 'line',
            data: y
        }
    };
}

setInterval(function() {
    AddData();
    Set();
    myChart.setOption(option);
}, 2000);