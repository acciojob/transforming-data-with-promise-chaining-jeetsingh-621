//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function () {
            let inputValue = document.getElementById("ip").value;
            let outputDiv = document.getElementById("output");

            if (!inputValue) {
                outputDiv.textContent = "Please enter a number.";
                return;
            }

            let num = parseFloat(inputValue);
            outputDiv.textContent = ""; // Clear previous results

            // Step 1: Initial Promise (2s delay)
            new Promise((resolve) => {
                setTimeout(() => {
                    outputDiv.textContent = `Result: ${num}`;
                    resolve(num);
                }, 2000);
            })
            // Step 2: Multiply by 2 (2s delay)
            .then((num) => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        num *= 2;
                        outputDiv.textContent = `Result: ${num}`;
                        resolve(num);
                    }, 2000);
                });
            })
            // Step 3: Subtract 3 (1s delay)
            .then((num) => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        num -= 3;
                        outputDiv.textContent = `Result: ${num}`;
                        resolve(num);
                    }, 1000);
                });
            })
            // Step 4: Divide by 2 (1s delay)
            .then((num) => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        num /= 2;
                        outputDiv.textContent = `Result: ${num}`;
                        resolve(num);
                    }, 1000);
                });
            })
            // Step 5: Add 10 (1s delay)
            .then((num) => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        num += 10;
                        outputDiv.textContent = `Final Result: ${num}`;
                        resolve(num);
                    }, 1000);
                });
            });
        });
