// See https://github.com/ecomfe/echarts-stat
echarts.registerTransform(ecStat.transform.regression);

/*-------------------------数据配置-----------------------*/
/**
{
    "measures": [
        {
            "aliasName": "F16",
            "comments": "销售额",
            "valueType": "Left",   //X轴
            "aggregationType": "Sum"
        },
        {
            "aliasName": "F17",
            "comments": "数量",
            "valueType": "Right",   //Y轴
            "aggregationType": "Sum"
        }
    ],
    "dimensions": [
        {
            "aliasName": "F9",     //维度
            "comments": "省/自治区",
        }
    ]
}
*/

/*-------------------------数据-----------------------*/
/**
{
//维度
"F9":[
        "上海","云南","内蒙古","北京","吉林","四川","天津","宁夏",
        "安徽","山东","山西","广东","广西","新疆","江苏","江西",
        "河北","河南","浙江","海南","湖北","湖南","甘肃","福建",
        "西藏","贵州","辽宁","重庆","陕西","青海","黑龙江"
     ],
//X轴
"F16":[
        582450.57,422328.2,273453.01,409147.2,666791.64,400877.6,
        549906.63,58121,628965.19,1586782.99,423878.77,1458879.88,
        377653.83,70607.74,653052.96,237328.7,790915.41,853574.8,
        456981.06,107854.41,627201.85,723442.21,179270.03,546903.53,
        10015.18,108141.6,835974.66,361761.93,457688.17,49863.38,
        1208457.08
     ],
//Y轴
"F17":[     
        1080,815,833,956,1362,1438,1096,126,1302,3399,750,3102,797,
        139,2252,506,1511,1763,1583,250,2153,1658,538,962,34,276,2583,
        836,909,81,2587
      ]
}
*/

option = {
    dataset: [
        {
            dimensions: ['销售额','数量','省/自治区'],
            source: [
                 //X轴     //Y轴   //维度
                [582450.57, 1080, '上海'],
                [422328.2, 815, '云南'],
                [273453.01, 833, '内蒙古'],
                [409147.2, 956, '北京'],
                [666791.64, 1362, '吉林'],
                [400877.6, 1438, '四川'],
                [549906.63, 1096, '天津'],
                [58121, 126, '宁夏'],
                [628965.19, 1302, '安徽'],
                [1586782.99, 3399, '山东'],
                [423878.77, 750, '山西'],
                [1458879.88, 3102, '广东'],
                [377653.83, 797, '广西'],
                [70607.74, 139, '新疆'],
                [653052.96, 2252, '江苏'],
                [237328.7, 506, '江西'],
                [790915.41, 1511, '河北'],
                [853574.8, 1763, '河南'],
                [456981.06, 1583, '浙江'],
                [107854.41, 250, '海南'],
                [627201.85, 2153, '湖北'],
                [723442.21, 1658, '湖南'],
                [179270.03, 538, '甘肃'],
                [546903.53, 962, '福建'],
                [10015.18, 34, '西藏'],
                [108141.6, 276, '贵州'],
                [835974.66, 2583, '辽宁'],
                [361761.93, 836, '重庆'],
                [457688.17, 909, '陕西'],
                [49863.38, 81, '青海'],
                [1208457.08, 2587, '黑龙江'],
            ],
        },
        {
            transform: {
                type: 'ecStat:regression', //回归
                config: {
                    method: 'exponential', //指数
                },
            },
        },
    ],

    /*--------------------以下配置，不需要关注------------------*/
    title: {
        text: '趋势线：指数',
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
        name: 'X:销售额',
        splitLine: {
            lineStyle: {
                type: 'dashed',
            },
        },
    },
    yAxis: {
        name: 'Y:数量',
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
                position: 'bottom',
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
