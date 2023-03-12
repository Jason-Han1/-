let _series = [{
        value: 335,
        name: '男',
        itemStyle: {
            color: "#32baf7",
            borderColor: "#008dfd",
            borderWidth: 3
        }
    },
    {
        value: 310,
        name: '女',
        itemStyle: {
            color: "#f56294",
            borderColor: "#fb1100",
            borderWidth: 3
        }
    },


]
option = {
                backgroundColor: '#060f2b',
                title: {
                    text: '比例',
                    textStyle: {
                        color: '#fff',
                        fontSize: 14,
                        align: 'center'
                    },

                    x: 'center',
                    y: 'center',
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },


                series: [{
                    name: '性别比例',
                    type: 'pie',
                    roseType: 'angle',
                    radius: ['30%', '70%'],
                    center: ['50%', '50%'],
                    label: {
                        normal: {
                            formatter: "{b} : {blue| {c} } \n {d}%",
                            textStyle: {
                                lineHeight: 20,
                                color: '#fff',
                                align: 'right',

                                rich: {
                                    blue: {
                                        color: '#09e3ff',
                                        fontWeight: "bold"

                                    },
                                    red:{
                                        color: '#e91e63',
                                        fontWeight: "bold"

                                    },

                                }

                            },
                        }
                    },
                    labelLine: {
                        normal: {

                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },
                    data: _series,

                }]
            };