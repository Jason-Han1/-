var colors = ['#5b8ff9', '#5ad8a6', '#5d7092'];

var lineargroup = [
    {
        value: 60,
        name: '访客人数',
        oriname: '访客',
        number: 78756,
        color: ['rgba(91,143,249,0.6)', 'rgba(91,143,249,0)'],
        text1: '',
        value1: '',
        text2: '',
        value2: '',
    },
    {
        value: 40,
        name: '下单人数',
        oriname: '下单',
        number: 68756,
        color: ['rgba(90,216,166,0.5)', 'rgba(90,216,166,0)'],
        text1: '下单金额',
        value1: '81349.22',
        text2: '',
        value2: '',
    },
    {
        value: 20,
        name: '支付人数',
        oriname: '支付',
        number: 58756,
        color: ['rgba(93,112,146,0.4)', 'rgba(93,112,146,0)'],
        text1: '支付金额',
        value1: '15141.55',
        text2: '客单价',
        value2: '321',
    },
];
var data1 = [];
var data2 = [];
for (var i = 0; i < lineargroup.length; i++) {
    var obj1 = {
        value: lineargroup[i].value,
        num: lineargroup[i].number,
        name: lineargroup[i].oriname,
    };
    var obj2 = {
        value: lineargroup[i].value,
        name: lineargroup[i].name,
        data: lineargroup[i],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                    {
                        offset: 0,
                        color: lineargroup[i].color[0],
                    },
                    {
                        offset: 1,
                        color: lineargroup[i].color[1],
                    },
                ]),
                borderWidth: 0,
                opacity: 1,
            },
        },
    };
    data1.push(obj1);
    data2.push(obj2);
}
var option = {
    backgroundColor: '#ffffff',
    color: colors,
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
            top: '120',
            show: false,
            boundaryGap: false,
            inverse: true,
        },
    ],
    series: [
        {
            top: 0,
            type: 'funnel',
            height: '400',
            gap: 10,
            minSize: 150,
            left: '30%',
            width: '60%',
            label: {
                show: true,
                position: 'inside',
                fontSize: '14',
                formatter: function (d) {
                    var ins = d.name;
                    return ins;
                },
                rich: {
                    aa: {
                        padding: [8, 0, 6, 0],
                    },
                },
            },

            data: data1,
        },
        {
            top: 0,
            type: 'funnel',
            height: '400',
            gap: 10,
            minSize: 400,
            left: '12%',
            width: '45%',
            z: 2,
            label: {
                normal: {
                    color: '#333',
                    position: 'insideLeft',
                    padding: [11, 25],
                    formatter: function (d) {
                        console.log(d);

                        let ins =
                            '{aa|}' +
                            d.name +
                            '{aa|}' +
                            d.data.data.text1 +
                            '{aa|}' +
                            d.data.data.text2 +
                            '\n{bb|}' +
                            d.data.data.number +
                            '{bb|}' +
                            d.data.data.value1 +
                            '{bb|}' +
                            d.data.data.value2 +
                            '';
                        return ins;
                    },
                    rich: {
                        aa: {
                            align: 'left',
                            color: '#666',
                            fontSize: '12',
                            lineHeight: '30',
                            padding: [0, 20, 0, 0],
                        },
                        bb: {
                            align: 'left',
                            color: '#333',
                            fontSize: '12',
                            padding: [0, 25, 0, 0],
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
