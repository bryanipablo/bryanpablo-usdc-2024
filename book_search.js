/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and
     * return the appropriate object here. */

    var result = {
        "SearchTerm": searchTerm,
        "Results": []
    };

    scannedTextObj.forEach(book => {
        const content = book.Content;

        content.forEach(item => {
            const currentText = item.Text;

            if (currentText.includes(searchTerm)) {
                result["Results"].push({
                    "ISBN": book.ISBN,
                    "Page": item.Page,
                    "Line": item.Line
                });
            }
        });
    });

    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]

/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/** Test 3 */
const positiveOutputExpected = {
    "SearchTerm": "momentum",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}

/** Test 4 */
const negativeOutputExpected = {
    "SearchTerm": "nonexistent",
    "Results": []
}

/** Test 5 */
const caseSensitiveOutputExpected = {
    "SearchTerm": "The",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}

/** Test 6 */
const longOutputExpected = {
    "SearchTerm": "profound; and however good the Canadian\'s",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/** Given a known input, we check if we get a known output. */
const test3result = findSearchTermInBooks("momentum", twentyLeaguesIn);
if (JSON.stringify(positiveOutputExpected) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", positiveOutputExpected);
    console.log("Received:", test3result);
}

/** Given a known nonexistent input, we check if we get an empty output, meaning no matches. */
const test4result = findSearchTermInBooks("nonexistent", twentyLeaguesIn);
if (JSON.stringify(negativeOutputExpected) === JSON.stringify(test4result)) {
    console.log("PASS: Test 4");
}
else {
    console.log("FAIL: Test 4");
    console.log("Expected:", negativeOutputExpected);
    console.log("Received:", test4result);
}

/** Given a case-sensitive input, we check if we received the known output. */
const test5result = findSearchTermInBooks("The", twentyLeaguesIn);
if (JSON.stringify(caseSensitiveOutputExpected) === JSON.stringify(test5result)) {
    console.log("PASS: Test 5");
}
else {
    console.log("FAIL: Test 5");
    console.log("Expected:", caseSensitiveOutputExpected);
    console.log("Received:", test5result);
}

/** Given a long input, we check if we received the known output. */
const test6result = findSearchTermInBooks("profound; and however good the Canadian\'s", twentyLeaguesIn);
if (JSON.stringify(longOutputExpected) === JSON.stringify(test6result)) {
    console.log("PASS: Test 6");
}
else {
    console.log("FAIL: Test 6");
    console.log("Expected:", longOutputExpected);
    console.log("Received:", test6result);
}

