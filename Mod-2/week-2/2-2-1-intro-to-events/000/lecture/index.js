// Event Handling ------------------------------
const eventHandler = () => {
}

const clickButton = document.querySelector("#click-button");

const mouseDiv = document.querySelector("#mouse-div");



// Event Propagation -------------------------------
const outer = document.querySelector("#outer");
const middle = document.querySelector("#middle");
const inner = document.querySelector("#inner");

const testPropagation = (event) => {
  console.log(`Where event is: #${event.currentTarget.id}, from a click on #${event.target.id}`);
}

// Bubbling: default, and what you want 99% of the time




// Event Delegation ---------------------------------
const handleDelegation = (event) => {
}

const container = document.querySelector("#delegation");


// Remove event listener --------------------------------
const removeDelegation = () => {
}

const removeDelegationButton = document.querySelector("#remove");
removeDelegationButton.addEventListener('click', removeDelegation);