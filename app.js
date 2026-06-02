const EMBEDDED_MANIFEST = {"title":"Trainer Avatar Maker Completo","version":"2.0-auto-all","notes":"Gerado a partir dos PNGs enviados pelo usu\u00e1rio. Um \u00fanico editor cria automaticamente frente, costas e sprites overworld.","views":{"front":{"id":"front","label":"Frente","short":"Frente","type":"single","width":160,"height":160,"layers":["body","bottom","top","hair","hat"]},"back":{"id":"back","label":"Costas / batalha","short":"Costas","type":"frames","width":175,"height":196,"sheetWidth":875,"sheetHeight":196,"frames":5,"defaultFrame":4,"layers":["body","top","hair","hat"]},"walk":{"id":"walk","label":"Overworld andando","short":"Andando","type":"sheet","width":256,"height":256,"tile":64,"layers":["body","bottom","top","hair","hat","carry"]},"run":{"id":"run","label":"Overworld correndo","short":"Correndo","type":"sheet","width":256,"height":256,"tile":64,"layers":["body","bottom","top","hair","hat","carry"]},"bike":{"id":"bike","label":"Overworld bike","short":"Bike","type":"sheet","width":256,"height":256,"tile":64,"layers":["body","bottom","top","hair","hat","carry"]}},"genders":{"female":{"label":"Feminino"},"male":{"label":"Masculino"}},"categories":[{"id":"body","label":"Corpo / pele","icon":"\u25d2","optional":false,"layer":10,"items":[{"id":"base","name":"Corpo","variants":[{"id":"light","name":"Clara"},{"id":"medium","name":"M\u00e9dia"},{"id":"pale","name":"P\u00e1lida"},{"id":"dark","name":"Escura"}]}]},{"id":"bottom","label":"Cal\u00e7a / saia","icon":"\u25e7","optional":false,"layer":20,"items":[{"id":"pants-and-boots","name":"Cal\u00e7a com botas","variants":[{"id":"black","name":"Preto"},{"id":"grey","name":"Cinza"},{"id":"beige","name":"Bege"},{"id":"navy","name":"Azul-marinho"},{"id":"light-blue","name":"Azul claro"}]},{"id":"jumpsuit-pants","name":"Cal\u00e7a macac\u00e3o","variants":[{"id":"black","name":"Preto"},{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"},{"id":"green","name":"Verde"},{"id":"yellow","name":"Amarelo"}]},{"id":"jumpsuit-pants-alt","name":"Cal\u00e7a macac\u00e3o alt.","variants":[{"id":"black","name":"Preto"},{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"},{"id":"green","name":"Verde"},{"id":"yellow","name":"Amarelo"}]},{"id":"lord-suit-pants","name":"Cal\u00e7a nobre","variants":[{"id":"default","name":"Padr\u00e3o"}]},{"id":"capris","name":"Capri","variants":[{"id":"black","name":"Preto"},{"id":"green","name":"Verde"},{"id":"beige","name":"Bege"},{"id":"navy","name":"Azul-marinho"},{"id":"aqua","name":"Aqua"}]},{"id":"classy-pants","name":"Cl\u00e1ssico Pants","variants":[{"id":"black","name":"Preto"},{"id":"grey","name":"Cinza"},{"id":"beige","name":"Bege"},{"id":"navy","name":"Azul-marinho"},{"id":"wine","name":"Vinho"}]},{"id":"base","name":"Corpo","variants":[{"id":"lord-suit-pants","name":"Cal\u00e7a nobre"},{"id":"lords-pants","name":"Lords Pants"}]},{"id":"evening-bottom","name":"Evening Cal\u00e7a / saia","variants":[{"id":"black","name":"Preto"},{"id":"grey","name":"Cinza"},{"id":"beige","name":"Bege"},{"id":"navy","name":"Azul-marinho"},{"id":"wine","name":"Vinho"}]},{"id":"formal-bottoms","name":"Formal Bottoms F","variants":[{"id":"black","name":"Preto"},{"id":"brown","name":"Marrom"},{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"},{"id":"pink","name":"Rosa"},{"id":"grey","name":"Cinza"}]},{"id":"formal-pants","name":"Formal Pants","variants":[{"id":"black","name":"Preto"},{"id":"brown","name":"Marrom"},{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"},{"id":"grey","name":"Cinza"}]},{"id":"jeans","name":"Jeans","variants":[{"id":"black","name":"Preto"},{"id":"grey","name":"Cinza"},{"id":"navy","name":"Azul-marinho"},{"id":"aqua","name":"Aqua"},{"id":"light-blue","name":"Azul claro"}]},{"id":"classy-bottom","name":"Parte cl\u00e1ssica","variants":[{"id":"black","name":"Preto"},{"id":"brown","name":"Marrom"},{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"},{"id":"grey","name":"Cinza"},{"id":"beige","name":"Bege"},{"id":"navy","name":"Azul-marinho"},{"id":"wine","name":"Vinho"}]},{"id":"beach-bottom","name":"Parte de praia","variants":[{"id":"black","name":"Preto"},{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"},{"id":"green","name":"Verde"},{"id":"pink","name":"Rosa"}]},{"id":"ribbon-skirt","name":"Saia com la\u00e7o","variants":[{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"},{"id":"green","name":"Verde"},{"id":"pink","name":"Rosa"},{"id":"wine","name":"Vinho"}]},{"id":"long-skirt","name":"Saia longa","variants":[{"id":"black","name":"Preto"},{"id":"blue","name":"Azul"},{"id":"green","name":"Verde"},{"id":"pink","name":"Rosa"},{"id":"purple","name":"Roxo"}]},{"id":"pencil-skirt","name":"Saia l\u00e1pis","variants":[{"id":"black","name":"Preto"},{"id":"green","name":"Verde"},{"id":"grey","name":"Cinza"},{"id":"navy","name":"Azul-marinho"},{"id":"wine","name":"Vinho"}]},{"id":"school-girl","name":"School Girl","variants":[{"id":"light","name":"Clara"},{"id":"black","name":"Preto"}]},{"id":"shorts","name":"Shorts","variants":[{"id":"black","name":"Preto"},{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"},{"id":"green","name":"Verde"},{"id":"white","name":"Branco"}]},{"id":"school-uniform-bottom","name":"Uniforme escolar","variants":[{"id":"light","name":"Clara"},{"id":"dark","name":"Escura"}]}]},{"id":"top","label":"Roupa de cima","icon":"\u25e9","optional":false,"layer":30,"items":[{"id":"shirt-combo","name":"Camisa + casaco","variants":[{"id":"black","name":"Preto"},{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"},{"id":"white","name":"Branco"},{"id":"wine","name":"Vinho"}]},{"id":"scarf-shirt","name":"Camisa com cachecol","variants":[{"id":"black","name":"Preto"},{"id":"brown","name":"Marrom"},{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"},{"id":"yellow","name":"Amarelo"}]},{"id":"collared-shirt","name":"Camisa social","variants":[{"id":"black","name":"Preto"},{"id":"white","name":"Branco"},{"id":"navy","name":"Azul-marinho"},{"id":"wine","name":"Vinho"},{"id":"light-blue","name":"Azul claro"}]},{"id":"classy-top-f","name":"Cl\u00e1ssico Roupa de cima F","variants":[{"id":"black","name":"Preto"},{"id":"grey","name":"Cinza"},{"id":"beige","name":"Bege"},{"id":"navy","name":"Azul-marinho"},{"id":"wine","name":"Vinho"}]},{"id":"classy-top-m","name":"Cl\u00e1ssico Roupa de cima M","variants":[{"id":"black","name":"Preto"},{"id":"grey","name":"Cinza"},{"id":"beige","name":"Bege"},{"id":"navy","name":"Azul-marinho"},{"id":"wine","name":"Vinho"}]},{"id":"v-neck","name":"Gola V","variants":[{"id":"black","name":"Preto"},{"id":"green","name":"Verde"},{"id":"purple","name":"Roxo"},{"id":"yellow","name":"Amarelo"},{"id":"orange","name":"Laranja"}]},{"id":"open-jacket","name":"Jaqueta aberta","variants":[{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"},{"id":"green","name":"Verde"},{"id":"pink","name":"Rosa"},{"id":"orange","name":"Laranja"}]},{"id":"lord-suit-top","name":"Lord Suit Roupa de cima","variants":[{"id":"red","name":"Vermelho"},{"id":"purple","name":"Roxo"}]},{"id":"jumpsuit","name":"Macac\u00e3o","variants":[{"id":"black","name":"Preto"},{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"},{"id":"green","name":"Verde"},{"id":"yellow","name":"Amarelo"},{"id":"black-2","name":"Preto 2"}]},{"id":"jumpsuit-alt","name":"Macac\u00e3o alt.","variants":[{"id":"black","name":"Preto"},{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"},{"id":"green","name":"Verde"},{"id":"yellow","name":"Amarelo"}]},{"id":"hoodie","name":"Moletom","variants":[{"id":"black","name":"Preto"},{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"},{"id":"green","name":"Verde"},{"id":"purple","name":"Roxo"}]},{"id":"beach-top-f","name":"Praia Roupa de cima F","variants":[{"id":"black","name":"Preto"},{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"},{"id":"green","name":"Verde"},{"id":"pink","name":"Rosa"}]},{"id":"beach-top-m","name":"Praia Roupa de cima M","variants":[{"id":"black","name":"Preto"},{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"},{"id":"green","name":"Verde"},{"id":"pink","name":"Rosa"}]},{"id":"tank-top","name":"Regata","variants":[{"id":"black","name":"Preto"},{"id":"red","name":"Vermelho"},{"id":"green","name":"Verde"},{"id":"pink","name":"Rosa"},{"id":"navy","name":"Azul-marinho"}]},{"id":"scarf-top","name":"Scarf Roupa de cima","variants":[{"id":"black","name":"Preto"},{"id":"brown","name":"Marrom"},{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"},{"id":"yellow","name":"Amarelo"}]},{"id":"school-uniform-fm","name":"School Uniform Fm","variants":[{"id":"light","name":"Clara"},{"id":"dark","name":"Escura"}]},{"id":"trench-coat","name":"Sobretudo","variants":[{"id":"black","name":"Preto"},{"id":"brown","name":"Marrom"},{"id":"red","name":"Vermelho"},{"id":"purple","name":"Roxo"},{"id":"beige","name":"Bege"},{"id":"navy","name":"Azul-marinho"}]},{"id":"t-shirt","name":"T-shirt","variants":[{"id":"black","name":"Preto"},{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"},{"id":"green","name":"Verde"},{"id":"white","name":"Branco"}]},{"id":"classy","name":"Top cl\u00e1ssico","variants":[{"id":"black","name":"Preto"},{"id":"grey","name":"Cinza"},{"id":"beige","name":"Bege"},{"id":"navy","name":"Azul-marinho"},{"id":"wine","name":"Vinho"}]},{"id":"beach","name":"Top de praia","variants":[{"id":"black","name":"Preto"},{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"},{"id":"green","name":"Verde"},{"id":"pink","name":"Rosa"}]},{"id":"formal","name":"Top formal","variants":[{"id":"black","name":"Preto"},{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"},{"id":"pink","name":"Rosa"},{"id":"beige","name":"Bege"}]},{"id":"lord-suit","name":"Traje nobre","variants":[{"id":"red","name":"Vermelho"},{"id":"purple","name":"Roxo"}]},{"id":"turtleneck","name":"Turtleneck","variants":[{"id":"black","name":"Preto"},{"id":"green","name":"Verde"},{"id":"white","name":"Branco"},{"id":"beige","name":"Bege"},{"id":"wine","name":"Vinho"},{"id":"magenta","name":"Magenta"},{"id":"brownish","name":"Marrom"}]},{"id":"turtleneck-f","name":"Turtleneck F","variants":[{"id":"black","name":"Preto"},{"id":"green","name":"Verde"},{"id":"white","name":"Branco"},{"id":"beige","name":"Bege"},{"id":"wine","name":"Vinho"}]},{"id":"turtleneck-m","name":"Turtleneck M","variants":[{"id":"black","name":"Preto"},{"id":"green","name":"Verde"},{"id":"white","name":"Branco"},{"id":"beige","name":"Bege"},{"id":"wine","name":"Vinho"}]},{"id":"school-uniform","name":"Uniforme escolar","variants":[{"id":"light","name":"Clara"},{"id":"dark","name":"Escura"}]},{"id":"vest","name":"Vest","variants":[{"id":"black","name":"Preto"},{"id":"brown","name":"Marrom"},{"id":"blue","name":"Azul"},{"id":"grey","name":"Cinza"},{"id":"beige","name":"Bege"},{"id":"wine","name":"Vinho"}]}]},{"id":"hair","label":"Cabelo","icon":"\u2726","optional":false,"layer":40,"items":[{"id":"hair-1","name":"Cabelo 1","variants":[{"id":"black","name":"Preto"},{"id":"brown","name":"Marrom"},{"id":"blonde","name":"Loiro"},{"id":"ginger","name":"Ruivo"},{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"},{"id":"cyan","name":"Ciano"},{"id":"green","name":"Verde"},{"id":"pink","name":"Rosa"},{"id":"purple","name":"Roxo"},{"id":"violet","name":"Violeta"},{"id":"white","name":"Branco"}]},{"id":"hair-2","name":"Cabelo 2","variants":[{"id":"black","name":"Preto"},{"id":"brown","name":"Marrom"},{"id":"blonde","name":"Loiro"},{"id":"ginger","name":"Ruivo"},{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"},{"id":"cyan","name":"Ciano"},{"id":"green","name":"Verde"},{"id":"pink","name":"Rosa"},{"id":"purple","name":"Roxo"},{"id":"violet","name":"Violeta"},{"id":"white","name":"Branco"}]},{"id":"hair-3","name":"Cabelo 3","variants":[{"id":"black","name":"Preto"},{"id":"brown","name":"Marrom"},{"id":"blonde","name":"Loiro"},{"id":"ginger","name":"Ruivo"},{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"},{"id":"cyan","name":"Ciano"},{"id":"green","name":"Verde"},{"id":"pink","name":"Rosa"},{"id":"purple","name":"Roxo"},{"id":"white","name":"Branco"}]},{"id":"hair-4","name":"Cabelo 4","variants":[{"id":"black","name":"Preto"},{"id":"brown","name":"Marrom"},{"id":"blonde","name":"Loiro"},{"id":"ginger","name":"Ruivo"},{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"},{"id":"cyan","name":"Ciano"},{"id":"green","name":"Verde"},{"id":"pink","name":"Rosa"},{"id":"purple","name":"Roxo"},{"id":"white","name":"Branco"}]}]},{"id":"hat","label":"Chap\u00e9u / acess\u00f3rio","icon":"\u2605","optional":true,"layer":50,"items":[{"id":"beret","name":"Beret","variants":[{"id":"default","name":"Padr\u00e3o"}]},{"id":"bonnet","name":"Bonnet","variants":[{"id":"default","name":"Padr\u00e3o"}]},{"id":"youngster-hat","name":"Bon\u00e9 jovem","variants":[{"id":"blue","name":"Azul"},{"id":"yellow","name":"Amarelo"},{"id":"copy","name":"Copy"},{"id":"youngster-cap-bee","name":"Youngster Cap Bee"}]},{"id":"hair-band","name":"Cabelo Band","variants":[{"id":"default","name":"Padr\u00e3o"}]},{"id":"cat","name":"Cat","variants":[{"id":"default","name":"Padr\u00e3o"}]},{"id":"crown","name":"Coroa","variants":[{"id":"gold","name":"Dourado"},{"id":"silver","name":"Prata"}]},{"id":"base","name":"Corpo","variants":[{"id":"baguette","name":"Baguette"},{"id":"beret","name":"Beret"},{"id":"bonnet","name":"Bonnet"},{"id":"hair-band","name":"Cabelo Band"},{"id":"cat-ears","name":"Cat Ears"},{"id":"cate","name":"Cate"},{"id":"devil","name":"Devil"},{"id":"feather-hat","name":"Feather Acess\u00f3rio"},{"id":"fedora","name":"Fedora"},{"id":"hairband","name":"Hairband"},{"id":"headband","name":"Headband"},{"id":"mining","name":"Mining"},{"id":"poop","name":"Poop"},{"id":"ribbon","name":"Ribbon"},{"id":"straw-hat","name":"Straw Acess\u00f3rio"},{"id":"sun-hat","name":"Sun Acess\u00f3rio"}]},{"id":"devil","name":"Devil","variants":[{"id":"default","name":"Padr\u00e3o"}]},{"id":"feather-hat","name":"Feather Acess\u00f3rio","variants":[{"id":"default","name":"Padr\u00e3o"}]},{"id":"fedora","name":"Fedora","variants":[{"id":"default","name":"Padr\u00e3o"}]},{"id":"flower","name":"Flor","variants":[{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"}]},{"id":"beanie","name":"Gorro","variants":[{"id":"black","name":"Preto"},{"id":"purple","name":"Roxo"}]},{"id":"headband","name":"Headband","variants":[{"id":"default","name":"Padr\u00e3o"}]},{"id":"miner","name":"Miner","variants":[{"id":"default","name":"Padr\u00e3o"}]},{"id":"poop","name":"Poop","variants":[{"id":"default","name":"Padr\u00e3o"}]},{"id":"ribbon","name":"Ribbon","variants":[{"id":"default","name":"Padr\u00e3o"}]},{"id":"straw-hat","name":"Straw Acess\u00f3rio","variants":[{"id":"default","name":"Padr\u00e3o"}]},{"id":"sun-hat","name":"Sun Acess\u00f3rio","variants":[{"id":"default","name":"Padr\u00e3o"}]},{"id":"glasses","name":"\u00d3culos","variants":[{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"}]}]},{"id":"carry","label":"Bolsa / mochila","icon":"\u25c6","optional":true,"layer":60,"items":[{"id":"bag","name":"Bolsa","variants":[{"id":"black","name":"Preto"},{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"},{"id":"green","name":"Verde"},{"id":"purple","name":"Roxo"},{"id":"white","name":"Branco"},{"id":"yellow","name":"Amarelo"},{"id":"orange","name":"Laranja"},{"id":"magenta","name":"Magenta"}]},{"id":"rucksack","name":"Mochila","variants":[{"id":"black","name":"Preto"},{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"},{"id":"green","name":"Verde"},{"id":"purple","name":"Roxo"},{"id":"white","name":"Branco"},{"id":"yellow","name":"Amarelo"},{"id":"orange","name":"Laranja"},{"id":"magenta","name":"Magenta"}]},{"id":"sporty-backpack","name":"Mochila esportiva","variants":[{"id":"black","name":"Preto"},{"id":"red","name":"Vermelho"},{"id":"blue","name":"Azul"},{"id":"green","name":"Verde"},{"id":"purple","name":"Roxo"},{"id":"white","name":"Branco"},{"id":"yellow","name":"Amarelo"},{"id":"orange","name":"Laranja"},{"id":"magenta","name":"Magenta"}]}]}],"paths":{"front":{"female":{"body":{"base":{"light":"assets/front/female/body/base/light.png","pale":"assets/front/female/body/base/pale.png","dark":"assets/front/female/body/base/dark.png","medium":"assets/front/female/body/base/medium.png"}},"bottom":{"base":{"lords-pants":"assets/front/female/bottom/base/lords-pants.png"},"beach-bottom":{"black":"assets/front/female/bottom/beach-bottom/black.png","blue":"assets/front/female/bottom/beach-bottom/blue.png","green":"assets/front/female/bottom/beach-bottom/green.png","pink":"assets/front/female/bottom/beach-bottom/pink.png","red":"assets/front/female/bottom/beach-bottom/red.png"},"capris":{"aqua":"assets/front/female/bottom/capris/aqua.png","beige":"assets/front/female/bottom/capris/beige.png","black":"assets/front/female/bottom/capris/black.png","green":"assets/front/female/bottom/capris/green.png","navy":"assets/front/female/bottom/capris/navy.png"},"classy-bottom":{"black":"assets/front/female/bottom/classy-bottom/black.png","blue":"assets/front/female/bottom/classy-bottom/blue.png","brown":"assets/front/female/bottom/classy-bottom/brown.png","grey":"assets/front/female/bottom/classy-bottom/grey.png","red":"assets/front/female/bottom/classy-bottom/red.png"},"evening-bottom":{"beige":"assets/front/female/bottom/evening-bottom/beige.png","black":"assets/front/female/bottom/evening-bottom/black.png","grey":"assets/front/female/bottom/evening-bottom/grey.png","navy":"assets/front/female/bottom/evening-bottom/navy.png","wine":"assets/front/female/bottom/evening-bottom/wine.png"},"jeans":{"grey":"assets/front/female/bottom/jeans/grey.png","light-blue":"assets/front/female/bottom/jeans/light-blue.png","aqua":"assets/front/female/bottom/jeans/aqua.png","black":"assets/front/female/bottom/jeans/black.png","navy":"assets/front/female/bottom/jeans/navy.png"},"jumpsuit-pants":{"black":"assets/front/female/bottom/jumpsuit-pants/black.png","blue":"assets/front/female/bottom/jumpsuit-pants/blue.png","green":"assets/front/female/bottom/jumpsuit-pants/green.png","red":"assets/front/female/bottom/jumpsuit-pants/red.png","yellow":"assets/front/female/bottom/jumpsuit-pants/yellow.png"},"jumpsuit-pants-alt":{"black":"assets/front/female/bottom/jumpsuit-pants-alt/black.png","blue":"assets/front/female/bottom/jumpsuit-pants-alt/blue.png","green":"assets/front/female/bottom/jumpsuit-pants-alt/green.png","red":"assets/front/female/bottom/jumpsuit-pants-alt/red.png","yellow":"assets/front/female/bottom/jumpsuit-pants-alt/yellow.png"},"long-skirt":{"black":"assets/front/female/bottom/long-skirt/black.png","blue":"assets/front/female/bottom/long-skirt/blue.png","green":"assets/front/female/bottom/long-skirt/green.png","pink":"assets/front/female/bottom/long-skirt/pink.png","purple":"assets/front/female/bottom/long-skirt/purple.png"},"pants-and-boots":{"beige":"assets/front/female/bottom/pants-and-boots/beige.png","black":"assets/front/female/bottom/pants-and-boots/black.png","grey":"assets/front/female/bottom/pants-and-boots/grey.png","light-blue":"assets/front/female/bottom/pants-and-boots/light-blue.png","navy":"assets/front/female/bottom/pants-and-boots/navy.png"},"pencil-skirt":{"black":"assets/front/female/bottom/pencil-skirt/black.png","green":"assets/front/female/bottom/pencil-skirt/green.png","grey":"assets/front/female/bottom/pencil-skirt/grey.png","navy":"assets/front/female/bottom/pencil-skirt/navy.png","wine":"assets/front/female/bottom/pencil-skirt/wine.png"},"ribbon-skirt":{"blue":"assets/front/female/bottom/ribbon-skirt/blue.png","green":"assets/front/female/bottom/ribbon-skirt/green.png","pink":"assets/front/female/bottom/ribbon-skirt/pink.png","red":"assets/front/female/bottom/ribbon-skirt/red.png","wine":"assets/front/female/bottom/ribbon-skirt/wine.png"},"school-girl":{"black":"assets/front/female/bottom/school-girl/black.png","light":"assets/front/female/bottom/school-girl/light.png"},"shorts":{"black":"assets/front/female/bottom/shorts/black.png","blue":"assets/front/female/bottom/shorts/blue.png","green":"assets/front/female/bottom/shorts/green.png","red":"assets/front/female/bottom/shorts/red.png","white":"assets/front/female/bottom/shorts/white.png"}},"top":{"beach":{"black":"assets/front/female/top/beach/black.png","blue":"assets/front/female/top/beach/blue.png","green":"assets/front/female/top/beach/green.png","pink":"assets/front/female/top/beach/pink.png","red":"assets/front/female/top/beach/red.png"},"classy":{"beige":"assets/front/female/top/classy/beige.png","black":"assets/front/female/top/classy/black.png","grey":"assets/front/female/top/classy/grey.png","navy":"assets/front/female/top/classy/navy.png","wine":"assets/front/female/top/classy/wine.png"},"collared-shirt":{"navy":"assets/front/female/top/collared-shirt/navy.png","black":"assets/front/female/top/collared-shirt/black.png","light-blue":"assets/front/female/top/collared-shirt/light-blue.png","white":"assets/front/female/top/collared-shirt/white.png","wine":"assets/front/female/top/collared-shirt/wine.png"},"formal":{"beige":"assets/front/female/top/formal/beige.png","black":"assets/front/female/top/formal/black.png","blue":"assets/front/female/top/formal/blue.png","pink":"assets/front/female/top/formal/pink.png","red":"assets/front/female/top/formal/red.png"},"hoodie":{"black":"assets/front/female/top/hoodie/black.png","purple":"assets/front/female/top/hoodie/purple.png","blue":"assets/front/female/top/hoodie/blue.png","green":"assets/front/female/top/hoodie/green.png","red":"assets/front/female/top/hoodie/red.png"},"jumpsuit-alt":{"black":"assets/front/female/top/jumpsuit-alt/black.png","blue":"assets/front/female/top/jumpsuit-alt/blue.png","green":"assets/front/female/top/jumpsuit-alt/green.png","red":"assets/front/female/top/jumpsuit-alt/red.png","yellow":"assets/front/female/top/jumpsuit-alt/yellow.png"},"jumpsuit":{"black":"assets/front/female/top/jumpsuit/black.png","blue":"assets/front/female/top/jumpsuit/blue.png","green":"assets/front/female/top/jumpsuit/green.png","red":"assets/front/female/top/jumpsuit/red.png","yellow":"assets/front/female/top/jumpsuit/yellow.png"},"lord-suit":{"purple":"assets/front/female/top/lord-suit/purple.png","red":"assets/front/female/top/lord-suit/red.png"},"open-jacket":{"orange":"assets/front/female/top/open-jacket/orange.png","blue":"assets/front/female/top/open-jacket/blue.png","green":"assets/front/female/top/open-jacket/green.png","pink":"assets/front/female/top/open-jacket/pink.png","red":"assets/front/female/top/open-jacket/red.png"},"scarf-shirt":{"black":"assets/front/female/top/scarf-shirt/black.png","blue":"assets/front/female/top/scarf-shirt/blue.png","brown":"assets/front/female/top/scarf-shirt/brown.png","red":"assets/front/female/top/scarf-shirt/red.png","yellow":"assets/front/female/top/scarf-shirt/yellow.png"},"school-uniform":{"dark":"assets/front/female/top/school-uniform/dark.png","light":"assets/front/female/top/school-uniform/light.png"},"shirt-combo":{"black":"assets/front/female/top/shirt-combo/black.png","blue":"assets/front/female/top/shirt-combo/blue.png","red":"assets/front/female/top/shirt-combo/red.png","white":"assets/front/female/top/shirt-combo/white.png","wine":"assets/front/female/top/shirt-combo/wine.png"},"t-shirt":{"black":"assets/front/female/top/t-shirt/black.png","blue":"assets/front/female/top/t-shirt/blue.png","green":"assets/front/female/top/t-shirt/green.png","red":"assets/front/female/top/t-shirt/red.png","white":"assets/front/female/top/t-shirt/white.png"},"tank-top":{"pink":"assets/front/female/top/tank-top/pink.png","black":"assets/front/female/top/tank-top/black.png","green":"assets/front/female/top/tank-top/green.png","navy":"assets/front/female/top/tank-top/navy.png","red":"assets/front/female/top/tank-top/red.png"},"trench-coat":{"black":"assets/front/female/top/trench-coat/black.png","brown":"assets/front/female/top/trench-coat/brown.png","navy":"assets/front/female/top/trench-coat/navy.png","purple":"assets/front/female/top/trench-coat/purple.png","red":"assets/front/female/top/trench-coat/red.png"},"turtleneck":{"black":"assets/front/female/top/turtleneck/black.png","brownish":"assets/front/female/top/turtleneck/brownish.png","green":"assets/front/female/top/turtleneck/green.png","magenta":"assets/front/female/top/turtleneck/magenta.png","white":"assets/front/female/top/turtleneck/white.png"},"v-neck":{"green":"assets/front/female/top/v-neck/green.png","orange":"assets/front/female/top/v-neck/orange.png","purple":"assets/front/female/top/v-neck/purple.png","yellow":"assets/front/female/top/v-neck/yellow.png","black":"assets/front/female/top/v-neck/black.png"},"vest":{"grey":"assets/front/female/top/vest/grey.png","wine":"assets/front/female/top/vest/wine.png","black":"assets/front/female/top/vest/black.png","blue":"assets/front/female/top/vest/blue.png","brown":"assets/front/female/top/vest/brown.png"}},"hair":{"hair-1":{"black":"assets/front/female/hair/hair-1/black.png","blonde":"assets/front/female/hair/hair-1/blonde.png","blue":"assets/front/female/hair/hair-1/blue.png","brown":"assets/front/female/hair/hair-1/brown.png","cyan":"assets/front/female/hair/hair-1/cyan.png","ginger":"assets/front/female/hair/hair-1/ginger.png","green":"assets/front/female/hair/hair-1/green.png","pink":"assets/front/female/hair/hair-1/pink.png","red":"assets/front/female/hair/hair-1/red.png","violet":"assets/front/female/hair/hair-1/violet.png","white":"assets/front/female/hair/hair-1/white.png"},"hair-2":{"black":"assets/front/female/hair/hair-2/black.png","blue":"assets/front/female/hair/hair-2/blue.png","cyan":"assets/front/female/hair/hair-2/cyan.png","ginger":"assets/front/female/hair/hair-2/ginger.png","green":"assets/front/female/hair/hair-2/green.png","pink":"assets/front/female/hair/hair-2/pink.png","purple":"assets/front/female/hair/hair-2/purple.png","blonde":"assets/front/female/hair/hair-2/blonde.png","brown":"assets/front/female/hair/hair-2/brown.png","red":"assets/front/female/hair/hair-2/red.png","white":"assets/front/female/hair/hair-2/white.png"},"hair-3":{"black":"assets/front/female/hair/hair-3/black.png","blonde":"assets/front/female/hair/hair-3/blonde.png","blue":"assets/front/female/hair/hair-3/blue.png","brown":"assets/front/female/hair/hair-3/brown.png","cyan":"assets/front/female/hair/hair-3/cyan.png","ginger":"assets/front/female/hair/hair-3/ginger.png","green":"assets/front/female/hair/hair-3/green.png","pink":"assets/front/female/hair/hair-3/pink.png","purple":"assets/front/female/hair/hair-3/purple.png","red":"assets/front/female/hair/hair-3/red.png","white":"assets/front/female/hair/hair-3/white.png"},"hair-4":{"black":"assets/front/female/hair/hair-4/black.png","blonde":"assets/front/female/hair/hair-4/blonde.png","blue":"assets/front/female/hair/hair-4/blue.png","brown":"assets/front/female/hair/hair-4/brown.png","cyan":"assets/front/female/hair/hair-4/cyan.png","ginger":"assets/front/female/hair/hair-4/ginger.png","green":"assets/front/female/hair/hair-4/green.png","pink":"assets/front/female/hair/hair-4/pink.png","purple":"assets/front/female/hair/hair-4/purple.png","red":"assets/front/female/hair/hair-4/red.png","white":"assets/front/female/hair/hair-4/white.png"}},"hat":{"base":{"baguette":"assets/front/female/hat/base/baguette.png","bonnet":"assets/front/female/hat/base/bonnet.png","cate":"assets/front/female/hat/base/cate.png","devil":"assets/front/female/hat/base/devil.png","feather-hat":"assets/front/female/hat/base/feather-hat.png","fedora":"assets/front/female/hat/base/fedora.png","hair-band":"assets/front/female/hat/base/hair-band.png","headband":"assets/front/female/hat/base/headband.png","mining":"assets/front/female/hat/base/mining.png","poop":"assets/front/female/hat/base/poop.png","ribbon":"assets/front/female/hat/base/ribbon.png","straw-hat":"assets/front/female/hat/base/straw-hat.png","sun-hat":"assets/front/female/hat/base/sun-hat.png"},"beanie":{"black":"assets/front/female/hat/beanie/black.png","purple":"assets/front/female/hat/beanie/purple.png"},"crown":{"gold":"assets/front/female/hat/crown/gold.png","silver":"assets/front/female/hat/crown/silver.png"},"flower":{"blue":"assets/front/female/hat/flower/blue.png","red":"assets/front/female/hat/flower/red.png"},"glasses":{"blue":"assets/front/female/hat/glasses/blue.png","red":"assets/front/female/hat/glasses/red.png"},"youngster-hat":{"youngster-cap-bee":"assets/front/female/hat/youngster-hat/youngster-cap-bee.png","blue":"assets/front/female/hat/youngster-hat/blue.png"}}},"male":{"body":{"base":{"dark":"assets/front/male/body/base/dark.png","light":"assets/front/male/body/base/light.png","medium":"assets/front/male/body/base/medium.png","pale":"assets/front/male/body/base/pale.png"}},"bottom":{"base":{"lord-suit-pants":"assets/front/male/bottom/base/lord-suit-pants.png"},"beach-bottom":{"black":"assets/front/male/bottom/beach-bottom/black.png","blue":"assets/front/male/bottom/beach-bottom/blue.png","green":"assets/front/male/bottom/beach-bottom/green.png","pink":"assets/front/male/bottom/beach-bottom/pink.png","red":"assets/front/male/bottom/beach-bottom/red.png"},"capris":{"aqua":"assets/front/male/bottom/capris/aqua.png","beige":"assets/front/male/bottom/capris/beige.png","black":"assets/front/male/bottom/capris/black.png","green":"assets/front/male/bottom/capris/green.png","navy":"assets/front/male/bottom/capris/navy.png"},"classy-pants":{"beige":"assets/front/male/bottom/classy-pants/beige.png","black":"assets/front/male/bottom/classy-pants/black.png","grey":"assets/front/male/bottom/classy-pants/grey.png","navy":"assets/front/male/bottom/classy-pants/navy.png","wine":"assets/front/male/bottom/classy-pants/wine.png"},"formal-pants":{"black":"assets/front/male/bottom/formal-pants/black.png","blue":"assets/front/male/bottom/formal-pants/blue.png","brown":"assets/front/male/bottom/formal-pants/brown.png","grey":"assets/front/male/bottom/formal-pants/grey.png","red":"assets/front/male/bottom/formal-pants/red.png"},"jeans":{"aqua":"assets/front/male/bottom/jeans/aqua.png","black":"assets/front/male/bottom/jeans/black.png","grey":"assets/front/male/bottom/jeans/grey.png","light-blue":"assets/front/male/bottom/jeans/light-blue.png","navy":"assets/front/male/bottom/jeans/navy.png"},"jumpsuit-pants":{"black":"assets/front/male/bottom/jumpsuit-pants/black.png","blue":"assets/front/male/bottom/jumpsuit-pants/blue.png","green":"assets/front/male/bottom/jumpsuit-pants/green.png","red":"assets/front/male/bottom/jumpsuit-pants/red.png","yellow":"assets/front/male/bottom/jumpsuit-pants/yellow.png"},"jumpsuit-pants-alt":{"black":"assets/front/male/bottom/jumpsuit-pants-alt/black.png","blue":"assets/front/male/bottom/jumpsuit-pants-alt/blue.png","green":"assets/front/male/bottom/jumpsuit-pants-alt/green.png","red":"assets/front/male/bottom/jumpsuit-pants-alt/red.png","yellow":"assets/front/male/bottom/jumpsuit-pants-alt/yellow.png"},"long-skirt":{"black":"assets/front/male/bottom/long-skirt/black.png","blue":"assets/front/male/bottom/long-skirt/blue.png","green":"assets/front/male/bottom/long-skirt/green.png","pink":"assets/front/male/bottom/long-skirt/pink.png","purple":"assets/front/male/bottom/long-skirt/purple.png"},"pants-and-boots":{"beige":"assets/front/male/bottom/pants-and-boots/beige.png","black":"assets/front/male/bottom/pants-and-boots/black.png","grey":"assets/front/male/bottom/pants-and-boots/grey.png","light-blue":"assets/front/male/bottom/pants-and-boots/light-blue.png","navy":"assets/front/male/bottom/pants-and-boots/navy.png"},"pencil-skirt":{"black":"assets/front/male/bottom/pencil-skirt/black.png","green":"assets/front/male/bottom/pencil-skirt/green.png","grey":"assets/front/male/bottom/pencil-skirt/grey.png","navy":"assets/front/male/bottom/pencil-skirt/navy.png","wine":"assets/front/male/bottom/pencil-skirt/wine.png"},"ribbon-skirt":{"blue":"assets/front/male/bottom/ribbon-skirt/blue.png","green":"assets/front/male/bottom/ribbon-skirt/green.png","pink":"assets/front/male/bottom/ribbon-skirt/pink.png","red":"assets/front/male/bottom/ribbon-skirt/red.png","wine":"assets/front/male/bottom/ribbon-skirt/wine.png"},"school-uniform-bottom":{"dark":"assets/front/male/bottom/school-uniform-bottom/dark.png","light":"assets/front/male/bottom/school-uniform-bottom/light.png"},"shorts":{"black":"assets/front/male/bottom/shorts/black.png","blue":"assets/front/male/bottom/shorts/blue.png","green":"assets/front/male/bottom/shorts/green.png","red":"assets/front/male/bottom/shorts/red.png","white":"assets/front/male/bottom/shorts/white.png"}},"top":{"beach":{"black":"assets/front/male/top/beach/black.png","blue":"assets/front/male/top/beach/blue.png","green":"assets/front/male/top/beach/green.png","pink":"assets/front/male/top/beach/pink.png","red":"assets/front/male/top/beach/red.png"},"classy":{"beige":"assets/front/male/top/classy/beige.png","black":"assets/front/male/top/classy/black.png","grey":"assets/front/male/top/classy/grey.png","navy":"assets/front/male/top/classy/navy.png","wine":"assets/front/male/top/classy/wine.png"},"collared-shirt":{"black":"assets/front/male/top/collared-shirt/black.png","light-blue":"assets/front/male/top/collared-shirt/light-blue.png","navy":"assets/front/male/top/collared-shirt/navy.png","white":"assets/front/male/top/collared-shirt/white.png","wine":"assets/front/male/top/collared-shirt/wine.png"},"formal":{"black":"assets/front/male/top/formal/black.png","beige":"assets/front/male/top/formal/beige.png","blue":"assets/front/male/top/formal/blue.png","pink":"assets/front/male/top/formal/pink.png","red":"assets/front/male/top/formal/red.png"},"hoodie":{"black":"assets/front/male/top/hoodie/black.png","blue":"assets/front/male/top/hoodie/blue.png","green":"assets/front/male/top/hoodie/green.png","purple":"assets/front/male/top/hoodie/purple.png","red":"assets/front/male/top/hoodie/red.png"},"jumpsuit-alt":{"black":"assets/front/male/top/jumpsuit-alt/black.png","blue":"assets/front/male/top/jumpsuit-alt/blue.png","green":"assets/front/male/top/jumpsuit-alt/green.png","red":"assets/front/male/top/jumpsuit-alt/red.png","yellow":"assets/front/male/top/jumpsuit-alt/yellow.png"},"jumpsuit":{"black":"assets/front/male/top/jumpsuit/black.png","blue":"assets/front/male/top/jumpsuit/blue.png","green":"assets/front/male/top/jumpsuit/green.png","red":"assets/front/male/top/jumpsuit/red.png","yellow":"assets/front/male/top/jumpsuit/yellow.png"},"lord-suit-top":{"purple":"assets/front/male/top/lord-suit-top/purple.png","red":"assets/front/male/top/lord-suit-top/red.png"},"open-jacket":{"blue":"assets/front/male/top/open-jacket/blue.png","green":"assets/front/male/top/open-jacket/green.png","pink":"assets/front/male/top/open-jacket/pink.png","red":"assets/front/male/top/open-jacket/red.png","orange":"assets/front/male/top/open-jacket/orange.png"},"scarf-top":{"black":"assets/front/male/top/scarf-top/black.png","blue":"assets/front/male/top/scarf-top/blue.png","brown":"assets/front/male/top/scarf-top/brown.png","red":"assets/front/male/top/scarf-top/red.png","yellow":"assets/front/male/top/scarf-top/yellow.png"},"school-uniform":{"dark":"assets/front/male/top/school-uniform/dark.png","light":"assets/front/male/top/school-uniform/light.png"},"shirt-combo":{"black":"assets/front/male/top/shirt-combo/black.png","blue":"assets/front/male/top/shirt-combo/blue.png","red":"assets/front/male/top/shirt-combo/red.png","white":"assets/front/male/top/shirt-combo/white.png","wine":"assets/front/male/top/shirt-combo/wine.png"},"t-shirt":{"black":"assets/front/male/top/t-shirt/black.png","blue":"assets/front/male/top/t-shirt/blue.png","green":"assets/front/male/top/t-shirt/green.png","red":"assets/front/male/top/t-shirt/red.png","white":"assets/front/male/top/t-shirt/white.png"},"tank-top":{"black":"assets/front/male/top/tank-top/black.png","green":"assets/front/male/top/tank-top/green.png","navy":"assets/front/male/top/tank-top/navy.png","pink":"assets/front/male/top/tank-top/pink.png","red":"assets/front/male/top/tank-top/red.png"},"trench-coat":{"beige":"assets/front/male/top/trench-coat/beige.png","black":"assets/front/male/top/trench-coat/black.png","navy":"assets/front/male/top/trench-coat/navy.png","purple":"assets/front/male/top/trench-coat/purple.png","red":"assets/front/male/top/trench-coat/red.png"},"turtleneck":{"beige":"assets/front/male/top/turtleneck/beige.png","black":"assets/front/male/top/turtleneck/black.png","green":"assets/front/male/top/turtleneck/green.png","white":"assets/front/male/top/turtleneck/white.png","wine":"assets/front/male/top/turtleneck/wine.png"},"v-neck":{"black":"assets/front/male/top/v-neck/black.png","green":"assets/front/male/top/v-neck/green.png","orange":"assets/front/male/top/v-neck/orange.png","purple":"assets/front/male/top/v-neck/purple.png","yellow":"assets/front/male/top/v-neck/yellow.png"},"vest":{"beige":"assets/front/male/top/vest/beige.png","black":"assets/front/male/top/vest/black.png","blue":"assets/front/male/top/vest/blue.png","grey":"assets/front/male/top/vest/grey.png","wine":"assets/front/male/top/vest/wine.png"}},"hair":{"hair-1":{"black":"assets/front/male/hair/hair-1/black.png","blonde":"assets/front/male/hair/hair-1/blonde.png","blue":"assets/front/male/hair/hair-1/blue.png","brown":"assets/front/male/hair/hair-1/brown.png","cyan":"assets/front/male/hair/hair-1/cyan.png","ginger":"assets/front/male/hair/hair-1/ginger.png","green":"assets/front/male/hair/hair-1/green.png","pink":"assets/front/male/hair/hair-1/pink.png","purple":"assets/front/male/hair/hair-1/purple.png","red":"assets/front/male/hair/hair-1/red.png","white":"assets/front/male/hair/hair-1/white.png"},"hair-2":{"black":"assets/front/male/hair/hair-2/black.png","blonde":"assets/front/male/hair/hair-2/blonde.png","blue":"assets/front/male/hair/hair-2/blue.png","brown":"assets/front/male/hair/hair-2/brown.png","cyan":"assets/front/male/hair/hair-2/cyan.png","ginger":"assets/front/male/hair/hair-2/ginger.png","green":"assets/front/male/hair/hair-2/green.png","pink":"assets/front/male/hair/hair-2/pink.png","red":"assets/front/male/hair/hair-2/red.png","violet":"assets/front/male/hair/hair-2/violet.png","white":"assets/front/male/hair/hair-2/white.png"},"hair-3":{"black":"assets/front/male/hair/hair-3/black.png","blonde":"assets/front/male/hair/hair-3/blonde.png","blue":"assets/front/male/hair/hair-3/blue.png","brown":"assets/front/male/hair/hair-3/brown.png","cyan":"assets/front/male/hair/hair-3/cyan.png","ginger":"assets/front/male/hair/hair-3/ginger.png","green":"assets/front/male/hair/hair-3/green.png","pink":"assets/front/male/hair/hair-3/pink.png","purple":"assets/front/male/hair/hair-3/purple.png","red":"assets/front/male/hair/hair-3/red.png","white":"assets/front/male/hair/hair-3/white.png"},"hair-4":{"black":"assets/front/male/hair/hair-4/black.png","blonde":"assets/front/male/hair/hair-4/blonde.png","blue":"assets/front/male/hair/hair-4/blue.png","brown":"assets/front/male/hair/hair-4/brown.png","cyan":"assets/front/male/hair/hair-4/cyan.png","ginger":"assets/front/male/hair/hair-4/ginger.png","green":"assets/front/male/hair/hair-4/green.png","pink":"assets/front/male/hair/hair-4/pink.png","purple":"assets/front/male/hair/hair-4/purple.png","red":"assets/front/male/hair/hair-4/red.png","white":"assets/front/male/hair/hair-4/white.png"}},"hat":{"base":{"beret":"assets/front/male/hat/base/beret.png","bonnet":"assets/front/male/hat/base/bonnet.png","cat-ears":"assets/front/male/hat/base/cat-ears.png","devil":"assets/front/male/hat/base/devil.png","feather-hat":"assets/front/male/hat/base/feather-hat.png","fedora":"assets/front/male/hat/base/fedora.png","hair-band":"assets/front/male/hat/base/hair-band.png","headband":"assets/front/male/hat/base/headband.png","mining":"assets/front/male/hat/base/mining.png","poop":"assets/front/male/hat/base/poop.png","ribbon":"assets/front/male/hat/base/ribbon.png","straw-hat":"assets/front/male/hat/base/straw-hat.png","sun-hat":"assets/front/male/hat/base/sun-hat.png"},"beanie":{"black":"assets/front/male/hat/beanie/black.png","purple":"assets/front/male/hat/beanie/purple.png"},"crown":{"gold":"assets/front/male/hat/crown/gold.png","silver":"assets/front/male/hat/crown/silver.png"},"flower":{"blue":"assets/front/male/hat/flower/blue.png","red":"assets/front/male/hat/flower/red.png"},"glasses":{"blue":"assets/front/male/hat/glasses/blue.png","red":"assets/front/male/hat/glasses/red.png"},"youngster-hat":{"blue":"assets/front/male/hat/youngster-hat/blue.png","yellow":"assets/front/male/hat/youngster-hat/yellow.png"}}}},"back":{"female":{"body":{"base":{"dark":"assets/back/female/body/base/dark.png","light":"assets/back/female/body/base/light.png","medium":"assets/back/female/body/base/medium.png","pale":"assets/back/female/body/base/pale.png"}},"top":{"beach":{"black":"assets/back/female/top/beach/black.png","blue":"assets/back/female/top/beach/blue.png","green":"assets/back/female/top/beach/green.png","pink":"assets/back/female/top/beach/pink.png","red":"assets/back/female/top/beach/red.png"},"classy":{"beige":"assets/back/female/top/classy/beige.png","black":"assets/back/female/top/classy/black.png","grey":"assets/back/female/top/classy/grey.png","navy":"assets/back/female/top/classy/navy.png","wine":"assets/back/female/top/classy/wine.png"},"collared-shirt":{"black":"assets/back/female/top/collared-shirt/black.png","light-blue":"assets/back/female/top/collared-shirt/light-blue.png","navy":"assets/back/female/top/collared-shirt/navy.png","white":"assets/back/female/top/collared-shirt/white.png","wine":"assets/back/female/top/collared-shirt/wine.png"},"formal":{"beige":"assets/back/female/top/formal/beige.png","black":"assets/back/female/top/formal/black.png","blue":"assets/back/female/top/formal/blue.png","pink":"assets/back/female/top/formal/pink.png","red":"assets/back/female/top/formal/red.png"},"hoodie":{"black":"assets/back/female/top/hoodie/black.png","blue":"assets/back/female/top/hoodie/blue.png","green":"assets/back/female/top/hoodie/green.png","purple":"assets/back/female/top/hoodie/purple.png","red":"assets/back/female/top/hoodie/red.png"},"jumpsuit":{"black":"assets/back/female/top/jumpsuit/black.png","black-2":"assets/back/female/top/jumpsuit/black-2.png","blue":"assets/back/female/top/jumpsuit/blue.png","green":"assets/back/female/top/jumpsuit/green.png","red":"assets/back/female/top/jumpsuit/red.png"},"jumpsuit-alt":{"black":"assets/back/female/top/jumpsuit-alt/black.png","blue":"assets/back/female/top/jumpsuit-alt/blue.png","green":"assets/back/female/top/jumpsuit-alt/green.png","red":"assets/back/female/top/jumpsuit-alt/red.png","yellow":"assets/back/female/top/jumpsuit-alt/yellow.png"},"lord-suit":{"purple":"assets/back/female/top/lord-suit/purple.png","red":"assets/back/female/top/lord-suit/red.png"},"open-jacket":{"blue":"assets/back/female/top/open-jacket/blue.png","green":"assets/back/female/top/open-jacket/green.png","orange":"assets/back/female/top/open-jacket/orange.png","pink":"assets/back/female/top/open-jacket/pink.png","red":"assets/back/female/top/open-jacket/red.png"},"scarf-shirt":{"black":"assets/back/female/top/scarf-shirt/black.png","blue":"assets/back/female/top/scarf-shirt/blue.png","brown":"assets/back/female/top/scarf-shirt/brown.png","red":"assets/back/female/top/scarf-shirt/red.png","yellow":"assets/back/female/top/scarf-shirt/yellow.png"},"school-uniform":{"dark":"assets/back/female/top/school-uniform/dark.png","light":"assets/back/female/top/school-uniform/light.png"},"shirt-combo":{"black":"assets/back/female/top/shirt-combo/black.png","blue":"assets/back/female/top/shirt-combo/blue.png","red":"assets/back/female/top/shirt-combo/red.png","white":"assets/back/female/top/shirt-combo/white.png","wine":"assets/back/female/top/shirt-combo/wine.png"},"t-shirt":{"black":"assets/back/female/top/t-shirt/black.png","blue":"assets/back/female/top/t-shirt/blue.png","green":"assets/back/female/top/t-shirt/green.png","red":"assets/back/female/top/t-shirt/red.png","white":"assets/back/female/top/t-shirt/white.png"},"tank-top":{"black":"assets/back/female/top/tank-top/black.png","green":"assets/back/female/top/tank-top/green.png","navy":"assets/back/female/top/tank-top/navy.png","pink":"assets/back/female/top/tank-top/pink.png","red":"assets/back/female/top/tank-top/red.png"},"trench-coat":{"beige":"assets/back/female/top/trench-coat/beige.png","black":"assets/back/female/top/trench-coat/black.png","navy":"assets/back/female/top/trench-coat/navy.png","purple":"assets/back/female/top/trench-coat/purple.png","red":"assets/back/female/top/trench-coat/red.png"},"turtleneck":{"beige":"assets/back/female/top/turtleneck/beige.png","black":"assets/back/female/top/turtleneck/black.png","green":"assets/back/female/top/turtleneck/green.png","white":"assets/back/female/top/turtleneck/white.png","wine":"assets/back/female/top/turtleneck/wine.png"},"v-neck":{"black":"assets/back/female/top/v-neck/black.png","green":"assets/back/female/top/v-neck/green.png","orange":"assets/back/female/top/v-neck/orange.png","purple":"assets/back/female/top/v-neck/purple.png","yellow":"assets/back/female/top/v-neck/yellow.png"},"vest":{"beige":"assets/back/female/top/vest/beige.png","black":"assets/back/female/top/vest/black.png","blue":"assets/back/female/top/vest/blue.png","grey":"assets/back/female/top/vest/grey.png","wine":"assets/back/female/top/vest/wine.png"}},"hair":{"hair-1":{"black":"assets/back/female/hair/hair-1/black.png","blonde":"assets/back/female/hair/hair-1/blonde.png","blue":"assets/back/female/hair/hair-1/blue.png","brown":"assets/back/female/hair/hair-1/brown.png","cyan":"assets/back/female/hair/hair-1/cyan.png","ginger":"assets/back/female/hair/hair-1/ginger.png","green":"assets/back/female/hair/hair-1/green.png","pink":"assets/back/female/hair/hair-1/pink.png","purple":"assets/back/female/hair/hair-1/purple.png","red":"assets/back/female/hair/hair-1/red.png","white":"assets/back/female/hair/hair-1/white.png"},"hair-2":{"black":"assets/back/female/hair/hair-2/black.png","blonde":"assets/back/female/hair/hair-2/blonde.png","blue":"assets/back/female/hair/hair-2/blue.png","brown":"assets/back/female/hair/hair-2/brown.png","cyan":"assets/back/female/hair/hair-2/cyan.png","ginger":"assets/back/female/hair/hair-2/ginger.png","green":"assets/back/female/hair/hair-2/green.png","pink":"assets/back/female/hair/hair-2/pink.png","purple":"assets/back/female/hair/hair-2/purple.png","red":"assets/back/female/hair/hair-2/red.png","white":"assets/back/female/hair/hair-2/white.png"},"hair-3":{"black":"assets/back/female/hair/hair-3/black.png","blonde":"assets/back/female/hair/hair-3/blonde.png","blue":"assets/back/female/hair/hair-3/blue.png","brown":"assets/back/female/hair/hair-3/brown.png","cyan":"assets/back/female/hair/hair-3/cyan.png","ginger":"assets/back/female/hair/hair-3/ginger.png","green":"assets/back/female/hair/hair-3/green.png","pink":"assets/back/female/hair/hair-3/pink.png","purple":"assets/back/female/hair/hair-3/purple.png","red":"assets/back/female/hair/hair-3/red.png","white":"assets/back/female/hair/hair-3/white.png"},"hair-4":{"black":"assets/back/female/hair/hair-4/black.png","blonde":"assets/back/female/hair/hair-4/blonde.png","blue":"assets/back/female/hair/hair-4/blue.png","brown":"assets/back/female/hair/hair-4/brown.png","cyan":"assets/back/female/hair/hair-4/cyan.png","ginger":"assets/back/female/hair/hair-4/ginger.png","green":"assets/back/female/hair/hair-4/green.png","pink":"assets/back/female/hair/hair-4/pink.png","purple":"assets/back/female/hair/hair-4/purple.png","red":"assets/back/female/hair/hair-4/red.png","white":"assets/back/female/hair/hair-4/white.png"}},"hat":{"base":{"beret":"assets/back/female/hat/base/beret.png","bonnet":"assets/back/female/hat/base/bonnet.png","cat-ears":"assets/back/female/hat/base/cat-ears.png","devil":"assets/back/female/hat/base/devil.png","feather-hat":"assets/back/female/hat/base/feather-hat.png","fedora":"assets/back/female/hat/base/fedora.png","hairband":"assets/back/female/hat/base/hairband.png","headband":"assets/back/female/hat/base/headband.png","mining":"assets/back/female/hat/base/mining.png","poop":"assets/back/female/hat/base/poop.png","ribbon":"assets/back/female/hat/base/ribbon.png","straw-hat":"assets/back/female/hat/base/straw-hat.png","sun-hat":"assets/back/female/hat/base/sun-hat.png"},"beanie":{"black":"assets/back/female/hat/beanie/black.png","purple":"assets/back/female/hat/beanie/purple.png"},"crown":{"gold":"assets/back/female/hat/crown/gold.png","silver":"assets/back/female/hat/crown/silver.png"},"flower":{"blue":"assets/back/female/hat/flower/blue.png","red":"assets/back/female/hat/flower/red.png"},"glasses":{"blue":"assets/back/female/hat/glasses/blue.png","red":"assets/back/female/hat/glasses/red.png"},"youngster-hat":{"blue":"assets/back/female/hat/youngster-hat/blue.png","copy":"assets/back/female/hat/youngster-hat/copy.png"}}},"male":{"body":{"base":{"dark":"assets/back/male/body/base/dark.png","light":"assets/back/male/body/base/light.png","medium":"assets/back/male/body/base/medium.png","pale":"assets/back/male/body/base/pale.png"}},"top":{"beach":{"black":"assets/back/male/top/beach/black.png","blue":"assets/back/male/top/beach/blue.png","green":"assets/back/male/top/beach/green.png","pink":"assets/back/male/top/beach/pink.png","red":"assets/back/male/top/beach/red.png"},"classy":{"beige":"assets/back/male/top/classy/beige.png","black":"assets/back/male/top/classy/black.png","grey":"assets/back/male/top/classy/grey.png","navy":"assets/back/male/top/classy/navy.png","wine":"assets/back/male/top/classy/wine.png"},"collared-shirt":{"black":"assets/back/male/top/collared-shirt/black.png","light-blue":"assets/back/male/top/collared-shirt/light-blue.png","navy":"assets/back/male/top/collared-shirt/navy.png","white":"assets/back/male/top/collared-shirt/white.png","wine":"assets/back/male/top/collared-shirt/wine.png"},"formal":{"beige":"assets/back/male/top/formal/beige.png","black":"assets/back/male/top/formal/black.png","blue":"assets/back/male/top/formal/blue.png","pink":"assets/back/male/top/formal/pink.png","red":"assets/back/male/top/formal/red.png"},"hoodie":{"black":"assets/back/male/top/hoodie/black.png","blue":"assets/back/male/top/hoodie/blue.png","green":"assets/back/male/top/hoodie/green.png","purple":"assets/back/male/top/hoodie/purple.png","red":"assets/back/male/top/hoodie/red.png"},"jumpsuit":{"black":"assets/back/male/top/jumpsuit/black.png","black-2":"assets/back/male/top/jumpsuit/black-2.png","blue":"assets/back/male/top/jumpsuit/blue.png","green":"assets/back/male/top/jumpsuit/green.png","red":"assets/back/male/top/jumpsuit/red.png"},"jumpsuit-alt":{"black":"assets/back/male/top/jumpsuit-alt/black.png","blue":"assets/back/male/top/jumpsuit-alt/blue.png","green":"assets/back/male/top/jumpsuit-alt/green.png","red":"assets/back/male/top/jumpsuit-alt/red.png","yellow":"assets/back/male/top/jumpsuit-alt/yellow.png"},"lord-suit":{"purple":"assets/back/male/top/lord-suit/purple.png","red":"assets/back/male/top/lord-suit/red.png"},"open-jacket":{"blue":"assets/back/male/top/open-jacket/blue.png","green":"assets/back/male/top/open-jacket/green.png","orange":"assets/back/male/top/open-jacket/orange.png","pink":"assets/back/male/top/open-jacket/pink.png","red":"assets/back/male/top/open-jacket/red.png"},"scarf-shirt":{"black":"assets/back/male/top/scarf-shirt/black.png","blue":"assets/back/male/top/scarf-shirt/blue.png","brown":"assets/back/male/top/scarf-shirt/brown.png","red":"assets/back/male/top/scarf-shirt/red.png","yellow":"assets/back/male/top/scarf-shirt/yellow.png"},"school-uniform":{"dark":"assets/back/male/top/school-uniform/dark.png","light":"assets/back/male/top/school-uniform/light.png"},"shirt-combo":{"black":"assets/back/male/top/shirt-combo/black.png","blue":"assets/back/male/top/shirt-combo/blue.png","red":"assets/back/male/top/shirt-combo/red.png","white":"assets/back/male/top/shirt-combo/white.png","wine":"assets/back/male/top/shirt-combo/wine.png"},"t-shirt":{"black":"assets/back/male/top/t-shirt/black.png","blue":"assets/back/male/top/t-shirt/blue.png","green":"assets/back/male/top/t-shirt/green.png","red":"assets/back/male/top/t-shirt/red.png","white":"assets/back/male/top/t-shirt/white.png"},"tank-top":{"black":"assets/back/male/top/tank-top/black.png","green":"assets/back/male/top/tank-top/green.png","navy":"assets/back/male/top/tank-top/navy.png","pink":"assets/back/male/top/tank-top/pink.png","red":"assets/back/male/top/tank-top/red.png"},"trench-coat":{"beige":"assets/back/male/top/trench-coat/beige.png","black":"assets/back/male/top/trench-coat/black.png","navy":"assets/back/male/top/trench-coat/navy.png","purple":"assets/back/male/top/trench-coat/purple.png","red":"assets/back/male/top/trench-coat/red.png"},"turtleneck":{"beige":"assets/back/male/top/turtleneck/beige.png","black":"assets/back/male/top/turtleneck/black.png","green":"assets/back/male/top/turtleneck/green.png","white":"assets/back/male/top/turtleneck/white.png","wine":"assets/back/male/top/turtleneck/wine.png"},"v-neck":{"black":"assets/back/male/top/v-neck/black.png","green":"assets/back/male/top/v-neck/green.png","orange":"assets/back/male/top/v-neck/orange.png","purple":"assets/back/male/top/v-neck/purple.png","yellow":"assets/back/male/top/v-neck/yellow.png"},"vest":{"beige":"assets/back/male/top/vest/beige.png","black":"assets/back/male/top/vest/black.png","blue":"assets/back/male/top/vest/blue.png","grey":"assets/back/male/top/vest/grey.png","wine":"assets/back/male/top/vest/wine.png"}},"hair":{"hair-1":{"black":"assets/back/male/hair/hair-1/black.png","blonde":"assets/back/male/hair/hair-1/blonde.png","blue":"assets/back/male/hair/hair-1/blue.png","brown":"assets/back/male/hair/hair-1/brown.png","cyan":"assets/back/male/hair/hair-1/cyan.png","ginger":"assets/back/male/hair/hair-1/ginger.png","green":"assets/back/male/hair/hair-1/green.png","pink":"assets/back/male/hair/hair-1/pink.png","purple":"assets/back/male/hair/hair-1/purple.png","red":"assets/back/male/hair/hair-1/red.png","white":"assets/back/male/hair/hair-1/white.png"},"hair-2":{"black":"assets/back/male/hair/hair-2/black.png","blonde":"assets/back/male/hair/hair-2/blonde.png","blue":"assets/back/male/hair/hair-2/blue.png","brown":"assets/back/male/hair/hair-2/brown.png","cyan":"assets/back/male/hair/hair-2/cyan.png","ginger":"assets/back/male/hair/hair-2/ginger.png","green":"assets/back/male/hair/hair-2/green.png","pink":"assets/back/male/hair/hair-2/pink.png","purple":"assets/back/male/hair/hair-2/purple.png","red":"assets/back/male/hair/hair-2/red.png","white":"assets/back/male/hair/hair-2/white.png"},"hair-3":{"black":"assets/back/male/hair/hair-3/black.png","blonde":"assets/back/male/hair/hair-3/blonde.png","blue":"assets/back/male/hair/hair-3/blue.png","brown":"assets/back/male/hair/hair-3/brown.png","cyan":"assets/back/male/hair/hair-3/cyan.png","ginger":"assets/back/male/hair/hair-3/ginger.png","green":"assets/back/male/hair/hair-3/green.png","pink":"assets/back/male/hair/hair-3/pink.png","purple":"assets/back/male/hair/hair-3/purple.png","red":"assets/back/male/hair/hair-3/red.png","white":"assets/back/male/hair/hair-3/white.png"},"hair-4":{"black":"assets/back/male/hair/hair-4/black.png","blonde":"assets/back/male/hair/hair-4/blonde.png","blue":"assets/back/male/hair/hair-4/blue.png","brown":"assets/back/male/hair/hair-4/brown.png","cyan":"assets/back/male/hair/hair-4/cyan.png","ginger":"assets/back/male/hair/hair-4/ginger.png","green":"assets/back/male/hair/hair-4/green.png","pink":"assets/back/male/hair/hair-4/pink.png","purple":"assets/back/male/hair/hair-4/purple.png","red":"assets/back/male/hair/hair-4/red.png","white":"assets/back/male/hair/hair-4/white.png"}},"hat":{"base":{"beret":"assets/back/male/hat/base/beret.png","bonnet":"assets/back/male/hat/base/bonnet.png","cat-ears":"assets/back/male/hat/base/cat-ears.png","devil":"assets/back/male/hat/base/devil.png","feather-hat":"assets/back/male/hat/base/feather-hat.png","fedora":"assets/back/male/hat/base/fedora.png","hairband":"assets/back/male/hat/base/hairband.png","headband":"assets/back/male/hat/base/headband.png","mining":"assets/back/male/hat/base/mining.png","poop":"assets/back/male/hat/base/poop.png","ribbon":"assets/back/male/hat/base/ribbon.png","straw-hat":"assets/back/male/hat/base/straw-hat.png","sun-hat":"assets/back/male/hat/base/sun-hat.png"},"beanie":{"black":"assets/back/male/hat/beanie/black.png","purple":"assets/back/male/hat/beanie/purple.png"},"crown":{"gold":"assets/back/male/hat/crown/gold.png","silver":"assets/back/male/hat/crown/silver.png"},"flower":{"blue":"assets/back/male/hat/flower/blue.png","red":"assets/back/male/hat/flower/red.png"},"glasses":{"blue":"assets/back/male/hat/glasses/blue.png","red":"assets/back/male/hat/glasses/red.png"},"youngster-hat":{"blue":"assets/back/male/hat/youngster-hat/blue.png","copy":"assets/back/male/hat/youngster-hat/copy.png"}}}},"walk":{"female":{"body":{"base":{"dark":"assets/walk/female/body/base/dark.png","light":"assets/walk/female/body/base/light.png","medium":"assets/walk/female/body/base/medium.png","pale":"assets/walk/female/body/base/pale.png"}},"bottom":{"beach-bottom":{"black":"assets/walk/female/bottom/beach-bottom/black.png","blue":"assets/walk/female/bottom/beach-bottom/blue.png","green":"assets/walk/female/bottom/beach-bottom/green.png","pink":"assets/walk/female/bottom/beach-bottom/pink.png","red":"assets/walk/female/bottom/beach-bottom/red.png","black-2":"assets/walk/female/bottom/beach-bottom/black-2.png","blue-2":"assets/walk/female/bottom/beach-bottom/blue-2.png","green-2":"assets/walk/female/bottom/beach-bottom/green-2.png","pink-2":"assets/walk/female/bottom/beach-bottom/pink-2.png","red-2":"assets/walk/female/bottom/beach-bottom/red-2.png"},"capris":{"aqua":"assets/walk/female/bottom/capris/aqua.png","beige":"assets/walk/female/bottom/capris/beige.png","black":"assets/walk/female/bottom/capris/black.png","green":"assets/walk/female/bottom/capris/green.png","navy":"assets/walk/female/bottom/capris/navy.png"},"classy-bottom":{"beige":"assets/walk/female/bottom/classy-bottom/beige.png","black":"assets/walk/female/bottom/classy-bottom/black.png","grey":"assets/walk/female/bottom/classy-bottom/grey.png","navy":"assets/walk/female/bottom/classy-bottom/navy.png","wine":"assets/walk/female/bottom/classy-bottom/wine.png","beige-2":"assets/walk/female/bottom/classy-bottom/beige-2.png","black-2":"assets/walk/female/bottom/classy-bottom/black-2.png","grey-2":"assets/walk/female/bottom/classy-bottom/grey-2.png","navy-2":"assets/walk/female/bottom/classy-bottom/navy-2.png","wine-2":"assets/walk/female/bottom/classy-bottom/wine-2.png"},"formal-bottoms":{"black":"assets/walk/female/bottom/formal-bottoms/black.png","blue":"assets/walk/female/bottom/formal-bottoms/blue.png","brown":"assets/walk/female/bottom/formal-bottoms/brown.png","grey":"assets/walk/female/bottom/formal-bottoms/grey.png","red":"assets/walk/female/bottom/formal-bottoms/red.png","black-2":"assets/walk/female/bottom/formal-bottoms/black-2.png","blue-2":"assets/walk/female/bottom/formal-bottoms/blue-2.png","brown-2":"assets/walk/female/bottom/formal-bottoms/brown-2.png","grey-2":"assets/walk/female/bottom/formal-bottoms/grey-2.png","pink":"assets/walk/female/bottom/formal-bottoms/pink.png"},"jeans":{"aqua":"assets/walk/female/bottom/jeans/aqua.png","black":"assets/walk/female/bottom/jeans/black.png","grey":"assets/walk/female/bottom/jeans/grey.png","light-blue":"assets/walk/female/bottom/jeans/light-blue.png","navy":"assets/walk/female/bottom/jeans/navy.png"},"jumpsuit-pants":{"black":"assets/walk/female/bottom/jumpsuit-pants/black.png","blue":"assets/walk/female/bottom/jumpsuit-pants/blue.png","green":"assets/walk/female/bottom/jumpsuit-pants/green.png","red":"assets/walk/female/bottom/jumpsuit-pants/red.png","yellow":"assets/walk/female/bottom/jumpsuit-pants/yellow.png"},"jumpsuit-pants-alt":{"black":"assets/walk/female/bottom/jumpsuit-pants-alt/black.png","blue":"assets/walk/female/bottom/jumpsuit-pants-alt/blue.png","green":"assets/walk/female/bottom/jumpsuit-pants-alt/green.png","red":"assets/walk/female/bottom/jumpsuit-pants-alt/red.png","yellow":"assets/walk/female/bottom/jumpsuit-pants-alt/yellow.png"},"long-skirt":{"black":"assets/walk/female/bottom/long-skirt/black.png","blue":"assets/walk/female/bottom/long-skirt/blue.png","green":"assets/walk/female/bottom/long-skirt/green.png","pink":"assets/walk/female/bottom/long-skirt/pink.png","purple":"assets/walk/female/bottom/long-skirt/purple.png"},"pants-and-boots":{"beige":"assets/walk/female/bottom/pants-and-boots/beige.png","black":"assets/walk/female/bottom/pants-and-boots/black.png","grey":"assets/walk/female/bottom/pants-and-boots/grey.png","light-blue":"assets/walk/female/bottom/pants-and-boots/light-blue.png","navy":"assets/walk/female/bottom/pants-and-boots/navy.png"},"pencil-skirt":{"black":"assets/walk/female/bottom/pencil-skirt/black.png","green":"assets/walk/female/bottom/pencil-skirt/green.png","grey":"assets/walk/female/bottom/pencil-skirt/grey.png","navy":"assets/walk/female/bottom/pencil-skirt/navy.png","wine":"assets/walk/female/bottom/pencil-skirt/wine.png"},"ribbon-skirt":{"blue":"assets/walk/female/bottom/ribbon-skirt/blue.png","green":"assets/walk/female/bottom/ribbon-skirt/green.png","pink":"assets/walk/female/bottom/ribbon-skirt/pink.png","red":"assets/walk/female/bottom/ribbon-skirt/red.png","wine":"assets/walk/female/bottom/ribbon-skirt/wine.png"},"school-uniform-bottom":{"dark":"assets/walk/female/bottom/school-uniform-bottom/dark.png","light":"assets/walk/female/bottom/school-uniform-bottom/light.png","dark-2":"assets/walk/female/bottom/school-uniform-bottom/dark-2.png","light-2":"assets/walk/female/bottom/school-uniform-bottom/light-2.png"},"shorts":{"black":"assets/walk/female/bottom/shorts/black.png","blue":"assets/walk/female/bottom/shorts/blue.png","green":"assets/walk/female/bottom/shorts/green.png","red":"assets/walk/female/bottom/shorts/red.png","white":"assets/walk/female/bottom/shorts/white.png"},"lord-suit-pants":{"default":"assets/walk/female/bottom/lord-suit-pants/default.png"}},"top":{"beach-top-f":{"black":"assets/walk/female/top/beach-top-f/black.png","blue":"assets/walk/female/top/beach-top-f/blue.png","green":"assets/walk/female/top/beach-top-f/green.png","pink":"assets/walk/female/top/beach-top-f/pink.png","red":"assets/walk/female/top/beach-top-f/red.png"},"beach-top-m":{"black":"assets/walk/female/top/beach-top-m/black.png","blue":"assets/walk/female/top/beach-top-m/blue.png","pink":"assets/walk/female/top/beach-top-m/pink.png","red":"assets/walk/female/top/beach-top-m/red.png","green":"assets/walk/female/top/beach-top-m/green.png"},"classy-top-f":{"beige":"assets/walk/female/top/classy-top-f/beige.png","black":"assets/walk/female/top/classy-top-f/black.png","grey":"assets/walk/female/top/classy-top-f/grey.png","navy":"assets/walk/female/top/classy-top-f/navy.png","wine":"assets/walk/female/top/classy-top-f/wine.png"},"classy-top-m":{"beige":"assets/walk/female/top/classy-top-m/beige.png","black":"assets/walk/female/top/classy-top-m/black.png","grey":"assets/walk/female/top/classy-top-m/grey.png","navy":"assets/walk/female/top/classy-top-m/navy.png","wine":"assets/walk/female/top/classy-top-m/wine.png"},"collared-shirt":{"black":"assets/walk/female/top/collared-shirt/black.png","light-blue":"assets/walk/female/top/collared-shirt/light-blue.png","navy":"assets/walk/female/top/collared-shirt/navy.png","white":"assets/walk/female/top/collared-shirt/white.png","wine":"assets/walk/female/top/collared-shirt/wine.png"},"formal":{"black":"assets/walk/female/top/formal/black.png","beige":"assets/walk/female/top/formal/beige.png","blue":"assets/walk/female/top/formal/blue.png","pink":"assets/walk/female/top/formal/pink.png","red":"assets/walk/female/top/formal/red.png"},"hoodie":{"black":"assets/walk/female/top/hoodie/black.png","blue":"assets/walk/female/top/hoodie/blue.png","green":"assets/walk/female/top/hoodie/green.png","purple":"assets/walk/female/top/hoodie/purple.png","red":"assets/walk/female/top/hoodie/red.png"},"jumpsuit-alt":{"blue":"assets/walk/female/top/jumpsuit-alt/blue.png","green":"assets/walk/female/top/jumpsuit-alt/green.png","red":"assets/walk/female/top/jumpsuit-alt/red.png","black":"assets/walk/female/top/jumpsuit-alt/black.png","yellow":"assets/walk/female/top/jumpsuit-alt/yellow.png"},"jumpsuit":{"black":"assets/walk/female/top/jumpsuit/black.png","blue":"assets/walk/female/top/jumpsuit/blue.png","green":"assets/walk/female/top/jumpsuit/green.png","red":"assets/walk/female/top/jumpsuit/red.png","yellow":"assets/walk/female/top/jumpsuit/yellow.png"},"lord-suit-top":{"purple":"assets/walk/female/top/lord-suit-top/purple.png","red":"assets/walk/female/top/lord-suit-top/red.png"},"open-jacket":{"blue":"assets/walk/female/top/open-jacket/blue.png","green":"assets/walk/female/top/open-jacket/green.png","orange":"assets/walk/female/top/open-jacket/orange.png","pink":"assets/walk/female/top/open-jacket/pink.png","red":"assets/walk/female/top/open-jacket/red.png"},"scarf-shirt":{"black":"assets/walk/female/top/scarf-shirt/black.png","blue":"assets/walk/female/top/scarf-shirt/blue.png","brown":"assets/walk/female/top/scarf-shirt/brown.png","red":"assets/walk/female/top/scarf-shirt/red.png","yellow":"assets/walk/female/top/scarf-shirt/yellow.png"},"school-uniform-fm":{"dark":"assets/walk/female/top/school-uniform-fm/dark.png","light":"assets/walk/female/top/school-uniform-fm/light.png","light-2":"assets/walk/female/top/school-uniform-fm/light-2.png","dark-2":"assets/walk/female/top/school-uniform-fm/dark-2.png"},"shirt-combo":{"black":"assets/walk/female/top/shirt-combo/black.png","blue":"assets/walk/female/top/shirt-combo/blue.png","red":"assets/walk/female/top/shirt-combo/red.png","white":"assets/walk/female/top/shirt-combo/white.png","wine":"assets/walk/female/top/shirt-combo/wine.png"},"t-shirt":{"black":"assets/walk/female/top/t-shirt/black.png","blue":"assets/walk/female/top/t-shirt/blue.png","green":"assets/walk/female/top/t-shirt/green.png","red":"assets/walk/female/top/t-shirt/red.png","white":"assets/walk/female/top/t-shirt/white.png"},"tank-top":{"black":"assets/walk/female/top/tank-top/black.png","green":"assets/walk/female/top/tank-top/green.png","navy":"assets/walk/female/top/tank-top/navy.png","pink":"assets/walk/female/top/tank-top/pink.png","red":"assets/walk/female/top/tank-top/red.png"},"trench-coat":{"beige":"assets/walk/female/top/trench-coat/beige.png","black":"assets/walk/female/top/trench-coat/black.png","navy":"assets/walk/female/top/trench-coat/navy.png","purple":"assets/walk/female/top/trench-coat/purple.png","red":"assets/walk/female/top/trench-coat/red.png"},"turtleneck-f":{"beige":"assets/walk/female/top/turtleneck-f/beige.png","black":"assets/walk/female/top/turtleneck-f/black.png","green":"assets/walk/female/top/turtleneck-f/green.png","white":"assets/walk/female/top/turtleneck-f/white.png","wine":"assets/walk/female/top/turtleneck-f/wine.png"},"turtleneck-m":{"beige":"assets/walk/female/top/turtleneck-m/beige.png","wine":"assets/walk/female/top/turtleneck-m/wine.png","black":"assets/walk/female/top/turtleneck-m/black.png","green":"assets/walk/female/top/turtleneck-m/green.png","white":"assets/walk/female/top/turtleneck-m/white.png"},"v-neck":{"black":"assets/walk/female/top/v-neck/black.png","green":"assets/walk/female/top/v-neck/green.png","orange":"assets/walk/female/top/v-neck/orange.png","purple":"assets/walk/female/top/v-neck/purple.png","yellow":"assets/walk/female/top/v-neck/yellow.png"},"vest":{"black":"assets/walk/female/top/vest/black.png","blue":"assets/walk/female/top/vest/blue.png","brown":"assets/walk/female/top/vest/brown.png","grey":"assets/walk/female/top/vest/grey.png","wine":"assets/walk/female/top/vest/wine.png"}},"hat":{"beanie":{"black":"assets/walk/female/hat/beanie/black.png","purple":"assets/walk/female/hat/beanie/purple.png"},"crown":{"gold":"assets/walk/female/hat/crown/gold.png","silver":"assets/walk/female/hat/crown/silver.png"},"flower":{"blue":"assets/walk/female/hat/flower/blue.png","red":"assets/walk/female/hat/flower/red.png"},"glasses":{"blue":"assets/walk/female/hat/glasses/blue.png","red":"assets/walk/female/hat/glasses/red.png"},"youngster-hat":{"blue":"assets/walk/female/hat/youngster-hat/blue.png","yellow":"assets/walk/female/hat/youngster-hat/yellow.png"},"beret":{"default":"assets/walk/female/hat/beret/default.png"},"bonnet":{"default":"assets/walk/female/hat/bonnet/default.png"},"cat":{"default":"assets/walk/female/hat/cat/default.png"},"devil":{"default":"assets/walk/female/hat/devil/default.png"},"feather-hat":{"default":"assets/walk/female/hat/feather-hat/default.png"},"fedora":{"default":"assets/walk/female/hat/fedora/default.png"},"hair-band":{"default":"assets/walk/female/hat/hair-band/default.png"},"headband":{"default":"assets/walk/female/hat/headband/default.png"},"miner":{"default":"assets/walk/female/hat/miner/default.png"},"poop":{"default":"assets/walk/female/hat/poop/default.png"},"ribbon":{"default":"assets/walk/female/hat/ribbon/default.png"},"straw-hat":{"default":"assets/walk/female/hat/straw-hat/default.png"},"sun-hat":{"default":"assets/walk/female/hat/sun-hat/default.png"}},"carry":{"bag":{"black":"assets/walk/female/carry/bag/black.png","blue":"assets/walk/female/carry/bag/blue.png","green":"assets/walk/female/carry/bag/green.png","magenta":"assets/walk/female/carry/bag/magenta.png","orange":"assets/walk/female/carry/bag/orange.png","purple":"assets/walk/female/carry/bag/purple.png","red":"assets/walk/female/carry/bag/red.png","white":"assets/walk/female/carry/bag/white.png","yellow":"assets/walk/female/carry/bag/yellow.png"},"rucksack":{"red":"assets/walk/female/carry/rucksack/red.png","black":"assets/walk/female/carry/rucksack/black.png","blue":"assets/walk/female/carry/rucksack/blue.png","green":"assets/walk/female/carry/rucksack/green.png","magenta":"assets/walk/female/carry/rucksack/magenta.png","orange":"assets/walk/female/carry/rucksack/orange.png","purple":"assets/walk/female/carry/rucksack/purple.png","white":"assets/walk/female/carry/rucksack/white.png","yellow":"assets/walk/female/carry/rucksack/yellow.png"},"sporty-backpack":{"black":"assets/walk/female/carry/sporty-backpack/black.png","blue":"assets/walk/female/carry/sporty-backpack/blue.png","green":"assets/walk/female/carry/sporty-backpack/green.png","magenta":"assets/walk/female/carry/sporty-backpack/magenta.png","orange":"assets/walk/female/carry/sporty-backpack/orange.png","purple":"assets/walk/female/carry/sporty-backpack/purple.png","red":"assets/walk/female/carry/sporty-backpack/red.png","white":"assets/walk/female/carry/sporty-backpack/white.png","yellow":"assets/walk/female/carry/sporty-backpack/yellow.png"}},"hair":{"hair-3":{"black":"assets/walk/female/hair/hair-3/black.png","blonde":"assets/walk/female/hair/hair-3/blonde.png","blue":"assets/walk/female/hair/hair-3/blue.png","brown":"assets/walk/female/hair/hair-3/brown.png","cyan":"assets/walk/female/hair/hair-3/cyan.png","ginger":"assets/walk/female/hair/hair-3/ginger.png","green":"assets/walk/female/hair/hair-3/green.png","pink":"assets/walk/female/hair/hair-3/pink.png","purple":"assets/walk/female/hair/hair-3/purple.png","red":"assets/walk/female/hair/hair-3/red.png","white":"assets/walk/female/hair/hair-3/white.png"},"hair-1":{"black":"assets/walk/female/hair/hair-1/black.png","cyan":"assets/walk/female/hair/hair-1/cyan.png","blonde":"assets/walk/female/hair/hair-1/blonde.png","blue":"assets/walk/female/hair/hair-1/blue.png","brown":"assets/walk/female/hair/hair-1/brown.png","ginger":"assets/walk/female/hair/hair-1/ginger.png","green":"assets/walk/female/hair/hair-1/green.png","pink":"assets/walk/female/hair/hair-1/pink.png","purple":"assets/walk/female/hair/hair-1/purple.png","red":"assets/walk/female/hair/hair-1/red.png","white":"assets/walk/female/hair/hair-1/white.png"},"hair-2":{"black":"assets/walk/female/hair/hair-2/black.png","blonde":"assets/walk/female/hair/hair-2/blonde.png","blue":"assets/walk/female/hair/hair-2/blue.png","brown":"assets/walk/female/hair/hair-2/brown.png","cyan":"assets/walk/female/hair/hair-2/cyan.png","green":"assets/walk/female/hair/hair-2/green.png","pink":"assets/walk/female/hair/hair-2/pink.png","red":"assets/walk/female/hair/hair-2/red.png","violet":"assets/walk/female/hair/hair-2/violet.png","white":"assets/walk/female/hair/hair-2/white.png","ginger":"assets/walk/female/hair/hair-2/ginger.png"},"hair-4":{"black":"assets/walk/female/hair/hair-4/black.png","blonde":"assets/walk/female/hair/hair-4/blonde.png","blue":"assets/walk/female/hair/hair-4/blue.png","brown":"assets/walk/female/hair/hair-4/brown.png","cyan":"assets/walk/female/hair/hair-4/cyan.png","ginger":"assets/walk/female/hair/hair-4/ginger.png","green":"assets/walk/female/hair/hair-4/green.png","pink":"assets/walk/female/hair/hair-4/pink.png","purple":"assets/walk/female/hair/hair-4/purple.png","red":"assets/walk/female/hair/hair-4/red.png","white":"assets/walk/female/hair/hair-4/white.png"}}},"male":{"body":{"base":{"dark":"assets/walk/male/body/base/dark.png","light":"assets/walk/male/body/base/light.png","medium":"assets/walk/male/body/base/medium.png","pale":"assets/walk/male/body/base/pale.png"}},"bottom":{"beach-bottom":{"black":"assets/walk/male/bottom/beach-bottom/black.png","blue":"assets/walk/male/bottom/beach-bottom/blue.png","green":"assets/walk/male/bottom/beach-bottom/green.png","pink":"assets/walk/male/bottom/beach-bottom/pink.png","red":"assets/walk/male/bottom/beach-bottom/red.png","black-2":"assets/walk/male/bottom/beach-bottom/black-2.png","blue-2":"assets/walk/male/bottom/beach-bottom/blue-2.png","green-2":"assets/walk/male/bottom/beach-bottom/green-2.png","pink-2":"assets/walk/male/bottom/beach-bottom/pink-2.png","red-2":"assets/walk/male/bottom/beach-bottom/red-2.png"},"capris":{"aqua":"assets/walk/male/bottom/capris/aqua.png","beige":"assets/walk/male/bottom/capris/beige.png","black":"assets/walk/male/bottom/capris/black.png","green":"assets/walk/male/bottom/capris/green.png","navy":"assets/walk/male/bottom/capris/navy.png"},"classy-bottom":{"beige":"assets/walk/male/bottom/classy-bottom/beige.png","black":"assets/walk/male/bottom/classy-bottom/black.png","grey":"assets/walk/male/bottom/classy-bottom/grey.png","navy":"assets/walk/male/bottom/classy-bottom/navy.png","wine":"assets/walk/male/bottom/classy-bottom/wine.png","beige-2":"assets/walk/male/bottom/classy-bottom/beige-2.png","black-2":"assets/walk/male/bottom/classy-bottom/black-2.png","grey-2":"assets/walk/male/bottom/classy-bottom/grey-2.png","navy-2":"assets/walk/male/bottom/classy-bottom/navy-2.png","wine-2":"assets/walk/male/bottom/classy-bottom/wine-2.png"},"formal-bottoms":{"black":"assets/walk/male/bottom/formal-bottoms/black.png","blue":"assets/walk/male/bottom/formal-bottoms/blue.png","brown":"assets/walk/male/bottom/formal-bottoms/brown.png","grey":"assets/walk/male/bottom/formal-bottoms/grey.png","red":"assets/walk/male/bottom/formal-bottoms/red.png","black-2":"assets/walk/male/bottom/formal-bottoms/black-2.png","blue-2":"assets/walk/male/bottom/formal-bottoms/blue-2.png","brown-2":"assets/walk/male/bottom/formal-bottoms/brown-2.png","grey-2":"assets/walk/male/bottom/formal-bottoms/grey-2.png","pink":"assets/walk/male/bottom/formal-bottoms/pink.png"},"jeans":{"aqua":"assets/walk/male/bottom/jeans/aqua.png","black":"assets/walk/male/bottom/jeans/black.png","grey":"assets/walk/male/bottom/jeans/grey.png","light-blue":"assets/walk/male/bottom/jeans/light-blue.png","navy":"assets/walk/male/bottom/jeans/navy.png"},"jumpsuit-pants":{"black":"assets/walk/male/bottom/jumpsuit-pants/black.png","blue":"assets/walk/male/bottom/jumpsuit-pants/blue.png","green":"assets/walk/male/bottom/jumpsuit-pants/green.png","red":"assets/walk/male/bottom/jumpsuit-pants/red.png","yellow":"assets/walk/male/bottom/jumpsuit-pants/yellow.png"},"jumpsuit-pants-alt":{"black":"assets/walk/male/bottom/jumpsuit-pants-alt/black.png","blue":"assets/walk/male/bottom/jumpsuit-pants-alt/blue.png","green":"assets/walk/male/bottom/jumpsuit-pants-alt/green.png","red":"assets/walk/male/bottom/jumpsuit-pants-alt/red.png","yellow":"assets/walk/male/bottom/jumpsuit-pants-alt/yellow.png"},"long-skirt":{"black":"assets/walk/male/bottom/long-skirt/black.png","blue":"assets/walk/male/bottom/long-skirt/blue.png","green":"assets/walk/male/bottom/long-skirt/green.png","pink":"assets/walk/male/bottom/long-skirt/pink.png","purple":"assets/walk/male/bottom/long-skirt/purple.png"},"pants-and-boots":{"beige":"assets/walk/male/bottom/pants-and-boots/beige.png","black":"assets/walk/male/bottom/pants-and-boots/black.png","grey":"assets/walk/male/bottom/pants-and-boots/grey.png","light-blue":"assets/walk/male/bottom/pants-and-boots/light-blue.png","navy":"assets/walk/male/bottom/pants-and-boots/navy.png"},"pencil-skirt":{"black":"assets/walk/male/bottom/pencil-skirt/black.png","green":"assets/walk/male/bottom/pencil-skirt/green.png","grey":"assets/walk/male/bottom/pencil-skirt/grey.png","navy":"assets/walk/male/bottom/pencil-skirt/navy.png","wine":"assets/walk/male/bottom/pencil-skirt/wine.png"},"ribbon-skirt":{"blue":"assets/walk/male/bottom/ribbon-skirt/blue.png","green":"assets/walk/male/bottom/ribbon-skirt/green.png","pink":"assets/walk/male/bottom/ribbon-skirt/pink.png","red":"assets/walk/male/bottom/ribbon-skirt/red.png","wine":"assets/walk/male/bottom/ribbon-skirt/wine.png"},"school-uniform-bottom":{"dark":"assets/walk/male/bottom/school-uniform-bottom/dark.png","light":"assets/walk/male/bottom/school-uniform-bottom/light.png","dark-2":"assets/walk/male/bottom/school-uniform-bottom/dark-2.png","light-2":"assets/walk/male/bottom/school-uniform-bottom/light-2.png"},"shorts":{"black":"assets/walk/male/bottom/shorts/black.png","blue":"assets/walk/male/bottom/shorts/blue.png","green":"assets/walk/male/bottom/shorts/green.png","red":"assets/walk/male/bottom/shorts/red.png","white":"assets/walk/male/bottom/shorts/white.png"},"lord-suit-pants":{"default":"assets/walk/male/bottom/lord-suit-pants/default.png"}},"top":{"beach-top-f":{"black":"assets/walk/male/top/beach-top-f/black.png","blue":"assets/walk/male/top/beach-top-f/blue.png","green":"assets/walk/male/top/beach-top-f/green.png","pink":"assets/walk/male/top/beach-top-f/pink.png","red":"assets/walk/male/top/beach-top-f/red.png"},"beach-top-m":{"black":"assets/walk/male/top/beach-top-m/black.png","blue":"assets/walk/male/top/beach-top-m/blue.png","pink":"assets/walk/male/top/beach-top-m/pink.png","red":"assets/walk/male/top/beach-top-m/red.png","green":"assets/walk/male/top/beach-top-m/green.png"},"classy-top-f":{"beige":"assets/walk/male/top/classy-top-f/beige.png","black":"assets/walk/male/top/classy-top-f/black.png","grey":"assets/walk/male/top/classy-top-f/grey.png","navy":"assets/walk/male/top/classy-top-f/navy.png","wine":"assets/walk/male/top/classy-top-f/wine.png"},"classy-top-m":{"beige":"assets/walk/male/top/classy-top-m/beige.png","black":"assets/walk/male/top/classy-top-m/black.png","grey":"assets/walk/male/top/classy-top-m/grey.png","navy":"assets/walk/male/top/classy-top-m/navy.png","wine":"assets/walk/male/top/classy-top-m/wine.png"},"collared-shirt":{"black":"assets/walk/male/top/collared-shirt/black.png","light-blue":"assets/walk/male/top/collared-shirt/light-blue.png","navy":"assets/walk/male/top/collared-shirt/navy.png","white":"assets/walk/male/top/collared-shirt/white.png","wine":"assets/walk/male/top/collared-shirt/wine.png"},"formal":{"black":"assets/walk/male/top/formal/black.png","beige":"assets/walk/male/top/formal/beige.png","blue":"assets/walk/male/top/formal/blue.png","pink":"assets/walk/male/top/formal/pink.png","red":"assets/walk/male/top/formal/red.png"},"hoodie":{"black":"assets/walk/male/top/hoodie/black.png","blue":"assets/walk/male/top/hoodie/blue.png","green":"assets/walk/male/top/hoodie/green.png","purple":"assets/walk/male/top/hoodie/purple.png","red":"assets/walk/male/top/hoodie/red.png"},"jumpsuit-alt":{"blue":"assets/walk/male/top/jumpsuit-alt/blue.png","green":"assets/walk/male/top/jumpsuit-alt/green.png","red":"assets/walk/male/top/jumpsuit-alt/red.png","black":"assets/walk/male/top/jumpsuit-alt/black.png","yellow":"assets/walk/male/top/jumpsuit-alt/yellow.png"},"jumpsuit":{"black":"assets/walk/male/top/jumpsuit/black.png","blue":"assets/walk/male/top/jumpsuit/blue.png","green":"assets/walk/male/top/jumpsuit/green.png","red":"assets/walk/male/top/jumpsuit/red.png","yellow":"assets/walk/male/top/jumpsuit/yellow.png"},"lord-suit-top":{"purple":"assets/walk/male/top/lord-suit-top/purple.png","red":"assets/walk/male/top/lord-suit-top/red.png"},"open-jacket":{"blue":"assets/walk/male/top/open-jacket/blue.png","green":"assets/walk/male/top/open-jacket/green.png","orange":"assets/walk/male/top/open-jacket/orange.png","pink":"assets/walk/male/top/open-jacket/pink.png","red":"assets/walk/male/top/open-jacket/red.png"},"scarf-shirt":{"black":"assets/walk/male/top/scarf-shirt/black.png","blue":"assets/walk/male/top/scarf-shirt/blue.png","brown":"assets/walk/male/top/scarf-shirt/brown.png","red":"assets/walk/male/top/scarf-shirt/red.png","yellow":"assets/walk/male/top/scarf-shirt/yellow.png"},"school-uniform-fm":{"dark":"assets/walk/male/top/school-uniform-fm/dark.png","light":"assets/walk/male/top/school-uniform-fm/light.png","light-2":"assets/walk/male/top/school-uniform-fm/light-2.png","dark-2":"assets/walk/male/top/school-uniform-fm/dark-2.png"},"shirt-combo":{"black":"assets/walk/male/top/shirt-combo/black.png","blue":"assets/walk/male/top/shirt-combo/blue.png","red":"assets/walk/male/top/shirt-combo/red.png","white":"assets/walk/male/top/shirt-combo/white.png","wine":"assets/walk/male/top/shirt-combo/wine.png"},"t-shirt":{"black":"assets/walk/male/top/t-shirt/black.png","blue":"assets/walk/male/top/t-shirt/blue.png","green":"assets/walk/male/top/t-shirt/green.png","red":"assets/walk/male/top/t-shirt/red.png","white":"assets/walk/male/top/t-shirt/white.png"},"tank-top":{"black":"assets/walk/male/top/tank-top/black.png","green":"assets/walk/male/top/tank-top/green.png","navy":"assets/walk/male/top/tank-top/navy.png","pink":"assets/walk/male/top/tank-top/pink.png","red":"assets/walk/male/top/tank-top/red.png"},"trench-coat":{"beige":"assets/walk/male/top/trench-coat/beige.png","black":"assets/walk/male/top/trench-coat/black.png","navy":"assets/walk/male/top/trench-coat/navy.png","purple":"assets/walk/male/top/trench-coat/purple.png","red":"assets/walk/male/top/trench-coat/red.png"},"turtleneck-f":{"beige":"assets/walk/male/top/turtleneck-f/beige.png","black":"assets/walk/male/top/turtleneck-f/black.png","green":"assets/walk/male/top/turtleneck-f/green.png","white":"assets/walk/male/top/turtleneck-f/white.png","wine":"assets/walk/male/top/turtleneck-f/wine.png"},"turtleneck-m":{"beige":"assets/walk/male/top/turtleneck-m/beige.png","wine":"assets/walk/male/top/turtleneck-m/wine.png","black":"assets/walk/male/top/turtleneck-m/black.png","green":"assets/walk/male/top/turtleneck-m/green.png","white":"assets/walk/male/top/turtleneck-m/white.png"},"v-neck":{"black":"assets/walk/male/top/v-neck/black.png","green":"assets/walk/male/top/v-neck/green.png","orange":"assets/walk/male/top/v-neck/orange.png","purple":"assets/walk/male/top/v-neck/purple.png","yellow":"assets/walk/male/top/v-neck/yellow.png"},"vest":{"black":"assets/walk/male/top/vest/black.png","blue":"assets/walk/male/top/vest/blue.png","brown":"assets/walk/male/top/vest/brown.png","grey":"assets/walk/male/top/vest/grey.png","wine":"assets/walk/male/top/vest/wine.png"}},"hat":{"beanie":{"black":"assets/walk/male/hat/beanie/black.png","purple":"assets/walk/male/hat/beanie/purple.png"},"crown":{"gold":"assets/walk/male/hat/crown/gold.png","silver":"assets/walk/male/hat/crown/silver.png"},"flower":{"blue":"assets/walk/male/hat/flower/blue.png","red":"assets/walk/male/hat/flower/red.png"},"glasses":{"blue":"assets/walk/male/hat/glasses/blue.png","red":"assets/walk/male/hat/glasses/red.png"},"youngster-hat":{"blue":"assets/walk/male/hat/youngster-hat/blue.png","yellow":"assets/walk/male/hat/youngster-hat/yellow.png"},"beret":{"default":"assets/walk/male/hat/beret/default.png"},"bonnet":{"default":"assets/walk/male/hat/bonnet/default.png"},"cat":{"default":"assets/walk/male/hat/cat/default.png"},"devil":{"default":"assets/walk/male/hat/devil/default.png"},"feather-hat":{"default":"assets/walk/male/hat/feather-hat/default.png"},"fedora":{"default":"assets/walk/male/hat/fedora/default.png"},"hair-band":{"default":"assets/walk/male/hat/hair-band/default.png"},"headband":{"default":"assets/walk/male/hat/headband/default.png"},"miner":{"default":"assets/walk/male/hat/miner/default.png"},"poop":{"default":"assets/walk/male/hat/poop/default.png"},"ribbon":{"default":"assets/walk/male/hat/ribbon/default.png"},"straw-hat":{"default":"assets/walk/male/hat/straw-hat/default.png"},"sun-hat":{"default":"assets/walk/male/hat/sun-hat/default.png"}},"carry":{"bag":{"black":"assets/walk/male/carry/bag/black.png","blue":"assets/walk/male/carry/bag/blue.png","green":"assets/walk/male/carry/bag/green.png","magenta":"assets/walk/male/carry/bag/magenta.png","orange":"assets/walk/male/carry/bag/orange.png","purple":"assets/walk/male/carry/bag/purple.png","red":"assets/walk/male/carry/bag/red.png","white":"assets/walk/male/carry/bag/white.png","yellow":"assets/walk/male/carry/bag/yellow.png"},"rucksack":{"red":"assets/walk/male/carry/rucksack/red.png","black":"assets/walk/male/carry/rucksack/black.png","blue":"assets/walk/male/carry/rucksack/blue.png","green":"assets/walk/male/carry/rucksack/green.png","magenta":"assets/walk/male/carry/rucksack/magenta.png","orange":"assets/walk/male/carry/rucksack/orange.png","purple":"assets/walk/male/carry/rucksack/purple.png","white":"assets/walk/male/carry/rucksack/white.png","yellow":"assets/walk/male/carry/rucksack/yellow.png"},"sporty-backpack":{"black":"assets/walk/male/carry/sporty-backpack/black.png","blue":"assets/walk/male/carry/sporty-backpack/blue.png","green":"assets/walk/male/carry/sporty-backpack/green.png","magenta":"assets/walk/male/carry/sporty-backpack/magenta.png","orange":"assets/walk/male/carry/sporty-backpack/orange.png","purple":"assets/walk/male/carry/sporty-backpack/purple.png","red":"assets/walk/male/carry/sporty-backpack/red.png","white":"assets/walk/male/carry/sporty-backpack/white.png","yellow":"assets/walk/male/carry/sporty-backpack/yellow.png"}},"hair":{"hair-1":{"black":"assets/walk/male/hair/hair-1/black.png","blonde":"assets/walk/male/hair/hair-1/blonde.png","blue":"assets/walk/male/hair/hair-1/blue.png","brown":"assets/walk/male/hair/hair-1/brown.png","cyan":"assets/walk/male/hair/hair-1/cyan.png","ginger":"assets/walk/male/hair/hair-1/ginger.png","green":"assets/walk/male/hair/hair-1/green.png","pink":"assets/walk/male/hair/hair-1/pink.png","purple":"assets/walk/male/hair/hair-1/purple.png","red":"assets/walk/male/hair/hair-1/red.png","white":"assets/walk/male/hair/hair-1/white.png"},"hair-2":{"black":"assets/walk/male/hair/hair-2/black.png","blonde":"assets/walk/male/hair/hair-2/blonde.png","blue":"assets/walk/male/hair/hair-2/blue.png","brown":"assets/walk/male/hair/hair-2/brown.png","cyan":"assets/walk/male/hair/hair-2/cyan.png","ginger":"assets/walk/male/hair/hair-2/ginger.png","green":"assets/walk/male/hair/hair-2/green.png","pink":"assets/walk/male/hair/hair-2/pink.png","purple":"assets/walk/male/hair/hair-2/purple.png","red":"assets/walk/male/hair/hair-2/red.png","white":"assets/walk/male/hair/hair-2/white.png"},"hair-3":{"black":"assets/walk/male/hair/hair-3/black.png","blonde":"assets/walk/male/hair/hair-3/blonde.png","blue":"assets/walk/male/hair/hair-3/blue.png","brown":"assets/walk/male/hair/hair-3/brown.png","cyan":"assets/walk/male/hair/hair-3/cyan.png","ginger":"assets/walk/male/hair/hair-3/ginger.png","green":"assets/walk/male/hair/hair-3/green.png","pink":"assets/walk/male/hair/hair-3/pink.png","purple":"assets/walk/male/hair/hair-3/purple.png","red":"assets/walk/male/hair/hair-3/red.png","white":"assets/walk/male/hair/hair-3/white.png"},"hair-4":{"black":"assets/walk/male/hair/hair-4/black.png","blonde":"assets/walk/male/hair/hair-4/blonde.png","blue":"assets/walk/male/hair/hair-4/blue.png","brown":"assets/walk/male/hair/hair-4/brown.png","cyan":"assets/walk/male/hair/hair-4/cyan.png","ginger":"assets/walk/male/hair/hair-4/ginger.png","green":"assets/walk/male/hair/hair-4/green.png","pink":"assets/walk/male/hair/hair-4/pink.png","purple":"assets/walk/male/hair/hair-4/purple.png","red":"assets/walk/male/hair/hair-4/red.png","white":"assets/walk/male/hair/hair-4/white.png"}}}},"run":{"female":{"body":{"base":{"dark":"assets/run/female/body/base/dark.png","light":"assets/run/female/body/base/light.png","medium":"assets/run/female/body/base/medium.png","pale":"assets/run/female/body/base/pale.png"}},"bottom":{"beach-bottom":{"black":"assets/run/female/bottom/beach-bottom/black.png","blue":"assets/run/female/bottom/beach-bottom/blue.png","green":"assets/run/female/bottom/beach-bottom/green.png","pink":"assets/run/female/bottom/beach-bottom/pink.png","red":"assets/run/female/bottom/beach-bottom/red.png","black-2":"assets/run/female/bottom/beach-bottom/black-2.png","blue-2":"assets/run/female/bottom/beach-bottom/blue-2.png","green-2":"assets/run/female/bottom/beach-bottom/green-2.png","pink-2":"assets/run/female/bottom/beach-bottom/pink-2.png","red-2":"assets/run/female/bottom/beach-bottom/red-2.png"},"capris":{"aqua":"assets/run/female/bottom/capris/aqua.png","beige":"assets/run/female/bottom/capris/beige.png","black":"assets/run/female/bottom/capris/black.png","green":"assets/run/female/bottom/capris/green.png","navy":"assets/run/female/bottom/capris/navy.png"},"classy-bottom":{"beige":"assets/run/female/bottom/classy-bottom/beige.png","black":"assets/run/female/bottom/classy-bottom/black.png","grey":"assets/run/female/bottom/classy-bottom/grey.png","navy":"assets/run/female/bottom/classy-bottom/navy.png","wine":"assets/run/female/bottom/classy-bottom/wine.png","beige-2":"assets/run/female/bottom/classy-bottom/beige-2.png","black-2":"assets/run/female/bottom/classy-bottom/black-2.png","grey-2":"assets/run/female/bottom/classy-bottom/grey-2.png","navy-2":"assets/run/female/bottom/classy-bottom/navy-2.png","wine-2":"assets/run/female/bottom/classy-bottom/wine-2.png"},"formal-bottoms":{"black":"assets/run/female/bottom/formal-bottoms/black.png","blue":"assets/run/female/bottom/formal-bottoms/blue.png","brown":"assets/run/female/bottom/formal-bottoms/brown.png","grey":"assets/run/female/bottom/formal-bottoms/grey.png","red":"assets/run/female/bottom/formal-bottoms/red.png","black-2":"assets/run/female/bottom/formal-bottoms/black-2.png","blue-2":"assets/run/female/bottom/formal-bottoms/blue-2.png","brown-2":"assets/run/female/bottom/formal-bottoms/brown-2.png","grey-2":"assets/run/female/bottom/formal-bottoms/grey-2.png","pink":"assets/run/female/bottom/formal-bottoms/pink.png"},"jeans":{"aqua":"assets/run/female/bottom/jeans/aqua.png","black":"assets/run/female/bottom/jeans/black.png","grey":"assets/run/female/bottom/jeans/grey.png","light-blue":"assets/run/female/bottom/jeans/light-blue.png","navy":"assets/run/female/bottom/jeans/navy.png"},"jumpsuit-pants":{"black":"assets/run/female/bottom/jumpsuit-pants/black.png","blue":"assets/run/female/bottom/jumpsuit-pants/blue.png","green":"assets/run/female/bottom/jumpsuit-pants/green.png","red":"assets/run/female/bottom/jumpsuit-pants/red.png","yellow":"assets/run/female/bottom/jumpsuit-pants/yellow.png"},"jumpsuit-pants-alt":{"black":"assets/run/female/bottom/jumpsuit-pants-alt/black.png","blue":"assets/run/female/bottom/jumpsuit-pants-alt/blue.png","green":"assets/run/female/bottom/jumpsuit-pants-alt/green.png","red":"assets/run/female/bottom/jumpsuit-pants-alt/red.png","yellow":"assets/run/female/bottom/jumpsuit-pants-alt/yellow.png"},"long-skirt":{"black":"assets/run/female/bottom/long-skirt/black.png","blue":"assets/run/female/bottom/long-skirt/blue.png","green":"assets/run/female/bottom/long-skirt/green.png","pink":"assets/run/female/bottom/long-skirt/pink.png","purple":"assets/run/female/bottom/long-skirt/purple.png"},"pants-and-boots":{"beige":"assets/run/female/bottom/pants-and-boots/beige.png","black":"assets/run/female/bottom/pants-and-boots/black.png","grey":"assets/run/female/bottom/pants-and-boots/grey.png","light-blue":"assets/run/female/bottom/pants-and-boots/light-blue.png","navy":"assets/run/female/bottom/pants-and-boots/navy.png"},"pencil-skirt":{"black":"assets/run/female/bottom/pencil-skirt/black.png","green":"assets/run/female/bottom/pencil-skirt/green.png","grey":"assets/run/female/bottom/pencil-skirt/grey.png","navy":"assets/run/female/bottom/pencil-skirt/navy.png","wine":"assets/run/female/bottom/pencil-skirt/wine.png"},"ribbon-skirt":{"blue":"assets/run/female/bottom/ribbon-skirt/blue.png","green":"assets/run/female/bottom/ribbon-skirt/green.png","pink":"assets/run/female/bottom/ribbon-skirt/pink.png","red":"assets/run/female/bottom/ribbon-skirt/red.png","wine":"assets/run/female/bottom/ribbon-skirt/wine.png"},"school-uniform-bottom":{"dark":"assets/run/female/bottom/school-uniform-bottom/dark.png","light":"assets/run/female/bottom/school-uniform-bottom/light.png","dark-2":"assets/run/female/bottom/school-uniform-bottom/dark-2.png","light-2":"assets/run/female/bottom/school-uniform-bottom/light-2.png"},"shorts":{"black":"assets/run/female/bottom/shorts/black.png","blue":"assets/run/female/bottom/shorts/blue.png","green":"assets/run/female/bottom/shorts/green.png","red":"assets/run/female/bottom/shorts/red.png","white":"assets/run/female/bottom/shorts/white.png"},"lord-suit-pants":{"default":"assets/run/female/bottom/lord-suit-pants/default.png"}},"top":{"beach-top-f":{"black":"assets/run/female/top/beach-top-f/black.png","blue":"assets/run/female/top/beach-top-f/blue.png","green":"assets/run/female/top/beach-top-f/green.png","pink":"assets/run/female/top/beach-top-f/pink.png","red":"assets/run/female/top/beach-top-f/red.png"},"beach-top-m":{"black":"assets/run/female/top/beach-top-m/black.png","blue":"assets/run/female/top/beach-top-m/blue.png","pink":"assets/run/female/top/beach-top-m/pink.png","red":"assets/run/female/top/beach-top-m/red.png","green":"assets/run/female/top/beach-top-m/green.png"},"classy-top-f":{"beige":"assets/run/female/top/classy-top-f/beige.png","black":"assets/run/female/top/classy-top-f/black.png","grey":"assets/run/female/top/classy-top-f/grey.png","navy":"assets/run/female/top/classy-top-f/navy.png","wine":"assets/run/female/top/classy-top-f/wine.png"},"classy-top-m":{"beige":"assets/run/female/top/classy-top-m/beige.png","black":"assets/run/female/top/classy-top-m/black.png","grey":"assets/run/female/top/classy-top-m/grey.png","navy":"assets/run/female/top/classy-top-m/navy.png","wine":"assets/run/female/top/classy-top-m/wine.png"},"collared-shirt":{"black":"assets/run/female/top/collared-shirt/black.png","light-blue":"assets/run/female/top/collared-shirt/light-blue.png","navy":"assets/run/female/top/collared-shirt/navy.png","white":"assets/run/female/top/collared-shirt/white.png","wine":"assets/run/female/top/collared-shirt/wine.png"},"formal":{"black":"assets/run/female/top/formal/black.png","beige":"assets/run/female/top/formal/beige.png","blue":"assets/run/female/top/formal/blue.png","pink":"assets/run/female/top/formal/pink.png","red":"assets/run/female/top/formal/red.png"},"hoodie":{"black":"assets/run/female/top/hoodie/black.png","blue":"assets/run/female/top/hoodie/blue.png","green":"assets/run/female/top/hoodie/green.png","purple":"assets/run/female/top/hoodie/purple.png","red":"assets/run/female/top/hoodie/red.png"},"jumpsuit-alt":{"blue":"assets/run/female/top/jumpsuit-alt/blue.png","green":"assets/run/female/top/jumpsuit-alt/green.png","red":"assets/run/female/top/jumpsuit-alt/red.png","black":"assets/run/female/top/jumpsuit-alt/black.png","yellow":"assets/run/female/top/jumpsuit-alt/yellow.png"},"jumpsuit":{"black":"assets/run/female/top/jumpsuit/black.png","blue":"assets/run/female/top/jumpsuit/blue.png","green":"assets/run/female/top/jumpsuit/green.png","red":"assets/run/female/top/jumpsuit/red.png","yellow":"assets/run/female/top/jumpsuit/yellow.png"},"lord-suit-top":{"purple":"assets/run/female/top/lord-suit-top/purple.png","red":"assets/run/female/top/lord-suit-top/red.png"},"open-jacket":{"blue":"assets/run/female/top/open-jacket/blue.png","green":"assets/run/female/top/open-jacket/green.png","orange":"assets/run/female/top/open-jacket/orange.png","pink":"assets/run/female/top/open-jacket/pink.png","red":"assets/run/female/top/open-jacket/red.png"},"scarf-shirt":{"black":"assets/run/female/top/scarf-shirt/black.png","blue":"assets/run/female/top/scarf-shirt/blue.png","brown":"assets/run/female/top/scarf-shirt/brown.png","red":"assets/run/female/top/scarf-shirt/red.png","yellow":"assets/run/female/top/scarf-shirt/yellow.png"},"school-uniform-fm":{"dark":"assets/run/female/top/school-uniform-fm/dark.png","light":"assets/run/female/top/school-uniform-fm/light.png","light-2":"assets/run/female/top/school-uniform-fm/light-2.png","dark-2":"assets/run/female/top/school-uniform-fm/dark-2.png"},"shirt-combo":{"black":"assets/run/female/top/shirt-combo/black.png","blue":"assets/run/female/top/shirt-combo/blue.png","red":"assets/run/female/top/shirt-combo/red.png","white":"assets/run/female/top/shirt-combo/white.png","wine":"assets/run/female/top/shirt-combo/wine.png"},"t-shirt":{"black":"assets/run/female/top/t-shirt/black.png","blue":"assets/run/female/top/t-shirt/blue.png","green":"assets/run/female/top/t-shirt/green.png","red":"assets/run/female/top/t-shirt/red.png","white":"assets/run/female/top/t-shirt/white.png"},"tank-top":{"black":"assets/run/female/top/tank-top/black.png","green":"assets/run/female/top/tank-top/green.png","navy":"assets/run/female/top/tank-top/navy.png","pink":"assets/run/female/top/tank-top/pink.png","red":"assets/run/female/top/tank-top/red.png"},"trench-coat":{"beige":"assets/run/female/top/trench-coat/beige.png","black":"assets/run/female/top/trench-coat/black.png","navy":"assets/run/female/top/trench-coat/navy.png","purple":"assets/run/female/top/trench-coat/purple.png","red":"assets/run/female/top/trench-coat/red.png"},"turtleneck-f":{"beige":"assets/run/female/top/turtleneck-f/beige.png","black":"assets/run/female/top/turtleneck-f/black.png","green":"assets/run/female/top/turtleneck-f/green.png","white":"assets/run/female/top/turtleneck-f/white.png","wine":"assets/run/female/top/turtleneck-f/wine.png"},"turtleneck-m":{"beige":"assets/run/female/top/turtleneck-m/beige.png","wine":"assets/run/female/top/turtleneck-m/wine.png","black":"assets/run/female/top/turtleneck-m/black.png","green":"assets/run/female/top/turtleneck-m/green.png","white":"assets/run/female/top/turtleneck-m/white.png"},"v-neck":{"black":"assets/run/female/top/v-neck/black.png","green":"assets/run/female/top/v-neck/green.png","orange":"assets/run/female/top/v-neck/orange.png","purple":"assets/run/female/top/v-neck/purple.png","yellow":"assets/run/female/top/v-neck/yellow.png"},"vest":{"black":"assets/run/female/top/vest/black.png","blue":"assets/run/female/top/vest/blue.png","brown":"assets/run/female/top/vest/brown.png","grey":"assets/run/female/top/vest/grey.png","wine":"assets/run/female/top/vest/wine.png"}},"hat":{"beanie":{"black":"assets/run/female/hat/beanie/black.png","purple":"assets/run/female/hat/beanie/purple.png"},"crown":{"gold":"assets/run/female/hat/crown/gold.png","silver":"assets/run/female/hat/crown/silver.png"},"flower":{"blue":"assets/run/female/hat/flower/blue.png","red":"assets/run/female/hat/flower/red.png"},"glasses":{"blue":"assets/run/female/hat/glasses/blue.png","red":"assets/run/female/hat/glasses/red.png"},"youngster-hat":{"blue":"assets/run/female/hat/youngster-hat/blue.png","yellow":"assets/run/female/hat/youngster-hat/yellow.png"},"beret":{"default":"assets/run/female/hat/beret/default.png"},"bonnet":{"default":"assets/run/female/hat/bonnet/default.png"},"cat":{"default":"assets/run/female/hat/cat/default.png"},"devil":{"default":"assets/run/female/hat/devil/default.png"},"feather-hat":{"default":"assets/run/female/hat/feather-hat/default.png"},"fedora":{"default":"assets/run/female/hat/fedora/default.png"},"hair-band":{"default":"assets/run/female/hat/hair-band/default.png"},"headband":{"default":"assets/run/female/hat/headband/default.png"},"miner":{"default":"assets/run/female/hat/miner/default.png"},"poop":{"default":"assets/run/female/hat/poop/default.png"},"ribbon":{"default":"assets/run/female/hat/ribbon/default.png"},"straw-hat":{"default":"assets/run/female/hat/straw-hat/default.png"},"sun-hat":{"default":"assets/run/female/hat/sun-hat/default.png"}},"carry":{"bag":{"black":"assets/run/female/carry/bag/black.png","blue":"assets/run/female/carry/bag/blue.png","green":"assets/run/female/carry/bag/green.png","magenta":"assets/run/female/carry/bag/magenta.png","orange":"assets/run/female/carry/bag/orange.png","purple":"assets/run/female/carry/bag/purple.png","red":"assets/run/female/carry/bag/red.png","white":"assets/run/female/carry/bag/white.png","yellow":"assets/run/female/carry/bag/yellow.png"},"rucksack":{"red":"assets/run/female/carry/rucksack/red.png","black":"assets/run/female/carry/rucksack/black.png","blue":"assets/run/female/carry/rucksack/blue.png","green":"assets/run/female/carry/rucksack/green.png","magenta":"assets/run/female/carry/rucksack/magenta.png","orange":"assets/run/female/carry/rucksack/orange.png","purple":"assets/run/female/carry/rucksack/purple.png","white":"assets/run/female/carry/rucksack/white.png","yellow":"assets/run/female/carry/rucksack/yellow.png"},"sporty-backpack":{"black":"assets/run/female/carry/sporty-backpack/black.png","blue":"assets/run/female/carry/sporty-backpack/blue.png","green":"assets/run/female/carry/sporty-backpack/green.png","magenta":"assets/run/female/carry/sporty-backpack/magenta.png","orange":"assets/run/female/carry/sporty-backpack/orange.png","purple":"assets/run/female/carry/sporty-backpack/purple.png","red":"assets/run/female/carry/sporty-backpack/red.png","white":"assets/run/female/carry/sporty-backpack/white.png","yellow":"assets/run/female/carry/sporty-backpack/yellow.png"}},"hair":{"hair-3":{"black":"assets/run/female/hair/hair-3/black.png","blonde":"assets/run/female/hair/hair-3/blonde.png","blue":"assets/run/female/hair/hair-3/blue.png","brown":"assets/run/female/hair/hair-3/brown.png","cyan":"assets/run/female/hair/hair-3/cyan.png","ginger":"assets/run/female/hair/hair-3/ginger.png","green":"assets/run/female/hair/hair-3/green.png","pink":"assets/run/female/hair/hair-3/pink.png","purple":"assets/run/female/hair/hair-3/purple.png","red":"assets/run/female/hair/hair-3/red.png","white":"assets/run/female/hair/hair-3/white.png"},"hair-1":{"black":"assets/run/female/hair/hair-1/black.png","cyan":"assets/run/female/hair/hair-1/cyan.png","blonde":"assets/run/female/hair/hair-1/blonde.png","blue":"assets/run/female/hair/hair-1/blue.png","brown":"assets/run/female/hair/hair-1/brown.png","ginger":"assets/run/female/hair/hair-1/ginger.png","green":"assets/run/female/hair/hair-1/green.png","pink":"assets/run/female/hair/hair-1/pink.png","purple":"assets/run/female/hair/hair-1/purple.png","red":"assets/run/female/hair/hair-1/red.png","white":"assets/run/female/hair/hair-1/white.png"},"hair-2":{"black":"assets/run/female/hair/hair-2/black.png","blonde":"assets/run/female/hair/hair-2/blonde.png","blue":"assets/run/female/hair/hair-2/blue.png","brown":"assets/run/female/hair/hair-2/brown.png","cyan":"assets/run/female/hair/hair-2/cyan.png","green":"assets/run/female/hair/hair-2/green.png","pink":"assets/run/female/hair/hair-2/pink.png","red":"assets/run/female/hair/hair-2/red.png","violet":"assets/run/female/hair/hair-2/violet.png","white":"assets/run/female/hair/hair-2/white.png","ginger":"assets/run/female/hair/hair-2/ginger.png"},"hair-4":{"black":"assets/run/female/hair/hair-4/black.png","blonde":"assets/run/female/hair/hair-4/blonde.png","blue":"assets/run/female/hair/hair-4/blue.png","brown":"assets/run/female/hair/hair-4/brown.png","cyan":"assets/run/female/hair/hair-4/cyan.png","ginger":"assets/run/female/hair/hair-4/ginger.png","green":"assets/run/female/hair/hair-4/green.png","pink":"assets/run/female/hair/hair-4/pink.png","purple":"assets/run/female/hair/hair-4/purple.png","red":"assets/run/female/hair/hair-4/red.png","white":"assets/run/female/hair/hair-4/white.png"}}},"male":{"body":{"base":{"dark":"assets/run/male/body/base/dark.png","light":"assets/run/male/body/base/light.png","medium":"assets/run/male/body/base/medium.png","pale":"assets/run/male/body/base/pale.png"}},"bottom":{"beach-bottom":{"black":"assets/run/male/bottom/beach-bottom/black.png","blue":"assets/run/male/bottom/beach-bottom/blue.png","green":"assets/run/male/bottom/beach-bottom/green.png","pink":"assets/run/male/bottom/beach-bottom/pink.png","red":"assets/run/male/bottom/beach-bottom/red.png","black-2":"assets/run/male/bottom/beach-bottom/black-2.png","blue-2":"assets/run/male/bottom/beach-bottom/blue-2.png","green-2":"assets/run/male/bottom/beach-bottom/green-2.png","pink-2":"assets/run/male/bottom/beach-bottom/pink-2.png","red-2":"assets/run/male/bottom/beach-bottom/red-2.png"},"capris":{"aqua":"assets/run/male/bottom/capris/aqua.png","beige":"assets/run/male/bottom/capris/beige.png","black":"assets/run/male/bottom/capris/black.png","green":"assets/run/male/bottom/capris/green.png","navy":"assets/run/male/bottom/capris/navy.png"},"classy-bottom":{"beige":"assets/run/male/bottom/classy-bottom/beige.png","black":"assets/run/male/bottom/classy-bottom/black.png","grey":"assets/run/male/bottom/classy-bottom/grey.png","navy":"assets/run/male/bottom/classy-bottom/navy.png","wine":"assets/run/male/bottom/classy-bottom/wine.png","beige-2":"assets/run/male/bottom/classy-bottom/beige-2.png","black-2":"assets/run/male/bottom/classy-bottom/black-2.png","grey-2":"assets/run/male/bottom/classy-bottom/grey-2.png","navy-2":"assets/run/male/bottom/classy-bottom/navy-2.png","wine-2":"assets/run/male/bottom/classy-bottom/wine-2.png"},"formal-bottoms":{"black":"assets/run/male/bottom/formal-bottoms/black.png","blue":"assets/run/male/bottom/formal-bottoms/blue.png","brown":"assets/run/male/bottom/formal-bottoms/brown.png","grey":"assets/run/male/bottom/formal-bottoms/grey.png","red":"assets/run/male/bottom/formal-bottoms/red.png","black-2":"assets/run/male/bottom/formal-bottoms/black-2.png","blue-2":"assets/run/male/bottom/formal-bottoms/blue-2.png","brown-2":"assets/run/male/bottom/formal-bottoms/brown-2.png","grey-2":"assets/run/male/bottom/formal-bottoms/grey-2.png","pink":"assets/run/male/bottom/formal-bottoms/pink.png"},"jeans":{"aqua":"assets/run/male/bottom/jeans/aqua.png","black":"assets/run/male/bottom/jeans/black.png","grey":"assets/run/male/bottom/jeans/grey.png","light-blue":"assets/run/male/bottom/jeans/light-blue.png","navy":"assets/run/male/bottom/jeans/navy.png"},"jumpsuit-pants":{"black":"assets/run/male/bottom/jumpsuit-pants/black.png","blue":"assets/run/male/bottom/jumpsuit-pants/blue.png","green":"assets/run/male/bottom/jumpsuit-pants/green.png","red":"assets/run/male/bottom/jumpsuit-pants/red.png","yellow":"assets/run/male/bottom/jumpsuit-pants/yellow.png"},"jumpsuit-pants-alt":{"black":"assets/run/male/bottom/jumpsuit-pants-alt/black.png","blue":"assets/run/male/bottom/jumpsuit-pants-alt/blue.png","green":"assets/run/male/bottom/jumpsuit-pants-alt/green.png","red":"assets/run/male/bottom/jumpsuit-pants-alt/red.png","yellow":"assets/run/male/bottom/jumpsuit-pants-alt/yellow.png"},"long-skirt":{"black":"assets/run/male/bottom/long-skirt/black.png","blue":"assets/run/male/bottom/long-skirt/blue.png","green":"assets/run/male/bottom/long-skirt/green.png","pink":"assets/run/male/bottom/long-skirt/pink.png","purple":"assets/run/male/bottom/long-skirt/purple.png"},"pants-and-boots":{"beige":"assets/run/male/bottom/pants-and-boots/beige.png","black":"assets/run/male/bottom/pants-and-boots/black.png","grey":"assets/run/male/bottom/pants-and-boots/grey.png","light-blue":"assets/run/male/bottom/pants-and-boots/light-blue.png","navy":"assets/run/male/bottom/pants-and-boots/navy.png"},"pencil-skirt":{"black":"assets/run/male/bottom/pencil-skirt/black.png","green":"assets/run/male/bottom/pencil-skirt/green.png","grey":"assets/run/male/bottom/pencil-skirt/grey.png","navy":"assets/run/male/bottom/pencil-skirt/navy.png","wine":"assets/run/male/bottom/pencil-skirt/wine.png"},"ribbon-skirt":{"blue":"assets/run/male/bottom/ribbon-skirt/blue.png","green":"assets/run/male/bottom/ribbon-skirt/green.png","pink":"assets/run/male/bottom/ribbon-skirt/pink.png","red":"assets/run/male/bottom/ribbon-skirt/red.png","wine":"assets/run/male/bottom/ribbon-skirt/wine.png"},"school-uniform-bottom":{"dark":"assets/run/male/bottom/school-uniform-bottom/dark.png","light":"assets/run/male/bottom/school-uniform-bottom/light.png","dark-2":"assets/run/male/bottom/school-uniform-bottom/dark-2.png","light-2":"assets/run/male/bottom/school-uniform-bottom/light-2.png"},"shorts":{"black":"assets/run/male/bottom/shorts/black.png","blue":"assets/run/male/bottom/shorts/blue.png","green":"assets/run/male/bottom/shorts/green.png","red":"assets/run/male/bottom/shorts/red.png","white":"assets/run/male/bottom/shorts/white.png"},"lord-suit-pants":{"default":"assets/run/male/bottom/lord-suit-pants/default.png"}},"top":{"beach-top-f":{"black":"assets/run/male/top/beach-top-f/black.png","blue":"assets/run/male/top/beach-top-f/blue.png","green":"assets/run/male/top/beach-top-f/green.png","pink":"assets/run/male/top/beach-top-f/pink.png","red":"assets/run/male/top/beach-top-f/red.png"},"beach-top-m":{"black":"assets/run/male/top/beach-top-m/black.png","blue":"assets/run/male/top/beach-top-m/blue.png","pink":"assets/run/male/top/beach-top-m/pink.png","red":"assets/run/male/top/beach-top-m/red.png","green":"assets/run/male/top/beach-top-m/green.png"},"classy-top-f":{"beige":"assets/run/male/top/classy-top-f/beige.png","black":"assets/run/male/top/classy-top-f/black.png","grey":"assets/run/male/top/classy-top-f/grey.png","navy":"assets/run/male/top/classy-top-f/navy.png","wine":"assets/run/male/top/classy-top-f/wine.png"},"classy-top-m":{"beige":"assets/run/male/top/classy-top-m/beige.png","black":"assets/run/male/top/classy-top-m/black.png","grey":"assets/run/male/top/classy-top-m/grey.png","navy":"assets/run/male/top/classy-top-m/navy.png","wine":"assets/run/male/top/classy-top-m/wine.png"},"collared-shirt":{"black":"assets/run/male/top/collared-shirt/black.png","light-blue":"assets/run/male/top/collared-shirt/light-blue.png","navy":"assets/run/male/top/collared-shirt/navy.png","white":"assets/run/male/top/collared-shirt/white.png","wine":"assets/run/male/top/collared-shirt/wine.png"},"formal":{"black":"assets/run/male/top/formal/black.png","beige":"assets/run/male/top/formal/beige.png","blue":"assets/run/male/top/formal/blue.png","pink":"assets/run/male/top/formal/pink.png","red":"assets/run/male/top/formal/red.png"},"hoodie":{"black":"assets/run/male/top/hoodie/black.png","blue":"assets/run/male/top/hoodie/blue.png","green":"assets/run/male/top/hoodie/green.png","purple":"assets/run/male/top/hoodie/purple.png","red":"assets/run/male/top/hoodie/red.png"},"jumpsuit-alt":{"blue":"assets/run/male/top/jumpsuit-alt/blue.png","green":"assets/run/male/top/jumpsuit-alt/green.png","red":"assets/run/male/top/jumpsuit-alt/red.png","black":"assets/run/male/top/jumpsuit-alt/black.png","yellow":"assets/run/male/top/jumpsuit-alt/yellow.png"},"jumpsuit":{"black":"assets/run/male/top/jumpsuit/black.png","blue":"assets/run/male/top/jumpsuit/blue.png","green":"assets/run/male/top/jumpsuit/green.png","red":"assets/run/male/top/jumpsuit/red.png","yellow":"assets/run/male/top/jumpsuit/yellow.png"},"lord-suit-top":{"purple":"assets/run/male/top/lord-suit-top/purple.png","red":"assets/run/male/top/lord-suit-top/red.png"},"open-jacket":{"blue":"assets/run/male/top/open-jacket/blue.png","green":"assets/run/male/top/open-jacket/green.png","orange":"assets/run/male/top/open-jacket/orange.png","pink":"assets/run/male/top/open-jacket/pink.png","red":"assets/run/male/top/open-jacket/red.png"},"scarf-shirt":{"black":"assets/run/male/top/scarf-shirt/black.png","blue":"assets/run/male/top/scarf-shirt/blue.png","brown":"assets/run/male/top/scarf-shirt/brown.png","red":"assets/run/male/top/scarf-shirt/red.png","yellow":"assets/run/male/top/scarf-shirt/yellow.png"},"school-uniform-fm":{"dark":"assets/run/male/top/school-uniform-fm/dark.png","light":"assets/run/male/top/school-uniform-fm/light.png","light-2":"assets/run/male/top/school-uniform-fm/light-2.png","dark-2":"assets/run/male/top/school-uniform-fm/dark-2.png"},"shirt-combo":{"black":"assets/run/male/top/shirt-combo/black.png","blue":"assets/run/male/top/shirt-combo/blue.png","red":"assets/run/male/top/shirt-combo/red.png","white":"assets/run/male/top/shirt-combo/white.png","wine":"assets/run/male/top/shirt-combo/wine.png"},"t-shirt":{"black":"assets/run/male/top/t-shirt/black.png","blue":"assets/run/male/top/t-shirt/blue.png","green":"assets/run/male/top/t-shirt/green.png","red":"assets/run/male/top/t-shirt/red.png","white":"assets/run/male/top/t-shirt/white.png"},"tank-top":{"black":"assets/run/male/top/tank-top/black.png","green":"assets/run/male/top/tank-top/green.png","navy":"assets/run/male/top/tank-top/navy.png","pink":"assets/run/male/top/tank-top/pink.png","red":"assets/run/male/top/tank-top/red.png"},"trench-coat":{"beige":"assets/run/male/top/trench-coat/beige.png","black":"assets/run/male/top/trench-coat/black.png","navy":"assets/run/male/top/trench-coat/navy.png","purple":"assets/run/male/top/trench-coat/purple.png","red":"assets/run/male/top/trench-coat/red.png"},"turtleneck-f":{"beige":"assets/run/male/top/turtleneck-f/beige.png","black":"assets/run/male/top/turtleneck-f/black.png","green":"assets/run/male/top/turtleneck-f/green.png","white":"assets/run/male/top/turtleneck-f/white.png","wine":"assets/run/male/top/turtleneck-f/wine.png"},"turtleneck-m":{"beige":"assets/run/male/top/turtleneck-m/beige.png","wine":"assets/run/male/top/turtleneck-m/wine.png","black":"assets/run/male/top/turtleneck-m/black.png","green":"assets/run/male/top/turtleneck-m/green.png","white":"assets/run/male/top/turtleneck-m/white.png"},"v-neck":{"black":"assets/run/male/top/v-neck/black.png","green":"assets/run/male/top/v-neck/green.png","orange":"assets/run/male/top/v-neck/orange.png","purple":"assets/run/male/top/v-neck/purple.png","yellow":"assets/run/male/top/v-neck/yellow.png"},"vest":{"black":"assets/run/male/top/vest/black.png","blue":"assets/run/male/top/vest/blue.png","brown":"assets/run/male/top/vest/brown.png","grey":"assets/run/male/top/vest/grey.png","wine":"assets/run/male/top/vest/wine.png"}},"hat":{"beanie":{"black":"assets/run/male/hat/beanie/black.png","purple":"assets/run/male/hat/beanie/purple.png"},"crown":{"gold":"assets/run/male/hat/crown/gold.png","silver":"assets/run/male/hat/crown/silver.png"},"flower":{"blue":"assets/run/male/hat/flower/blue.png","red":"assets/run/male/hat/flower/red.png"},"glasses":{"blue":"assets/run/male/hat/glasses/blue.png","red":"assets/run/male/hat/glasses/red.png"},"youngster-hat":{"blue":"assets/run/male/hat/youngster-hat/blue.png","yellow":"assets/run/male/hat/youngster-hat/yellow.png"},"beret":{"default":"assets/run/male/hat/beret/default.png"},"bonnet":{"default":"assets/run/male/hat/bonnet/default.png"},"cat":{"default":"assets/run/male/hat/cat/default.png"},"devil":{"default":"assets/run/male/hat/devil/default.png"},"feather-hat":{"default":"assets/run/male/hat/feather-hat/default.png"},"fedora":{"default":"assets/run/male/hat/fedora/default.png"},"hair-band":{"default":"assets/run/male/hat/hair-band/default.png"},"headband":{"default":"assets/run/male/hat/headband/default.png"},"miner":{"default":"assets/run/male/hat/miner/default.png"},"poop":{"default":"assets/run/male/hat/poop/default.png"},"ribbon":{"default":"assets/run/male/hat/ribbon/default.png"},"straw-hat":{"default":"assets/run/male/hat/straw-hat/default.png"},"sun-hat":{"default":"assets/run/male/hat/sun-hat/default.png"}},"carry":{"bag":{"black":"assets/run/male/carry/bag/black.png","blue":"assets/run/male/carry/bag/blue.png","green":"assets/run/male/carry/bag/green.png","magenta":"assets/run/male/carry/bag/magenta.png","orange":"assets/run/male/carry/bag/orange.png","purple":"assets/run/male/carry/bag/purple.png","red":"assets/run/male/carry/bag/red.png","white":"assets/run/male/carry/bag/white.png","yellow":"assets/run/male/carry/bag/yellow.png"},"rucksack":{"red":"assets/run/male/carry/rucksack/red.png","black":"assets/run/male/carry/rucksack/black.png","blue":"assets/run/male/carry/rucksack/blue.png","green":"assets/run/male/carry/rucksack/green.png","magenta":"assets/run/male/carry/rucksack/magenta.png","orange":"assets/run/male/carry/rucksack/orange.png","purple":"assets/run/male/carry/rucksack/purple.png","white":"assets/run/male/carry/rucksack/white.png","yellow":"assets/run/male/carry/rucksack/yellow.png"},"sporty-backpack":{"black":"assets/run/male/carry/sporty-backpack/black.png","blue":"assets/run/male/carry/sporty-backpack/blue.png","green":"assets/run/male/carry/sporty-backpack/green.png","magenta":"assets/run/male/carry/sporty-backpack/magenta.png","orange":"assets/run/male/carry/sporty-backpack/orange.png","purple":"assets/run/male/carry/sporty-backpack/purple.png","red":"assets/run/male/carry/sporty-backpack/red.png","white":"assets/run/male/carry/sporty-backpack/white.png","yellow":"assets/run/male/carry/sporty-backpack/yellow.png"}},"hair":{"hair-1":{"black":"assets/run/male/hair/hair-1/black.png","blonde":"assets/run/male/hair/hair-1/blonde.png","blue":"assets/run/male/hair/hair-1/blue.png","brown":"assets/run/male/hair/hair-1/brown.png","cyan":"assets/run/male/hair/hair-1/cyan.png","ginger":"assets/run/male/hair/hair-1/ginger.png","green":"assets/run/male/hair/hair-1/green.png","pink":"assets/run/male/hair/hair-1/pink.png","purple":"assets/run/male/hair/hair-1/purple.png","red":"assets/run/male/hair/hair-1/red.png","white":"assets/run/male/hair/hair-1/white.png"},"hair-2":{"black":"assets/run/male/hair/hair-2/black.png","blonde":"assets/run/male/hair/hair-2/blonde.png","blue":"assets/run/male/hair/hair-2/blue.png","brown":"assets/run/male/hair/hair-2/brown.png","cyan":"assets/run/male/hair/hair-2/cyan.png","ginger":"assets/run/male/hair/hair-2/ginger.png","green":"assets/run/male/hair/hair-2/green.png","pink":"assets/run/male/hair/hair-2/pink.png","purple":"assets/run/male/hair/hair-2/purple.png","red":"assets/run/male/hair/hair-2/red.png","white":"assets/run/male/hair/hair-2/white.png"},"hair-3":{"black":"assets/run/male/hair/hair-3/black.png","blonde":"assets/run/male/hair/hair-3/blonde.png","blue":"assets/run/male/hair/hair-3/blue.png","brown":"assets/run/male/hair/hair-3/brown.png","cyan":"assets/run/male/hair/hair-3/cyan.png","ginger":"assets/run/male/hair/hair-3/ginger.png","green":"assets/run/male/hair/hair-3/green.png","pink":"assets/run/male/hair/hair-3/pink.png","purple":"assets/run/male/hair/hair-3/purple.png","red":"assets/run/male/hair/hair-3/red.png","white":"assets/run/male/hair/hair-3/white.png"},"hair-4":{"black":"assets/run/male/hair/hair-4/black.png","blonde":"assets/run/male/hair/hair-4/blonde.png","blue":"assets/run/male/hair/hair-4/blue.png","brown":"assets/run/male/hair/hair-4/brown.png","cyan":"assets/run/male/hair/hair-4/cyan.png","ginger":"assets/run/male/hair/hair-4/ginger.png","green":"assets/run/male/hair/hair-4/green.png","pink":"assets/run/male/hair/hair-4/pink.png","purple":"assets/run/male/hair/hair-4/purple.png","red":"assets/run/male/hair/hair-4/red.png","white":"assets/run/male/hair/hair-4/white.png"}}}},"bike":{"female":{"body":{"base":{"dark":"assets/bike/female/body/base/dark.png","light":"assets/bike/female/body/base/light.png","medium":"assets/bike/female/body/base/medium.png","pale":"assets/bike/female/body/base/pale.png"}},"bottom":{"beach-bottom":{"black":"assets/bike/female/bottom/beach-bottom/black.png","blue":"assets/bike/female/bottom/beach-bottom/blue.png","green":"assets/bike/female/bottom/beach-bottom/green.png","pink":"assets/bike/female/bottom/beach-bottom/pink.png","red":"assets/bike/female/bottom/beach-bottom/red.png","black-2":"assets/bike/female/bottom/beach-bottom/black-2.png","blue-2":"assets/bike/female/bottom/beach-bottom/blue-2.png","green-2":"assets/bike/female/bottom/beach-bottom/green-2.png","pink-2":"assets/bike/female/bottom/beach-bottom/pink-2.png","red-2":"assets/bike/female/bottom/beach-bottom/red-2.png"},"capris":{"aqua":"assets/bike/female/bottom/capris/aqua.png","beige":"assets/bike/female/bottom/capris/beige.png","black":"assets/bike/female/bottom/capris/black.png","green":"assets/bike/female/bottom/capris/green.png","navy":"assets/bike/female/bottom/capris/navy.png"},"classy-bottom":{"beige":"assets/bike/female/bottom/classy-bottom/beige.png","black":"assets/bike/female/bottom/classy-bottom/black.png","grey":"assets/bike/female/bottom/classy-bottom/grey.png","navy":"assets/bike/female/bottom/classy-bottom/navy.png","wine":"assets/bike/female/bottom/classy-bottom/wine.png","beige-2":"assets/bike/female/bottom/classy-bottom/beige-2.png","black-2":"assets/bike/female/bottom/classy-bottom/black-2.png","grey-2":"assets/bike/female/bottom/classy-bottom/grey-2.png","navy-2":"assets/bike/female/bottom/classy-bottom/navy-2.png","wine-2":"assets/bike/female/bottom/classy-bottom/wine-2.png"},"formal-bottoms":{"black":"assets/bike/female/bottom/formal-bottoms/black.png","blue":"assets/bike/female/bottom/formal-bottoms/blue.png","brown":"assets/bike/female/bottom/formal-bottoms/brown.png","grey":"assets/bike/female/bottom/formal-bottoms/grey.png","red":"assets/bike/female/bottom/formal-bottoms/red.png","black-2":"assets/bike/female/bottom/formal-bottoms/black-2.png","blue-2":"assets/bike/female/bottom/formal-bottoms/blue-2.png","brown-2":"assets/bike/female/bottom/formal-bottoms/brown-2.png","grey-2":"assets/bike/female/bottom/formal-bottoms/grey-2.png","pink":"assets/bike/female/bottom/formal-bottoms/pink.png"},"jeans":{"aqua":"assets/bike/female/bottom/jeans/aqua.png","black":"assets/bike/female/bottom/jeans/black.png","grey":"assets/bike/female/bottom/jeans/grey.png","light-blue":"assets/bike/female/bottom/jeans/light-blue.png","navy":"assets/bike/female/bottom/jeans/navy.png"},"jumpsuit-pants":{"black":"assets/bike/female/bottom/jumpsuit-pants/black.png","blue":"assets/bike/female/bottom/jumpsuit-pants/blue.png","green":"assets/bike/female/bottom/jumpsuit-pants/green.png","red":"assets/bike/female/bottom/jumpsuit-pants/red.png","yellow":"assets/bike/female/bottom/jumpsuit-pants/yellow.png"},"jumpsuit-pants-alt":{"black":"assets/bike/female/bottom/jumpsuit-pants-alt/black.png","blue":"assets/bike/female/bottom/jumpsuit-pants-alt/blue.png","green":"assets/bike/female/bottom/jumpsuit-pants-alt/green.png","red":"assets/bike/female/bottom/jumpsuit-pants-alt/red.png","yellow":"assets/bike/female/bottom/jumpsuit-pants-alt/yellow.png"},"long-skirt":{"black":"assets/bike/female/bottom/long-skirt/black.png","blue":"assets/bike/female/bottom/long-skirt/blue.png","green":"assets/bike/female/bottom/long-skirt/green.png","pink":"assets/bike/female/bottom/long-skirt/pink.png","purple":"assets/bike/female/bottom/long-skirt/purple.png"},"pants-and-boots":{"beige":"assets/bike/female/bottom/pants-and-boots/beige.png","black":"assets/bike/female/bottom/pants-and-boots/black.png","grey":"assets/bike/female/bottom/pants-and-boots/grey.png","light-blue":"assets/bike/female/bottom/pants-and-boots/light-blue.png","navy":"assets/bike/female/bottom/pants-and-boots/navy.png"},"pencil-skirt":{"black":"assets/bike/female/bottom/pencil-skirt/black.png","green":"assets/bike/female/bottom/pencil-skirt/green.png","grey":"assets/bike/female/bottom/pencil-skirt/grey.png","navy":"assets/bike/female/bottom/pencil-skirt/navy.png","wine":"assets/bike/female/bottom/pencil-skirt/wine.png"},"ribbon-skirt":{"blue":"assets/bike/female/bottom/ribbon-skirt/blue.png","green":"assets/bike/female/bottom/ribbon-skirt/green.png","pink":"assets/bike/female/bottom/ribbon-skirt/pink.png","red":"assets/bike/female/bottom/ribbon-skirt/red.png","wine":"assets/bike/female/bottom/ribbon-skirt/wine.png"},"school-uniform-bottom":{"dark":"assets/bike/female/bottom/school-uniform-bottom/dark.png","light":"assets/bike/female/bottom/school-uniform-bottom/light.png","dark-2":"assets/bike/female/bottom/school-uniform-bottom/dark-2.png","light-2":"assets/bike/female/bottom/school-uniform-bottom/light-2.png"},"shorts":{"black":"assets/bike/female/bottom/shorts/black.png","blue":"assets/bike/female/bottom/shorts/blue.png","green":"assets/bike/female/bottom/shorts/green.png","red":"assets/bike/female/bottom/shorts/red.png","white":"assets/bike/female/bottom/shorts/white.png"},"lord-suit-pants":{"default":"assets/bike/female/bottom/lord-suit-pants/default.png"}},"top":{"beach-top-f":{"black":"assets/bike/female/top/beach-top-f/black.png","blue":"assets/bike/female/top/beach-top-f/blue.png","green":"assets/bike/female/top/beach-top-f/green.png","pink":"assets/bike/female/top/beach-top-f/pink.png","red":"assets/bike/female/top/beach-top-f/red.png"},"beach-top-m":{"black":"assets/bike/female/top/beach-top-m/black.png","blue":"assets/bike/female/top/beach-top-m/blue.png","pink":"assets/bike/female/top/beach-top-m/pink.png","red":"assets/bike/female/top/beach-top-m/red.png","green":"assets/bike/female/top/beach-top-m/green.png"},"classy-top-f":{"beige":"assets/bike/female/top/classy-top-f/beige.png","black":"assets/bike/female/top/classy-top-f/black.png","grey":"assets/bike/female/top/classy-top-f/grey.png","navy":"assets/bike/female/top/classy-top-f/navy.png","wine":"assets/bike/female/top/classy-top-f/wine.png"},"classy-top-m":{"beige":"assets/bike/female/top/classy-top-m/beige.png","black":"assets/bike/female/top/classy-top-m/black.png","grey":"assets/bike/female/top/classy-top-m/grey.png","navy":"assets/bike/female/top/classy-top-m/navy.png","wine":"assets/bike/female/top/classy-top-m/wine.png"},"collared-shirt":{"black":"assets/bike/female/top/collared-shirt/black.png","light-blue":"assets/bike/female/top/collared-shirt/light-blue.png","navy":"assets/bike/female/top/collared-shirt/navy.png","white":"assets/bike/female/top/collared-shirt/white.png","wine":"assets/bike/female/top/collared-shirt/wine.png"},"formal":{"black":"assets/bike/female/top/formal/black.png","beige":"assets/bike/female/top/formal/beige.png","blue":"assets/bike/female/top/formal/blue.png","pink":"assets/bike/female/top/formal/pink.png","red":"assets/bike/female/top/formal/red.png"},"hoodie":{"black":"assets/bike/female/top/hoodie/black.png","blue":"assets/bike/female/top/hoodie/blue.png","green":"assets/bike/female/top/hoodie/green.png","purple":"assets/bike/female/top/hoodie/purple.png","red":"assets/bike/female/top/hoodie/red.png"},"jumpsuit-alt":{"blue":"assets/bike/female/top/jumpsuit-alt/blue.png","green":"assets/bike/female/top/jumpsuit-alt/green.png","red":"assets/bike/female/top/jumpsuit-alt/red.png","black":"assets/bike/female/top/jumpsuit-alt/black.png","yellow":"assets/bike/female/top/jumpsuit-alt/yellow.png"},"jumpsuit":{"black":"assets/bike/female/top/jumpsuit/black.png","blue":"assets/bike/female/top/jumpsuit/blue.png","green":"assets/bike/female/top/jumpsuit/green.png","red":"assets/bike/female/top/jumpsuit/red.png","yellow":"assets/bike/female/top/jumpsuit/yellow.png"},"lord-suit-top":{"purple":"assets/bike/female/top/lord-suit-top/purple.png","red":"assets/bike/female/top/lord-suit-top/red.png"},"open-jacket":{"blue":"assets/bike/female/top/open-jacket/blue.png","green":"assets/bike/female/top/open-jacket/green.png","orange":"assets/bike/female/top/open-jacket/orange.png","pink":"assets/bike/female/top/open-jacket/pink.png","red":"assets/bike/female/top/open-jacket/red.png"},"scarf-shirt":{"black":"assets/bike/female/top/scarf-shirt/black.png","blue":"assets/bike/female/top/scarf-shirt/blue.png","brown":"assets/bike/female/top/scarf-shirt/brown.png","red":"assets/bike/female/top/scarf-shirt/red.png","yellow":"assets/bike/female/top/scarf-shirt/yellow.png"},"school-uniform-fm":{"dark":"assets/bike/female/top/school-uniform-fm/dark.png","light":"assets/bike/female/top/school-uniform-fm/light.png","light-2":"assets/bike/female/top/school-uniform-fm/light-2.png","dark-2":"assets/bike/female/top/school-uniform-fm/dark-2.png"},"shirt-combo":{"black":"assets/bike/female/top/shirt-combo/black.png","blue":"assets/bike/female/top/shirt-combo/blue.png","red":"assets/bike/female/top/shirt-combo/red.png","white":"assets/bike/female/top/shirt-combo/white.png","wine":"assets/bike/female/top/shirt-combo/wine.png"},"t-shirt":{"black":"assets/bike/female/top/t-shirt/black.png","blue":"assets/bike/female/top/t-shirt/blue.png","green":"assets/bike/female/top/t-shirt/green.png","red":"assets/bike/female/top/t-shirt/red.png","white":"assets/bike/female/top/t-shirt/white.png"},"tank-top":{"black":"assets/bike/female/top/tank-top/black.png","green":"assets/bike/female/top/tank-top/green.png","navy":"assets/bike/female/top/tank-top/navy.png","pink":"assets/bike/female/top/tank-top/pink.png","red":"assets/bike/female/top/tank-top/red.png"},"trench-coat":{"beige":"assets/bike/female/top/trench-coat/beige.png","black":"assets/bike/female/top/trench-coat/black.png","navy":"assets/bike/female/top/trench-coat/navy.png","purple":"assets/bike/female/top/trench-coat/purple.png","red":"assets/bike/female/top/trench-coat/red.png"},"turtleneck-f":{"beige":"assets/bike/female/top/turtleneck-f/beige.png","black":"assets/bike/female/top/turtleneck-f/black.png","green":"assets/bike/female/top/turtleneck-f/green.png","white":"assets/bike/female/top/turtleneck-f/white.png","wine":"assets/bike/female/top/turtleneck-f/wine.png"},"turtleneck-m":{"beige":"assets/bike/female/top/turtleneck-m/beige.png","wine":"assets/bike/female/top/turtleneck-m/wine.png","black":"assets/bike/female/top/turtleneck-m/black.png","green":"assets/bike/female/top/turtleneck-m/green.png","white":"assets/bike/female/top/turtleneck-m/white.png"},"v-neck":{"black":"assets/bike/female/top/v-neck/black.png","green":"assets/bike/female/top/v-neck/green.png","orange":"assets/bike/female/top/v-neck/orange.png","purple":"assets/bike/female/top/v-neck/purple.png","yellow":"assets/bike/female/top/v-neck/yellow.png"},"vest":{"black":"assets/bike/female/top/vest/black.png","blue":"assets/bike/female/top/vest/blue.png","brown":"assets/bike/female/top/vest/brown.png","grey":"assets/bike/female/top/vest/grey.png","wine":"assets/bike/female/top/vest/wine.png"}},"hat":{"beanie":{"black":"assets/bike/female/hat/beanie/black.png","purple":"assets/bike/female/hat/beanie/purple.png"},"crown":{"gold":"assets/bike/female/hat/crown/gold.png","silver":"assets/bike/female/hat/crown/silver.png"},"flower":{"blue":"assets/bike/female/hat/flower/blue.png","red":"assets/bike/female/hat/flower/red.png"},"glasses":{"blue":"assets/bike/female/hat/glasses/blue.png","red":"assets/bike/female/hat/glasses/red.png"},"youngster-hat":{"blue":"assets/bike/female/hat/youngster-hat/blue.png","yellow":"assets/bike/female/hat/youngster-hat/yellow.png"},"beret":{"default":"assets/bike/female/hat/beret/default.png"},"bonnet":{"default":"assets/bike/female/hat/bonnet/default.png"},"cat":{"default":"assets/bike/female/hat/cat/default.png"},"devil":{"default":"assets/bike/female/hat/devil/default.png"},"feather-hat":{"default":"assets/bike/female/hat/feather-hat/default.png"},"fedora":{"default":"assets/bike/female/hat/fedora/default.png"},"hair-band":{"default":"assets/bike/female/hat/hair-band/default.png"},"headband":{"default":"assets/bike/female/hat/headband/default.png"},"miner":{"default":"assets/bike/female/hat/miner/default.png"},"poop":{"default":"assets/bike/female/hat/poop/default.png"},"ribbon":{"default":"assets/bike/female/hat/ribbon/default.png"},"straw-hat":{"default":"assets/bike/female/hat/straw-hat/default.png"},"sun-hat":{"default":"assets/bike/female/hat/sun-hat/default.png"}},"carry":{"bag":{"black":"assets/bike/female/carry/bag/black.png","blue":"assets/bike/female/carry/bag/blue.png","green":"assets/bike/female/carry/bag/green.png","magenta":"assets/bike/female/carry/bag/magenta.png","orange":"assets/bike/female/carry/bag/orange.png","purple":"assets/bike/female/carry/bag/purple.png","red":"assets/bike/female/carry/bag/red.png","white":"assets/bike/female/carry/bag/white.png","yellow":"assets/bike/female/carry/bag/yellow.png"},"rucksack":{"red":"assets/bike/female/carry/rucksack/red.png","black":"assets/bike/female/carry/rucksack/black.png","blue":"assets/bike/female/carry/rucksack/blue.png","green":"assets/bike/female/carry/rucksack/green.png","magenta":"assets/bike/female/carry/rucksack/magenta.png","orange":"assets/bike/female/carry/rucksack/orange.png","purple":"assets/bike/female/carry/rucksack/purple.png","white":"assets/bike/female/carry/rucksack/white.png","yellow":"assets/bike/female/carry/rucksack/yellow.png"},"sporty-backpack":{"black":"assets/bike/female/carry/sporty-backpack/black.png","blue":"assets/bike/female/carry/sporty-backpack/blue.png","green":"assets/bike/female/carry/sporty-backpack/green.png","magenta":"assets/bike/female/carry/sporty-backpack/magenta.png","orange":"assets/bike/female/carry/sporty-backpack/orange.png","purple":"assets/bike/female/carry/sporty-backpack/purple.png","red":"assets/bike/female/carry/sporty-backpack/red.png","white":"assets/bike/female/carry/sporty-backpack/white.png","yellow":"assets/bike/female/carry/sporty-backpack/yellow.png"}},"hair":{"hair-3":{"black":"assets/bike/female/hair/hair-3/black.png","blonde":"assets/bike/female/hair/hair-3/blonde.png","blue":"assets/bike/female/hair/hair-3/blue.png","brown":"assets/bike/female/hair/hair-3/brown.png","cyan":"assets/bike/female/hair/hair-3/cyan.png","ginger":"assets/bike/female/hair/hair-3/ginger.png","green":"assets/bike/female/hair/hair-3/green.png","pink":"assets/bike/female/hair/hair-3/pink.png","purple":"assets/bike/female/hair/hair-3/purple.png","red":"assets/bike/female/hair/hair-3/red.png","white":"assets/bike/female/hair/hair-3/white.png"},"hair-1":{"black":"assets/bike/female/hair/hair-1/black.png","cyan":"assets/bike/female/hair/hair-1/cyan.png","blonde":"assets/bike/female/hair/hair-1/blonde.png","blue":"assets/bike/female/hair/hair-1/blue.png","brown":"assets/bike/female/hair/hair-1/brown.png","ginger":"assets/bike/female/hair/hair-1/ginger.png","green":"assets/bike/female/hair/hair-1/green.png","pink":"assets/bike/female/hair/hair-1/pink.png","purple":"assets/bike/female/hair/hair-1/purple.png","red":"assets/bike/female/hair/hair-1/red.png","white":"assets/bike/female/hair/hair-1/white.png"},"hair-2":{"black":"assets/bike/female/hair/hair-2/black.png","blonde":"assets/bike/female/hair/hair-2/blonde.png","blue":"assets/bike/female/hair/hair-2/blue.png","brown":"assets/bike/female/hair/hair-2/brown.png","cyan":"assets/bike/female/hair/hair-2/cyan.png","green":"assets/bike/female/hair/hair-2/green.png","pink":"assets/bike/female/hair/hair-2/pink.png","red":"assets/bike/female/hair/hair-2/red.png","violet":"assets/bike/female/hair/hair-2/violet.png","white":"assets/bike/female/hair/hair-2/white.png","ginger":"assets/bike/female/hair/hair-2/ginger.png"},"hair-4":{"black":"assets/bike/female/hair/hair-4/black.png","blonde":"assets/bike/female/hair/hair-4/blonde.png","blue":"assets/bike/female/hair/hair-4/blue.png","brown":"assets/bike/female/hair/hair-4/brown.png","cyan":"assets/bike/female/hair/hair-4/cyan.png","ginger":"assets/bike/female/hair/hair-4/ginger.png","green":"assets/bike/female/hair/hair-4/green.png","pink":"assets/bike/female/hair/hair-4/pink.png","purple":"assets/bike/female/hair/hair-4/purple.png","red":"assets/bike/female/hair/hair-4/red.png","white":"assets/bike/female/hair/hair-4/white.png"}}},"male":{"body":{"base":{"dark":"assets/bike/male/body/base/dark.png","light":"assets/bike/male/body/base/light.png","medium":"assets/bike/male/body/base/medium.png","pale":"assets/bike/male/body/base/pale.png"}},"bottom":{"beach-bottom":{"black":"assets/bike/male/bottom/beach-bottom/black.png","blue":"assets/bike/male/bottom/beach-bottom/blue.png","green":"assets/bike/male/bottom/beach-bottom/green.png","pink":"assets/bike/male/bottom/beach-bottom/pink.png","red":"assets/bike/male/bottom/beach-bottom/red.png","black-2":"assets/bike/male/bottom/beach-bottom/black-2.png","blue-2":"assets/bike/male/bottom/beach-bottom/blue-2.png","green-2":"assets/bike/male/bottom/beach-bottom/green-2.png","pink-2":"assets/bike/male/bottom/beach-bottom/pink-2.png","red-2":"assets/bike/male/bottom/beach-bottom/red-2.png"},"capris":{"aqua":"assets/bike/male/bottom/capris/aqua.png","beige":"assets/bike/male/bottom/capris/beige.png","black":"assets/bike/male/bottom/capris/black.png","green":"assets/bike/male/bottom/capris/green.png","navy":"assets/bike/male/bottom/capris/navy.png"},"classy-bottom":{"beige":"assets/bike/male/bottom/classy-bottom/beige.png","black":"assets/bike/male/bottom/classy-bottom/black.png","grey":"assets/bike/male/bottom/classy-bottom/grey.png","navy":"assets/bike/male/bottom/classy-bottom/navy.png","wine":"assets/bike/male/bottom/classy-bottom/wine.png","beige-2":"assets/bike/male/bottom/classy-bottom/beige-2.png","black-2":"assets/bike/male/bottom/classy-bottom/black-2.png","grey-2":"assets/bike/male/bottom/classy-bottom/grey-2.png","navy-2":"assets/bike/male/bottom/classy-bottom/navy-2.png","wine-2":"assets/bike/male/bottom/classy-bottom/wine-2.png"},"formal-bottoms":{"black":"assets/bike/male/bottom/formal-bottoms/black.png","blue":"assets/bike/male/bottom/formal-bottoms/blue.png","brown":"assets/bike/male/bottom/formal-bottoms/brown.png","grey":"assets/bike/male/bottom/formal-bottoms/grey.png","red":"assets/bike/male/bottom/formal-bottoms/red.png","black-2":"assets/bike/male/bottom/formal-bottoms/black-2.png","blue-2":"assets/bike/male/bottom/formal-bottoms/blue-2.png","brown-2":"assets/bike/male/bottom/formal-bottoms/brown-2.png","grey-2":"assets/bike/male/bottom/formal-bottoms/grey-2.png","pink":"assets/bike/male/bottom/formal-bottoms/pink.png"},"jeans":{"aqua":"assets/bike/male/bottom/jeans/aqua.png","black":"assets/bike/male/bottom/jeans/black.png","grey":"assets/bike/male/bottom/jeans/grey.png","light-blue":"assets/bike/male/bottom/jeans/light-blue.png","navy":"assets/bike/male/bottom/jeans/navy.png"},"jumpsuit-pants":{"black":"assets/bike/male/bottom/jumpsuit-pants/black.png","blue":"assets/bike/male/bottom/jumpsuit-pants/blue.png","green":"assets/bike/male/bottom/jumpsuit-pants/green.png","red":"assets/bike/male/bottom/jumpsuit-pants/red.png","yellow":"assets/bike/male/bottom/jumpsuit-pants/yellow.png"},"jumpsuit-pants-alt":{"black":"assets/bike/male/bottom/jumpsuit-pants-alt/black.png","blue":"assets/bike/male/bottom/jumpsuit-pants-alt/blue.png","green":"assets/bike/male/bottom/jumpsuit-pants-alt/green.png","red":"assets/bike/male/bottom/jumpsuit-pants-alt/red.png","yellow":"assets/bike/male/bottom/jumpsuit-pants-alt/yellow.png"},"long-skirt":{"black":"assets/bike/male/bottom/long-skirt/black.png","blue":"assets/bike/male/bottom/long-skirt/blue.png","green":"assets/bike/male/bottom/long-skirt/green.png","pink":"assets/bike/male/bottom/long-skirt/pink.png","purple":"assets/bike/male/bottom/long-skirt/purple.png"},"pants-and-boots":{"beige":"assets/bike/male/bottom/pants-and-boots/beige.png","black":"assets/bike/male/bottom/pants-and-boots/black.png","grey":"assets/bike/male/bottom/pants-and-boots/grey.png","light-blue":"assets/bike/male/bottom/pants-and-boots/light-blue.png","navy":"assets/bike/male/bottom/pants-and-boots/navy.png"},"pencil-skirt":{"black":"assets/bike/male/bottom/pencil-skirt/black.png","green":"assets/bike/male/bottom/pencil-skirt/green.png","grey":"assets/bike/male/bottom/pencil-skirt/grey.png","navy":"assets/bike/male/bottom/pencil-skirt/navy.png","wine":"assets/bike/male/bottom/pencil-skirt/wine.png"},"ribbon-skirt":{"blue":"assets/bike/male/bottom/ribbon-skirt/blue.png","green":"assets/bike/male/bottom/ribbon-skirt/green.png","pink":"assets/bike/male/bottom/ribbon-skirt/pink.png","red":"assets/bike/male/bottom/ribbon-skirt/red.png","wine":"assets/bike/male/bottom/ribbon-skirt/wine.png"},"school-uniform-bottom":{"dark":"assets/bike/male/bottom/school-uniform-bottom/dark.png","light":"assets/bike/male/bottom/school-uniform-bottom/light.png","dark-2":"assets/bike/male/bottom/school-uniform-bottom/dark-2.png","light-2":"assets/bike/male/bottom/school-uniform-bottom/light-2.png"},"shorts":{"black":"assets/bike/male/bottom/shorts/black.png","blue":"assets/bike/male/bottom/shorts/blue.png","green":"assets/bike/male/bottom/shorts/green.png","red":"assets/bike/male/bottom/shorts/red.png","white":"assets/bike/male/bottom/shorts/white.png"},"lord-suit-pants":{"default":"assets/bike/male/bottom/lord-suit-pants/default.png"}},"top":{"beach-top-f":{"black":"assets/bike/male/top/beach-top-f/black.png","blue":"assets/bike/male/top/beach-top-f/blue.png","green":"assets/bike/male/top/beach-top-f/green.png","pink":"assets/bike/male/top/beach-top-f/pink.png","red":"assets/bike/male/top/beach-top-f/red.png"},"beach-top-m":{"black":"assets/bike/male/top/beach-top-m/black.png","blue":"assets/bike/male/top/beach-top-m/blue.png","pink":"assets/bike/male/top/beach-top-m/pink.png","red":"assets/bike/male/top/beach-top-m/red.png","green":"assets/bike/male/top/beach-top-m/green.png"},"classy-top-f":{"beige":"assets/bike/male/top/classy-top-f/beige.png","black":"assets/bike/male/top/classy-top-f/black.png","grey":"assets/bike/male/top/classy-top-f/grey.png","navy":"assets/bike/male/top/classy-top-f/navy.png","wine":"assets/bike/male/top/classy-top-f/wine.png"},"classy-top-m":{"beige":"assets/bike/male/top/classy-top-m/beige.png","black":"assets/bike/male/top/classy-top-m/black.png","grey":"assets/bike/male/top/classy-top-m/grey.png","navy":"assets/bike/male/top/classy-top-m/navy.png","wine":"assets/bike/male/top/classy-top-m/wine.png"},"collared-shirt":{"black":"assets/bike/male/top/collared-shirt/black.png","light-blue":"assets/bike/male/top/collared-shirt/light-blue.png","navy":"assets/bike/male/top/collared-shirt/navy.png","white":"assets/bike/male/top/collared-shirt/white.png","wine":"assets/bike/male/top/collared-shirt/wine.png"},"formal":{"black":"assets/bike/male/top/formal/black.png","beige":"assets/bike/male/top/formal/beige.png","blue":"assets/bike/male/top/formal/blue.png","pink":"assets/bike/male/top/formal/pink.png","red":"assets/bike/male/top/formal/red.png"},"hoodie":{"black":"assets/bike/male/top/hoodie/black.png","blue":"assets/bike/male/top/hoodie/blue.png","green":"assets/bike/male/top/hoodie/green.png","purple":"assets/bike/male/top/hoodie/purple.png","red":"assets/bike/male/top/hoodie/red.png"},"jumpsuit-alt":{"blue":"assets/bike/male/top/jumpsuit-alt/blue.png","green":"assets/bike/male/top/jumpsuit-alt/green.png","red":"assets/bike/male/top/jumpsuit-alt/red.png","black":"assets/bike/male/top/jumpsuit-alt/black.png","yellow":"assets/bike/male/top/jumpsuit-alt/yellow.png"},"jumpsuit":{"black":"assets/bike/male/top/jumpsuit/black.png","blue":"assets/bike/male/top/jumpsuit/blue.png","green":"assets/bike/male/top/jumpsuit/green.png","red":"assets/bike/male/top/jumpsuit/red.png","yellow":"assets/bike/male/top/jumpsuit/yellow.png"},"lord-suit-top":{"purple":"assets/bike/male/top/lord-suit-top/purple.png","red":"assets/bike/male/top/lord-suit-top/red.png"},"open-jacket":{"blue":"assets/bike/male/top/open-jacket/blue.png","green":"assets/bike/male/top/open-jacket/green.png","orange":"assets/bike/male/top/open-jacket/orange.png","pink":"assets/bike/male/top/open-jacket/pink.png","red":"assets/bike/male/top/open-jacket/red.png"},"scarf-shirt":{"black":"assets/bike/male/top/scarf-shirt/black.png","blue":"assets/bike/male/top/scarf-shirt/blue.png","brown":"assets/bike/male/top/scarf-shirt/brown.png","red":"assets/bike/male/top/scarf-shirt/red.png","yellow":"assets/bike/male/top/scarf-shirt/yellow.png"},"school-uniform-fm":{"dark":"assets/bike/male/top/school-uniform-fm/dark.png","light":"assets/bike/male/top/school-uniform-fm/light.png","light-2":"assets/bike/male/top/school-uniform-fm/light-2.png","dark-2":"assets/bike/male/top/school-uniform-fm/dark-2.png"},"shirt-combo":{"black":"assets/bike/male/top/shirt-combo/black.png","blue":"assets/bike/male/top/shirt-combo/blue.png","red":"assets/bike/male/top/shirt-combo/red.png","white":"assets/bike/male/top/shirt-combo/white.png","wine":"assets/bike/male/top/shirt-combo/wine.png"},"t-shirt":{"black":"assets/bike/male/top/t-shirt/black.png","blue":"assets/bike/male/top/t-shirt/blue.png","green":"assets/bike/male/top/t-shirt/green.png","red":"assets/bike/male/top/t-shirt/red.png","white":"assets/bike/male/top/t-shirt/white.png"},"tank-top":{"black":"assets/bike/male/top/tank-top/black.png","green":"assets/bike/male/top/tank-top/green.png","navy":"assets/bike/male/top/tank-top/navy.png","pink":"assets/bike/male/top/tank-top/pink.png","red":"assets/bike/male/top/tank-top/red.png"},"trench-coat":{"beige":"assets/bike/male/top/trench-coat/beige.png","black":"assets/bike/male/top/trench-coat/black.png","navy":"assets/bike/male/top/trench-coat/navy.png","purple":"assets/bike/male/top/trench-coat/purple.png","red":"assets/bike/male/top/trench-coat/red.png"},"turtleneck-f":{"beige":"assets/bike/male/top/turtleneck-f/beige.png","black":"assets/bike/male/top/turtleneck-f/black.png","green":"assets/bike/male/top/turtleneck-f/green.png","white":"assets/bike/male/top/turtleneck-f/white.png","wine":"assets/bike/male/top/turtleneck-f/wine.png"},"turtleneck-m":{"beige":"assets/bike/male/top/turtleneck-m/beige.png","wine":"assets/bike/male/top/turtleneck-m/wine.png","black":"assets/bike/male/top/turtleneck-m/black.png","green":"assets/bike/male/top/turtleneck-m/green.png","white":"assets/bike/male/top/turtleneck-m/white.png"},"v-neck":{"black":"assets/bike/male/top/v-neck/black.png","green":"assets/bike/male/top/v-neck/green.png","orange":"assets/bike/male/top/v-neck/orange.png","purple":"assets/bike/male/top/v-neck/purple.png","yellow":"assets/bike/male/top/v-neck/yellow.png"},"vest":{"black":"assets/bike/male/top/vest/black.png","blue":"assets/bike/male/top/vest/blue.png","brown":"assets/bike/male/top/vest/brown.png","grey":"assets/bike/male/top/vest/grey.png","wine":"assets/bike/male/top/vest/wine.png"}},"hat":{"beanie":{"black":"assets/bike/male/hat/beanie/black.png","purple":"assets/bike/male/hat/beanie/purple.png"},"crown":{"gold":"assets/bike/male/hat/crown/gold.png","silver":"assets/bike/male/hat/crown/silver.png"},"flower":{"blue":"assets/bike/male/hat/flower/blue.png","red":"assets/bike/male/hat/flower/red.png"},"glasses":{"blue":"assets/bike/male/hat/glasses/blue.png","red":"assets/bike/male/hat/glasses/red.png"},"youngster-hat":{"blue":"assets/bike/male/hat/youngster-hat/blue.png","yellow":"assets/bike/male/hat/youngster-hat/yellow.png"},"beret":{"default":"assets/bike/male/hat/beret/default.png"},"bonnet":{"default":"assets/bike/male/hat/bonnet/default.png"},"cat":{"default":"assets/bike/male/hat/cat/default.png"},"devil":{"default":"assets/bike/male/hat/devil/default.png"},"feather-hat":{"default":"assets/bike/male/hat/feather-hat/default.png"},"fedora":{"default":"assets/bike/male/hat/fedora/default.png"},"hair-band":{"default":"assets/bike/male/hat/hair-band/default.png"},"headband":{"default":"assets/bike/male/hat/headband/default.png"},"miner":{"default":"assets/bike/male/hat/miner/default.png"},"poop":{"default":"assets/bike/male/hat/poop/default.png"},"ribbon":{"default":"assets/bike/male/hat/ribbon/default.png"},"straw-hat":{"default":"assets/bike/male/hat/straw-hat/default.png"},"sun-hat":{"default":"assets/bike/male/hat/sun-hat/default.png"}},"carry":{"bag":{"black":"assets/bike/male/carry/bag/black.png","blue":"assets/bike/male/carry/bag/blue.png","green":"assets/bike/male/carry/bag/green.png","magenta":"assets/bike/male/carry/bag/magenta.png","orange":"assets/bike/male/carry/bag/orange.png","purple":"assets/bike/male/carry/bag/purple.png","red":"assets/bike/male/carry/bag/red.png","white":"assets/bike/male/carry/bag/white.png","yellow":"assets/bike/male/carry/bag/yellow.png"},"rucksack":{"red":"assets/bike/male/carry/rucksack/red.png","black":"assets/bike/male/carry/rucksack/black.png","blue":"assets/bike/male/carry/rucksack/blue.png","green":"assets/bike/male/carry/rucksack/green.png","magenta":"assets/bike/male/carry/rucksack/magenta.png","orange":"assets/bike/male/carry/rucksack/orange.png","purple":"assets/bike/male/carry/rucksack/purple.png","white":"assets/bike/male/carry/rucksack/white.png","yellow":"assets/bike/male/carry/rucksack/yellow.png"},"sporty-backpack":{"black":"assets/bike/male/carry/sporty-backpack/black.png","blue":"assets/bike/male/carry/sporty-backpack/blue.png","green":"assets/bike/male/carry/sporty-backpack/green.png","magenta":"assets/bike/male/carry/sporty-backpack/magenta.png","orange":"assets/bike/male/carry/sporty-backpack/orange.png","purple":"assets/bike/male/carry/sporty-backpack/purple.png","red":"assets/bike/male/carry/sporty-backpack/red.png","white":"assets/bike/male/carry/sporty-backpack/white.png","yellow":"assets/bike/male/carry/sporty-backpack/yellow.png"}},"hair":{"hair-1":{"black":"assets/bike/male/hair/hair-1/black.png","blonde":"assets/bike/male/hair/hair-1/blonde.png","blue":"assets/bike/male/hair/hair-1/blue.png","brown":"assets/bike/male/hair/hair-1/brown.png","cyan":"assets/bike/male/hair/hair-1/cyan.png","ginger":"assets/bike/male/hair/hair-1/ginger.png","green":"assets/bike/male/hair/hair-1/green.png","pink":"assets/bike/male/hair/hair-1/pink.png","purple":"assets/bike/male/hair/hair-1/purple.png","red":"assets/bike/male/hair/hair-1/red.png","white":"assets/bike/male/hair/hair-1/white.png"},"hair-2":{"black":"assets/bike/male/hair/hair-2/black.png","blonde":"assets/bike/male/hair/hair-2/blonde.png","blue":"assets/bike/male/hair/hair-2/blue.png","brown":"assets/bike/male/hair/hair-2/brown.png","cyan":"assets/bike/male/hair/hair-2/cyan.png","ginger":"assets/bike/male/hair/hair-2/ginger.png","green":"assets/bike/male/hair/hair-2/green.png","pink":"assets/bike/male/hair/hair-2/pink.png","purple":"assets/bike/male/hair/hair-2/purple.png","red":"assets/bike/male/hair/hair-2/red.png","white":"assets/bike/male/hair/hair-2/white.png"},"hair-3":{"black":"assets/bike/male/hair/hair-3/black.png","blonde":"assets/bike/male/hair/hair-3/blonde.png","blue":"assets/bike/male/hair/hair-3/blue.png","brown":"assets/bike/male/hair/hair-3/brown.png","cyan":"assets/bike/male/hair/hair-3/cyan.png","ginger":"assets/bike/male/hair/hair-3/ginger.png","green":"assets/bike/male/hair/hair-3/green.png","pink":"assets/bike/male/hair/hair-3/pink.png","purple":"assets/bike/male/hair/hair-3/purple.png","red":"assets/bike/male/hair/hair-3/red.png","white":"assets/bike/male/hair/hair-3/white.png"},"hair-4":{"black":"assets/bike/male/hair/hair-4/black.png","blonde":"assets/bike/male/hair/hair-4/blonde.png","blue":"assets/bike/male/hair/hair-4/blue.png","brown":"assets/bike/male/hair/hair-4/brown.png","cyan":"assets/bike/male/hair/hair-4/cyan.png","ginger":"assets/bike/male/hair/hair-4/ginger.png","green":"assets/bike/male/hair/hair-4/green.png","pink":"assets/bike/male/hair/hair-4/pink.png","purple":"assets/bike/male/hair/hair-4/purple.png","red":"assets/bike/male/hair/hair-4/red.png","white":"assets/bike/male/hair/hair-4/white.png"}}}}},"defaults":{"female":{"body":{"item":"base","variant":"light"},"hair":{"item":"hair-1","variant":"brown"},"top":{"item":"t-shirt","variant":"red"},"bottom":{"item":"jeans","variant":"light-blue"},"hat":null,"carry":null},"male":{"body":{"item":"base","variant":"light"},"hair":{"item":"hair-1","variant":"brown"},"top":{"item":"t-shirt","variant":"red"},"bottom":{"item":"jeans","variant":"light-blue"},"hat":null,"carry":null}}};

