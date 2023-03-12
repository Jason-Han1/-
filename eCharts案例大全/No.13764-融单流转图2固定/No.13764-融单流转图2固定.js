option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    title: {
        text: "融单流转图",
        //subtext: "ZBH",
        top: "top",
        left: "left"
    },
    itemStyle: {
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowBlur: 10
    },
    tooltip: {},
    legend: [{
        formatter: function(name) {
            return echarts.format.truncateText(name, 200, '12px', '…');
        },
        tooltip: {
            show: true
        },
        selectedMode: 'false',
        bottom: 20,
        //data: ['一级企业1', ]
    }],
    animationDuration: 3000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        type: 'graph',
        layout: 'none',
        force: {
            //repulsion: 1000
        },
        legendHoverLink: true,
        //建头
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [2, 15],
        edgeLabel: {
            show: false,
            normal: {
                show: true,
                position: 'middle',
                textStyle: {
                    fontSize: 12
                },
                formatter: "{c}"
            }
        },
        itemStyle: {
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowBlur: 10
        },
        data: [
			{
                                name: "深圳创维数字技术有限公司-TEST-03260004",
                                value: "100000",
                                symbolSize: 110,
                                draggable: false,
                                fixed: true,
                                
                                x: 500,
                                y: 50,
                            },{
                                    name: "测试供应商1227-10000857",
                        			value: "100000",
                        			symbolSize: 80,
                                    draggable: false,
                                    fixed: true,
                                    x: 500,
                                    y: 350,
                                    tooltip: {
                                        formatter: "商单编号：10000857<br/>持票人名：测试供应商1227<br/>持票日期：2018-03-26<br/>付现日：2018-11-01<br/>商单状态：已拆单<br/>商单金额：100,000.00",
                                    }
                            },{
                                    name: "测试供应商1227-10000862",
                        			value: "30000",
                                    symbolSize: 80,
                                    draggable: false,
                                    fixed: true,                                    fixed: true,
                                    x: 800,
                                    y: 650,
                                    tooltip: {
                                        formatter: "商单编号：10000862<br/>持票人名：测试供应商1227<br/>持票日期：2018-03-26<br/>付现日：2018-11-01<br/>商单状态：已保理<br/>商单金额：30,000.00",
                                    }
                            },{
                                    name: "测试供应商1227-10000863",
                        			value: "70000",
                                    symbolSize: 80,
                                    draggable: false,
                                    fixed: true,                                    fixed: true,
                                    x: 200,
                                    y: 650,                                    
                                    tooltip: {
                                        formatter: "商单编号：10000863<br/>持票人名：测试供应商1227<br/>持票日期：2018-03-26<br/>付现日：2018-11-01<br/>商单状态：已拆单<br/>商单金额：70,000.00",
                                    }
                            },{
                                    name: "测试供应商1227-10000919",
                        			value: "62223",
                                    symbolSize: 80,
                                    draggable: false,
                                    fixed: true,                                    fixed: true,
                                    x: 10,
                                    y: 950,                                     
                                    tooltip: {
                                        formatter: "商单编号：10000919<br/>持票人名：测试供应商1227<br/>持票日期：2018-03-27<br/>付现日：1970-01-01<br/>商单状态：正常持有<br/>商单金额：62,223.00",
                                    }
                            },{
                                    name: "测试供应商0115-10000920",
                        			value: "7777",
                                    symbolSize: 80,
                                    draggable: false,
                                    fixed: true,                                    fixed: true,
                                    x: 500,
                                    y: 950,                                     
                                    tooltip: {
                                        formatter: "商单编号：10000920<br/>持票人名：测试供应商0115<br/>持票日期：1970-01-01<br/>付现日：1970-01-01<br/>商单状态：正常持有<br/>商单金额：7,777.00",
                                    }
                            },        ],

        links: [
			{
                                source: "深圳创维数字技术有限公司-TEST-03260004",
                				value: "融资日期:2018-03-26",
                                target: "测试供应商1227-10000857",
                            },{
                                source: "测试供应商1227-10000857",
                				value: "融资日期:2018-03-26",
                                target: "测试供应商1227-10000862",
                            },{
                                source: "测试供应商1227-10000857",
                				value: "融资日期:2018-03-26",
                                target: "测试供应商1227-10000863",
                            },{
                                source: "测试供应商1227-10000863",
                				value: "融资日期:2018-03-27",
                                target: "测试供应商1227-10000919",
                            },{
                                source: "测试供应商1227-10000863",
                				value: "融资日期:2018-03-27",
                                target: "测试供应商0115-10000920",
                            },		 ],
        focusNodeAdjacency: true,
        roam: true,
        //圆形上面的文字	
        label: {
            normal: {
                position: "inside",
                show: true,
                textStyle: {
                    fontSize: 12
                },
                /*formatter:function(params){
		
					/*var temp = ""; 
					for(var i in params){
						temp += i+":"+params[i]+"\n"; 
					} 
					alert(temp);
					return 23;			
				}*/
            }
        },
        lineStyle: {
            normal: {
                opacity: 0.9,
                width: 2,
                curveness: 0,
                color: '#000',

            }
        }
    }]
};