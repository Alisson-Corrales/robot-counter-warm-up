"use strict";

//the minefield
let field =
`.#..........#...#...#..#.......
.###...#.#.##..###..#...#...#..
#.....#................#...#.#.
#.....#..###.............#....#
......#.....#....#...##.....###
....#........#.#......##....#.#
..#.......##..#.#.#............
#.............#..#...#.#...#...
.#...........#.#....#..##......
......#..##..#....#....#...##..
....#.##.#####..#.##..........#
..#.#......#.#.#....#.....#....
...###.##......#..#.#...#...#..
...#..#.#..#..#.......#........
...#....#..#...........#.#.....
....#.........###.#....#...#...
....#..##.....#.##....##.#.....
........#.#.#.....#........#...
..#..#.....#.#...#.#...#.#.....
....#..........#....#....#...##
.##...#..#...##....#..#.#....#.
.#....##..#...#................
..#.###.........#.###.....#....
....#..#.......###.#...........
#...#...#.#...........#.#......
.#..#.......##.....##...#......
....####.#..#.#.#...........#..
.##...#..#..#.#....##.....#..##
...#......##....#...#.#.###....
##.#...........#.........#...#.
...........#...#...........##..
.....#....#...........#........
...#..#.........#...#....#.##..
.....##.........#...#........##
....#....#..#.#...#...##.#.....
...#.#..#...#...........#..#...
.....#.#.....#....#...#....#...
.#.............#..##..........#
..........#......#..##.....###.
..#....#........#.#.....##...#.
#..#......#.#.##......#.#.##...
.....#..#.........#...#.#.#.#.#
#.#...#.......#.#..##.##.....##
.....#......##......#.......#..
#.....#...##.#.#........#......
#..........#.#...#.......#.....
..#..#........#........#.......
...#....#....#..####.#....#...#
#.............#.....##....#..#.
##....#.....###..##....#......#
#.....#...#.#.............#....
.#.#..##..##.#..#....#.#.#...#.
.#...#..#.....#..#.#.#..#...##.
..#.#.#.#.#.#....##...#........
.......##.....#..........#...#.
...#..#...#...........#....#...
.....#..#....#..#.##...#.......
..##..#.......#.#..#....#......
...#...............#.#..#......
....#........#...#....#...#.#..
...#...#..........##....##.#...
..###.#.##.............#..#.#.#
##.......##.#..#.#.#.....#.#.#.
..#####...#......##...#........
...#.##...#................#..#
..#......#...#....#.#..##..#...
#.#.........#............#.....
##.............#.#.....#......#
....#.......#..#..##....#.#....
...#...##....#.........#..#....
...####.....#...........#....#.
#.#........##....#..#..#...#...
....#.#.###..........#........#
#.#......#.....#.##....#.#...#.
#....##.#..##..#.#.............
.#.....##..#..................#
...#.#........#...#.#........#.
..#....#......#.....##........#
....#...#....#...#.....#.##....
...#........#.......##.........
.#.##......#......#....##......
.#...#...###.#............#..#.
.#...........#.#.#....#...#..#.
.#.....#....#.....#...#........
.#..#.....#............#.#.##.#
...###.#.............#..##.....
...#.#.##.#..#..........#..#...
.#.#.#....#..#...............##
.......#.#..#...#.#.#........#.
....#.#...#..##....#........#.#
..........#...#.......#..#....#
...###.....#.#....#.....##.....
#......#..#..#........#.#...#..
#......#....#..#.#.............
...#....#........#...#..#......
...#..###........#.#.........##
#......#.#..###..#........###..
.#.#......#.#..#.#.#.#.....#..#
#....#.....#..##.....#.........
....#......#...#..#..#.#.##.#..
........#.#...#...#..#...#.#..#
.....##........#...#....#...#..
....#...##..#........#....##.#.
...............#.....#......##.
..##.....#.....#.#.............
.....#.#...........##.#.....#..
.#..##..#.##.#...##.#....#....#
.##.....#.##......#....#..#..#.
.......#.##......#....#...#.#..
.#........#......#...##.#....#.
.........#..........#.......###
#.#.........#..#..#....#...#...
.......#.........#......#.#.#..
.......#...........#....#....#.
.###...##.#.#..........#...#..#
....#.....#...#..#.............
.......##........#..#.......#..
....##..#.#....#....#..#...#..#
..#.####.....#.........#.#....#
..............#.#..#.....#...#.
.....#.............#..........#
..##.#...#.....#....#.#....##..
.#...#.......#..####..#..#...#.
#..........#................##.
......##.....#.................
..##...#.#..........##.#...#...
....#.#.#.#...##...#...#...####
.............##..#.###...#.....
#.#....#.#..#..##........#..##.
.....#.#...............#.......
...#..##......#..##...........#
#..#....#...........##..#......
.##....#.#....###.......#..#...
.....#..#.#....##...#......#...
.#.........#####......#...#...#
.......#.#.....#.....#.......#.
#....#.......###.......#..#....
#......##.###...#.......#......
.......#...#......#....#..#....
.#.####.......#...#.##.........
................##.#......#....
......##....#.#......#......#..
....##...##....#.........#.....
......#.#..............##.#...#
....#.#......#.#.............#.
.#.#..####...#................#
....#.#.#.#......##...##......#
.....#.#..#......#....#......#.
..........#.#.....#.......#...#
..##......##.#...##.#......#..#
...#............#..#...###.....
.#.#..###..#.......##...#.....#
.#....#.#.......#.....##....#..
#.............###...##.#.#...#.
#........#.#........#.#...#.#.#
##..#.................#....#...
...#.#...#..#.#..##....#...#...
#.....#.......#..............#.
.......###...##..#.....#.......
#.#.........#..#.#.........#...
.#.#............#.....##.....#.
........#....#....#.......#....
...#.#....#..#.##....#.#......#
.#.....#.#..#...........#.#.#..
#......#..#......##.#.#.#.#..#.
.......#.#..#......#.#.#..#.#.#
..........#...#..........#.##..
.#.#..####.......#..........#..
......#.#.....#..#..#..#.....#.
.....##..#.#.#..#..#...#.....##
............#.#....#.#....#....
..............#..#...#...#.....
.....#......#.......#.....#....
..##....#..#...........#..##...
###...#.##..#.#...####....###..
..#.#.....#.........#....#..###
##...........##.............#..
....##..............#.........#
...#...##....#.#..#...##.....#.
..#..##...#.......#..#..#.....#
...#...#....####........##.#...
....#........#..#.#.........#..
.#..........#...#..#.#.#......#
....#.#.....#.........#....#...
...#....#...##.......#...#.....
....#..#.......#.##.##.##...#..
##....##........#........##....
.#.#..#...........#.....#...#..
...#.##...##..#...#...##.......
.....#..###................#.#.
...#........##.#....##.....#.##
...#...#..##...#...#.#...#.....
.#......#...#..#.##.......#...#
.....#.......###.##...#........
#.....#..#........##.##.#.##..#
....#..............##.##...#...
#..........#..................#
..##.......#..........#..#..##.
.#....###.#..#.........###....#
.#....#.##..............#.##.##
.#.##.#....#.......#.#......#..
.#............#.#.....#........
..#......#.......#.............
#.#...#........##...#.#......#.
....#.........#........##..#...
..........##.....#.#......#....
.##.#..#....#.......#...#...##.
.#................#...#.##.....
....###.......#..#..#.........#
.#.....#..##...###......#.....#
.#.##..........#..#..#........#
.......#.##..............#...##
#...#.#.#.......#..#......#.##.
.#....#.#......#...#..........#
.....#........##....#.##.....#.
.#....................#..#.#.#.
.....#.........#....#.......#.#
.....#.#..##..#.....#..#.......
...#..#..#...#.....#....#....#.
#.....#.#.#..........#..#.#.#..
.....##..##.....#.#..#.........
#.#..##....##......##...#.##..#
..##..#.....#..#..........##...
......#.#...#..#.......##.....#
..#.#.......#.#......#.........
.....#........##..#.....####.#.
.#.....#........#.......#..##..
......#...#....#.##...#.......#
..##..................#..#.....
.....###.#..##...#.............
...##...##...#......#....#....#
#........#.#..........##..#....
#........#....#..........#...#.
...##.#.##..#...##......#......
#........##....#.#..##.....#..#
...####......#..#......#.#.....
.#......#...#...#.#.....##....#
.....###..##..#...#..........##
##.##....#...#.................
...##.#.......#.###......#..#..
.....#.#.#.......#.......#..#.#
#...#...#.##..#....###.......#.
.#.#..##.....#....#...##.......
.....#..........#....#...#.##..
..........#....#...#...........
.#....#..#...#...#.......#....#
#..#..............#.....####.##
.......#....###....#....#.#.#..
###.#........##.#.......#......
#..#...#..#......#.............
#...###..#...#..#..##.#.###.#..
..#..#...##......##............
.#..#.......#..###..##...#.....
....#..#..##.#.#.....##...#.#.#
....#....#.....#..#....#.......
..##..#....#.#...##..#.........
.....#....#...........#.#......
...#........#.#..#..#......#..#
.#...##....#....#.#.##......#.#
..#...........#..###.##.....#..
.#.######.#..##.......#..#.....
.....#..#......##.#.#...#......
....#....#..#.....#.......#.#.#
.....#........##.....#.....#.##
........#....#...#...#.#.#...#.
...#.#.....#...........#.....#.
#.#.#...###......#.....#.....#.
.#..........#.....#.......##...
#................#.#.....#.####
.#......#......#.#..##.#.##....
..........#....#...........###.
.##....#..####..#####..........
##.......##............#.....#.
...#.....#...#....#.......#....
.#....##......#.#...#....#.....
....#............##..........#.
.#....#....#.....#.#...........
.............##.#.##...#.#.#...
..#............#.#..##.#....##.
#.....#...##..........#.#.#...#
......#............#..........#
..##..#.....#........#.##..#..#
#..#.#..##.#.....##.#..........
#..#...#.#..#......##.......##.
.##......#...........##.....#..
...#.....#.....#..#....#.......
.....#...............#........#
.......#.....##..#..##..#.#.#..
#.#.....#..#..........##...#...
#..#......#.................#.#
.##...#....#...#...#.......#...
.#........##........#..........
........#..........#.........#.
.....#.##..#.......#........#..
..##..#..#...##..#.#....#......
......#........#.##.....#.#....
.#...#.#.........#..#.#.#.#..#.
.#..#.#...#............#.#..#..
....#.................#...#..##
.........##.....#.#.#......####
...............#....##.#.#.....
....##..#....#......#....#.....
....##.#...#....#.#..#...#..#..
..##......#.#..#........#.#.#..
.........#.#................##.
##.....#.....##..##.#........#.
###....#..#..#..#..#.##..##.#..
.....##..#...........##..#.#...
....#..#..#..#....#...#.#....#.
#....#............#..#....###..
....#..#.............#....##.#.
...#.................#...#.....
.##...#....#..#..#........#....
...#.#..#...#.#......#....#....
...#.......##..........#...#.#.
...##..#.......#........#...#..
.....#.#.#....#..##......##...#
....##......#........##....##..
..#..........#.#.##.....#......
..................#..#..#..###.
.#..............#.#..#.#..#.###
..#....#....#......#..##..#...#
#.........#..#..#...........#..
`
//seperates field by every new line (that is what '/n' means)
field = field.split("\n");
let totalBombs = 0;



