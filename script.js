const investmentInput = document.getElementById("investmentInput");
const listPriceInput = document.getElementById("listPriceInput");
const calcButton = document.querySelector("button");

const mortgageOwed = 68961;
const agentPercentage = 0.05;
const escrowPercentage = 0.01;
const probatePercentage = 0.02;
const loanInterest = 0.1;

function calculateFees(listPrice) {
    const agentFee = Number((agentPercentage * listPrice).toFixed(2));
    const escrowFee = Number((escrowPercentage * listPrice).toFixed(2));
    const probateFee = Number((probatePercentage * listPrice).toFixed(2));
    const loanFee = Number((loanInterest * investmentInput.value).toFixed(2));
    const totalFees = agentFee + escrowFee + probateFee + loanFee;
    return { totalFees, agentFee, escrowFee, probateFee, loanFee };
}

function calculateValues() {
    const { totalFees } = calculateFees(listPriceInput.value);

    const minusMortgageOwed = listPriceInput.value - mortgageOwed;
    const totalProfit = Number(
        (minusMortgageOwed - totalFees - investmentInput.value).toFixed(2)
    );
    const splitFiveWays = (totalProfit / 5).toFixed(2);
    const grandkidsSplit = (splitFiveWays / 4).toFixed(2);
    const withoutInvestment =
        425000 - mortgageOwed - calculateFees(425000).totalFees;

    return {
        minusMortgageOwed,
        totalProfit,
        splitFiveWays,
        grandkidsSplit,
        withoutInvestment,
    };
}

function updateDisplays(fees, values) {
    const remainingValueDisplay = document.getElementById("remainingValue");
    const agentFeeDisplay = document.getElementById("agentFee");
    const escrowFeeDisplay = document.getElementById("escrowFee");
    const probateFeeDisplay = document.getElementById("probateFee");
    const loanFeeDisplay = document.getElementById("loanFee");
    const totalFeesDisplay = document.getElementById("totalFees");
    const totalProfitDisplay = document.getElementById("totalProfit");
    const splitFiveWaysDisplay = document.getElementById("splitFiveWays");
    const grandkidsSplitDisplay = document.getElementById("grandkidsSplit");
    const amountProfitWithoutInvestment = document.getElementById(
        "amountProfitWithoutInvestment"
    );
    const theDifferenceDisplay = document.getElementById("theDifference");

    remainingValueDisplay.textContent = `$${values.minusMortgageOwed}`;
    agentFeeDisplay.textContent = `$${fees.agentFee}`;
    escrowFeeDisplay.textContent = `$${fees.escrowFee}`;
    probateFeeDisplay.textContent = `$${fees.probateFee}`;
    loanFeeDisplay.textContent = `$${fees.loanFee}`;
    totalFeesDisplay.textContent = `$${fees.totalFees}`;
    totalProfitDisplay.textContent = `$${values.totalProfit}`;
    splitFiveWaysDisplay.textContent = `$${values.splitFiveWays}`;
    grandkidsSplitDisplay.textContent = `$${values.grandkidsSplit}`;
    amountProfitWithoutInvestment.textContent = `$${values.withoutInvestment}`;
    theDifferenceDisplay.textContent = `$${(
        values.totalProfit - values.withoutInvestment
    ).toFixed(2)}`;
}

calcButton.addEventListener("click", () => {
    const fees = calculateFees(listPriceInput.value);
    const values = calculateValues();
    updateDisplays(fees, values);

    investmentInput.addEventListener("input", (e) => {
        const fees = calculateFees(listPriceInput.value);
        console.log("fees", fees);
        const values = calculateValues();
        updateDisplays(fees, values);
    });

    listPriceInput.addEventListener("input", (e) => {
        const fees = calculateFees(listPriceInput.value);
        console.log("fees", fees);
        const values = calculateValues();
        updateDisplays(fees, values);
    });
});

function calculateFeesTest(listPrice) {
    const agentFee = agentPercentage * listPrice;
    const escrowFee = escrowPercentage * listPrice;
    const probateFee = probatePercentage * listPrice;
    const loanFee = loanInterest * 50000;
    const totalFees = agentFee + escrowFee + probateFee + loanFee;
    return { totalFees, agentFee, escrowFee, probateFee, loanFee };
}

function calculateValuesTest() {
    const { totalFees } = calculateFees(500000);

    const minusMortgageOwed = 500000 - mortgageOwed;
    const totalProfit = minusMortgageOwed - totalFees - 50000;
    const splitFiveWays = totalProfit / 5;
    const grandkidsSplit = splitFiveWays / 4;
    const withoutInvestment =
        425000 - mortgageOwed - calculateFees(425000).totalFees;

    return {
        minusMortgageOwed,
        totalProfit,
        splitFiveWays,
        grandkidsSplit,
        withoutInvestment,
    };
}

function testForStyling() {
    const fees = calculateFeesTest(500000);
    const values = calculateValuesTest();
    updateDisplays(fees, values);
}

// testForStyling();
