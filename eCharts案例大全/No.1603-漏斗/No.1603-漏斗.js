
var lineargroup = [
    {
        value: 60,
        name: '很玩噻',
        number: 30,
    },
    {
        value: 40,
        name: '哇塞',
        number: 25,
    },
    {
        value: 20,
        name: '非常哇塞',
        number: 10,
    },
];
var data1 = [];
var data2 = [];
for (var i = 0; i < lineargroup.length; i++) {
    var obj1 = {
        value: lineargroup[i].value,
    };
    var obj2 = {
        data: lineargroup[i],
        itemStyle: {
            normal: {
                color: '#05165E',
                borderWidth: 0,
                opacity: 1,
            },
        },
    };
    data1.push(obj1);
    data2.push(obj2);
}
var option = {
    color: ['#EF6F59', '#46D150', '#416EFF'],
    tooltip: {
        trigger: 'item',
        formatter: '{b}-下单转换率: {c}%',
    },
    xAxis: [
        {
            show: false,
            inverse: true,
            position: 'top',
        },
    ],
    yAxis: [
        {
            position: 'left',
            top: '220',
            show: false,
            boundaryGap: false,
            inverse: true,
        },
    ],
    series: [
        {
            top: 20,
            type: 'funnel',
            sort: "ascending",
            height: '100',
            gap: 10,
            minSize:0,
            left: '10%',
            width: '14%',
            label: {
                show: true,
                position: 'inside',
                fontSize: '12',
                formatter: function (d) {
                    var ins = d.value+'%';
                    return ins;
                },
                rich: {
                    aa: {
                        color:'#000',
                        padding: [8, 0, 6, 0],
                    },
                },
            },

            data: data1,
        },
        {
            top: 20,
            type: 'funnel',
            sort: "ascending",
            height: '100',
            gap: 10,
            minSize: '100%',
            left: '17%',
            width: '45%',
            z: 1,
            label: {
                normal: {
                    color: '#fff',
                    position: 'insideRight',
                    padding: [11, 25],
                    formatter: function (d) {
                        let ins =
                            '{aa|}' +
                            d.data.data.name +
                            '{aa|}' +
                            d.data.data.number ;
                        return ins;
                    },
                    rich: {
                        aa: {
                            align: 'left',
                            color: '#fff',
                            fontSize: '12',
                            lineHeight: '30',
                            padding: [0, 180, 0, 0],
                        },
                        bb: {
                            align: 'right',
                            color: '#fff',
                            fontSize: '12',
                            padding: [0, 0, 0, 0],
                        },
                    },
                },
            },
            tooltip: {
                show: false,
            },
            data: data2,
        },
    ],
};

