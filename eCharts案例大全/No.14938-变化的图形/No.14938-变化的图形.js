function varry(a, b, c) {
    var seriesd1 = [{
        value: a,
        name: ''
    }, {
        value: b,
        name: ''
    }, {
        value: c,
        name: ''
    }];
    return seriesd1;
}

function seriesvarry(seriesd) {
    var seriesdata1 = [

        {
            data: seriesd
        },

        {
            data: seriesd
        }, {
            data: seriesd
        }, {
            data: seriesd
        }
    ];
    return seriesdata1;
}
var seriesd1 = varry(3, 6, 9);
var seriesdata1 = seriesvarry(seriesd1);
var seriesd2 = varry(1, 2, 9);
var seriesdata2 = seriesvarry(seriesd2);
var seriesd3 = varry(7, 8, 9);
var seriesdata3 = seriesvarry(seriesd3);
option = {
    baseOption: {
        color: ['#5B8DFF', '#41D5F2', '#0BA1FC'],
        timeline: {
            axisType: 'category',
            playInterval: '1000',
            autoPlay: 'true',
            data: ['正方形?', '四角星?', '八边形?']
        },

        title: {
            text: '',
            subtext: '',
            left: 'left',
            top: '10'
        },

        tooltip: {
            show: false,
        },
        gap: 0,
        toolbox: {
            orient: 'vertical',
            top: 'center',
            feature: {
                dataView: {
                    readOnly: false
                },
                restore: {},
                saveAsImage: {}
            }
        },

        series: [

            {
                //name: '漏斗图',
                type: 'funnel',
                width: '30%',
                height: '40%',
                left: '50%',
                top: '40%',
                sort: 'descending',
                funnelAlign: 'left',
                label: {
                    normal: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                }

            },



            {
                //name: '漏斗图',
                type: 'funnel',
                width: '30%',
                height: '40%',
                left: '20%',
                top: '40%',
                sort: 'descending',
                funnelAlign: 'right',
                label: {
                    normal: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                }

            },


            {
                //name: '金字塔',
                type: 'funnel',
                width: '30%',
                height: '40%',
                left: '20%',
                top: '0%',
                sort: 'ascending',
                funnelAlign: 'right',
                label: {
                    normal: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                }

            }, {
                //name: '金字塔',
                type: 'funnel',
                width: '30%',
                height: '40%',
                left: '50%',
                top: '0%',
                sort: 'ascending',
                funnelAlign: 'left',
                label: {
                    normal: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                }

            }

        ]
    },

    options: [{
            series: seriesdata1
        },
        //seriesdata1
        {
            series: seriesdata2
        },
        //seriesdata2
        {
            series: seriesdata3
        }
        //seriesdata3
    ]
};