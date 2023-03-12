var scaleData = [
        {
            'name': '古树名木1',
            'value': 60
        },
        {
            'name': '古树名木2',
            'value': 30
        },
        {
            'name': '古树名木3',
            'value': 10
        }
    ];
    var rich = {
        white: {
            color: '#ddd',
            align: 'center',
            padding: [10, 0]
        }
    };
    var placeHolderStyle = {
        normal: {
            label: {
                normal: {
                    show: false,
                    position: 'inside',
                }
            },
            labelLine: {
                show: false
            },
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 20
        }
    };
    var data = [];
    for (var i = 0; i < scaleData.length; i++) {
        data.push({
            value: scaleData[i].value,
            name: scaleData[i].name,
            itemStyle: {
                normal: {
                    borderWidth: 10,
                    shadowBlur: 10,
                }
            }
        }, {
            value: 7,
            name: '',
            itemStyle: placeHolderStyle
        });
    }
    var color = ["#B28D00", "#AF3B7E", "#8E4DC0"];
    var seriesObj = [
        {
            name: '内圈',
            type: 'pie',
            z: 3,
            radius: [0, "25%"],
            hoverAnimation: false,
            color: "#fff",
            itemStyle:{
                normal: {
                    label: {
                       show: false,
                           
                    }
                }
            },
            data: [{
                value: 0,
                itemStyle: {
                    normal: {
                        color: "#fff"
                    }
                }
            }, ]
        },
        {
            name: '中圈',
            type: 'pie',
            z:1,
            radius: [0, "60%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,

                    }
                }
            },
            data: [{
                value: 0,
                itemStyle: {
                    normal: {
                        color: "#2E849B"
                    }
                }
            }, ]
        },
        {
            name: '',
            type: 'pie',
            z: 2,
            clockWise: false,
            radius: ["25%", "85%"],
            color: color,
            hoverAnimation: false,
            itemStyle: {
                normal:{
                    label: {
                        show: true,
                        position: 'outside',
                        color: '#000',
                    },
                    labelLine: {
                        length: 10,
                        show: true,
                    },
                    opacity: 0.7,
                }
                
            },
            data: data
        }
    ];
    
    var option = {
        title: {
            text: "每木\n类型",
            left: "center",
            top: "center",
            textStyle: {
                color: "#000",
                fontSize: 38,
                align: "center"
            }
        },
        
        tooltip: {
            show: false
        },
        legend: {
            show: false
        },
        toolbox: {
            show: false
        },
        series: seriesObj
    }