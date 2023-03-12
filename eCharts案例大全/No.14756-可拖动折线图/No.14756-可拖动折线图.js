var testData = [
    [
        ["x", "y", "z"], 53.261555017, 0.0
    ],
    [
        ["x", "y", "z"], 46.5886461681, 2.39046239694
    ],
    [
        ["x", "y", "z"], 43.5878980454, 5.88349383965
    ],
    [
        ["x", "y", "z"], 43.6748358495, 10.1373454323
    ],
    [
        ["x", "y", "z"], 46.2649847811, 14.810268279
    ],
    [
        ["x", "y", "z"], 50.773870041, 19.5605134839
    ],
    [
        ["x", "y", "z"], 56.61701683, 24.0463321512
    ],
    [
        ["x", "y", "z"], 63.2099503486, 27.9259753849
    ],
    [
        ["x", "y", "z"], 69.9681957978, 30.8576942893
    ],
    [
        ["x", "y", "z"], 76.3072783781, 32.4997399685
    ],
    [
        ["x", "y", "z"], 81.6427232903, 32.5103635266
    ],
    [
        ["x", "y", "z"], 85.4605047198, 30.7419560517
    ],
    [
        ["x", "y", "z"], 87.5283927913, 27.8234685677
    ],
    [
        ["x", "y", "z"], 87.684606614, 24.5779920823
    ],
    [
        ["x", "y", "z"], 85.7673652973, 21.8286176034
    ],
    [
        ["x", "y", "z"], 81.6148879504, 20.3984361387
    ],
    [
        ["x", "y", "z"], 75.298878366, 20.8461982248
    ],
    [
        ["x", "y", "z"], 67.82497907, 22.6732925135
    ],
    [
        ["x", "y", "z"], 60.4323172716, 25.1167671852
    ],
    [
        ["x", "y", "z"], 54.3600201801, 27.4136704206
    ],
    [
        ["x", "y", "z"], 50.8472150047, 28.8010504001
    ],
    [
        ["x", "y", "z"], 50.7272784018, 28.7303045371
    ],
    [
        ["x", "y", "z"], 53.2105848166, 27.5102271756
    ],
];

var maxRadius = [];
var minRadius = [];

$.each(testData, function(index, val) {
    //				xAxisData.push(index);
    var maxlist = [index, val[1]];
    var minlist = [index, val[2]];
    maxRadius.push(maxlist);
    minRadius.push(minlist);
});

option = {
    tooltip: {
        trigger: 'axis',
        triggerOn: 'none',
        formatter: function(params) {
            console.log(params)
            console.log(params[0].dataIndex)
            console.log(testData[params[0].dataIndex])
            return params[0].dataIndex + "<br/>" + params[0].seriesName + ":" + params[0].data[1] + "<br/>" + params[1].seriesName + ":" + params[1].data[1];
        }
    },
    legend: {
        data: ['maxRadius', 'minRadius'],
        selected: {
            maxRadius: true,
            minRadius: true
        }
    },
    grid: {
        top: 40,
        left: 40,
        right: 20,
        bottom: 40,
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisPointer: {
            value: 0,
            type: 'line',
            lineStyle: {
                color: 'red'
            },
            handle: {
                show: true,
                color: 'red',
                margin: 16,
                size: 30
            },
            snap: true,
        },
        //			        data: xAxisData
    },
    yAxis: {
        type: 'value',
        name: 'mm',
        min: 0,
        max: 100
    },
    series: [{
        name: 'maxRadius',
        type: 'line',
        data: maxRadius,
        //			            showSymbol:false,
    }, {
        name: 'minRadius',
        type: 'line',
        data: minRadius,
        //			            showSymbol:false,
    }, {
        type: 'line',
        lineStyle: {
            normal: {
                type: 'dashed'
            }
        },
        data: []
    }]
};

myChart.on("click", function(params) {
    var opt = myChart.getOption();
    opt.tooltip[0].triggerOn = 'click';
    myChart.setOption(opt)
});

myChart.on("mousemove", function(params) {
    $("#test .Rmodule").remove();
    var dataIndex = params.dataIndex;
    var maxpoint = testData[dataIndex][1];
    var minpoint = testData[dataIndex][2];
    var startPoint = [dataIndex, maxpoint];
    var endPoint = [dataIndex, minpoint];
    var opt = myChart.getOption();
    var html = '<div class="Rmodule">maxRadius:' + maxpoint + '<br/>minRadius:' + minpoint + '</div>';
    $("#test").append(html);
    $("#test .Rmodule").css({
        top: params.event.offsetY + 10,
        left: params.event.offsetX + 10
    });
    if (opt.legend[0].selected.minRadius && opt.legend[0].selected.maxRadius) {
        opt.series[2].data = [];
        opt.series[2].data.push(startPoint);
        opt.series[2].data.push(endPoint);
        myChart.setOption(opt);
    }
});

myChart.on("mouseout", function(params) {
    var opt = myChart.getOption();
    opt.series[2].data = [];
    myChart.setOption(opt);
    $("#test .Rmodule").remove();
});