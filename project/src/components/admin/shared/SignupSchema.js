import * as YUP from 'yup';

let SignupSchema = YUP.object({
  name : YUP.string().required("Insert Your Full Name"),
  

  dob : YUP.string().typeError("valid dob").test("checkMinor", "age should be above 18", (value)=>{
    
          
    let arr = value.split("-");
    console.log(arr)
    let yr = arr[0];
    let mo = arr[1];
    let da = arr[2];
    console.log(da)
    console.log(mo)
    var d = new Date();
    console.log(d)
    
    let da1 = d.getDate()
    
    let mo1 = d.getMonth();
    let yr1 = d.getFullYear();
    
    console.log(yr1)
     console.log(da1)
     console.log(mo1)
     let yrr = yr1 - yr 
     console.log("yrr",yrr)
     
     
     if (yrr>= 18) {
        
        return true;
        }
        
    else{
        return false;
    }
        
            
  })

.required("Insert DOB"),
  
});

export default SignupSchema;




        






    