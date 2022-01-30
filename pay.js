const accEl = document.getElementById('acc');
  const canEl = document.getElementById('can');

  const DebitAmount = document.getElementById('atbd');
  const ifscEl = document.getElementById('ifsc');
  const pcEl = document.getElementById('pc');
  const MobileNo = document.getElementById('mn');
  const btnEl = document.getElementById('but');
  const errorMsg = document.getElementById('error-msg');
  const mobileError = document.getElementById('mobile-error');
  const AvlBalance = document.getElementById('avlBal');
  const BalanceError = document.getElementById('balance-error');
  // Checking for account number is same or not 
  // if not then it will change the color of text
  canEl.addEventListener('change', (event) => {
    let accountNumber = acc.value;
    let confirmAccountNo = canEl.value;

    if (accountNumber == confirmAccountNo) {
      canEl.style.color = 'Green',
        (errorMsg).innerText = ""
    }
    else (
      canEl.style.color = 'Red',
      (errorMsg).innerText = "Please Enter Correct Account Number"
    )
  });

  // Checking mobile number's length
  MobileNo.addEventListener('change', (event) => {

    let numberLength = (MobileNo.value).length;
    if (numberLength === 10) {
      mobileError.innerText = "";


    }
    else (
      mobileError.innerText = "Number Should be 10 Digit"
    )

  });
  // Checking Aval Balance is Greather then payment Value or not ?
  DebitAmount.addEventListener('change', (event) => {

    let DebitBalance = DebitAmount.value;
    let AvlAmount = AvlBalance.value;
    console.log(DebitBalance)
    console.log(AvlAmount)
    if (DebitBalance < AvlAmount) {
      BalanceError.innerText = "Great !! You can make this Payment"

    }
    else (
      BalanceError.innerText = "Sorry !! You can't make this Payment")

  })