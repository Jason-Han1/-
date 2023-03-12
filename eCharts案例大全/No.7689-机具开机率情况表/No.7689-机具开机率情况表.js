var oldData = [{
        "RPT_DATE": "2020-05-01",
        "HIERARCHY": "异地",
        "POWERON_RATE": 45.34,
        "INTACT_RATE": 45.34
    },{
        "RPT_DATE": "2020-05-01",
        "HIERARCHY": "全行",
        "POWERON_RATE": 56.56,
        "INTACT_RATE": 23.34
    },{
        "RPT_DATE": "2020-05-01",
        "HIERARCHY": "上海地区",
        "POWERON_RATE": 98.34,
        "INTACT_RATE": 76.34
    },{
        "RPT_DATE": "2020-05-01",
        "HIERARCHY": "上海地区离行式",
        "POWERON_RATE": 78.34,
        "INTACT_RATE": 75.34
    },{
        "RPT_DATE": "2020-05-02",
        "HIERARCHY": "异地",
        "POWERON_RATE": 35.34,
        "INTACT_RATE": 98.34
    },{
        "RPT_DATE": "2020-05-02",
        "HIERARCHY": "全行",
        "POWERON_RATE": 34.34,
        "INTACT_RATE": 35.34
    },{
        "RPT_DATE": "2020-05-02",
        "HIERARCHY": "上海地区",
        "POWERON_RATE": 45.34,
        "INTACT_RATE": 36.34
    },{
        "RPT_DATE": "2020-05-02",
        "HIERARCHY": "上海地区离行式",
        "POWERON_RATE": 78.34,
        "INTACT_RATE": 87.34
    },{
        "RPT_DATE": "2020-05-03",
        "HIERARCHY": "异地",
        "POWERON_RATE": 56.34,
        "INTACT_RATE": 98.34
    },{
        "RPT_DATE": "2020-05-03",
        "HIERARCHY": "全行",
        "POWERON_RATE": 34.34,
        "INTACT_RATE": 23.34
    },{
        "RPT_DATE": "2020-05-03",
        "HIERARCHY": "上海地区",
        "POWERON_RATE": 45.34,
        "INTACT_RATE": 67.34
    },{
        "RPT_DATE": "2020-05-03",
        "HIERARCHY": "上海地区离行式",
        "POWERON_RATE": 54.34,
        "INTACT_RATE": 34.34
    },{
        "RPT_DATE": "2020-05-04",
        "HIERARCHY": "异地",
        "POWERON_RATE": 54.34,
        "INTACT_RATE": 98.34
    },{
        "RPT_DATE": "2020-05-04",
        "HIERARCHY": "全行",
        "POWERON_RATE": 33.4,
        "INTACT_RATE": 23.34
    },{
        "RPT_DATE": "2020-05-04",
        "HIERARCHY": "上海地区",
        "POWERON_RATE": 45.34,
        "INTACT_RATE": 67.34
    },{
        "RPT_DATE": "2020-05-04",
        "HIERARCHY": "上海地区离行式",
        "POWERON_RATE": 78.34,
        "INTACT_RATE": 34.34
    },{
        "RPT_DATE": "2020-05-05",
        "HIERARCHY": "异地",
        "POWERON_RATE": 89.34,
        "INTACT_RATE": 33.34
    },{
        "RPT_DATE": "2020-05-05",
        "HIERARCHY": "全行",
        "POWERON_RATE": 34.34,
        "INTACT_RATE": 98.34
    },{
        "RPT_DATE": "2020-05-05",
        "HIERARCHY": "上海地区",
        "POWERON_RATE": 55.34,
        "INTACT_RATE": 4.34
    },{
        "RPT_DATE": "2020-05-05",
        "HIERARCHY": "上海地区离行式",
        "POWERON_RATE": 78.34,
        "INTACT_RATE": 34.34
    },{
        "RPT_DATE": "2020-05-06",
        "HIERARCHY": "异地",
        "POWERON_RATE": 89.34,
        "INTACT_RATE": 98.34
    },{
        "RPT_DATE": "2020-05-06",
        "HIERARCHY": "全行",
        "POWERON_RATE": 93.34,
        "INTACT_RATE": 23.34
    },{
        "RPT_DATE": "2020-05-06",
        "HIERARCHY": "上海地区",
        "POWERON_RATE": 45.34,
        "INTACT_RATE": 67.34
    },{
        "RPT_DATE": "2020-05-06",
        "HIERARCHY": "上海地区离行式",
        "POWERON_RATE": 78.34,
        "INTACT_RATE": 99.34
    },{
        "RPT_DATE": "2020-05-07",
        "HIERARCHY": "异地",
        "POWERON_RATE": 89.34,
        "INTACT_RATE": 45.34
    },{
        "RPT_DATE": "2020-05-07",
        "HIERARCHY": "全行",
        "POWERON_RATE": 98.34,
        "INTACT_RATE": 87.34
    },{
        "RPT_DATE": "2020-05-07",
        "HIERARCHY": "上海地区",
        "POWERON_RATE": 45.34,
        "INTACT_RATE": 32.34
    },{
        "RPT_DATE": "2020-05-07",
        "HIERARCHY": "上海地区离行式",
        "POWERON_RATE": 45.34,
        "INTACT_RATE": 65.34
    }
];





let dateArr = [],
    hierarchyArr = [],
    dataset = {};

oldData.forEach((item) => {
    if (dateArr.indexOf(item.RPT_DATE) < 0) {
        dateArr.push(item.RPT_DATE);
    }
    if (hierarchyArr.indexOf(item.HIERARCHY) < 0) {
        hierarchyArr.push(item.HIERARCHY);
    }
});



dataset = hierarchyArr.map((HIERARCHY) => {
    return {
        name: HIERARCHY,
        type: 'line',
        stack: '',
        data: []
    };
});


for (var i = 0; i < dataset.length; i++) {
    for (var j = 0; j < oldData.length; j++) {
        for (var k = 0; k < dateArr.length; k++) {
            if (dataset[i].name == oldData[j].HIERARCHY &&
                dateArr[k] == oldData[j].RPT_DATE) {
                dataset[i].data[k] = oldData[j].POWERON_RATE;
            }
        }
    }
}
option = {
    title: {
        text: '机具开机率情况表',
        subtext: '单位：百分比',
        left: 'center'
    },
    legend: {
        bottom: 0,
        data: hierarchyArr
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: dateArr
    },
    yAxis: {
        type: 'value'
    },
    series: dataset
};

