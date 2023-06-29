@namespace
class SpriteKind:
    Ground = SpriteKind.create()

def on_up_pressed():
    global gravity
    gravity = -64
    music.play(music.create_sound_effect(WaveShape.SQUARE,
            400,
            600,
            255,
            0,
            100,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.IN_BACKGROUND)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_a_pressed():
    global gravity
    gravity = -64
    music.play(music.create_sound_effect(WaveShape.NOISE,
            400,
            600,
            255,
            0,
            100,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.IN_BACKGROUND)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def Play_Theme_Song():
    music.play(music.create_song(assets.song("""
            Theme
        """)),
        music.PlaybackMode.LOOPING_IN_BACKGROUND)
gravity = 0
music.set_volume(255)
game.set_game_over_message(False, "GAME OVER!")
game.set_game_over_effect(True, effects.confetti)
game.set_game_over_effect(False, effects.blizzard)
Play_Theme_Song()
mySprite = sprites.create(assets.image("""
    PlayerStatic
"""), SpriteKind.player)
Player2 = sprites.create(assets.image("""
    PlayerStatic
"""), SpriteKind.player)
mySprite2 = sprites.create(assets.image("""
    Grass
"""), SpriteKind.Ground)
Spike = sprites.create(assets.image("""
    Spike
"""), SpriteKind.enemy)
mySprite2.y = 129
animation.run_image_animation(mySprite, assets.animation("""
    Player
"""), 200, True)
scene.camera_follow_sprite(mySprite)
mySprite.set_bounce_on_wall(True)
Spike.follow(mySprite, 1)

def on_on_update():
    global gravity
    mySprite.set_velocity(controller.dx() * 10, gravity)
    controller.player2.move_sprite(Player2)
    if not (mySprite.overlaps_with(mySprite2) or mySprite.overlaps_with(Player2)):
        gravity += 1
    else:
        gravity = -1
game.on_update(on_on_update)
