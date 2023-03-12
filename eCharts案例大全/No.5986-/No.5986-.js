var getname = ['SCI', 'SSCI','EI','ISTP','AHCI','ISSHP','其他'];
var getvalue = [3222,2700,3397,3541,2000,2233,3397];
var getamount = [60.3,40,75.4,65.5,22.3,15.6,75.4];
var getorderCount = [4500,5000,11000,14000,15000,20000,20121];

var getname2 = ['SCI', 'SSCI','EI','ISTP','AHCI','ISSHP','其他'];
var getvalue2 = [3522,3200,3597,4041,2500,2733,3897];
var getamount2 = [65.3,35,82.4,72.5,45.3,20.6,80.4];
var getorderCount2 = [5000,6000,12000,16000,18000,23000,27121];


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
        name: '人均发表篇次',
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
        name: '人均发表篇次',
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
            return data[1]/1.2;
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
            return data[1]/1.2;
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