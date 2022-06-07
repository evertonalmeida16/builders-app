# builders-app

Aplicativo feito com Expo e React Native para teste técnico.

Versões:

Node: 14.15.4
Npm: 6.14.10
Yarn: 1.22.18
Expo: 5.4.9

Para a instalação do app é necessário ter o expo instalado na máquina e também o node, npm e yarn nas suas últimas versões.

Executar o comando **npm install --global expo-cli** para realizar a instalação do expo na máquina, caso ainda não tenha instalado.

Segue documentação de instalação do expo:
https://docs.expo.dev/get-started/installation/

Após realizar o clone do repositório é necessário executar o comando **yarn install** ou **npm install** dentro da pasta da aplicação para instalar todas as depêndencias necessárias para executar o app.


Após a instalação das dependências temos que executar o comando **expo start** no terminal dentro do diretório da aplicação para iniciar o aplicativo.
A seguinte tela irá aparecer, possibilitando que você leia o QRCode com o seu celular para poder emular o aplicativo. Para o funcionamento correto do emulador do Expo, temos que ter instalado no nosso aparelho o aplicativo da Expo Go e o celular deve estar na mesma rede WIFI em que a máquina que está executando o **expo start**

![image](https://user-images.githubusercontent.com/43793955/172287561-160520a8-147d-4183-9f50-91d48830e0ff.png)

Segue link para download do aplicativo Expo Go.
Android: https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www
IOS: https://apps.apple.com/app/apple-store/id982107779

Se você seguiu os passos acima e fez a leitura do QRCode com o aplicativo da ExpoGo no seu aparelho, provavelmente estará funcionando o aplicativo no seu celular.

Segue print das telas do aplicativo.

Tela inicial:

![1](https://user-images.githubusercontent.com/43793955/172288145-6bb8fe8f-0150-45d9-bad8-a43a2f96dddb.jpg)


Após clicar em "Atualizar", será mostrado a mensagem de aguarde pois a aplicação estará buscando sua localização atual e também como está o clima da sua região, caso o aplicativo não tenha permissão para usar sua localização, ele deverá solicita-lá nesse passo:

![2](https://user-images.githubusercontent.com/43793955/172288202-0354c112-6341-42df-a3ba-d905c1501968.jpg)

Ao finalizar a busca o texto irá mudar trazendo os dados básicos do clima atual na sua região:

![3](https://user-images.githubusercontent.com/43793955/172288355-a4c32207-68ce-4575-82c5-196cef0851cd.jpg)

Ao clicar novamente no botão de "Atualizar", o app deverá fazer uma nova busca:

![4](https://user-images.githubusercontent.com/43793955/172288516-90637b3e-b29a-44b0-aae6-b852d26ce766.jpg)




