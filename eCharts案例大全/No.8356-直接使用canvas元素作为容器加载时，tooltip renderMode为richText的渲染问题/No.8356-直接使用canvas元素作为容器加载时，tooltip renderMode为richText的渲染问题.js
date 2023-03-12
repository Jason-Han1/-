option = {
   
    tooltip: {
        trigger: 'axis',
        renderMode: "richText", // 'auto' | 'html' | 'richText'
        formatter: function(params, ticket, callback) {
            let result = "";
            params.forEach(item => {
                result += item.marker+ item.seriesName + ":" + item.data + "\n";
            });
            return result;
        },
    },
    grid: {
        show: true,
        backgroundColor: "#fff", 
        borderColor: "#000", 
        borderWidth: 2,
    },
   
    xAxis: {
        type: 'category',
        boundaryGap: false,
        splitLine: {
            show: true,
            lineStyle: {
                color: ["#000"],
                width: 1,
                type: "dotted",
            },
        },
        data: ["2020/3/16 10:00", "2020/3/16 10:10", "2020/3/16 10:15", 
        "2020/3/16 10:20", "2020/3/16 10:25", "2020/3/16 10:30", 
        "2020/3/16 10:35"],
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color: ["#000"],
                width: 1,
                type: "dotted",
            },
        },
    },
    series: [
        {
                    name: "tagA",
                    type: "line",
                    data: [0, 15, 20, 5, 23, 20, 10],
                },
                {
                    name: "tagB",
                    type: "line",
                    data: [22, 32, 31, 24, 30, 33, 23],
                },
                {
                    name: "tagC",
                    type: "line",
                    data: [50, 56, 45, 49, 59, 40, 51],
                },
                {
                    name: "tagD",
                    type: "line",
                    data: [62, 72, 61, 74, 80, 63, 72],
                },
                {
                    name: "tagE",
                    type: "line",
                    step: "end",
                    data: [80, 90, 80, 80, 90, 80, 90],
                },
    ]
};
