const createSvg = () => {
    return (`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
            x="0px" y="0px" 
            width="${30}"
            height="${30}"
        >
            <style>
            </style>
            <defs>
            </defs>
            <g>
                <circle cx="5" cy="5" r="5" fill="yellow" />
                <circle cx="25" cy="5" r="5" fill="green" />
                <circle cx="5" cy="25" r="5" fill="green" />
                <circle cx="25" cy="25" r="5" fill="yellow" />
            </g>
        </svg>
    `);
    
};

const cretateSvgUrl = (svgOption) => {
    const svgString = createSvg(svgOption);
    const svg = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});
    
    const DOMURL = window.URL || window.webkitURL || window;
    const insetShadowUrl = DOMURL.createObjectURL(svg);
    
    return insetShadowUrl;
};

option = {
    backgroundColor: '#0f375f',
    tooltip: {},
    legend: {
        data: ['all'],
        textStyle: {color: '#ddd'}
    },
    xAxis: [
        {
            data: ['11月','12月','1月','2月','3月','4月'],
            axisTick: {show: false},
            axisLine: {show: false},
            axisLabel: {
                margin: 20,
                textStyle: {
                    color: '#ddd',
                    fontSize: 14
                }
            }
        }
    ],
    yAxis: {
        splitLine: {show: false},
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {show: false} 
    },
    markLine: {
        z: -1
    },
    animationEasing: 'linear',
    series: [
        {
            type: 'pictorialBar',
            name: 'all',
            barWidth: '30%',
            hoverAnimation: true,
            label: {
                show: true,
                position: 'top',
                formatter: '{c} m',
                fontSize: 16,
                color: '#e54035'
            },
            symbol: 'image://' + cretateSvgUrl(),
            symbolRepeat: true,
            symbolSize: ['100%', '100%'],
            symbolOffset: [0, 0],
            symbolMargin: '20%',
            symbolPosition: 'start', 
            data: [1200,1200,1500,906,1500,669].map((v)=>{
                return {
                    value: v,
                    animationDelay: function (dataIndex, params) {
                        return params.index * 30;
                    },
                };
            }),
            markLine: {
                symbol: ['none', 'none'],
                label: {
                    show: false
                },
                lineStyle: {
                    color: '#e54035',
                    width: 2
                },
                data: [{
                    yAxis: 844
                }]
            }
        }
    ]
};