var color = [
    '#61a0a8', 
    '#F87D7C', 
    '#41E1FF',
    '#55D5B5',
    '#616BA6',
    '#6978F2', 
    '#9900FF ', 
    '#01FFFF', 
    '#FEDF00',
    '#5555FF',
    '#33CCFF',
    '#33FFAA',
    '#EE7700 ',
    '#CC6600 '
    ]
var data = [
    {value:9, name:'企业管理'},
    {value:33, name:'运维服务'},
    {value:1, name:'运营服务'},
    {value:12, name:'营销业务'},
    {value:5, name:'营销管理'},
    {value:3, name:'交付质量'},
    {value:7, name:'交付管理'},
    {value:1, name:'交付需求bug'},
    {value:12, name:'服务管理'},
    {value:4, name:'服务需求bug'},
    {value:8, name:'服务质量'},
    {value:1, name:'质量管理'},
    {value:19, name:'产品质量'},
    {value:2, name:'产品管理'},
    {value:21, name:'产品研发'}
];
option = {
    color:color,
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        left: 20,
        top:20,
		// width:,
		// height:,
		
		// 图例颜色块宽高
		itemWidth:15,
		itemHeight:15,
// 		// 图例字体大小
		textStyle:{
			fontSize:10,
		},
        formatter: function (name) {
            var total = 0;
            var target;
            for (var i = 0, l = data.length; i < l; i++) {
                total += data[i].value;
                if (data[i].name == name) {
                    target = data[i].value;
                }
            }
            return name + ' ' + ((target / total) * 100).toFixed(2) + '%';
        },
        data:['运维服务','产品研发','产品质量','营销业务',
        '服务管理','企业管理','服务质量','交付管理','营销管理',
        '服务需求bug','交付质量','产品管理','运营服务','质量管理',
        '交付需求bug'],
    },
    series: [
        {
          // name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner',
                    fontSize:10
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:9, name:'企业管理'},
                 {value:34, name:'运营'},
                 {value:17, name:'营销'},
                 {value:11, name:'交付'},
                 {value:24, name:'客户服务'},
                 {value:43, name:'产品', selected:true},
              
            ]
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '55%'],
            data: data,
        },
    ],
};