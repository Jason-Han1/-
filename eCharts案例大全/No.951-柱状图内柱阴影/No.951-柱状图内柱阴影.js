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

const svgString = createSvg('#156dff', 8);
const svg = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });

const DOMURL = window.URL || window.webkitURL || window;
const insetShadowUrl = DOMURL.createObjectURL(svg);

const dataSet = [
    ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    [120, 200, 150, 80, 70, 110, 130],
];

option = {
    backgroundColor: '#101631',
    xAxis: {
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(125, 147, 202, 1)',
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: 'rgba(125, 147, 202, 1)',
            padding: [10, 0, 0, 0],
        },
        splitLine: {
            show: false,
        },
        data: dataSet[0],
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(125, 147, 202, 1)',
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: 'rgba(255,255,255, 0.5)',
            formatter: '{value}%',
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
            //三个最低下的圆片
            name: '',
            type: 'pictorialBar',
            symbolSize: [50, 15],
            symbolOffset: [1, 10],
            z: 12,
            itemStyle: {
                opacity: 1,
                color: '#12B9DB', // 100% 处的颜色,
            },
            data: [1, 1, 1, 1, 1, 1, 1],
        },

        {
            data: dataSet[1],
            type: 'pictorialBar',
            symbol: 'image://' + insetShadowUrl,
            barWidth: 50,
        },
        {
            data: dataSet[1],
            type: 'bar',
            barWidth: 50,
            itemStyle: {
                color: 'transparent',
                shadowColor: 'blue',
                shadowBlur: 12,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
            },
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [50, 15],
            symbolOffset: [1, -10],
            z: 12,
            itemStyle: {
                opacity: 1,
                color: '#12B9DB',
            },
            symbolPosition: 'end',
            data: dataSet[1],
        },
    ],
};
