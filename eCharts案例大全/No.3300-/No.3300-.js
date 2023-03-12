var  getname= ['优秀', '合格','基本合格', '不合格'];

var getvalue = [4, 2, 2, 3];

var getbl = [40, 21, 19, 20];

var data = [];

for (var i = 0; i < getname.length; i++) {
    data.push({ name: getname[i], value: getvalue[i] });
}

var colorList = ['#1890FF', '#B9A9FF', '#12DDA1', '#FFB026'];

var colorList1 = ['#1183ED', '#A793FF', '#00CF92', '#EF9D0F'];
var colorList2 = ['#1890FF', '#B9A9FF', '#12DDA1', '#FFB026'];

option = {
    tooltip: {
        trigger: 'item',

        show: false,
    },

    legend: {
        type: 'scroll',

        orient: 'vertical',

        height: '88%',

        right: '20%',

        top: 'center',

        icon: 'circle',

        itemWidth: 18,

        itemHeight: 18,

        itemGap: 20,

        data: getname,

        formatter: function (name) {
            for (var i = 0; i < getname.length; i++) {
                if (name == data[i].name) {
                    return '{name|' + name + '}{value|' + getvalue[i] + '次}{rate|' + getbl[i].toFixed(0) + '%}';
                }
            }
        },

        textStyle: {
            rich: {
                name: {
                    fontSize: 16,

                    fontWeight: 400,

                    width: 50,

                    height: 35,

                    padding: [0, 0, 0, 10],

                    color: '#666666',
                },

                value: {
                    fontSize: 16,

                    fontWeight: 400,

                    width: 50,

                    height: 35,

                    padding: [0, 0, 0, 20],

                    color: '#333333',
                },

                rate: {
                    fontSize: 16,

                    fontWeight: 500,

                    height: 35,

                    width: 55,

                    align: 'left',

                    color: '#666666',
                },
            },
        },
    },

    series: [
        {
            type: 'pie',

            radius: ['35%', '55%'],

            center: ['25%', '50%'],

            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList1[params.dataIndex];
                    },
                },
            },
            label: {
                fontSize: 13,
                color: '#333',
                // color: function (params) {
                //     return colorList2[params.dataIndex];
                // },
                formatter: function (param) {
                    return param.name + '{per' + param.dataIndex + '|' + param.percent.toFixed(0) + '%}';
                },
                // 自定义富文本样式
                rich: {
                    per0: {
                        padding: [0, 0, 0, 5],
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#1890FF',
                    },
                    per1: {
                        padding: [0, 0, 0, 5],
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#B9A9FF',
                    },
                    per2: {
                        padding: [0, 0, 0, 5],
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#12DDA1',
                    },
                    per3: {
                        padding: [0, 0, 0, 5],
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#FFB026',
                    },
                    // per4: {
                    //     padding: [0, 0, 0, 5],
                    //     fontSize: 13,
                    //     fontWeight: 'bold',
                    //     color: '#FD4D63',
                    // },
                },
            },

            labelLine: {
                show: true,
                length: 20,
                length2: 50,
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
    ],
};

return option;
