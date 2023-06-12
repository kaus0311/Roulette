from getRandomNumber import obtainRandomNumber
from datetime import datetime

def getRouletteWheelNumber():
    randomNumber = str((obtainRandomNumber()))
    newNumber = ""
    i = len(randomNumber) - 1
    while i >= 0:
        currentTimeStamp = str(datetime.now().timestamp())
        j = len(currentTimeStamp) - 1
        while j >= 0 and i >= 0:
            newChar = int(randomNumber[i]) + int(currentTimeStamp[j])
            if newChar > 9:
                newChar = str(newChar)[0]
            newNumber += newChar
            j -= 1
            i -= 1
        i -= 1
    newNumber = int(newNumber)
    numbers = ['0', '28', '9', '26', '30', '11', '7', '20', '32', '17', '5', '22', '34', '15', '3', '24', '36', '13', '1', '00', '27', '10', '25', '29', '12', '8', '19', '31', '18', '6', '21', '33', '16', '4', '23', '35', '14', '2']
    index = newNumber % len(numbers)
    return numbers[index]
