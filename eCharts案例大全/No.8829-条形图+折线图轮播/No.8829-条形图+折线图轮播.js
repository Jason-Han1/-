option =
    // 第一个graph
    {
        backgroundColor: '#001c44',
        title: {
            show: false,
            text: '巴拉巴拉巴拉',
            textStyle: {
                fontSize: 14,
                color: '#ffffff'
            }
        },

        tooltip: { // 提示框组件
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['简易', '一般', '行政措施','环比率'],//, '环比率1', '环比率2', '环比率3'
            top: '18',
            textStyle: {
                fontSize: 14,
                color: '#ffffff'
            },
            selected: {
                '环比率2': false,
                '环比率3': false,
                '一般': false,
                '行政措施': false,
                //不想显示的都设置成false
            }/*,
            selectedMode: 'single' // 只显示一个图例的数据*/
        },
        grid: {
            left: '3%',
            right: '5%',
            bottom: '3%',
            containLabel: true,
            show: false // 网格边框是否显示，上和右边框 
        },
        toolbox: {
            feature: {
                dataView: {
                    show: false,
                    readOnly: false
                }, // 数据试图是否在控件中显示
                //magicType: {show: true, type: ['stack', 'tiled']},
                //restore: {show: true},
                saveAsImage: {
                    show: true
                }
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: true, // 坐标轴两边留白
            splitLine: { // 网格线 x轴对应的是否显示
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#ffffff'
                }
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },

        yAxis: [ // 双y坐标轴
            {
                name: '案件数',
                type: 'value',
                splitLine: { // 网格线 y轴对应的是否显示
                    show: false
                },
                axisLabel: {
                    formatter: '{value}'
                },
                axisLine: {
                    lineStyle: {
                        color: '#ffffff'
                    }
                }
            },
            {
                name: '环比率(%)',
                //nameLocation: 'start',
                splitLine: { // 网格线 y轴对应的是否显示
                    show: false
                },
                min: 0,
                max: 300, // growing rate upper limit
                type: 'value',
                //top:10,
                inverse: false,
                axisLine: {
                    lineStyle: {
                        color: '#ffffff'
                    }
                }
            }
        ],

        series: [{
                name: '简易',
                type: 'bar',
                color: '#00BFFF',
                data: [1741.9, 977, 1742.2, 1431.1, 1636.2, 1447, 1711.7, 1921.2, 2609.6, 3332.6, 3647.3, 2498.1]
            },
            {
                name: '一般',
                type: 'bar',
                color: '#DC143C',
                data: [2609, 1162.9, 2942.9, 5174.6, 5114.4, 5065.8, 3956.1, 3691.1, 4637.6, 4603.8, 6401.1, 4988.4]
            },
            {
                name: '行政措施',
                type: 'bar',
                color: 'green',
                data: [1609, 3162.9, 5942.9, 1174.6, 2114.4, 3065.8, 1956.1, 3691.1, 2637.6, 1603.8, 2401.1, 2988.4]
            },
            {
                name: '环比率1',
                type: 'line',
                yAxisIndex: 1, // yAxisIndex 1 表示第二个y轴，默认为0
                color: 'red',
                data: [19.8, 29, 38.9, 41.6, 12.6, 50.1, 31.1, 52.1, 17.7, 78.1, 25.5, 19.7]
            },
            {
                name: '环比率2',
                type: 'line',
                yAxisIndex: 1, // yAxisIndex 1 表示第二个y轴，默认为0
                color: 'blue',
                data: [49.8, 19, 68.9, 61.6, 12.6, 50.1, 31.1, 92.1, 77.7, 38.1, 75.5, 99.7]
            },
            {
                name: '环比率3',
                type: 'line',
                yAxisIndex: 1, // yAxisIndex 1 表示第二个y轴，默认为0
                color: 'orange',
                data: [15.8, 25, 65.9, 32.6, 11.6, 26.1, 15.1, 25.1, 22.7, 33.1, 3.5, 65.7]
            },
            {
                name: '环比率',
                type: 'line',
                yAxisIndex: 1, // yAxisIndex 1 表示第二个y轴，默认为0
                color: 'orange',
                data: []
            }
        ]
    };

let i = 0;
let j = 0;
setInterval(function() {
    var data = ['简易', '一般', '行政措施'];
    i=++i;
    var legendSelect = i % data.length;
    var legendUnSelect = i % data.length-1;
    if(legendUnSelect==-1){
        legendUnSelect = 2;
    }
    //alert("legendSelect="+i % data.length+",legendUnSelect="+legendUnSelect);
    myChart.dispatchAction({
        type: 'legendSelect',
        name: data[legendSelect]
    }); 
    myChart.dispatchAction({
        type: 'legendUnSelect',
        name: data[legendUnSelect]
    });
    
    var data2 = ['环比率1', '环比率2', '环比率3'];
    j=++j;
    var legendSelect1 = j % data2.length;
    var legendUnSelect1 = j % data2.length-1;
    if(legendUnSelect1==-1){
        legendUnSelect1 = 2;
    }
    myChart.dispatchAction({
        type: 'legendSelect',
        name: data2[legendSelect1]
    });
    myChart.dispatchAction({
        type: 'legendUnSelect',
        name: data2[legendUnSelect1]
    });
}, 4000);
 