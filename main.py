#!/usr/bin/env python
# -*- coding:gbk
# import sys
# import os
# current_directory = os.path.dirname(os.path.abspath(__file__))
# root_path = os.path.abspath(os.path.dirname(current_directory) + os.path.sep + ".")
# sys.path.append(root_path)
from flask import Flask, render_template

app = Flask(__name__)
app.config['SECRET_KEY'] = '79537d00f4834892986f09a100aa1edf'

@app.route('/', methods = ['get', 'post'])
def peihe():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port =50018
    )

