const createSvg = ({width, height, borderWidth, startColor, endColor, insetShadowBlur, outShadowBlur}) => {
    const padding = 3 * outShadowBlur;
    const gWidth = width + 2 * padding;
    const gHeight = height + 2 * padding;
    const rectPath = `m${padding} ${padding} l${width} ${0} l${0} ${height} l${-width} ${0 - 20} z`;
    return (`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
            x="0px" y="0px" 
            viewBox="0 0 ${gWidth} ${gHeight}"
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
               
                .st3 {
                    fill: transparent;
                    stroke: url(#chart-gradient);
                    stroke-width: ${outShadowBlur}px;
                    filter: url(#chart-outset-shadow);
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

                <filter id="chart-outset-shadow" width="200%" height="200%" x="-50%" y="-50%">
            		<feGaussianBlur in="SourceGraphic" result="gassOut" stdDeviation="3" />
            		<feMerge>
            			<feMergeNode in="gassOut" />
            		</feMerge>
            	</filter>
            	
                <clipPath id="chart-move-clip">
                    <rect class="sweep-slow-animate" x="0" y="0" width="${gWidth}" height="${gHeight}" />
                </clipPath>
            </defs>
            <g>
                <path class="st1" d="${rectPath}" />
                <path class="st2" d="${rectPath}" />
                <path class="st3" d="${rectPath}" />
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
    [120, 200, 150, 80, 70, 110, 130]
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
                
                console.log(api.style(), params)
                
                const h = api.coord([0, 0])[1];
                const barWidth = 50;
                const outShadowBlur = 5;
                
                const width = barWidth + 3 * outShadowBlur;
                const height = h - px[1] + 6 * outShadowBlur;
                const x = px[0] - width * 0.5;
                const y = px[1] - 3 * outShadowBlur;
                
                const svgUrl = cretateSvgUrl({
                    width, 
                    height,
                    borderWidth: 5,
                    startColor: '#156dff', 
                    endColor: '#00eaeb', 
                    insetShadowBlur: 16,
                    outShadowBlur,
                });
    
                return {
                    type: 'image',
                    style: {
                        image: svgUrl,
                        x,
                        y,
                        width,
                        height,
                    },
                };
            },
            data: dataSet[1],
        },
    ],
};