

//该作品展示了梁启超推荐的国学入门读物，书单详细内容，见作者博客，
//里面还有一些其他可视化图表，欢迎留言评论. just 引一下流量，见笑了.
// 个人博客站点： http://bya.cool  或   http://baiyongan.github.io 



var data = [ 
    {
        name: '专业类',
        itemStyle: {
            color: '#187a2f'
        },
        value: 32.92,
        label: {
            fontSize: 20,
            fontWeight: 'bold'
        },
        children: [
            {
                name: '农业',
                itemStyle: {
                    color: '#3aa255'
                },        
                label: {
                    fontSize: 14,
                    fontWeight: 'bold'
                },
                value: 6.67,
                children: []
            },
            {
                name: '师范',
                itemStyle: {
                    color: '#3aa255'
                },        
                label: {
                    fontSize: 14,
                    fontWeight: 'bold'
                },
                value: 10.25,
                children: []
            },
            {
                name: '财经',
                itemStyle: {
                    color: '#3aa255'
                },        
                label: {
                    fontSize: 14,
                    fontWeight: 'bold'
                },
                value: 5.49,
                children: []
            },
            {
                name: '医药',
                itemStyle: {
                    color: '#3aa255'
                },        
                label: {
                    fontSize: 14,
                    fontWeight: 'bold'
                },
                value: 3.97,
                children: []
            },
            {
                name: '民族',
                itemStyle: {
                    color: '#3aa255'
                },        
                label: {
                    fontSize: 14,
                    fontWeight: 'bold'
                },
                value: 1.82,
                children: []
            }
        ]
    },
    {
        name: '工科',
        itemStyle: {
            color: '#0aa3b5'
        },
        value: 35.8,
        label: {
            fontSize: 20,
            fontWeight: 'bold'
        },
        children: []
    }, 
    {
        name: '综合',
        itemStyle: {
            color: '#e65832'
        },
        label: {
            fontSize: 20,
            fontWeight: 'bold'
        },
        value: 31.28,
        children: []
    }
];

option = {
    series: {
        type: 'sunburst',
        highlightPolicy: 'ancestor',
        data: data,
        radius: [ 0, '50%'],
        sort: null,
        levels: [
            {}, 
            {
                r0: '7%',
                r: '21%',
                itemStyle: {
                    borderWidth: 3,
                },
                label: {
                    rotate: 'tangential'
                }
            }
        ]
    }
};