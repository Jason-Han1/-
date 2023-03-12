var grids = [];
var xAxes = [];
var yAxes = [];
var series = [];
var titles = [];
var count = 0;
var data = [];
var legends = [];

var yearData = ["2016", "2017", "2018", "2019"];

var cityData = ['呼和浩特市', '包头市', '乌海市', '赤峰市', '鄂尔多斯市', '呼伦贝尔市', '乌兰察布市',
    '兴安盟', '锡林郭勒盟', '阿拉善盟'
];

var myColor = ['#bf19ff', '#854cff', '#02cdff', '#0090ff',
    '#f9e264', '#f47a75', '#009db2', '#0780cf', '#765005'
];

var easingFuncs = [];
for (var i = 0; i < cityData.length; i++) {
    easingFuncs.push({
        name: cityData[i],
        xdata: yearData,
        ydata: [0, 0, 0, 0],
        type: 'bar'
    });
    for (var j = 0; j < yearData.length; j++) {
        var total = parseInt(Math.random() * 10000);
        if (total < 3000) {
            total += 2000;
        }
        easingFuncs[i].ydata[0] = total;
        total = parseInt(total * 0.75) - parseInt(Math.random() * 1000);
        if (total < 0) {
            total += 1000;
        }
        easingFuncs[i].ydata[1] = total;
        total = parseInt(total * 0.75) - parseInt(Math.random() * 1000);
        if (total < 0) {
            total += 1000;
        }
        easingFuncs[i].ydata[2] = total;
        total = parseInt(total * 0.75) - parseInt(Math.random() * 1000);
        if (total < 0) {
            total = parseInt(Math.random() * 1000);
        }
        easingFuncs[i].ydata[3] = total;
    }
}


echarts.util.each(easingFuncs, function(easingFunc, name) {
    grids.push({
        show: false,
        containLabel: false,
        borderWidth: 0,
        borderColor: '#fff'
    });
    xAxes.push({
        type: 'category',
        show: true,
        gridIndex: count,
        axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 14
            }
        },
        data: easingFunc.xdata
    });
    yAxes.push({
        type: 'value',
        axisLabel: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                width: 0.2
            }
        },
        nameGap: '1',
        axisTick: {
            show: false
        },
        name: easingFunc.name,
        nameTextStyle: {
            color: '#fff',
            fontSize: 14
        },
        gridIndex: count
    });
    series.push({
        name: easingFunc.name,
        type: easingFunc.type,
        xAxisIndex: count,
        yAxisIndex: count,
        data: easingFunc.ydata,
        label: {
            show: true
        },
    });
    titles.push({
        show: false,
        textAlign: 'left',
        text: easingFunc.value,
        textStyle: {
            fontSize: 16,
            color: 'yellow',
        }
    });
    count++;
});

//定位每个图形的位置
var rowNumber = 5;
echarts.util.each(grids, function(grid, idx) {
    grid.left = ((idx % rowNumber) / rowNumber * 100 + 3) + '%';
    grid.top = (Math.floor(idx / rowNumber) * 30 + 5) + '%';
    grid.width = '16%';
    grid.height = '20%';

    console.log(Math.floor(idx / rowNumber) * 300 + 300);

    titles[idx].left = parseFloat(grid.left) + parseFloat(grid.width) / 2 + '%';
    titles[idx].top = parseFloat(grid.top) - 3.5 + '%';
});

option = {
    backgroundColor:'#043491',
    title: titles,
    color: myColor,
    tooltip: {
        trigger: "axis",
        padding: [8, 10],
        backgroundColor: 'rgba(0,0,0,0.5)',
        axisPointer: {
            type: "shadow",
            textStyle: {
                color: "#fff"
            }
        }
    },
    grid: grids,
    xAxis: xAxes,
    yAxis: yAxes,
    series: series
};

myChart.setOption(option);