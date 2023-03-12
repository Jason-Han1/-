
//indicator中的max可以使用js找数组最大值的方法设定；
//data.slice().sort().reverse()[0]，用slice()的原因是复制数组，防止原数组次序被改动



option = {
    tooltip: {
        trigger:'item'
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#4D4D4D',
                fontSize:14,
                fontWeight:"bold",
                padding: [3, 5]
            }
        },
        splitArea:{
            show:false
        },
        radius:'70%',
        center: ['50%', '50%'],
        indicator: [
            { name: '喜欢实体窗口',max:10000},
            { name: '自助终端',max:10000},
            { name: '代收渠道',max:10000},
            { name: '代扣渠道',max:10000},
            { name: '支付宝',max:10000},
            { name: '微信',max:10000},
            { name: '网上国网缴费',max:10000},
            { name: '电e宝缴费',max:10000}
        ]
    },
    series: [{
        name: '缴费渠道偏好',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [2445, 2869, 4643, 4803, 9009, 1644, 3386, 9212],
                name: '缴费渠道偏好'
            }
        ],
        areaStyle: {
            color:'rgba(184,232,255,0.8)'

        },
        lineStyle:{
            color:'#009EFF',
            width:2
        },
        label:{
            show:true,
            position:'top',
            fontSize:14,
            color:'#3D8BF0',
            fontWeight:'bold'
        },
        symbol:"circle",
        symbolSize:6,
        showAllSymbol:false,
        itemStyle:{
            color:"white",
            borderColor:"#00aaff",
            borderWidth:2
        }
    }]
};