let Nombre_de_sauts = 0
input.onButtonPressed(Button.A, function () {
    Nombre_de_sauts = 0
    basic.showNumber(Nombre_de_sauts)
})
input.onGesture(Gesture.Shake, function () {
    Nombre_de_sauts += 1
    basic.showNumber(Nombre_de_sauts)
    if (Nombre_de_sauts == 25) {
        basic.showString("Bravo!")
    }
})
basic.forever(function () {
	
})
