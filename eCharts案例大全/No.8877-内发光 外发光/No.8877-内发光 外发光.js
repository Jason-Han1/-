const createSvg = ({width, height, borderWidth, startColor, endColor, insetShadowBlur, slope = 20, left = true}) => {
    let rectPath = '';
    if (left) {
        rectPath = `m${0} ${0} l${width} ${0} l${0} ${height} l${-width} ${0 - slope} z`;
    } else {
        rectPath = `m${0} ${0} l${width} ${0} l${0} ${height - slope} l${-width} ${slope} z`;
    }
    return (`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
            x="0px" y="0px" 
            viewBox="0 0 ${width} ${height}"
            xml:space="preserve"
        >
            <style>
               
                .st1 {
                    fill: transparent;
                    stroke: ${startColor};
                    stroke-width: ${insetShadowBlur}px;
                    filter: url(#chart-inset-shadow);
                    clip-path: url(#chart-clip);
                }
                
                .st2 {
                    fill: transparent;
                    stroke: url(#chart-gradient);
                    stroke-width: ${borderWidth}px;
                    clip-path: url(#chart-clip);
                }
               

                .sweep-slow-animate {
                  animation-name: sweep-slow-path;
                  animation-timing-function: linear;
                  animation-iteration-count: infinite;
                  animation-duration: 12s;
                }
            
                @keyframes sweep-slow-path {
                  0% {
                    transform: translateY(0%);
                  }
                  100% {
                    transform: translateY(100%);
                  }
                }
            </style>
            <defs>
                <linearGradient id="chart-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="${startColor}"/>
                    <stop offset="100%" stop-color="${endColor}"/>
                </linearGradient>
                
                <clipPath id="chart-clip">
                    <path d="${rectPath}" />
                </clipPath>
                
                <filter id="chart-inset-shadow" width="200%" height="200%" x="-50%" y="-50%">
            		<feGaussianBlur in="SourceGraphic" result="gass" stdDeviation="${insetShadowBlur * 0.75}" />
            		<feMerge>
            			<feMergeNode in="gass" />
            		</feMerge>
            	</filter>

                <clipPath id="chart-move-clip">
                    <rect class="sweep-slow-animate" x="0" y="0" width="${width}" height="${height}" />
                </clipPath>
            </defs>
            <g>
                <path class="st1" d="${rectPath}" />
                <path class="st2" d="${rectPath}" />
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
    ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    [120, 200, 150, 80, 70, 110, 130],
    [180, 300, 100, 40, 80, 100, 230],
];

option = {
    backgroundColor: '#101631',
    xAxis: {
        type: 'category',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: 'rgba(255,255,255, 0.5)',
        },
        splitLine: {
            show: false,
        },
        data: dataSet[0],
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: 'rgba(255,255,255, 0.5)',
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: 'rgba(255,255,255,0.1)',
                width: 2,
            },
        },
    },
    series: [
        {
            type: 'custom',
            hoverAnimation: true,
            renderItem:  (params, api) => {
               
                const index = api.value(0);
                const value = api.value(1);
                const px = api.coord([index, value]);
                
                const h = api.coord([0, 0])[1];
                const barWidth = 40;
                const outShadowBlur = 0;
                
                const width = barWidth;
                const height = h - px[1];
                const x = px[0] - width * 0.5 - 22;
                const y = px[1];
                
                const svgUrl = cretateSvgUrl({
                    width, 
                    height,
                    borderWidth: 5,
                    startColor: '#156dff', 
                    endColor: '#00eaeb', 
                    insetShadowBlur: 16,
                });
    
                return {
                    type: 'image',
                    style: {
                        image: svgUrl,
                        x,
                        y,
                        width,
                        height,
                        shadowColor: '#156dff',
                        shadowBlur: 10,
                    },
                };
            },
            
            itemStyle: {
                color: 'yellow',
                borderColor: 'green',
                shadowColor: 'green',
                shadowBlur: 10,
            },
            
            data: dataSet[1],
        },
        {
            type: 'custom',
            hoverAnimation: true,
            renderItem:  (params, api) => {
               
                const index = api.value(0);
                const value = api.value(1);
                const px = api.coord([index, value]);
                
                console.log(api.style(), value)
                
                const h = api.coord([0, 0])[1];
                const barWidth = 40;
                const outShadowBlur = 0;
                
                const width = barWidth;
                const height = h - px[1];
                const x = px[0] - width * 0.5 + 22;
                const y = px[1];
                
                const svgUrl = cretateSvgUrl({
                    width, 
                    height,
                    borderWidth: 5,
                    startColor: '#00eaeb', 
                    endColor: '#00eaeb', 
                    insetShadowBlur: 16,
                    left: false,
                });
    
                return {
                    type: 'image',
                    style: {
                        image: svgUrl,
                        x,
                        y,
                        width,
                        height,
                        shadowColor: '#00eaeb',
                        shadowBlur: 10,
                    },
                };
            },
            
            itemStyle: {
                color: 'yellow',
                borderColor: 'green',
                shadowColor: 'green',
                shadowBlur: 10,
            },
            
            data: dataSet[2],
        },
    ],
};