function prefix(str:string,search:string):any{
    var data = str.split(' ');
    for(var words=0;words<data.length;words++)
    {
        if(data[words].startsWith(search))
        {
            return [words];
        }
    }
    return -1;
    
}
console.log(prefix('i am foodie and we are foodies','food'))

// input: i am foodie
// search:food