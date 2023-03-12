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
            name: '商户D'
        }, {
            name: '商户C'
        }, {
            name: '商户A'
        }, {
            name: '商户B'
        }, {
            name: '商户E'
        }, {
            name: '商户F'
        }, {
            name: '商户G'
        },  {
            name: '商户H'
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
            source: '商户D',
            target: '商户B',
            value: 12
        }, {
            source: '商户C',
            target: '商户A',
            value: 5
        }, {
            source: '商户B',
            target: '商户A',
            value: 1
        }, {
            source: '商户E',
            target: '商户A',
            value: 1
        }, {
            source: '商户B',
            target: '商户G',
            value: 6
        },{
            source: '商户B',
            target: '商户F',
            value: 5
        },{
            source: '商户F',
            target: '商户A',
            value: 1
        }, {
            source: '商户G',
            target: '商户A',
            value: 1
        },{
            source: '商户H',
            target: '商户A',
            value: 2
        }]
    }
};