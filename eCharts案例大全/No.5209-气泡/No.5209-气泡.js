//2010年
var getname = ['SCI', 'SSCI','EI','ISTP','AHCI','ISSHP','其他'];//期刊类别名称
var getvalue = [1811,868,320,208,190,120,100];//发表论文总数
var getamount = [1.8,1.0,0.65,0.52,0.33,0.25,0.11];//人均发表篇数
var getorderCount = [65000,45000,23000,10000,9000,74000,52121];//总被引用数

//2020年
var getname2 = ['SCI', 'SSCI','EI','ISTP','AHCI','ISSHP','其他'];//期刊类别名称
var getvalue2 =  [2811,1568,420,308,290,220,190];//发表论文总数
var getamount2 =  [2.3,1.2,0.95,0.82,0.73,0.35,0.18];//人均发表篇数
var getorderCount2 = [105000,90000,49000,34000,25000,20000,19121];//总被引用数


var datas = [];
for (var i = 0; i < getname.length; i++) {
    datas.push({
        name: getname[i],
        value: getvalue[i],
        amount: getamount[i],
        orderCount: getorderCount[i],
    })
}

var datas2 = [];
for (var i = 0; i < getname2.length; i++) {
    datas2.push({
        name: getname2[i],
        value: getvalue2[i],
        amount: getamount2[i],
        orderCount: getorderCount2[i],
    })
}

let packedDatas = packDatas(datas);
let packedDatas2 = packDatas2(datas2);

option = {
    grid: {
        top: 60,
        bottom: 40,
        left: 50,
        right: 30
    },
    legend: {
        data: ['2010','2020'],
        type: "scroll",
        right: '15',
        top: '10',
        itemGap: 25,
        itemWidth: 14,
        itemHeight: 14,
        textStyle: {
            fontSize: '13',
            color: '#656565',
        },

    },
    tooltip: {
        extraCssText: 'padding-right:8px;padding-left:8px;line-height:30px;background:rgba(255,255,255,1);box-shadow:1px 5px 20px 0px rgba(1,11,19,0.2);border-radius:6px;',
        textStyle: {
            fontSize: '13',
            color: '#656565',
        },
        formatter: function(obj) {
            var value = obj.value;
            return '<div style="padding-bottom: 0px;margin-bottom: 0px">' +
                '年份：' + obj.seriesName +
                '</div>' +
                '收录期刊：' + value[2] + '<br/>' +
                '总被引用次数：' + value[0] + '<br/>' +
                '人均发表篇次：' + value[1].toFixed(1) + '<br/>' +
                '发表论文总数：' + value[3] + '<br/>';
        }
    },
    xAxis: {
        splitLine: {
            show: false,
        },
        scale: true,
        type: 'value',
        name: '总被引篇次',
        nameTextStyle: {
            color: '#666666',
            fontSize: 13,
            padding: [0, 0, 30, -80]
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
    },
    yAxis: {
        name: '人均发表篇数',
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
                color: 'rgba(209,209,209,.25)',
            }
        }
    },

    series: [{
        name: '2010',
        symbolSize: function(data) {
            return data[1]*50/1.2;
        },
        itemStyle: {
            normal: {
                color: '#9CC8FF',
                borderColor: '#4B95F3',
                borderWidth: 2,
            }
        },
        data: packedDatas,
        type: 'scatter',
    }, {
        name: '2020',
        symbolSize: function(data) {
            return data[1]*50/1.2;
        },
        itemStyle: {
            normal: {
                color: '#FFD291',
                borderColor: '#F3B14B',
                borderWidth: 2,
            }
        },
        data: packedDatas2,
        type: 'scatter',
    }]
};

function packDatas(datas) {
    let packedDatas = datas.map((data) => {
        let name = data['name'];
        let dispathCount = data['orderCount'];
        let refs = data['amount'];
        let avt = data['value'];
        return [dispathCount, refs, name, avt ];
    });

    return packedDatas;
}
function packDatas2(datas2) {
    let packedDatas2 = datas2.map((data) => {
        let name = data['name'];
        let dispathCount = data['orderCount'];
        let refs = data['amount'];
        let avt = data['value'];
        return [dispathCount, refs, name, avt ];
    });

    return packedDatas2;
}
//return option; 