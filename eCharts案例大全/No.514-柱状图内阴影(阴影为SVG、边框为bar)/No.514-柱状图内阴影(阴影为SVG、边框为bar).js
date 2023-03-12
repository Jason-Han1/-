const createSvg = (shadowColor, shadowBlur) => `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
        x="0px" y="0px" 
        viewBox="0 0 32 128"
        xml:space="preserve"
    >
        <style>
            .st2 {
                fill: transparent;
                stroke: ${shadowColor};
                stroke-width: ${shadowBlur}px;
                filter: url(#chart-inset-shadow);
            }
        </style>
        <defs>
            <filter id="chart-inset-shadow" width="200%" height="200%" x="-50%" y="-50%">
        		<feGaussianBlur in="SourceGraphic" result="gass" stdDeviation="${shadowBlur * 0.75}" />
        		<feMerge>
        			<feMergeNode in="gass" />
        		</feMerge>
        	</filter>
        </defs>
        <path class="st2" d="M0 0 L32 0 L32 128 L0 128 Z" />
    </svg>
`;


// 定义svg颜色
const svgString = createSvg('#00AAFF', 8);
const svgStringDY = createSvg('#FBB03B', 8);
const svg = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
const svgDY = new Blob([svgStringDY], { type: 'image/svg+xml;charset=utf-8' });

const DOMURL = window.URL || window.webkitURL || window;
const insetShadowUrl = DOMURL.createObjectURL(svg);
const insetShadowUrlDY = DOMURL.createObjectURL(svgDY);

const dataSet = [
    ['Mon', 'Tue', 'Wed'],
    [120, 200, 150],
    [220, 300, 450],
];

option = {
    backgroundColor: '#101631',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            //type: "shadow",
            textStyle: {
                color: '#fff',
            },
        },
    },
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
            name: '1',
            data: dataSet[1],
            type: 'pictorialBar',
            symbol: 'image://' + insetShadowUrl,
            symbolOffset: [-15, 0],
            barWidth: '10%',
           
        },
        {
            name: '1',
            data: dataSet[1],
            barWidth: '10%',
            barGap: "50%",
            type: 'bar',
            itemStyle: {
                color: 'transparent',
                borderWidth: 2,
                borderColor: "#3FA9F5",
            },
             xAxis:"15"
        },
        {
            barWidth: '10%',
            name: '2',
            symbolOffset: [15, 0],
            data: dataSet[2],
            type: 'pictorialBar',
            symbol: 'image://' + insetShadowUrlDY,
        },
        {
            name:"2",
            barGap: "50%",
            data: dataSet[2],
            type: 'bar',
            barWidth: '10%',
            itemStyle: {
                color: 'transparent',
                borderWidth: 2,
                borderColor:"rgba(251, 176,59)"
            },
        },
    ],
};
