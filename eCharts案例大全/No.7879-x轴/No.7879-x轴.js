var posList = [
    'left', 'right', 'top', 'bottom',
    'inside',
    'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
    'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
];

app.configParameters = {
    rotate: {
        min: -90,
        max: 90
    },
    align: {
        options: {
            left: 'left',
            center: 'center',
            right: 'right'
        }
    },
    verticalAlign: {
        options: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
        }
    },
    position: {
        options: echarts.util.reduce(posList, function(map, pos) {
            map[pos] = pos;
            return map;
        }, {})
    },
    distance: {
        min: 0,
        max: 100
    }
};

app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function() {
        var labelOption = {
            normal: {
                rotate: app.config.rotate,
                align: app.config.align,
                verticalAlign: app.config.verticalAlign,
                position: app.config.position,
                distance: app.config.distance
            }
        };
        myChart.setOption({
            series: [{
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }]
        });
    }
};


var labelOption = {

};

let a1 = [{
        name: '单货1',
        value: 1,
        year: 2018
    },
    {
        name: '单货2',
        value: 2,
        year: 2018
    }
]

let a2 = [{
    name: '单货4',
    value: 4,
    year: 2019
}]

let a3 = [{
        name: '单货1',
        value: 5,
        year: 2020
    },
    {
        name: '单货2',
        value: 6,
        year: 2020
    },
    {
        name: '单货4',
        value: 7,
        year: 2020
    },
    {
        name: '单货3',
        value: 8,
        year: 2020
    },
]

let arr4 = [...a1, ...a2, ...a3];
let years = ['2018', '2019', '2020'];
let names = ['单货1', '单货2', '单货3', '单货4']

let arr = [];

years.forEach(item => {
    item = {
        name: item,
        type: 'bar',
        barGap: 0,
        label: labelOption,
        data: []
    }
    names.forEach((me, index) => {
        let find = arr4.find(so => {
            console.log(so, item, me)
            return so.name == me && so.year == item.name
        })
        if (find) {
            item.data.push(find.value)
        } else {
            item.data.push(0)
        }
    })
    arr.push(item)
})

console.log(arr)
option = {
    color: ['#003366', '#006699', '#4cabce', '#e5323e'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: years
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar', 'stack', 'tiled']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        data: ['单货1', '单货2', '单货3', '单货4']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: arr
};