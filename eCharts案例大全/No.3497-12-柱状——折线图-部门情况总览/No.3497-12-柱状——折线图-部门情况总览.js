var getname =  ['机械', '电气', '建筑', '工管', '教育','心理','政法',''];
var getvalue =[4,2,3,6,5,4,8];
var getvalue1 = [8,2,3,8,6,3,5];
var age = [45,55,35,42,60,56,42];



var getname1 = ['男','女'];
var getvalue3 = [32,35];

var data = [];
for(var i = 0;i<getname.length;i++){
	data.push({name:getname1[i],value:getvalue3[i]})
}
//计算最大值  
function calMax(arr) {
    let max = 0;
    arr.forEach((el) => {
        el.forEach((el1) => {
            if (!(el1 === undefined || el1 === '')) {
                if (max < el1) {
                    max = el1;
                }
            }
        })
    })
    let maxint = Math.ceil(max / 9.5);
    //不让最高的值超过最上面的刻度    
    let maxval = maxint * 10;
    //让显示的刻度是整数    
    return maxval;
}

var sumData = [];
sumData= sumData.concat(getvalue).concat(getvalue1);
var max = Math.ceil((calMax([sumData])) / 1) * 1;

var option = {
    grid: {
        top: 65,
        bottom: 90,
        left: 40,
        right: 20
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: '{b0}<br/>{a0}: {c0}人<br/>{a1}: {c1}人',
    },
    legend: {
        data: ['攻读博士','攻读硕士','平均年龄'],
        right: '20',
        top: '10',
        itemGap: 30,
        itemWidth: 14,
        itemHeight: 14,
        textStyle: {
            fontSize: '14',
            color: '#666',
        },

    },
    xAxis: [{
        data: getname,
        axisLabel: {
            margin: 10,
            color: '#656565',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#333333',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [
        {
        type: 'value',
        min: 0,
        max: max, // 计算最大值
        // interval: 20, //  平均分为5份
        name: '人',
        nameTextStyle: {
            color: '#666666',
            fontSize: 13,
            padding: [0, 0, 0, 70]
        },
        axisLabel: {
            formatter: function(value) {
                num = value
                if (num && num != 'undefined' && num != 'null') {
                    let numS = num;
                    numS = numS.toString();
                    numS = numS.replace(/,/gi, '');
                    return numS;
                } else {
                    return num;
                }
            },
            color: '#656565',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#333333',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(209,209,209,.5)',
            }
        }
    },  {
            type: 'value',
            name: '岁',
            min: 20,
            max: 70,
            interval: 10,
            axisLabel: {
                formatter: '{value}',
            },
        },],
    series: [
	{
        name: "攻读博士",
        type: 'bar',
        data: getvalue,
        barWidth: '15px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#5CBFFF'
                }, {
                    offset: 1,
                    color: '#5997FF'
                }], false),
                barBorderRadius: [4, 4, 0, 0],
            }
        },
    },
	{
        name: "攻读硕士",
        type: 'bar',
        data: getvalue1,
        barWidth: '15px',
        itemStyle: {
            normal: {
                color: '#f7af5c',
                barBorderRadius: [4, 4, 0, 0],
            }
        },
    },{
            name: '平均年龄',
            type: 'line',
            yAxisIndex: 1,
            data: age,
            // smooth: true,
            // symbol: 'circle', //数值点设定为实心点
            symbolSize: 10, // 折线的点的大小
            itemStyle: {
                normal: {
                    color: '#05C398', //点的颜色
                    lineStyle: {
                        color: '#05C398', //线的颜色
                        width: 5, // 折线图线条粗细设置
                    },
                },
            },
        },]
};
return option;
