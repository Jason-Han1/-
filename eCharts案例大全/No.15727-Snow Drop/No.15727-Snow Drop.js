option = {
    backgroundColor: '#333',
    series: []
};

var snowDrops = [];

function SnowDrop(size, speed, position, life) {
    this._el = new echarts.graphic.Circle({
        shape: {
            r: size
        },
        style: {
            fill: '#fff'  
        },
        position: position
    });
    
    this._opacity = size / 8;

    this._speed = speed;

    this.restLife = life;
}

SnowDrop.prototype.getEl = function () {
    return this._el;
}

SnowDrop.prototype.update = function (time) {
    this._el.position[0] += this._speed[0] * time;
    this._el.position[1] += this._speed[1] * time;
    
    this._el.style.opacity = this._opacity;

    this._el.dirty();

    this.restLife -= time;
    if (this.restLife < 0) {
        return true;
    }
}

function spawnSnowDrop() {
    var size = Math.random() * 5 + 2;
    var speed = size * 20;

    var snowDrop = new SnowDrop(
        size, [Math.random(), speed],
        [zr.getWidth() * Math.random(), -Math.random() * 10],
        4 + Math.sqrt(10 - size)
    );

    snowDrops.push(snowDrop);
    return snowDrop;
}

var zr = myChart.getZr();

zr.animation.on('frame', function (dTime) {
    dTime /= 1000;
    // spawn
    if (Math.random() < 0.1) {
        for (var i = 0; i < 2; i++) {
            var snowDrop = spawnSnowDrop();
            zr.add(snowDrop.getEl());
        }
    }
    snowDrops.forEach(function (snowDrop) {
        snowDrop.update(dTime / 1000);
    });
    // Update
    snowDrops = snowDrops.filter(function (snowDrop) {
        var needsRemove = snowDrop.update(dTime);
        if (needsRemove) {
            zr.remove(snowDrop.getEl());
        }
        return !needsRemove;
    });
});

