var titleStyle = {
    fontSize: 14
};
var subjectsData = {
    "yearMonth": "2018年1-7月",
    "xData": [
        "指标1",
        "指标2",
        "指标3",
        "指标4",
        "指标5",
        "指标6",
        "指标7",
        "指标8",
        "指标9",
        "指标10",
        "指标11",
        "指标12",
        "指标13",
        "指标14",
        "指标15",
        "指标16"
    ],
    "yData": [74756, -5424, -19416, 2558, 615, 7997, -15708, -29782, 2848, -7974, -5777, -7055, -4145, 13120, 6490, 4571]
}

var myJson = [];
var updata = [];
var downdata = [];
var auxdata = []; //辅助1的数据，存放每个堆子的总数
var auxdataDown = []; //支出的辅助数据，当堆子跨y轴的正负区域的时候做的辅助
var auxdataUp = []; //支出的辅助数据，当堆子跨y轴的正负区域的时候做的辅助
formatStackData(subjectsData, myJson, updata, downdata, auxdata, auxdataDown, auxdataUp)

option = {
    title: {
        text: subjectsData.yearMonth + '财务费用',
        left: 'center',
        textStyle: titleStyle
    },
    toolbox: {
        feature: {
            saveAsImage: {
                show: true
            }
        }
    },
    tooltip: { //提示框组件
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            var tar;
            var tar2;
            if (params[3].value != '-') {
                tar = params[3]; //收入
            } else {
                tar = params[4]; //支出
            }
            var str;
            for (var i = 0; i < myJson.length; i++) {
                if (tar.name === myJson[i].xData) {
                    str = Math.abs(tar.value) + Math.abs(myJson[i].auxdataDown) + Math.abs(myJson[i].auxdataUp);
                }
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + str;
        }
    },
    legend: {
        data: ['收入', '支出'],
        selectedMode: false, //禁用点击图表改变显示状态
        left: 10,
        top: 18
    },
    grid: {
        left: '1%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        axisLabel: {
            rotate: 40
        },
        data: subjectsData.xData
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: false
        }
    },
    series: [{
            name: '辅助', //辅助1是总量数据，将主要柱状图按堆叠位置开始展示
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    show: false
                }
            },
            data: auxdata
        },
        {
            name: '支出辅助', //支出辅助是当支出跨越y轴的正负轴的时候做的辅助
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: '#FF0033'
                },
                emphasis: {
                    show: false
                }
            },
            data: auxdataDown
        },
        {
            name: '收入辅助', //收入辅助是当收入跨越y轴的正负轴的时候做的辅助
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: '#33CC33'
                },
                emphasis: {
                    show: false
                }
            },
            data: auxdataUp
        },
        {
            name: '收入',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: '#33CC33'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: function(params) {
                        return formatNormal(params, myJson);
                    }
                }
            },
            data: updata
        },
        {
            name: '支出',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: '#FF0033'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'bottom',
                    formatter: function(params) {
                        return formatNormal(params, myJson);
                    }
                }
            },
            data: downdata
        }
    ]
};
//构造各个指标的数据
function formatStackData(subjectsData, myJson, updata, downdata, auxdata, auxdataDown, auxdataUp) {
    var myData = subjectsData.yData;
    var xData = subjectsData.xData;
    var sum = 0;
    for (var i = 0; i < myData.length; i++) {
        var sign = sum + myData[i];
        if (sign > 0) {
            if (myData[i] > 0) {
                if (sum < 0) {
                    //这种情况的时候柱子要从负数跨到正数，收入的时候会出现的情况，所以是收入辅助存放sum，其余辅助存放0
                    updata.push(sign);
                    auxdataUp.push(sum);
                    auxdataDown.push(0);
                    auxdata.push(0);
                } else {
                    updata.push(myData[i]);
                    auxdataUp.push(0);
                    auxdataDown.push(0);
                    auxdata.push(sum);
                }
                downdata.push('-');
            } else {
                auxdata.push(sign);
                updata.push('-');
                downdata.push(Math.abs(myData[i]));
                auxdataDown.push(0);
                auxdataUp.push(0);
            }
        } else {
            if (myData[i] > 0) {
                auxdata.push(sign);
                updata.push(-myData[i]);
                downdata.push('-');
                auxdataDown.push(0);
                auxdataUp.push(0);
            } else {
                updata.push('-');
                if (sum > 0) {
                    //这种情况的时候柱子要从正数跨到负数，支出数据的情况，所以这时候是支出辅助存放sum，其余辅助存放0
                    downdata.push(sign);
                    auxdataDown.push(sum);
                    auxdataUp.push(0);
                    auxdata.push(0);
                } else {
                    downdata.push(myData[i]);
                    auxdataDown.push(0);
                    auxdataUp.push(0);
                    auxdata.push(sum);
                }
            }
        }
        sum = sum + myData[i];

        //将各个分离的指标整理成json放入myJosn中
        var a = {
            xData: xData[i],
            auxdata: auxdata[i],
            auxdataUp: auxdataUp[i],
            auxdataDown: auxdataDown[i],
            updata: updata[i],
            downdata: downdata[i]
        };
        myJson.push(a);
    }
}
//控制数字显示的值
function formatNormal(params, myJson) {
    var str;
    for (var i = 0; i < myJson.length; i++) {
        if (params.name === myJson[i].xData) {
            str = Math.abs(params.value) + Math.abs(myJson[i].auxdataDown) + Math.abs(myJson[i].auxdataUp);
        }
    }
    return str;
}