const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];
const clone = (obj) => JSON.parse(JSON.stringify(obj));

const colorMap = {
  black:'#2f2933', white:'#f8f5f0', red:'#d5545c', blue:'#4e78c4', green:'#5e9e69',
  pink:'#d98aa8', purple:'#7d66b4', wine:'#7a3f53', yellow:'#e1ba54', brown:'#8b5f43',
  beige:'#d8c0a2', grey:'#9095a1', gray:'#9095a1', navy:'#40507f', orange:'#d8844f',
  aqua:'#63b8c4', 'light-blue':'#8db5ea', magenta:'#b76499', brownish:'#8c6b59',
  dark:'#5a514d', light:'#f0dcc0', pale:'#f6e7d7', medium:'#d6b290', default:'#d9d2c7'
};

const itemVisibilityRules = {
  female: {
    top: { exclude:['lord-suit-top','scarf-top'] },
    bottom: { exclude:['classy-pants','formal-pants','school-uniform-bottom'] }
  },
  male: {
    top: { exclude:['lord-suit','scarf-shirt'] },
    bottom: { exclude:['classy-bottom','evening-bottom','formal-bottoms','long-skirt','pencil-skirt','ribbon-skirt','school-girl'] }
  }
};

const displayViews = [
  { id:'icon', label:'Icon', navLabel:'Icon', downloadLabel:'icon' },
  { id:'front', label:'Frente', navLabel:'F', downloadLabel:'frente' },
  { id:'back', label:'Costas', navLabel:'C', downloadLabel:'costas' },
  { id:'walk', label:'Andando', navLabel:'A', downloadLabel:'andando' },
  { id:'run', label:'Correndo', navLabel:'R', downloadLabel:'correndo' },
  { id:'bike', label:'Bike', navLabel:'B', downloadLabel:'bike' },
  { id:'combo', label:'Completo', navLabel:'Tudo', downloadLabel:'completo' }
];

