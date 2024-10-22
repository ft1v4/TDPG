import pythonBanco
from flask import Flask, render_template, redirect, url_for, request, send_from_directory
app = Flask(__name__)


@app.route('/')
def home():
    return render_template('insert.html')


@app.route('/teste')
def teste():
    return render_template('teste.html')


@app.route('/upload', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':

        imagem_file = request.files['imagem']
        data_inicial = request.form['data_inicial']
        data_final = request.form['data_final']

        print(imagem_file)

        if imagem_file:

            pythonBanco.inserir_imagem(imagem_file, data_inicial, data_final)
            return redirect(url_for('teste'))
        else:
            print("Nenhum arquivo de imagem enviado.")

    return render_template('teste.html')


@app.route('/imagens')
def mostrar_imagens():
    imagens = pythonBanco.select_imagens()
    return render_template('imagens.html', imagens=imagens)


@app.route('/desperdicio', methods=['POST', 'GET'])
def desperdicio():
    if request.method == 'POST':
        value = request.form['value']
        data = request.form['data']
        print('value', value, "data", data)
        pythonBanco.insertDesperdicio(value, data)
        return render_template('insert.html')

    return render_template('insert.html')


@app.route('/cardapio')
def cardapio():
    return render_template('mariane.html')

@app.route('/agenda', methods=['POST', 'GET'])
def mostrar_agenda():
    if request.method == 'POST':
        print('Gerou a agenda com sucesso')
        data = request.form['data']
        pythonBanco.puxardata(data)
        return render_template('mariane.html')
    return render_template('mariane.html')


app.run(debug=True)



    


        
