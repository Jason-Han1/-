
const dataArr = [["2019/01/10",49.85,"RAD51D p.T13Pfs*4"],["2019/01/10",0,"ADAM29 p.T764M"],["2019/01/10",0,"ARID2 p.L1148Kfs*7"],["2019/01/10",0,"BCR p.A1104G"],["2019/01/10",0,"CYP2A6 p.G479V"],["2019/01/10",0,"EGFR p.E746_A750delELREA"],["2019/01/10",0,"NR4A3 p.S54P"],["2019/01/10",0,"GNAS p.R201H"],["2019/01/10",0,"RPTOR p.R1222C"],["2019/01/10",0,"XPO1 p.L1001V"],["2019/01/10",0,"IL6ST p.T632K"],["2019/01/10",49.27,"RAD51D p.T13Pfs*4"],["2019/01/10",3.37,"ADAM29 p.T764M"],["2019/01/10",10.54,"ARID2 p.L1148Kfs*7"],["2019/01/10",1.6,"BCR p.A1104G"],["2019/01/10",4.49,"CYP2A6 p.G479V"],["2019/01/10",10.09,"EGFR p.E746_A750delELREA"],["2019/01/10",0.46,"NR4A3 p.S54P"],["2019/01/10",0,"GNAS p.R201H"],["2019/01/10",0,"RPTOR p.R1222C"],["2019/01/10",0,"XPO1 p.L1001V"],["2019/01/10",0,"IL6ST p.T632K"],["2019/03/29",51.75,"RAD51D p.T13Pfs*4"],["2019/03/29",0,"ADAM29 p.T764M"],["2019/03/29",0,"ARID2 p.L1148Kfs*7"],["2019/03/29",2.74,"BCR p.A1104G"],["2019/03/29",0,"CYP2A6 p.G479V"],["2019/03/29",0,"EGFR p.E746_A750delELREA"],["2019/03/29",0,"NR4A3 p.S54P"],["2019/03/29",0,"GNAS p.R201H"],["2019/03/29",0,"RPTOR p.R1222C"],["2019/03/29",0,"XPO1 p.L1001V"],["2019/03/29",0,"IL6ST p.T632K"],["2019/03/29",48.81,"RAD51D p.T13Pfs*4"],["2019/03/29",4.24,"ADAM29 p.T764M"],["2019/03/29",0,"ARID2 p.L1148Kfs*7"],["2019/03/29",0,"BCR p.A1104G"],["2019/03/29",5.1,"CYP2A6 p.G479V"],["2019/03/29",0,"EGFR p.E746_A750delELREA"],["2019/03/29",3.75,"NR4A3 p.S54P"],["2019/03/29",3.46,"GNAS p.R201H"],["2019/03/29",2.49,"RPTOR p.R1222C"],["2019/03/29",0,"XPO1 p.L1001V"],["2019/03/29",0,"IL6ST p.T632K"],["2019/03/29",45.98,"RAD51D p.T13Pfs*4"],["2019/03/29",3.68,"ADAM29 p.T764M"],["2019/03/29",0,"ARID2 p.L1148Kfs*7"],["2019/03/29",0,"BCR p.A1104G"],["2019/03/29",4.01,"CYP2A6 p.G479V"],["2019/03/29",0,"EGFR p.E746_A750delELREA"],["2019/03/29",2.47,"NR4A3 p.S54P"],["2019/03/29",2.96,"GNAS p.R201H"],["2019/03/29",2.64,"RPTOR p.R1222C"],["2019/03/29",0,"XPO1 p.L1001V"],["2019/03/29",0,"IL6ST p.T632K"],["2019/05/14",46.8,"RAD51D p.T13Pfs*4"],["2019/05/14",0,"ADAM29 p.T764M"],["2019/05/14",0,"ARID2 p.L1148Kfs*7"],["2019/05/14",2.24,"BCR p.A1104G"],["2019/05/14",0,"CYP2A6 p.G479V"],["2019/05/14",0,"EGFR p.E746_A750delELREA"],["2019/05/14",0,"NR4A3 p.S54P"],["2019/05/14",0,"GNAS p.R201H"],["2019/05/14",0,"RPTOR p.R1222C"],["2019/05/14",0,"XPO1 p.L1001V"],["2019/05/14",0,"IL6ST p.T632K"],["2019/08/15",45.3,"RAD51D p.T13Pfs*4"],["2019/08/15",0,"ADAM29 p.T764M"],["2019/08/15",0,"ARID2 p.L1148Kfs*7"],["2019/08/15",0,"BCR p.A1104G"],["2019/08/15",0,"CYP2A6 p.G479V"],["2019/08/15",0,"EGFR p.E746_A750delELREA"],["2019/08/15",0,"NR4A3 p.S54P"],["2019/08/15",0,"GNAS p.R201H"],["2019/08/15",0,"RPTOR p.R1222C"],["2019/08/15",0.64,"XPO1 p.L1001V"],["2019/08/15",0,"IL6ST p.T632K"],["2019/11/18",49.01,"RAD51D p.T13Pfs*4"],["2019/11/18",0,"ADAM29 p.T764M"],["2019/11/18",0,"ARID2 p.L1148Kfs*7"],["2019/11/18",1.63,"BCR p.A1104G"],["2019/11/18",0,"CYP2A6 p.G479V"],["2019/11/18",0,"EGFR p.E746_A750delELREA"],["2019/11/18",0,"NR4A3 p.S54P"],["2019/11/18",0,"GNAS p.R201H"],["2019/11/18",0,"RPTOR p.R1222C"],["2019/11/18",1.03,"XPO1 p.L1001V"],["2019/11/18",1.06,"IL6ST p.T632K"]]

 const legendData = ["RAD51D p.T13Pfs*4","ADAM29 p.T764M","ARID2 p.L1148Kfs*7","BCR p.A1104G","CYP2A6 p.G479V","EGFR p.E746_A750delELREA","NR4A3 p.S54P","GNAS p.R201H","RPTOR p.R1222C","XPO1 p.L1001V","IL6ST p.T632K"]
option = {
     tooltip: {
                    trigger: 'axis',
                    confine: true,
                    formatter: param => {
                        let res = `<h4 style="border-bottom: 2px solid #ccc;color:#fff">${param[0] &&
                            param[0].axisValueLabel}</h4>`;
                        param.forEach(item => {
                            if (item.value[1]) {
                                res += `<p style="height:4px">${item.marker} ${item.name}: ${item.value[1]}</p>`;
                            }
                        });
                        return res;
                    },
                    axisPointer: {
                        type: 'line',
                        lineStyle: {
                            color: 'rgba(0,0,0,0.2)',
                            width: 1,
                            type: 'solid',
                        },
                    },
                },
                legend: {
                    data: legendData,
                    type: 'scroll',
                },
                animation: true,
                singleAxis: {
                    top: 50,
                    bottom: 50,
                    axisTick: {},
                    axisLabel: {},
                    type: 'time',
                    axisPointer: {
                        animation: true,
                        label: {
                            show: true,
                        },
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'dashed',
                            opacity: 0.2,
                        },
                    },
                },

                series: [
                    {
                        type: 'themeRiver',
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 20,
                                shadowColor: 'rgba(0, 0, 0, 0.7)',
                            },
                        },
                        data: dataArr,
                    },
                ],
};


    
   