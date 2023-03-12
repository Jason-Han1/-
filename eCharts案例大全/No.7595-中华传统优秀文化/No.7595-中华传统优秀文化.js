


var data = [ {
    name: '天道思想',
    itemStyle: {
        color: '#187a2f'
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    children: [{
        name: '阴阳大化',
        itemStyle: {
            color: '#3aa255'
        },        
        label: {
        fontSize: 14,
        fontWeight: 'bold'
    },
        children: [{
            name: '半',
            value: 1,
            itemStyle: {
                color: '#3aa255'
            }
        }]
    }, {
        name: '道法自然',
        itemStyle: {
            color: '#5e9a80'
        },
        label: {
        fontSize: 14,
        fontWeight: 'bold'
    },
        children: [{
            name: '孟文',
            value: 1,
            itemStyle: {
                color: '#5e9a80'
            }
        }]
    }]
}, {
    name: '人文关怀',
    itemStyle: {
        color: '#FFA500'
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    children: [{
        name: '民为邦本',
        itemStyle: {
            color: '#FFDEAD'
        },
        label: {
        fontSize: 14,
        fontWeight: 'bold'
    },
        children: [{
            name: '一部',
            value: 1,
            itemStyle: {
                color: '#FFDEAD'
            }
        }]
    }, {
        name: '仁者爱人',
        value: 1,
        itemStyle: {
            color: '#EEDC82'
        },
        label: {
        fontSize: 14,
        fontWeight: 'bold'
    },
        children: [{
            name: '左氏之传',
            value: 1,
            itemStyle: {
                color: '#EEDC82'
            }
        }]
    }]
}, {
    name: '天下思想',
    itemStyle: {
        color: 'd3c91f'
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    children: [{
        name: '协和万邦',
        itemStyle: {
            color: '#88d8ce'
        },
        label: {
        fontSize: 14,
        fontWeight: 'bold'
    },
        children: [{
            name: '一部',
            value: 1,
            itemStyle: {
                color: '#88d8ce'
            }
        }]
    }, {
        name: '以德服人',
        value: 1,
        itemStyle: {
            color: '#7ba49f'
        },
        label: {
        fontSize: 14,
        fontWeight: 'bold'
    },
        children: [{
            name: '左氏',
            value: 1,
            itemStyle: {
                color: '#7ba49f'
            }
        }]
    }]
},{
    name: '民族精神',
    itemStyle: {
        color: '#d3c91f'
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    children: [{
        name: '自强不息',
        itemStyle: {
            color: 'b7cd87'
        },
        label: {
        fontSize: 14,
        fontWeight: 'bold'
    },
        children: [{
            name: '一部全面展现战国历史的重要典籍',
            value: 1,
            itemStyle: {
                color: 'a7b86a'
            }
        }]
    }, {
        name: '厚德载物',
        value: 1,
        itemStyle: {
            color: '#a7b86a'
        },
        label: {
        fontSize: 14,
        fontWeight: 'bold'
    },
        children: [{
            name: '左氏之传，史之极也。\n文采若云月，高深若山海',
            value: 1,
            itemStyle: {
                color: '#a7b86a'
            }
        }]
    }]
},{
    name: '致思取向',
    itemStyle: {
        color: '#0aa3b5'
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    children: [{
        name: '知行合一',
        itemStyle: {
            color: '#9db2b7'
        },
        label: {
        fontSize: 14,
        fontWeight: 'bold'
    },
        children: [{
            name: '内圣外王之学',
            value: 1,
            itemStyle: {
                color: '#9d977f'
            }
        }]
    }, {
        name: '实事求是',
        itemStyle: {
            color: '#76c0cb'
        },
        label: {
        fontSize: 14,
        fontWeight: 'bold'
    },
        children: [{
            name: '汪洋捭阖，仪态万方，\n晚周诸子之作，莫能先也',
            value: 1,
            itemStyle: {
                color: '#039fb8'
            }
        }]
    }]
},  {
    name: '生态智慧',
    itemStyle: {
        color: '#e65832'
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    children: [{
        name: '文明以止',
        itemStyle: {
            color: '#f89a80'
        },
        label: {
        fontSize: 14,
        fontWeight: 'bold'
    },
        children: [{
            name: '中国文学史上第一部浪漫主义诗歌总集',
            value: 1,
            itemStyle: {
                color: '#f89a80'
            }
        }]
    },{
        name: '天人合一',
        itemStyle: {
            color: '#d45a59'
        },
        label: {
        fontSize: 14,
        fontWeight: 'bold'
    },
        children: [{
            name: '《文选》',
            value: 1,
            itemStyle: {
                color: '#da5c1f'
            }
        }]
    }]
}];

option = {
    series: {
        type: 'sunburst',
        highlightPolicy: 'ancestor',
        data: data,
        radius: [ 0, '210%'],
        sort: null,
        levels: [{}, {
            r0: '15%',
            r: '35%',
            itemStyle: {
                borderWidth: 3,
            },
            label: {
                rotate: 'tangential'
            }
        }, {
            r0: '36%',
            r: '66%',            
            label: {
                align: 'center',                
            }
        }, {
            r0: '67%',
            r: '69%',
            label: {
                position: 'outside',
                padding: 3,
                silent: false
            },
            itemStyle: {
                borderWidth: 3
            }
        }]
    }
};