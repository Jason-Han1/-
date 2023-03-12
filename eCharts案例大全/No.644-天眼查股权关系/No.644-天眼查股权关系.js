var data2 = [{
    name: "马云",
    children: [{ //子集
            name: "北京国风信通科技有限公司",
            value:'控股',
            percent:'60%',
            money:'120万元'
        },
        {
            name: "北京阿里巴巴信息技术有限公司",
            value:'',
            percent:'1.43%',
            money:'800万元'
        },
        {
            name: "高德软件有限公司",
            value:'控股',
            percent:'67%',
            money:'16242.4242万元'
        }, {
            name: "杭州大井头贰拾贰号文化艺术有限公司",
            value:'控股',
            percent:'99%',
            money:'990万元'
        }
    ]
}];

option = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}'
    },
    series: [{
        type: 'tree',
        name: '股权穿透图',
        edgeShape: 'polyline', //链接线是折现还是曲线
        orient:'TB',
        data: data2,
        width:1000,
        height:200,
        top: '30%',
        left: '10%',
        symbolSize: 1,
        initialTreeDepth: 10,
        label: {
            normal: {
                position: [-150,10],
                verticalAlign: 'middle',
                align: 'left',
                backgroundColor: '#0084ff',
                color: '#fff',
                padding: [15,132],
                borderWidth:2,
                borderColor:'#0070d9',
                fontWeight:'bold',
                formatter: [
                    '{box|{b}}'
                ].join('\n'),
                rich: {
                    box: {
                        height: 30,
                        color: '#fff',
                        padding: [0, 5],
                        align: 'center',
                        fontWeight:'bold',
                        fontSize:16,
                        
                    }
                }
            }
        },
        leaves: {
            label: {
                normal: {
                    position: [-90,10],
                    verticalAlign: 'middle',
                    align: 'left',
                    backgroundColor: '#fff',
                    padding: [15,40],
                    fontSize:12,
                    fontWeight:'normal',
                    width:100,
                    borderColor:'#ccc',
                    borderWidth:1,
                    formatter:function(param){
                        console.log(param);
                        let money = '认缴金额：'+param.data.money;
                        let percent = param.data.percent;
                        let name = param.name.substring(0,11)+'\n'+param.name.substring(11);
                        let konggu = param.value;
                        if(konggu.length===0){
                            return [
                                `{percent|${percent}}`,
                                `{name|${name}}`,
                                `{money|${money}}`
                            ].join('\n');
                        }else{
                            return [
                                `{konggu|${konggu}}`,
                                `{percent|${percent}}`,
                                `{name|${name}}`,
                                `{money|${money}}`
                            ].join('\n');
                        }
                        
                    },
                    rich: {
                        konggu: {
                            color: '#0f8bff',
                            padding: [-50, 10],
                            height: 18,
                            distance:10,
                            align: 'left',
                            verticalAlign:'top',
                            fontSize:12,
                            borderWidth:1,
                            fontWeight:'normal',
                        },
                        percent: {
                            height: 18,
                            color: '#0f8bff',
                            padding: [-50, 10],
                            align: 'right',
                            verticalAlign:'top',
                            fontSize:12,
                            borderColor:'red',
                            borderWidth:0,
                            fontWeight:'normal'
                        },
                        name: {
                            height: 18,
                            color: '#000',
                            padding: [0, 5],
                            align: 'center',
                            fontSize:12,
                        },
                        money: {
                            height: 18,
                            color: 'DarkGray',
                            padding: [0, 5],
                            align: 'center',
                            fontSize:12,
                            borderWidth:2,
                            fontWeight:'normal'
                        }
                    }
                }
            }
        },
        lineStyle:{
            color:'#909090',
            
        },
        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750
    }, ]
};