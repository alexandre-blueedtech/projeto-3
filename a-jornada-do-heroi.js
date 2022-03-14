// Projeto: A jornada do herói
// Aluno: Felipe de Souza Lima

// OBS: nesse projeto, exibi a pergunta em console.log e a resposta apenas num prompt escrito "Resposta", pois como uso o replit ainda, ele da um erro se a string é muito longa. Fica repetindo a linha anterior a cada tecla que é apertada. Diminuindo a string, esse bug é burlado.

// Titulo: O Fantasma de Kiev

console.log("O sol estava quase se pondo, um entardecer vermelho sangue. Talvez a coloração fosse pelas marcas do acontecido...");
console.log();

console.log("Um jovem (obviamente um novato) se aproxima de um homem, talvez ate passamos chama-lo de senhor, mas digamos que ainda em seus melhores dias.");
console.log();

console.log("O jovem observa esse homem olhando fixamente para o céu, as marcas da guerra evidenciadas em seu rosto e olhar.");
console.log();

console.log("Então o homem, sem tirar os olhos do céu, pergunta: ");

console.log("Ja ouviu falar do fantasma de kiev, meu jovem?");
console.log();

console.log("O garoto apenas concorda com a cabeça. Talvez o terror ainda o assombrasse e o impedia de pronunciar qualquer palavra. Bom, ele era jovem e ja passou por tanta coisa. Quem poderia julga-lo?");
console.log();

console.log("O homem continua: ");
console.log();

console.log("O fantasma de kiev foi um piloto de caça sagaz do nosso lado da guerra.");
console.log();

console.log("Então o jovem toma coragem e pergunta: ");
console.log();

console.log("Foi por causa dele que estamos aqui hoje, não é?");

let respSim = 0;

let pergunta1 = prompt("Resposta: ").toLowerCase();

if (pergunta1 == "sim") {
  console.log("Os feitos dele, mudaram o rumo da historia e nos fez chegar a esse momento. Se nao fosse por ele...");
  respSim++
} else {
  console.log("Ele foi um bom homem, mas conseguiriamos mesmo sem ele.");
}
console.log();

console.log("Então foi que ele conseguiu abater a maioria dos caças russos?");
let pergunta2 = prompt("Resposta: ").toLowerCase();

if (pergunta2 == "sim") {
  console.log("Exatamente. Os soldados russos já sabiam qual era seu caça, e todos tentavam evitar confronto direto. Mas para o fantasma, só havia um pensamento: Eliminar o inimigo. Então, nao sobraram muitos deles.");
  respSim++
} else {
  console.log("Talvez um ou dois. Mas nao foi isso que fez a diferença.")
}
console.log();

console.log("Mas é a usina de chernobyl, foi ele que reconquistou?")
let pergunta3 = prompt("Resposta: ").toLowerCase();

if (pergunta3 == "sim") {
  console.log("Com a motivação de ter um falcão que mutilasse qualquer presa que visse pelo terreno, nossos soldados ucranianos nao exitaram em reconquistar a usina.");
  respSim++
} else {
  console.log("A usina foi nossa durante pouco tempo, tomada pelo poder terrestre. Os malditos russos ja tem o poder dela denovo.")
}
console.log();

console.log("E é verdade que ate mesmo os tanques nao tinham vez contra ele?");
let pergunta4 = prompt("Resposta: ").toLowerCase();

if (pergunta4 == "sim") {
  console.log("Tanques? hahaha! eram como lesmas. Ninguem era capaz de vence-lo em velocidade, astucia e principalmente mira.");
  respSim++
} else {
  console.log("Era impossivel para ele, como um caça, derrubar tamanho poder de combate.");
}
console.log();

console.log("Mas voce sabe... Hoje... Hoje é o ataque final. Decisivo para ambos os lados. Ele será capaz de nos protejer?")
let pergunta5 = prompt("Resposta: ").toLowerCase();

if (pergunta5 == "sim") {
  console.log("Com a fé em Deus, ele terá forças para acabar com tudo isso")
  respSim++
} else {
  console.log("Meu jovem. Só Deus é capaz de acabar com tudo isso...")
}
console.log();

console.log("Os dois ficaram refletindo, em um momento onde o unico barulho que era ouvido, eram os passos do exercito russo marchando em direção a eles e todo o exercito ucraniano que estavam a postos.")
console.log();
if (respSim == 0) {
  console.log("É uma pena que o fantasma de kiev nao foi capaz de vencer... agora, iremos todos morrer...");
} else if (respSim == 1 || respSim == 2) {
  console.log("Essa guerra ja é esta perdida. Vamos fazer o maximo para que as mulheres e crianças consigam sair ilesas.");
} else if (respSim == 3) {
  console.log("Pela honra e pela glória de nosso país, lutaremos até o fim. Ainda há chance!");
} else if (respSim == 4) {
  console.log("Mesmo sem o Fantasma de Kiev, nos somos muito capazes de vencer.");
} else if (respSim == 5) {
  console.log("O homem calmamente se afastou, em direção a um caça. Antes de ele entrar, deu tempo do jovem ver um brasão no seu braço escrito 'Ghost'. O homem lancou um olhar para o garoto, momentos antes de decolar. Naquele momento o jovem teve certeza que a guerra acabaria em vitoria, pois o fantasma de kiev estava aos céus.")
}
