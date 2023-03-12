var data1 = [0, 8, 8, 7, 12, 7, ];
var data2 = [0, 11, 8, 8, 12, 9, ];
var data3 = [0, 14, 8, 8, 8, 10, ];
var data4 = [0, 12, 10, 9, 11, 15, ];
options = [{
        title: {
            text: '近年GDP增速走势',
            x: 'center',
        },
        tooltip: {
            trigger: 'axis',

        },
        legend: {
            orient: 'vertical',
            y: 'middle',
            right: '10px',
            data: ['上海', '北京', '广州', '深圳'],
        },
        toolbox: {
            show: true,
        },
        xAxis: [{
            type: 'category',
            data: ['2012年', '2013年', '2014年', '2015年', '2016年', '2017年', ]
        }],
        yAxis: [{
            type: 'value',
            name: '',
            splitNumber: 8,
            axisLabel: {
                formatter: function(value, index) {
                    return value + "%";
                }
            }
        }],
        series: [{
                name: '上海',
                type: 'line',
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        formatter: '{c}%'
                    }
                },
                data: data1
            },
            {
                name: '北京',
                type: 'line',
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        formatter: '{c}%'
                    }
                },

                data: data2
            },
            {
                name: '广州',
                type: 'line',
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        formatter: '{c}%'
                    }
                },
                data: data3
            },
            {
                name: '深圳',
                type: 'line',
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        formatter: '{c}%'
                    }
                },
                data: data4
            },

        ]
    },

];