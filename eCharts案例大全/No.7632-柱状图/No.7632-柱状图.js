option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ["value_工具", "value_搜索", "value_电商", "value_社交", "value_视屏"]
    },
    grid: {
        bottom: 20,
        containLabel: true,
        left: "left",
        right: 20,
        width: "98%"
    },
    xAxis: [{
        max: 1,
        axisLabel: {
            formatter: (val) => {
                return val
            }
        }
    }],
    yAxis: {
        type: 'category',
        boundaryGap: true,
        data: ["产品考虑", "产品触达", "产品认知", "产品首选", "渠道费用"]
    },
    series: [
        {
        "type": "bar",
        "name": "value_工具",
        "data": ["0.1633","0.0542","0.1741","0.1339","0.2212"],
        "stack": "one"
    },
     {
        "type": "bar",
        "name": "value_搜索",
        "data": ["0.3184","0.2708","0.2996","0.2902","0.2902"],
        "stack": "one"
    },
    {
        "type": "bar",
        "name": "value_电商",
        "data": ["0.2612","0.2708","0.251","0.2902","0.1903"],
        "stack": "one"
    },
    {
        "type": "bar",
        "name": "value_社交",
        "data": ["0.0816","0.1792","0.1012","0.1071","0.3097"],
        "stack": "one"
    },
    {
        "type": "bar",
        "name": "value_视屏",
        "data": ["0.1755","0.225","0.1741","0.1786","0.177"],
        "stack": "one"
    },
     
    ]
};