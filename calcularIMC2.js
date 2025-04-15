function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
  }
  
  const pesoUsuario= 67;
  const alturaUsuario = 1.68;
  const imcUsuario = calcularIMC(pesoUsuario,alturaUsuario);
  console.log (imcUsuario.toFixed(2));

  if(imcUsuario < 18.5 ){
    console.log("indica un peso insuficiente");
  }else if(imcUsuario>= 18.5 && imcUsuario<= 24.9){
    console.log("indica un peso saludable.");
  }else if(imcUsuario>=25 && imcUsuario <= 29.9){
    console.log("indica sobrepeso");      
  }else if(imcUsuario>=30){
    console.log("indica obesidad");

  }
