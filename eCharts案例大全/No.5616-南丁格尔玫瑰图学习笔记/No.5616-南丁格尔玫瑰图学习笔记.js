 option = {
    toolbox: {
        show: true,//false则不显示工具栏
        x:'right',//水平位置，【left\center\right\数字】
        y:'top',//垂直位置，【top\center\bottom\数字】
        itemGap:10,//每个工具的间隔
        itemSize:16,//工具的大小
        feature: {
            mark: {show: true},//辅助线
            dataView: {show: true, readOnly: false},//数据视图
            restore: {show: true},//还原
            saveAsImage: {show: true,type:'jpeg'}//保存为图片
        }
    },
    title: {
        text: '南丁格尔玫瑰图学习笔记',
        subtext: 'by 微信公众号：charming_chart',
        x: '800',//标题的水平位置，【left\center\right\数字】
        y: '280',//标题的垂直位置，【top\center\bottom\数字】
        textStyle://设计标题的字体
        {fontSize:27,//字号
        fontWeight:'bold',//粗细【normal\bold\bolder\lighter】
        fontFamily:'Microsoft YaHei',//字体【 'serif'\'monospace'\'Arial'\'Courier New'\'Microsoft YaHei'】
        color:'#000'//颜色
        },
        subtextStyle://副标题的设置，同上
        {
            fontStyle:'oblique'//字体风格，斜体或正常【normal\italic\oblique】
        }
    },
    legend: {
        x: '800',//水平位置，【left\center\right\数字】
        y: '350',//垂直位置，【top\center\bottom\数字】
        align:'right',//字在图例的左边或右边【left/right】
        orient:'vertical',//图例方向【horizontal/vertical】
        icon: "circle",   //图例形状【circle\rect\roundRect\triangle\diamond\pin\arrow\none】
        textStyle://图例文字
        {
            fontFamily:'微软雅黑',
            color:'1',//图例的文字颜色，例如“#333”，如果不写‘#’,例如只写‘1’，字的颜色会与图例色相同
            
        },
        data: ['rose1', 'rose2', 'rose3', 'rose4','', 'rose5', 'rose6', 'rose7', 'rose8']//图例上的文字内容，要与下面data部分的name要一致，不然会显示不出来
        //图例如果需要换行在两个name之间写空的''
    },
    series: [
        {
            name: '半径模式',
            type: 'pie',//这个type决定了你画的图的类型是饼图还是柱状图等
            radius: [20, 110],//饼图的内环和外环的半径
            center: ['30%', '50%'],//玫瑰图在画布上的相对位置
            roseType: 'radius',//这里可以选择radius或area
            itemStyle: {
                normal: {
                    // color: 各异,
                    borderColor: '#fff',//制造每个扇区的分裂感
                    borderWidth: 1,
                    label: {
                        show: true,//数据标签显示
                        position: 'outer',
                        textStyle://数据标签的字体配置，与其他组件相同
                        {   
                            fontSize:12,//字号
                            fontWeight:'normal',//粗细【normal\bold\bolder\lighter】
                            fontFamily:'Microsoft YaHei',//字体【 'serif'\'monospace'\'Arial'\'Courier New'\'Microsoft YaHei'】
                            color:''//颜色各异
                        },
                        formatter:'{b}：{c},{d}%'//a:系列名，就是你上面写的name半径模型，b：数据名，就是rose1，c：数据值，d百分比
                    },
                    labelLine: {
                        show: true,//数据标签引导线
                        length: 1,
                        lineStyle: {
                            // color: 各异,
                            width: 1,
                            type: 'dotted'//【solid\dashed\dotted】
                        }
                    }
                },
                emphasis: {//选中的样式
                    // color: 各异,
                    borderColor: 'rgba(0,0,0,0)',
                    borderWidth: 1,
                    label: {
                        show: false//选中时不显示数据标签
                        // position: 'outer'
                        // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                    },
                    labelLine: {
                        show: false,//选中时不显示数据标签引导线
                        length: 20,
                        lineStyle: {
                            // color: 各异,
                            width: 1,
                            type: 'dotted'
                        }
                    }
                }
    },
            data: [//数据的值
                {value: 10, name: 'rose1'},
                {value: 5, name: 'rose2'},
                {value: 15, name: 'rose3'},
                {value: 25, name: 'rose4'},
                {value: 20, name: 'rose5'},
                {value: 35, name: 'rose6'},
                {value: 30, name: 'rose7'},
                {value: 40, name: 'rose8'}
            ]
        }
            ],
tooltip: {
    trigger: 'item', // 触发类型，默认数据触发，【item\axis】
    formatter: '{a} <br/>{b} : {c} ({d}%)',//与数据标签相同
    //showDelay: 20,  // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
   // hideDelay: 100,// 隐藏延迟，单位ms
    //transitionDuration : 0.4,  // 动画变换时间，单位s
    //backgroundColor: 'rgba(0,0,0,0.7)',  // 提示背景颜色，最后一个参数是透明度
   // borderColor: '#333',            // 提示边框颜色
   // borderRadius: 4,                // 提示边框圆角，单位px，默认为4
    //borderWidth: 0,                // 提示边框线宽，单位px，默认为0（无边框）
    //padding: 5,                   // 提示内边距，单位px，默认各方向内边距为5，
                                // 接受数组分别设定上右下左边距，同css
   // axisPointer : {                 // 坐标轴指示器，坐标轴触发有效
        //type : 'line',         // 默认为直线，可选为：'line' | 'shadow'
       // lineStyle : {          // 直线指示器样式设置
           // color: '#48b',
           // width: 2,
            //type: 'solid'
       // },
       // shadowStyle : {              // 阴影指示器样式设置
       //     width: 'auto',         // 阴影大小
           // color: 'rgba(150,150,150,0.3)'  // 阴影颜色
        //}
  //  },
    //textStyle: {
        //color: '#fff'
   // }
}
    
    
};