option = {
    color: ['#ff3d3d', '#00a0e9', '#f603ff', '#00b419', '#5f52a0'],
    legend: {
        x: 'left',
        padding: [10, 20, 0, 20],
        data: ['顺丰', '邮政', '圆通', '中通', '天天'],
    },
    tooltip: {
        show: false,
        alwaysShowContent: true,
        bordeRadius: 4,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        backgroundColor: 'rgba(255,255,255,0.9)',
        padding: 0,
        position: "top",
        textStyle: {
            fontSize: 12,
            color: '#333'
        },
        formatter: function(params) {
            //console.log(params);

            var a = "<div style='background-color:blue;padding: 5px 10px;text-align:center;color:white;font-size: 20px;'>你好</div>";

            a += "<div style='padding:5px;'>";

            a += "</div>";

            return a;
        }
    },
    grid: {
        left: '0',
        right: '3%',
        bottom: '3%',
        top: '13%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        splitLine: { //网格线
            show: true,
            lineStyle: {
                color: ['#b1b1b1'],
                type: 'dashed'
            }
        },
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        max: 4,
        splitLine: { //网格线
            show: true,
            lineStyle: {
                color: ['#b1b1b1'],
                type: 'dashed'
            }
        }
    },
    series: [{
        smooth: true,
        name: '',
        type: 'line',

        markPoint: {
            symbol: 'image://http://7xk0c1.com1.z0.glb.clouddn.com/timg.png',
            symbolSize:[150,120],
            symbolOffset: [60, -60],
            label: {
                normal: {
                    show: true, 
                    formatter: function(params) {
                        a = params.name[0] + "\n\n" + params.name[1] ;
                        return a;
                    },
                    textStyle: {
                        color: '#000',
                        fontFamily: 'sans-serif',
                        fontSize: 12,
                    },
                }
            },

            data: [{
                name: ["周最低","啊啊啊啊啊啊\n啊啊啊啊啊啊\n啊啊啊啊啊啊\n啊啊啊啊啊"],
                value: 2,
                xAxis: 1,
                yAxis: 1
            }, {
                 name: ["周最低","啊啊啊啊啊啊啊啊\n啊啊啊啊啊啊啊啊\n啊啊啊啊啊啊啊啊"],
                value: 2,
                xAxis: 3,
                yAxis: 2
            }, {
                 name: ["周最低","啊啊啊啊啊啊\n啊啊啊啊啊啊\n啊啊啊啊啊啊\n啊啊啊啊啊啊"],
                value: 3,
                xAxis: 4,
                yAxis: 1
            }, ]
        },
        data: [{
            name: ["'智能快递柜'", "最近，中国不少地方的街头都出现了一种外形类似于超市寄存柜一样的“智能快递柜”，为用户随时收件，提供24小时自助取件服务。业内人士指出..."],
            value: 0
        }, {
            name: ["顺丰要上市", "最近，中国不少地方的街头都出现了一种外形类似于超市寄存柜一样的“智能快递柜”，为用户随时收件，提供24小时自助取件服务。业内人士指出"],
            value: 1
        }, {
            name: ["'智能快递柜'", "最近，中国不少地方的街头都出现了一种外形类似于超市寄存柜一样的“智能快递柜”，为用户随时收件，提供24小时自助取件服务。业内人士指出"],
            value: 1
        }, {
            name: ["顺丰要上市", "最近，中国不少地方的街头都出现了一种外形类似于超市寄存柜一样的“智能快递柜”，为用户随时收件，提供24小时自助取件服务。业内人士指出"],
            value: 2
        }, {
            name: ["'智能快递柜'", "最近，中国不少地方的街头都出现了一种外形类似于超市寄存柜一样的“智能快递柜”，为用户随时收件，提供24小时自助取件服务。业内人士指出"],
            value: 1
        }, {
            name: ["顺丰要上市", "最近，中国不少地方的街头都出现了一种外形类似于超市寄存柜一样的“智能快递柜”，为用户随时收件，提供24小时自助取件服务。业内人士指出"],
            value: 0
        }, {
            name: ["'智能快递柜'", "最近，中国不少地方的街头都出现了一种外形类似于超市寄存柜一样的“智能快递柜”，为用户随时收件，提供24小时自助取件服务。业内人士指出"],
            value: 1
        }, ],
        label: {
            normal: {
                show: true,
                position: 'top' //值显示
            }
        }
    }]
};