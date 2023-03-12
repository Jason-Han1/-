// See https://github.com/ecomfe/echarts-stat
echarts.registerTransform(ecStat.transform.clustering);

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

//维度
var names = [
    '上海',
    '云南',
    '内蒙古',
    '北京',
    '吉林',
    '四川',
    '天津',
    '宁夏',
    '安徽',
    '山东',
    '山西',
    '广东',
    '广西',
    '新疆',
    '江苏',
    '江西',
    '河北',
    '河南',
    '浙江',
    '海南',
    '湖北',
    '湖南',
    '甘肃',
    '福建',
    '西藏',
    '贵州',
    '辽宁',
    '重庆',
    '陕西',
    '青海',
    '黑龙江',
];
var data = [
    //X轴 ,  //Y轴
    [582450.57, 1080],
    [422328.2, 815],
    [273453.01, 833],
    [409147.2, 956],
    [666791.64, 1362],
    [400877.6, 1438],
    [549906.63, 1096],
    [58121, 126],
    [628965.19, 1302],
    [1586782.99, 3399],
    [423878.77, 750],
    [1458879.88, 3102],
    [377653.83, 797],
    [70607.74, 139],
    [653052.96, 2252],
    [237328.7, 506],
    [790915.41, 1511],
    [853574.8, 1763],
    [456981.06, 1583],
    [107854.41, 250],
    [627201.85, 2153],
    [723442.21, 1658],
    [179270.03, 538],
    [546903.53, 962],
    [10015.18, 34],
    [108141.6, 276],
    [835974.66, 2583],
    [361761.93, 836],
    [457688.17, 909],
    [49863.38, 81],
    [1208457.08, 2587],
];
var CLUSTER_COUNT = 3; //个数
var DIENSIION_CLUSTER_INDEX = 2; //簇的索引





/*--------------------以下配置，不需要关注------------------*/

var COLOR_ALL = ['#37A2DA', '#e06343', '#37a354', '#b55dba', '#b5bd48', '#8378EA', '#96BFFF'];
var pieces = [];
for (var i = 0; i < CLUSTER_COUNT; i++) {
    pieces.push({
        value: i,
        label: 'cluster ' + i,
        color: COLOR_ALL[i],
    });
}

option = {
    dataset: [
        {
            dimensions: ['销售额', '数量'],
            source: data,
        },
        {
            transform: {
                type: 'ecStat:clustering',
                //print: true,
                config: {
                    clusterCount: CLUSTER_COUNT,
                    outputType: 'single',
                    outputClusterIndexDimension: DIENSIION_CLUSTER_INDEX,
                },
            },
        },
    ],
    tooltip: {
        position: 'top',
        formatter: function (params) {
            var item = params;
            var dimensionNames = item.dimensionNames;
            var value = item.value;
            var name = names[item.dataIndex];
            return (
                '省/自治区' +
                ' : ' +
                name +
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
    visualMap: {
        type: 'piecewise',
        top: 'middle',
        min: 0,
        max: CLUSTER_COUNT,
        left: 10,
        splitNumber: CLUSTER_COUNT,
        dimension: DIENSIION_CLUSTER_INDEX,
        pieces: pieces,
    },
    grid: {
        left: 120,
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
    series: {
        type: 'scatter',
        encode: { tooltip: [0, 1] },
        symbolSize: 15,
        itemStyle: {
            borderColor: '#555',
        },
        datasetIndex: 1,
        label: {
            show: true,
            fontSize: 12,
            position: 'bottom',
            formatter: function (params) {
                var item = params;
                var name = names[item.dataIndex];
                return name;
            },
        },
    },
};
