class Lampada:
    def __init__(self):
        self.estado = False # Começa desligada
    def alterar_estado(self):
        self.estado = not self.estado  # Inverte o estado
        if self.estado:
            return "Lâmpada ligada"
        else:
            return "Lâmpada desligada"

# Uso da classe

lampada = Lampada()

print(lampada.alterar_estado()) # Liga a lâmpada

print(lampada.alterar_estado()) # Desliga a lâmpada