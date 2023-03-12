option = {
    series: {
        type: 'sankey',
        layout:'none',
        label:{
            formatter:"{b}-{c}"
        },
        focusNodeAdjacency: 'allEdges',
        data: [{
            name: '抓拍人次',
            value:2877
        }, {
            name: '顾客抓拍人次',
            value:2794
            
        }, {
            name: '顾客抓拍人数',
            value:2248
        }, {
            name: '男',
            value:994
        }, {
            name: '女',
            value:989
        }, {
            name:"男性儿童",
            value:280
        },{
            name:"男性成人",
            value:714
        }, {
            name:"女性儿童",
            value:198
        },{
            name:"女性成人",
            value:791
        }, {
            name: '未知',
            value:265
        },{
            name: '重复抓拍',
            value:546
        }, {
            name: '店员抓拍人次',
            value:65
        }, {
            name: '外卖抓拍人次',
            value:18
        }],
        links: [{
            source: '抓拍人次',
            target: '顾客抓拍人次',
            value: 2794
        }, {
            source: '抓拍人次',
            target: '店员抓拍人次',
            value: 65
        }, {
            source: '抓拍人次',
            target: '外卖抓拍人次',
            value: 18
        }, {
            source: '顾客抓拍人次',
            target: '顾客抓拍人数',
            value: 2248
        }, {
            source: '顾客抓拍人次',
            target: '重复抓拍',
            value: 546
        }, {
            source: '顾客抓拍人数',
            target: '男',
            value: 994
        }, {
            source: '顾客抓拍人数',
            target: '女',
            value: 989
        }, {
            source: '顾客抓拍人数',
            target: '未知',
            value: 258
        }, {
            source: '男',
            target: '男性儿童',
            value: 280
        }, {
            source: '男',
            target: '男性成人',
            value: 714
        }, {
            source: '女',
            target: '女性儿童',
            value: 198
        }, {
            source: '女',
            target: '女性成人',
            value: 791
        }]
    }
};
