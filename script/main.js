//Definindo a data final
const countDownDate = new Date("25, Jul 2022 16:00:00").getTime();

//Fazer a função do timer atualizar a cada segundo
let myfunc = setInterval(function () {
  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  // Calculando os dias, horas, minutos, e segundos restantes
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  // Resultado do output
  document.getElementById("days").innerHTML = days + "d ";
  document.getElementById("hours").innerHTML = hours + "h ";
  document.getElementById("mins").innerHTML = minutes + "m ";
  document.getElementById("secs").innerHTML = seconds + "s ";

  // Mostrar mensagem finalizada quando o timer chegar a 0
  if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = "";
    document.getElementById("hours").innerHTML = "";
    document.getElementById("mins").innerHTML = "";
    document.getElementById("secs").innerHTML = "";
    document.getElementById("end").innerHTML = "TIME UP!!";
  }
}, 1000);
