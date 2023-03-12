option = {
    backgroundColor: '#031845',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
   
    legend: {

        orient: 'horizontal',
        icon: 'circle',
        bottom: 20,
        x: 'center',
        data: [ '医生', '护士', '管理人员'],
        textStyle: {
            color: '#fff'
        }
    },
    series: [{
            name: '累计占比',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['20%', '30%'],
            color: ['#00FFFF',  '#EBEC2F', '#FF7C44',],
            label: {
                normal: {
                    position: 'inner',
                     formatter: '{a}\n{d|{d}%}',
                    rich: {
                        b: {
                            fontSize: 12,
                            color: '#12EABE',
                            align: 'left',
                            padding: 4
                        },
                        hr: {
                            borderColor: '#12EABE',
                            width: '100%',
                            borderWidth: 2,
                            height: 0
                        },
                        d: {
                            fontSize: 14,
                            color: '#fff',
                            align: 'left',
                            padding: 4
                        },
                        c: {
                            fontSize: 16,
                            color: '#fff',
                            align: 'left',
                            padding: 4
                        }
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                },

            },
            tooltip: {
                show: false,


            },

            data: [
              
                {
                    value: 100,
                    name: '洋山调库'
                },
                {
                    value: 100,
                    name: '区级税收'
                },
                {
                    value: 100,
                    name: '财政性收入'
                }
            ]
        },
        {
            name: '增长率',
            type: 'pie',
            radius: ['43%', '55%'],
            color: ['#00FFFF',  '#EBEC2F', '#FF7C44', ],
            labelLine: {
                normal: {
                    show: true,
                    length: 20,
                    length2: 20,
                    lineStyle: {
                        width: 2
                    }
                }
            },
            label: {
                normal: {
                    formatter: '{b|{b}}\n{hr|}\n{a}{c|{c}%}',
                    rich: {
                        b: {
                            fontSize: 20,
                            align: 'left',
                            padding: 4
                        },
                        hr: {
                            borderColor: '#12EABE',
                            width: '100%',
                            borderWidth: 2,
                            height: 0
                        },
                        d: {
                            fontSize: 20,
                            color: '#fff',
                            align: 'left',
                            padding: 4
                        },
                        c: {
                            fontSize: 20,
                            color: '#fff',
                            align: 'left',
                            padding: 4
                        }
                    }
                }
            },
            data: [{
                    value: 20,
                    name: '洋山调库'
                },
                {
                    value: 30,
                    name: '区级税收'
                },
                {
                    value: 40,
                    name: '财政性收入'
                },
               
            ]
        }
    ]
};