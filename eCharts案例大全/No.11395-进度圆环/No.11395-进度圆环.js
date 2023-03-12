  //此单位是为了根据屏幕尺寸做的粗暴适配
   var unitVH = document.body.clientHeight / 100;
    var dataStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            shadowColor: 'rgba(40, 40, 40, 0.5)',
        }
    };
    var placeHolderStyle = {
        normal: {
            color: 'rgba(44,59,70,1)', //未完成的圆环的颜色
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: 'rgba(44,59,70,1)' //未完成的圆环的颜色
        }
    };
    option = {
        title: {
            text: '7545',
            subtext: '金额',
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: 'normal',
                color: "red",
                fontSize: 2 * unitVH,
            },
            subtextStyle: {
                fontWeight: 'normal',
                color: "red",
                fontSize: 1.6 * unitVH,
            }
        },
        color: ['#3fc4ff', '#2f6294'],
        tooltip: {
            show: false,
        },
        legend: {
            show: false,
        },
        toolbox: {
            show: false,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        series: [
            {
                type: 'pie',
                radius: [76, 90],
                itemStyle: dataStyle,
                hoverAnimation: false,

                data: [{
                        value: 75,
                        name: '01'
                }, {
                        value: 25,
                        name: 'invisible',
                        itemStyle: placeHolderStyle
                }

            ]
        },



    ]
    };