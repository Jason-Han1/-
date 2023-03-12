var colorList = [
    '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
    '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
    '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700'
];
var symbolSizeArr = [78, 65, 98, 71, 97, 61];
option = {
    title: {
        show: true, //显示策略，默认值true,可选为：true（显示） | false（隐藏）
        text: '散点图', //主标题文本，'\n'指定换行
        x: 'center', // 水平安放位置，默认为左对齐，可选为：
        // ¦ {number}（x坐标，单位px）
        y: '10%', // 垂直安放位置，默认为全图顶端，可选为：           
        //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#ccc', // 标题边框颜色
        borderWidth: 0, // 标题边框线宽，单位px，默认为0（无边框）
        padding: 5, // 标题内边距，单位px，默认各方向内边距为5，                   // 接受数组分别设定上右下左边距，同css
        itemGap: 10, // 主副标题纵向间隔，单位px，默认为10，
        textStyle: {
            fontSize: 18,
            fontWeight: 'bolder',
            color: '#333' // 主标题文字颜色
        },
        subtextStyle: {
            color: '#aaa' // 副标题文字颜色
        }
    },
    tooltip: {},
    xAxis: {
        show: false,
    },
    yAxis: {
        show: false,
    },
    series: [{
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 200,
            edgeLength: 10
        },
        label: {
            show: true,
            formatter: [
                '{title|{c}}',
                '{name|{b}}'
            ].join('\n'),
            rich: {
                title: {
                    fontSize: 14,
                    color: '#fff',
                    textAlign: 'center'
                },
                name: {
                    fontSize: 14,
                    color: '#fff',
                    textAlign: 'center'
                }
            }
        },
        itemStyle: {
            color: function(params) {
                var a = params.dataIndex;
                if (a >= 6) {
                    a = a - 6;
                }
                return colorList[a];
            }
        },
        symbolSize: function(value, params) {
            return symbolSizeArr[params.dataIndex];
        },
        //  "draggable": true,//设置是否可拖动
        data: [{
            "name": "新冠肺",
            "value": 233,

        }, {
            "name": "女连胜",
            "value": 549,

        }, {
            "name": "火医院",
            "value": 229,

        }, {
            "name": "女队员",
            "value": 218,

        }, {
            "name": "人们",
            "value": 430,
        }],
    }]
};