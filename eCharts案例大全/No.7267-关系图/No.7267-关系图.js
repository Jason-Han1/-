var data2 = [{
    name: "马云",
    color: '#2B4A4D',

    children: [{ //子集
            name: "北京国风信通科技有限公司1",

            percent: '80%',
            level: 1,


            children: [{ //子集
                    name: "北京国风信通科技有限公司2",
                    percent: '60%',
                    children: [{ //子集
                            name: "北京国风信通科技有限公司3",

                            percent: '60%',

                            children: [{ //子集
                                    name: "北京国风信通科技有限公司4",


                                    percent: '60%',

                                    children: [{ //子集
                                            name: "北京国风信通科技有限公司5",
                                            value: '控股',
                                            percent: '60%',


                                        },
                                        { //子集
                                            name: "北京国风信通科技有限公司",
                                            value: '控股',
                                            percent: '60%',


                                            children: [{ //子集
                                                name: "北京国风信通科技有限公司",
                                                value: '控股',
                                                percent: '60%',


                                            }, { //子集
                                                name: "北京国风信通科技有限公司",
                                                value: '控股',
                                                percent: '60%',


                                            }]
                                        },
                                        { //子集
                                            name: "北京国风信通科技有限公司",
                                            value: '控股',
                                            percent: '60%',


                                        },

                                    ]

                                }

                            ]

                        }

                    ],


                },
                {
                    name: 'test'
                }

            ]

        }

    ]
}];


var option = {
    backgroundColor: '#232528',

    series: [{
        type: 'tree',
        name: '',
        edgeShape: 'polyline', //链接线是折现还是曲线
        orient: 'BT',
        data: data2,
        width: 1000,
        height: 400,
        top: '30%',
        left: '10%',
        symbolSize: 1,
        initialTreeDepth: 10,
        roam: true,
        label: {
            normal: {
                position: [-120, 10],
                verticalAlign: 'middle',
                align: 'left',
                backgroundColor: '#2D3034',
                color: '#fff',
                width: 237,
                height: 36,
                borderWidth: 1,
                borderColor: ' #393C40',
                fontWeight: 'bold',
                formatter: function(params) {
                    console.log(params.data)
                    if (params.data.percent) {
                        return [
                            `{box|${params.data.name}}`,
                            `{percent|${params.data.percent}}`,

                        ].join('\n')
                    } else {
                        return [
                            `{box|${params.data.name}}`,

                        ].join('\n')
                    }



                },
                // formatter: [
                //     '{box|{b}}'
                // ].join('\n'),
                rich: {
                    box: {
                        height: 36,
                        color: '#D3D3D4',
                        padding: [0, 5],
                        align: 'center',
                        fontWeight: 'bold',
                        fontSize: 12,
                        fontFamily: 'PingFangSC-Light'

                    },
                    percent: {
                        padding: [0, 80, 0, 0],
                        width: 100,
                        height: 18,
                        color: '#43A1AC',

                        align: 'right',
                        verticalAlign: 'top',
                        fontSize: 12,
                        borderWidth: 0,
                        fontWeight: 'normal'
                    },

                }
            }
        },
        leaves: {
            label: {
                normal: {


                    backgroundColor: '#2D3034',
                    verticalAlign: 'middle',
                    align: 'left',
                    height: 36,
                    fontSize: 12,
                    fontWeight: 'normal',
                    width: 237,
                    borderColor: ' #393C40',
                    borderWidth: 1,
                    formatter: function(param) {


                        let percent = param.data.percent;
                        let name = param.name

                        return [
                            `{name|${name}}`,
                            `{percent|${percent}}`,


                        ].join('\n');


                    },
                    rich: {

                        percent: {
                            height: 18,
                            color: '#43A1AC',

                            align: 'right',
                            verticalAlign: 'top',
                            fontSize: 12,
                            borderWidth: 0,
                            fontWeight: 'normal'
                        },
                        name: {
                            height: 36,
                            color: '#D3D3D4',

                            align: 'center',
                            fontWeight: 'bold',
                            fontSize: 12,
                            fontFamily: 'PingFangSC-Light'
                        },

                    }
                }
            }
        },
        lineStyle: {
            color: '#346A6C',


        },
        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750

    }, ]
};