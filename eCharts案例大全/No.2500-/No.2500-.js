var getname = ['食堂', '超市', '文印', '网费', '其他'];

var getvalue = [20.42, 19.34, 20.11, 20, 18];

var getbl = [20.86, 19.76, 20.54, 20.43, 18.39];

var data = [];
var sum = 0;
for (var i = 0; i < getname.length; i++) {
    sum = sum + getvalue[i];
    data.push({ name: getname[i], value: getvalue[i] });
}

var colorList = ['#1890FF', '#12DDA1', '#FFB026', '#B9A9FF','#f1b1f7'];

var colorList1 = ['#1183ED', '#00CF92', '#EF9D0F', '#A793FF','#dd8fec'];

option = {
    tooltip: {
        trigger: 'item',
        show: false,
    },
    legend: {
        type: 'scroll',

        orient: 'vertical',

        height: '88%',

        right: '11%',

        top: 'center',

        icon: 'circle',

        itemWidth: 10,

        itemHeight: 10,

        itemGap: 10,

        data: getname,

        formatter: function (name) {
            for (var i = 0; i < getname.length; i++) {
                if (name == data[i].name) {
                    return '{name|' + name + '}{value|' + getbl[i] + '%}';
                }
            }
        },

        textStyle: {
            rich: {
                name: {
                    fontSize: 13,

                    fontWeight: 400,

                    width: 50,

                    height: 35,

                    padding: [0, 0, 0, 10],

                    color: '#666666',
                },

                value: {
                    fontSize: 13,
                    fontWeight: 400,
                    width: 50,
                    height: 35,
                    padding: [0, 0, 0, 50],
                    color: '#333333',
                },

                rate: {
                    fontSize: 13,

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
