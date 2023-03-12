var radarStyle = document.createElement('style');
var str = `
    #radar:after {
	  content: ' ';
	  display: block;
	  background-image: linear-gradient(44deg, rgba(0, 255, 51, 0) 50%, #00ff33 100%);
	  width: 250px;
	  height: 250px;
	  position: absolute;
	  top: 30px;
	  left: 5px;
	  animation: radar-beam 4s infinite;
	  animation-timing-function: linear;
	  transform-origin: bottom right;
	  border-radius: 100% 0 0 0;
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
if (radarStyle.styleSheet) {
    //ie下
    radarStyle.styleSheet.cssText = str;
} else {
    radarStyle.innerHTML = str;
}
document.getElementsByTagName('head')[0].appendChild(radarStyle);
var radarDiv = document.createElement('div');
radarDiv.id = 'radar';
radarDiv.style.position = 'relative';
radarDiv.style.width = '500px';
radarDiv.style.height = '500px';
radarDiv.style.margin = '0 auto';
// radarDiv.style.backgroundColor = '#333';
var body = document.querySelector('body');
body.appendChild(radarDiv);

let datas = [10, 60];

setInterval(() => {
    datas[0] = Math.floor(Math.random() * (100 - 10)) + 10;
    datas[1] = Math.floor(Math.random() * (200 - 110)) + 110;
    myChart.setOption(option, 'dark');
}, 3000);

function renderItem(params = {}, api = {}) {
    const { cx, cy, r, r0 } = params.coordSys || {};
    const [start, end] = datas;
    const startAngle = (start * Math.PI) / 180;
    const endAngle = (end * Math.PI) / 180;
    // console.log({coord: api.coord([api.value(0), api.value(1)]),size: api.size([1, 1], [api.value(0), api.value(1)])});
    const angle = (a) => ({
        text: `[角度值：${a}]`,
        x: cx + r * Math.cos((a * Math.PI) / 180),
        y: cy + r * Math.sin((a * Math.PI) / 180),
        fill: '#090',
    });
    // console.log({ cx, cy, r, r0, startAngle, endAngle, angle });
    return {
        type: 'group',
        children: [
            {
                type: 'sector',
                morph: true,
                textContent: { type: 'text', style: { text: `范围：【${datas.join()}】` } },
                shape: { cx, cy, r0, r, startAngle, endAngle },
                style: api.style({ fill: api.visual('color') }),
            },
            { type: 'text', x: 10, style: { ...angle(start) } },
            { type: 'text', x: 10, style: { ...angle(end) } },
            {
                type: 'line',
                shape: {
                    x1: cx,
                    x2: angle(start).x,
                    y1: cy,
                    y2: angle(start).y,
                },
                style: {
                    fill: '#903',
                    stroke: '#f09',
                    lineWidth: 1,
                },
            },
            {
                type: 'line',
                shape: {
                    x1: cx,
                    x2: angle(end).x,
                    y1: cy,
                    y2: angle(end).y,
                },
                style: {
                    fill: '#903',
                    stroke: '#f09',
                    lineWidth: 1,
                },
            },
        ],
    };
}

option = {
    polar: {},
    tooltip: {},
    grid: {
        width: 500,
        height: 500,
        x: 0,
        y: 0,
    },
    backgroundColor: '#060f4c',
    darkMode: true,
    angleAxis: {
        type: 'category',
        data: ['270', '315', '0', '45', '90', '135', '180', '225'],
        boundaryGap: false,
        splitLine: { show: true, lineStyle: { color: '#eee', type: 'dashed' } },
        axisLine: { show: false },
    },
    radiusAxis: { type: 'category', data: [], z: 100 },
    series: [
        {
            name: '自定义阈值扇形图',
            type: 'custom',
            coordinateSystem: 'polar',
            itemStyle: { color: '#d14a61' },
            renderItem: renderItem,
            data: datas,
        },
    ],
};
