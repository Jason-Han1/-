var data = [
    {
        value: 12,
        name: '内审',
        itemStyle: {
            normal: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: "linear",
                    global: false,
                    colorStops: [{
                        offset: 0,
                        color: "#0077F2"
                    }, {
                        offset: 1,
                        color: "#0077F2"
                    }]
                }
            }
        },
    },
    {
        value: 12,
        name: '项目全过程审核',
        itemStyle: {
            normal: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: "linear",
                    global: false,
                    colorStops: [{
                        offset: 0,
                        color: "#00D094"
                    }, {
                        offset: 1,
                        color: "#5AD8A6"
                    }]
                }
            }
        },
    },
    {
        value: 5,
        name: '专项审核',
        itemStyle: {
            normal: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: "linear",
                    global: false,
                    colorStops: [{
                        offset: 0,
                        color: "#F3CC49"
                    }, {
                        offset: 1,
                        color: "#BA9A2C"
                       
                    }]
                }
            }
        },
    },{
        value: 13,
        name: '外审',
        itemStyle: {
            normal: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: "linear",
                    global: false,
                    colorStops: [{
                        offset: 0,
                        color: "#E8684A"
                    }, {
                        offset: 1,
                        color: "#D44E35"
                    }]
                }
            }
        },
    },
];
option = {
     tooltip: {
         trigger: 'item',
         formatter: function(res) {
            return '' + res.name + '：' + res.data.value + '项';
            
         }
     },
    title: {
        text: '年审核问题分布情况',
        x: 'center',
        top: "20",
        textStyle: {
            color: '#E2EEFF',
            fontSize: 16,
            fontWeight:200
        }
    },
    backgroundColor:'#021434',
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['45%', '65%'],
            center: ["50%", "52%"],
            selectedMode: 'single',
            selectedOffset: 10,
            clockwise: true,
            label: {
                show:false

            },
            data: data
        }
    ]
};