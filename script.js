const investmentInput = document.getElementById("investmentInput");
const listPriceInput = document.getElementById("listPriceInput");
const calcButton = document.querySelector("button");

const mortgageOwed = 68961;
const agentPercentage = 0.05;
const escrowPercentage = 0.01;
const probatePercentage = 0.02;
const loanInterest = 0.1;

function calculateFees(listPrice) {
	const agentFee = agentPercentage * listPrice;
	const escrowFee = escrowPercentage * listPrice;
	const probateFee = probatePercentage * listPrice;
	const loanFee = loanInterest * investmentInput.value;
	const totalFees = agentFee + escrowFee + probateFee + loanFee;
	return { totalFees, agentFee, escrowFee, probateFee, loanFee };
}

function calculateValues() {
	const { totalFees } = calculateFees(listPriceInput.value);

	const minusMortgageOwed = listPriceInput.value - mortgageOwed;
	const totalProfit = minusMortgageOwed - totalFees - investmentInput.value;
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

	remainingValueDisplay.textContent = `Remaining Value: $${values.minusMortgageOwed}`;
	agentFeeDisplay.textContent = `5% Agent Fee: $${fees.agentFee}`;
	escrowFeeDisplay.textContent = `1% Escrow Fee: $${fees.escrowFee}`;
	probateFeeDisplay.textContent = `2% Probate Fee: $${fees.probateFee}`;
	loanFeeDisplay.textContent = `10% Loan Fee: $${fees.loanFee}`;
	totalFeesDisplay.textContent = `Total Fees: $${fees.totalFees}`;
	totalProfitDisplay.textContent = `Total Profit: $${values.totalProfit}`;
	splitFiveWaysDisplay.textContent = `Split 5 Ways: $${values.splitFiveWays}`;
	grandkidsSplitDisplay.textContent = `Grandkids Split: $${values.grandkidsSplit}`;
	amountProfitWithoutInvestment.textContent = `Amount of Profit Without Investment: $${values.withoutInvestment}`;
	theDifferenceDisplay.textContent = `The Difference: $${
		values.totalProfit - values.withoutInvestment
	}`;
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

// calcButton.addEventListener("click", () => {
// 	const listPriceValue = listPriceInput.value;
// 	const minusMortgageOwed = listPriceValue - mortgageOwed;
// 	document.getElementById(
// 		"remainingValue"
// 	).textContent = `Remaining Value: $${minusMortgageOwed}`;

// 	const fees1 = calculateFees(listPriceValue);
// 	const { totalFees: totalFeesNoInvestment } = calculateFees(425000);

// 	document.getElementById(
// 		"agentFee"
// 	).textContent = `5% Agent Fee: $${fees1.agentFee}`;

// 	document.getElementById(
// 		"escrowFee"
// 	).textContent = `1% Escrow Fee: $${fees1.escrowFee}`;

// 	document.getElementById(
// 		"probateFee"
// 	).textContent = `2% Probate Fee: $${fees1.probateFee}`;

// 	document.getElementById(
// 		"loanFee"
// 	).textContent = `10% Loan Fee: $${fees1.loanFee}`;

// 	document.getElementById(
// 		"totalFees"
// 	).textContent = `Total Fees: $${fees1.totalFees}`;

// 	const totalProfit =
// 		minusMortgageOwed - fees1.totalFees - investmentInput.value;
// 	totalProfitDisplay.textContent = `Total Profit: $${totalProfit}`;

// 	const splitFiveWays = totalProfit / 5;

// 	document.getElementById(
// 		"splitFiveWays"
// 	).textContent = `Split 5 ways: $${splitFiveWays}`;

// 	const grandkidsSplit = splitFiveWays / 4;

// 	document.getElementById(
// 		"grandkidsSplit"
// 	).textContent = `Grandkids Split: $${grandkidsSplit}`;

// 	const withoutInvestment = 425000 - mortgageOwed - totalFeesNoInvestment;

// 	document.getElementById(
// 		"amountProfitWithoutInvestment"
// 	).textContent = `Amount of Profit Without Investment: $${withoutInvestment}`;

// 	document.getElementById("theDifference").textContent = `Difference: $${
// 		totalProfit - withoutInvestment
// 	}`;
// });
