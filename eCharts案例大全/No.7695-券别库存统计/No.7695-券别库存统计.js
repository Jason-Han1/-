var oldData = [{
        "COFFERS_NAME": "第一金库",
        "DENOMINATION": "专用钞",
        "CURRENCY_TYPE": "完整券",
        "AMOUNT": 412.35
    },{
        "COFFERS_NAME": "第一金库",
        "DENOMINATION": "专用钞",
        "CURRENCY_TYPE": "残损券",
        "AMOUNT": 452.35
    },{
        "COFFERS_NAME": "第一金库",
        "DENOMINATION": "流通钞",
        "CURRENCY_TYPE": "完整券",
        "AMOUNT": 122.35
    },{
        "COFFERS_NAME": "第一金库",
        "DENOMINATION": "流通钞",
        "CURRENCY_TYPE": "残损券",
        "AMOUNT": 90.35
    },{
        "COFFERS_NAME": "第二金库",
        "DENOMINATION": "专用钞",
        "CURRENCY_TYPE": "完整券",
        "AMOUNT": 212.35
    },{
        "COFFERS_NAME": "第二金库",
        "DENOMINATION": "专用钞",
        "CURRENCY_TYPE": "残损券",
        "AMOUNT": 452.35
    },{
        "COFFERS_NAME": "第二金库",
        "DENOMINATION": "流通钞",
        "CURRENCY_TYPE": "完整券",
        "AMOUNT": 122.35
    },{
        "COFFERS_NAME": "第二金库",
        "DENOMINATION": "流通钞",
        "CURRENCY_TYPE": "残损券",
        "AMOUNT": 567.35
    },{
        "COFFERS_NAME": "第三金库",
        "DENOMINATION": "专用钞",
        "CURRENCY_TYPE": "完整券",
        "AMOUNT": 225.35
    },{
        "COFFERS_NAME": "第三金库",
        "DENOMINATION": "专用钞",
        "CURRENCY_TYPE": "残损券",
        "AMOUNT": 34.35
    },{
        "COFFERS_NAME": "第三金库",
        "DENOMINATION": "流通钞",
        "CURRENCY_TYPE": "完整券",
        "AMOUNT": 422.35
    },{
        "COFFERS_NAME": "第三金库",
        "DENOMINATION": "流通钞",
        "CURRENCY_TYPE": "残损券",
        "AMOUNT": 910.35
    } 
];

var datavalue = {
    source: [
        ['product'],
        ['专用钞(完整券)'],
        ['流通钞(完整券)'],
        ['流通钞(残损券)'],
        ['专用钞(残损券)']
    ]
};

var interDate = [
        ['product'],
        ['完整券'],
        ['残损券']
    ];

var coffersArr = [];

oldData.forEach((item) => {
    if (coffersArr.indexOf(item.COFFERS_NAME) < 0) {
        coffersArr.push(item.COFFERS_NAME);
    }
});
/*
var datavalue ={
    source: 
    [
      ["product", "第一金库", "第二金库", "第三金库"], 
      ["专用钞(完整券)", 212.35, 212.35, 225.35], 
      ["流通钞(完整券)", 122.35, 122.35, 422.35], 
      ["流通钞(残损券)", 90.35, 567.35, 910.35], 
      ["专用钞(残损券)", 452.35, 452.35, 34.35]
     ]
}
var interDate = [
        ["product", "第一金库", "第二金库", "第三金库"],
        ["完整券", 334.7, 334.7, 647.7], 
      ["残损券", 542.7, 1019.7, 944.7], 
];
*/


for (let i = 0; i < coffersArr.length; i++) {
  datavalue.source[0][i + 1] = coffersArr[i];
  interDate[0][i + 1] = coffersArr[i];
}

for (let k = 0; k < oldData.length; k++) {
    for (let i = 1; i < datavalue.source[0].length; i++) {
        for (let j = 1; j < datavalue.source.length; j++) {
            if (datavalue.source[0][i] == oldData[k].COFFERS_NAME &&
                (datavalue.source[j][0].indexOf(oldData[k].DENOMINATION) != -1) &&
                (datavalue.source[j][0].indexOf(oldData[k].CURRENCY_TYPE) != -1) ) {
                datavalue.source[j][i] = oldData[k].AMOUNT;
            }
        }
    }
    for (var m = 1; m < interDate[0].length; m++) {
        for (var n = 1; n < interDate.length; n++) {
            if (interDate[0][m] == oldData[k].COFFERS_NAME &&
                interDate[n][0] == oldData[k].CURRENCY_TYPE ) {
                if(interDate[n][m] == "undefined" || isNaN(interDate[n][m]) ){
                    interDate[n][m] = 0;
                }
                interDate[n][m] +=  parseFloat(oldData[k].AMOUNT);
            }
        }
    }
    
}

setTimeout(function() {
    option = {
        title: {
            text: '券别库存统计',
            subtext: '单位：万元',
            left: '0'
        },
        legend: {
          right: '0',
          orient: 'vertical',
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
                name: 'outer',
                type: 'pie',
                id: 'outer',
                radius: ['30%', '20%'],
                center: ['50%', '30%'],
                label: {
                    position: 'outside',
                    formatter: function(data){
                        return data.data[1]+'万元';
                    },
                },
                labelLine:{
                    show: true,
                    length: 50,
                },
                encode: {
                    itemName: 'product',
                    value: 1,
                    tooltip: 1,
                }
            },
            {
                name: 'inner',
                type: 'pie',
                id: 'inner',
                radius: [0, '15%'],
                center: ['50%', '30%'],
                label: {
                    position: 'inner',
                    formatter: function(data){
                        return data.data[0];
                    }
                },
                data: interDate,
                encode: {
                    itemName: 'product',
                    value: 1,
                    tooltip: 1,
                }
            }
        ]
    };

    myChart.on('updateAxisPointer', function(event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            myChart.setOption({
                series: [{
                    id: 'outer',
                    label: {
                        // formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                        formatter: function(data){
                            return data.data[dimension]+'万元';
                        }
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                },{
                    id: 'inner',
                    label: {
                        // formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                        formatter: function(data){
                            return data.data[0];
                        }
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }]
            });
        }
    });

    myChart.setOption(option);

});