var data = [{
    name: '课题组1',
    clas: 100,
    member: 10
}, {
    name: '课题组2',
    clas: 360.2,
    member: 40.9
}, {
    name: '课题组3',
    clas: 173.3,
    member: 30.0
}, {
    name: '课题组4',
    clas: 384.5,
    member: 500
}];

var nam = [];
var clas = [];
var member = [];

$.each(data, function(i, v) {
    nam.push(v.name);
    clas.push(v.clas);
    member.push(v.member);
});
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        data: ['member', 'clas']
    },
    xAxis: [{
        type: 'category',
        data: nam,
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [{
        type: 'value',
        name: 'member',
        min: 0,
        max: Math.max.apply(null, member) > Math.max.apply(null, clas) ? Math.max.apply(null, member) : Math.max.apply(null, clas)

    }, {
        type: 'value',
        name: 'clas',
        min: 0,
        max: Math.max.apply(null, clas),
        splitLine: {
            show: false
        }
    }],
    series: [{
        name: 'member',
        type: 'bar',
        data: member
    }, {
        name: 'clas',
        type: 'bar',
        data: clas
    }]
};
myChart.on('legendselectchanged', function(params) {
    console.log(params.selected)
    console.log(params.selected.member && params.selected.clas)
    if (params.selected.member && params.selected.clas) {
        var opt = myChart.getOption()
        opt.xAxis[0].data = nam;
        opt.series[0].data = member;
        opt.series[1].data = clas;
        myChart.setOption(opt);
    } else if (params.selected.member) { //对member排序
        var opt = myChart.getOption()
        opt.xAxis[0].data = sortData(data, 'member').name;
        opt.series[0].data = sortData(data, 'member').member;
        myChart.setOption(opt);
    } else if (params.selected.clas) {
        var opt = myChart.getOption()
        opt.xAxis[0].data = sortData(data, 'clas').name;
        opt.series[1].data = sortData(data, 'clas').clas;
        myChart.setOption(opt);
    }
});


function sortData(data, type) {
    var obj = {}
    obj['name'] = [];
    obj[type] = [];
    data.sort(function(a, b) {
        return a[type] - b[type];
    })

    $.each(data, function(i, v) {
        obj['name'].push(v.name);
        obj[type].push(v[type])
    });

    return obj;
}