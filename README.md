# Criador de Avatar Pokemon

Criador de avatar em **HTML, CSS e JavaScript puro**. O projeto nao usa Flash, SWF, Ruffle, build step ou dependencias externas: basta abrir o `index.html` ou publicar a pasta em um host estatico.

## Recursos

- Montagem unica do personagem usando as pecas do trainer de frente.
- Geracao automatica das visoes `Icon`, `Frente`, `Costas`, `Andando`, `Correndo`, `Bike` e `Completo`.
- Preview responsivo para desktop e celular, com pre-visualizacao fixa no mobile.
- Opcao de remover acessorios opcionais com `Nenhum`.
- Seletor de fundos em pixel art aplicado na pre-visualizacao e no download com cena.
- Exportacao da visao selecionada: o botao baixa exatamente o modo que esta aberto.

## Como usar localmente

Abra o arquivo `index.html` no navegador.

Se preferir rodar com servidor local:

```bash
python -m http.server 8765
```

Depois acesse:

```text
http://localhost:8765
```

## Botoes de download

- **Baixar**: exporta a visao atual com fundo transparente.
- **Baixar PNG**: exporta a visao atual com o fundo da cena. No modo `Icon`, baixa um PNG quadrado.
- **Baixar sprites**: exporta uma imagem unica com `Icon`, `Frente`, a sheet completa de `Costas` e as sheets completas de `Andando`, `Correndo` e `Bike`.
- **Reset**: volta o avatar para as escolhas iniciais.

## Estrutura

```text
.
|-- index.html
|-- styles.css
|-- app.js
|-- manifest.json
|-- assets/
|   |-- backgrounds/
|   |-- front/
|   |-- back/
|   |-- walk/
|   |-- run/
|   `-- bike/
`-- docs/
    `-- GITHUB_PAGES.md
```

## Creditos dos assets

Os sprites base usados neste criador vieram do recurso **Trainer battlers - Character Customization Resources (Gen 4)**, publicado no Eevee Expo:

https://eeveeexpo.com/resources/317/

Credito do recurso original: **Coffee Cup / Poltergeist**.

Os fundos de batalha usados como backgrounds vieram do post **Usable Battle background**, publicado por **CDRX73** no Reddit:

https://www.reddit.com/r/PokemonROMhacks/comments/1rlawqy/usable_battle_background/

No post original, os backgrounds foram compartilhados como free-to-use.

## Contribuicoes

Contribuicoes sao bem-vindas. Se alguem quiser ajudar com novos assets, variacoes de roupa, cabelo, acessorios, sprites de costas, sprites pequenos, ajustes de alinhamento, melhorias no visual ou correcoes de bugs, pode abrir uma issue ou enviar um pull request.

Antes de enviar novos assets, tente manter a mesma organizacao de pastas e os mesmos formatos usados em `assets/`, para facilitar a integracao no criador.


Algumas pecas podem nao existir em todos os formatos. Quando isso acontece, o criador ignora somente aquela camada no formato faltante e mantem o restante do avatar normalmente.

Se o repositorio for publico, mantenha os creditos do recurso original e confira as permissoes de qualquer asset novo antes de publicar.
