 var dataTime = ['杭州市',
        '宁波市',
        '温州市',
        '嘉兴市',
        '湖州市',
        '绍兴市',
        '金华市',
        '衢州市',
        '舟山市',
        '台州市',
        '丽水市',]

    var dataname = ['工业固体废物产生强度',
        '人均生活垃圾日产生量',
        '建筑垃圾产生强度',
        '工业固体废物综合利用率',
        '秸秆综合利用率',
        '畜禽粪污综合利用率',
        '再生资源实际回收量',
        '建筑垃圾资源化利用率',
        '工业固体废物贮存处置强度',
    ]
    var datamax = [20, 20, 20, 20, 20, 20, 20, 20, 20]
    var datavaule = [
        {name:'工业固体废物产生强度',value:'20'},
        {name:'人均生活垃圾日产生量',value:'16'},
        {name:'建筑垃圾产生强度',value:'20'},
        {name:'工业固体废物综合利用率',value:'15'},
        {name:'秸秆综合利用率',value:'12'},
        {name:'畜禽粪污综合利用率',value:'18'},
        {name:'再生资源实际回收量',value:'15'},
        {name:'建筑垃圾资源化利用率',value:'17'},
        {name:'工业固体废物贮存处置强度',value:'16'},
    ]
    var datavaule2 = [
        {name:'工业固体废物产生强度',value:'15'},
        {name:'人均生活垃圾日产生量',value:'14'},
        {name:'建筑垃圾产生强度',value:'13'},
        {name:'工业固体废物综合利用率',value:'14'},
        {name:'秸秆综合利用率',value:'14'},
        {name:'畜禽粪污综合利用率',value:'18'},
        {name:'再生资源实际回收量',value:'12'},
        {name:'建筑垃圾资源化利用率',value:'13'},
        {name:'工业固体废物贮存处置强度',value:'14'},
    ]

    let indicator = []
    for (let i = 0; i < dataname.length; i++) {
        indicator.push({
            name: dataname[i],
            max: datamax[i],
        })
    }
    function contains(arrays, obj) {
        let i = arrays.length;
        while (i--) {
            if (arrays[i] === obj) {
                return i;
            }
        }
        return false;
    }


    var buildSeries = function (data) {
        var helper = data.map((item, index) => {
            var arr = new Array(data.length);
            arr.splice(index, 1, item);
            return arr;
        });
    
        return [data, ...helper].map((item, index) => {
            return {
                type: 'radar',
                name:'分指数分析',
                // 折线拐点标志样式
                itemStyle: {
                    opacity:index === 0 ? '#01B7D8' : 0,
                    color: index === 0 ? '#01B7D8' : 'transparent'
                },
                // 线条样式
                lineStyle: {
                    color: index === 0 ? '#01B7D8' : 'transparent'
                },
                // 区域填充样式
                // areaStyle: {
                //     color: index === 0 ? '#01B7D8' : 'transparent',
                //     opacity: 0.6
                // },
                // 提示框内容
                tooltip: {
                    backgroundColor: 'rgba(50,50,50,0.7)',
                    borderWidth: 0,
                    padding: [5, 10],
                    textStyle: {
                        color: '#FFFFFF',
                        fontFamily: 'sans-serif'
                    },
                    confine: true, // 提示框显示在canvas以内
                    show: index === 0 ? false : true,
                    formatter: function () {
                        return indicator[index - 1].name + "<br/><span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#01B7D8'></span>" + '分指数分析 : ' + data[index - 1]
                    }
                },
                z: index === 0 ? 1 : 2,
                data: [item]
            }
        })
    }
    
    var buildSeries2 = function (data) {
        var helper = data.map((item, index) => {
            var arr = new Array(data.length);
            arr.splice(index, 1, item);
            return arr;
        });
    
        return [data, ...helper].map((item, index) => {
            return {
                type: 'radar',
                 name:'关联指数分析',
                // 折线拐点标志样式
                itemStyle: {
                    opacity:index === 0 ? '#F7DA6D' : 0,
                    color: index === 0 ? '#F7DA6D' : 'transparent'
                },
                // 线条样式
                lineStyle: {
                    color: index === 0 ? '#F7DA6D' : 'transparent'
                },
                // 区域填充样式
                // areaStyle: {
                //     color: index === 0 ? '#F7DA6D' : 'transparent',
                //     opacity: 0.6
                // },
                // 提示框内容
                tooltip: {
                    backgroundColor: 'rgba(50,50,50,0.7)',
                    borderWidth: 0,
                    padding: [5, 10],
                    textStyle: {
                        color: '#FFFFFF',
                        fontFamily: 'sans-serif'
                    },
                    confine: true, // 提示框显示在canvas以内
                    show: index === 0 ? false : true,
                    formatter: function () {
                        return indicator[index - 1].name + "<br/><span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#F7DA6D'></span>" + '关联指数分析 : ' + data[index - 1]
                    }
                },
                z: index === 0 ? 1 : 2,
                data: [item]
            }
        })
    }


option = {
        backgroundColor: '#0A0933',
        tooltip: {
            show: false,
            trigger: "item",
            // triggerOn: "click",
            // confine: true,
            // formatter: (params) => {
            //     console.log(params);
            //     // let i = contains(dataname, value);
            //     // let percent = datavaule[i];
            // }
        },
        // tooltip: {
        //     trigger: 'item',
        //     formatter:(params)=>{
        //         console.log(params);
        //         // let {data,name}=params.data
        //         // return `${params.name}<br />当月销售 ${data[0]}<br />上月销售 ${data[1]}<br />`
        //     }
        // },
        
        radar: {
            indicator: indicator,
            center: ["50%", "50%"],
            radius: "65%",
            startAngle: 240,
            splitNumber: 5,
            splitArea: {
                areaStyle: {
                    color: [
                        'rgba(1, 183, 216, 0.1)', 'rgba(1, 183, 216, 0.2)',
                        'rgba(1, 183, 216, 0.4)', 'rgba(1, 183, 216, 0.6)',
                        'rgba(1, 183, 216, 0.8)', 'rgba(1, 183, 216, 1)'
                    ].reverse()
                }
            },
            axisLabel: {
                show: false,
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: "transparent"
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: "transparent"
                }
            },
            name: {
                formatter: function (value) {
                    let i = contains(dataname, value);
                    let percent = datavaule[i];
                    let ret = "";//拼接加\n返回的类目项  
                    let maxLength = 6;//每项显示文字个数  
                    let valLength = value.length;//X轴类目项的文字个数  
                    let rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
                    if (rowN > 1)//如果类目项的文字大于6,
                    {
                        let temp = "";//每次截取的字符串  
                        let start = 0;//开始截取的位置  
                        let end = maxLength;//结束截取的位置  
                        temp = value.substring(start, end) + '\n' + value.substring(end, valLength)
                        ret += temp; //凭借最终的字符串  
                        // return '{a|' + percent + '}\n' + '{b|' + ret + '}'
                        return '{b|' + ret + '}'
                    }
                    else {
                        // return '{a|' + percent + '}\n' + '{b|' + value + '}'
                        return '{b|' + value + '}'
                    }
                },
                textStyle: {
                    rich: {
                        a: {
                            color: '#FFFFFF',
                            fontSize: 10,
                            padding: [0, 0],
                            // lineHeight: 20,
                        },
                        b: {
                            color: '#CAEEFF',
                            fontSize: 10,
                            padding: [0, 0],
                            // lineHeight: 20,
                        }
                    },
                },
            },
        },
        series: [...buildSeries(datavaule.map(item=>item.value)),...buildSeries2(datavaule2.map(item=>item.value))]
    };
