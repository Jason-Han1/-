var colorList = ['#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac']
let unit = "万吨";
let datas = {
    power: 1000,
    per: 9
}
let arrow="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAMCAYAAACX8hZLAAAAAXNSR0IArs4c6QAAARdJREFUOBGtj71KA1EQhbOCsbESCwuLQMDnsEqdztJeEAwmGPWJkibxB59ECwUloFY+Q1i/A/fIZHPdNDvwMXdmzszZbbUaiLIsD+ADqvFJo7vVgIdO7ENHj0ocUh83YlIUxTPHutCDN4hR1Jrwq0dRveH9xfwMvLO0PmvC8TbcI3olz2DbC7mc5lNm/TS/JS/Sez2xIIMHiDGnyBqpD/oQx42uUrykxumKC82qwZM3yXewYqQa9AGOax+kcQIT2HNPzjJ4BMdQQ4qxG2QZtVP/X4O/o/GhRVgzsIbZFThktAvKjrG12YxqB6LBZU6IJhr9+Dq53kDHEI3CQtbApuiikdY2GySTHuJ3OPexuozuAr5hUKeLs19NkHscz9kT1QAAAABJRU5ErkJggg==";

option = {
    backgroundColor: '#fff',
    tooltip: {
        formatter: function(param) {
            if (param.data.type == null) {

                return param.data.name + ":" + param.value + '个';
            } else {

                return param.data.type + ":" + param.value + '个';
            }
        }
    },

    series: [{
            name: '',
            type: 'pie',
            radius: [0, '30%'],
            tooltip:{show:false},
            label: {
                position: 'inner',
                formatter: function(params) {
                    return `{a|中间的字\n自行替换}\n{b|${datas.power}}\n{c|这是单位}\n{icon|}{d|${datas.per}%}\n{box|}`
                },

                rich: {
                    a: {
                        fontSize: 14,
                        color: "#fff",
                        lineHeight:20,
                        padding:[0,0,-40,0]
                      
                    },
                    b: {
                        fontSize: 24,
                        color: "#fff",  fontWeight:500,  lineHeight:50,
                        //  padding:[0,0,-40,0]
                    },
                    c: {
                        fontSize: 16,
                        color: "#fff",
                         
                        
                    },
                    d:{
                         fontSize: 24,
                        color: "#fff",  fontWeight:500,  lineHeight:50,
                        padding:[0,0,0,10]
                    },
                    icon: {
                        backgroundColor:{
                            image:arrow
                        }
                    },
                    box:{
                        height:50
                    }

                }
            },
            itemStyle: {
                normal: {
                    color: "rgba(1, 114, 228,1)"
                }
            },
            data: [{
                value: 100,
            }, ]
        },
        {
            name: '',
            type: 'pie',
            radius: ['32%', '55%'],
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 6,
                    color: "rgba(145, 198, 252,0.8)"
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'inner',
                    formatter: function(params) {
                        if (params.value != 0)
                            return `{a|${params.data.name}} \n{b|${params.value}} \n{c|${unit}}`;
                        else
                            return '';
                    },
                    lineHeight: 25,
                    rich: {
                        a: {
                            fontSize: 18,
                            color: "#fff",

                        },
                        b: {
                            fontSize: 22,
                            color: "#003A76",
                            fontWeight:600

                        },
                        c: {
                            fontSize: 18,
                            color: "#003A76",

                        }
                    }
                },


            },
            labelLine: {
                show: false
            },
            data: [{
                    value: 135,
                    name: 'A',


                },
                {
                    value: 200,
                    name: 'B',


                },
                {
                    value: 200,
                    name: 'C',


                },
                {
                    value: 150,
                    name: 'D',


                },
                {
                    value: 300,
                    name: 'E',


                },


            ]
        }
    ]
};