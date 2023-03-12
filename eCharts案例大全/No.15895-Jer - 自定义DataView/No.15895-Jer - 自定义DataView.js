option = {
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {
                show : true,
                title : '数据视图',
                readOnly: true,
                lang : ['数据视图', '关闭', '刷新'],
               optionToContent: function(opt) {
                 var axisData = opt.series[0].data;
                 var series = opt.series[0].data;
                 var table = '<table border="1px" align="center" cellspacing="0" cellpadding="0" style="width:400px;text-align:center;background:#ccccccc"><tbody><tr style="background:#1e90ff">'
                 + '<td width="70px">机构名称</td>'
                 + '<td width="70px">标识器与标识钉总和</td>'	                   			                              
                 + '</tr>';
                 for (var i = 0, l = series.length; i < l; i++) {
                   table += '<tr>'
                     + '<td>' + series[i].name + '</td>'
                     + '<td>' + series[i].value + '</td>'	                   			                           
                     + '</tr>';
                 }
                 table += '</tbody></table>';
                 return table;
                }
            },
        }
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        }
    ]
};