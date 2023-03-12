app.title = '堆叠条形图';
var dataYaxis = [];
var dataData1 = [];
var dataData2 = [];
var dataA = [{
    id: 'cgId1',
    name: '项目1',
    all: 8970,
    value: 8351,
    flag: 8351 / 8970 * 100
}, {
    id: 'cgId2',
    name: '项目2',
    all: 8970,
    value: 8351,
    flag: 8351 / 8970 * 100
}, {
    id: 'cgId3',
    name: '项目3',
    all: 8970,
    value: 8351,
    flag: 8351 / 8970 * 100
}, {
    id: 'cgId4',
    name: '项目4',
    all: 8970,
    value: 8351,
    flag: 8351 / 8970 * 100
}, {
    id: 'cgId5',
    name: '项目5',
    all: 8970,
    value: 8351,
    flag: 8351 / 8970 * 100
}, {
    id: 'cgId6',
    name: '项目6',
    all: 8970,
    value: 8351,
    flag: 8351 / 8970 * 100
}, {
    id: 'cgId7',
    name: '项目7项目7项目7项目7项目7项目7',
    all: 8970,
    value: 8351,
    flag: 8351 / 8970 * 100
}, {
    id: 'cgId8',
    name: '项目8',
    all: 8970,
    value: 8351,
    flag: 8351 / 8970 * 100
}];
for (var i = 0; i < dataA.length; i++) {
    dataYaxis[i] = dataA[i].name;
    var obj1 = {};
    obj1.id = dataA[i].id;
    obj1.name = dataA[i].name + "投资额";
    obj1.value = dataA[i].value;
    obj1.flag = dataA[i].flag;
    dataData1[i] = obj1;
    var obj2 = {};
    obj2.id = dataA[i].id;
    obj2.name = dataA[i].name + "总额";
    obj2.value = dataA[i].all - dataA[i].value;
    obj2.valueAll = dataA[i].all;
    obj2.valueSmall = dataA[i].value;
    dataData2[i] = obj2;
};
console.log(dataYaxis);
option = {
    title: {
        text: '{gray|签订合同总额}{green|(万元)}',
        subtext: '/投资额',
        right: 5,
        top: 15,
        textStyle: {
            rich: {
                gray: {
                    color: '#00FFFF',
                    lineHeight: 10,
                    fontSize: 20,
                },
                green: {
                    color: '#aaa',
                    fontSize: 14,

                }
            }
        },
        subtextStyle: {
            color: '#009999',
            align: 'right',
            right: 5,
            fontSize: 20
        },
    },
    dataZoom: [
        {
            type: 'inside',
            disabled:true,
        },
        {
            show: true,
            yAxisIndex: 0,
            filterMode: 'empty',
            width: 30,
            botton:"10%",
            showDataShadow: false,
            right:'20',
            start:0,
            end:60,
        }
    ],
    grid: {
        left: '15%',
        right: '8%',
        bottom: '10%',
        containLabel: true,
        height: '80%',
    },
    xAxis: {
        type: 'value',
        axisLine: {
            symbol: ['none', 'arrow'],
            symbolSize: [10, 30],
        },

        axisTick: {
            show: false,
            lineStyle:{
                type:'dashed',
            }
        },
        axisLabel: {
            fontSize: 12,
            borderWidth: 20,
            
        },
    },
    yAxis: {
        type: 'category',
        data: dataYaxis,
        axisLine: {
            lineStyle: {
                type: 'dashed',
            },
        },
        axisLabel: {
            fontSize: 18,
            width: 200,
            height: 50,
            borderColor: "#000",
            borderWidth: 1,
            lineHeight: 50,
            margin: 50,
            rich: {
                a: {
                    color: 'red',
                    lineHeight: 10
                },
            }
        },
        axisTick: {
            show: false,
        },
    },
    series: [{
            name: '签订合同总额',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                color: '#00FFFF',
            },

            label: {
                show: true,
                position: 'insideRight',
                formatter: function(params, i) {
                    return "{green|" + params.data.flag + "} %";
                },
                color: '#000D0D',
                fontSize: 18,
                rich: {
                    green: {
                        fontSize: 22,
                        color: 'red'
                    }
                }
            },
            data: dataData1,

        },
        {
            name: '投资额',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                color: '#009999',
            },
            barMaxWidth: 50,
            label: {
                show: true,
                position: 'right',
                formatter: function(params, i) {
                    return "  {a|" + params.data.valueAll + "}\n /{b|" + params.data.valueSmall + "}"
                },
                color: '#000D0D',
                fontSize: 18,
                rich: {
                    a: {
                        fontSize: 16,
                        color: '#aaa'
                    },
                    b: {
                        fontSize: 16,
                        color: "#000"
                    }
                }
            },
            data: dataData2
        },
    ]
};