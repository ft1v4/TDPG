import pythonBanco
from flask import Flask, render_template, redirect, url_for, request, send_from_directory
app = Flask(__name__)


@app.route('/')
def home():
    return render_template('login.html')

@app.route('/home')
def RHome():
    return render_template('home.html')

@app.route('/refeicaoAgendada', methods=['POST'])
def refeicaoAgendada(json):
    print(json)
    return render_template('home.html')

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
            #inserir os dados da smn entre a dataInicial e dataFinal
            # pythonBanco.inserir_datas(data_inicial,data_final)

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

@app.route('/agenda', methods=['POST', 'GET'])
def mostrar_agenda():
    if request.method == 'POST':
      print('Gerou a agenda com sucesso')
      data = request.form['data']
      imagens_base64 = pythonBanco.puxardata(data)
      return render_template('mariane.html', imagens_base64 = imagens_base64)
    return render_template('mariane.html')


@app.route('/cardapio', methods=['POST', 'GET'])
def mostrar_cardapio():
    if request.method == 'POST':
      print('Gerou a agenda com sucesso')
      data = request.form['data']
      imagens_base64 = pythonBanco.puxardata(data)
      return render_template('home.html', imagens_base64 = imagens_base64)
    return render_template('home.html')


@app.route('/gerar-agenda',methods=['POST','GET'])
def gerarAgenda():
    print(request.method)
    if request.method == 'POST':
        data = request.form['data']
        cafeManha = request.form['cafeM']
        almoco = request.form['almoco']
        cafeTarde = request.form['cafeT']
        print('Data', data, 'Cafe da Manha' , cafeManha, 'Almoco', almoco,  'Cafe da Tarde' , cafeTarde)
        return render_template('gerarAgenda.html')
       
    return render_template('gerarAgenda.html')

@app.route('/funcionario')
def funcionario():
    return render_template('funcionario.html')
   
@app.route('/desperdicioAluno')
def desperdicioAluno():
    return render_template('pagDespAluno.html')


        


app.run(debug=True)



    


        
