option = {
    title: {
        subtext: '专业教师多元发展路线图',
        left: 'center'
    },
    backgroundColor: "#FFFFFF",
    series: [{
        type: "sankey",
        left: 50.0,
        top: 20.0,
        right: 150.0,
        bottom: 25.0,
        data: [{
                "name": "学科带头人",
                "itemStyle": {
                    "normal": {
                        "color": "#7A072D",
                        "borderColor": "#7A072D"
                    }
                }
            },
            {
                "name": "高级职称教师",
                "itemStyle": {
                    "normal": {
                        "color": "#859599",
                        "borderColor": "#859599"
                    }
                }
            },
            {
                "name": "课程设计师",
                "itemStyle": {
                    "normal": {
                        "color": "#84AA33",
                        "borderColor": "#84AA33"
                    }
                }
            },
            {
                "name": "外向型培训师",
                "itemStyle": {
                    "normal": {
                        "color": "#ff8b67",
                        "borderColor": "#ff8b67"
                    }
                }
            },
            {
                "name": "教学型教师",
                "itemStyle": {
                    "normal": {
                        "color": "rgba(106,82,134,255)",
                        "borderColor": "rgba(106,82,134,255)"
                    }
                }
            },
            {
                "name": "学术带头人",
                "itemStyle": {
                    "normal": {
                        "color": "#1B587C",
                        "borderColor": "#1B587C"
                    }
                }
            },
            {
                "name": "研究型教师",
                "itemStyle": {
                    "normal": {
                        "color": "#A19574",
                        "borderColor": "#A19574"
                    }
                }
            },
            {
                "name": "专家型教师",
                "itemStyle": {
                    "normal": {
                        "color": "#918485",
                        "borderColor": "#918485"
                    }
                }
            },
            {
                "name": "产品经理",
                "itemStyle": {
                    "normal": {
                        "color": "#FFA98C",
                        "borderColor": "#FFA98C"
                    }
                }
            },
            {
                "name": "项目经理",
                "itemStyle": {
                    "normal": {
                        "color": "#B0E3C0",
                        "borderColor": "#B0E3C0"
                    }
                }
            },
            {
                "name": "双师型教师",
                "itemStyle": {
                    "normal": {
                        "color": "#4BADC7",
                        "borderColor": "#4BADC7"
                    }
                }
            },


            {
                "name": "科研型教师",
                "itemStyle": {
                    "normal": {
                        "color": "rgba(64,105,157,255)",
                        "borderColor": "rgba(64,105,157,255)"
                    }
                }
            },


            {
                "name": "学历提升、科研项目、成果输出、专利和著作权",
                "itemStyle": {
                    "normal": {
                        "color": "#40699D",
                        "borderColor": "#40699D"
                    }
                }
            },

            {
                "name": "挂职锻炼、企业项目、产教融合",
                "itemStyle": {
                    "normal": {
                        "color": "#C32D2E",
                        "borderColor": "#C32D2E"
                    }
                }
            },

            {
                "name": "培训、学历提升、访学、教师交换",
                "itemStyle": {
                    "normal": {
                        "color": "#4E342E",
                        "borderColor": "#4E342E"
                    }
                }
            },

            {
                "name": "产学型教师",
                "itemStyle": {
                    "normal": {
                        "color": "rgba(159,65,62,255)",
                        "borderColor": "rgba(159,65,62,255)"
                    }
                }
            },

        ],

        links: [{
                "source": "培训、学历提升、访学、教师交换",
                "target": "学科带头人",
                "value": 3500.159998036921
            },
            {
                "source": "培训、学历提升、访学、教师交换",
                "target": "高级职称教师",
                "value": 1500.159998036921
            },
            {
                "source": "培训、学历提升、访学、教师交换",
                "target": "课程设计师",
                "value": 1565.109990529716
            },
            {
                "source": "培训、学历提升、访学、教师交换",
                "target": "外向型培训师",
                "value": 999.9199981689453
            },
            {
                "source": "学历提升、科研项目、成果输出、专利和著作权",
                "target": "学术带头人",
                "value": 4500.7999994903803
            },

            {
                "source": "产学型教师",
                "target": "挂职锻炼、企业项目、产教融合",
                "value": 10384.949975416064
            },
            {
                "source": "挂职锻炼、企业项目、产教融合",
                "target": "项目经理",
                "value": 2592.1700052022934
            },

            {
                "source": "学历提升、科研项目、成果输出、专利和著作权",
                "target": "专家型教师",
                "value": 2000.2899911925197
            },
            {
                "source": "学历提升、科研项目、成果输出、专利和著作权",
                "target": "研究型教师",
                "value": 2000.9199981689453
            },
            {
                "source": "挂职锻炼、企业项目、产教融合",
                "target": "双师型教师",
                "value": 1999.9199981689453
            },

            {
                "source": "挂职锻炼、企业项目、产教融合",
                "target": "产品经理",
                "value": 4000.6499986946583
            },
            {
                "source": "教学型教师",
                "target": "培训、学历提升、访学、教师交换",
                "value": 9497.539981640875
            },

            {
                "source": "科研型教师",
                "target": "学历提升、科研项目、成果输出、专利和著作权",
                "value": 5907.36997512728
            },

        ],
        lineStyle: {
            color: "source",
            curveness: 0.5
        },
        itemStyle: {
            color: "#1f77b4",
            borderColor: "#1f77b4"
        },
        label: {
            color: "rgba(0,0,0,0.7)",
            fontFamily: "Arial",
            fontSize: 10
        }
    }],
    tooltip: {
        trigger: "item"
    }
};