//problem 1
//A general thinks to themselves, “I know I can send the robots single file and as long as I don’t run out of robots some will definitely make it” so first they decide that they will send them in a single file straight line, down the first column. How many robots would they need to make it to the fort?
//should go through every character in 'field'
//starts at the beginning, the length of field, goes up 1 by 1
//for(let i = 0; i < field.length; i++){
//    //seperates them by spaces in between the characters
//    let temp = field[i].split('');
//    
//    //if a character in a string is a #, then it is a bomb
//    if(temp[0] == '#'){
//        totalBombs++;
//    }
//
//    //total lines if you ever need it
//    if(temp[30] == '#'){
//        totalBombs++;
//    }
//}
//65 robots


//・‥…━━━━━━━☆☆━━━━━━━…‥・//


//problem 2
//what lets it move to the right
//let column = 0;
//Well they only have 60 robots so that isn’t going to work… they have another bright idea, their robots can jump! but only horizontally (I don’t know why, something about sky fences, you all played minecraft, you figure it out). So now they set the robots to jump down 1 row and right 3 rows and see how they do. How many robots would they need to make it to the fort?
/*
for(let i = 0; i < field.length; i++){
    //seperates them by spaces in between the characters
    let temp = field[i].split('');
    
    //makes it know when bombs are hit
    if(temp[column] == '#'){
        totalBombs++
    }

    //this makes it go forward by 3
    column += 3;
    //when it reaches 31(or more), it subracts by 31 to restart
    if(column >= 31){
        column -= 31;
    }
}
*/
//281 robots