const iconCrops = {
  female: { x:58, y:4, width:56, height:56 },
  male: { x:62, y:4, width:56, height:56 }
};
const iconSceneOffsets = {
  female: { x:8, y:0 },
  male: { x:12, y:0 }
};
const sceneBackgrounds = [
  { id:'beach', label:'Beach', src:'assets/backgrounds/BEACH.png' },
  { id:'beach-2', label:'Beach 2', src:'assets/backgrounds/BEACH 2.png' },
  { id:'beach-night', label:'Beach Night', src:'assets/backgrounds/BEACH NIGHT.png' },
  { id:'cave', label:'Cave', src:'assets/backgrounds/CAVE.png' },
  { id:'cave-2', label:'Cave 2', src:'assets/backgrounds/CAVE 2.png' },
  { id:'cave-night', label:'Cave Night', src:'assets/backgrounds/CAVE NIGHT.png' },
  { id:'desert', label:'Desert', src:'assets/backgrounds/DESERT.png' },
  { id:'desert-night', label:'Desert Night', src:'assets/backgrounds/DESERT NIGHT.png' },
  { id:'lake', label:'Lake', src:'assets/backgrounds/LAKE.png' },
  { id:'lake-night', label:'Lake Night', src:'assets/backgrounds/LAKE NIGHT.png' },
  { id:'mountain', label:'Mountain', src:'assets/backgrounds/MOUNTAIN.png' },
  { id:'mountain-2', label:'Mountain 2', src:'assets/backgrounds/MOUNTAIN 2.png' },
  { id:'mountain-night', label:'Mountain Night', src:'assets/backgrounds/MOUNTAIN NIGHT.png' },
  { id:'ocean', label:'Ocean', src:'assets/backgrounds/OCEAN.png' },
  { id:'ocean-night', label:'Ocean Night', src:'assets/backgrounds/OCEAN NIGHT.png' },
  { id:'path', label:'Path', src:'assets/backgrounds/PATH.png' },
  { id:'path-2', label:'Path 2', src:'assets/backgrounds/PATH 2.png' },
  { id:'path-night', label:'Path Night', src:'assets/backgrounds/PATH NIGHT.png' },
  { id:'snow', label:'Snow', src:'assets/backgrounds/SNOW.png' },
  { id:'snow-night', label:'Snow Night', src:'assets/backgrounds/SNOW NIGHT.png' },
  { id:'tall-grass', label:'Tall Grass', src:'assets/backgrounds/TALL GRASS.png' },
  { id:'tall-grass-night', label:'Tall Grass Night', src:'assets/backgrounds/TALL GRASS NIGHT.png' },
  { id:'underwater', label:'Underwater', src:'assets/backgrounds/UNDERWATER.png' }
];

