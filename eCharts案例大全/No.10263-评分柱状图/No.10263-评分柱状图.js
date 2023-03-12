 var option = {
            color: ["RGBA(1, 21, 49, 1)"],
            title : {
                subtext: '分',
                "left": 52,
                "top": 38,
            },
            xAxis: [{
                type: 'category',
                axisLabel: {
                    rotate: 30, //x轴文字旋转的角度
                },
                data: ['安全耐久', '健康舒适', '生活遍历', '资源节约', '环境宜居', "提高创新"],

                textStyle: {
                    "fontFamily": "Source Han Sans CN",
                    "fontSize": 14,
                    "fontStyle": "normal",
                    "fontWeight": "400",
                    "color": "color:rgba(255,255,255,0.5);"
                }

            }],
            yAxis: [{
                type: 'value',
                max: 100,
                interval: 25,
            }],
            series: [{
                type: 'bar',
                data: [75, 65, 35, 45, 85, 65],
                barWidth: '50%', //柱子的宽度
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = [
                                'rgba(68, 163, 252, 1)', 'rgba(165,211,255,1)', 'rgba(251, 223, 131, 1)', 'rgba(165, 211, 255, 1)', 'rgba(35, 210, 209, 1)', 'rgba(165, 211, 255, 1)'
                            ];
                            return colorList[params.dataIndex]
                        },
                        label: {
                            show: true,
                            position: 'top',
                            // formatter: '{b}\n{c}'
                            formatter: function(a) {
                                return a.value
                            },
                            textStyle: {
                                fontFamily: "Source Han Sans CN",
                                fontSize: 16,
                                fontStyle: "normal",
                                fontWeight: "500",
                                color: "rgba(255,255,255,0.8)"
                            }
                        }
                    }
                },

            }]
        }