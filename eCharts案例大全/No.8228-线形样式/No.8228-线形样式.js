var xAxisData = [
            "A044","A043","A003","A027","A061","A008","A054","A004","A023","A050","A034","A031","A005",
            "A001","A049","A048","A046","A037","A030","A024","A014","A029","A028","A010","A007",
            "A063","A056","A055","A047","A040",
            "A039","A035","A020","A018","A013","A012","A053","A051","A041","A038","A019","A002",
            "A052","A045","A036","A033","A021","A026","A025",
            "A016","A006","A060","A059","A022","A017","A011","A058","A057","A032","A015","A009","A042","A062"];
var seriesData = [
                27.19,27.23,27.24,27.25,27.26,27.26,27.27,27.27,27.28,27.29,27.29,27.29,
                27.29,27.29,27.3,27.3,27.3,27.3,27.3,27.3,27.3,27.31,27.31,27.31,27.31,27.32,
                27.32,27.32,27.32,27.32,27.32,27.32,27.32,27.32,27.32,27.32,27.33,27.33,27.33,
                27.33,27.33,27.33,27.34,27.34,27.34,27.34,27.34,27.35,27.35,27.35,27.35,27.36,
                27.36,27.36,27.36,27.36,27.37,27.38,27.39,27.4,27.4,27.47,27.52
            ];
            
option = {
    "title":{
        "text":"带箭头指向的最大最小值","left":"center"
        
    },
    "tooltip":{
        "trigger":"axis"
        
    },
    "xAxis":{
        "type":"category",
        "axisLabel":{
            "rotate":-90,"interval":0
        },
        "axisTick":{"alignWithLabel":true,"interval":0},
        "boundaryGap":["20%","20%"],
        "data":xAxisData
        
    },
    "yAxis":{
        "min":21.752,
        "max":33.024,
        "axisLine":{"show":false},
        "type":"value","axisLabel":{}
    },
    "series":[
        {
            "name":"灰分",
            "type":"line",
            "data":seriesData,
            "markPoint":{
                "data":[
                    {
                        "coord":["A062",27.52],"value":27.52,
                        "itemStyle":{ "color":"transparent"},
                        "label":{
                            "color":"#000000",
                            "offset":[0,0],
                                formatter:"{c}",
                                rich: {zwz: {color: 'red',lineHeight: 10}
                            }
                        }
                    },
                    {
                        "coord":["A062",22],"value":22,
                        "itemStyle":{ "color":"transparent"},
                        "label":{
                            "color":"#000000",
                            formatter:"最大值"
                        }
                    },
                    {
                        "coord":["A044",27.19],"value":27.19,
                        "itemStyle":{ "color":"transparent"},
                        "label":{
                            "color":"#000000",
                            "offset":[0,0],
                                formatter:"{c}",
                                rich: {zwz: {color: 'red',lineHeight: 10}
                            }
                        }
                    },
                    {
                        "coord":["A044",22],"value":22,
                        "itemStyle":{ "color":"transparent"},
                        "label":{
                            "color":"#000000",
                            formatter:"最小值"
                        }
                    },
                    {
                        "coord":["A035",27.32],"value":27.32,
                        "itemStyle":{ "color":"transparent"},
                        "label":{
                            "color":"#000000",
                            "offset":[0,0],
                                formatter:"{c}",
                                rich: {zwz: {color: 'red',lineHeight: 10}
                            }
                        }
                    },
                    {
                        "coord":["A035",22],"value":22,
                        "itemStyle":{ "color":"transparent"},
                        "label":{
                            "color":"#000000",
                            formatter:"中位值"
                        }
                    }
                ]
            },
            "markLine":{
                "data":[
                    [
                        {"symbol":"none","coord":["A062",22]},
                        {
                            "symbol":"arrow",
                            "label":{
                                "position":"middle",
                                "offset":[0,50],
                                "formatter":"","fontSize":14
                                
                            },
                            "coord":["A062",27.52]
                        }
                    ],[
                        {"symbol":"none","coord":["A044",22]},
                        {
                            "symbol":"arrow",
                            "label":{
                                "position":"middle",
                                "offset":[0,50],
                                "formatter":"","fontSize":14
                                
                            },
                            "coord":["A044",27.19]
                        }
                    ],[
                        {"symbol":"none","coord":["A035",22]},
                        {
                            "symbol":"arrow",
                            "label":{
                                "position":"middle",
                                "offset":[0,50],
                                "formatter":"","fontSize":14
                                
                            },
                            "coord":["A035",27.32]
                        }
                    ]
                ]
            },
            "symbol":"circle","symbolSize":6,"color":"#4f81bd"
        }
    ]
};
