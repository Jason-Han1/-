var fourPieData = {
    name: '化解率',
    value: 10,
    unit: '%',
};
let max = fourPieData.max || 100;
let color =  '#FFAD2B';
option = {
    title: {
        text: '{num|' + fourPieData.value + '%}',
        subtext: fourPieData.name,
        left: 'center',
        top: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '14',
            lineHeight:14,
            color: '#000',
            textAlign: 'center',
            rich: {
                num: {
                    fontSize: '20',
                    fontWeight: 'bold',
                    color: color, //跟随其他颜色
                },
            },
        },
        subtextStyle: {
            color: '#333',
            fontSize: 12,
            lineHeight:12,
        },
    },
    series: [
        {
            name: fourPieData.name,
            type: 'pie',
            clockWise: true,
            radius: ['50%', '60%'],
            itemStyle: {
                normal: {
                    color: color,
                    shadowColor: color,
                    shadowBlur: 0,
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
            },
            animate: false,
            hoverAnimation: false,
            data: [
                {
                    value: fourPieData.value,
                    unit: fourPieData.unit,
                    label: {
                        show: false,
                        normal: {
                            formatter: function (params) {
                                var unit = '';
                                unit = params.data.unit;
                                return params.value + unit;
                            },
                            position: 'center',
                            show: false,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold',
                                color: color, //跟随其他颜色
                            },
                        },
                    },
                },
                {
                    value: max - fourPieData.value,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: '#f4f4f7',
                        },
                        emphasis: {
                            color: '#f4f4f7',
                        },
                    },
                },
            ],
        },
    ],
};
