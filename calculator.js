//array for equation. ex. [3, "+", 6]
let equation = [];

//functions to add/remove element in array
function equationAdd(ele)
{
    equation.push(ele);
    console.log(equation);
}

function equationremove()
{
    equation.pop();
    console.log(equation);
}

function equationClear()
{
    equation = [];
    console.log(equation);
}


//combines numbers
function startEquation()//call to start finding solution by merging numbers
{
    for(let i = 1; i < equation.length;i++)//iterates length of equation arr minus one so last element is checked
    {
        if(isFinite(equation[i-1]) && isFinite(equation[i]))//checks if equation[i] and the index before it are numbers
        {
            equation[i-1] = '' + equation[i-1] + equation[i];//combines equation[i] and the index beofore
            equation.splice[i];//removes element at index i
            //i--;//subtracts one from i so it doesnt skip a number
        }
        else
        {
            i++;
        }

    }
    console.log(equation);
}