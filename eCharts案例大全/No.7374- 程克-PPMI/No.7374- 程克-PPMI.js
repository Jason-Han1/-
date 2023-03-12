var option = {
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
        title: {
        text: ' '
    },
    backgroundColor: 'rgba(255,255,255,0)',
    toolbox: {
        show: true,
        feature: {
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    series: [{
        type: 'graph',
        tooltip: {},
        ribbonType: true,
        layout: 'circular',

        circular: {
            rotateLabel: true
        },
        symbolSize: 30,
        roam: true,
        focusNodeAdjacency: true,

        label: {
            normal: {
                position: 'center',
                fontWeight: 'bold',
                formatter: '{b}',
                fontSize:15,
                normal: {
                    textStyle: {

                        fontFamily: '宋体'
                    }
                }
            }
        },

        edgeSymbol: ['circle'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
            normal: {
                textStyle: {
                    fontSize: 13,
                    fontWeight: 'bold',
                    fontFamily: '宋体'
                }
            }
        },

        itemStyle: {
            normal: {
                label: {
                    rotate: true,
                    show: true,
                    textStyle: {
                        color: '#333',
                        fontWeight: 'bold'
                    }
                },
                color: ["#393f51", "#393f51", "#393f51", "#393f51", "#393f51", "#393f51", "#393f51", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7"] /* 内的颜色#393f51，外的颜色#85d6f7 */
            },
            emphasis: {
                label: {
                    show: true
                        // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                }
            }
        },

data:[
{   name:'JLO_TOTRAW',
    symbolSize:9.0,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'LNS2A',
    symbolSize:9.0,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'BJLOT15',
    symbolSize:7.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'INEX3',
    symbolSize:7.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'DXTREMOR',
    symbolSize:28.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'INEX2',
    symbolSize:7.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'LNS3C',
    symbolSize:9.0,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'CAREGVR',
    symbolSize:10.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'LNS1B',
    symbolSize:7.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'GDSALIVE',
    symbolSize:9.0,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'GDSGSPIR',
    symbolSize:9.0,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'QUEST1ACTVOFT',
    symbolSize:7.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'LNS3A',
    symbolSize:7.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'LNS1A',
    symbolSize:7.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'MSEADLG',
    symbolSize:7.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'BJLOT21',
    symbolSize:7.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'GDSSATIS',
    symbolSize:9.0,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'10_spect_image_acceptable_E1_C2',
    symbolSize:7.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'LNS4C',
    symbolSize:7.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'BJLOT1',
    symbolSize:12.0,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'BJLOT13',
    symbolSize:7.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'BJLOT7',
    symbolSize:7.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'JLOT3',
    symbolSize:7.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'LTHSWRK',
    symbolSize:7.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'BJLOT19',
    symbolSize:7.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'DXRIGID',
    symbolSize:7.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'DXBRADY',
    symbolSize:9.0,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'RESOLVD',
    symbolSize:7.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'GDSENRGY',
    symbolSize:13.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'BJLOT29',
    symbolSize:7.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'BJLOT27',
    symbolSize:7.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'INEX6',
    symbolSize:7.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'HMREPR',
    symbolSize:7.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'GDSHAPPY',
    symbolSize:9.0,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'BJLOT23',
    symbolSize:7.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'LAWNWRK',
    symbolSize:25.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
{   name:'LNS3B',
    symbolSize:7.5,
    itemStyle: {
        normal: {
            color: '#4e7eed'
        }
    }
},
],
links:[
{    source:'GDSGSPIR',
     target:'CAREGVR',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:1.1821816105082812,
              curveness:0.4,
              color: '#fc0e02'
         }
     }
},
{    source:'GDSSATIS',
     target:'CAREGVR',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:0.9851513420902341,
              curveness:0.4,
              color: '#fc0e02'
         }
     }
},
{    source:'LAWNWRK',
     target:'CAREGVR',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:0.9822958309537408,
              curveness:0.4,
              color: '#fc0e02'
         }
     }
},
{    source:'BJLOT1',
     target:'BJLOT7',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:0.9822958309537408,
              curveness:0.4,
              color: '#fc0e02'
         }
     }
},
{    source:'BJLOT1',
     target:'LNS3C',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:0.7938320959451743,
              curveness:0.4,
              color: '#fc0e02'
         }
     }
},
{    source:'BJLOT1',
     target:'JLOT3',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:0.785265562535694,
              curveness:0.4,
              color: '#fc0e02'
         }
     }
},
{    source:'RESOLVD',
     target:'GDSHAPPY',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:0.785265562535694,
              curveness:0.4,
              color: '#fc0e02'
         }
     }
},
{    source:'GDSALIVE',
     target:'HMREPR',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:0.785265562535694,
              curveness:0.4,
              color: '#fc0e02'
         }
     }
},
{    source:'INEX6',
     target:'LAWNWRK',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:0.7167332952598515,
              curveness:0.4,
              color: '#fc0e02'
         }
     }
},
{    source:'JLO_TOTRAW',
     target:'LAWNWRK',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:0.7167332952598515,
              curveness:0.4,
              color: '#fc0e02'
         }
     }
},
{    source:'MSEADLG',
     target:'LAWNWRK',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:0.7167332952598515,
              curveness:0.4,
              color: '#fc0e02'
         }
     }
},
{    source:'INEX2',
     target:'LAWNWRK',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:0.7167332952598515,
              curveness:0.4,
              color: '#fc0e02'
         }
     }
},
{    source:'LAWNWRK',
     target:'DXBRADY',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:0.7167332952598515,
              curveness:0.4,
              color: '#fc0e02'
         }
     }
},
{    source:'LNS1B',
     target:'LAWNWRK',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:0.7167332952598515,
              curveness:0.4,
              color: '#fc0e02'
         }
     }
},
{    source:'LNS2A',
     target:'LAWNWRK',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:0.7167332952598515,
              curveness:0.4,
              color: '#fc0e02'
         }
     }
},
{    source:'LTHSWRK',
     target:'LAWNWRK',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:0.7167332952598515,
              curveness:0.4,
              color: '#fc0e02'
         }
     }
},
{    source:'BJLOT13',
     target:'LAWNWRK',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:0.7167332952598515,
              curveness:0.4,
              color: '#fc0e02'
         }
     }
},
{    source:'BJLOT15',
     target:'LAWNWRK',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:0.7167332952598515,
              curveness:0.4,
              color: '#fc0e02'
         }
     }
},
{    source:'LNS4C',
     target:'LAWNWRK',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:0.7167332952598515,
              curveness:0.4,
              color: '#fc0e02'
         }
     }
},
{    source:'LNS3B',
     target:'LAWNWRK',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:0.7167332952598515,
              curveness:0.4,
              color: '#fc0e02'
         }
     }
},
{    source:'GDSGSPIR',
     target:'GDSENRGY',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:2.8983438035408335,
              curveness:0.4,
              color: '#6c70c0'
         }
     }
},
{    source:'GDSHAPPY',
     target:'GDSENRGY',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:2.8983438035408335,
              curveness:0.4,
              color: '#6c70c0'
         }
     }
},
{    source:'BJLOT1',
     target:'GDSENRGY',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:2.3158195316961736,
              curveness:0.4,
              color: '#6c70c0'
         }
     }
},
{    source:'GDSSATIS',
     target:'GDSENRGY',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:2.218732153055397,
              curveness:0.4,
              color: '#6c70c0'
         }
     }
},
{    source:'GDSALIVE',
     target:'GDSENRGY',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:2.218732153055397,
              curveness:0.4,
              color: '#6c70c0'
         }
     }
},
{    source:'LNS3C',
     target:'DXTREMOR',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:2.1359223300970873,
              curveness:0.4,
              color: '#6c70c0'
         }
     }
},
{    source:'BJLOT19',
     target:'DXTREMOR',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:2.1359223300970873,
              curveness:0.4,
              color: '#6c70c0'
         }
     }
},
{    source:'BJLOT21',
     target:'DXTREMOR',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:2.1359223300970873,
              curveness:0.4,
              color: '#6c70c0'
         }
     }
},
{    source:'BJLOT23',
     target:'DXTREMOR',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:2.1359223300970873,
              curveness:0.4,
              color: '#6c70c0'
         }
     }
},
{    source:'LNS1A',
     target:'DXTREMOR',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:2.1359223300970873,
              curveness:0.4,
              color: '#6c70c0'
         }
     }
},
{    source:'QUEST1ACTVOFT',
     target:'DXTREMOR',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:2.1359223300970873,
              curveness:0.4,
              color: '#6c70c0'
         }
     }
},
{    source:'DXTREMOR',
     target:'DXRIGID',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:2.1359223300970873,
              curveness:0.4,
              color: '#6c70c0'
         }
     }
},
{    source:'DXTREMOR',
     target:'DXBRADY',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:2.1359223300970873,
              curveness:0.4,
              color: '#6c70c0'
         }
     }
},
{    source:'10_spect_image_acceptable_E1_C2',
     target:'DXTREMOR',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:2.1359223300970873,
              curveness:0.4,
              color: '#6c70c0'
         }
     }
},
{    source:'LNS3A',
     target:'DXTREMOR',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:2.1359223300970873,
              curveness:0.4,
              color: '#6c70c0'
         }
     }
},
{    source:'BJLOT27',
     target:'DXTREMOR',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:2.1359223300970873,
              curveness:0.4,
              color: '#6c70c0'
         }
     }
},
{    source:'BJLOT29',
     target:'DXTREMOR',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:2.1359223300970873,
              curveness:0.4,
              color: '#6c70c0'
         }
     }
},
{    source:'LNS2A',
     target:'DXTREMOR',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:2.1359223300970873,
              curveness:0.4,
              color: '#6c70c0'
         }
     }
},
{    source:'INEX3',
     target:'DXTREMOR',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:2.1359223300970873,
              curveness:0.4,
              color: '#6c70c0'
         }
     }
},
{    source:'JLO_TOTRAW',
     target:'DXTREMOR',
     name:' ',
     tooltip: {
         trigger: 'item',
         formatter: function(params, ticket, callback) {
             return params.data.name;}
     },
     symbolSize: [5, 20],
     label: {
         normal: {
             formatter: function(params, ticket, callback) {
                 params.name = params.data.name;
                 return params.name;},
             show: true}
     },
     lineStyle: {
         normal:{
              width:2.1359223300970873,
              curveness:0.4,
              color: '#6c70c0'
         }
     }
},
]





    }]
};
myChart.setOption(option);