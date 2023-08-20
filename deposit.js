document.getElementById('btnDeposit').addEventListener('click',function(){
    const depositField0 = document.getElementById('depositField');
    // fetching field
    const depositFieldString=depositField0.value
    const depositField=parseFloat(depositFieldString);
    // step 7 clear the deposit field
    depositField0.value=''

    if(isNaN(depositField)){
        alert('Please Provide A Valid Number !');
        return
    }
    if(depositField<0){
        alert('Deposit Amount Can Not Be A Negative Number ! Provide Positive Integers Only');
        return
    }


    const depositTotal0 =  document.getElementById('depositTotal');
    // updated field
    const depositTotalString =  document.getElementById('depositTotal').innerText;
    const depositTotal = parseFloat(depositTotalString);

    const currentDepositTotal=depositTotal+depositField;
    

    depositTotal0.innerText=currentDepositTotal;
    


    //Step 5 - Get the current balance 
    const balenciaga=document.getElementById('balenciaga');
    const balenciagaString = balenciaga.innerText;
    const balenciagaDollar = parseFloat(balenciagaString);

    // Step 6 - Get the total Balance
    const balenciagaCurrent = balenciagaDollar + depositField; 
    balenciaga.innerText=balenciagaCurrent;


    
    

    
})

    
    