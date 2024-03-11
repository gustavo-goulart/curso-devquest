let usuario = {
  nome: "Gustavo",
  idade: 41,
  hobby: "comer",
  corFavorita: "azul",
  saudacao: function () {
    console.log("Bem-vinde à guilda, " + this.nome + "!");
  },
  dizerCaracteristicas: function () {
    console.log(
      this.nome +
        " tem " +
        this.idade +
        " anos, gosta muito de " +
        this.hobby +
        " e sua cor favorita é " +
        this.corFavorita +
        "."
    );
  },
};

//chamar a função!!!
usuario.saudacao();
usuario.dizerCaracteristicas();
