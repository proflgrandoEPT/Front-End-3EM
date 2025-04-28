class Termometro:
    def __init__(self, temperatura=0):
        self.__temperatura_celsius = temperatura  # A temperatura inicial é em Celsius

    def set_temperatura_fahrenheit(self, temperatura_fahrenheit):
        self.__temperatura_celsius = (temperatura_fahrenheit - 32) * 5/9  # Converte para Celsius

    def get_temperatura_fahrenheit(self):
        return (self.__temperatura_celsius * 9/5) + 32  # Converte para Fahrenheit

    def get_temperatura_celsius(self):
        return self.__temperatura_celsius  # Retorna a temperatura em Celsius

# Uso da classe
termometro = Termometro()

# Definindo a temperatura em Fahrenheit
termometro.set_temperatura_fahrenheit(68)

print(termometro.get_temperatura_fahrenheit())  # Deve mostrar 68
print(termometro.get_temperatura_celsius())     # Deve mostrar 20 (aproximadamente)