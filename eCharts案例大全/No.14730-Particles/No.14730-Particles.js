var zr = myChart.getZr();


//////// Helper math methods
function scaleAndAdd(out, v1, v2, a) {
    out[0] = v1[0] + v2[0] * a;
    out[1] = v1[1] + v2[1] * a;
    return out;
}

function sub(out, v1, v2) {
    out[0] = v1[0] - v2[0];
    out[1] = v1[1] - v2[1];
    return out;
}

function len(v) {
    return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
}


//////// Random or constant value getters

var Constant = function(val) {
    var isArray = val instanceof Array;
    this.get = function(out) {
        if (isArray) {
            out = out || [];
            for (var i = 0; i < val.length; i++) {
                out[i] = val[i];
            }
            return out;
        }
        return val;
    }
}

// Random1D
var Random1D = function(min, max) {
    var range = max - min;
    this.get = function() {
        return Math.random() * range + min;
    };
};
// Random2D
var Random2D = function(min, max) {
    var rangeX = max[0] - min[0];
    var rangeY = max[1] - min[1];

    this.get = function(out) {
        if (!out) {
            out = [];
        }
        out[0] = rangeX * Math.random() + min[0];
        out[1] = rangeY * Math.random() + min[1];
        return out;
    };
};






/////////// Force fields
function ForceField(force) {
    this.force = force || [];
}

ForceField.prototype.applyTo = function(velocity, position, weight, deltaTime) {
    scaleAndAdd(velocity, velocity, this.force, deltaTime);
}

function BoxCollision(rect) {
    this.rect = rect || [
        [0, 0],
        [100, 100]
    ];
}

BoxCollision.prototype.applyTo = function(velocity, position, weight, deltaTime) {
    var rect = this.rect;
    var min = rect[0];
    var max = rect[1];
    position = position;
    velocity = velocity;
    if (position[0] < min[0] || position[0] > max[0]) {
        velocity[0] = -velocity[0] * 0.6;
    }
    if (position[1] < min[1] || position[1] > max[1]) {
        velocity[1] = -velocity[1] * 0.6;
    }
}

function RepulsiveField(center, k) {
    this.center = center;
    this.k = k;
}

var v = []
RepulsiveField.prototype.applyTo = function(velocity, position, weight, deltaTime) {
    sub(v, position, this.center);
    var l = len(v);
    var k = this.k;
    var f = k / l;
    scaleAndAdd(velocity, velocity, v, f / l);
}



/////////// Particle constructor

function Particle() {
    this.position = [];
    this.oldPosition = [];

    this.velocity = [];

    this.life = 1;

    this.age = 0;

    this.path = null;
}

Particle.prototype.update = function(deltaTime) {
    this.oldPosition[0] = this.position[0];
    this.oldPosition[1] = this.position[1];
    if (this.velocity) {
        scaleAndAdd(this.position, this.position, this.velocity, deltaTime);
    }
}

function Emitter(createPath) {
    this.max = 4000;
    this.amount = 15;

    this.life = null;
    this.position = null;
    this.velocity = null;

    this._particlePool = [];

    for (var i = 0; i < this.max; i++) {
        var particle = new Particle();
        particle.emitter = this;
        particle.path = createPath(particle);
        this._particlePool.push(particle);
    }
}

Emitter.prototype.emit = function(out) {
    var amount = Math.min(this._particlePool.length, this.amount);

    for (var i = 0; i < amount; i++) {
        var particle = this._particlePool.pop();
        if (this.position) {
            this.position.get(particle.position);
            particle.oldPosition[0] = particle.position[0];
            particle.oldPosition[1] = particle.position[1];
        }
        if (this.velocity) {
            this.velocity.get(particle.velocity);
        }
        if (this.life) {
            particle.life = this.life.get();
        }

        particle.age = 0;

        out.push(particle);
    }
}

Emitter.prototype.kill = function(particle) {
    this._particlePool.push(particle);
}

