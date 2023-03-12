// See https://github.com/ecomfe/echarts-stat
echarts.registerTransform(ecStat.transform.regression);

/*-------------------------数据配置-----------------------*/
/**
{
    "measures": [
        {
            "aliasName": "F42",
            "comments": "计划销量",
            "valueType": "Left",         //X轴
            "aggregationType": "Avg"
        },
        {
            "aliasName": "F45",
            "comments": "预测销量",
            "valueType": "Right",         //Y轴
            "aggregationType": "Avg"
        }
    ],
    "dimensions": [                      //维度 
        {
            "aliasName": "F15",
            "comments": "商品名称",
        }
    ]
}
*/

/*-------------------------数据-----------------------*/
/**
{
    "F42": [                      //X轴
        14.5,
        19.56,
        30.6,
        31.52,
        34.74
    ],
    "F45": [                     //Y轴
        19.07,
        26.13,
        32.52,
        33.81,
        37.56
    ],
    "F15": [                     //维度 
        "多功能登山包",
        "多功能颈枕 棉麻款",
        "纯棉刺绣水洗四件套",
        "纯色缎面四件套",
        "纯色针织四件套"
    ]
}
*/

option = {
    dataset: [
        {
            dimensions: ['计划销量', '预测销量', '商品名称'],
            source: [
                //X轴 ,  //Y轴  ,  //维度
                [14.5, 19.07, '多功能登山包'],
                [19.56, 26.13, '多功能颈枕 棉麻款'],
                [30.6, 32.52, '纯棉刺绣水洗四件套'],
                [31.52, 33.81, '纯色缎面四件套'],
                [34.74, 37.56, '纯色针织四件套'],
            ],
        },
        {
            transform: {
                type: 'ecStat:regression', //回归
                config: {
                    method: 'linear', //线性
                },
            },
        },
    ],

    /*--------------------以下配置，不需要关注------------------*/
    title: {
        text: '趋势线：线性',
        left: 'center',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
        },
        formatter: function (params) {
            //alert(JSON.stringify(params[0]));
            var item = params[0];
            var dimensionNames = item.dimensionNames;
            var value = item.value;
            return (
                dimensionNames[2] +
                ' : ' +
                value[2] +
                '<br/>' +
                dimensionNames[0] +
                ' : ' +
                value[0] +
                '<br/>' +
                dimensionNames[1] +
                ' : ' +
                value[1]
            );
        },
    },
    xAxis: {
        name: 'X:计划销量',
        splitLine: {
            lineStyle: {
                type: 'dashed',
            },
        },
    },
    yAxis: {
        name: 'Y:预测销量',
        splitLine: {
            lineStyle: {
                type: 'dashed',
            },
        },
    },
    series: [
        {
            name: 'scatter',
            type: 'scatter',
            datasetIndex: 0,
            label: {
                show: true,
                fontSize: 12,
                position: "bottom",
                formatter: function (params) {
                    var item = params;
                    var value = item.value;
                    return value[2];
                },
            },
        },
        {
            name: 'line',
            type: 'line',
            smooth: true,
            datasetIndex: 1,
            symbolSize: 0.1,
            symbol: 'circle',
            label: { show: true, fontSize: 16 },
            labelLayout: { dx: -20 },
            encode: { label: 2, tooltip: 1 },
        },
    ],
};
