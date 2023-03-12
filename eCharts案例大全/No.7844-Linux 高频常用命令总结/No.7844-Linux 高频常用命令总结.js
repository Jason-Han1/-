//  作者技术博客—————— https://baiyongan.github.io 
//该作品总结了linux的高频常用命令，详细内容，可以移步博客阅读相关文章，欢迎评论留言。



var data = {
    "name": "常用命令",
    "children": [
        {
            "name": "查询帮助",
            "children": [
                {"name": "man", },
                {"name": "help", },
          ]
        },
        {
           "name": "目录操作",
           "children": [
            {
                    "name": "基本操作",
                    "children": [
                    {"name": "mv"},
                    {"name": "rm"},
                    {"name": "cp"},
                    {"name": "mkdir"},
                    ]
            },
            {
                    "name": "漫游",
                    "children": [
                    {"name": "find"},
                    {"name": "ls"},
                    {"name": "cd"},
                    {"name": "pwd"}
                    ] 
            },
           ]
        }, 
        {
           "name": "文本处理",
           "children": [
            {
                    "name": "过滤",
                    "children": [
                    {"name": "grep"},
                    {"name": "sed"},
                    {"name": "awk"},
                    {"name": "diff"}
                    ]
            },
            {
                    "name": "查看",
                    "children": [
                    {"name": "less"},
                    {"name": "tail"},
                    {"name": "cat"},
                    ] 
            },
            {
                    "name": "统计",
                    "children": [
                    {"name": "sort"},
                    {"name": "uniq"},
                    ] 
            },
            {
                    "name": "编辑器",
                    "children": [
                    {"name": "vim"},
                    ] 
            },
           ]
        }, 
        {
           "name": "压缩",
           "children": [
            {"name": "tar",},
            {"name": "bzip2", },
            {"name": "unzip",},
            {"name": "unrar",},
           ]
        },
          {
           "name": "日常运维",
           "children": [
            {"name": "shutdown",},
            {"name": "mount", },
            {"name": "chmod",},
            {"name": "chown",},
            {"name": "su",},
            {"name": "yum",},
            {"name": "passwd",},
            {"name": "service",},
            {"name": "systemctl",},
           ]
          },
          {
           "name": "系统状态概览",
           "children": [
            {"name": "ps",},
            {"name": "top", },
            {"name": "free",},
            {"name": "df",},
            {"name": "ifconfig",},
            {"name": "uname",},
            {"name": "ping",},
            {"name": "netstat",},
           ]
          },
          {
           "name": "工作常用",
           "children": [
            {"name": "export",},
            {"name": "xargs", },
            {"name": "date",},
            {"name": "whereis",},
            {"name": "crontab",},
            {
                  "name": "网络",
                  "children":[
                  {"name": "scp"},
                  {"name": "ssh"},
                  {"name": "wget"},
                  {"name": "mysql"}, 
                ]  
            },
           ]
          },
    ]
};


myChart.hideLoading();

echarts.util.each(data.children, function (data, index) {
        index % 1 === 0 && (data.collapsed = true);
    });

myChart.setOption(option = {
    tooltip: {
        trigger: 'item',
        },
    legend: {
        top: '2%',
        left: '3%',
        orient: 'vertical',
        data: [{
            name: 'Common Command List',
            icon: 'rectangle'
        } ],
        borderColor: '#c23531'
    },

    series:[
        {
            type: 'tree',
            name: 'Common Command List',
            data: [data],
            top: '5%',
            left: '12%',
            bottom: '2%',
            right: '37%',
            symbolSize: 13,

            label: {
                normal: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 17,
                    fontWeight: 'bolder',
                    fontStyle: 'oblique'
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

            expandAndCollapse: true,

            animationDuration: 550,
            animationDurationUpdate: 750

        }

    ]
});
        