/*


	COLORS

	Here's a little bootstrapping to create our global Color constants.
	At first it seemed like overkill, but then as the solvers and inspectors
	moved forward having these objects available became highly desirable.
	Sure, ES5 doesn't really have constants but the all-caps alerts you
	to the fact that them thar variables ought not to be messed with.


*/












function Color( name, initial, hex, styleF, styleB ){

	this.name    = name
	this.initial = initial
	this.hex     = hex
	this.styleF  = styleF
	this.styleB  = styleB
}


//  Global constants to describe sticker colors.

var
W = WHITE = new Color(

	'white',
	'W',
	'#FFF',
	'font-weight: bold; color: #888',
	'background-color: #F3F3F3; color: rgba( 0, 0, 0, 0.5 )'
),
O = ORANGE = new Color(

	'orange',
	'O',
	'#FF5800',
	'font-weight: bold; color: #FF5800',
	'background-color: #F60; color: rgba( 255, 255, 255, 0.9 )'
),
B = BLUE = new Color(

	'blue',
	'B',
	'#0051BA',
	'font-weight: bold; color: #fff',
	'background-color: #0051BA; color: rgba( 255, 255, 255, 0.9 )'
),
R = RED = new Color(

	'red',
	'R',
	'#C41E3A',
	'font-weight: bold; color: #C41E3A',
	'background-color: #C41E3A; color: rgba( 255, 255, 255, 0.9 )'
),
G = GREEN = new Color(

	'green',
	'G',
	'#009E60',
	'font-weight: bold; color: #0A0',
	'background-color: #009E60; color: rgba( 255, 255, 255, 0.9 )'
),
Y = YELLOW = new Color(

	'yellow',
	'Y',
	'#FFD500',
	'font-weight: bold; color: #ED0',
	'background-color: #FFD500; color: rgba( 0, 0, 0, 0.5 )'
),
COLORLESS = new Color(

	'NA',
	'X',
	'#DDD',
	'color: #EEE',
	'color: #DDD'
)