function ParticleEffect(zr) {

    this.zr = zr;

    this._particles = [];

    this._effectors = [];

    this._emitters = [];

    this._elapsedTime = 0;

    this._emitting = true;

    this._shapeBundle = new echarts.graphic.CompoundPath({
        shape: {
            paths: []  
        },
        style: {
            fill: 'none',
            stroke: '#fff',
            lineWidth: 3
        }
    });
    zr.add(this._shapeBundle);
}

ParticleEffect.prototype = {

    addEmitter: function(emitter) {
        emitter.zr = this.zr;
        this._emitters.push(emitter);
    },

    addEffector: function(effector) {
        this._effectors.push(effector);
    },

    update: function(deltaTime) {
        // MS => Seconds
        deltaTime /= 1000;
        this._elapsedTime += deltaTime;

        var particles = this._particles;

        if (this._emitting) {
            for (var i = 0; i < this._emitters.length; i++) {
                this._emitters[i].emit(particles);
            }
            if (this.oneshot) {
                this._emitting = false;
            }
        }

        var pathList = [];
        // Aging
        var len = particles.length;
        for (var i = 0; i < len;) {
            var p = particles[i];
            p.age += deltaTime;
            if (p.age >= p.life) {
                p.emitter.kill(p);
                particles[i] = particles[len - 1];
                particles.pop();
                len--;
            } else {
                pathList.push(p.path);
                i++;
            }
        }

        this._shapeBundle.shape.paths = pathList;

        for (var i = 0; i < len; i++) {
            // Update
            var p = particles[i];
            if (this._effectors.length > 0) {
                for (var j = 0; j < this._effectors.length; j++) {
                    this._effectors[j].applyTo(p.velocity, p.position, p.weight, deltaTime);
                }
            }
            p.update(deltaTime);

            var path = p.path;
            if (path) {
                path.shape.x1 = p.oldPosition[0];
                path.shape.y1 = p.oldPosition[1];
                path.shape.x2 = p.position[0];
                path.shape.y2 = p.position[1];
            }
        }
        this._shapeBundle.dirty();
    }
};

var particleEffect;

function createForceField(x, y, k) {
    var center = [x, y];
    particleEffect.addEffector(new RepulsiveField(
        center, k
    ));
    var circle = new echarts.graphic.Circle({
        style: {
            fill: k > 0 ? '#800' : '#080'
        },
        shape: {
            r: 10
        },
        position: [center[0], center[1]],
        ondrag: function() {
            center[0] = this.position[0];
            center[1] = this.position[1];
        },
        draggable: true
    });
    zr.add(circle);
}

function init(opts) {
    opts = opts || {};
    particleEffect = new ParticleEffect(zr);

    var emitter = new Emitter(function() {
        return new echarts.graphic.Line({
            shape: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 0
            },
            // position: [100, 50],
            silent: true
        });
    });
    emitter.position = opts.random ? new Random2D(
        [10, 10], [20, 20]
    ) : new Constant[10, 10];

    emitter.life = opts.random ? new Random1D(4, 6) : new Constant(1)

    particleEffect.addEmitter(emitter);


    if (opts.collision) {
        particleEffect.addEffector(new BoxCollision([
            [0, 0],
            [zr.getWidth(), zr.getHeight()]
        ]));
    }
    if (opts.forceField) {
        createForceField(300, 300, 150);
        createForceField(150, 150, -100);
        emitter.velocity = new Random2D(
            [120, 80], [80, 120]
        );
    } else {
        emitter.velocity = opts.random ? new Random2D(
            [400, 50], [100, 10]
        ) : new Constant([500, 100]);
        particleEffect.addEffector(new ForceField([0, 300]));
    }

    zr.animation.on('frame', function(deltaTime) {
        particleEffect.update(deltaTime);
    });

    if (opts.motionBlur) {
        zr.configLayer(0, {
            motionBlur: true,
            lastFrameAlpha: 0.9
        });
    }
}


init({
    random: true,
    collision: true,
    motionBlur: true,
    forceField: true
});

var option = {};