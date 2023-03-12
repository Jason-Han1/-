var oldData = [{
        "DENOMINATION": "100",
        "COFFERS_NAME": "第一金库",
        "sumAmt": 243.35
    },
    {
        "DENOMINATION": "50",
        "COFFERS_NAME": "第一金库",
        "sumAmt": 40
    },
    {
        "DENOMINATION": "20",
        "COFFERS_NAME": "第一金库",
        "sumAmt": 300
    },
    {
        "DENOMINATION": "10",
        "COFFERS_NAME": "第一金库",
        "sumAmt": 40
    },
    {
        "DENOMINATION": "5",
        "COFFERS_NAME": "第一金库",
        "sumAmt": 100
    },
    {
        "DENOMINATION": "100",
        "COFFERS_NAME": "第二金库",
        "sumAmt": 100
    },
    {
        "DENOMINATION": "50",
        "COFFERS_NAME": "第二金库",
        "sumAmt": 341.4514
    },
    {
        "DENOMINATION": "20",
        "COFFERS_NAME": "第二金库",
        "sumAmt": 45.78
    },
    {
        "DENOMINATION": "10",
        "COFFERS_NAME": "第二金库",
        "sumAmt": 40
    },
    {
        "DENOMINATION": "5",
        "COFFERS_NAME": "第二金库",
        "sumAmt": 200
    },
    {
        "DENOMINATION": "100",
        "COFFERS_NAME": "第三金库",
        "sumAmt": 89.6
    },
    {
        "DENOMINATION": "50",
        "COFFERS_NAME": "第三金库",
        "sumAmt": 25.645
    },
    {
        "DENOMINATION": "20",
        "COFFERS_NAME": "第三金库",
        "sumAmt": 7.685
    },
    {
        "DENOMINATION": "10",
        "COFFERS_NAME": "第三金库",
        "sumAmt": 40
    },
    {
        "DENOMINATION": "5",
        "COFFERS_NAME": "第三金库",
        "sumAmt": 300
    },
];


var datavalue = {
    source: [
        ['product']
    ]
};

let coffersArr = [],
    denominationArr = [];
oldData.forEach((item) => {
    if (denominationArr.indexOf(item.DENOMINATION) < 0) {
        denominationArr.push(item.DENOMINATION);
    }
    if (coffersArr.indexOf(item.COFFERS_NAME) < 0) {
        coffersArr.push(item.COFFERS_NAME);
    }
});

for (var i = 0; i < denominationArr.length + 1; i++) {
    if (i === 0) {
        for (var j = 0; j < coffersArr.length; j++) {
            datavalue.source[i][j + 1] = coffersArr[j];
        }
    } else {
        datavalue.source[i] = [];
        datavalue.source[i][0] = denominationArr[i - 1];
    }
}

for (var i = 1; i < datavalue.source.length; i++) {
    for (var j = 1; j < datavalue.source[0].length; j++) {
        for (var k = 0; k < oldData.length; k++) {
            //console.log(i+'-'+j+'-'+k);
            if (datavalue.source[i][0] == oldData[k].DENOMINATION &&
                datavalue.source[0][j] == oldData[k].COFFERS_NAME) {
                datavalue.source[i][j] = oldData[k].sumAmt;
            }
        }
    }
}
console.log(datavalue);
/*
var datavalue ={
    source: [
        ['product', '第一金库', '第二金库', '第三金库'],
        ['100', 41.1, 30.4, 65.1],
        ['50', 86.5, 92.1, 85.7],
        ['20', 24.1, 67.2, 79.5]
    ]
}
*/
setTimeout(function() {

    option = {
        title: {
            text: '票面库存统计',
            subtext: '单位：万元',
            left: 'center'
        },

        legend: {
          right: '0'
        },
        tooltip: {
            trigger: 'axis',
            showContent: true,
            position: 'outside'
        },
        dataset: datavalue,
        xAxis: {
            type: 'category'
        },
        yAxis: {
            gridIndex: 0
        },
        grid: {
            top: '55%'
        },
        series: [{
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'pie',
                id: 'pie',
                radius: ['30%', '20%'],
                center: ['50%', '30%'],
                label: {
                    position: 'outside',
                    formatter: '{b}: ({d}%)'
                    //   formatter:function(data){
                    //         console.log(data);
                    //         return  data.name+"：("+data.percent.toFixed(1)+"%)";
                    //     }

                },
                encode: {
                    itemName: 'product'
                }
            }
        ]
    };

    myChart.on('updateAxisPointer', function(event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            myChart.setOption({
                series: {
                    id: 'pie',

                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    });

    myChart.setOption(option);

});