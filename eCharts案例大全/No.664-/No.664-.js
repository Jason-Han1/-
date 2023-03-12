
let get_gradual_by_horizontal = (c1,c2) => {
    return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
        {
            offset: 0,
            color: c1
        }, {
            offset: 1,
            color: c2
        }
    ])
}
let  get_arr_by_key = (data, k) => {
    let key = k || "value"
    if (data.length) {
        return data.map(item => {
            return item[key]
        })
    }
    return [];
}
let  get_symbol_data = (data) => {
    return data.map(item => {
        return {
            value: item.value,
            symbolPosition: 'end'
        }
    })
}
data = [{
        name: '尾随',
        value: 10,
        sum: 10,
        c1: 'rgba(212, 22, 22, .2)',
        c2: 'rgba(212, 22, 22, 1)'
    },
    {
        name: '反传',
        value: 15,
        sum: 10,
        c1: 'rgba(255, 126, 0, 0.2)',
        c2: 'rgba(255, 126, 0, 1)'
    },
    {
        name: '胁迫',
        value: 16,
        sum: 10,
        c1: 'rgba(255, 216, 0, 0.2)',
        c2: 'rgba(255, 216, 0, 1)'
    },
    {
        name: '多卡刷门',
        value: 12,
        sum: 10,
        c1: 'rgba(0, 147, 255, 0.2)',
        c2: 'rgba(0, 147, 255, 1)'
    },
    {
        name: '陪同卡',
        value: 8,
        sum: 10,
        c1: 'rgba(45, 254, 235, 0.2)',
        c2: 'rgba(45, 254, 235, 1)'
    }
]
option = {
    grid: {
        top: '5%',
        bottom: '5%',
        right: '0%',
        left: '15%',
        containLabel: true
    },
    xAxis: {
        show: false
    },
    yAxis: [{
        triggerEvent: true,
        show: true,
        inverse: true,
        data: get_arr_by_key(data, 'name'),
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
            interval: 0,
            color: '#A5B8B9',
            align: 'left',
            margin: 80,
            fontSize: 13,
            formatter: function(value, index) {
                return '{title|' + value + '}'
            },
            rich: {
                title: {
                    width: 165
                }
            }
        },
    }, {
        triggerEvent: true,
        show: true,
        inverse: true,
        data: get_arr_by_key(data, 'name'),
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            shadowOffsetX: '-20px',
            color: '#A5B8B9',
            align: 'right',
            verticalAlign: 'center',
            lineHeight: 30,
            fontSize: 12,
            margin: 30,
            formatter: function(value, index) {
                return (data[index].value / data[index].sum) * 100
            },
        }
    }],
    series: [{
        name: 'XXX',
        type: 'pictorialBar',
        symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg==',
        symbolSize: [50, 50],
        symbolOffset: [25, 0],
        z: 12,
        data: get_symbol_data(data)
    }, 
    {
        name: '条',
        type: 'bar',
        showBackground: true,
        yAxisIndex: 0,
        barWidth: 7,
        data:  data.map((item)=>{
            let {c1,c2} = item
            return {
                value: item.value,
                itemStyle: {
                    color: get_gradual_by_horizontal(c1,c2)
                },
                label: {
                    color: '#A5B8B9',
                    show: true,
                    position: ['-40px', '0px'],
                    textStyle: {
                        fontSize: 12
                    },
                    formatter: function(a, b) {
                        return a.name
                    }
                }
                
            }
        }),
        label: {
            normal: {
                color: '#A5B8B9',
                show: true,
                position: ['-40px', '0px'],
                textStyle: {
                    fontSize: 12
                },
                formatter: function(a, b) {
                    return a.name
                }
            }
        }
    }
    ]
}
