var data = {
    "code": 0,
    "msg": "",
    "data": {
        "list": [{
            "date": "2020-04-01",
            "value": 2492
        }, {
            "date": "2020-04-02",
            "value": 2423
        }, {
            "date": "2020-04-03",
            "value": 2357
        }, {
            "date": "2020-04-04",
            "value": 939
        }, {
            "date": "2020-04-05",
            "value": 678
        }, {
            "date": "2020-04-06",
            "value": 696
        }, {
            "date": "2020-04-07",
            "value": 2586
        }, {
            "date": "2020-04-08",
            "value": 2421
        }, {
            "date": "2020-04-09",
            "value": 2590
        }, {
            "date": "2020-04-10",
            "value": 2402
        }, {
            "date": "2020-04-11",
            "value": 923
        }, {
            "date": "2020-04-12",
            "value": 709
        }, {
            "date": "2020-04-13",
            "value": 2694
        }, {
            "date": "2020-04-14",
            "value": 2480
        }, {
            "date": "2020-04-15",
            "value": 2479
        }, {
            "date": "2020-04-16",
            "value": 2537
        }, {
            "date": "2020-04-17",
            "value": 2534
        }, {
            "date": "2020-04-18",
            "value": 982
        }, {
            "date": "2020-04-19",
            "value": 755
        }, {
            "date": "2020-04-20",
            "value": 2760
        }, {
            "date": "2020-04-21",
            "value": 2623
        }, {
            "date": "2020-04-22",
            "value": 2606
        }, {
            "date": "2020-04-23",
            "value": 2599
        }, {
            "date": "2020-04-24",
            "value": 2543
        }, {
            "date": "2020-04-25",
            "value": 860
        }, {
            "date": "2020-04-26",
            "value": 2289
        }, {
            "date": "2020-04-27",
            "value": 1261
        }, {
            "date": "2020-04-28",
            "value": 2578
        }, {
            "date": "2020-04-29",
            "value": 2552
        }, {
            "date": "2020-04-30",
            "value": 1815
        }],
        "dm": "idex.oa.com"
    }
}

// 判断日期是不是周末
function checkWeekend() {
    var startDate = $("input[name=begin_time]").val();
    var endDate = $("input[name=end_time]").val();
    var weekDays = 0; // 开始日期和结束日期之间相隔的周末天数
    var count = 0; // 循环次数
    if (startDate <= endDate) { // 开始日期必须小于结束日期，防止死循环
        var nextDate = startDate;
        while (nextDate != endDate) {
            nextDate = getNextDate(nextDate, 1);

            // 判断nextDate是否是周末，如果是周末则减去
            var day = new Date(nextDate).getDay(); //0-周日，6-周六
            if (day == 0 || day == 6) {
                weekDays++;
            }

            count++;
            if (count >= 180) { // 防止死循环
                break;
            }
        }
    }

    var day = $("input[name=day]").val();
    $("input[name=day]").val(day - weekDays); // 减去周末时间
}

option = {
    title: {
        text: 'idex'
    },
    xAxis: {
        data: data.data.list.map(t => t.date)
    },
    yAxis: {},
    series: [{
        type: 'line',
        data: data.data.list.map(t => t.value)
    }]
};