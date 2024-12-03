import pythonBanco
from flask import Flask, render_template, redirect, url_for, request, send_from_directory , jsonify 
app = Flask(__name__)


@app.route('/')
def home():
    return render_template('login.html')

# Rotas user
@app.route('/home')
def RHome():
    return render_template('user/home.html')

@app.route('/refeicaoAgendada', methods=['POST'])
def refeicaoAgendada():
    dados = request.get_json()
    id = dados.get('id_usuario')
    
   
    refeicoes = dados.get('refeicoes', [])
    
 
    refeicoes_separadas = []
    for refeicao in refeicoes:
        data = refeicao.get('data')
        cafe = refeicao.get('cafe_manha')
        almoco = refeicao.get('almoco')
        tarde = refeicao.get('cafe_tarde')
        
        refeicoes_separadas.append({
            'data': data,
            'cafeManha': cafe,
            'almoco': almoco,
            'cafeTarde': tarde
        })

        pythonBanco.inserir_refeiçoes(data,id,cafe,almoco,tarde)
    
    print(refeicoes_separadas)
    print(dados)
    
    
    return render_template('user/home.html')

@app.route('/desperdicioAluno')
def desperdicioAluno():
    return render_template('user/pagDespAluno.html')

@app.route('/adicionarCardapio')
def adicionar_cardapio():
    return render_template('adm/adicionarCardapio.html')

@app.route('/upload', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':

        imagem_file = request.files['imagem']
        data_inicial = request.form['data_inicial']
        data_final = request.form['data_final']

        print(imagem_file)

        if imagem_file:

            # pythonBanco.inserir_imagem(imagem_file, data_inicial, data_final)

            return render_template('adm/adicionarCardapio.html')
        else:
            print("Nenhum arquivo de imagem enviado.")

    return render_template('adm/adicionarCardapio.html')

@app.route('/desperdicio', methods=['POST', 'GET'])
def desperdicio():
    if request.method == 'POST':
        value = request.form['value']
        data = request.form['data']
        print('value', value, "data", data)
        pythonBanco.insertDesperdicio(value, data)
        return render_template('adm/desperdicio.html')

    return render_template('adm/desperdicio.html')

@app.route('/agenda', methods=['POST', 'GET'])
def mostrar_agenda():
    if request.method == 'POST':
      print('Gerou a agenda com sucesso')
      data = request.form['data']
      imagens_base64 = pythonBanco.puxardata(data)
      return render_template('adm/agenda.html', imagens_base64 = imagens_base64)
    return render_template('adm/agenda.html')

@app.route('/cardapio', methods=['POST', 'GET'])
def mostrar_cardapio():
    if request.method == 'POST':
      print('Gerou a agenda com sucesso')
      data = request.form['data']
      imagens_base64 = pythonBanco.puxardata(data)
      return render_template('user/home.html', imagens_base64 = imagens_base64)
      
    return render_template('user/home.html')

@app.route('/gerar-agenda',methods=['POST','GET'])
def gerarAgenda():
    if request.method == 'POST':
        data = request.form['data']
        cafeManha = request.form['cafeM']
        almoco = request.form['almoco']
        cafeTarde = request.form['cafeT']
        print('Data', data, 'Cafe da Manha' , cafeManha, 'Almoco', almoco,  'Cafe da Tarde' , cafeTarde)
        pythonBanco.inserir_alteracao_cardapio(data,cafeManha,almoco,cafeTarde)
        return render_template('gerarAgenda.html')
       
    return render_template('gerarAgenda.html')

@app.route('/adm')
def adm():
    return render_template('adm/adm.html')
   

app.run(debug=True)



    


        
