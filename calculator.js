//array for equation. ex. [3, "+", 6]
let equation = [];

//functions to add/remove element in array
function equationAdd(ele)
{
    equation.push(ele);
    console.log(equation);
    updateText()
}

function equationremove()
{
    equation.pop();
    console.log(equation);
    updateText()
}

function equationClear()
{
    equation = [];
    console.log(equation);
    updateText()
}

function updateText()
{
    let output = "";
for(let i = 0; i < equation.length; i++)
{
    output += equation[i].toString()
}
document.getElementById("output").innerHTML = output;
}

//combines numbers
function startEquation()//merge numbers and turn them back into numbers, not strings
{
    for(let i = 1; i < equation.length + 1;i++)//iterates length of equation arr minus one so last element is checked
    {
        if(isFinite(equation[i-1]) && isFinite(equation[i]) || equation[i-1] == "." || equation[i] == "." )//checks if equation[i] and the index before it are numbers
        {
            equation[i-1] = '' + equation[i-1] + equation[i];//combines equation[i] and the index beofore
            equation.splice(i, 1);//removes element at index i
            i--;//subtracts one from i so it doesnt skip a number
        }

    }

    //iterates through array to turn numbers into floats using parsefloat
    for(let j = 0; j < equation.length; j++)
    {
        if(isFinite(parseFloat(equation[j])))//checks if the item at index j is a number
        {
            equation[j] = parseFloat(equation[j]);//turn item at index j into float if it is finite
        }
    }
    console.log(equation);
}