//・‥…━━━━━━━☆☆━━━━━━━…‥・//


//problem 3
//That was awful. They are going to send them down 1 right 1 across the field to see if that is any better. How many robots would they need to get to the fort?
/*
for(let i = 0; i < field.length; i++){
    //seperates them by spaces in between the characters
    let temp = field[i].split('');
    
    //makes it know when bombs are hit
    if(temp[column] == '#'){
        totalBombs++
    }

    //this makes it go forward by 1
    column += 1;
    //when it reaches 31(or more), it subracts by 31 to restart
    if(column >= 31){
        column -= 31;
    }
}
*/
//78 robots


//・‥…━━━━━━━☆☆━━━━━━━…‥・//


//problem 4
//The general is done guessing and tells the king of robots that they need “ALL THE ROBOTS!!”. They get all 500 and wish the general luck. They are going to send them in a bunch of different directions all at once and hope some make it. How many robots will they need if they send them in the following directions? (add all of these together):
//ayo wet code check
let column1 = 0;
let column2 = 0;
let column3 = 0;
let column4 = 0;
let totalBombs2 = 0;
let totalBombs3 = 0;
let totalBombs4 = 0;
//go 1 right
for(let i = 0; i < field.length; i++){

    //seperates them by spaces in between the characters
    let temp = field[i].split('');
    
    //makes it know when bombs are hit
    if(temp[column1] == '#'){
        totalBombs++
    }

    //this makes it go forward
    column1 += 1;

    //when it reaches 31(or more), it subracts by 31 to restart
    if(column1 >= 31){
        column1 -= 31;
    }
}
//78 robots

