var p
var x = 2
var f
var efiefef
var turret
var boxes
var distance = 1000
var furthestDistance = 1000
var sr = 50
var money = 0
var speed = 0.001
var force = 500
var fr = 50
var green = 0
var shots
function setup() {
    green = 0
    boxes = new Group()
    shots = new Group()
    createCanvas(1000,750)
    turret = createSprite(1000, 375, 200, 50, "n")
    turret.rotation=180
}

function draw() {
    frameRate(120)
    if (frameCount % sr == 0) {
        box = new boxes.Sprite(Math.random()*1000-200, Math.random()*750, Math.random()*100+50,Math.random()*100+50)
        box.moveTowards(turret, speed)
    }
    turret.rotateTowards(mouse, 0.1, 0)
    if (frameCount%fr==0) { 
        boxes.collided(shots, (b, s) => {
            b.opacity -= 0.25
            if (b.opacity == 0) {
                money += 1
                green = 150
                b.remove()
            }
        })
        for (i=0;i!=1;i++) {
            c= new shots.Sprite(1000, 375, 10, 10)
            turret.rotateTowards(mouse, 0.1, 0)
            c.diameter=12
            c.bearing = turret.rotation
            c.applyForce(Math.random()*force)
        }
    }
    background(220)
    textSize(30)
    fill(0, green, 0)
    if (green > 0) {
        green -= 1
    }
    text(`$${money}`, 10, 40)
}