const state = {
  manifest: null,
  gender: 'female',
  activeCategory: 'body',
  activeView: 'icon',
  activeBackground: 'tall-grass',
  selections: {},
  savedSelections: { female:{}, male:{} },
  lastRenderToken: 0
};

const imageCache = new Map();
let sceneBackgroundImage = null;
const hiddenCanvases = {
  front: document.createElement('canvas'),
  icon: document.createElement('canvas'),
  back: document.createElement('canvas'),
  walk: document.createElement('canvas'),
  run: document.createElement('canvas'),
  bike: document.createElement('canvas'),
  combo: document.createElement('canvas')
};

function assetUrl(path){ return path || ''; }
function prettify(value=''){ return value.replace(/[-_]+/g, ' ').replace(/\b\w/g, s => s.toUpperCase()); }
function getManifest(){ return state.manifest; }
function getViews(){ return getManifest().views; }
function getCategories(){ return getManifest().categories; }
function getDefaults(gender){ return getManifest().defaults?.[gender] || {}; }
function catById(id){ return getCategories().find(cat => cat.id === id); }
function itemById(cat, itemId){ return cat?.items?.find(item => item.id === itemId); }
function getPathMap(viewId, gender, catId, itemId){ return getManifest().paths?.[viewId]?.[gender]?.[catId]?.[itemId] || null; }
function isOverworldView(viewId){ return viewId === 'walk' || viewId === 'run' || viewId === 'bike'; }
function isItemAllowedForGender(catId, itemId, gender=state.gender){
  const rules = itemVisibilityRules[gender]?.[catId];
  if(rules?.exclude?.includes(itemId)) return false;
  if(rules?.include && !rules.include.includes(itemId)) return false;
  return true;
}
function getFrontItemsMap(catId, gender=state.gender){
  return getManifest().paths?.front?.[gender]?.[catId] || {};
}
function availableItemsForCategory(cat, gender=state.gender){
  const frontMap = getFrontItemsMap(cat.id, gender);
  return (cat.items || []).filter(item => {
    const itemMap = frontMap[item.id];
    if(!itemMap || !isItemAllowedForGender(cat.id, item.id, gender)) return false;
    return Object.keys(itemMap).some(variantId => variantIsRenderableInViews(cat.id, item.id, variantId, gender));
  });
}
function availableVariantsForItem(cat, item, gender=state.gender){
  const pathMap = getPathMap('front', gender, cat.id, item.id) || {};
  const ordered = [];
  const seen = new Set();
  for(const variant of item.variants || []){
    if(pathMap[variant.id] && variantIsRenderableInViews(cat.id, item.id, variant.id, gender)){
      ordered.push({ id: variant.id, name: variant.name || prettify(variant.id) });
      seen.add(variant.id);
    }
  }
  for(const variantId of Object.keys(pathMap)){
    if(!seen.has(variantId) && variantIsRenderableInViews(cat.id, item.id, variantId, gender)){
      ordered.push({ id: variantId, name: prettify(variantId) });
    }
  }
  return ordered;
}
function visibleCategories(gender=state.gender){
  return getCategories().filter(cat => availableItemsForCategory(cat, gender).length > 0 || (cat.id === 'body' && Object.keys(getFrontItemsMap('body', gender)).length > 0));
}
function ensureActiveCategory(){
  const visible = visibleCategories();
  if(!visible.find(cat => cat.id === state.activeCategory)) state.activeCategory = visible[0]?.id || 'body';
}
function normalizeSelectionForCategory(cat){
  const items = availableItemsForCategory(cat);
  const current = state.selections[cat.id];
  if(items.length === 0){ state.selections[cat.id] = null; return; }
  if(cat.optional && (current === null || current === undefined)){
    state.selections[cat.id] = null;
    return;
  }
  const currentItem = current ? items.find(item => item.id === current.item) : null;
  if(currentItem){
    const vars = availableVariantsForItem(cat, currentItem);
    if(vars.find(v => v.id === current.variant)) return;
    state.selections[cat.id] = { item: currentItem.id, variant: vars[0]?.id || 'default' };
    return;
  }
  const defaultSel = getDefaults(state.gender)?.[cat.id];
  if(defaultSel){
    const defaultItem = items.find(item => item.id === defaultSel.item);
    if(defaultItem){
      const vars = availableVariantsForItem(cat, defaultItem);
      const variant = vars.find(v => v.id === defaultSel.variant)?.id || vars[0]?.id;
      if(variant){ state.selections[cat.id] = { item: defaultItem.id, variant }; return; }
    }
  }
  const firstItem = items[0];
  const firstVariant = availableVariantsForItem(cat, firstItem)[0]?.id || 'default';
  state.selections[cat.id] = { item: firstItem.id, variant: firstVariant };
}
function normalizeSelections(){
  for(const cat of getCategories()) normalizeSelectionForCategory(cat);
  ensureActiveCategory();
}

