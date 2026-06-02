# Publicar no GitHub Pages

Este projeto pode ir para o ar pelo **GitHub Pages** sem build, porque ele e um site estatico feito com `index.html`, `styles.css`, `app.js` e arquivos dentro de `assets/`.

## Metodo recomendado

Use a publicacao pela branch `main`, apontando para a raiz do repositorio.

## Passo a passo

1. Entre no GitHub e crie um novo repositorio.
2. Envie todos os arquivos desta pasta para o repositorio.
3. Confirme que o arquivo `index.html` esta na raiz, junto de `styles.css`, `app.js`, `manifest.json` e `assets/`.
4. Abra o repositorio no GitHub.
5. Entre em `Settings`.
6. No menu lateral, clique em `Pages`.
7. Em `Build and deployment`, no campo `Source`, escolha `Deploy from a branch`.
8. Em `Branch`, selecione:
   - branch: `main`
   - pasta: `/ (root)`
9. Clique em `Save`.
10. Aguarde o GitHub gerar a URL do site.

Normalmente o link fica nesse formato:

```text
https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/
```

Exemplo:

```text
https://meuusuario.github.io/pokemon-avatar-creator/
```

## Atualizar o site depois

Quando quiser atualizar o site:

1. Altere os arquivos localmente.
2. Envie as mudancas para a branch `main`.
3. O GitHub Pages atualiza o site automaticamente depois de alguns instantes.

## Problemas comuns

### O site abriu, mas esta sem estilo ou sem imagens

Confira se a pasta `assets/` foi enviada inteira e se os caminhos continuam iguais. No GitHub Pages, nomes de arquivos e pastas diferenciam maiusculas de minusculas.

### Aparece erro 404

Confira se:

- o `index.html` esta na raiz do repositorio;
- o Pages esta configurado em `main` e `/ (root)`;
- voce esperou alguns minutos depois de salvar a configuracao.

### Quero usar um dominio proprio

Depois que o GitHub Pages estiver funcionando, voce pode configurar um dominio proprio em `Settings` > `Pages` > `Custom domain`.

## Links oficiais

- GitHub Docs: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- Configurar fonte de publicacao: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
