var salvProName =[
"XX设备 NMLD-C-001-003",
"XX设备 NMLD-C-001-003",
"XX设备 NMLD-C-001-003",
"XX设备 NMLD-C-001-003",
"XX设备 NMLD-C-001-003",];
var salvProValue =[60,50,40,30,20,];
var salvProMax =[];//背景按最大值
for (let i = 0; i < salvProValue.length; i++) {
    salvProMax.push(100)
}

 getSymbolData = (data) => {
    let arr = [];
    for (var i = 0; i < data.length; i++) {
        arr.push({
            value: data[i],
            symbolPosition: 'end'
        })
    }
    return arr;
}


option = {
    backgroundColor:"#000000",
    grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        top: '2%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name  + ' : ' + params[0].value
        }
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#00D1F0'
            },
            rich: {
                a: {
                    color: '#00D1F0',
                    fontWeight:'800',
                    fontSize: 15,
                },
            },
            formatter:(val)=>{
                console.log('值',val);
                let text  = val.split(' ')
                console.log(text);
                
                return '{a' + '|' + '◇' + text[0]+ '}' + '\n'+text[1]
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: salvProName
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#00D1F0',
                // fontSize: '12',
                fontWeight:'800'
            },
        },
        data:salvProValue
    }],
    series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(46,200,207,1)'
                    }, {
                        offset: 1,
                        color: 'rgb(129, 238, 242,1)'
                    }]),
                },
            },
             z: 2,
            barWidth: 10,
            data: salvProValue
        },
        {
        name: 'XXX',
        type: 'pictorialBar',
        symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg==',
        symbolSize: [80, 80],
        symbolOffset: [30, 0],
        z: 10086,
        itemStyle: {
            normal: {
                color: '#14b1eb'
            }
        },
        data: getSymbolData(salvProValue)
    },
        {
            name: '背景',
            type: 'bar',
            barWidth: 10,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {
                normal: {
                    color: '#091C24',
                    barBorderRadius: 30,
                    // backgroundColor:'#091C24'
                    // borderColor:'#00D1F0'
                }
            },
            z: 1,
        },
    ]
};