function loadImage(src){
  if(!src) return Promise.resolve(null);
  if(imageCache.has(src)) return imageCache.get(src);
  const promise = new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = assetUrl(src);
  });
  imageCache.set(src, promise);
  return promise;
}

function getSceneBackground(backgroundId=state.activeBackground){
  return sceneBackgrounds.find(background => background.id === backgroundId) || sceneBackgrounds[0];
}

async function loadSceneBackground(backgroundId=state.activeBackground){
  const background = getSceneBackground(backgroundId);
  state.activeBackground = background.id;
  try{
    sceneBackgroundImage = await loadImage(background.src);
  }catch(err){
    sceneBackgroundImage = null;
    console.warn('Erro ao carregar fundo', background.src, err);
  }
}

const itemAliases = {
  back: {
    top: {
      'lord-suit-top': 'lord-suit',
      'scarf-top': 'scarf-shirt'
    }
  },
  overworld: {
    top: {
      beach: { female:'beach-top-f', male:'beach-top-m' },
      classy: { female:'classy-top-f', male:'classy-top-m' },
      'lord-suit': 'lord-suit-top',
      'lord-suit-top': 'lord-suit-top',
      'scarf-top': 'scarf-shirt',
      'school-uniform': 'school-uniform-fm',
      turtleneck: { female:'turtleneck-f', male:'turtleneck-m' }
    },
    bottom: {
      base: 'lord-suit-pants',
      'classy-bottom': 'formal-bottoms',
      'classy-pants': 'classy-bottom',
      'evening-bottom': 'classy-bottom',
      'formal-pants': 'formal-bottoms',
      'school-girl': 'school-uniform-bottom'
    }
  }
};

