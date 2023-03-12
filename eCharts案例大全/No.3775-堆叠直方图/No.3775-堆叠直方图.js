option = {
    xAxis: {
        type: 'time',
        axisLabel: {
            formatter(value, index) {
              let d = new Date(value);
              return d.getFullYear() + "-" +
              (d.getMonth() + 1) + "-" +
              d.getDate();
            },
        },
        boundaryGap: false
    },
    yAxis: {
        type: 'value',
        min:(value)=>{
            return value.min-100;
        },
        max: (value)=>{
            return value.max;
        },
        boundaryGap: [0, '30%']
    },
    legend:{
        data: ["test", "test1"]
    },
    series: [
        {
        type: 'custom',
        name: "test",
        lineStyle: {
            color: 'red',
            width: 5
        },
        markLine: {
            symbol: ['none', 'none'],
            label: {
                show: false
            },
            data: [{
                    xAxis: 1
                },
                {
                    xAxis: 2
                },
                {
                    xAxis: 3
                },
                {
                    xAxis: 5
                },
                {
                    xAxis: 7
                }
            ]
        },
        renderItem: function renderItem(params, api) {
            var yValue = api.value(1);
            var start = api.coord([api.value(0), yValue]);
            var size = api.size([new Date(api.value(2)) - new Date(api.value(0)), 100]);
            var style = api.style();
        
            return {
                type: 'rect',
                shape: {
                    x: start[0],
                    y: start[1],
                    width: size[0],
                    height: size[1]
                },
                style: style
            };
        },
        label: {
            show: true,
        },
        data: [
            ['2019/10/10', 200,'2019/10/11'],
            ['2019-10-11', 560,'2019/10/12'],
            ['2019-10-12', 750,'2019/10/13'],
            ['2019-10-13', 580,'2019/10/14'],
            ['2019-10-14', 250,'2019/10/15'],
            ['2019-10-15', 300,'2019/10/16'],
            ['2019-10-16', 450,'2019/10/17'],
            ['2019-10-17', 300,'2019/10/18'],
            ['2019-10-18', 200,'2019/10/19']
        ]
    },
    {
        type: 'custom',
        name: "test1",
        lineStyle: {
            color: 'blue',
            width: 5
        },
        label: {
            show: true,
        },
        renderItem: function renderItem(params, api) {
            var yValue = api.value(1);
            var start = api.coord([api.value(0), yValue]);
            var size = api.size([new Date(api.value(2)) - new Date(api.value(0)), 100]);
            var style = api.style();
        
            return {
                type: 'rect',
                shape: {
                    x: start[0],
                    y: start[1],
                    width: size[0],
                    height: size[1]
                },
                style: style
            };
        },
        data: [
            ['2019/10/10', 100,'2019/10/11'],
            ['2019-10-11', 460,'2019/10/12'],
            ['2019-10-12', 650,'2019/10/13'],
            ['2019-10-13', 480,'2019/10/14'],
            ['2019-10-14', 150,'2019/10/15'],
            ['2019-10-15', 200,'2019/10/16'],
            ['2019-10-16', 350,'2019/10/17'],
            ['2019-10-17', 200,'2019/10/18'],
            ['2019-10-18', 100,'2019/10/19']
        ]
    }
    ]
};