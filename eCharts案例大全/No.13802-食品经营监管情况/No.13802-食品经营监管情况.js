var colors = ['#00BFFF',  '#8B7500'];

var xData = function() {
    var data = [];
    for (var i = 1; i < 13; i++) {
        data.push(i+'月');
    }
    return data;
}();
option = {
    title: {
        text: '食品经营监管情况',
        subtext: '食品销售违规企业趋势',
        textStyle:{
             fontSize: '15'
        }
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
       grid: {
        top:85,
    },   
    legend: {
        data:['违法违规企业数','违法违规企业环比率'],
        align: 'left',
        left: 10,
        top:50
    },
     "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#000'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
            textStyle:{
                fontSize:15
            }
        },
        "data": xData,
    }],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 1500,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} ',
                textStyle:{
                fontSize:20
            }
            }
        },
        {
            type: 'value',
            name: '',
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value} %',
                textStyle:{
                fontSize:20
            }
            }
        }
    ],
    series: [
        {name:'违法违规企业数',
            type:'bar',
           color: colors[0],
            barWidth : 30,
            data:[756,627,998,797,978,947,717,993,620,845,855,741]},
        {
        name:'违法违规企业环比率',
         color: colors[1],
         yAxisIndex: 1,
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:3,//折线宽度
                    },
                    opacity: 0.4
                }
            },
        data:[5,3,8,4,7,4,9,0,3,6,2,1]
    }]
};