const variantAliases = {
  top: {
    jumpsuit: { yellow:['black-2'] },
    'trench-coat': { brown:['beige'] },
    turtleneck: { brownish:['beige'], magenta:['wine'] },
    'turtleneck-f': { brownish:['beige'], magenta:['wine'] },
    'turtleneck-m': { brownish:['beige'], magenta:['wine'] },
    vest: { brown:['beige'] }
  },
  bottom: {
    base: { 'lords-pants':['default'], 'lord-suit-pants':['default'] },
    'lord-suit-pants': { 'lords-pants':['default'], 'lord-suit-pants':['default'] },
    'school-girl': { black:['dark'] },
    'school-uniform-bottom': { black:['dark'] }
  },
  hat: {
    base: {
      'cat-ears':['default'],
      cate:['default'],
      'hair-band':['default'],
      hairband:['default'],
      mining:['default']
    },
    'youngster-hat': {
      copy:['yellow'],
      'youngster-cap-bee':['yellow'],
      yellow:['copy']
    }
  }
};

const preferredVariantAliases = {
  back: {
    top: {
      jumpsuit: {
        black:['black-2'],
        yellow:['black']
      }
    }
  }
};

const overworldHatBaseAliases = {
  beret:'beret',
  bonnet:'bonnet',
  'cat-ears':'cat',
  cate:'cat',
  devil:'devil',
  'feather-hat':'feather-hat',
  fedora:'fedora',
  'hair-band':'hair-band',
  hairband:'hair-band',
  headband:'headband',
  mining:'miner',
  poop:'poop',
  ribbon:'ribbon',
  'straw-hat':'straw-hat',
  'sun-hat':'sun-hat'
};

