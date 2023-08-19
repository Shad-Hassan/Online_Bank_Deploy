document.getElementById('btnWithdraw').addEventListener('click',function(){
    const userWithdraw = document.getElementById('userWithdraw');
    const newWithdrawString =userWithdraw.value;
    const newWithdraw = parseFloat(newWithdrawString);
    

    const withdrawTotal0 = document.getElementById('withdrawField');
    const withdrawTotalString = withdrawTotal0.innerText;
    const withdrawTotal = parseFloat(withdrawTotalString);
    

    // step 4
    const withdrawCurrent = withdrawTotal+newWithdraw;


    
    withdrawTotal0.innerText = withdrawCurrent;



    // step 5
    const balenciagaW=document.getElementById('balenciaga');
    const balenciagaWString = balenciagaW.innerText;
    const balenciagaWTotal = parseFloat(balenciagaWString);


    // step 6
    const newBalanceTotal = balenciagaWTotal - newWithdraw;
    balenciagaW.innerText=newBalanceTotal;

    
    // step 7 clear the withdraw field
    userWithdraw.value='';


})