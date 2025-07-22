export function checkControls ({ mario, keys }) {
  const isMarioTouchingFloor = mario.body.touching.down

  const isLeftKeyDown = keys.left.isDown
  const isRightKeyDown = keys.right.isDown
  const isUpKeyDown = keys.up.isDown

  if (mario.isDead) return

  if (isLeftKeyDown) {
    isMarioTouchingFloor && mario.anims.play('mario-walk', true)
    mario.x -= 2
    // this.mario.setVelocityX(-150)
    mario.flipX = true
  } else if (isRightKeyDown) {
    isMarioTouchingFloor && mario.anims.play('mario-walk', true)
    mario.x += 2
    // this.mario.setVelocityX(150)
    mario.flipX = false
  } else if (isMarioTouchingFloor) {
    mario.anims.play('mario-idle', true)
    // this.mario.setVelocityX(0)
  }

  if (isUpKeyDown && isMarioTouchingFloor) {
    mario.setVelocityY(-300)
    mario.anims.play('mario-jump', true)
  }
}