option = {
    // backgroundColor: '#2c343c',
    title: {
        text: '{a|污染物贡献率\n占比}',
        x: 'center',
        y: 'center',
        textStyle: {

                rich: {
                    a: {
                        color: '#00b7ee',
                        lineHeight: 25,
                        padding: [0, 0, 0, 16],
                        height: 25,
                        width: 60,
                        fontSize: 18,
                        fontWeight: 'bold',
                        // backgroundColor: '#fff',
                        borderRadius: 0
                    }
                }
            
        }

    },
    // tooltip: {
    //     trigger: 'item',
    //     formatter: "{b} : {c} ({d}%)"
    // },

    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['20%', '55%'],
        center: ['50%', '50%'],
        color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5'], //'#FBFE27','rgb(11,228,96)','#FE5050'
        data: [{
                value: 15,
                name: 'PM10'
            },
            {
                value: 20,
                name: 'PM25'
            },
            {
                value: 25,
                name: 'O3'
            },
            {
                value: 15,
                name: 'CO'
            },
            {
                value: 15,
                name: 'SO2'
            },
            {
                value: 12,
                name: 'NO2'
            }
        ],
        roseType: 'radius',



        label: {
            normal: {
                formatter: function(params) {
                    console.log(params);
                    var rel = '';
                    if (params.name == 'PM25') {
                        rel = '{a|PM}{sub2|2.5}'
                    } else if (params.name == 'PM10') {
                        rel = '{a|PM}{sub2|10}'
                    } else if (params.name == 'O3') {
                        rel = '{a|O}{sub3|3}'
                    } else if (params.name == 'NO2') {
                        rel = '{a|NO}{sub25|2}'
                    } else if (params.name == 'SO2') {
                        rel = '{a|SO}{sub25|2}'
                    } else {
                        rel = '{a|' + params.name + '}';
                    }
                    return rel;

                },

                rich: {
                    a: {
                        color: '#00b7ee',
                        lineHeight: 25,
                        padding: [0, 0, 0, 16],
                        height: 25,
                        width: 60,
                        fontSize: 18,
                        fontWeight: 'bold',
                        // backgroundColor: '#fff',
                        borderRadius: 0
                    },
                    sub25: {
                        color: '#00b7ee',
                        lineHeight: 25,
                        padding: [0, 0, 4, -5],
                        height: 30,
                        fontSize: 12,
                        width: 0,
                        align: 'left',
                        fontWeight: 'bold',
                        borderRadius: 0
                    },
                    sub10: {
                        color: '#00b7ee',
                        lineHeight: 25,
                        padding: [0, 0, 4, -6],
                        height: 30,
                        fontSize: 12,
                        width: 0,
                        align: 'left',
                        fontWeight: 'bold',
                        borderRadius: 0
                    },
                    sub2: {
                        color: '#00b7ee',
                        lineHeight: 25,
                        padding: [0, 0, 4, -30],
                        height: 30,
                        fontSize: 12,
                        width: 0,
                        align: 'left',
                        fontWeight: 'bold',
                        borderRadius: 0
                    },
                    sub3: {
                        color: '#00b7ee',
                        lineHeight: 25,
                        padding: [0, 0, 4, -42],
                        height: 30,
                        fontSize: 12,
                        width: 0,
                        align: 'left',
                        fontWeight: 'bold',
                        borderRadius: 0
                    }
                }
            }
        },
        labelLine: {
            normal: {
                lineStyle: {
                    color: 'rgb(98,137,169)',
                },
                smooth: 0.2,
                length: 10,
                length2: 20,

            }
        },
        itemStyle: {
            normal: {
                shadowColor: 'rgba(0, 0, 0, 0.8)',
                shadowBlur: 50,
            }
        }
    }]
};