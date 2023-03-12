    var dataStyle = {
        normal: {
            // label: {
            //     show: false
            // },
             label: {
                show: true,
                position: 'inside',
                color: '#ffff',
                formatter: function(params) {
                    return params.value;
                }
            },
            labelLine: {
                show: false
            },
            // shadowBlur: 15,
            // shadowColor: 'white',
        }
    };
    var placeHolderStyle = {
        normal: {
            color: 'rgba(0,0,0,0)',
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            // color: 'rgba(0,0,0,0)'
        }
    };
       option = {
           "title": {
        "text": "水",
        "x": "center",
        textStyle: { // 文本样式
            fontSize: 32,
            fontWeight: 700,
            color: '#ffff'
        }
    },
           backgroundColor: '#0b214a',
            color: ['#5DC4C4','#C43CA9','#4DFF8F','#ADFF4D'],
            tooltip : {
                show: true,
                formatter: "{b} : {c}"
            },

            legend: {
                
                top: "10.5%",
                x: 'right',
                left: "52%",
                itemWidth:0,itemHeight:0,
                data: ['水耗','能耗指标'],
                
                itemGap: 75,
                textStyle: {
                    
                    color: '#fff',
                    align:'right',
                    x: 'right',
                    textAlign:'right'
                },

                selectedMode: true,
                orient: "vertical",

            },
            series: [
                {
                // name: 'Line 4',
                
                type: 'pie',
                clockWise: true,
                hoverAnimation: false,
                radius: ['65%', '85%'],//控制环的大小前内后外
                itemStyle: dataStyle,
            
            data: [{
                value: 7645434,
                name: '水耗',
                
            }, {
                value: 3612343,
                name: '总数',
                tooltip: {
                    show: false,
                },
                 label: {
                show: false,
                position: 'inside',
                color: '#ffff',
                formatter: function(params) {
                    return params.value;
                }
            },
                itemStyle: placeHolderStyle,
            }

            ],
             clockWise: false, //顺时加载
        }, {
            // name: 'Line 3',
            type: 'pie',
            clockWise: true,
            radius: ['40%', '60%'],//控制环的大小前内后外
            itemStyle: dataStyle,
            hoverAnimation: false,

            data: [{
                value: 2632321,
                name: '能耗指标'
            }, {
                value: 2212343,
                name: '总数',
                tooltip: {
                    show: false
                },
                 label: {
                show: false,
                position: 'inside',
                color: '#ffff',
                formatter: function(params) {
                    return params.value;
                }
            },
                
                itemStyle: placeHolderStyle
            }],
             clockWise: false, //顺时加载
        } 
            ]
        };