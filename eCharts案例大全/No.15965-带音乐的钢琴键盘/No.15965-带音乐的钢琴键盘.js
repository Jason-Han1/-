// 加入声音
var xAxisData = [];
var data = [];
for (var i = 0; i < 50; i++) {
    xAxisData.push(i);
    data.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5)
}

option = {
    backgroundColor: '#08263a',
    xAxis: {
        show: false,
        data: xAxisData
    },
    visualMap: {
        show: false,
        min: 0,
        max: 50,
        dimension: 0,
        inRange: {
            color: ['#4a657a', '#308e92', '#b1cfa5', '#f5d69f', '#f5898b', '#ef5055']
        }
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#4a657a'
            }  
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#08263f'
            }
        },
        axisTick: {
            show: false
        }
    },
    series: [{
        type: 'bar',
        data: data,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                shadowBlur: 10,
                shadowColor: '#111'
            }
        },
        animationEasing: 'elasticOut',
        animationEasingUpdate: 'elasticOut',
        animationDelay: function (idx) {
            return idx * 20;
        },
        animationDelayUpdate: function (idx) {
            return idx * 20;
        }
    }]
};

var audioLoaded = false;
myChart.on('mouseover', function(e) {
    var note = Math.round(e.value / 2) + 40; // the MIDI note
    if (audioLoaded) {
		var delay = 0; // play one note every quarter second
		var velocity = 127; // how hard the note hits
		// play the note
		MIDI.setVolume(0, 127);
		MIDI.noteOn(0, note, velocity, delay);
		MIDI.noteOff(0, note, delay + 0.75);
    }
});

MIDI.loadPlugin({
	soundfontUrl: "https://cdn.rawgit.com/mudcube/MIDI.js/master/examples/soundfont/",
	instrument: "acoustic_grand_piano",
	onprogress: function(state, progress) {
		console.log(state, progress);
	},
	onsuccess: function() {
		audioLoaded = true;
	}
});