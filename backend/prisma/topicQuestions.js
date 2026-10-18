const topicQuestions = [
  {
    topic: "Conjuntos Numéricos",
    questions: [
      {
        question:
          "Qual das alternativas abaixo apresenta um número que pertence exclusivamente ao conjunto dos números irracionais (I)?",
        options: ["0,333...", "4", "π", "−5"],
        correct: 2,
      },
      {
        question:
          "Sobre as relações de inclusão entre os conjuntos numéricos, assinale a alternativa correta:",
        options: [
          "Todo número inteiro é também um número natural.",
          "O conjunto dos números reais é formado pela união dos números racionais com os números irracionais.",
          "Todo número racional é também um número inteiro.",
          "O número zero pertence aos números naturais, mas não aos racionais.",
        ],
        correct: 1,
      },
      {
        question:
          "Qual conjunto numérico engloba todos os números que podem ser escritos na forma de fração a/b, onde a e b são números inteiros e b é diferente de zero?",
        options: [
          "Números Naturais (N)",
          "Números Inteiros (Z)",
          "Números Irracionais (I)",
          "Números Racionais (Q)",
        ],
        correct: 3,
      },
      {
        question:
          "Analise os três números a seguir: I. −7    II. 3/4    III. √2. A classificação correta de cada um desses números, respectivamente, é:",
        options: [
          "I é natural, II é irracional e III é real.",
          "I é inteiro, II é racional e III é irracional.",
          "I é irracional, II é racional e III é inteiro.",
          "Todos os três são números racionais.",
        ],
        correct: 1,
      },
      {
        question:
          "Se afirmamos que um determinado número pertence ao conjunto dos números Naturais (N), podemos concluir com certeza que ele também pertence aos conjuntos dos números:",
        options: [
          "Inteiros, Racionais e Reais.",
          "Apenas Inteiros e Irracionais.",
          "Irracionais e Reais.",
          "Apenas Racionais, mas não aos Inteiros.",
        ],
        correct: 0,
      },
    ],
  },
  {
    topic: "As 4 Operações Básicas",
    questions: [
      {
        question:
          "João levou R$ 150,00 para a papelaria. Ele comprou um caderno por R$ 35,00 e uma mochila por R$ 80,00. Após pagar por esses itens, quanto dinheiro sobrou para João?",
        options: ["R$ 35,00", "R$ 45,00", "R$ 55,00", "R$ 115,00"],
        correct: 0,
      },
      {
        question:
          "Uma sala de aula possui 8 fileiras de carteiras, e cada fileira contém exatamente 6 carteiras. Se em um dia de aula todas as carteiras estiverem ocupadas por um aluno cada, quantos alunos estarão presentes na sala?",
        options: ["14 alunos", "36 alunos", "42 alunos", "48 alunos"],
        correct: 3,
      },
      {
        question:
          "Uma confeitaria produziu 120 brigadeiros e deseja distribuí-los em caixas que comportam exatamente 8 brigadeiros cada. Quantas caixas serão necessárias para guardar todos os doces sem sobrar nenhum?",
        options: ["10 caixas", "12 caixas", "15 caixas", "20 caixas"],
        correct: 2,
      },
      {
        question:
          "Na matemática, existe uma ordem correta para resolver expressões com várias operações. Sabendo disso, qual é o resultado correto da expressão 20 + 5 × 2 − 8?",
        options: ["42", "22", "12", "18"],
        correct: 1,
      },
      {
        question:
          "Cada operação matemática possui nomes específicos para os seus termos. Na operação de divisão, o número que será dividido é o dividendo e o número pelo qual dividimos é o divisor. Como é chamado o resultado da operação de divisão?",
        options: ["Resto", "Produto", "Quociente", "Fator"],
        correct: 2,
      },
    ],
  },
  {
    topic: "Potenciação e Radiciação",
    questions: [
      {
        question:
          "Para resolver expressões numéricas, precisamos calcular o valor exato das potências. Qual é o valor da expressão 2⁴ + 3²?",
        options: ["14", "22", "25", "34"],
        correct: 2,
      },
      {
        question:
          "Utilizando as propriedades das potências de mesma base (na multiplicação repetimos a base e somamos os expoentes; na divisão repetimos a base e subtraímos os expoentes), qual é o resultado simplificado da expressão 7⁴ × 7⁵ ÷ 7⁶?",
        options: ["7²", "7³", "7¹⁰", "7¹⁵"],
        correct: 1,
      },
      {
        question:
          "A radiciação é a operação inversa da potenciação. Resolva a seguinte expressão envolvendo raízes: √64 − ∛27. O resultado correto é:",
        options: ["3", "5", "8", "11"],
        correct: 1,
      },
      {
        question:
          "Na matemática, uma potência com expoente fracionário pode ser reescrita como uma raiz. Sendo assim, qual é o valor numérico exato da potência 8^(1/3)?",
        options: ["2", "4", "2⁴", "8³"],
        correct: 0,
      },
      {
        question:
          "Qual é a regra matemática aplicada quando elevamos um número não nulo a um expoente negativo? Calcule o valor de 3⁻².",
        options: ["−6", "−9", "1/6", "1/9"],
        correct: 3,
      },
    ],
  },
  {
    topic: "Frações",
    questions: [
      {
        question:
          "Ana comprou uma caixa com 24 chocolates. Ela decidiu dar 1/3 desses chocolates para sua melhor amiga. Quantos chocolates Ana deu para a amiga?",
        options: ["4 chocolates", "6 chocolates", "8 chocolates", "12 chocolates"],
        correct: 2,
      },
      {
        question:
          "Duas frações são chamadas de equivalentes quando representam a mesma quantidade ou parte do todo, mesmo tendo numeradores e denominadores diferentes. Qual das opções abaixo apresenta uma fração equivalente a 3/5?",
        options: ["9/15", "6/15", "12/25", "5/3"],
        correct: 0,
      },
      {
        question:
          "Durante o jantar, Pedro comeu 1/4 de uma pizza e sua irmã, Júlia, comeu 1/2 da mesma pizza. Juntos, que fração da pizza eles comeram?",
        options: ["2/6", "2/4", "3/4", "3/8"],
        correct: 2,
      },
      {
        question:
          "Na multiplicação de frações, a regra básica é multiplicar numerador por numerador e denominador por denominador. Sabendo disso, qual é o resultado correto da operação 2/3 × 4/5?",
        options: ["6/8", "10/12", "8/8", "8/15"],
        correct: 3,
      },
      {
        question:
          "Para dividir uma fração por outra, mantemos a primeira fração e a multiplicamos pelo inverso da segunda. Seguindo essa regra, qual é o resultado da divisão (3/4) ÷ (2/5)?",
        options: ["15/8", "8/15", "6/20", "5/9"],
        correct: 0,
      },
    ],
  },
  {
    topic: "Porcentagem",
    questions: [
      {
        question:
          "O cálculo de porcentagem é muito utilizado no dia a dia. Se você precisa calcular 15% de R$ 200,00, qual será o valor encontrado?",
        options: ["R$ 15,00", "R$ 30,00", "R$ 45,00", "R$ 60,00"],
        correct: 1,
      },
      {
        question:
          "Uma loja de calçados está em promoção e oferece 20% de desconto em qualquer tênis. Se um cliente escolher um tênis que custa originalmente R$ 150,00, quanto ele pagará após a aplicação do desconto?",
        options: ["R$ 30,00", "R$ 120,00", "R$ 130,00", "R$ 170,00"],
        correct: 1,
      },
      {
        question:
          "O salário de Joana era de R$ 2.500,00. Após uma promoção no trabalho, ela recebeu um aumento de 10%. Qual passou a ser o novo salário de Joana?",
        options: ["R$ 2.600,00", "R$ 2.700,00", "R$ 2.750,00", "R$ 3.000,00"],
        correct: 2,
      },
      {
        question:
          "As frações e as porcentagens são maneiras diferentes de representar uma mesma quantidade. Qual é a taxa percentual que corresponde à fração 3/4?",
        options: ["25%", "34%", "50%", "75%"],
        correct: 3,
      },
      {
        question:
          "Em uma turma escolar com um total de 40 alunos, 8 estudantes faltaram no dia de uma prova importante. Qual foi a porcentagem de alunos ausentes nesse dia?",
        options: ["8%", "10%", "20%", "25%"],
        correct: 2,
      },
    ],
  },
  {
    topic: "Expressões Numéricas (Ordem)",
    questions: [
      {
        question:
          "Para resolver uma expressão numérica que contém diferentes símbolos de associação, existe uma ordem obrigatória que deve ser seguida para não errar o resultado. Qual é a ordem correta de eliminação desses símbolos?",
        options: [
          "1º Chaves { }, 2º Colchetes [ ], 3º Parênteses ( )",
          "1º Colchetes [ ], 2º Parênteses ( ), 3º Chaves { }",
          "1º Parênteses ( ), 2º Colchetes [ ], 3º Chaves { }",
          "1º Parênteses ( ), 2º Chaves { }, 3º Colchetes [ ]",
        ],
        correct: 2,
      },
      {
        question:
          "Aplicando a regra de que as operações dentro dos parênteses devem ser resolvidas primeiro, seguidas pela ordem correta das operações matemáticas (multiplicação e divisão antes de adição e subtração), qual é o resultado da expressão 15 − (3 × 4) + 2?",
        options: ["5", "7", "14", "50"],
        correct: 0,
      },
      {
        question:
          "Resolva a expressão numérica respeitando a ordem dos símbolos de associação (primeiro os parênteses e depois os colchetes): 10 + [5 × (4 − 2)]. O resultado final é:",
        options: ["15", "20", "30", "40"],
        correct: 1,
      },
      {
        question:
          "A seguinte expressão apresenta os três níveis de símbolos de associação. Qual é o valor numérico que obtemos ao resolver 2 + {3 × [8 − (2 + 4)]}?",
        options: ["4", "8", "10", "12"],
        correct: 1,
      },
      {
        question:
          "As operações de multiplicação e divisão têm prioridade sobre adição e subtração, mesmo quando estão dentro dos símbolos. Sendo assim, calcule o resultado exato da expressão 40 ÷ [5 + (3 × 2 − 1)].",
        options: ["2", "4", "8", "10"],
        correct: 1,
      },
    ],
  },
  {
    topic: "Regra de 3",
    questions: [
      {
        question:
          "A regra de três simples é utilizada quando temos apenas duas grandezas envolvidas. Se uma máquina em uma fábrica produz 150 peças em 3 horas de funcionamento, quantas peças essa mesma máquina produzirá se funcionar ininterruptamente por 8 horas?",
        options: ["300 peças", "350 peças", "400 peças", "450 peças"],
        correct: 2,
      },
      {
        question:
          "É muito importante analisar se as grandezas são diretamente ou inversamente proporcionais. Um carro viajando a uma velocidade média de 60 km/h leva 4 horas para completar uma viagem. Se o motorista aumentar a velocidade média para 80 km/h, em quanto tempo fará o mesmo trajeto?",
        options: ["2 horas", "3 horas", "5 horas", "6 horas"],
        correct: 1,
      },
      {
        question:
          "Na regra de três composta, lidamos com três ou mais grandezas. Considere que 4 pedreiros constroem um muro de 20 metros de comprimento em 5 dias. Mantendo o mesmo ritmo de trabalho, quantos dias serão necessários para que 5 pedreiros construam um muro de 50 metros?",
        options: ["5 dias", "8 dias", "10 dias", "12 dias"],
        correct: 2,
      },
      {
        question:
          "Uma gráfica possui 10 impressoras iguais que, trabalhando juntas, imprimem 5.000 livros em 4 dias. Se 2 impressoras quebrarem (restando 8) e a encomenda agora for de 6.000 livros, quantos dias as impressoras restantes levarão para finalizar o trabalho?",
        options: ["6 dias", "7 dias", "8 dias", "9 dias"],
        correct: 0,
      },
      {
        question:
          "Para montar a equação de uma regra de três, o primeiro passo é classificar a relação entre as grandezas. Qual das alternativas abaixo apresenta um exemplo clássico de grandezas inversamente proporcionais?",
        options: [
          "A quantidade de mercadoria comprada e o valor total a ser pago.",
          "A distância percorrida por um veículo e a quantidade de combustível gasto.",
          "O número de operários trabalhando em uma obra e o tempo necessário para concluí-la.",
          "O tempo de funcionamento de uma máquina e a quantidade de produtos fabricados por ela.",
        ],
        correct: 2,
      },
    ],
  },
  {
    topic: "Equação de 1º Grau",
    questions: [
      {
        question:
          "O objetivo ao resolver uma equação do 1º grau é encontrar a sua raiz, ou seja, o valor da incógnita (geralmente x) que torna a igualdade verdadeira. Qual é a raiz da equação 2x − 8 = 0?",
        options: ["2", "4", "8", "10"],
        correct: 1,
      },
      {
        question:
          "Quando temos a incógnita dos dois lados da igualdade, devemos organizar a equação colocando os termos com x de um lado e os números do outro. Resolvendo a equação 5x − 3 = 2x + 12, qual é o valor de x?",
        options: ["3", "4", "5", "6"],
        correct: 2,
      },
      {
        question:
          "Muitas vezes, as equações apresentam parênteses. Nesses casos, precisamos aplicar a propriedade distributiva antes de isolar o x. Qual é o valor de x na equação 3(x − 2) = 15?",
        options: ["3", "5", "7", "9"],
        correct: 2,
      },
      {
        question:
          "As equações do 1º grau também podem envolver frações. Qual é o valor numérico que soluciona corretamente a equação x/2 + 5 = 11?",
        options: ["3", "6", "12", "14"],
        correct: 2,
      },
      {
        question:
          'As equações são ferramentas matemáticas excelentes para resolver problemas do dia a dia. Leia a seguinte situação: "O dobro de um número somado a 15 resulta em 49". Qual é esse número?',
        options: ["17", "22", "27", "32"],
        correct: 0,
      },
    ],
  },
  {
    topic: "Equação de 2º Grau",
    questions: [
      {
        question:
          "Toda equação do 2º grau pode ser escrita na sua forma geral ax² + bx + c = 0, onde a, b e c são números reais e a é diferente de zero. Na equação 3x² − 5x + 2 = 0, quais são os valores dos coeficientes a, b e c, respectivamente?",
        options: ["3, 5 e 2", "3, −5 e 2", "−3, 5 e −2", "2, −5 e 3"],
        correct: 1,
      },
      {
        question:
          "Para encontrar as raízes de uma equação do 2º grau utilizando a fórmula de Bhaskara, é comum calcularmos primeiro o valor do discriminante, representado pela letra grega delta (Δ). Qual é a fórmula matemática correta para calcular o valor de Δ?",
        options: ["Δ = b² + 4ac", "Δ = −b − 4ac", "Δ = b² − 4ac", "Δ = 2a − b²"],
        correct: 2,
      },
      {
        question:
          "Uma equação do 2º grau é classificada como incompleta quando o coeficiente b ou o coeficiente c (ou ambos) são iguais a zero. Quais são as raízes da equação incompleta x² − 25 = 0?",
        options: [
          "Apenas 5",
          "Apenas −5",
          "5 e −5",
          "A equação não possui raízes reais.",
        ],
        correct: 2,
      },
      {
        question:
          "O valor numérico do discriminante (Δ) nos fornece uma informação muito importante sobre a quantidade de raízes da equação antes mesmo de terminarmos a conta. O que podemos afirmar com certeza sobre uma equação do 2º grau que possui Δ < 0?",
        options: [
          "Ela possui duas raízes reais e diferentes.",
          "Ela possui duas raízes reais e iguais (ou uma única raiz real).",
          "Ela possui infinitas raízes reais.",
          "Ela não possui raízes no conjunto dos números reais (R).",
        ],
        correct: 3,
      },
      {
        question:
          "Resolvendo a equação do 2º grau completa x² − 5x + 6 = 0 (aplicando a fórmula de Bhaskara ou o método da soma e produto), quais são os valores encontrados para as suas raízes (x₁ e x₂)?",
        options: ["2 e 3", "−2 e −3", "1 e 6", "−1 e −6"],
        correct: 0,
      },
    ],
  },
  {
    topic: "Funções",
    questions: [
      {
        question:
          "Na definição matemática de uma função f: A → B, cada elemento do conjunto A está associado a um único elemento do conjunto B. Como são chamados matematicamente os conjuntos A e B, respectivamente?",
        options: [
          "Domínio e Imagem",
          "Imagem e Domínio",
          "Domínio e Contradomínio",
          "Contradomínio e Domínio",
        ],
        correct: 2,
      },
      {
        question:
          "O valor numérico de uma função é obtido substituindo a variável x por um número específico. Dada a função f(x) = 3x − 5, qual é o valor de f(4)?",
        options: ["3", "7", "12", "17"],
        correct: 1,
      },
      {
        question:
          "O zero (ou raiz) de uma função é o valor de x que faz com que o resultado da função, f(x), seja igual a zero. Qual é a raiz da função afim f(x) = 2x + 8?",
        options: ["−8", "−4", "4", "8"],
        correct: 1,
      },
      {
        question:
          "A representação gráfica nos ajuda a visualizar o comportamento de uma função. O gráfico de uma função polinomial do 1º grau (também chamada de função afim), dada pela lei de formação f(x) = ax + b (com a diferente de zero), é representado por qual figura geométrica?",
        options: ["Uma parábola", "Uma reta", "Uma circunferência", "Uma curva exponencial"],
        correct: 1,
      },
      {
        question:
          "As funções são muito usadas para modelar situações do dia a dia. O custo mensal de produção de camisas em uma pequena fábrica é dado pela função C(x) = 20x + 150, onde x é a quantidade de camisas produzidas e 150 representa os custos fixos. Se em um determinado mês a fábrica dispõe de R$ 750,00 para gastar, qual é o número máximo de camisas que ela pode produzir?",
        options: ["20 camisas", "25 camisas", "30 camisas", "45 camisas"],
        correct: 2,
      },
    ],
  },
  {
    topic: "Cinemática",
    questions: [
      {
        question:
          "O conceito de movimento e repouso na Física depende de um referencial. Imagine um passageiro sentado em sua poltrona dentro de um ônibus que viaja a 80 km/h por uma rodovia. Do ponto de vista da Física, é correto afirmar que o passageiro está:",
        options: [
          "Em repouso em relação ao motorista do ônibus.",
          "Em repouso em relação aos postes da rodovia.",
          "Em movimento em relação à sua própria poltrona.",
          "Em movimento em relação aos outros passageiros que também estão sentados.",
        ],
        correct: 0,
      },
      {
        question:
          "A velocidade escalar média é a relação entre a distância percorrida por um móvel e o tempo gasto nesse percurso. Um carro de passeio viaja de uma cidade A para uma cidade B, separadas por uma distância de 240 km. Se a viagem durou exatamente 3 horas, qual foi a velocidade média do veículo nesse trajeto?",
        options: ["60 km/h", "70 km/h", "80 km/h", "90 km/h"],
        correct: 2,
      },
      {
        question:
          "No Movimento Retilíneo Uniforme (MRU), a velocidade do corpo é constante e diferente de zero. A função horária da posição de um ciclista em MRU é dada pela equação S = 20 + 5t (com os valores no Sistema Internacional, ou seja, posição em metros e tempo em segundos). A partir dessa equação, o que podemos afirmar?",
        options: [
          "A posição inicial é de 5 metros e a velocidade é de 20 m/s.",
          "A posição inicial é de 20 metros e a velocidade é de 5 m/s.",
          "A posição inicial é de 20 metros e a aceleração é de 5 m/s².",
          "A posição inicial é de 25 metros e a velocidade é zero.",
        ],
        correct: 1,
      },
      {
        question:
          "A aceleração é a grandeza física que mede o quanto a velocidade de um corpo varia com o passar do tempo. Um carro de corrida parte do repouso (velocidade inicial zero) e, após 5 segundos, atinge a velocidade de 20 m/s. Considerando que a aceleração foi constante, qual é o valor dessa aceleração?",
        options: ["2 m/s²", "4 m/s²", "5 m/s²", "15 m/s²"],
        correct: 1,
      },
      {
        question:
          "Na cinemática, existem diversas equações matemáticas para descrever os movimentos. A Equação de Torricelli (v² = v₀² + 2as) é uma ferramenta clássica e muito útil na resolução de problemas de Movimento Retilíneo Uniformemente Variado (MRUV). Em qual situação principal essa fórmula é a mais indicada para se utilizar?",
        options: [
          "Quando o corpo realiza um movimento com velocidade constante (sem aceleração).",
          "Quando o problema não fornece e não pede o valor do tempo (t) da trajetória.",
          "Quando o móvel descreve uma trajetória exclusivamente circular e uniforme.",
          "Quando precisamos calcular a massa e a força resultante sobre o corpo.",
        ],
        correct: 1,
      },
    ],
  },
  {
    topic: "Mecânica",
    questions: [
      {
        question:
          "Quando um ônibus freia bruscamente, os passageiros tendem a ser jogados para frente. Esse fenômeno do nosso cotidiano é explicado pela Primeira Lei de Newton. Qual é o nome dado a essa lei ou a esse princípio físico?",
        options: [
          "Princípio da Ação e Reação",
          "Princípio da Inércia",
          "Lei da Gravitação Universal",
          "Princípio da Conservação de Energia",
        ],
        correct: 1,
      },
      {
        question:
          "A Segunda Lei de Newton, também conhecida como Princípio Fundamental da Dinâmica, estabelece que a força resultante que atua sobre um corpo é igual ao produto de sua massa pela sua aceleração (F = ma). Qual é a força resultante necessária para acelerar um bloco de 10 kg a uma aceleração de 3 m/s²?",
        options: ["3 N", "13 N", "30 N", "300 N"],
        correct: 2,
      },
      {
        question:
          "A Terceira Lei de Newton afirma que para toda força de ação existe uma força de reação de mesma intensidade, mesma direção, mas em sentidos opostos. Sobre o par de forças de ação e reação, é correto afirmar que:",
        options: [
          "Elas se anulam, pois possuem sentidos opostos e atuam no mesmo corpo.",
          "A força de ação é sempre maior que a força de reação.",
          "Elas nunca se anulam, pois atuam sempre em corpos diferentes.",
          "Elas atuam no mesmo corpo, mas em momentos (tempos) diferentes.",
        ],
        correct: 2,
      },
      {
        question:
          "Na Física Mecânica, o conceito de Trabalho está relacionado à transferência de energia por causa da aplicação de uma força ao longo de um deslocamento. Se uma pessoa empurra uma caixa com uma força constante de 50 N (na mesma direção e sentido do movimento) por uma distância de 4 metros, qual foi o trabalho realizado por essa força?",
        options: ["12,5 Joules", "46 Joules", "54 Joules", "200 Joules"],
        correct: 3,
      },
      {
        question:
          "A energia associada ao movimento de um corpo é chamada de Energia Cinética, que depende da massa do corpo e da sua velocidade. Sabendo que a fórmula da Energia Cinética é Ec = mv²/2, qual é a energia cinética de um objeto de 2 kg que se move a uma velocidade de 4 m/s?",
        options: ["8 Joules", "16 Joules", "32 Joules", "64 Joules"],
        correct: 1,
      },
    ],
  },
  {
    topic: "Elétrica",
    questions: [
      {
        question:
          "O estudo da Eletrostática baseia-se no princípio de atração e repulsão das cargas elétricas. Sabendo que os prótons possuem carga positiva e os elétrons possuem carga negativa, o que ocorrerá se aproximarmos dois corpos eletrizados, um com carga positiva e outro também com carga positiva?",
        options: [
          "Eles irão se atrair, pois as massas são iguais.",
          "Não haverá nenhuma interação elétrica entre eles.",
          "Eles irão se repelir, pois cargas de mesmo sinal se repelem.",
          "Um corpo irá transferir toda a sua carga para o outro e ambos ficarão neutros.",
        ],
        correct: 2,
      },
      {
        question:
          "A corrente elétrica é a base para o funcionamento de todos os aparelhos eletrônicos que utilizamos no dia a dia. Como podemos definir corretamente o conceito de corrente elétrica no interior de um fio condutor metálico?",
        options: [
          "É a dificuldade que o material oferece à passagem de energia.",
          "É o fluxo ordenado (movimento direcionado) de elétrons livres.",
          "É o acúmulo de prótons nas extremidades do fio.",
          "É a força invisível que puxa as tomadas.",
        ],
        correct: 1,
      },
      {
        question:
          "A 1ª Lei de Ohm estabelece a relação entre a Tensão Elétrica (U), a Resistência Elétrica (R) e a Corrente Elétrica (I) através da fórmula U = RI. Se um resistor com resistência de 10 Ω é percorrido por uma corrente elétrica de 5 A, qual é o valor da tensão elétrica aplicada aos seus terminais?",
        options: ["2 V", "5 V", "15 V", "50 V"],
        correct: 3,
      },
      {
        question:
          "A potência elétrica indica a quantidade de energia que um aparelho consome ou transforma a cada segundo. A fórmula para calcular a potência é P = UI. Um aquecedor está ligado a uma tomada de 110 V e por ele passa uma corrente de 10 A. Qual é a potência elétrica desse aquecedor?",
        options: ["11 W", "100 W", "120 W", "1100 W"],
        correct: 3,
      },
      {
        question:
          "Em uma residência, as lâmpadas e as tomadas são instaladas de uma maneira específica para que, se uma lâmpada queimar no quarto, a lâmpada da sala continue funcionando normalmente. Isso é possível porque, nas instalações elétricas residenciais, os componentes são ligados em um circuito:",
        options: [
          "Em série, onde todos os aparelhos dividem a mesma corrente elétrica.",
          "Em paralelo, garantindo independência e a mesma tensão (voltagem) para cada aparelho.",
          "Fechado de corrente contínua, onde apenas as tomadas têm energia.",
          "Alternado aberto, onde a energia pula o aparelho que está quebrado.",
        ],
        correct: 1,
      },
    ],
  },
  {
    topic: "Ondulatória",
    questions: [
      {
        question:
          "Quanto à sua natureza, as ondas podem ser classificadas em mecânicas (precisam de um meio material para se propagar) e eletromagnéticas (podem se propagar até no vácuo). Assinale a alternativa que apresenta, respectivamente, um exemplo clássico de onda mecânica e um exemplo de onda eletromagnética.",
        options: [
          "Luz e Som.",
          "Som e Luz.",
          "Ondas de rádio e Micro-ondas.",
          "Onda em uma corda e Som.",
        ],
        correct: 1,
      },
      {
        question:
          "A Equação Fundamental da Ondulatória relaciona a velocidade de propagação (v), o comprimento de onda (λ) e a frequência (f) através da fórmula v = λf. Se uma onda gerada em um lago possui uma frequência de 50 Hz e um comprimento de onda de 2 metros, qual é a sua velocidade de propagação?",
        options: ["25 m/s", "48 m/s", "52 m/s", "100 m/s"],
        correct: 3,
      },
      {
        question:
          "Ao escutarmos música, frequentemente ajustamos o volume do aparelho de som. Do ponto de vista da Física Ondulatória, quando aumentamos o volume (intensidade) de um som, qual característica específica da onda sonora estamos alterando e tornando maior?",
        options: ["O período.", "A frequência.", "A amplitude.", "A velocidade."],
        correct: 2,
      },
      {
        question:
          "As ondas possuem uma capacidade natural de contornar obstáculos ou fendas, desde que estes tenham dimensões comparáveis ao seu comprimento de onda. É por causa desse fenômeno que você consegue ouvir uma pessoa falando do outro lado de um muro, mesmo sem vê-la. Qual é o nome desse fenômeno ondulatório?",
        options: ["Refração", "Difração", "Reflexão", "Polarização"],
        correct: 1,
      },
      {
        question:
          "O período (T) é o tempo necessário para que uma onda completa seja formada, enquanto a frequência (f) é o número de ondas formadas em um determinado tempo (geralmente em 1 segundo, medido em Hertz). A relação matemática entre eles é f = 1/T. Se as ondas do mar batem em uma pedra com um período de 4 segundos, qual é a frequência dessas ondas?",
        options: ["0,25 Hz", "0,50 Hz", "2,0 Hz", "4,0 Hz"],
        correct: 0,
      },
    ],
  },
  {
    topic: "Calorimetria",
    questions: [
      {
        question:
          "Na Física, o conceito de calor é muitas vezes confundido com temperatura no dia a dia, mas eles têm significados bem diferentes. Qual é a definição física correta para o calor?",
        options: [
          "É a energia térmica em trânsito (em movimento) entre corpos que possuem temperaturas diferentes.",
          "É a medida exata do grau de agitação das moléculas de um corpo.",
          "É a quantidade de energia que um corpo armazena sempre que está quente.",
          "É um fluido invisível que se desloca exclusivamente dos corpos frios para os corpos quentes.",
        ],
        correct: 0,
      },
      {
        question:
          "A Equação Fundamental da Calorimetria (Q = mcΔT) é usada para calcular a quantidade de calor sensível, ou seja, o calor que altera a temperatura de um corpo. Qual é a quantidade de calor necessária para aquecer 200 g de água de 20 °C para 50 °C? (Considere o calor específico da água c = 1 cal/g°C).",
        options: ["3.000 cal", "6.000 cal", "10.000 cal", "14.000 cal"],
        correct: 1,
      },
      {
        question:
          "Quando uma substância muda de estado físico (como o gelo derretendo para virar água líquida), sua temperatura não se altera durante o processo. O calor envolvido nessa fase é chamado de calor latente, calculado pela fórmula Q = mL. Qual é a quantidade de calor necessária para derreter 50 g de gelo que já está a 0 °C? (Dado: calor latente de fusão do gelo Lf = 80 cal/g).",
        options: ["130 cal", "400 cal", "4.000 cal", "8.000 cal"],
        correct: 2,
      },
      {
        question:
          "Durante um dia de verão na praia, notamos que a areia esquenta muito mais rápido que a água do mar, mesmo ambas recebendo energia do Sol durante o mesmo tempo. Essa diferença de comportamento ocorre principalmente porque:",
        options: [
          "O calor específico da areia é muito menor que o da água, fazendo-a aquecer mais rápido.",
          "O calor específico da areia é muito maior que o da água, fazendo-a aquecer mais rápido.",
          "A água reflete 100% da energia solar que incide sobre ela, não absorvendo calor.",
          "A areia não troca calor com o ambiente ao seu redor, acumulando toda a energia.",
        ],
        correct: 0,
      },
      {
        question:
          "O Princípio das Trocas de Calor afirma que, quando dois corpos com temperaturas iniciais diferentes são colocados em um recipiente termicamente isolado (como uma garrafa térmica perfeita), eles trocam energia térmica entre si. O que obrigatoriamente ocorre no final desse processo?",
        options: [
          "O corpo mais frio cede seu calor para o mais quente até esfriar completamente.",
          "Ambos mantêm suas temperaturas iniciais, pois estão em um recipiente isolado.",
          "O corpo mais quente absorve todo o frio do corpo mais frio.",
          "Eles atingem o equilíbrio térmico, ou seja, ambos passam a ter a mesma temperatura final.",
        ],
        correct: 3,
      },
    ],
  },
  {
    topic: "Óptica",
    questions: [
      {
        question:
          "A Óptica Geométrica baseia-se em alguns princípios fundamentais. Um fenômeno muito comum do nosso dia a dia, como a formação de sombras e a ocorrência de eclipses (solares e lunares), é explicado diretamente por qual desses princípios?",
        options: [
          "Princípio da Reversibilidade dos Raios de Luz.",
          "Princípio da Propagação Retilínea da Luz.",
          "Princípio da Independência dos Raios de Luz.",
          "Princípio da Refração da Luz.",
        ],
        correct: 1,
      },
      {
        question:
          "Quando você se olha em um espelho plano (como o do seu banheiro ou quarto), a imagem que você vê refletida possui características específicas para a Física. Qual das alternativas abaixo descreve corretamente a imagem formada por um espelho plano?",
        options: [
          "Real, invertida (de cabeça para baixo) e menor que o objeto.",
          "Virtual, direita (não invertida de cabeça para baixo) e do mesmo tamanho que o objeto.",
          "Real, direita e maior que o objeto.",
          "Virtual, invertida e do mesmo tamanho que o objeto.",
        ],
        correct: 1,
      },
      {
        question:
          "Se você colocar um canudo ou um lápis dentro de um copo transparente com água e olhar de fora, ele parecerá estar quebrado ou torto. Qual fenômeno óptico é o principal responsável por essa ilusão, ocorrendo devido à mudança de velocidade da luz ao passar de um meio (ar) para outro (água)?",
        options: ["Reflexão", "Difração", "Refração", "Dispersão"],
        correct: 2,
      },
      {
        question:
          "A óptica da visão estuda o olho humano, seus defeitos visuais e como corrigi-los com lentes. A miopia é um problema de visão onde o globo ocular é mais alongado, fazendo com que a imagem se forme antes da retina e dificultando a visão de objetos distantes. Qual é o tipo de lente adequada para corrigir a miopia?",
        options: ["Lente convergente", "Lente divergente", "Lente cilíndrica", "Lente plana"],
        correct: 1,
      },
      {
        question:
          "A cor de um objeto opaco quando iluminado pela luz branca (como a luz do Sol) é determinada pelo fenômeno da reflexão e absorção. Se uma camiseta parece ser verde quando iluminada pela luz branca, o que acontece com as outras cores (frequências) da luz que incidem sobre ela?",
        options: [
          "Todas as outras cores são refratadas e atravessam o tecido.",
          "Todas as outras cores são refletidas junto com a luz verde.",
          "Todas as outras cores são absorvidas pelo tecido da camiseta.",
          "Nenhuma outra cor atinge o tecido, apenas a luz verde viaja no espaço.",
        ],
        correct: 2,
      },
    ],
  },
];

export default topicQuestions;