const backHatBaseVariantAliases = {
  cate:'cat-ears',
  'hair-band':'hairband'
};

function resolveAliasValue(value, gender){
  if(!value) return null;
  if(typeof value === 'string') return value;
  return value[gender] || null;
}

function addPathCandidate(candidates, seen, item, variant){
  if(!item || !variant) return;
  const key = `${item}|${variant}`;
  if(seen.has(key)) return;
  seen.add(key);
  candidates.push({ item, variant });
}

function addPreferredVariantCandidates(candidates, seen, viewId, catId, item, variant){
  const aliases = preferredVariantAliases[viewId]?.[catId]?.[item]?.[variant] || [];
  for(const aliasVariant of aliases) addPathCandidate(candidates, seen, item, aliasVariant);
}

function addVariantAliasCandidates(candidates, seen, viewId, catId, item, variant){
  const aliases = variantAliases[catId]?.[item]?.[variant] || [];
  for(const aliasVariant of aliases){
    if(viewId !== 'back' && catId === 'top' && item === 'jumpsuit' && aliasVariant === 'black-2') continue;
    addPathCandidate(candidates, seen, item, aliasVariant);
  }
}

function addMappedItemCandidate(candidates, seen, viewId, gender, catId, item, variant){
  const scope = isOverworldView(viewId) ? 'overworld' : viewId;
  const alias = resolveAliasValue(itemAliases[scope]?.[catId]?.[item], gender);
  if(alias) addPathCandidate(candidates, seen, alias, variant);
}

