var data = [53, 85, 60];
var xMax = 100;


option = {
    tooltip: {
        show: true,
        formatter: "{b} <br> {c}"

    },

    xAxis: [{
        type: 'value',
        axisTick: {
            show: false,

        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false

        },
        splitLine: {
            show: false,

        }
    }],
    yAxis: [{
        type: 'category',
        data: ['Australia', 'China', 'United States'],

        axisTick: {


            show: false,
        },
        axisLine: {

            show: false,
        },
        axisLabel: {
            show: true,
            margin: 0,
            align: 'left',
            verticalAlign: 'bottom',
            fontSize: 20,
            padding: [0, 0, 15, 0],
        }

    }],
    series: [{
        name: ' ',
        type: 'bar',
        barWidth: 5,
        silent: true,
        itemStyle: {
            normal: {
                color: '#E7E7E7',

            }

        },
        barGap: '-100%',
        barCategoryGap: '50%',
        data: data.map(function(d) {
            return xMax
        }),
    }, {
        name: ' ',
        type: 'bar',
        barWidth: 5,
        label: {
            normal: {
                show: true,
                position: 'left',
                color: '#000',
                fontSize: 20,
                offset: [675, 20],
                formatter: '%{c}'
            }
        },
        data: [{
            value: 50,
            itemStyle: {
                normal: {
                    color: '#9C8BE0',


                }



            },
        }, {
            value: 25,
            itemStyle: {
                normal: {
                    color: '#F3D549',

                }

            }
        }, {
            value: 40,
            itemStyle: {
                normal: {
                    color: '#EC6784',

                }

            },
        }],
    }]
};