option = {
     tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
            formatter:function(params){
                console.log(params)
                let htmlArray=[];
                if(params.data.value){
                     htmlArray.push(params.name+":"+params.data.value+"<br/>");
                }else{
                    htmlArray.push(params.name+":"+params.value+"<br/>");
                }
                htmlArray.push("百分比:"+params.data.comp+"<br/>");
                return htmlArray.join("")
            }
        },
    series: {
        type: 'sankey',
        layout: 'none',
        focusNodeAdjacency: 'allEdges',
         
        data: [{
            name: '营业收入（本行口径）',
            comp:'100%'
        }, {
             comp:'20%',
            name: '对公条线收入'
        }, {
             comp:'20%',
            name: '对公资产收入',
             depth:"2",
        }, {
             comp:'20%',
            name: '对公中收'
        }, { comp:'20%',
            name: '交银中收'
        }, { comp:'20%',
        value:"-100",
        "itemStyle": {
                        "normal": {
                            "color": "#3891A7",
                            "borderColor": "#3891A7"
                        }
                    },
            name: '投行中收'
        }, { comp:'20%',
            name: '银承中收'
        }, { comp:'20%',
            name: '贵金属中收'
        }, { comp:'20%',
            name: '金市及司库资产收入',
            depth:"2",
        }, { comp:'20%',
            name: '信用卡收入'
        }, { depth:"2", comp:'20%',
            name: '信用卡中收'
        }, { comp:'20%',
            name: '信用卡中收2'
        }, { depth:"2", comp:'20%',
            name: '信用卡资产收入'
        }, { comp:'20%',
            name: '零售条线收入'
        }, { depth:"2", comp:'20%',
            name: '零售中收'
        }, { comp:'20%',
            name: '零售代理中收'
        }, { comp:'20%',
            name: '数金云缴费中收（含零售结算）'
        }, {depth:"2", comp:'20%',
            name: '零售资产收入'
        }, { comp:'20%',
            name: '金市及司库收入'
        }, { comp:'20%',
            name: '金市及司库中收'
        }, { comp:'20%',
            name: '理财中收'
        }, { comp:'20%',
            name: '托管中收'
        }, { comp:'20%',
            name: '金市中收'
        }, { comp:'20%',
            name: '同业业务中收'
        }],
        links: [{
            source: '营业收入（本行口径）',
            target: '对公条线收入',
            value: 8746.42
        }, {
            source: '营业收入（本行口径）',
            target: '零售条线收入',
            value: 3401.09
        }, {
            source: '营业收入（本行口径）',
            target: '金市及司库收入',
            value: 5.86
        }, {
            source: '营业收入（本行口径）',
            target: '信用卡收入',
            value: 5.86
        }, {
            source: '对公条线收入',
            target: '对公资产收入',
            value: 1522.54
        }, {
            source: '对公条线收入',
            target: '对公中收',
            value: 632.48
        }, {
            source: '对公中收',
            target: '交银中收',
            value: 5345.33
        }, {
            
            source: '对公中收',
            target: '投行中收',
            value: 5077.30
        }, {
            source: '对公中收',
            target: '银承中收',
            value: 268.04
        }, {
            source: '零售条线收入',
            target: '零售中收',
            value: 3989.06

        }, {
            source: '零售条线收入',
            target: '零售资产收入',
            value: 3989.06
        }, {
            source: '零售中收',
            target: '零售代理中收',
            value: 5.00
        }, {
            source: '零售中收',
            target: '数金云缴费中收（含零售结算）',
            value: 3989.06
        }, {
            source: '金市及司库收入',
            target: '金市及司库资产收入',
            value: 562.65
        }, {
            source: '金市及司库收入',
            target: '金市及司库中收',
            value: 287.73
        }, {
            source: '金市及司库中收',
            target: '理财中收',
            value: 39.21
        }, {
            source: '金市及司库中收',
            target: '托管中收',
            value: 76.17
        }, {
            source: '金市及司库中收',
            target: '金市中收',
            value: 33.09
        }, {
            source: '金市及司库中收',
            target: '同业业务中收',
            value: 18.05
        }, {
            source: '金市及司库中收',
            target: '贵金属中收',
            value: 121.20
        }, {
            source: '信用卡收入',
            target: '信用卡中收',
            value: 127.1270512
        },  {
            source: '信用卡收入',
            target: '信用卡中收',
            value: 127.1270512
        },{
            source: '信用卡收入',
            target: '信用卡资产收入',
            
            value: 127.1270512
        }],
                levels: [{
                    depth: 0,
                    itemStyle: {
                        color: '#fbb4ae'
                    },
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                }, {
                    depth: 1,
                    itemStyle: {
                        color: '#b3cde3'
                    },
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                }, {
                    depth: 2,
                    itemStyle: {
                        color: '#ccebc5'
                    },
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                }, {
                    depth: 3,
                    itemStyle: {
                        color: '#decbe4'
                    },
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                }],
                lineStyle: {
                    curveness: 0.5
                }
        
    }
};