function addSpecialPathCandidates(candidates, seen, viewId, gender, catId, item, variant){
  if(catId === 'hat' && item === 'base'){
    if(isOverworldView(viewId)){
      const hatItem = overworldHatBaseAliases[variant];
      if(hatItem) addPathCandidate(candidates, seen, hatItem, 'default');
    }else if(viewId === 'back'){
      addPathCandidate(candidates, seen, 'base', backHatBaseVariantAliases[variant] || variant);
    }
  }

  if(catId === 'hat' && item === 'youngster-hat'){
    if(isOverworldView(viewId) && variant === 'youngster-cap-bee'){
      addPathCandidate(candidates, seen, item, 'yellow');
    }
    if(viewId === 'back' && (variant === 'yellow' || variant === 'youngster-cap-bee')){
      addPathCandidate(candidates, seen, item, 'copy');
    }
  }
}

function buildPathCandidates(viewId, catId, selection, gender=state.gender){
  const candidates = [];
  const seen = new Set();
  addPreferredVariantCandidates(candidates, seen, viewId, catId, selection.item, selection.variant);
  addPathCandidate(candidates, seen, selection.item, selection.variant);
  addMappedItemCandidate(candidates, seen, viewId, gender, catId, selection.item, selection.variant);
  addSpecialPathCandidates(candidates, seen, viewId, gender, catId, selection.item, selection.variant);

  for(const candidate of [...candidates]){
    addVariantAliasCandidates(candidates, seen, viewId, catId, candidate.item, candidate.variant);
  }

  return candidates;
}

function resolvePathForGender(viewId, gender, catId, selection){
  if(!selection) return '';
  const candidates = buildPathCandidates(viewId, catId, selection, gender);

  for(const candidate of candidates){
    const pathMap = getPathMap(viewId, gender, catId, candidate.item);
    if(pathMap?.[candidate.variant]) return pathMap[candidate.variant];
  }

  for(const candidate of candidates){
    const pathMap = getPathMap(viewId, gender, catId, candidate.item);
    if(pathMap?.default) return pathMap.default;
  }

  for(const candidate of candidates){
    const pathMap = getPathMap(viewId, gender, catId, candidate.item);
    const values = pathMap && Object.values(pathMap);
    const fallback = values?.length === 1 ? values[0] : '';
    if(fallback) return fallback;
  }

  return '';
}

function resolvePath(viewId, catId, selection){
  return resolvePathForGender(viewId, state.gender, catId, selection);
}

function variantIsRenderableInViews(catId, itemId, variantId, gender=state.gender){
  const selection = { item:itemId, variant:variantId };
  for(const [viewId, view] of Object.entries(getViews())){
    if(!view.layers.includes(catId)) continue;
    if(!resolvePathForGender(viewId, gender, catId, selection)) return false;
  }
  return true;
}

async function drawViewToContext(viewId, ctx, dx=0, dy=0, opts={}){
  const view = getViews()[viewId];
  if(!view) return;
  for(const catId of view.layers){
    const selection = state.selections[catId];
    const path = resolvePath(viewId, catId, selection);
    if(!path) continue;
    try{
      const img = await loadImage(path);
      if(!img) continue;
      if(view.type === 'frames' && opts.frameOnly !== false){
        const frame = opts.frame ?? view.defaultFrame ?? 0;
        const sw = Math.floor(view.sheetWidth / view.frames);
        ctx.drawImage(img, frame * sw, 0, sw, view.sheetHeight, dx, dy, view.width, view.height);
      }else{
        ctx.drawImage(img, dx, dy);
      }
    }catch(err){
      console.warn('Erro ao carregar asset', path, err);
    }
  }
}

function setCanvasSize(canvas, width, height){
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, width, height);
  return ctx;
}

function cropToCanvas(srcCanvas, sx, sy, sw, sh){
  const canvas = document.createElement('canvas');
  canvas.width = sw; canvas.height = sh;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(srcCanvas, sx, sy, sw, sh, 0, 0, sw, sh);
  return canvas;
}

function drawShadow(ctx, x, y, rx, ry){
  ctx.save();
  ctx.globalAlpha = 0.16;
  ctx.fillStyle = '#51311d';
  ctx.beginPath();
  ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawCheckerBackgroundRect(ctx, x, y, width, height){
  ctx.fillStyle = '#f7dfb8';
  ctx.fillRect(x, y, width, height);
  ctx.globalAlpha = 0.45;
  ctx.fillStyle = '#ffffff';
  for(let yy=0; yy<height; yy+=28){
    for(let xx=((yy/28)%2 ? 14 : 0); xx<width; xx+=28){
      ctx.fillRect(x + xx, y + yy, 14, 14);
    }
  }
  ctx.globalAlpha = 1;
}

function paintCheckerBackground(ctx, width, height){
  ctx.clearRect(0,0,width,height);
  drawCheckerBackgroundRect(ctx, 0, 0, width, height);
}

function drawSceneBackgroundRect(ctx, x, y, width, height){
  if(!sceneBackgroundImage){
    drawCheckerBackgroundRect(ctx, x, y, width, height);
    return;
  }

  const img = sceneBackgroundImage;
  const scale = Math.max(width / img.width, height / img.height);
  const sw = width / scale;
  const sh = height / scale;
  const sx = Math.max(0, (img.width - sw) / 2);
  const sy = Math.max(0, img.height - sh);
  ctx.drawImage(img, sx, sy, sw, sh, x, y, width, height);
}

function paintSceneBackground(ctx, width, height){
  ctx.clearRect(0, 0, width, height);
  drawSceneBackgroundRect(ctx, 0, 0, width, height);
}

function drawRoundedRectPath(ctx, x, y, width, height, radius){
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function makeIconSceneCanvas(){
  const canvas = document.createElement('canvas');
  const ctx = setCanvasSize(canvas, 128, 128);
  const offset = iconSceneOffsets[state.gender] || iconSceneOffsets.female;
  paintSceneBackground(ctx, canvas.width, canvas.height);
  ctx.drawImage(hiddenCanvases.icon, offset.x, offset.y);
  return canvas;
}

function drawIconSceneSquare(ctx, x, y, size, radius=18){
  ctx.save();
  drawRoundedRectPath(ctx, x, y, size, size, radius);
  ctx.clip();
  drawSceneBackgroundRect(ctx, x, y, size, size);
  const offset = iconSceneOffsets[state.gender] || iconSceneOffsets.female;
  const offsetX = offset.x * (size / 128);
  const offsetY = offset.y * (size / 128);
  ctx.drawImage(hiddenCanvases.icon, x + offsetX, y + offsetY, size, size);
  ctx.restore();

  ctx.save();
  drawRoundedRectPath(ctx, x + 0.5, y + 0.5, size - 1, size - 1, radius);
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#e7cfad';
  ctx.stroke();
  ctx.restore();
}

async function renderHiddenViews(){
  const token = ++state.lastRenderToken;
  const views = getViews();

  const frontCtx = setCanvasSize(hiddenCanvases.front, views.front.width, views.front.height);
  await drawViewToContext('front', frontCtx, 0, 0, { frameOnly:true });
  if(token !== state.lastRenderToken) return;

  renderIconCanvas();
  if(token !== state.lastRenderToken) return;

  const backCtx = setCanvasSize(hiddenCanvases.back, views.back.sheetWidth, views.back.sheetHeight);
  await drawViewToContext('back', backCtx, 0, 0, { frameOnly:false });
  if(token !== state.lastRenderToken) return;

  const walkCtx = setCanvasSize(hiddenCanvases.walk, views.walk.width, views.walk.height);
  await drawViewToContext('walk', walkCtx, 0, 0, { frameOnly:false });
  if(token !== state.lastRenderToken) return;

  const runCtx = setCanvasSize(hiddenCanvases.run, views.run.width, views.run.height);
  await drawViewToContext('run', runCtx, 0, 0, { frameOnly:false });
  if(token !== state.lastRenderToken) return;

  const bikeCtx = setCanvasSize(hiddenCanvases.bike, views.bike.width, views.bike.height);
  await drawViewToContext('bike', bikeCtx, 0, 0, { frameOnly:false });
  if(token !== state.lastRenderToken) return;

  await renderComboCanvas();
}

function renderIconCanvas(){
  const canvas = hiddenCanvases.icon;
  const ctx = setCanvasSize(canvas, 128, 128);
  const source = hiddenCanvases.front;
  const iconCrop = iconCrops[state.gender] || iconCrops.female;
  ctx.drawImage(source, iconCrop.x, iconCrop.y, iconCrop.width, iconCrop.height, 0, 0, canvas.width, canvas.height);
}

async function renderComboCanvas(){
  const canvas = hiddenCanvases.combo;
  const ctx = setCanvasSize(canvas, 520, 240);
  paintSceneBackground(ctx, canvas.width, canvas.height);

  const walkTiny = cropToCanvas(hiddenCanvases.walk, 0, 0, 64, 64);
  const runTiny = cropToCanvas(hiddenCanvases.run, 0, 0, 64, 64);
  const bikeTiny = cropToCanvas(hiddenCanvases.bike, 0, 0, 64, 64);
  const backFrame = cropToCanvas(hiddenCanvases.back, 175 * (getViews().back.defaultFrame || 0), 0, 175, 196);

  drawShadow(ctx, 95, 190, 34, 8);
  drawShadow(ctx, 260, 198, 74, 12);
  drawShadow(ctx, 430, 198, 58, 11);

  ctx.drawImage(walkTiny, 34, 58, walkTiny.width * 1.45, walkTiny.height * 1.45);
  ctx.drawImage(runTiny, 88, 58, runTiny.width * 1.15, runTiny.height * 1.15);
  ctx.drawImage(bikeTiny, 132, 58, bikeTiny.width * 1.15, bikeTiny.height * 1.15);
  ctx.drawImage(backFrame, 205, 24, backFrame.width * 0.92, backFrame.height * 0.92);
  ctx.drawImage(hiddenCanvases.front, 376, 50, hiddenCanvases.front.width, hiddenCanvases.front.height);

  ctx.fillStyle='rgba(36,26,35,.72)';
  ctx.font='700 12px system-ui, sans-serif';
  ctx.fillText('sprites', 44, 42);
  ctx.fillText('costas', 246, 42);
  ctx.fillText('frente', 430, 42);
}

function animationFrameFor(viewId, ts){
  const speed = { walk: 220, run: 120, bike: 140 }[viewId] || 180;
  const seq = [0,1,2,3];
  return seq[Math.floor(ts / speed) % seq.length];
}

function drawCurrentDisplay(ts=0){
  const canvas = $('#displayCanvas');
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  const active = state.activeView;
  const activeView = displayViews.find(view => view.id === active) || displayViews[0];
  const label = activeView?.label || 'Icon';
  $('#activeViewLabel').textContent = label;

  if(active === 'icon'){
    paintCheckerBackground(ctx, canvas.width, canvas.height);
    const size = Math.min(220, canvas.height - 38);
    const x = Math.floor((canvas.width - size) / 2);
    const y = Math.floor((canvas.height - size) / 2);
    drawIconSceneSquare(ctx, x, y, size, 22);
    return;
  }

  paintSceneBackground(ctx, canvas.width, canvas.height);

  if(active === 'combo'){
    const source = hiddenCanvases.combo;
    const x = Math.floor((canvas.width - source.width) / 2);
    const y = Math.floor((canvas.height - source.height) / 2);
    ctx.drawImage(source, x, y);
    return;
  }

  if(active === 'front'){
    const source = hiddenCanvases.front;
    drawShadow(ctx, canvas.width/2, 214, 52, 10);
    const scale = 1.3;
    const dw = source.width * scale;
    const dh = source.height * scale;
    const x = Math.floor((canvas.width - dw) / 2);
    const y = Math.floor((canvas.height - dh) / 2) - 6;
    ctx.drawImage(source, x, y, dw, dh);
    return;
  }

  if(active === 'back'){
    const frame = getViews().back.defaultFrame || 0;
    const source = cropToCanvas(hiddenCanvases.back, frame * 175, 0, 175, 196);
    drawShadow(ctx, canvas.width/2, 222, 58, 12);
    const scale = 1.12;
    const dw = source.width * scale;
    const dh = source.height * scale;
    const x = Math.floor((canvas.width - dw) / 2);
    const y = Math.floor((canvas.height - dh) / 2) - 4;
    ctx.drawImage(source, x, y, dw, dh);
    return;
  }

  if(['walk','run','bike'].includes(active)){
    const sheet = hiddenCanvases[active];
    const tile = 64;
    const frame = animationFrameFor(active, ts);
    const row = 0;
    const sourceX = frame * tile;
    const sourceY = row * tile;
    drawShadow(ctx, canvas.width/2, 222, 42, 10);
    const scale = active === 'bike' ? 2.75 : 3.25;
    const dw = tile * scale;
    const dh = tile * scale;
    const x = Math.floor((canvas.width - dw) / 2);
    const y = Math.floor((canvas.height - dh) / 2) - 4;
    ctx.drawImage(sheet, sourceX, sourceY, tile, tile, x, y, dw, dh);
    return;
  }
}

function drawMobileDockDisplay(ts=0){
  const canvas = $('#mobileDockCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  const active = state.activeView;
  const label = displayViews.find(view => view.id === active)?.label || 'Icon';
  const labelNode = $('#mobileDockLabel');
  if(labelNode) labelNode.textContent = label;

  if(active === 'icon'){
    paintCheckerBackground(ctx, canvas.width, canvas.height);
    const size = Math.min(canvas.height - 12, 86);
    const x = Math.floor((canvas.width - size) / 2);
    const y = Math.floor((canvas.height - size) / 2);
    drawIconSceneSquare(ctx, x, y, size, 12);
    return;
  }

  paintSceneBackground(ctx, canvas.width, canvas.height);

  if(active === 'combo'){
    const source = hiddenCanvases.combo;
    ctx.drawImage(source, 0, 0, source.width, source.height, 6, 4, 208, 96);
    return;
  }

  if(active === 'front'){
    const source = hiddenCanvases.front;
    const scale = 0.76;
    const dw = source.width * scale;
    const dh = source.height * scale;
    const x = Math.floor((canvas.width - dw) / 2);
    ctx.drawImage(source, x, -14, dw, dh);
    return;
  }

  if(active === 'back'){
    const frame = getViews().back.defaultFrame || 0;
    const source = cropToCanvas(hiddenCanvases.back, frame * 175, 0, 175, 196);
    const scale = 0.52;
    const dw = source.width * scale;
    const dh = source.height * scale;
    const x = Math.floor((canvas.width - dw) / 2);
    ctx.drawImage(source, x, -8, dw, dh);
    return;
  }

  if(['walk','run','bike'].includes(active)){
    const sheet = hiddenCanvases[active];
    const tile = 64;
    const frame = animationFrameFor(active, ts);
    const scale = active === 'bike' ? 1.18 : 1.34;
    const dw = tile * scale;
    const dh = tile * scale;
    const x = Math.floor((canvas.width - dw) / 2);
    const y = Math.floor((canvas.height - dh) / 2);
    ctx.drawImage(sheet, frame * tile, 0, tile, tile, x, y, dw, dh);
  }
}

function renderGenderButtons(){
  $$('.gender-btn').forEach(button => button.classList.toggle('active', button.dataset.gender === state.gender));
  $('#currentTitle').textContent = `Treinador • ${getManifest().genders[state.gender].label}`;
}

function renderViewSwitcher(){
  const wrap = $('#viewSwitcher');
  wrap.innerHTML = '';
  for(const view of displayViews){
    const button = document.createElement('button');
    button.type = 'button';
    button.className = view.id === state.activeView ? 'active' : '';
    button.textContent = view.navLabel || view.label;
    button.title = view.label;
    button.setAttribute('aria-label', view.label);
    button.onclick = () => {
      state.activeView = view.id;
      renderViewSwitcher();
      drawCurrentDisplay(performance.now());
      drawMobileDockDisplay(performance.now());
    };
    wrap.appendChild(button);
  }
}

function renderBackgroundSelector(){
  const wrap = $('#backgroundSelector');
  if(!wrap) return;
  wrap.innerHTML = '';

  for(const background of sceneBackgrounds){
    const button = document.createElement('button');
    button.type = 'button';
    button.className = background.id === state.activeBackground ? 'active' : '';
    button.title = background.label;
    button.setAttribute('aria-label', background.label);
    button.setAttribute('aria-selected', background.id === state.activeBackground ? 'true' : 'false');
    button.style.backgroundImage = `url("${background.src}")`;
    button.onclick = () => setSceneBackground(background.id);
    wrap.appendChild(button);
  }
}

function renderTabs(){
  const tabs = $('#categoryTabs');
  tabs.innerHTML = '';
  for(const cat of visibleCategories()){
    const button = document.createElement('button');
    button.type = 'button';
    button.className = cat.id === state.activeCategory ? 'active' : '';
    button.textContent = cat.label;
    button.onclick = () => {
      state.activeCategory = cat.id;
      renderTabs();
      renderCategoryPanel();
    };
    tabs.appendChild(button);
  }
}

function previewPathForItem(cat, item){
  const pathMap = getPathMap('front', state.gender, cat.id, item.id);
  if(!pathMap) return '';
  const currentVariant = state.selections[cat.id]?.variant;
  return pathMap[currentVariant] || pathMap[item.variants?.[0]?.id] || Object.values(pathMap)[0] || '';
}

function renderCategoryPanel(){
  const panel = $('#categoryPanel');
  const cat = catById(state.activeCategory);
  panel.innerHTML = '';
  if(!cat){
    panel.innerHTML = '<div class="empty-note">Nenhuma categoria disponível.</div>';
    return;
  }

  const items = availableItemsForCategory(cat);
  if(items.length === 0){
    panel.innerHTML = '<div class="empty-note">Essa categoria não tem assets visíveis para o trainer de frente.</div>';
    return;
  }

  const selected = state.selections[cat.id];
  const title = document.createElement('div');
  title.className = 'section-label';
  title.textContent = `Escolha: ${cat.label}`;
  panel.appendChild(title);

  const grid = document.createElement('div');
  grid.className = 'item-grid';
  if(cat.optional){
    const noneCard = document.createElement('button');
    noneCard.type = 'button';
    noneCard.className = `item-card none-card ${selected === null ? 'active' : ''}`;
    noneCard.textContent = 'Nenhum';
    noneCard.onclick = () => {
      state.selections[cat.id] = null;
      rerenderAfterSelection();
    };
    grid.appendChild(noneCard);
  }
  for(const item of items){
    const card = document.createElement('button');
    card.type = 'button';
    card.className = `item-card ${selected?.item === item.id ? 'active' : ''}`;
    const thumb = document.createElement('div');
    thumb.className = 'thumb-box';
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.src = assetUrl(previewPathForItem(cat, item));
    img.alt = item.name;
    thumb.appendChild(img);
    const name = document.createElement('div');
    name.className = 'item-name';
    name.textContent = item.name;
    card.append(thumb, name);
    card.onclick = () => selectItem(cat, item);
    grid.appendChild(card);
  }
  panel.appendChild(grid);

  const selectedItem = selected ? items.find(item => item.id === selected.item) : null;
  if(selectedItem){
    const variants = availableVariantsForItem(cat, selectedItem);
    const colorTitle = document.createElement('div');
    colorTitle.className = 'section-label';
    colorTitle.textContent = 'Cor / variação';
    panel.appendChild(colorTitle);

    const variantGrid = document.createElement('div');
    variantGrid.className = 'variant-grid';
    for(const variant of variants){
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `variant-btn ${selected?.item === selectedItem.id && selected?.variant === variant.id ? 'active' : ''}`;
      const swatch = document.createElement('span');
      swatch.className = 'swatch';
      swatch.style.background = colorMap[variant.id] || 'linear-gradient(135deg,#f4d7a1,#d65f73,#344b8d)';
      const label = document.createElement('span');
      label.textContent = variant.name;
      button.append(swatch, label);
      button.onclick = () => {
        state.selections[cat.id] = { item: selectedItem.id, variant: variant.id };
        rerenderAfterSelection();
      };
      variantGrid.appendChild(button);
    }
    panel.appendChild(variantGrid);
  }
}

function selectItem(cat, item){
  const previous = state.selections[cat.id];
  const variants = availableVariantsForItem(cat, item);
  let variant = variants[0]?.id || 'default';
  if(previous){
    const same = variants.find(entry => entry.id === previous.variant);
    if(same) variant = same.id;
  }
  state.selections[cat.id] = { item: item.id, variant };
  rerenderAfterSelection();
}

function updateCounter(){
  let count = 0;
  for(const cat of visibleCategories()){
    for(const item of availableItemsForCategory(cat)) count += availableVariantsForItem(cat, item).length;
  }
  $('#assetCounter').textContent = `${count} opções visíveis`;
}

function saveCurrentGenderState(){
  state.savedSelections[state.gender] = clone(state.selections);
}

function setGender(gender){
  if(gender === state.gender) return;
  saveCurrentGenderState();
  state.gender = gender;
  state.selections = clone(state.savedSelections[gender] || getDefaults(gender) || {});
  normalizeSelections();
  updateCounter();
  renderGenderButtons();
  renderTabs();
  renderCategoryPanel();
  rerenderHiddenAndDisplay();
}

function resetSelections(){
  state.selections = clone(getDefaults(state.gender));
  normalizeSelections();
  state.savedSelections[state.gender] = clone(state.selections);
  renderTabs();
  renderCategoryPanel();
  rerenderHiddenAndDisplay();
}

function randomizeSelections(){
  const next = {};
  for(const cat of visibleCategories()){
    const items = availableItemsForCategory(cat);
    if(!items.length) continue;
    const item = items[Math.floor(Math.random() * items.length)];
    const variants = availableVariantsForItem(cat, item);
    const variant = variants[Math.floor(Math.random() * variants.length)]?.id || variants[0]?.id || 'default';
    next[cat.id] = { item: item.id, variant };
  }
  state.selections = next;
  normalizeSelections();
  state.savedSelections[state.gender] = clone(state.selections);
  renderCategoryPanel();
  rerenderHiddenAndDisplay();
}

function downloadCanvas(canvas, filename){
  const link = document.createElement('a');
  link.download = filename;
  link.href = canvas.toDataURL('image/png');
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function makeBackFrameCanvas(){
  const canvas = document.createElement('canvas');
  canvas.width = 175; canvas.height = 196;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  const frame = getViews().back.defaultFrame || 0;
  ctx.drawImage(hiddenCanvases.back, frame * 175, 0, 175, 196, 0, 0, 175, 196);
  return canvas;
}

function makeCurrentSpriteFrameCanvas(viewId, ts=performance.now()){
  const canvas = document.createElement('canvas');
  canvas.width = 64; canvas.height = 64;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  const frame = animationFrameFor(viewId, ts);
  ctx.drawImage(hiddenCanvases[viewId], frame * 64, 0, 64, 64, 0, 0, 64, 64);
  return canvas;
}

async function makeFullSheetCanvas(){
  const canvas = document.createElement('canvas');
  canvas.width = 875;
  canvas.height = 160 + 196 + 256 * 3;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(hiddenCanvases.icon, 205, 16);
  ctx.drawImage(hiddenCanvases.front, Math.floor((875 - 160) / 2), 0);
  ctx.drawImage(hiddenCanvases.back, 0, 160);
  ctx.drawImage(hiddenCanvases.walk, 0, 160 + 196);
  ctx.drawImage(hiddenCanvases.run, 0, 160 + 196 + 256);
  ctx.drawImage(hiddenCanvases.bike, 0, 160 + 196 + 512);
  return canvas;
}

function downloadCurrent(){
  const active = state.activeView;
  if(active === 'combo') return downloadCanvas(hiddenCanvases.combo, `trainer-preview-completo-${state.gender}.png`);
  if(active === 'front') return downloadCanvas(hiddenCanvases.front, `trainer-front-${state.gender}.png`);
  if(active === 'icon') return downloadCanvas(hiddenCanvases.icon, `trainer-icon-${state.gender}.png`);
  if(active === 'back') return downloadCanvas(makeBackFrameCanvas(), `trainer-back-${state.gender}.png`);
  if(['walk','run','bike'].includes(active)) return downloadCanvas(makeCurrentSpriteFrameCanvas(active), `trainer-${active}-${state.gender}.png`);
}

function downloadCurrentScenePng(){
  const active = state.activeView;
  const view = displayViews.find(entry => entry.id === active) || displayViews[0];
  if(active === 'icon') return downloadCanvas(makeIconSceneCanvas(), `trainer-icon-fundo-${state.gender}.png`);
  drawCurrentDisplay(performance.now());
  downloadCanvas($('#displayCanvas'), `trainer-${view.downloadLabel || active}-fundo-${state.gender}.png`);
}

async function downloadAll(){
  downloadCanvas(hiddenCanvases.combo, `trainer-preview-completo-${state.gender}.png`);
  downloadCanvas(hiddenCanvases.front, `trainer-front-${state.gender}.png`);
  downloadCanvas(hiddenCanvases.icon, `trainer-icon-${state.gender}.png`);
  downloadCanvas(hiddenCanvases.back, `trainer-back-sheet-${state.gender}.png`);
  downloadCanvas(hiddenCanvases.walk, `trainer-overworld-walk-${state.gender}.png`);
  downloadCanvas(hiddenCanvases.run, `trainer-overworld-run-${state.gender}.png`);
  downloadCanvas(hiddenCanvases.bike, `trainer-overworld-bike-${state.gender}.png`);
  const allCanvas = await makeFullSheetCanvas();
  downloadCanvas(allCanvas, `trainer-all-sheets-${state.gender}.png`);
}

async function downloadSpritesSheet(){
  const allCanvas = await makeFullSheetCanvas();
  downloadCanvas(allCanvas, `trainer-sprites-completos-${state.gender}.png`);
}

function rerenderAfterSelection(){
  state.savedSelections[state.gender] = clone(state.selections);
  renderCategoryPanel();
  rerenderHiddenAndDisplay();
}

async function rerenderHiddenAndDisplay(){
  await renderHiddenViews();
  drawCurrentDisplay(performance.now());
  drawMobileDockDisplay(performance.now());
}

async function setSceneBackground(backgroundId){
  if(backgroundId === state.activeBackground) return;
  await loadSceneBackground(backgroundId);
  renderBackgroundSelector();
  await renderComboCanvas();
  drawCurrentDisplay(performance.now());
  drawMobileDockDisplay(performance.now());
}

function startAnimationLoop(){
  function loop(ts){
    drawCurrentDisplay(ts);
    drawMobileDockDisplay(ts);
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

async function init(){
  state.manifest = EMBEDDED_MANIFEST;
  await loadSceneBackground();
  state.savedSelections.female = clone(getDefaults('female'));
  state.savedSelections.male = clone(getDefaults('male'));
  state.selections = clone(getDefaults(state.gender));
  normalizeSelections();
  updateCounter();
  renderGenderButtons();
  renderViewSwitcher();
  renderBackgroundSelector();
  renderTabs();
  renderCategoryPanel();

  $$('.gender-btn').forEach(button => button.addEventListener('click', () => setGender(button.dataset.gender)));
  $('#randomizeBtn').addEventListener('click', randomizeSelections);
  $('#resetBtn').addEventListener('click', resetSelections);
  $('#downloadCurrentBtn').addEventListener('click', downloadCurrent);
  $('#downloadSceneBtn').addEventListener('click', downloadCurrentScenePng);
  $('#downloadSpritesBtn').addEventListener('click', downloadSpritesSheet);

  await rerenderHiddenAndDisplay();
  startAnimationLoop();
}

init().catch(err => {
  console.error(err);
  $('#categoryPanel').innerHTML = '<div class="empty-note">Não foi possível carregar os assets do criador.</div>';
});
