var data = [{
    name: "名称一",
    value: 45
}, {
    name: "名称二",
    value: 25
}, {
    name: "名称三",
    value: 19
}, {
    name: "名称四",
    value: 11
}];

option = {
    color: ["#1fe39c", "#39bdee", "#edab2d", "#3eece6"],
    tooltip: {
        trigger: 'item',
        padding: [10, 10],
        formatter: function(params) {
            var str = params.marker + params.name + "</br>" +
                "占比：" + params.value + "%";
            return str;
        }
    },
    legend: {
        orient: 'vertical',
        left: '315px',
        top: 'middle',
        icon: 'circle',
        itemGap: 30,
        formatter: function(name) {
            var arr = []
            $.each(data, function(i, e) {
                if (e.name == name) {
                    arr.push(e)
                }
            });
            console.log(arr)
            return "{name|" + arr[0].name + "}" + "{value|" + arr[0].value + "%}";
        },
        textStyle: {
            rich: {
                name: {
                    fontSize: 16,
                    color: '#333',
                    width: 120
                },
                value: {
                    width: 50,
                    fontSize: 16,
                    color: '#333',
                    align: 'right'
                }
            }
        }
    },
    series: [{
        type: 'pie',
        center: ['152px', '50%'],
        radius: ['74px', '110px'],
        label: {
            show: false
        },
        data: data
    }]
};