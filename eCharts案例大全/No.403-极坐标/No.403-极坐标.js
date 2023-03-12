var uploadedDataURL = "/asset/get/s/data-1537519874661-sKxXo9lsW.png";

var radarStyle = document.createElement("style"); 
var str = `
    #chart-panel:after {
        width: 100%;
        height: 100%;
        content: ' ';
        display: block;
        background: url("/asset/get/s/data-1537519874661-sKxXo9lsW.png");
        background-size: 50%;
        background-position: center;
        background-repeat: no-repeat;
        position: absolute;
        top: 10px;
        left: 0;
        right: 0;
        margin: 0 auto;
        -webkit-animation: radar-beam 3s infinite linear; /*匀速 循环*/
        z-index: 20;
        transform: translate(-50%,0);
	}
	@keyframes radar-beam {
	  0% {
	    transform: rotate(0deg);
	  }
	  100% {
	    transform: rotate(360deg);
	  }
	}
`;
if(radarStyle.styleSheet){         //ie下  
    radarStyle.styleSheet.cssText = str;  
} else {  
    radarStyle.innerHTML = str;
};
document.getElementsByTagName("head")[0].appendChild(radarStyle);


var dataArr = [
    [
        [20, 0],
        [130, 0]
    ],
    [
        [30, 1],
        [130, 1]
    ],
    [
        [40, 1.5],
        [130, 2]
    ],
    [
        [10, 2.5],
        [130, 3]
    ],
    [
        [20, 3.5],
        [130, 4]
    ],
    [
        [20, 5.5],
        [130, 5]
    ],
    [
        [40, 5.5],
        [130, 6]
    ],
    [
        [20, 6.5],
        [130, 7]
    ],
    [
        [60, 8],
        [130, 8]
    ],
    [
        [20, 9],
        [130, 9]
    ]
]
var series = []
for (var i = 0; i < dataArr.length; i++) {
    series.push({
        coordinateSystem: 'polar',
        name: 'line',
        type: 'line',
        z: 20,
        lineStyle: {
            color: '#0fe3ec',
            width: 1
        },
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
            color: '#fbbc5e'
        },
        data: dataArr[i]
    })
}
option = {
    backgroundColor: '#22287a',
    grid: {
        left: '20%',
        right: '20%'
    },

    angleAxis: {
        interval: 1,
        type: 'category',
        data: ['{a|12234}\n个体户',
            '{a|530}\n失信公告',
            '{a|180+万}\n黑名单数据',
            '{a|512+亿}\n舆情信息',
            '{a|12326}\n海关信息',
            '{a|1.65+亿}\n地址信息',
            '{a|4500}\n组代信息',
            '{a|2500}\n裁判文书',
            '{a|1300}\n开庭公告',
            '{a|5323}\n企业主体'
        ],
        z: 10,
        axisLine: {
            show: false,
            lineStyle: {
                color: "#1d51a3",
                width: 1,
                type: "dashed",
                opacity: 0.7
            }
        },
        axisLabel: {
            interval: 0,
            show: true,
            color: "#d5d5dd",
            margin: 2,
            fontSize: 11,
            lineHeight: 15,
            align: 'center',
            rich: {
                a: {
                    align: 'center',
                }
            }
        },
        axisTick: {
            show: true
        }
    },
    radiusAxis: {
        min: 0,
        max: 100,
        interval: 20,
        axisLine: {
            show: false,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "dashed"
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: "#1d51a3",
                width: 1,
                type: "dashed",
                opacity: 0.7
            }
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: '#1d51a3',
                opacity: 0.5
            }
        }
    },
    polar: {},
    geo: {
        map: 'world',
        left: '30%',
        right: '30%',
        z: 15,
        label: {
            emphasis: {
                show: false
            }
        },
        mapType: 'world',
        itemStyle: {
            normal: {
                areaColor: '#3dacdd',
                borderColor: '#3dacdd'
            },
            emphasis: {
                areaColor: '#3dacdd'
            }
        }
    },
    series: series
};