let dataArr = [5000, 4500, 4000, 3500, 3000, 2500, 2000, 1500, 1000];
let obj1 = {
    "value": 0,
    "name": "",
    label: {
        normal: {
            show: false
        }

    },
    "itemStyle": {
        "normal": {
            "color": "#2281d4",
            borderWidth: 3,
            borderColor: "transparent",
        }
    },
};

let datas = [];
for (var i = 0; i < dataArr.length; i++) {
    datas.push(obj1);
}
dataArr.map((item, index) => {
    let rotate = 0;
    rotate+=-20*index;
    if(index>4){
         rotate=10*(dataArr.length-index);
    }
    let obj2 = {
        "value": item,
        "name": "1",
        label: {
            normal: {
                rotate, //文字旋转角度，新版本只能单独设置
            }
        },

    };
    
    datas.push(obj2)
});
option = {
    backgroundColor: 'rgb(43, 51, 59)',
    color:["rgb(62, 131, 217)"],
    calculable: true,
    "tooltip": {
        "trigger": "item",
        "formatter": "{b}:<br/>{c}"
    },
    "calculable": true,
    "series": [{
        name: '半圆',
        type: 'pie',
        radius: ['0%', '5%'],
        startAngle: -180,
        hoverAnimation: false,
        legendHoverLink: true,
        label: {
            normal: {
                show: false
            }
        },
        data: [{
                value: '500',
                name: '半圆',
                label: {
                    show: false
                }
            },
            {
                value: '500',
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
            }
        ]
    }, {
        name: '第一条圆弧',
        type: 'pie',
        radius: ['9.8%', '10%'],
        startAngle: -180,
        hoverAnimation: false,
        legendHoverLink: true,
        label: {
            normal: {
                show: false
            }
        },
        data: [{
                value: '500',
                name: '第一条圆弧',
                label: {
                    show: false
                }
            },
            {
                value: '500',
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
            }
        ]
    }, {
        name: '第二条圆弧',
        type: 'pie',
        startAngle: -180,
        hoverAnimation: false,
        legendHoverLink: true,
        radius: ['19.8%', '20%'],
        label: {
            normal: {
                show: false
            }
        },
        data: [{
                value: '500',
                name: '第二条圆弧',

            },
            {
                value: '500',
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
            }
        ]

    }, {
        name: '第三条圆弧',
        type: 'pie',
        startAngle: -180,
        hoverAnimation: false,
        legendHoverLink: true,
        radius: ['29.8%', '30%'],
        label: {
            normal: {
                show: false
            }
        },
        data: [{
                value: '500',
                name: '第三条圆弧',

            },
            {
                value: '500',
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
            }

        ]
    }, {
        name: '第四条圆弧',
        type: 'pie',
        startAngle: -180,
        hoverAnimation: false,
        legendHoverLink: true,
        radius: ['39.8%', '40%'],
        label: {
            normal: {
                show: false
            }
        },
        data: [{
                value: '500',
                name: '第四条圆弧',
            },
            {
                value: '500',
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
            }
        ]
    }, {
        name: '第五条圆弧',
        type: 'pie',
        startAngle: -180,
        hoverAnimation: false,
        legendHoverLink: true,
        radius: ['49.8%', '50%'],
        label: {
            normal: {
                show: false
            }
        },
        data: [{
                value: '500',
                name: '第五条圆弧',

            },
            {
                value: '500',
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
            }
        ]
    }, {
        name: '第六条圆弧',
        type: 'pie',
        startAngle: -180,
        hoverAnimation: false,
        legendHoverLink: true,
        radius: ['59.8%', '60%'],
        label: {
            normal: {
                show: false
            }
        },
        data: [{
                value: '500',
                name: '第六条圆弧',
            },
            {
                value: '500',
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
            }
        ]
    }, {
        "name": "工作类型",
        "type": "pie",
        "radius": [
            37,
            255
        ],
        "avoidLabelOverlap": false,
        "startAngle": 0,
        "center": [
            "50.1%",
            "50%"
        ],
        "roseType": "area",
        "selectedMode": "single",
        "label": {
            "normal": {
                "show": true,
                "formatter": "{b} {c}",
                position: 'inside',
                color: "#fff",
            },
            "emphasis": {
                "show": true
            }
        },
        "labelLine": {
            "normal": {
                "show": false,
            }
        },
        "itemStyle": {
            "normal": {
                "color": "#2281d4",
                borderWidth: 3,
                borderColor: "#4b5bd0",
            }
        },
        "data": datas
        //     [{
        //             "value":0,
        //             "name": "",
        //             label: {
        //                 normal: {
        //                     show: false
        //                 }

        //             },
        //              "itemStyle": {
        //                 "normal": {
        //                     "color": "#2281d4",
        //                     borderWidth: 3,
        //                     borderColor: "transparent",
        //                 }
        //             },
        //         },
        //         {
        //             "value": 0,
        //             "name": "",
        //             label: {
        //                 normal: {
        //                     show: false
        //                 }

        //             }
        //         },
        //         {
        //             "value": 0,
        //             "name": "",
        //             label: {
        //                 normal: {
        //                     show: false
        //                 }

        //             }

        //         },
        //         {
        //             "value": 0,
        //             "name": "",
        //             label: {
        //                 normal: {
        //                     show: false
        //                 }

        //             }
        //         },
        //         {
        //             "value": 0,
        //             "name": "",
        //             label: {
        //                 normal: {
        //                     show: false
        //                 }

        //             }
        //         },
        //         {
        //             "value": 0,
        //             "name": "",
        //             label: {
        //                 normal: {
        //                     show: false
        //                 }

        //             }

        //         },
        //         {
        //             "value": 0,
        //             "name": "",
        //             label: {
        //                 normal: {
        //                     show: false
        //                 }

        //             }
        //         },
        //         {
        //             "value": 0,
        //             "name": "",
        //             label: {
        //                 normal: {
        //                     show: false
        //                 }

        //             }
        //         },
        //         {
        //             "value": 0,
        //             "name": "",
        //             label: {
        //                 normal: {
        //                     show: false
        //                 }

        //             }
        //         }, {
        //             "value": 5000,
        //             "name": "1",
        //              label:{
        //                 normal:{
        //                       rotate:0,//文字旋转角度，新版本只能单独设置


        //                 }
        //             },

        //         },
        //         {
        //             "value": 4500,
        //             "name": "2",
        //              label:{
        //                 normal:{
        //                       rotate:-30//文字旋转角度，新版本只能单独设置
        //                 }
        //             },

        //         },
        //         {
        //             "value": 4000,
        //             "name": "3",
        //              label:{
        //                 normal:{
        //                       rotate:-50//文字旋转角度，新版本只能单独设置
        //                 }
        //             },

        //         },
        //         {
        //             "value": 3500,
        //             "name": "4",
        //              label:{
        //                 normal:{
        //                       rotate:-70//文字旋转角度，新版本只能单独设置
        //                 }
        //             },

        //         },
        //         {
        //             "value": 3000,
        //             "name": "5",
        //              label:{
        //                 normal:{
        //                       rotate:-90//文字旋转角度，新版本只能单独设置
        //                 }
        //             },

        //         },
        //         {
        //             "value": 2500,
        //             "name": "6",
        //              label:{
        //                 normal:{
        //                       rotate:70//文字旋转角度，新版本只能单独设置
        //                 }
        //             },

        //         },
        //         {
        //             "value": 2000,
        //             "name": "7",
        //              label:{
        //                 normal:{
        //                       rotate:50//文字旋转角度，新版本只能单独设置
        //                 }
        //             },

        //         },
        //         {
        //             "value": 1500,
        //             "name": "8",
        //              label:{
        //                 normal:{
        //                       rotate:30//文字旋转角度，新版本只能单独设置
        //                 }
        //             },

        //         },
        //         {
        //             "value": 1000,
        //             "name": "9",
        //              label:{
        //                 normal:{
        //                       rotate:10//文字旋转角度，新版本只能单独设置
        //                 }
        //             },

        //         },

        // ]
    }]
};