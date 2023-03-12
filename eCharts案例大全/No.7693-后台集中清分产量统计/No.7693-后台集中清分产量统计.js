let oldData = [{
        "clrDate": "05-01",
        "amount": 1,
        "currencyType": "完整券",
        "currencyCode": "100元流通券"
    },
    {
        "clrDate": "05-01",
        "amount": 2,
        "currencyType": "完整券",
        "currencyCode": "ATM专用钞"
    },
    {
        "clrDate": "05-01",
        "amount": 3,
        "currencyType": "完整券",
        "currencyCode": "硬币"
    },
    {
        "clrDate": "05-01",
        "amount": 4,
        "currencyType": "残损券",
        "currencyCode": "残损券"
    },
    {
        "clrDate": "05-02",
        "amount": 5,
        "currencyType": "完整券",
        "currencyCode": "100元流通券"
    },
    {
        "clrDate": "05-02",
        "amount": 6,
        "currencyType": "完整券",
        "currencyCode": "ATM专用钞"
    },
    {
        "clrDate": "05-02",
        "amount": 7,
        "currencyType": "完整券",
        "currencyCode": "硬币"
    },
    {
        "clrDate": "05-02",
        "amount": 8,
        "currencyType": "残损券",
        "currencyCode": "残损券"
    },
    {
        "clrDate": "05-03",
        "amount": 5,
        "currencyType": "完整券",
        "currencyCode": "100元流通券"
    },
    {
        "clrDate": "05-03",
        "amount": 6,
        "currencyType": "完整券",
        "currencyCode": "ATM专用钞"
    },
    {
        "clrDate": "05-03",
        "amount": 7,
        "currencyType": "完整券",
        "currencyCode": "硬币"
    },
    {
        "clrDate": "05-03",
        "amount": 8,
        "currencyType": "残损券",
        "currencyCode": "残损券"
    },
    {
        "clrDate": "05-04",
        "amount": 5,
        "currencyType": "完整券",
        "currencyCode": "100元流通券"
    },
    {
        "clrDate": "05-04",
        "amount": 6,
        "currencyType": "完整券",
        "currencyCode": "ATM专用钞"
    },
    {
        "clrDate": "05-04",
        "amount": 7,
        "currencyType": "完整券",
        "currencyCode": "硬币"
    },
    {
        "clrDate": "05-04",
        "amount": 8,
        "currencyType": "残损券",
        "currencyCode": "残损券"
    },
    {
        "clrDate": "05-05",
        "amount": 1,
        "currencyType": "完整券",
        "currencyCode": "100元流通券"
    },
    {
        "clrDate": "05-05",
        "amount": 2,
        "currencyType": "完整券",
        "currencyCode": "ATM专用钞"
    },
    {
        "clrDate": "05-05",
        "amount": 3,
        "currencyType": "完整券",
        "currencyCode": "硬币"
    },
    {
        "clrDate": "05-05",
        "amount": 4,
        "currencyType": "残损券",
        "currencyCode": "残损券"
    },
    {
        "clrDate": "05-06",
        "amount": 5,
        "currencyType": "完整券",
        "currencyCode": "100元流通券"
    },
    {
        "clrDate": "05-06",
        "amount": 6,
        "currencyType": "完整券",
        "currencyCode": "ATM专用钞"
    },
    {
        "clrDate": "05-06",
        "amount": 7,
        "currencyType": "完整券",
        "currencyCode": "硬币"
    },
    {
        "clrDate": "05-06",
        "amount": 8,
        "currencyType": "残损券",
        "currencyCode": "残损券"
    },
    {
        "clrDate": "05-07",
        "amount": 5,
        "currencyType": "完整券",
        "currencyCode": "100元流通券"
    },
    {
        "clrDate": "05-07",
        "amount": 6,
        "currencyType": "完整券",
        "currencyCode": "ATM专用钞"
    },
    {
        "clrDate": "05-07",
        "amount": 7,
        "currencyType": "完整券",
        "currencyCode": "硬币"
    },
    {
        "clrDate": "05-07",
        "amount": 8,
        "currencyType": "残损券",
        "currencyCode": "残损券"
    },
    {
        "clrDate": "05-08",
        "amount": 5,
        "currencyType": "完整券",
        "currencyCode": "100元流通券"
    },
    {
        "clrDate": "05-08",
        "amount": 6,
        "currencyType": "完整券",
        "currencyCode": "ATM专用钞"
    },
    {
        "clrDate": "05-08",
        "amount": 7,
        "currencyType": "完整券",
        "currencyCode": "硬币"
    },
    {
        "clrDate": "05-08",
        "amount": 8,
        "currencyType": "残损券",
        "currencyCode": "残损券"
    }
];

let dateArr = [],
    currentTypeArr = [],
    currencyCodeArr = [],
    seriesArr;

oldData.forEach((item) => {
    if (dateArr.indexOf(item.clrDate) < 0) {
        dateArr.push(item.clrDate);
    }
    if (currentTypeArr.indexOf(item.currencyType) < 0) {
        currentTypeArr.push(item.currencyType);
    }
    if (currencyCodeArr.indexOf(item.currencyCode) < 0) {
        currencyCodeArr.push(item.currencyCode);
    }
});


seriesArr = currencyCodeArr.map((currencyCode) => {
    return {
        name: currencyCode,
        stack: '',
        type: 'bar',
        data: []
    };
});


for (var i = 0; i < seriesArr.length; i++) {
    if (seriesArr[i].name == '残损券') {
        seriesArr[i].stack = '残损券';
    } else {
        seriesArr[i].stack = '完整券';
    }
    for (var j = 0; j < oldData.length; j++) {
        for (var k = 0; k < dateArr.length; k++) {
            if (seriesArr[i].name == oldData[j].currencyCode &&
                seriesArr[i].stack == oldData[j].currencyType &&
                dateArr[k] == oldData[j].clrDate) {
                //console.log(i+'-'+j+'-'+k);
                seriesArr[i].data[k] = oldData[j].amount;
            }
        }
    }
}
/*
[ {
    name: "100元流通券",
    stack: "完整券",
    type: "bar",
    data: Array[1, 5, 5, 5, 1, 5, 5, 5]
}, {
    name: "ATM专用钞",
    stack: "完整券",
    type: "bar",
    data: Array[2, 6, 6, 6, 2, 6, 6, 6]
}, {
    name: "硬币",
    stack: "完整券",
    type: "bar",
    data: Array[3, 7, 7, 7, 3, 7, 7, 7]
}, {
    name: "残损券",
    stack: "残损券",
    type: "bar",
    data: Array[4, 8, 8, 8, 4, 8, 8, 8]
}]
*/
option = {
    title: {
        text: '后台集中清分产量统计',
        subtext: '单位：万元',
        top: '0',
        left: '10%',
        textStyle: {
            color: '#000',
            align: 'center',
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: currencyCodeArr,
        right:'5%' 
    },
    bottom: '3%',
    grid: {
        left: '3%',
        right: '4%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: dateArr
    }],
    yAxis: [{
        type: 'value'
    }],
    series: seriesArr
};