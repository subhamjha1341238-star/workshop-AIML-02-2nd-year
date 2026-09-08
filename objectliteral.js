let F = "First";
let L = "Last";
let data = {
    [F]: "Shubham",
    [L]: "Jha"
}
show()
{
 console.log(this.First);
    console.log(this.Last);   
}
console.log(data.show())