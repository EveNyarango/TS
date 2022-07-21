//Breakdown
// Input is a string
// Split to make it a List
// Check the negative element against the element of the List by looping through the list
// Note 1; If word is less than 3 don't count
// Note 2; Separation where there is a comma, fullstop,Space
// Main functionality; count number of word occurence divide total number of words paying attention to note 1 * 100
// Criteria:
// <= 5% POSITIVE
// 5 - 20% NEUTRAL
// >=20% NEGATIVE 
// List -> [bad, terrible, awful, stupid, mad, angry, sad]

let negativeWords = ['bad', 'terrible', 'awful', 'stupid', 'mad', 'angry', 'sad'];
let count = 0;

function negativeWordCount(sentence: string): number {
    let sent = sentence.toLowerCase().split(/[\s,.]+/)
    negativeWords.forEach(word => {
        sent.forEach(element => {
            if (word == element) count++
        });
    });

    return count;
}

function calculatePercentage(sentence: string): number {
    let sentenceSplit = sentence.split(" ")
    let sentenceCount = 0
    for (let i = 0; i < sentenceSplit.length; i++) {
        if (sentenceSplit[i].length >= 3) {
            sentenceCount++
        }
    }

    return negativeWordCount(sentence) / sentenceCount * 100
}

function checkPercentageCriteria(sentimentalPercentage: number): string {
    if (sentimentalPercentage <= 5) {
        return 'POSITIVE'
    } else if (sentimentalPercentage > 5 && sentimentalPercentage < 20) {
        return 'NEUTRAL'
    } else {
        return 'NEGATIVE'
    }
}

function sentimentalAnalysis(result: string): string {
    return checkPercentageCriteria(calculatePercentage(result))
}

console.log(sentimentalAnalysis('The world is a terrible place to live in'))



