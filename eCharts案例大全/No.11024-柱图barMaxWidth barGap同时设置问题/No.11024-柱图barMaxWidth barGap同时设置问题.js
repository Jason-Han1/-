var xData = function() {
    var data = [];
    for (var i = 1; i < 10; i++) {
        data.push(i + "月份");
    }
    return data;
}();

option = {
    color:["#3fb1e3","#6be6c1"],
    "xAxis": [{
        "type": "category",
        "data": xData,
    }],
    "yAxis": [{
        "type": "value"

    }],
    "series": [{
            "name": "女",
            "type": "bar",
            "barMaxWidth": 65,
            "barGap": "-100%",
            "data": [
                709,
                1917,
                2455,
                2610,
                1719,
                1433,
                1544,
            1344,
               1545
            ],
        },

        {
            "name": "男",
            "type": "bar",
            "barMaxWidth": 65,
            "data": [
                327,
                1776,
                507,
                1200,
                800,
                482,
                204,
                344,
                545
            ]
        }
    ]
}