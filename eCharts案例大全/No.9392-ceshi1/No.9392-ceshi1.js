const page = 20;
const allMaterial = [
    "E2XX/E2SB/E2UL 副车架",
    "E2XX/E2SB/E2UL 副车架",
    "E2XX/E2SB/E2UL 副车架",
    "E2XX/E2SB/E2UL 副车架",
    "E2XXE2UL 副车架",
    "E2XXE2SB 后桥",
    "E2SB 副车架",
    "A2LL 后桥",
    "A2LL 后桥",
    "MQB  AA AB 副车架",
    "PQ25 副车架",
    "MQB BC BD 副车架",
    "MQB BC BD 副车架",
    "B SUV 副车架",
    "B SUV 副车架",
    "MQB BC BD 副车架",
    "MQB BC BD 副车架",
    "MQB A0  副车架",
    "MQB A0  副车架",
    "MQB  AA AB 副车架",
    "MQB  AA AB 副车架",
    "NMS 副车架",
    "PQ25 副车架",
    "PQ25 副车架",
    "E2XX/E2SB/E2UL 副车架",
    "E2XXE2UL 副车架",
    "E2XX/E2UL 副车架",
    "E2XX/E2SB/E2UL 副车架",
    "E2XX/E2SB/E2UL 副车架",
    "E2XXE2UL 副车架",
    "E2XX/E2UL 副车架",
    "E2XXE2SB 后桥",
    "E2XXE2SB 后桥",
    "E2XXE2SB 后桥",
    "E2SB 副车架",
    "E2SB 副车架",
    "A2LL 后桥",
    "A2LL 后桥",
    "A2LL 后桥",
    "A2LL 后桥",
    "MQB 上横",
    "MQB 上横"
]

const allStorageData = [
    [
        "1120",
        "3920",
        "1120",
        "3920"
    ],
    [
        "1120",
        "3920",
        "1120",
        "3920"
    ],
    [
        "5880",
        "10080",
        "5880",
        "10080"
    ],
    [
        "5880",
        "10080",
        "5880",
        "10080"
    ],
    [
        "3150",
        "5400",
        "3150",
        "5400"
    ],
    [
        "300",
        "2100",
        "300",
        "2100"
    ],
    [
        "1350",
        "2240",
        "1350",
        "2240"
    ],
    [
        "900",
        "1125",
        "900",
        "1125"
    ],
    [
        "300",
        "1125",
        "300",
        "1125"
    ],
    [
        "3000",
        "28800",
        "3000",
        "28800"
    ],
    [
        "1500",
        "28800",
        "1500",
        "28800"
    ],
    [
        "9900",
        "9900",
        "9900",
        "9900"
    ],
    [
        "3750",
        "3750",
        "3750",
        "3750"
    ],
    [
        "1190",
        "1190",
        "1190",
        "1190"
    ],
    [
        "2240",
        "2240",
        "2240",
        "2240"
    ],
    [
        "3450",
        "3450",
        "3450",
        "3450"
    ],
    [
        "1125",
        "1125",
        "1125",
        "1125"
    ],
    [
        "7200",
        "7200",
        "7200",
        "7200"
    ],
    [
        "3900",
        "3900",
        "3900",
        "3900"
    ],
    [
        "825",
        "3825",
        "825",
        "3825"
    ],
    [
        "2100",
        "28800",
        "2100",
        "28800"
    ],
    [
        "600",
        "28800",
        "600",
        "28800"
    ],
    [
        "6000",
        "28800",
        "6000",
        "28800"
    ],
    [
        "7680",
        "28800",
        "7680",
        "28800"
    ],
    [
        "5000",
        "3920",
        "5000",
        "3920"
    ],
    [
        "3800",
        "3920",
        "3800",
        "3920"
    ],
    [
        "2300",
        "3920",
        "2300",
        "3920"
    ],
    [
        "2000",
        "3920",
        "2000",
        "3920"
    ],
    [
        "1900",
        "10080",
        "1900",
        "10080"
    ],
    [
        "1750",
        "10080",
        "1750",
        "10080"
    ],
    [
        "2100",
        "5400",
        "2100",
        "5400"
    ],
    [
        "4250",
        "5400",
        "4250",
        "5400"
    ],
    [
        "6300",
        "14850",
        "6300",
        "14850"
    ],
    [
        "7800",
        "14850",
        "7800",
        "14850"
    ],
    [
        "2450",
        "2240",
        "2450",
        "2240"
    ],
    [
        "2050",
        "2240",
        "2050",
        "2240"
    ],
    [
        "1575",
        "1125",
        "1575",
        "1125"
    ],
    [
        "975",
        "1125",
        "975",
        "1125"
    ],
    [
        "1850",
        "1125",
        "1850",
        "1125"
    ],
    [
        "1150",
        "1125",
        "1150",
        "1125"
    ],
    [
        "21000",
        "1125",
        "21000",
        "1125"
    ],
    [
        "28800",
        "1125",
        "28800",
        "1125"
    ]
]

