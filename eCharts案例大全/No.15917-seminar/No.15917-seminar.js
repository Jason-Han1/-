option = {
    title: [
        {
            text: 'SAMPLES',
            textStyle: {
                color: '#0088ff',
                fontSize: 28
            }
        },
        {
            text: 'Pie Pattern',
            link: 'http://gallery.echartsjs.com/editor.html?c=pie-pattern'
        },
        {
            text: 'workload0',
            link: 'http://gallery.echartsjs.com/editor.html?c=scatter-punchCard'
        },
        {
            text: 'Workload1',
            link: 'http://gallery.echartsjs.com/editor.html?c=heatmap-cartesian'
        },
        {
            text: 'Wordload2',
            link: 'http://gallery.echartsjs.com/editor.html?c=scatter-single-axis'
        },
        {
            text: 'Life & Income',
            link: 'http://gallery.echartsjs.com/editor.html?c=xSyGj62SO'
        },
        {
            text: 'Migrate',
            link: 'http://gallery.echartsjs.com/editor.html?c=geo-lines'
        },
        {
            text: 'PM 2.5',
            link: 'http://gallery.echartsjs.com/editor.html?c=scatter-map-brush'
        },
        {
            text: 'Pinter',
            link: 'http://gallery.echartsjs.com/editor.html?c=scatter-painter-choice'
        },
        {
            text: 'Click Effect',
            link: 'http://gallery.echartsjs.com/editor.html?c=xHk1VG82G'
        },
        {
            text: 'Delay Animation',
            link: 'http://gallery.echartsjs.com/editor.html?c=xrkfsZneG'
        }
    ]
};

var height = 30;
var base = 15;
option.title.forEach(function (item, index) {
    if (index > 0) {
        item.top = base + height * index;
    }
});