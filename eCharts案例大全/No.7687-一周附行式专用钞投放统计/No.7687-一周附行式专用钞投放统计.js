let oldData = [{
        "RPT_DATE": "05-01",
        "CIRCULATION_NOTE": 1,
        "OPERATE_DEPARTMENT_NAME": "第一金库投放"
    },
    {
        "RPT_DATE": "05-01",
        "CIRCULATION_NOTE": 2,
        "OPERATE_DEPARTMENT_NAME": "第二金库投放"
    },
    {
        "RPT_DATE": "05-01",
        "CIRCULATION_NOTE": 3,
        "OPERATE_DEPARTMENT_NAME": "第三金库投放"
    },
    {
        "RPT_DATE": "05-02",
        "CIRCULATION_NOTE": 5,
        "OPERATE_DEPARTMENT_NAME": "第一金库投放"
    },
    {
        "RPT_DATE": "05-02",
        "CIRCULATION_NOTE": 6,
        "OPERATE_DEPARTMENT_NAME": "第二金库投放"
    },
    {
        "RPT_DATE": "05-02",
        "CIRCULATION_NOTE": 7,
        "OPERATE_DEPARTMENT_NAME": "第三金库投放"
    },
    {
        "RPT_DATE": "05-03",
        "CIRCULATION_NOTE": 5,
        "OPERATE_DEPARTMENT_NAME": "第一金库投放"
    },
    {
        "RPT_DATE": "05-03",
        "CIRCULATION_NOTE": 6,
        "OPERATE_DEPARTMENT_NAME": "第二金库投放"
    },
    {
        "RPT_DATE": "05-03",
        "CIRCULATION_NOTE": 7,
        "OPERATE_DEPARTMENT_NAME": "第三金库投放"
    },
   
    {
        "RPT_DATE": "05-04",
        "CIRCULATION_NOTE": 5,
        "OPERATE_DEPARTMENT_NAME": "第一金库投放"
    },
    {
        "RPT_DATE": "05-04",
        "CIRCULATION_NOTE": 6,
        "OPERATE_DEPARTMENT_NAME": "第二金库投放"
    },
    {
        "RPT_DATE": "05-04",
        "CIRCULATION_NOTE": 7,
        "OPERATE_DEPARTMENT_NAME": "第三金库投放"
    },
    
    {
        "RPT_DATE": "05-05",
        "CIRCULATION_NOTE": 1,
        "OPERATE_DEPARTMENT_NAME": "第一金库投放"
    },
    {
        "RPT_DATE": "05-05",
        "CIRCULATION_NOTE": 2,
        "OPERATE_DEPARTMENT_NAME": "第二金库投放"
    },
    {
        "RPT_DATE": "05-05",
        "CIRCULATION_NOTE": 3,
        "OPERATE_DEPARTMENT_NAME": "第三金库投放"
    },
    
    {
        "RPT_DATE": "05-06",
        "CIRCULATION_NOTE": 5,
        "OPERATE_DEPARTMENT_NAME": "第一金库投放"
    },
    {
        "RPT_DATE": "05-06",
        "CIRCULATION_NOTE": 6,
        "OPERATE_DEPARTMENT_NAME": "第二金库投放"
    },
    {
        "RPT_DATE": "05-06",
        "CIRCULATION_NOTE": 7,
        "OPERATE_DEPARTMENT_NAME": "第三金库投放"
    },
    {
        "RPT_DATE": "05-07",
        "CIRCULATION_NOTE": 5,
        "OPERATE_DEPARTMENT_NAME": "第一金库投放"
    },
    {
        "RPT_DATE": "05-07",
        "CIRCULATION_NOTE": 6,
        "OPERATE_DEPARTMENT_NAME": "第二金库投放"
    },
    {
        "RPT_DATE": "05-07",
        "CIRCULATION_NOTE": 7,
        "OPERATE_DEPARTMENT_NAME": "第三金库投放"
    },
    {
        "RPT_DATE": "05-08",
        "CIRCULATION_NOTE": 5,
        "OPERATE_DEPARTMENT_NAME": "第一金库投放"
    },
    {
        "RPT_DATE": "05-08",
        "CIRCULATION_NOTE": 6,
        "OPERATE_DEPARTMENT_NAME": "第二金库投放"
    },
    {
        "RPT_DATE": "05-08",
        "CIRCULATION_NOTE": 7,
        "OPERATE_DEPARTMENT_NAME": "第三金库投放"
    },
];



let dateArr = [],
    nameArr = [],
    dataset;

oldData.forEach((item) => {
    if (dateArr.indexOf(item.RPT_DATE) < 0) {
        dateArr.push(item.RPT_DATE);
    }
    if (nameArr.indexOf(item.OPERATE_DEPARTMENT_NAME) < 0) {
        nameArr.push(item.OPERATE_DEPARTMENT_NAME);
    }

});


dataset = nameArr.map((OPERATE_DEPARTMENT_NAME) => {
    return {
        name: OPERATE_DEPARTMENT_NAME,
        stack: "营运",
        type: "bar",
        data: []
    };
});

for (var i = 0; i < dataset.length; i++) {
    for (var j = 0; j < oldData.length; j++) {
        for (var k = 0; k < dateArr.length; k++) {
            if (dataset[i].name == oldData[j].OPERATE_DEPARTMENT_NAME &&
                dateArr[k] == oldData[j].RPT_DATE) {
                dataset[i].data[k] = oldData[j].CIRCULATION_NOTE;
            }
        }
    }
}


/*
dateArr = ["05-01", "05-02", "05-03", "05-04", "05-05", "05-06", "05-07", "05-08"];
nameArr = ["第一金库投放", "第二金库投放", "第三金库投放"];
dataset = [ { name: "第一金库投放", stack: "营运", data: [1, 5, 5, 5, 1, 5, 5, 5] }, 
            { name: "第二金库投放", stack: "营运", data: [2, 6, 6, 6, 2, 6, 6, 6] }, 
            { name: "第三金库投放", stack: "营运", data: [3, 7, 7, 7, 3, 7, 7, 7] }];
*/

option = {
    title: {
        text: '一周附行式专用钞投放统计',
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
        data: nameArr,
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