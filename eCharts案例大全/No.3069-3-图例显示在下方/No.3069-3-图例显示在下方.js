var getname = ['负责双高任务部门', '无负责双高任务部门'];

var getvalue = [9, 5];

var data = [];
var sum = 0;
for (var i = 0; i < getname.length; i++) {
    sum = sum + getvalue[i];
    data.push({ name: getname[i], value: getvalue[i] });
}

var colorList = ['#1890FF', '#FFB026', '#12DDA1', '#B9A9FF'];

var colorList1 = ['#1183ED', '#EF9D0F', '#00CF92', '#A793FF'];

option = {
    tooltip: {
        trigger: 'item',
        show: false,
    },
    title: {
        text: sum + '个',
        textAlign: 'center',
        x: '25%',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#1890ff',
            fontSize: '60',
        },
        subtext: '应完成任务',
        subtextStyle: {
            fontWeight: 'normal',
            color: '#000',
            fontSize: '20',
        },
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        x: '15%',
        y: 'bottom',
        height: '88%',
        icon: 'circle',
        itemWidth: 10,

        itemHeight: 10,

        itemGap: 10,

        data: getname,

        formatter: function (name) {
            for (var i = 0; i < getname.length; i++) {
                if (name == data[i].name) {
                    return '{name|' + name + '}{value|' + getvalue[i] + '个}';
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
                    padding: [0, 0, 0, 80],
                    color: '#333333',
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