const allMaxData = [
    "791",
    "802",
    "230",
    "893",
    "68",
    "963",
    "289",
    "438",
    "619",
    "991",
    "988",
    "851",
    "864",
    "981",
    "901",
    "667",
    "237",
    "93",
    "41",
    "253",
    "335",
    "835",
    "657",
    "96",
    "764",
    "741",
    "625",
    "489",
    "470",
    "224",
    "355",
    "162",
    "834",
    "597",
    "229",
    "865",
    "555",
    "99",
    "815",
    "985",
    "176",
    "490"
]

const allMinData = [
    "48",
    "21",
    "58",
    "3",
    "100",
    "90",
    "30",
    "34",
    "16",
    "11",
    "99",
    "96",
    "62",
    "51",
    "64",
    "11",
    "14",
    "19",
    "16",
    "35",
    "88",
    "74",
    "17",
    "25",
    "64",
    "97",
    "32",
    "42",
    "65",
    "29",
    "45",
    "50",
    "75",
    "94",
    "82",
    "74",
    "11",
    "74",
    "5",
    "72",
    "63",
    "99"
]

// const timeLineNames = ['1', "2"]
const numberOfPage = (allMaterial.length % page == 0) ? (allMaterial.length/page) : (parseInt(allMaterial.length / page) + 1);
const timeLineNames = new Array(numberOfPage).fill("0").map((d, i) => {
    // console.log("i", i)
    return i
})
console.log("timeLineNames", timeLineNames)
option = {
    baseOption: {
        timeline: {
                // data: ['all'],
                data: timeLineNames,
                axisType: 'category',
                autoPlay: false,
                playInterval: 5000,
                left: '10%',
                right: '10%',
                bottom: '0%',
                width: '80%',
                //  height: null,
                label: {
                    normal: {
                        textStyle: {
                            color: '#ddd'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                symbolSize: 10,
                lineStyle: {
                    color: '#555'
                },
                checkpointStyle: {
                    borderColor: '#777',
                    borderWidth: 2
                },
                controlStyle: {
                    showNextBtn: true,
                    showPrevBtn: true,
                    normal: {
                        color: '#666',
                        borderColor: '#666'
                    },
                    emphasis: {
                        color: '#aaa',
                        borderColor: '#aaa'
                    }
                },

            },
        "title": {
            "text": "库存预估",
            "left": "center"
        },
        "xAxis": [{
            "data": []
        }],
        "yAxis": {
            "type": "value"
        },
        "grid": {
            "left": "5%",
            "right": "3%"
        },
        "dataZoom": [{
            "type": "inside"
        }],
        "tooltip": {
            "show": true
        },
        "series": [{
                "type": "k",
                "itemStyle": {
                    "color": "rgba(45, 233, 72, 0.58)",
                    "borderColor": "rgb(114,198,126)",
                    "color0": "rgb(90,161,244)",
                    "borderColor0": "rgb(90,161,244)"
                }
            },
            {
                "type": "scatter",
                "symbol": "diamond",
                "color": "green",
                "itemStyle": {
                    "opacity": 1,
                    "borderColor": "#999"
                },
                "label": {
                    "normal": {
                        "show": false
                    }
                },
                "symbolSize": 10,
                "z": 20
            },
            {
                "type": "scatter",
                "symbol": "diamond",
                "color": "red",
                "itemStyle": {
                    "opacity": 1,
                    "borderColor": "#999"
                },
                "symbolSize": 10,
                "z": 10
            }
        ]
    }
}

const options = [];
console.log(" allMaterial.length",  allMaterial.length);
for(var i = 0; i < numberOfPage; i++) {
    const endPage = (i+1)*page > allMaterial.length ? allMaterial.length - 1 : (i+1)*page - 1;
    console.log("endPage", endPage)
    options.push({ "xAxis": {data: allMaterial.slice(i*page, endPage)},
    series: [{
            "data": allStorageData.slice(i, endPage),
           
        },
        {
            
            "data": allMaxData.slice(i, endPage)
        },
        {
            
            "data": allMinData.slice(i, endPage)
        }
    ]
});
}
option.options = options

console.log(option)