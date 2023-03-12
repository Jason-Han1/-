const createSvg = ({width, height, shadowColor, shadowBlur, points}) => {
    const ret = [`M${points[0][0]} ${points[0][1]}`];
    for (let i = 1; i < points.length; i++) {
        ret.push(`L${points[i][0]} ${points[i][1]}`);
    }
    ret.push('Z');
    const rectPath = ret.join(' ');
    return (`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
            x="0px" y="0px" 
            width="${width}"
            height="${height}"
        >
            <style>
                .st1 {
                    fill: transparent;
                    stroke: ${shadowColor};
                    stroke-width: ${shadowBlur}px;
                    filter: url(#chart-inset-shadow);
                    clip-path: url(#chart-clip);
                }

            </style>
            <defs>
              
                <clipPath id="chart-clip">
                    <path d="${rectPath}" />
                </clipPath>
                
                <filter id="chart-inset-shadow" width="200%" height="200%" x="-50%" y="-50%">
            		<feGaussianBlur in="SourceGraphic" result="gass" stdDeviation="${shadowBlur * 0.75}" />
            		<feMerge>
            			<feMergeNode in="gass" />
            		</feMerge>
            	</filter>

            </defs>
            <g>
                <path class="st1" d="${rectPath}" />
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

const dataSet = [
    ['项目1', '项目2','项目3', '项目4', '项目5'],
    [100, 90, 80, 66, 90],
    [70, 30, 60, 86, 20],
];

const maxValue = [...dataSet[1], ...dataSet[2]].reduce((m, v) => Math.max(m, v), -Infinity);

const radius = 0.8;
const theta = Math.PI * 2 / dataSet[2].length;

const getPoints = (R, ps, max) => ps.map((v, i) => {
    const t = i * theta;
    const d = v / max;
    const x = R - Math.sin(t) * R * d;    
    const y = R - Math.cos(t) * R * d;
    return [x, y];
});

option = {
    backgroundColor: '#000000',
    tooltip: {
        // trigger: 'axis',
        // show: true
    },
    polar: {
        radius: radius * 100 + '%',
        center: ['50%', '50%'],
    },
    angleAxis: {
        type: 'category',
        clockwise: false,
        boundaryGap: false,
        splitLine: {
            show: false,
        },
        axisLine: {
            show: false
        }
    },
    radiusAxis: {
        type: 'value',
        max: 100,
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    radar: {
        indicator: dataSet[0].map((v, i) => ({name: v, max: maxValue})),
        radius: radius * 100 + '%',
        center: ['50%', '50%'],
        shape: 'polygon',
        splitNumber: 4,
        name: {
            textStyle: {
                color: '#ffffff',
                fontSize: 22
            }
        },
        splitArea: {
            areaStyle: {
                color: [
                    'rgba(255,255,255,0.1)',
                    'rgba(255,255,255,0.03)',
                    'rgba(255,255,255,0.1)',
                    'rgba(255,255,255,0.03)',
                ]
            }
        },
        splitLine: {
            lineStyle: {
                color: [
                    '#6b6b6b', '#6b6b6b',
                    '#6b6b6b', '#6b6b6b',
                    '#6b6b6b', '#6b6b6b'
                ].reverse(),
                width: 3
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(238,238,238, 0.2)'
            }
        }
    },
    
    series: [
        {
            type: 'custom',
            name: 's1-inset-shadow',
            silent: true,
            coordinateSystem : 'polar', 
            data: [0],
            renderItem: (params,api) => {
                const R = params.coordSys.r;
                const cx = params.coordSys.cx;
                const cy = params.coordSys.cy;
                
                const x = cx - R;
                const y = cy - R;
                const width = 2 * R;
                const height = 2 * R;
                
                return {
                    type: 'image',
                    style: {
                        image: cretateSvgUrl({
                            width, height,
                            shadowColor: 'rgba(13, 178, 255, 1)',
                            shadowBlur: 30, 
                            points: getPoints(R, dataSet[1], 100)
                        }),
                        x,
                        y,
                        width, 
                        height,
                    },
                };
            },
        },
        {
            name: 's1',
            type: 'radar',
            tooltip: {
                trigger: 'item'
            },
            data: [
                { value: dataSet[1] }
            ],
            symbol: 'circle',
            symbolSize: 12,
            itemStyle: {
                normal: {
                    color: 'rgba(87,201,255,0.8)',
                    borderColor: 'rgba(87,201,255,0.2)',
                    borderWidth: 12,
                }
            },
            areaStyle: {
                normal: {
                    color: 'transparent',
                }
            },
            lineStyle: {
                normal: {
                    color: 'rgba(13, 178, 255, 1)',
                    width: 5
                }
            },

        },
        {
            type: 'custom',
            name: 's2-inset-shadow',
            silent: true,
            coordinateSystem : 'polar', 
            data: [0],
            renderItem: (params,api) => {
                const R = params.coordSys.r;
                const cx = params.coordSys.cx;
                const cy = params.coordSys.cy;
                
                const x = cx - R;
                const y = cy - R;
                const width = 2 * R;
                const height = 2 * R;
                
                return {
                    type: 'image',
                    style: {
                        image: cretateSvgUrl({
                            width, height,
                            shadowColor: 'yellow',
                            shadowBlur: 30, 
                            points: getPoints(R, dataSet[2], 100)
                        }),
                        x,
                        y,
                        width, 
                        height,
                    },
                };
            },
        },
        {
            name: 's2',
            type: 'radar',
            tooltip: {
                trigger: 'item'
            },
            data: [
                { value: dataSet[2] }
            ],
            symbol: 'circle',
            symbolSize: 12,
            itemStyle: {
                normal: {
                    color: 'rgba(87,201,255,0.8)',
                    borderColor: 'rgba(87,201,255,0.2)',
                    borderWidth: 12,
                }
            },
            areaStyle: {
                normal: {
                    color: 'transparent',
                }
            },
            lineStyle: {
                normal: {
                    color: 'yellow',
                    width: 5
                }
            },
            z: 3,
        },
       
    ]


};