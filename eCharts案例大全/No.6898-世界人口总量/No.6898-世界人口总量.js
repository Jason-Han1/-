option = {
    title: {
        text: "世界人口总量",
        subtext: "数据来自网络"
    },
    tooltip: {
        trigger: "axis"
    },
    legend: {
        data: ["销量万量"]
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: true
            },
            magicType: {
                show: false,
                type: ["line", "bar"]
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    xAxis: [
        {
            type: "value",
            boundaryGap: [0, 0.01]
        }
    ],
    yAxis: [
        {
            type: "category",
            data: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"]
        }
    ],
    series: [
        {
            name: "销量万量",
            type: "bar",
            data: [1806, 1850, 1930, 2198, 2349, 2459, 2802, 2887, 2808, 2576]
        }
    ]
};