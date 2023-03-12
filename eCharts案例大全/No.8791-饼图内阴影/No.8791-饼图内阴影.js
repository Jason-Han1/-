const createSvg = ({radius, startAngle, endAngle, shadowColor, shadowBlur}) => {
    const startX = radius * (1 + Math.cos(startAngle));
    const startY = radius * (1 - Math.sin(startAngle));
    const endX = radius * (1 + Math.cos(endAngle));
    const endY = radius * (1 - Math.sin(endAngle));
    const ret = [`M${radius} ${radius}`];
    ret.push(`L${startX} ${startY}`);
    ret.push(`A${radius} ${radius} 0 ${Math.abs(endAngle - startAngle) > Math.PI ? 1 : 0} 1 ${endX} ${endY}`);
    ret.push('Z');
    const rectPath = ret.join(' ');
    return (`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
            x="0px" y="0px" 
            width="${radius * 2}"
            height="${radius * 2}"
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
];


const radius = '56%';
const center = ['50%', '50%'];

const dataToPie = (data) => {
    const accData = data.reduce((acc, v, i) => {
        const prev = i === 0 ? 0 : acc[i - 1];
        acc.push(prev + v);
        return acc;
    }, []);

    const total = accData[data.length - 1];
    return accData.map((t, idx) => {
        const endAngle = Math.PI * 0.5 - t / total * Math.PI * 2;
        const startAngle = endAngle + data[idx] / total * Math.PI * 2;
        return {
         startAngle,
         endAngle,
         value: data[idx]
        };
    });
};

const pieData = dataToPie(dataSet[1]);

option = {
    backgroundColor: '#000000',
    tooltip: {
        // trigger: 'axis',
        // show: true
    },
    polar: {
        radius,
        center,
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
   
    series: [
        {
            type: 'custom',
            name: 's1-inset-shadow',
            silent: true,
            coordinateSystem : 'polar', 
            data: dataSet[1],
            renderItem: (params, api) => {
                const R = params.coordSys.r;
                const cx = params.coordSys.cx;
                const cy = params.coordSys.cy;
                
                const x = cx - R;
                const y = cy - R;
                const width = 2 * R;
                const height = 2 * R;
                
                const value0 = api.value(0);
                const value1 = api.value(1);
                
                const pie = pieData[value1];
                console.log(params, pie)
                
                return {
                    type: 'image',
                    style: {
                        image: cretateSvgUrl({
                            radius: R,
                            startAngle: pie.startAngle,
                            endAngle: pie.endAngle,
                            shadowColor: 'rgba(13, 178, 255, 1)',
                            shadowBlur: 30
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
            type: 'pie',
            data: dataSet[1],
            radius,
            center,
            itemStyle: {
                color: 'transparent',
                borderColor: 'yellowgreen'
            }
        },
        
       
    ]


};