/**
 * tree所需数据
 */
var data2 = {
    "name": "网易云",
    "children": [{
        "name": '云音乐飙升榜',

    }, {
        "name": "云音乐新歌榜",
        "children": [{
            "name": "孤独她呀",
            "create": "二珂",
            "selected": true, //当前选中
        }, {
            "name": "昨日青空",
        }, {
            "name": "陷阱",
        }, {
            "name": "心事",
        }, {
            "name": "年少有为",
        }]
    }, {
        "name": "网易原创歌曲榜",
    }]
};


option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
        formatter: function(params) {
            return params.data.create && `作者：${params.data.create}`
        }
    },
    series: [{
        type: 'tree',
        name: 'tree2',
        data: [data2],
        top: '20%',
        bottom: '22%',
        right: '18%',
        symbolSize: 10,
        initialTreeDepth: 10,

        // label: {
        //     normal: {
        //         position: 'bottom',

        //         //verticalAlign: 'middle',
        //         align: 'center',
        //     }
        // },

        label: {
            normal: {
                position: 'bottom',
                verticalAlign: 'middle',
                align: 'center',
                formatter: function(params) {
                    if (params.data.selected) {
                        let str = '当前:'
                        return `{box|${str}${params.data.name}}`
                    } else {
                        return `${params.data.name}`
                    }

                },
                rich: {
                    box: {
                        color: '#3FA7DC',
                    }
                }
            }
        },

        leaves: {
            label: {
                normal: {
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'left'
                }
            }
        },


        /* leaves: {
             label: {
                 normal: {
                     position: 'right',
                     verticalAlign: 'middle',
                     align: 'left'
                 }
             }
         },*/

        // expandAndCollapse: true,
        // animationDuration: 550,
        // animationDurationUpdate: 750
    }]
}