option = {
    dataRange: {
        show: true,
        min: 0,
        max: 100,
        left:'4%',
        bottom:'2%',
        color: ['#d12503', '#f6ff00','#76ed2a'],
        itemHeight: 50,
        text: ['高', '低'], // 文本，默认为数值文本
        textStyle: {
            color: '#FFF',
        },
        calculable: true
    },
    tooltip: {
        padding: 0,
        enterable: true,
        transitionDuration: 1,
        textStyle: {
            color: '#000',
            decoration: 'none',
        },
        formatter: function(params) {
            console.log(params);
            var res = '';
            res = '<div style="height:180px;width:182px;background:rgba(22,17,98,0.43);"><div style="height:30px;width:100%;text-align:center;background:rgba(48,105,199,0.46);"><i style="display:inline-block;height:1px;width:46px;background:rgba(255,255,255,0.61);margin:0 8px 4px 0"></i><span style="line-height:30px;color:#fff;">'+params.name+'</span><i style="display:inline-block;height:1px;width:46px;background:rgba(255,255,255,0.61);margin:0 0px 4px 8px"></i></div><div style="height:130px;font-size:12px;width:100%;color:#fff;"><div style="height:24px;line-height:24px;border-bottom:1px solid rgba(67,119,204,0.3)"><span style="display:inline-block;width:12px;height:12px;background:#ffa430;borderRadius:4px;text-align:center;line-height:12px;font-size:12px;margin-right:10px;margin-left:12px;">1</span><span>结婚率</span><span style="color:#ffea00;float:right;margin-right:18px">100%</span></div><div style="height:24px;line-height:24px;border-bottom:1px solid rgba(67,119,204,0.3)"><span style="display:inline-block;width:12px;height:12px;background:#ffa430;borderRadius:4px;text-align:center;line-height:12px;font-size:12px;margin-right:10px;margin-left:12px;">2</span><span>离婚率</span><span style="color:#ffea00;float:right;margin-right:18px">100%</span></div><div style="height:24px;line-height:24px;border-bottom:1px solid rgba(67,119,204,0.3)"><span style="display:inline-block;width:12px;height:12px;background:#ffa430;borderRadius:4px;text-align:center;line-height:12px;font-size:12px;margin-right:10px;margin-left:12px;">3</span><span>结离比</span><span style="color:#ffea00;float:right;margin-right:18px">100%</span></div><div style="height:24px;line-height:24px;border-bottom:1px solid rgba(67,119,204,0.3)"><span style="display:inline-block;width:12px;height:12px;background:#0197fd;borderRadius:4px;text-align:center;line-height:12px;font-size:12px;margin-right:10px;margin-left:12px;">4</span><span>火化率</span><span style="color:#ffea00;float:right;margin-right:18px">100%</span></div><div style="height:24px;line-height:24px;border-bottom:1px solid rgba(67,119,204,0.3)"><span style="display:inline-block;width:12px;height:12px;background:#0197fd;borderRadius:4px;text-align:center;line-height:12px;font-size:12px;margin-right:10px;margin-left:12px;">5</span><span>入墓安葬率</span><span style="color:#ffea00;float:right;margin-right:18px">100%</span></div><div style="height:24px;line-height:24px;border-bottom:1px solid rgba(67,119,204,0.3)"><span style="display:inline-block;width:12px;height:12px;background:#0197fd;borderRadius:4px;text-align:center;line-height:12px;font-size:12px;margin-right:10px;margin-left:12px;">6</span><span>节地生态安葬率</span><span style="color:#ffea00;float:right;margin-right:18px">100%</span></div></div></div>';
            return res;
        }
    },
    series: [{
        name: 'iphone4',
        type: 'map',
        mapType: '山东',
        zoom:1.2,
        itemStyle: {
            normal: {
                borderColor: '#fff',
                borderWidth: 2,
                label: {
                    show: true,
                    color:'#fff',
                }
            },
            emphasis: {
                areaColor: '#f6ff00',
                label: {
                    show: true,
                }
            },
            
        },
        data: [{
                name: '济南市',
                value: 100,
            },
            {
                name: '青岛市',
                value: 10,
            },
            {
                name: '枣庄市',
                value: 70,
            },
            {
                name: '淄博市',
                value: 75,
            },
            {
                name: '聊城市',
                value: 89,
            },
            {
                name: '临沂市',
                value: 78,
            },
            {
                name: '泰安市',
                value: 100,
            },
            {
                name: '莱芜市',
                value: 100,
            },
            {
                name: '潍坊市',
                value: 50,
            },
            {
                name: '烟台市',
                value: 0,
            },
            {
                name: '威海市',
                value: 57,
            },
            {
                name: '济宁市',
                value: 96,
            },
            {
                name: '菏泽市',
                value: 79,
            },
            {
                name: '东营市',
                value: 89,
            },
            {
                name: '滨州市',
                value: 89,
            },
            {
                name: '德州市',
                value: 100,
            },
            {
                name: '日照市',
                value: 100,
            },
        ]
    }, ]
};