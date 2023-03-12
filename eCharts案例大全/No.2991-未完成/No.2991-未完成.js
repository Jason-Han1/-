const length = 60;
const max = 4;
const min = 3;

const nData = Array.from({ length }).map(() => Math.floor(Math.random() * max + min));

console.log(nData);

function padZero(value) {
    if (value > 9) return value;
    return `0${value}`;
}

option = {
    title: {
        text: 'Awesome Chart',
    },
    dataZoom: [
        {
            type: 'inside',
            start: 0,
            end: 10,
        },
    ],
    xAxis: {
        data: Array.from({ length: Math.ceil(Math.random() * length) }).map((_, i) => {
            const d = new Date();
            const t = Math.floor(Math.random() * 24 * 60 * 60 * 1000);
            const h = padZero(Math.floor(t / (60 * 60 * 1000)));
            const m = padZero(Math.floor((t % (60 * 60 * 1000)) / (60 * 1000)));
            const s = padZero(Math.floor((t % (60 * 1000)) / 1000));
            const v = `${d.getFullYear()}-${padZero(d.getMonth())}-${padZero(d.getDate() + i)} ${h}:${m}:${s}`;
            return v;
        }),
        boundaryGap: false,
    },
    yAxis: {
        max: 10,
    },
    series: {
        type: 'line',
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                    {
                        offset: 0,
                        color: '#32ca51',
                    },
                    {
                        offset: 0.3,
                        color: '#32ca51',
                    },
                    {
                        offset: 0.3,
                        color: '#008ffc',
                    },
                    {
                        offset: 1,
                        color: '#008ffc',
                    },
                ],
            },
        },
        data: nData,
        smooth: true,
        label: {
            show: true,
            formatter: '{a|内容可以随便写\n无所谓什么都可以}',
            rich: {
                a: {
                    padding: 10,
                    backgroundColor: '#33ca51',
                    borderRadius: 5,
                    color: '#fff',
                },
            },
        },
    },
};
