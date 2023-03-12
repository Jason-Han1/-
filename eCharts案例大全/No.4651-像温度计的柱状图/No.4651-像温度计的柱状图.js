const createSvg = (shadowColor, shadowBlur) => `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
        x="0px" y="0px" 
        viewBox="0 0 32 128"
        xml:space="preserve"
    >
        <style>
            .st2 {
                fill: rgba(138, 167, 216, 0.1);
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

const svgString = createSvg('rgba(138, 167, 216, 0.3)', 6);
const svg = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});

const DOMURL = window.URL || window.webkitURL || window;
const insetShadowUrl = DOMURL.createObjectURL(svg);


var data = [
    { name: '功能1', value: 20 },
    { name: '功能2', value: 82 },
    { name: '功能3', value: 91 },
    { name: '功能4', value: 34 },
    { name: '功能5', value: 90 },
    { name: '功能6', value: 30 },
    { name: '功能7', value: 10 }
]
option = {
    backgroundColor: "#041730",
    xAxis: {
        data: data.map(item => item.name),
        //坐标轴
        axisLine: {
            show: false
        },
        //坐标值标注
        axisLabel: {
            show: true,
            color: '#B3D6FF',
        },
        axisTick: {
          show: false
        }
    },
    yAxis: {
        //坐标轴
        axisLine: {
            show: false,
        },
        //坐标值标注
        axisLabel: {
            show: false
        },
        //分格线
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    series: [
        {
            name: 'a',
            tooltip: {
                show: false
            },
            type: 'bar',
            barWidth: 10,
            itemStyle: {
                color: '#8AA7D8',
                barBorderRadius: [5, 5, 0, 0]
            },
            data: data,
        },
        {
            tooltip: {
                show: false
            },
            type: "pictorialBar",
            symbol: 'image://' + insetShadowUrl,
            symbolRepeat: false,
            symbolClip: true,
            symbolSize: ['22', '100%'],
            data: [100, 100, 100, 100, 100, 100, 100], //TODO 此处需要根据实际数据修改最大值
            legendHoverLink: false,
            markPoint: {
                symbol: 'image://' + insetShadowUrl,
                symbolSize: [22, 32],
                symbolOffset: [0, -24],
                data: [
                    { value: 20, xAxis: 0, yAxis: 100 },
                    { value: 82, xAxis: 1, yAxis: 100 },
                    { value: 91, xAxis: 2, yAxis: 100 },
                    { value: 34, xAxis: 3, yAxis: 100 },
                    { value: 90, xAxis: 4, yAxis: 100 },
                    { value: 30, xAxis: 5, yAxis: 100 },
                    { value: 10, xAxis: 6, yAxis: 100 }
                ],
                label: {
                    color: '#ffffff'
                }
            }
        }
    ]
};