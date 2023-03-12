
   var data = [{
            value: 591,
            unit: '件',
            name: '国企党员'
        },
        {
            value: 5234,
            unit: '件',
            name: '联社党员'
        },
        {
            value: 4275,
            unit: '件',
            name: "两新组织党员"
        },
        {
            value: 10921,
            unit: '件',
            name: '社区党员'
        },
        {
            value: 12449,
            unit: '件',
            name: '行政村党员'
        },
        {
            value: 14090,
            unit: '件',
            name: '区直单位党员'
        },{
            value: 251,
            unit: '件',
            name: '其他党员'
        }
    ]
    
var colorList= ['#1B74E4', '#FF5F72', '#778AF2', '#51F1C9', '#53B5CE', '#3AB354', '#FDA204'];

var arrName=['国企党员', '联社党员', '两新组织党员', '社区党员', '行政村党员', '区直单位党员', '其他党员']

var number = 100
option = {
    title: [{
            text: [`{a|${number}}`].join(""),
            top: "40%",
            left: "23%",
            textStyle: {
              fontSize: 14,
              rich: {
                a: {
                  width: 300,
                  align: "center",
                  backgroundColor: 'red',
                  fontSize: 34,
                  color: "#333333",
                  fontWeight: 800,
                },
              },
            },
          },{
        text: `党员干部`,
        top: '50%',
        left: 'center',
        textStyle: {
            fontSize: 20,
            color: '#333333',
            fontWeight: 400
        }
    }],

    color: colorList,
    legend: {
        show: true,
        top: "center",
        left: '80%',
        data: data.map(item => item.name),
        itemWidth: 5,
        itemHeight: 5,
        padding: [0, 5],
        itemGap: 25,
        textStyle: {
             color: '#000',
            rich: {
                name: {
                    verticalAlign: 'right',
                    align: 'left',
                    width: 35,
                    fontSize: 12
                },
                value: {
                    align: 'left',
                    width: 60,
                    fontSize: 12
                },
                count: {
                    align: 'left',
                    width: 80,
                    fontSize: 12
                },
                upRate: {
                    align: 'left',
                    fontSize: 12,
                    color: '#1B74E4'
                },
                downRate: {
                    align: 'left',
                    fontSize: 12,
                    color: '#ff5722'
                }
            }
        },
        formatter: function(name) {
            let className = 'upRate'
            let rateIcon = '▲'
            if (data && data.length) {
                for (var i = 0; i < data.length; i++) {
                    if (name === data[i].name) {
                        
                        return (
                            '{name| '+name +'}'+ '                 ' +
                            '{' + className + '| '  +data[i].value +'}'
                        )
                    }
                }
            }
        }
    },
    series: [
        //最外层圆环
        {
            name: '圆圈',
            type: 'pie',
            zlevel: 1,
            silent: false,
            radius: ['79%', '80%'],
            center: ["40%", "50%"],
            hoverAnimation: true,
            color: "#7eb3fb",
            label: {
                
                normal: {
                    show: false
                },
            },
         
            data: [{
                value: 1,
                name: 'name',
                itemStyle: {
                    normal: {
                        color: '#BFD8F7'
                    }
                }
            }]
        },

        {
            name: '外环',
            type: 'pie',
            radius: ['66%', '75%'],
            center: ["40%", "50%"],
            startAngle: '240',
            data: data,
            label: { 　　　　　　　　　　//去除饼图的指示折线label
                normal: {
                show: false,


                }
                
            },
        },
    ]
};