
var data2 = [];
var valll = [{
                    value: 17,
                    name: '占用'
                },
                {
                    value: 163,
                    name: '空闲'
                },
            ];
for (var i = 0; i < 4; i++) {
    data2.push({
        value: 10
    }, {
        value: 1,
       

        itemStyle: {
            normal: {
                color: 'transparent', //透明伞形
            }
        }
    });
}

var option = {
    backgroundColor:'rgba(0,0,0,1)',
    color: ["#ff277d", '#36d7e7'],
    title: {
        text: '180',
        subtext: '总车位',
        textAlign: 'center',
        textStyle: {
           color: '#ffffff',
                fontSize: 12,
                lineHeight: 12

        },
        subtextStyle: {
                color: '#00b5f3',
                fontSize: 16,
                fontWeight:800
            },
        x: '38%',
        y: '45%',
    },
    tooltip: {
        trigger: 'item',
        show: true,
        formatter: "{a} : {b} <br/> 占比 : {d}%",
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        padding: [8, 10], //内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
    },
    legend: {
            data: ['空闲', '占用'],
            orient: 'vertical',
            icon: 'circle',
            right: '5%',
            top: 'center',
            itemGap: 20,
            itemWidth: 15,
            itemHeight: 8,
            formatter: function(name) {
                let target,percent;
                for (let i = 0; i < valll.length; i++) {
                    if (valll[i].name === name) {
                        target = valll[i].value;
                        percent = ((target/180)*100).toFixed(2);
                  }
                }//,' {white|' + target + '}'
                let arr = [ ' {blue|' + name + '}', '{white|' + percent + '%}'];
                
                return arr.join("\n")

            },
            textStyle: {
            	fontSize:14,
                lineHeight: 20,
                color: '#4be1ff',
                align: 'right',
                rich: {
                    white: {
                        color: '#e9e9e9',
                        align: 'right',
                        fontSize:12
                    },
                    blue: {
                        color: '#a5dbff',
                        align: 'right',
                        fontSize:12

                    }
                }

            }
    },
    series: [{
            name: '车位信息',
            type: 'pie',
            radius: ['55%', '70%'],
            center: ['40%', '50%'],
            label: {
                normal: {
                    show: false,
                },
            },
            data: valll
        },
        { //装饰作用

            type: 'pie',
            clockWise: false,
            radius: ['85%', '86%'],
            center: ['40%', '50%'],
            hoverAnimation: false,
            startAngle: 94, //起始角度
            color: ['#297b9e'],
            tooltip: {

                show: false,

            },
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                }
            },
            data: data2
        },

    ]
}