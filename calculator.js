//array for equation. ex. [3, "+", 6]
let equation = [];

//functions to add/remove element in array
function equationAdd(ele)
{
    equation.push(ele);
}

function equationremove()
{
    equation.pop();
}

function equationClear()
{
    equation = [];
}


//combines numbers
function startEquation()//call to start finding solution by merging numbers
{
    for(let i = 1; i < equation.length; i++)//iterates length of equation arr
    {
        if(equation[i-1].isFinite() && equation[i].isFinite())//checks if equation[i] and the index beofore it are numbers
        {
            equation[i-1] = '' + equation[i-1] + equation[i];//combines equation[i] and the index beofore
            equation.splice[i, 1];//removes element at index i
            i--;//subtracts one from i so it doesnt skip a number
        }
    }
}