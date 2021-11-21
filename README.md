<div align=center>
  <h1>displaying-list</h1>
  <p>Projetinho utilizando a biblioteca Reactjs<p>
  <p>Ao digitar o login e senha corretamente exibe uma lista ao qual se pode adicionar textos</p>

  ![as](https://user-images.githubusercontent.com/70671093/142775746-f1208ffc-57c0-4229-99a8-605bbfd32604.jpg)
  
  <hr>
  
  <p>Crio as variáveis as quais terão os dados de login e senha. </p>
  
  ![as](https://user-images.githubusercontent.com/70671093/142776287-f8271141-358b-4fbd-a230-63199cddc630.jpg)
  
  <p>Nos inputs adiciono o evento onChange para monitorar cada alteração ao digitar. Crio uma função e uso aqui o hook useState para receber o que será digitado.</p>
  
  ![as](https://user-images.githubusercontent.com/70671093/142776446-ef7fcad8-5624-4097-9625-41c110953f81.jpg)
  
  <p>Com o evento de clique crio uma função que irá verificar, se o que foi digitado é igual a variável declarada anteriormente.</p>
  
  ![as](https://user-images.githubusercontent.com/70671093/142776511-0c368fe9-f142-4ffc-a9a9-a994a093f3a8.jpg)
  
  <p>Com a estrutura de decisão if, verifico se o nome de usuário e login correspondem com a variável <br> Caso sejam iguais, o estado do hook passa a ser true, caso contrário; um alerta aparecerá na tela informando que os dados estão incorretos.</p>
  
  
  ![if](https://user-images.githubusercontent.com/70671093/142776054-d10bfbb8-f43b-4bb4-bf8d-68894f42f52a.jpg)
  
  <p>Utilizo o operador ternário confirmo se o estado é true ou false, sendo true, a lista aparecerá.</p>
  
  ![as](https://user-images.githubusercontent.com/70671093/142776222-523b172c-647a-4900-8779-3729b01191ec.jpg)
  
  <p>Já na lista de nomes utilizo novamente o useState para poder receber esses nomes e adicionar,através de vetor, na lista.</p>
  

  </div>
