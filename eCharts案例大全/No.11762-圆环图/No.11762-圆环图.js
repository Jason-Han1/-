const colors = ['rgba(39, 200, 241, 1)', 'rgba(0, 158, 255, 1)', 'rgba(0, 71, 255, 1)'];
var data = [{
        value: 55,
        name: '三类点'
    },
    {
        value: 65,
        name: '二类点'
    },
    {
        value: 75,
        name: '一类点'
    }
].sort(function(a, b) {
    return a.value > b.value
});
let seriesBar = [];
data.forEach((d, i) => {
    seriesBar.push({
        value: d.value,
        itemStyle: {
            color: colors[i]
        }
    })
})


option = {
    backgroundColor: '#000',
    polar: {
        radius: 268, // 10条数据的时候 190
    },
    angleAxis: {
        show: false,
        min: function(value) {
            return 5
        },
        max: function(value) {
            return value.max * 9 / 7;
        }
    },
    radiusAxis: {
        type: 'category',
        min: function(value) {
            return -1
        },
        max: function(value) {
            return value.max;
        },
        axisLabel: {
            interval: 0,
            color: function(value, index) {
                return colors[index - 1];
            },
            fontSize: 18,
            fontFamily: 'PingFangSC-Regular',
            fontWeight: 400
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false,
            alignWithLabel: true
        },
        splitLine: {
            show: false
        },
        data: [...data.map(d => d.name)],
    },
    series: [{
            type: 'bar',
            coordinateSystem: 'polar',
            barWidth: 20, // 10条数据的时候 10
            itemStyle: {
                color: '#41a0ff'
            },
            data: seriesBar
        },
        {
            type: "custom",
            coordinateSystem: 'polar',
            renderItem: function(params, api) {
                var values = [api.value(0), api.value(1)];
                var coord = api.coord(values);
                return {
                    type: 'text',
                    position: [3 * Math.sin(coord[3]), 3 * Math.cos(coord[3])],
                    rotation: coord[3] + Math.PI / 2,
                    origin: [coord[0], coord[1]],
                    style: {
                        text: api.value(1) + '%',
                        fill: colors[params.dataIndex],
                        fontSize: 18,
                        fontFamily: 'PingFangSC-Regular',
                        fontWeight: 400,
                        textAlign: "right",
                        textVerticalAlign: "middle",
                        x: coord[0],
                        y: coord[1]
                    }
                };
            },
            data: data
        }
    ]
};