//go 3 right
for(let i = 0; i < field.length; i++){
    //seperates them by spaces in between the characters
    let temp = field[i].split('');
    
    //makes it know when bombs are hit
    if(temp[column2] == '#'){
        totalBombs2++
    }

    //this makes it go forward
    column2 += 3;

    //when it reaches 31(or more), it subracts by 31 to restart
    if(column2 >= 31){
        column2 -= 31;
    }
}
//281 robots

//go 5 right
for(let i = 0; i < field.length; i++){
    //seperates them by spaces in between the characters
    let temp = field[i].split('');
    
    //makes it know when bombs are hit
    if(temp[column3] == '#'){
        totalBombs3++
    }

    //this makes it go forward
    column3 += 5;

    //when it reaches 31(or more), it subracts by 31 to restart
    if(column3 >= 31){
        column3 -= 31;
    }
}
//75 robots

//go 7 right
for(let i = 0; i < field.length; i++){
    //seperates them by spaces in between the characters
    let temp = field[i].split('');
    
    //makes it know when bombs are hit
    if(temp[column4] == '#'){
        totalBombs4++
    }

    //this makes it go forward
    column4 += 7;

    //when it reaches 31(or more), it subracts by 31 to restart
    if(column4 >= 31){
        column4 -= 31;
    }
}
//79 robots

//total should be 513 total robots

//・‥…━━━━━━━☆☆━━━━━━━…‥・//


//adds the total amount of bombs with 1 so we have enough bots to attack
let robotsNeeded = totalBombs + 1;
let robotsNeeded2 = totalBombs2 + 1;
let robotsNeeded3 = totalBombs3 + 1;
let robotsNeeded4 = totalBombs4 + 1;

let totalRobotsNeeded = (robotsNeeded + robotsNeeded2 + robotsNeeded3 + robotsNeeded4);
console.log(totalRobotsNeeded)