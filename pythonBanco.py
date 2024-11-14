import pyodbc
import base64
print(pyodbc.drivers())

cnxn = pyodbc.connect('DRIVER={SQL Server};SERVER=SERVIDORPROF\SQLEXPRESS;DATABASE=sesialimentacao;UID=tdpg;PWD=carbonofazquatroligacao')
print('Foi')

cursor = cnxn.cursor()

def selectPuro():
    resposta = cursor.execute(f"select * from usuarios where serie = '7AEF' ").fetchall()

    for resp in resposta:
        print(resp)

def insertDesperdicio(value,date):
    cursor.execute(f"insert into desperdicio values ({value}, '{date}')")
    cursor.commit()

def selectDesperdicio():
    resposta = cursor.execute(f"select * from desperdicio")

    for resp in resposta:
        print(resp)
 
def inserir_imagem(imagem_file, data_inicial, data_final):
    binario_imagem = imagem_file.read()

    print(data_final, data_inicial)
    
    cursor.execute(
        "INSERT INTO cardapio (imagem, data_inicial, data_final) VALUES (?, ?, ?)",
        (binario_imagem, data_inicial, data_final)
    )
    cnxn.commit()

def select_imagens():
    cursor.execute("SELECT imagem, data_inicial, data_final FROM cardapio")
    resultados = cursor.fetchall()
    
    # Codificando as imagens em base64
    imagens_base64 = []
    for imagem, data_inicial, data_final in resultados:
        # Codificar a imagem em base64
        imagem_base64 = base64.b64encode(imagem).decode('utf-8')
        imagens_base64.append((imagem_base64, data_inicial, data_final))
    
    return imagens_base64

def puxardata(data):
    print(data, 'ESTA VINDO A DATA')

    resultado = cursor.execute(
        "SELECT imagem FROM cardapio WHERE ? BETWEEN data_inicial AND data_final", 
        (data,)
    ).fetchone()

    imagem_base64 = base64.b64encode(resultado[0]).decode('utf-8')

        
    return imagem_base64
  
# def inserir_datas(data_inicial,data_final):
#     data_atual = data_inicial

#     while data_atual <= data_final:
#      response = cursor.execute(f'''insert into gerar_agenda (data,habilitar_cafe_manha,habilitar_almoco,habilitar_cafe_tarde) 
#      values ({data_atual}, 1,1,1)''')

#     print(response)


# def inserir_refeiçoes(data,id,cafe,almoco,tarde):
#     cursor.execute(f"insert into REFEICAO_AGENDADA(id_data,id_usuario,cafe_manha,almoco,cafe_tarde) values ({})")
    

                   
