var oldData = [{
        "RPT_DATE": "2020-05-01",
        "BRANCH_SOLUTION": 123.35,
        "BRANCH_COLLAR": 159.45
    },{
        "RPT_DATE": "2020-05-02",
        "BRANCH_SOLUTION": 253.35,
        "BRANCH_COLLAR": 452.45
    },{
        "RPT_DATE": "2020-05-03",
        "BRANCH_SOLUTION": 123.35,
        "BRANCH_COLLAR": 452.45
    },{
        "RPT_DATE": "2020-05-04",
        "BRANCH_SOLUTION": 345.35,
        "BRANCH_COLLAR": 234.45
    },{
        "RPT_DATE": "2020-05-05",
        "BRANCH_SOLUTION": 345.35,
        "BRANCH_COLLAR": 45.45
    },{
        "RPT_DATE": "2020-05-06",
        "BRANCH_SOLUTION": 56.35,
        "BRANCH_COLLAR": 569.45
    },{
        "RPT_DATE": "2020-05-07",
        "BRANCH_SOLUTION": 233.35,
        "BRANCH_COLLAR": 324.45
    },
];



let dateArr = [],
    typeArr = ["网点领现","网点解现"],
    dataset;
oldData.forEach((item) => {
    if (dateArr.indexOf(item.RPT_DATE) < 0) {
        dateArr.push(item.RPT_DATE);
    }
});

dataset = typeArr.map((tmp) => {
    return {
        name: tmp,
        stack: '',
        type: 'bar',
        data: []
    };
});

//BRANCH_SOLUTION   解现
//BRANCH_COLLAR     领现
for (var i = 0; i < dataset.length; i++) {
    for (var j = 0; j < oldData.length; j++) {
        for (var k = 0; k < dateArr.length; k++) {
            if (dataset[i].name == "网点解现" &&
                dateArr[k] == oldData[j].RPT_DATE) {
                dataset[i].data[k] = oldData[j].BRANCH_SOLUTION;
            }
            if (dataset[i].name == "网点领现" &&
                dateArr[k] == oldData[j].RPT_DATE) {
                dataset[i].data[k] = oldData[j].BRANCH_COLLAR;
            }
        }
    }
}

// dateArr = ["05-01", "05-02", "05-03", "05-04", "05-05", "05-06", "05-07", "05-08"];
// typeArr = ["网点领现", "网点解现"];
// dataset = [
//     { name: "网点领现", 
//         stack: "", 
//         type: "bar", 
//         data:  [1, 5, 5, 5, 1, 5, 5, 5] }, 
//     { name: "网点解现", 
//         stack: "", 
//         type: "bar", 
//         data:  [2, 6, 6, 6, 2, 6, 6, 6] }, 
//    ];
option = {
    title: {
        text: '一周网点领解现统计',
        subtext: '单位：万元',
        left: 'center',
        textStyle: {
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
        data: typeArr,
        bottom: 0,
        textStyle: {
            fontSize: 18
        }
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
    series: dataset
};