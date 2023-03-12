option = {
    title:{text:'养老机构与医疗机构签约情况',
        subtext:'左为内设医疗，右为外部签约',
        subtextStyle:{ fontSize:'15'},
        padding:[130,280],
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params, ticket, callback) {
            var res = params.seriesName;
            res += '<br/>' + params.name + ' : ' + params.percent + '%';
            return res;
        }
    },
    grid: {
        bottom: 30
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0
        },
        data: []
    }],
    yAxis: [{
        show: false
    }],
    series: [{
        name: '702家养老机构中',
        center: [
            '40.0%',
            '50%'
        ],
        radius: [
            '20%',
            '25%'
        ],
        type: 'pie',
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 244,
            name: '内设医疗机构',
            label: {
                normal: {
                    formatter: '{d} %',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold',
                        color: '#000'
                    }
                }
            }
        }, {
            value: 458,
            name: '',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                },
                emphasis: {
                    color: '#aaa'
                }
            },
            hoverAnimation: false
        }]
    }, {
        name: '702家养老机构中',
        center: [
            '60.0%',
            '50%'
        ],
        radius: [
            '20%',
            '25%'
        ],
        type: 'pie',
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 564,
            name: '外部签约医疗机构',
            label: {
                normal: {
                    formatter: '{d} %',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold',
                        color: '#000'
                    }
                }
            }
        }, {
            value: 138,
            name: '',
            tooltip: {
                show: true
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                },
                emphasis: {
                    color: '#aaa'
                }
            },
            hoverAnimation: false
        }]
    }, ]
};