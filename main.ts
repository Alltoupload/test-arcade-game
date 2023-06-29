namespace SpriteKind {
    export const Ground = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    gravity = -64
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 400, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    gravity = -64
    music.play(music.createSoundEffect(WaveShape.Noise, 400, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
})
function Play_Theme_Song () {
    music.play(music.createSong(assets.song`Theme`), music.PlaybackMode.LoopingInBackground)
}
let gravity = 0
music.setVolume(255)
game.setGameOverMessage(false, "GAME OVER!")
game.setGameOverEffect(true, effects.confetti)
game.setGameOverEffect(false, effects.blizzard)
Play_Theme_Song()
let mySprite = sprites.create(assets.image`PlayerStatic`, SpriteKind.Player)
let Player2 = sprites.create(assets.image`PlayerStatic`, SpriteKind.Player)
let mySprite2 = sprites.create(assets.image`Grass`, SpriteKind.Ground)
let Spike = sprites.create(assets.image`Spike`, SpriteKind.Enemy)
mySprite2.y = 129
animation.runImageAnimation(
mySprite,
assets.animation`Player`,
200,
true
)
scene.cameraFollowSprite(mySprite)
mySprite.setBounceOnWall(true)
Spike.follow(mySprite, 1)
game.onUpdate(function () {
    mySprite.setVelocity(controller.dx() * 10, gravity)
    controller.player2.moveSprite(Player2)
    if (!(mySprite.overlapsWith(mySprite2) || mySprite.overlapsWith(Player2))) {
        gravity += 1
    } else {
        gravity = 0
        gravity += -10
    }
})
