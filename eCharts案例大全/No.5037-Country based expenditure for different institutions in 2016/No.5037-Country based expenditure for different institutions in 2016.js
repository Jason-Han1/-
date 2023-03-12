var uploadedDataURL = "/asset/get/s/data-1605635492118-smB4_tYZu.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function(data) {
    myChart.hideLoading();

    myChart.setOption(option = {

        title: {
            text: 'Country based expenditure for different institutions in 2016'
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [{
            layoutIterations: 0,
            type: 'sankey',
            data: [{
                    "name": "New Zealand",
                    "itemStyle": {
                        "normal": {
                            "color": "#f18bbf",
                            "borderColor": "#f18bbf"
                        }
                    }
                },
                {
                    "name": "Korea",
                    "itemStyle": {
                        "normal": {
                            "color": "#0078D7",
                            "borderColor": "#0078D7"
                        }
                    }
                },
                {
                    "name": "Norway",
                    "itemStyle": {
                        "normal": {
                            "color": "#3891A7",
                            "borderColor": "#3891A7"
                        }
                    }
                },
                {
                    "name": "United States",
                    "itemStyle": {
                        "normal": {
                            "color": "#0037DA",
                            "borderColor": "#0037DA"
                        }
                    }
                },
                {
                    "name": "Denmark",
                    "itemStyle": {
                        "normal": {
                            "color": "#C0BEAF",
                            "borderColor": "#C0BEAF"
                        }
                    }
                },
                {
                    "name": "Iceland",
                    "itemStyle": {
                        "normal": {
                            "color": "#EA005E",
                            "borderColor": "#EA005E"
                        }
                    }
                },
                {
                    "name": "Ireland",
                    "itemStyle": {
                        "normal": {
                            "color": "#D13438",
                            "borderColor": "#D13438"
                        }
                    }
                },
                {
                    "name": "Finland",
                    "itemStyle": {
                        "normal": {
                            "color": "#567C73",
                            "borderColor": "#567C73"
                        }
                    }
                },
                {
                    "name": "United Kingdom",
                    "itemStyle": {
                        "normal": {
                            "color": "#9ed566",
                            "borderColor": "#9ed566"
                        }
                    }
                },
                {
                    "name": "Israel",
                    "itemStyle": {
                        "normal": {
                            "color": "#2BCC7F",
                            "borderColor": "#2BCC7F"
                        }
                    }
                },
                {
                    "name": "Chile",
                    "itemStyle": {
                        "normal": {
                            "color": "#809B48",
                            "borderColor": "#809B48"
                        }
                    }
                },
                {
                    "name": "Netherlands",
                    "itemStyle": {
                        "normal": {
                            "color": "#9B2D1F",
                            "borderColor": "#9B2D1F"
                        }
                    }
                },
                {
                    "name": "Belgium",
                    "itemStyle": {
                        "normal": {
                            "color": "#604878",
                            "borderColor": "#604878"
                        }
                    }
                },
                {
                    "name": "Australia",
                    "itemStyle": {
                        "normal": {
                            "color": "#A5644E",
                            "borderColor": "#A5644E"
                        }
                    }
                },
                {
                    "name": "Sweden",
                    "itemStyle": {
                        "normal": {
                            "color": "#2D3F3A",
                            "borderColor": "#2D3F3A"
                        }
                    }
                },
                {
                    "name": "OECD Average",
                    "itemStyle": {
                        "normal": {
                            "color": "#761721",
                            "borderColor": "#761721"
                        }
                    }
                },
                {
                    "name": "France",
                    "itemStyle": {
                        "normal": {
                            "color": "#B1BADD",
                            "borderColor": "#B1BADD"
                        }
                    }
                },
                {
                    "name": "Switzerland",
                    "itemStyle": {
                        "normal": {
                            "color": "#B0CCB0",
                            "borderColor": "#B0CCB0"
                        }
                    }
                },
                {
                    "name": "Brazil",
                    "itemStyle": {
                        "normal": {
                            "color": "#8164A3",
                            "borderColor": "#8164A3"
                        }
                    }
                },
                {
                    "name": "Mexico",
                    "itemStyle": {
                        "normal": {
                            "color": "#8E562E",
                            "borderColor": "#8E562E"
                        }
                    }
                },
                {
                    "name": "Portugal",
                    "itemStyle": {
                        "normal": {
                            "color": "#C1504D",
                            "borderColor": "#C1504D"
                        }
                    }
                },
                {
                    "name": "Austria",
                    "itemStyle": {
                        "normal": {
                            "color": "#CCAF0A",
                            "borderColor": "#CCAF0A"
                        }
                    }
                },
                {
                    "name": "Slovenia",
                    "itemStyle": {
                        "normal": {
                            "color": "#956251",
                            "borderColor": "#956251"
                        }
                    }
                },
                {
                    "name": "Estonia",
                    "itemStyle": {
                        "normal": {
                            "color": "#C17529",
                            "borderColor": "#C17529"
                        }
                    }
                },
                {
                    "name": "Poland",
                    "itemStyle": {
                        "normal": {
                            "color": "#CEC597",
                            "borderColor": "#CEC597"
                        }
                    }
                },
                {
                    "name": "Germany",
                    "itemStyle": {
                        "normal": {
                            "color": "#9F2936",
                            "borderColor": "#9F2936"
                        }
                    }
                },
                {
                    "name": "Spain",
                    "itemStyle": {
                        "normal": {
                            "color": "rgba(128,155,72,255)",
                            "borderColor": "rgba(128,155,72,255)"
                        }
                    }
                },
                {
                    "name": "Japan",
                    "itemStyle": {
                        "normal": {
                            "color": "#ac7430",
                            "borderColor": "#ac7430"
                        }
                    }
                },
                {
                    "name": "Czech Republic",
                    "itemStyle": {
                        "normal": {
                            "color": "#00BCF2",
                            "borderColor": "#00BCF2"
                        }
                    }
                },
                {
                    "name": "Italy",
                    "itemStyle": {
                        "normal": {
                            "color": "#CD7B38",
                            "borderColor": "#CD7B38"
                        }
                    }
                },
                {
                    "name": "Slovak Republic",
                    "itemStyle": {
                        "normal": {
                            "color": "#424242",
                            "borderColor": "#424242"
                        }
                    }
                },
                {
                    "name": "Hungary",
                    "itemStyle": {
                        "normal": {
                            "color": "#f63185",
                            "borderColor": "#f63185"
                        }
                    }
                },
                {
                    "name": "Russian Federation",
                    "itemStyle": {
                        "normal": {
                            "color": "#9CBC59",
                            "borderColor": "#9CBC59"
                        }
                    }
                },
                {
                    "name": "Luxembourg",
                    "itemStyle": {
                        "normal": {
                            "color": "#4F4BD9",
                            "borderColor": "#4F4BD9"
                        }
                    }
                },
                {
                    "name": "Elementary and Secondary Institutions(Public)",
                    "itemStyle": {
                        "normal": {
                            "color": "#4D291C",
                            "borderColor": "#4D291C"
                        }
                    }
                },
                {
                    "name": "Higher Education Institutions(Public)",
                    "itemStyle": {
                        "normal": {
                            "color": "#009c7a",
                            "borderColor": "#009c7a"
                        }
                    }
                },
                {
                    "name": "Higher Education Institutions (Private)",
                    "itemStyle": {
                        "normal": {
                            "color": "#986F0B",
                            "borderColor": "#986F0B"
                        }
                    }
                },
                {
                    "name": "Elementary and Secondary Institutions(Private)",
                    "itemStyle": {
                        "normal": {
                            "color": "#3C8EA4",
                            "borderColor": "#3C8EA4"
                        }
                    }
                },
                {
                    "name": "All Institutions (Public) ",
                    "itemStyle": {
                        "normal": {
                            "color": "#4F82BE",
                            "borderColor": "#4F82BE"
                        }
                    }
                },
                {
                    "name": "All Institutions (Private)",
                    "itemStyle": {
                        "normal": {
                            "color": "#D38017",
                            "borderColor": "#D38017"
                        }
                    }
                },
                {
                    "name": "All Institutions (Total)",
                    "itemStyle": {
                        "normal": {
                            "color": "#D38017",
                            "borderColor": "#D38017"
                        }
                    }
                }

            ],

            links: data.links,
            focusNodeAdjacency: 'allEdges',
            nodeStyle: {},
            itemStyle: {

                borderWidth: 1,
                borderColor: '#aaa'

            },
            lineStyle: {
                color: 'source',
                curveness: 0.5
            }
        }]
    });
});