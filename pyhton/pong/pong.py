from turtle import Screen
from paddle import Paddle
from ball import Ball
import time
screen = Screen()
screen.bgcolor("black")
screen.setup(width=800, height=600)
screen.title("PONG GAME")
screen.tracer(0)
r_paddle = Paddle(350)
l_paddle = Paddle(-350)
ball = Ball("circle")
screen.listen()
screen.onkey(r_paddle.go_up, "Up")
screen.onkey(r_paddle.go_down, "Down")
screen.onkey(l_paddle.go_up, "w")
screen.onkey(l_paddle.go_down, "s")

game_is_on = True
while game_is_on:
    time.sleep(0.2)
    screen.update()
    ball.move()

    # top and bottom ball collision
    y_cor = ball.ycor()
    if y_cor > 280 or y_cor < -280:
        # bounce the ball
        ball.bounce_y()

    if ball.xcor == 400:
        ball.goto(0, 0)

    if ball.distance(r_paddle) < 50 and ball.xcor() > 320:
        ball.bounce_x()

    if ball.distance(l_paddle) < 50 and ball.xcor() > -320:
        ball.bounce_x()


screen.exitonclick()
