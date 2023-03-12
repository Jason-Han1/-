var getname = ['博士', '硕士', '学士'];

var getvalue = [140, 125, 118];

var getbl = [40, 30, 18, 12];

var data = [];

for (var i = 0; i < getname.length; i++) {
    data.push({ name: getname[i], value: getvalue[i] });
}

var colorList = ['#1890FF', '#12DDA1', '#FFB026'];
var colorList1 = ['#1183ED', '#00CF92', '#EF9D0F'];

option = {
    tooltip: {
        trigger: 'item',
        show: false,
    },

    series: [
        {
            type: 'pie',
            radius: ['35%', '55%'],
            center: ['25%', '50%'],
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList[params.dataIndex];
                    },
                },
            },

            label: {
                normal: {
                    show: false,
                },
            },

            labelLine: {
                normal: {
                    show: false,
                },
            },

            data: data,
        },
        {
            type: 'pie',

            radius: ['30%', '40%'],

            center: ['25%', '50%'],

            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList1[params.dataIndex];
                    },
                },
            },

            // label: {
            //     normal: {
            //         formatter: (params) => {
            //             return `{name|${params.name}}\n{value|${params.percent}%  ${params.value}}\n{hr|————————}`;
            //         },
            //         rich: rich,
            //     },
            // },
            label: {
                show: true,

                normal: {
                    formatter: (params) => {
                        return '{percent|' + params.percent + '%} {name|' + params.name + '} ';
                    },
                    distanceToLabelLine: 0,
                    padding: [-10, 10, -150, 50],
                    rich: {
                        name: {
                            color: '#656565',
                            fontSize: 14,
                            padding: [6, 50, 6, 0],
                            align: 'left',
                        },
                        percent: {
                            color: '#656565',
                            align: 'center',
                            fontWeight: 'bold',
                            fontSize: 14,
                            padding: [5, 10, 5, 0],
                        },
                        // hr: {
                        //     borderColor: '#C8C8C8',
                        //     width: '100%',
                        //     borderWidth: 0.5,
                        //     height: 0,
                        // },
                    },
                },
            },

            labelLine: {
                normal: {
                    show: false,
                },
            },

            data: data,
        },
    ],
};

return option;
