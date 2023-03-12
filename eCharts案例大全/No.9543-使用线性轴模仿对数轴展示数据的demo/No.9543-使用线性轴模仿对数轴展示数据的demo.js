let chartData = [0.003, 2000, 80000, 4, 19, 33, 0];

let logBase = 10;

let max = Math.max(...chartData);

let min = Math.min(...chartData.filter(e => e > 0));

let dMax = 0;

let dMin = 0;

while (Math.pow(logBase, dMax) <= max) {
    dMax++;
}

while (Math.pow(logBase, dMin) >= min && dMin > -10) {
    dMin--;
}

let interval = logBase / Math.abs(dMax);

option = {
    tooltip: {
        trigger: "axis",
        formatter: function(params) {
            let result = params[0].name + "</br>";
            params.forEach(function(item) {
                result += item.marker + " " + item.seriesName + " : " + chartData[item.dataIndex] + "</br>";
            });
            return result;
        }
    },
    xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    yAxis: [{
        type: "value",
        max: logBase + interval * Math.abs(dMin),
        interval: interval,
        min: 0,
        axisLabel: {
            formatter: (e) => {
                if (e === 0) return 0;
                return Math.pow(logBase, (e - interval * Math.abs(dMin)) / interval);
            }
        },
    }],
    series: [{
            data: chartData.map(e => {
                if (e !== 0) {
                    return Math.log(e) / Math.log(logBase) * interval + interval * Math.abs(dMin);
                } else {
                    return 0;
                }
            }),
            type: "line",
            name: "line"
        },
        {
            data: chartData.map(e => {
                if (e !== 0) {
                    return Math.log(e) / Math.log(logBase) * interval + interval * Math.abs(dMin);
                } else {
                    return 0;
                }
            }),
            type: "bar",
            name: "bar"
        }
    ]
};