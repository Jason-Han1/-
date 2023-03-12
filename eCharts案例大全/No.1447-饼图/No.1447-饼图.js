var data = [
    {
        name: '已处置',
        value: 20,
    },
    {
        name: '未处置',
        value: 3,
    },
   
];
var total = 23;

option = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}:{c}条',
    },
    color: ['#A0CE3A', '#31C5C0'],
    backgroundColor: '#000',
    title: {
        text: '总数',
        subtext: total,
        textStyle: {
            color: '#f2f2f2',
            fontSize: 40,
        },
        subtextStyle: {
            fontSize: 30,
            color: ['#ff9d19'],
        },
        x: 'center',
        y: 'center',
    },
    grid: {
        bottom: 150,
        left: 100,
        right: '10%',
    },
    legend: {
        orient: 'horizontal',
        bottom: '2%',
        textStyle: {
            color: '#f2f2f2',
            fontSize: 25,
        },
        formatter: function (value) {
            var name=value;
            data.map(function(item){
                if(item.name==value){
                    name=value+" "+item.value+"条"
                }
            })
            return name
        },
        icon: 'roundRect',
        data: data,
    },
    series: [
        // 主要展示层的
        {
            radius: ['30%', '40%'],
            center: ['50%', '50%'],
            type: 'pie',
            label: {
                normal: {
                    show: true,
                    formatter: function (param) {
                        return ((param.data.value / total) * 100).toFixed(2) + '%';
                    },
                    textStyle: {
                        fontSize: 30,
                    },
                    position: 'outside',
                },
                emphasis: {
                    show: true,
                },
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 30,
                    length2: 55,
                },
                emphasis: {
                    show: true,
                },
            },
            name: '类型占比',
            data: data,
        },
    ],
};
