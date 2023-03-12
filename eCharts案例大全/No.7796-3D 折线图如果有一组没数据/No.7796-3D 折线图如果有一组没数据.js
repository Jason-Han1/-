option = {
    tooltip: {
        //trigger : 'axis',
        formatter: function(params) {
            return "时间：" + params.data[0] + "<br/>数值：" + params.data[1] + "<br/>深度：" + params.data[2];
        }
    },
    backgroundColor: '#fff',
    visualMap: {
        show: false,
        dimension: 0,
        min: 0,
        max: 100,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
    },
    xAxis3D: {
        name: "时间",
        // type: 'value'
        data: ["2020-04-26 16:30", "2020-04-26 17:00", "2020-04-26 17:10", "2020-04-26 17:30", "2020-04-26 18:00", "2020-04-26 18:30", "2020-04-26 19:00"]
    },
    yAxis3D: {
        name: "数据",
        type: 'value',

    },
    zAxis3D: {
        name: "深度",
        type: 'value'

    },
    grid3D: {
        viewControl: {
            projection: 'orthographic'
        }
    },
    series: [{
            name: 'line1',
            type: 'line3D',

            data: [
                ["2020-04-26 16:30", "18.79", "0.23"],
                ["2020-04-26 17:00", "18.79", "0.23"],
                ["2020-04-26 17:10", "18.79", "0.23"],
                ["2020-04-26 17:30", "", ""],
                ["2020-04-26 18:00", "18.75", "0.23"],
                ["2020-04-26 18:30", "18.75", "0.23"],
                ["2020-04-26 19:00", "18.75", "0.23"]
            ],
            lineStyle: {
                width: 4
            }
        },
        {
            name: 'line2',
            type: 'scatter3D',
            data: [],
            symbolSize: 10, //点的大小
            itemStyle: {
                color: "rgba(255,0,0,0.8)",
                borderWidth: 3,
                borderColor: 'rgba(255,0,0,0.8)' //边框样式
            },

        },
    ]
}