from turtle import Turtle, Screen

turtles = []
screen = Screen()
screen.setup(width=600, height=600)
screen.bgcolor('black')
screen.title("My snake game ")
screen.tracer(0)

position = [(0, 0), (20, 0), (40, 0)]
# position segments

segments = []
for pos in position:
    turtle = Turtle(shape="square")
    turtle.penup()
    turtle.color("white")
    turtle.goto(pos)
    segments.append(turtle)
screen.update()
game_on = True


while game_on:
    for seg in segments:
        seg.forward(30)
screen.exitonclick()
