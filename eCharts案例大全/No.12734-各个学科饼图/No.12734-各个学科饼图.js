option = {
    backgroundColor:'#050d19',
    title : { //统计图标题
        text: '饼图',//统计图名称
        x:'center',//统计图水平位置
        textStyle:{//统计图标题文本样式
            color:'#fff'//统计图标题文本颜色
        }
    },
    color: ['#37a2da','#32c5e9','#9fe6b8','#ffdb5c','#ff9f7f','#fb7293','#e7bcf3','#8378ea'],//统计图每个色块的颜色
    tooltip : {//统计图鼠标悬浮提示框
        trigger: 'item',//鼠标悬浮框出发类型，item适用于饼图
        formatter: "{a} <br/>{b} : {c} ({d}%)"//提示框提示的数据
        //{a}统计图系列中series中的名称，{b}统计图每个饼块的名称，{c}统计图每个饼块的数值，{d}统计图每个饼块所占的比例
    },
    series : [//数据系列
        {
            name:'学科成绩饼图',//名称
            type:'pie',//统计图类型
            radius : [40, 100],//统计图大小，
            data:[ //数据
                {value:10, name:'英语'},
                {value:5, name:'语文'},
                {value:15, name:'数学'},
                {value:25, name:'地理'},
                {value:20, name:'历史'},
                {value:35, name:'物理'},
                {value:30, name:'化学'},
                {value:40, name:'政治'}
            ]
        }
    ]
};
