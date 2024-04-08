from flask import Flask, render_template, request, send_from_directory
from main import main
from flask_debug import Debug

app = Flask(__name__)
Debug(app)

@app.route('/static/2010-2011.csv>')
def download_file(filename):
    return send_from_directory('static', filename)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        result = main()
        return render_template('index.html', result=result)

if __name__ == '__main__':
    app.run(debug=True)