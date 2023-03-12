var colors = ['#4fb9d1', '#d83965', '#f39c38', '#9036aa', '#4054af', '#e35241', '#3f9488', '#97c05c', '#154bee', '#33e6cc', '#123997', '#faa200', '#ffff00', '#b0e0e6', '#470024', '#bce700', '#4396ec']
option = {
     tooltip : {
        trigger: 'item',
        formatter: "{b} :{c}"
        
    },
    series: {
        type: 'sankey',
        layout:'none',
        data: [{
            name: '中考达线人数'
        }, {
            name: '省级高中'
        }, {
            name: '市级高中'
        }, {
            name: '广州市第一一三中学'
        }, {
            name: '示范性高中'
        }, {
            name: '民办高中'
        },{
            name: '天河外国语学校'
        }, {
            name: '广州市东圃中学'
        },{
            name: '第一批次'
        }].map((item, index) => {
            item.itemStyle = {
                normal: {
                    color: colors[index]
                }
            }
            return item
        }),
        lineStyle: {
            normal: {
                color: 'source'
            }
        },
        links: [
            {
            source: '中考达线人数',
            target: '省级高中',
            value: 4
        }, {
            source: '中考达线人数',
            target: '市级高中',
            value: 5
        }, {
            source: '中考达线人数',
            target: '示范性高中',
            value: 1
        }, {
            source: '中考达线人数',
            target: '民办高中',
            value: 6
        },{
            source: '省级高中',
            target: '广州市第一一三中学',
            value: 2
        },{
            source: '省级高中',
            target: '华美英语实验学校',
            value: 2
        }, {
            source: '省级高中',
            target: '广州市东圃中学',
            value: 1
        },{
            source: '省级高中',
            target: '广州市天荣中学',
            value: 2
        },{
            source: '华美英语实验学校',
            target: '第一批次',
            value: 2
        },{
            source: '广州市第一一三中学',
            target: '第一批次',
            value: 3
        }]
    }
};