option = {
    title : {
        text: '各民族常用药物分类',
        subtext: '南丁格尔玫瑰图',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['植物药','动物药','矿物药','rose4','rose5','rose6','rose7','rose8']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
        calculable : true,
    series : [
        {
            name: '藏族',
            type: 'pie',
            //roseType:'radius',
            radius : [20, 100],
            center: ['18%', '30%'],
            roseType : 'area',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:2622, name:'植物药'},
                {value:334, name:'动物药'},
                {value:142, name:'矿物药'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'},
                {value:1548, name:'5'}*/
            ],
        },
        {
            name: '彝族',
            type: 'pie',
            //roseType:'radius',
            radius : [20, 58.4],
            center: ['40%', '30%'],
            roseType : 'area',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:1107, name:'植物药'},
                {value:145, name:'动物药'},
                {value:18, name:'矿物药'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'},
                {value:1548, name:'5'}*/
            ],
        },
        {
            name: '傈僳族',
            type: 'pie',
            //roseType:'radius',
            radius : [20, 47],
            center: ['62%', '30%'],
            roseType : 'area',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:754, name:'植物药'},
                {value:31, name:'动物药'},
                {value:0, name:'矿物药'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'},
                {value:1548, name:'5'}*/
            ],
        },
        {
            name: '哈尼族',
            type: 'pie',
            //roseType:'radius',
            radius : [20, 46],
            center: ['84%', '30%'],
            roseType : 'area',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:726, name:'植物药'},
                {value:46, name:'动物药'},
                {value:0, name:'矿物药'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'},
                {value:1548, name:'5'}*/
            ],
        },
        {
            name: '纳西族',
            type: 'pie',
            //roseType:'radius',
            radius : [20, 42],
            center: ['18%', '62%'],
            roseType : 'area',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:587, name:'植物药'},
                {value:18, name:'动物药'},
                {value:0, name:'矿物药'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'},
                {value:1548, name:'5'}*/
            ],
        },
        {
            name: '拉祜族',
            type: 'pie',
            //roseType:'radius',
            radius : [20, 37],
            center: ['40%', '62%'],
            roseType : 'area',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:405, name:'植物药'},
                {value:0, name:'动物药'},
                {value:0, name:'矿物药'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'},
                {value:1548, name:'5'}*/
            ],
        },
        {
            name: '白族',
            type: 'pie',
            //roseType:'radius',
            radius : [20, 36.2],
            center: ['84%', '62%'],
            roseType : 'area',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:388, name:'植物药'},
                {value:5, name:'动物药'},
                {value:0, name:'矿物药'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'},
                {value:1548, name:'5'}*/
            ],
        },
        {
            name: '羌族',
            type: 'pie',
            //roseType:'radius',
            radius : [20, 30],
            center: ['18%', '83%'],
            roseType : 'area',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:288, name:'植物药'},
                {value:25, name:'动物药'},
                {value:6, name:'矿物药'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'},
                {value:1548, name:'5'}*/
            ],
        },
        {
            name: '怒族',
            type: 'pie',
            //roseType:'radius',
            radius : [20, 25],
            center: ['40%', '83%'],
            roseType : 'area',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:170, name:'植物药'},
                {value:33, name:'动物药'},
                {value:0, name:'矿物药'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'},
                {value:1548, name:'5'}*/
            ],
        },
        {
            name: '景颇族',
            type: 'pie',
            //roseType:'radius',
            radius : [20, 37],
            center: ['62%', '62%'],
            roseType : 'area',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:403, name:'植物药'},
                {value:49, name:'动物药'},
                {value:0, name:'矿物药'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'},
                {value:1548, name:'5'}*/
            ],
        },
        {
            name: '普米族',
            type: 'pie',
            //roseType:'radius',
            radius : [20, 22],
            center: ['62%', '83%'],
            roseType : 'area',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:59, name:'植物药'},
                {value:1, name:'动物药'},
                {value:0, name:'矿物药'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'},
                {value:1548, name:'5'}*/
            ],
        },
        {
            name: '独龙族',
            type: 'pie',
            //roseType:'radius',
            radius : [20, 21],
            center: ['84%', '83%'],
            roseType : 'area',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:25, name:'植物药'},
                {value:0, name:'动物药'},
                {value:0, name:'矿物药'},
                /*{value:335, name:'3'},
                {value:1548, name:'4'},
                {value:1548, name:'5'}*/
            ],
        },
    ]
};