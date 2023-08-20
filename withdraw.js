document.getElementById('btnWithdraw').addEventListener('click',function(){
    // step 2 
    const userWithdraw = document.getElementById('userWithdraw');
    const newWithdrawString =userWithdraw.value;
    const newWithdraw = parseFloat(newWithdrawString);
    // console.log(newWithdraw);
    
    
    // step 7 clear the withdraw field
    userWithdraw.value='';
    
    if(isNaN(newWithdraw)){
        alert('Please Provide A Valid Number !');
        return
    }
    

    const withdrawTotal0 = document.getElementById('withdrawField');
    const withdrawTotalString = withdrawTotal0.innerText;
    const withdrawTotal = parseFloat(withdrawTotalString);
    

    



    // step 5
    const balenciagaW=document.getElementById('balenciaga');
    const balenciagaWString = balenciagaW.innerText;
    const balenciagaWTotal = parseFloat(balenciagaWString);

    

    if(newWithdraw > balenciagaWTotal){
        alert('Negative Balance not Allowed !!')
        return
    }
    // step 4
    const withdrawCurrent = withdrawTotal+newWithdraw;    
    withdrawTotal0.innerText = withdrawCurrent;


    // step 6
    const newBalanceTotal = balenciagaWTotal - newWithdraw;
    balenciagaW.innerText=newBalanceTotal;

    
    


})