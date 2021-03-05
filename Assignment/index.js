const express = require('express');
const port = 8000;

const app = express();
app.use(express.json())

app.post("/find_symbols_in_names",function(req,res){
    var chem = req.body.chemicals;
    var sym = req.body.symbols;
    var result=[];
    for(var i =0;i<chem.length;i++){
        for(var j =0;j<sym.length;j++){
            var sym_start = sym[j][0];
            var sym_end = sym[j][sym[j].length-1];
            
            var dstr="";
            for(var k=0;k<chem[i].length;k++){
                if(sym_start==chem[i][k]){
                    p=0;
                    str1 ="[";
                    str2 ="";
                    var there =true;
                    while(p<sym[j].length && p+k<chem[i].length){
                        if(sym[j][p]==chem[i][p+k]){
                            str1+=chem[i][p+k];
                            str2+=sym[j][p];
                        }
                        else{
                            there=false;
                        }
                        p++;
                    }
                    if(there){
                        str1+="]";
                        if(str2 == sym[j]){
                            dstr+=str1;
                        }
                        if(p+k<chem[i].length)
                            k=p+k;
                        else
                            break;
                    }
                }
                dstr+=chem[i][k];
            }
            if(dstr!=chem[i]){
                result.push(dstr);
            }
    
        }
    }
    
    // console.log(chem,sym,result);
    var final_res = "";
    for(var p=0;p<result.length;p++){
        if(p==result.length-1)
            final_res+=result[p];
        else
            final_res+=result[p]+", "; 
    }
    const to_be_sent = {
        "result" : final_res
    }
    res.send(to_be_sent);
});


app.listen(port,function(err){
    if(err){ console.log("Error in running server",err);}
    console.log("Server is running");
});

