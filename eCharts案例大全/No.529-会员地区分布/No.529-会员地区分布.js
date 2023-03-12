var data = [{
    name: '黑龙江省',
    百分比: 12
}, {
    name: '辽宁省',
    百分比: 23
},{
    name:'吉林省',
    百分比:56
},{
    name:'北京市',
    百分比:17
},{
    name:'上海市',
    百分比:'65'
},{
    name:'其它',
    百分比:12
}];
var bgColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6", '#FF7F50'];

var dataSource = data;
var dataName = [];
var dataValue = [];
var dataNum = [];
for (var key in dataSource) {
    dataName.push(dataSource[key]["name"]);
    dataValue.push(dataSource[key]["百分比"]);
    dataNum.push(100);
}
var myColor = bgColor;

option = {
    backgroundColor:'#031136',
    //图标位置
    grid: {
        top: "20%",
        left: "15%",
        bottom: "20%"
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
            type: 'category',
            show: true,
            data: dataName,
            inverse: true,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#fff',
            }
        },
        {
            type: 'category',
            show: true,
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            data: dataValue,
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: "#fff"
                },
                //formatter: function (value) {
                //    return value + '%';
                //}
            },
        }
    ],
    series: [{
            name: "地区",
            type: "bar",
            yAxisIndex: 0,
            data: dataValue,
            zlevel: 1,
            barWidth: 20,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        //color: 'rgb(57,89,255,1)'
                        color: '#385FFC'
                    }, {
                        offset: 1,
                        //color: 'rgb(46,200,207,1)'
                        color: '#2FBED3'
                    }]),
                },
            },
        },
        {
            name: "背景",
            type: "bar",
            yAxisIndex: 1,
            barGap: '-100%',
            data: dataNum,
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: 'rgba(24,31,68,1)',
                    barBorderRadius: 30,
                }
            },
        }
    ]
};