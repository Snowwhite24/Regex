# Description of code

## Regex for Mastercard

the regular expression looks for:

1. the beginning of the line of data: ^
2. must start with number ranging from 51-55: [51-55]
3. must be followed by two numeric characters: \d{2}[2-6]
4. followed by a space or dash: [ -]
5. followed by two digits between 2-6: (\d{2}[2-6]
6. followed by two digits: \d{2}
7. followed by a space or dash: [ -]
8. followed by four digits: (\d{4})
9. followed by a space or dash: [ -]
10. followed by four digits: (\d{4})
11. followed by the end of code: $

## Regex for Visa

the regular expression looks for:

1. the beginning of the line of data: ^
2. must start with a number 4:
3. must be followed by three numeric characters: \d{3}[2-6]
4. followed by a space or dash: [ -]
5. followed by two digits between 2-6: \d{2}[2-6]
6. followed by two digits: \d{2}
7. followed by a space or dash: [ -]
8. followed by four digits: (\d{4})
9. followed by a space or dash: [ -]
10. followed by four digits: (\d{4})
11. followed by the end of code: $

## output

Then a functon was written using a if else statement so that we can console.log the final output.
