//数据量,可以改这个值测一下不同数据量的展示效果
const 配置 = {
    数据量: 50,
    定时: true,
    延时波动的概率: 0.9
}
//-------------------------------------------------
const time = new Date().getTime()
const base = 配置.数据量

const data = []
const title = `不考虑丢包,异常的情况下,模拟新方案延时图效果,数据量: ${配置.数据量}`
let i = 0

if (配置.定时) {
    setInterval(() => {
        配置.数据量 += base
        makeMock()
        myChart.setOption({
            title: {
                text: `不考虑丢包,异常的情况下,模拟新方案延时图效果,数据量: ${data.length}`,
            },
            series: [{
                data
            }]
        });
    }, 3000)
}


option = {
    title: {
        text: title,
    },
    xAxis: {
        type: 'time'
    },
    yAxis: {},
    tooltip: {
        trigger: 'axis',
        formatter: (params) => {
            try {
                const data = params[0].data
                if (!data) return ''
                const status = data.isNoPing ? '推荐数据' : '低延时'
                return `${status} : ${data.delay}`
            } catch (e) {
                return ''
            }
        },
    },
    color: ['#3385ff'],
    animation: false,
    dataZoom: [{
        type: 'inside',
        filterMode: 'none',
    }],
    series: [{
        type: 'line',
        data,
        symbol: 'circle',
        markLine: {
            silent: true,
            data: [{
                yAxis: 20,
                label: {
                    formatter: () => '低延时'
                },
                lineStyle: {
                    color: '#09d174'
                }
            }]
        }
    }],
};

function makeMock() {
    const mock = []
    let delay = ~~(Math.random() * 100 + 20)
    let isNoPing = Math.random() > 0.5
    while (i < 配置.数据量) {
        if (Math.random() < 配置.延时波动的概率) {
            delay = ~~(Math.random() * 100 + 20)
            isNoPing = Math.random() > 0.5
        }
        mock.push({
            value: [time + 30000 * i, delay],
            isNoPing,
            delay,
            itemStyle: {
                borderWidth: isNoPing ? 2 : 0,
                borderColor: '#fff'
            }
        })
        i++
    }
    data.push(...mock)
}

makeMock()