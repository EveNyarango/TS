export function isReallyNaN(val: any): boolean {
    // return isNaN(val);  // wasn't working as planned :-(
        if(isNaN(val) || val != null){
            return true
        }else{
            return false
        }

  };