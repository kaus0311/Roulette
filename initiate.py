from getRandomNumber import deploy_vrf
from roullete import getRouletteWheelNumber

deploy_vrf()

import json

from flask import Flask, request
app = Flask(__name__)

@app.route('/getRoulette', methods=['GET'])
def getRoulleteNumber():
        return getRouletteWheelNumber()

if __name__ == '__main__':
    app.run(host = "127.0.0.1", port = 7000)
