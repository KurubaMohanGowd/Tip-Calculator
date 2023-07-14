function calculateAmount(){
    let billAmnt=document.getElementById("billAmount").value
    let percTip=document.getElementById("percentageTip").value
    let amountTip=document.getElementById("tipAmount")
    let amountTotal=document.getElementById("totalAmount")
    
    
    if (billAmnt===""){
        document.getElementById("errorMessage").textContent="Please Enter a Valid Input"
    }
    else if (percTip===""){
        document.getElementById("errorMessage").textContent="Please Enter a Valid Input"
    }
    else{
        let tipamnt=(billAmnt*(percTip/100))
    let total=parseInt(tipamnt)+parseInt(billAmnt)
    amountTip.value=tipamnt
    amountTotal.value=total
      document.getElementById("errorMessage").textContent=""
    
    }
      
        
    }