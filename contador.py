class Contador:
    def __init__(self):
        self.__valor = 0  # Inicializa o contador com valor 0

    def incrementar(self):
        self.__valor += 1  # Aumenta o valor de __valor em 1

    def decrementar(self):
        self.__valor -= 1  # Diminui o valor de __valor em 1

    def get_valor(self):
        return self.__valor  # Retorna o valor atual de __valor

# Uso da classe
contador = Contador()
contador.incrementar()  # Incrementa o valor
contador.incrementar()  # Incrementa novamente

print(contador.get_valor())  # Deve mostrar 2

contador.decrementar()  # Decrementa o valor

print(contador.get_valor())  # Deve mostrar 1
