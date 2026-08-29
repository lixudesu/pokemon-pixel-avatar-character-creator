(function() {
	//#region artifacts/avatar-standalone/manifest.json
	var manifest_default = {
		title: "Trainer Avatar Maker Completo",
		version: "2.0-auto-all",
		notes: "Gerado a partir dos PNGs enviados pelo usuário. Um único editor cria automaticamente frente, costas e sprites overworld.",
		views: {
			"front": {
				"id": "front",
				"label": "Frente",
				"short": "Frente",
				"type": "single",
				"width": 160,
				"height": 160,
				"layers": [
					"body",
					"bottom",
					"top",
					"hair",
					"hat"
				]
			},
			"back": {
				"id": "back",
				"label": "Costas / batalha",
				"short": "Costas",
				"type": "frames",
				"width": 175,
				"height": 196,
				"sheetWidth": 875,
				"sheetHeight": 196,
				"frames": 5,
				"defaultFrame": 4,
				"layers": [
					"body",
					"top",
					"hair",
					"hat"
				]
			},
			"walk": {
				"id": "walk",
				"label": "Overworld andando",
				"short": "Andando",
				"type": "sheet",
				"width": 256,
				"height": 256,
				"tile": 64,
				"layers": [
					"body",
					"bottom",
					"top",
					"hair",
					"hat",
					"carry"
				]
			},
			"run": {
				"id": "run",
				"label": "Overworld correndo",
				"short": "Correndo",
				"type": "sheet",
				"width": 256,
				"height": 256,
				"tile": 64,
				"layers": [
					"body",
					"bottom",
					"top",
					"hair",
					"hat",
					"carry"
				]
			},
			"bike": {
				"id": "bike",
				"label": "Overworld bike",
				"short": "Bike",
				"type": "sheet",
				"width": 256,
				"height": 256,
				"tile": 64,
				"layers": [
					"body",
					"bottom",
					"top",
					"hair",
					"hat",
					"carry"
				]
			}
		},
		genders: {
			"female": { "label": "Feminino" },
			"male": { "label": "Masculino" }
		},
		categories: [
			{
				"id": "body",
				"label": "Corpo / pele",
				"icon": "◒",
				"optional": false,
				"layer": 10,
				"items": [{
					"id": "base",
					"name": "Corpo",
					"variants": [
						{
							"id": "light",
							"name": "Clara"
						},
						{
							"id": "medium",
							"name": "Média"
						},
						{
							"id": "pale",
							"name": "Pálida"
						},
						{
							"id": "dark",
							"name": "Escura"
						}
					]
				}]
			},
			{
				"id": "bottom",
				"label": "Calça / saia",
				"icon": "◧",
				"optional": false,
				"layer": 20,
				"items": [
					{
						"id": "pants-and-boots",
						"name": "Calça com botas",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "grey",
								"name": "Cinza"
							},
							{
								"id": "beige",
								"name": "Bege"
							},
							{
								"id": "navy",
								"name": "Azul-marinho"
							},
							{
								"id": "light-blue",
								"name": "Azul claro"
							}
						]
					},
					{
						"id": "jumpsuit-pants",
						"name": "Calça macacão",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "yellow",
								"name": "Amarelo"
							}
						]
					},
					{
						"id": "jumpsuit-pants-alt",
						"name": "Calça macacão alt.",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "yellow",
								"name": "Amarelo"
							}
						]
					},
					{
						"id": "lord-suit-pants",
						"name": "Calça nobre",
						"variants": [{
							"id": "default",
							"name": "Padrão"
						}]
					},
					{
						"id": "capris",
						"name": "Capri",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "beige",
								"name": "Bege"
							},
							{
								"id": "navy",
								"name": "Azul-marinho"
							},
							{
								"id": "aqua",
								"name": "Aqua"
							}
						]
					},
					{
						"id": "classy-pants",
						"name": "Clássico Pants",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "grey",
								"name": "Cinza"
							},
							{
								"id": "beige",
								"name": "Bege"
							},
							{
								"id": "navy",
								"name": "Azul-marinho"
							},
							{
								"id": "wine",
								"name": "Vinho"
							}
						]
					},
					{
						"id": "base",
						"name": "Corpo",
						"variants": [{
							"id": "lord-suit-pants",
							"name": "Calça nobre"
						}, {
							"id": "lords-pants",
							"name": "Lords Pants"
						}]
					},
					{
						"id": "evening-bottom",
						"name": "Evening Calça / saia",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "grey",
								"name": "Cinza"
							},
							{
								"id": "beige",
								"name": "Bege"
							},
							{
								"id": "navy",
								"name": "Azul-marinho"
							},
							{
								"id": "wine",
								"name": "Vinho"
							}
						]
					},
					{
						"id": "formal-bottoms",
						"name": "Formal Bottoms F",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "brown",
								"name": "Marrom"
							},
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "pink",
								"name": "Rosa"
							},
							{
								"id": "grey",
								"name": "Cinza"
							}
						]
					},
					{
						"id": "formal-pants",
						"name": "Formal Pants",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "brown",
								"name": "Marrom"
							},
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "grey",
								"name": "Cinza"
							}
						]
					},
					{
						"id": "jeans",
						"name": "Jeans",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "grey",
								"name": "Cinza"
							},
							{
								"id": "navy",
								"name": "Azul-marinho"
							},
							{
								"id": "aqua",
								"name": "Aqua"
							},
							{
								"id": "light-blue",
								"name": "Azul claro"
							}
						]
					},
					{
						"id": "classy-bottom",
						"name": "Parte clássica",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "brown",
								"name": "Marrom"
							},
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "grey",
								"name": "Cinza"
							},
							{
								"id": "beige",
								"name": "Bege"
							},
							{
								"id": "navy",
								"name": "Azul-marinho"
							},
							{
								"id": "wine",
								"name": "Vinho"
							}
						]
					},
					{
						"id": "beach-bottom",
						"name": "Parte de praia",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "pink",
								"name": "Rosa"
							}
						]
					},
					{
						"id": "ribbon-skirt",
						"name": "Saia com laço",
						"variants": [
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "pink",
								"name": "Rosa"
							},
							{
								"id": "wine",
								"name": "Vinho"
							}
						]
					},
					{
						"id": "long-skirt",
						"name": "Saia longa",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "pink",
								"name": "Rosa"
							},
							{
								"id": "purple",
								"name": "Roxo"
							}
						]
					},
					{
						"id": "pencil-skirt",
						"name": "Saia lápis",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "grey",
								"name": "Cinza"
							},
							{
								"id": "navy",
								"name": "Azul-marinho"
							},
							{
								"id": "wine",
								"name": "Vinho"
							}
						]
					},
					{
						"id": "school-girl",
						"name": "School Girl",
						"variants": [{
							"id": "light",
							"name": "Clara"
						}, {
							"id": "black",
							"name": "Preto"
						}]
					},
					{
						"id": "shorts",
						"name": "Shorts",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "white",
								"name": "Branco"
							}
						]
					},
					{
						"id": "school-uniform-bottom",
						"name": "Uniforme escolar",
						"variants": [{
							"id": "light",
							"name": "Clara"
						}, {
							"id": "dark",
							"name": "Escura"
						}]
					}
				]
			},
			{
				"id": "top",
				"label": "Roupa de cima",
				"icon": "◩",
				"optional": false,
				"layer": 30,
				"items": [
					{
						"id": "shirt-combo",
						"name": "Camisa + casaco",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "white",
								"name": "Branco"
							},
							{
								"id": "wine",
								"name": "Vinho"
							}
						]
					},
					{
						"id": "scarf-shirt",
						"name": "Camisa com cachecol",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "brown",
								"name": "Marrom"
							},
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "yellow",
								"name": "Amarelo"
							}
						]
					},
					{
						"id": "collared-shirt",
						"name": "Camisa social",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "white",
								"name": "Branco"
							},
							{
								"id": "navy",
								"name": "Azul-marinho"
							},
							{
								"id": "wine",
								"name": "Vinho"
							},
							{
								"id": "light-blue",
								"name": "Azul claro"
							}
						]
					},
					{
						"id": "classy-top-f",
						"name": "Clássico Roupa de cima F",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "grey",
								"name": "Cinza"
							},
							{
								"id": "beige",
								"name": "Bege"
							},
							{
								"id": "navy",
								"name": "Azul-marinho"
							},
							{
								"id": "wine",
								"name": "Vinho"
							}
						]
					},
					{
						"id": "classy-top-m",
						"name": "Clássico Roupa de cima M",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "grey",
								"name": "Cinza"
							},
							{
								"id": "beige",
								"name": "Bege"
							},
							{
								"id": "navy",
								"name": "Azul-marinho"
							},
							{
								"id": "wine",
								"name": "Vinho"
							}
						]
					},
					{
						"id": "v-neck",
						"name": "Gola V",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "purple",
								"name": "Roxo"
							},
							{
								"id": "yellow",
								"name": "Amarelo"
							},
							{
								"id": "orange",
								"name": "Laranja"
							}
						]
					},
					{
						"id": "open-jacket",
						"name": "Jaqueta aberta",
						"variants": [
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "pink",
								"name": "Rosa"
							},
							{
								"id": "orange",
								"name": "Laranja"
							}
						]
					},
					{
						"id": "lord-suit-top",
						"name": "Lord Suit Roupa de cima",
						"variants": [{
							"id": "red",
							"name": "Vermelho"
						}, {
							"id": "purple",
							"name": "Roxo"
						}]
					},
					{
						"id": "jumpsuit",
						"name": "Macacão",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "yellow",
								"name": "Amarelo"
							},
							{
								"id": "black-2",
								"name": "Preto 2"
							}
						]
					},
					{
						"id": "jumpsuit-alt",
						"name": "Macacão alt.",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "yellow",
								"name": "Amarelo"
							}
						]
					},
					{
						"id": "hoodie",
						"name": "Moletom",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "purple",
								"name": "Roxo"
							}
						]
					},
					{
						"id": "beach-top-f",
						"name": "Praia Roupa de cima F",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "pink",
								"name": "Rosa"
							}
						]
					},
					{
						"id": "beach-top-m",
						"name": "Praia Roupa de cima M",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "pink",
								"name": "Rosa"
							}
						]
					},
					{
						"id": "tank-top",
						"name": "Regata",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "pink",
								"name": "Rosa"
							},
							{
								"id": "navy",
								"name": "Azul-marinho"
							}
						]
					},
					{
						"id": "scarf-top",
						"name": "Scarf Roupa de cima",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "brown",
								"name": "Marrom"
							},
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "yellow",
								"name": "Amarelo"
							}
						]
					},
					{
						"id": "school-uniform-fm",
						"name": "School Uniform Fm",
						"variants": [{
							"id": "light",
							"name": "Clara"
						}, {
							"id": "dark",
							"name": "Escura"
						}]
					},
					{
						"id": "trench-coat",
						"name": "Sobretudo",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "brown",
								"name": "Marrom"
							},
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "purple",
								"name": "Roxo"
							},
							{
								"id": "beige",
								"name": "Bege"
							},
							{
								"id": "navy",
								"name": "Azul-marinho"
							}
						]
					},
					{
						"id": "t-shirt",
						"name": "T-shirt",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "white",
								"name": "Branco"
							}
						]
					},
					{
						"id": "classy",
						"name": "Top clássico",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "grey",
								"name": "Cinza"
							},
							{
								"id": "beige",
								"name": "Bege"
							},
							{
								"id": "navy",
								"name": "Azul-marinho"
							},
							{
								"id": "wine",
								"name": "Vinho"
							}
						]
					},
					{
						"id": "beach",
						"name": "Top de praia",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "pink",
								"name": "Rosa"
							}
						]
					},
					{
						"id": "formal",
						"name": "Top formal",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "pink",
								"name": "Rosa"
							},
							{
								"id": "beige",
								"name": "Bege"
							}
						]
					},
					{
						"id": "lord-suit",
						"name": "Traje nobre",
						"variants": [{
							"id": "red",
							"name": "Vermelho"
						}, {
							"id": "purple",
							"name": "Roxo"
						}]
					},
					{
						"id": "turtleneck",
						"name": "Turtleneck",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "white",
								"name": "Branco"
							},
							{
								"id": "beige",
								"name": "Bege"
							},
							{
								"id": "wine",
								"name": "Vinho"
							},
							{
								"id": "magenta",
								"name": "Magenta"
							},
							{
								"id": "brownish",
								"name": "Marrom"
							}
						]
					},
					{
						"id": "turtleneck-f",
						"name": "Turtleneck F",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "white",
								"name": "Branco"
							},
							{
								"id": "beige",
								"name": "Bege"
							},
							{
								"id": "wine",
								"name": "Vinho"
							}
						]
					},
					{
						"id": "turtleneck-m",
						"name": "Turtleneck M",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "white",
								"name": "Branco"
							},
							{
								"id": "beige",
								"name": "Bege"
							},
							{
								"id": "wine",
								"name": "Vinho"
							}
						]
					},
					{
						"id": "school-uniform",
						"name": "Uniforme escolar",
						"variants": [{
							"id": "light",
							"name": "Clara"
						}, {
							"id": "dark",
							"name": "Escura"
						}]
					},
					{
						"id": "vest",
						"name": "Vest",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "brown",
								"name": "Marrom"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "grey",
								"name": "Cinza"
							},
							{
								"id": "beige",
								"name": "Bege"
							},
							{
								"id": "wine",
								"name": "Vinho"
							}
						]
					}
				]
			},
			{
				"id": "hair",
				"label": "Cabelo",
				"icon": "✦",
				"optional": false,
				"layer": 40,
				"items": [
					{
						"id": "hair-1",
						"name": "Cabelo 1",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "brown",
								"name": "Marrom"
							},
							{
								"id": "blonde",
								"name": "Loiro"
							},
							{
								"id": "ginger",
								"name": "Ruivo"
							},
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "cyan",
								"name": "Ciano"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "pink",
								"name": "Rosa"
							},
							{
								"id": "purple",
								"name": "Roxo"
							},
							{
								"id": "violet",
								"name": "Violeta"
							},
							{
								"id": "white",
								"name": "Branco"
							}
						]
					},
					{
						"id": "hair-2",
						"name": "Cabelo 2",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "brown",
								"name": "Marrom"
							},
							{
								"id": "blonde",
								"name": "Loiro"
							},
							{
								"id": "ginger",
								"name": "Ruivo"
							},
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "cyan",
								"name": "Ciano"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "pink",
								"name": "Rosa"
							},
							{
								"id": "purple",
								"name": "Roxo"
							},
							{
								"id": "violet",
								"name": "Violeta"
							},
							{
								"id": "white",
								"name": "Branco"
							}
						]
					},
					{
						"id": "hair-3",
						"name": "Cabelo 3",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "brown",
								"name": "Marrom"
							},
							{
								"id": "blonde",
								"name": "Loiro"
							},
							{
								"id": "ginger",
								"name": "Ruivo"
							},
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "cyan",
								"name": "Ciano"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "pink",
								"name": "Rosa"
							},
							{
								"id": "purple",
								"name": "Roxo"
							},
							{
								"id": "white",
								"name": "Branco"
							}
						]
					},
					{
						"id": "hair-4",
						"name": "Cabelo 4",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "brown",
								"name": "Marrom"
							},
							{
								"id": "blonde",
								"name": "Loiro"
							},
							{
								"id": "ginger",
								"name": "Ruivo"
							},
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "cyan",
								"name": "Ciano"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "pink",
								"name": "Rosa"
							},
							{
								"id": "purple",
								"name": "Roxo"
							},
							{
								"id": "white",
								"name": "Branco"
							}
						]
					}
				]
			},
			{
				"id": "hat",
				"label": "Chapéu / acessório",
				"icon": "★",
				"optional": true,
				"layer": 50,
				"items": [
					{
						"id": "beret",
						"name": "Beret",
						"variants": [{
							"id": "default",
							"name": "Padrão"
						}]
					},
					{
						"id": "bonnet",
						"name": "Bonnet",
						"variants": [{
							"id": "default",
							"name": "Padrão"
						}]
					},
					{
						"id": "youngster-hat",
						"name": "Boné jovem",
						"variants": [
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "yellow",
								"name": "Amarelo"
							},
							{
								"id": "copy",
								"name": "Copy"
							},
							{
								"id": "youngster-cap-bee",
								"name": "Youngster Cap Bee"
							}
						]
					},
					{
						"id": "hair-band",
						"name": "Cabelo Band",
						"variants": [{
							"id": "default",
							"name": "Padrão"
						}]
					},
					{
						"id": "cat",
						"name": "Cat",
						"variants": [{
							"id": "default",
							"name": "Padrão"
						}]
					},
					{
						"id": "crown",
						"name": "Coroa",
						"variants": [{
							"id": "gold",
							"name": "Dourado"
						}, {
							"id": "silver",
							"name": "Prata"
						}]
					},
					{
						"id": "base",
						"name": "Corpo",
						"variants": [
							{
								"id": "baguette",
								"name": "Baguette"
							},
							{
								"id": "beret",
								"name": "Beret"
							},
							{
								"id": "bonnet",
								"name": "Bonnet"
							},
							{
								"id": "hair-band",
								"name": "Cabelo Band"
							},
							{
								"id": "cat-ears",
								"name": "Cat Ears"
							},
							{
								"id": "cate",
								"name": "Cate"
							},
							{
								"id": "devil",
								"name": "Devil"
							},
							{
								"id": "feather-hat",
								"name": "Feather Acessório"
							},
							{
								"id": "fedora",
								"name": "Fedora"
							},
							{
								"id": "hairband",
								"name": "Hairband"
							},
							{
								"id": "headband",
								"name": "Headband"
							},
							{
								"id": "mining",
								"name": "Mining"
							},
							{
								"id": "poop",
								"name": "Poop"
							},
							{
								"id": "ribbon",
								"name": "Ribbon"
							},
							{
								"id": "straw-hat",
								"name": "Straw Acessório"
							},
							{
								"id": "sun-hat",
								"name": "Sun Acessório"
							}
						]
					},
					{
						"id": "devil",
						"name": "Devil",
						"variants": [{
							"id": "default",
							"name": "Padrão"
						}]
					},
					{
						"id": "feather-hat",
						"name": "Feather Acessório",
						"variants": [{
							"id": "default",
							"name": "Padrão"
						}]
					},
					{
						"id": "fedora",
						"name": "Fedora",
						"variants": [{
							"id": "default",
							"name": "Padrão"
						}]
					},
					{
						"id": "flower",
						"name": "Flor",
						"variants": [{
							"id": "red",
							"name": "Vermelho"
						}, {
							"id": "blue",
							"name": "Azul"
						}]
					},
					{
						"id": "beanie",
						"name": "Gorro",
						"variants": [{
							"id": "black",
							"name": "Preto"
						}, {
							"id": "purple",
							"name": "Roxo"
						}]
					},
					{
						"id": "headband",
						"name": "Headband",
						"variants": [{
							"id": "default",
							"name": "Padrão"
						}]
					},
					{
						"id": "miner",
						"name": "Miner",
						"variants": [{
							"id": "default",
							"name": "Padrão"
						}]
					},
					{
						"id": "poop",
						"name": "Poop",
						"variants": [{
							"id": "default",
							"name": "Padrão"
						}]
					},
					{
						"id": "ribbon",
						"name": "Ribbon",
						"variants": [{
							"id": "default",
							"name": "Padrão"
						}]
					},
					{
						"id": "straw-hat",
						"name": "Straw Acessório",
						"variants": [{
							"id": "default",
							"name": "Padrão"
						}]
					},
					{
						"id": "sun-hat",
						"name": "Sun Acessório",
						"variants": [{
							"id": "default",
							"name": "Padrão"
						}]
					},
					{
						"id": "glasses",
						"name": "Óculos",
						"variants": [{
							"id": "red",
							"name": "Vermelho"
						}, {
							"id": "blue",
							"name": "Azul"
						}]
					}
				]
			},
			{
				"id": "carry",
				"label": "Bolsa / mochila",
				"icon": "◆",
				"optional": true,
				"layer": 60,
				"items": [
					{
						"id": "bag",
						"name": "Bolsa",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "purple",
								"name": "Roxo"
							},
							{
								"id": "white",
								"name": "Branco"
							},
							{
								"id": "yellow",
								"name": "Amarelo"
							},
							{
								"id": "orange",
								"name": "Laranja"
							},
							{
								"id": "magenta",
								"name": "Magenta"
							}
						]
					},
					{
						"id": "rucksack",
						"name": "Mochila",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "purple",
								"name": "Roxo"
							},
							{
								"id": "white",
								"name": "Branco"
							},
							{
								"id": "yellow",
								"name": "Amarelo"
							},
							{
								"id": "orange",
								"name": "Laranja"
							},
							{
								"id": "magenta",
								"name": "Magenta"
							}
						]
					},
					{
						"id": "sporty-backpack",
						"name": "Mochila esportiva",
						"variants": [
							{
								"id": "black",
								"name": "Preto"
							},
							{
								"id": "red",
								"name": "Vermelho"
							},
							{
								"id": "blue",
								"name": "Azul"
							},
							{
								"id": "green",
								"name": "Verde"
							},
							{
								"id": "purple",
								"name": "Roxo"
							},
							{
								"id": "white",
								"name": "Branco"
							},
							{
								"id": "yellow",
								"name": "Amarelo"
							},
							{
								"id": "orange",
								"name": "Laranja"
							},
							{
								"id": "magenta",
								"name": "Magenta"
							}
						]
					}
				]
			}
		],
		paths: {
			"front": {
				"female": {
					"body": { "base": {
						"light": "assets/front/female/body/base/light.png",
						"pale": "assets/front/female/body/base/pale.png",
						"dark": "assets/front/female/body/base/dark.png",
						"medium": "assets/front/female/body/base/medium.png"
					} },
					"bottom": {
						"base": { "lords-pants": "assets/front/female/bottom/base/lords-pants.png" },
						"beach-bottom": {
							"black": "assets/front/female/bottom/beach-bottom/black.png",
							"blue": "assets/front/female/bottom/beach-bottom/blue.png",
							"green": "assets/front/female/bottom/beach-bottom/green.png",
							"pink": "assets/front/female/bottom/beach-bottom/pink.png",
							"red": "assets/front/female/bottom/beach-bottom/red.png"
						},
						"capris": {
							"aqua": "assets/front/female/bottom/capris/aqua.png",
							"beige": "assets/front/female/bottom/capris/beige.png",
							"black": "assets/front/female/bottom/capris/black.png",
							"green": "assets/front/female/bottom/capris/green.png",
							"navy": "assets/front/female/bottom/capris/navy.png"
						},
						"classy-bottom": {
							"black": "assets/front/female/bottom/classy-bottom/black.png",
							"blue": "assets/front/female/bottom/classy-bottom/blue.png",
							"brown": "assets/front/female/bottom/classy-bottom/brown.png",
							"grey": "assets/front/female/bottom/classy-bottom/grey.png",
							"red": "assets/front/female/bottom/classy-bottom/red.png"
						},
						"evening-bottom": {
							"beige": "assets/front/female/bottom/evening-bottom/beige.png",
							"black": "assets/front/female/bottom/evening-bottom/black.png",
							"grey": "assets/front/female/bottom/evening-bottom/grey.png",
							"navy": "assets/front/female/bottom/evening-bottom/navy.png",
							"wine": "assets/front/female/bottom/evening-bottom/wine.png"
						},
						"jeans": {
							"grey": "assets/front/female/bottom/jeans/grey.png",
							"light-blue": "assets/front/female/bottom/jeans/light-blue.png",
							"aqua": "assets/front/female/bottom/jeans/aqua.png",
							"black": "assets/front/female/bottom/jeans/black.png",
							"navy": "assets/front/female/bottom/jeans/navy.png"
						},
						"jumpsuit-pants": {
							"black": "assets/front/female/bottom/jumpsuit-pants/black.png",
							"blue": "assets/front/female/bottom/jumpsuit-pants/blue.png",
							"green": "assets/front/female/bottom/jumpsuit-pants/green.png",
							"red": "assets/front/female/bottom/jumpsuit-pants/red.png",
							"yellow": "assets/front/female/bottom/jumpsuit-pants/yellow.png"
						},
						"jumpsuit-pants-alt": {
							"black": "assets/front/female/bottom/jumpsuit-pants-alt/black.png",
							"blue": "assets/front/female/bottom/jumpsuit-pants-alt/blue.png",
							"green": "assets/front/female/bottom/jumpsuit-pants-alt/green.png",
							"red": "assets/front/female/bottom/jumpsuit-pants-alt/red.png",
							"yellow": "assets/front/female/bottom/jumpsuit-pants-alt/yellow.png"
						},
						"long-skirt": {
							"black": "assets/front/female/bottom/long-skirt/black.png",
							"blue": "assets/front/female/bottom/long-skirt/blue.png",
							"green": "assets/front/female/bottom/long-skirt/green.png",
							"pink": "assets/front/female/bottom/long-skirt/pink.png",
							"purple": "assets/front/female/bottom/long-skirt/purple.png"
						},
						"pants-and-boots": {
							"beige": "assets/front/female/bottom/pants-and-boots/beige.png",
							"black": "assets/front/female/bottom/pants-and-boots/black.png",
							"grey": "assets/front/female/bottom/pants-and-boots/grey.png",
							"light-blue": "assets/front/female/bottom/pants-and-boots/light-blue.png",
							"navy": "assets/front/female/bottom/pants-and-boots/navy.png"
						},
						"pencil-skirt": {
							"black": "assets/front/female/bottom/pencil-skirt/black.png",
							"green": "assets/front/female/bottom/pencil-skirt/green.png",
							"grey": "assets/front/female/bottom/pencil-skirt/grey.png",
							"navy": "assets/front/female/bottom/pencil-skirt/navy.png",
							"wine": "assets/front/female/bottom/pencil-skirt/wine.png"
						},
						"ribbon-skirt": {
							"blue": "assets/front/female/bottom/ribbon-skirt/blue.png",
							"green": "assets/front/female/bottom/ribbon-skirt/green.png",
							"pink": "assets/front/female/bottom/ribbon-skirt/pink.png",
							"red": "assets/front/female/bottom/ribbon-skirt/red.png",
							"wine": "assets/front/female/bottom/ribbon-skirt/wine.png"
						},
						"school-girl": {
							"black": "assets/front/female/bottom/school-girl/black.png",
							"light": "assets/front/female/bottom/school-girl/light.png"
						},
						"shorts": {
							"black": "assets/front/female/bottom/shorts/black.png",
							"blue": "assets/front/female/bottom/shorts/blue.png",
							"green": "assets/front/female/bottom/shorts/green.png",
							"red": "assets/front/female/bottom/shorts/red.png",
							"white": "assets/front/female/bottom/shorts/white.png"
						}
					},
					"top": {
						"beach": {
							"black": "assets/front/female/top/beach/black.png",
							"blue": "assets/front/female/top/beach/blue.png",
							"green": "assets/front/female/top/beach/green.png",
							"pink": "assets/front/female/top/beach/pink.png",
							"red": "assets/front/female/top/beach/red.png"
						},
						"classy": {
							"beige": "assets/front/female/top/classy/beige.png",
							"black": "assets/front/female/top/classy/black.png",
							"grey": "assets/front/female/top/classy/grey.png",
							"navy": "assets/front/female/top/classy/navy.png",
							"wine": "assets/front/female/top/classy/wine.png"
						},
						"collared-shirt": {
							"navy": "assets/front/female/top/collared-shirt/navy.png",
							"black": "assets/front/female/top/collared-shirt/black.png",
							"light-blue": "assets/front/female/top/collared-shirt/light-blue.png",
							"white": "assets/front/female/top/collared-shirt/white.png",
							"wine": "assets/front/female/top/collared-shirt/wine.png"
						},
						"formal": {
							"beige": "assets/front/female/top/formal/beige.png",
							"black": "assets/front/female/top/formal/black.png",
							"blue": "assets/front/female/top/formal/blue.png",
							"pink": "assets/front/female/top/formal/pink.png",
							"red": "assets/front/female/top/formal/red.png"
						},
						"hoodie": {
							"black": "assets/front/female/top/hoodie/black.png",
							"purple": "assets/front/female/top/hoodie/purple.png",
							"blue": "assets/front/female/top/hoodie/blue.png",
							"green": "assets/front/female/top/hoodie/green.png",
							"red": "assets/front/female/top/hoodie/red.png"
						},
						"jumpsuit-alt": {
							"black": "assets/front/female/top/jumpsuit-alt/black.png",
							"blue": "assets/front/female/top/jumpsuit-alt/blue.png",
							"green": "assets/front/female/top/jumpsuit-alt/green.png",
							"red": "assets/front/female/top/jumpsuit-alt/red.png",
							"yellow": "assets/front/female/top/jumpsuit-alt/yellow.png"
						},
						"jumpsuit": {
							"black": "assets/front/female/top/jumpsuit/black.png",
							"blue": "assets/front/female/top/jumpsuit/blue.png",
							"green": "assets/front/female/top/jumpsuit/green.png",
							"red": "assets/front/female/top/jumpsuit/red.png",
							"yellow": "assets/front/female/top/jumpsuit/yellow.png"
						},
						"lord-suit": {
							"purple": "assets/front/female/top/lord-suit/purple.png",
							"red": "assets/front/female/top/lord-suit/red.png"
						},
						"open-jacket": {
							"orange": "assets/front/female/top/open-jacket/orange.png",
							"blue": "assets/front/female/top/open-jacket/blue.png",
							"green": "assets/front/female/top/open-jacket/green.png",
							"pink": "assets/front/female/top/open-jacket/pink.png",
							"red": "assets/front/female/top/open-jacket/red.png"
						},
						"scarf-shirt": {
							"black": "assets/front/female/top/scarf-shirt/black.png",
							"blue": "assets/front/female/top/scarf-shirt/blue.png",
							"brown": "assets/front/female/top/scarf-shirt/brown.png",
							"red": "assets/front/female/top/scarf-shirt/red.png",
							"yellow": "assets/front/female/top/scarf-shirt/yellow.png"
						},
						"school-uniform": {
							"dark": "assets/front/female/top/school-uniform/dark.png",
							"light": "assets/front/female/top/school-uniform/light.png"
						},
						"shirt-combo": {
							"black": "assets/front/female/top/shirt-combo/black.png",
							"blue": "assets/front/female/top/shirt-combo/blue.png",
							"red": "assets/front/female/top/shirt-combo/red.png",
							"white": "assets/front/female/top/shirt-combo/white.png",
							"wine": "assets/front/female/top/shirt-combo/wine.png"
						},
						"t-shirt": {
							"black": "assets/front/female/top/t-shirt/black.png",
							"blue": "assets/front/female/top/t-shirt/blue.png",
							"green": "assets/front/female/top/t-shirt/green.png",
							"red": "assets/front/female/top/t-shirt/red.png",
							"white": "assets/front/female/top/t-shirt/white.png"
						},
						"tank-top": {
							"pink": "assets/front/female/top/tank-top/pink.png",
							"black": "assets/front/female/top/tank-top/black.png",
							"green": "assets/front/female/top/tank-top/green.png",
							"navy": "assets/front/female/top/tank-top/navy.png",
							"red": "assets/front/female/top/tank-top/red.png"
						},
						"trench-coat": {
							"black": "assets/front/female/top/trench-coat/black.png",
							"brown": "assets/front/female/top/trench-coat/brown.png",
							"navy": "assets/front/female/top/trench-coat/navy.png",
							"purple": "assets/front/female/top/trench-coat/purple.png",
							"red": "assets/front/female/top/trench-coat/red.png"
						},
						"turtleneck": {
							"black": "assets/front/female/top/turtleneck/black.png",
							"brownish": "assets/front/female/top/turtleneck/brownish.png",
							"green": "assets/front/female/top/turtleneck/green.png",
							"magenta": "assets/front/female/top/turtleneck/magenta.png",
							"white": "assets/front/female/top/turtleneck/white.png"
						},
						"v-neck": {
							"green": "assets/front/female/top/v-neck/green.png",
							"orange": "assets/front/female/top/v-neck/orange.png",
							"purple": "assets/front/female/top/v-neck/purple.png",
							"yellow": "assets/front/female/top/v-neck/yellow.png",
							"black": "assets/front/female/top/v-neck/black.png"
						},
						"vest": {
							"grey": "assets/front/female/top/vest/grey.png",
							"wine": "assets/front/female/top/vest/wine.png",
							"black": "assets/front/female/top/vest/black.png",
							"blue": "assets/front/female/top/vest/blue.png",
							"brown": "assets/front/female/top/vest/brown.png"
						}
					},
					"hair": {
						"hair-1": {
							"black": "assets/front/female/hair/hair-1/black.png",
							"blonde": "assets/front/female/hair/hair-1/blonde.png",
							"blue": "assets/front/female/hair/hair-1/blue.png",
							"brown": "assets/front/female/hair/hair-1/brown.png",
							"cyan": "assets/front/female/hair/hair-1/cyan.png",
							"ginger": "assets/front/female/hair/hair-1/ginger.png",
							"green": "assets/front/female/hair/hair-1/green.png",
							"pink": "assets/front/female/hair/hair-1/pink.png",
							"red": "assets/front/female/hair/hair-1/red.png",
							"violet": "assets/front/female/hair/hair-1/violet.png",
							"white": "assets/front/female/hair/hair-1/white.png"
						},
						"hair-2": {
							"black": "assets/front/female/hair/hair-2/black.png",
							"blue": "assets/front/female/hair/hair-2/blue.png",
							"cyan": "assets/front/female/hair/hair-2/cyan.png",
							"ginger": "assets/front/female/hair/hair-2/ginger.png",
							"green": "assets/front/female/hair/hair-2/green.png",
							"pink": "assets/front/female/hair/hair-2/pink.png",
							"purple": "assets/front/female/hair/hair-2/purple.png",
							"blonde": "assets/front/female/hair/hair-2/blonde.png",
							"brown": "assets/front/female/hair/hair-2/brown.png",
							"red": "assets/front/female/hair/hair-2/red.png",
							"white": "assets/front/female/hair/hair-2/white.png"
						},
						"hair-3": {
							"black": "assets/front/female/hair/hair-3/black.png",
							"blonde": "assets/front/female/hair/hair-3/blonde.png",
							"blue": "assets/front/female/hair/hair-3/blue.png",
							"brown": "assets/front/female/hair/hair-3/brown.png",
							"cyan": "assets/front/female/hair/hair-3/cyan.png",
							"ginger": "assets/front/female/hair/hair-3/ginger.png",
							"green": "assets/front/female/hair/hair-3/green.png",
							"pink": "assets/front/female/hair/hair-3/pink.png",
							"purple": "assets/front/female/hair/hair-3/purple.png",
							"red": "assets/front/female/hair/hair-3/red.png",
							"white": "assets/front/female/hair/hair-3/white.png"
						},
						"hair-4": {
							"black": "assets/front/female/hair/hair-4/black.png",
							"blonde": "assets/front/female/hair/hair-4/blonde.png",
							"blue": "assets/front/female/hair/hair-4/blue.png",
							"brown": "assets/front/female/hair/hair-4/brown.png",
							"cyan": "assets/front/female/hair/hair-4/cyan.png",
							"ginger": "assets/front/female/hair/hair-4/ginger.png",
							"green": "assets/front/female/hair/hair-4/green.png",
							"pink": "assets/front/female/hair/hair-4/pink.png",
							"purple": "assets/front/female/hair/hair-4/purple.png",
							"red": "assets/front/female/hair/hair-4/red.png",
							"white": "assets/front/female/hair/hair-4/white.png"
						}
					},
					"hat": {
						"base": {
							"baguette": "assets/front/female/hat/base/baguette.png",
							"bonnet": "assets/front/female/hat/base/bonnet.png",
							"cate": "assets/front/female/hat/base/cate.png",
							"devil": "assets/front/female/hat/base/devil.png",
							"feather-hat": "assets/front/female/hat/base/feather-hat.png",
							"fedora": "assets/front/female/hat/base/fedora.png",
							"hair-band": "assets/front/female/hat/base/hair-band.png",
							"headband": "assets/front/female/hat/base/headband.png",
							"mining": "assets/front/female/hat/base/mining.png",
							"poop": "assets/front/female/hat/base/poop.png",
							"ribbon": "assets/front/female/hat/base/ribbon.png",
							"straw-hat": "assets/front/female/hat/base/straw-hat.png",
							"sun-hat": "assets/front/female/hat/base/sun-hat.png"
						},
						"beanie": {
							"black": "assets/front/female/hat/beanie/black.png",
							"purple": "assets/front/female/hat/beanie/purple.png"
						},
						"crown": {
							"gold": "assets/front/female/hat/crown/gold.png",
							"silver": "assets/front/female/hat/crown/silver.png"
						},
						"flower": {
							"blue": "assets/front/female/hat/flower/blue.png",
							"red": "assets/front/female/hat/flower/red.png"
						},
						"glasses": {
							"blue": "assets/front/female/hat/glasses/blue.png",
							"red": "assets/front/female/hat/glasses/red.png"
						},
						"youngster-hat": {
							"youngster-cap-bee": "assets/front/female/hat/youngster-hat/youngster-cap-bee.png",
							"blue": "assets/front/female/hat/youngster-hat/blue.png"
						}
					}
				},
				"male": {
					"body": { "base": {
						"dark": "assets/front/male/body/base/dark.png",
						"light": "assets/front/male/body/base/light.png",
						"medium": "assets/front/male/body/base/medium.png",
						"pale": "assets/front/male/body/base/pale.png"
					} },
					"bottom": {
						"base": { "lord-suit-pants": "assets/front/male/bottom/base/lord-suit-pants.png" },
						"beach-bottom": {
							"black": "assets/front/male/bottom/beach-bottom/black.png",
							"blue": "assets/front/male/bottom/beach-bottom/blue.png",
							"green": "assets/front/male/bottom/beach-bottom/green.png",
							"pink": "assets/front/male/bottom/beach-bottom/pink.png",
							"red": "assets/front/male/bottom/beach-bottom/red.png"
						},
						"capris": {
							"aqua": "assets/front/male/bottom/capris/aqua.png",
							"beige": "assets/front/male/bottom/capris/beige.png",
							"black": "assets/front/male/bottom/capris/black.png",
							"green": "assets/front/male/bottom/capris/green.png",
							"navy": "assets/front/male/bottom/capris/navy.png"
						},
						"classy-pants": {
							"beige": "assets/front/male/bottom/classy-pants/beige.png",
							"black": "assets/front/male/bottom/classy-pants/black.png",
							"grey": "assets/front/male/bottom/classy-pants/grey.png",
							"navy": "assets/front/male/bottom/classy-pants/navy.png",
							"wine": "assets/front/male/bottom/classy-pants/wine.png"
						},
						"formal-pants": {
							"black": "assets/front/male/bottom/formal-pants/black.png",
							"blue": "assets/front/male/bottom/formal-pants/blue.png",
							"brown": "assets/front/male/bottom/formal-pants/brown.png",
							"grey": "assets/front/male/bottom/formal-pants/grey.png",
							"red": "assets/front/male/bottom/formal-pants/red.png"
						},
						"jeans": {
							"aqua": "assets/front/male/bottom/jeans/aqua.png",
							"black": "assets/front/male/bottom/jeans/black.png",
							"grey": "assets/front/male/bottom/jeans/grey.png",
							"light-blue": "assets/front/male/bottom/jeans/light-blue.png",
							"navy": "assets/front/male/bottom/jeans/navy.png"
						},
						"jumpsuit-pants": {
							"black": "assets/front/male/bottom/jumpsuit-pants/black.png",
							"blue": "assets/front/male/bottom/jumpsuit-pants/blue.png",
							"green": "assets/front/male/bottom/jumpsuit-pants/green.png",
							"red": "assets/front/male/bottom/jumpsuit-pants/red.png",
							"yellow": "assets/front/male/bottom/jumpsuit-pants/yellow.png"
						},
						"jumpsuit-pants-alt": {
							"black": "assets/front/male/bottom/jumpsuit-pants-alt/black.png",
							"blue": "assets/front/male/bottom/jumpsuit-pants-alt/blue.png",
							"green": "assets/front/male/bottom/jumpsuit-pants-alt/green.png",
							"red": "assets/front/male/bottom/jumpsuit-pants-alt/red.png",
							"yellow": "assets/front/male/bottom/jumpsuit-pants-alt/yellow.png"
						},
						"long-skirt": {
							"black": "assets/front/male/bottom/long-skirt/black.png",
							"blue": "assets/front/male/bottom/long-skirt/blue.png",
							"green": "assets/front/male/bottom/long-skirt/green.png",
							"pink": "assets/front/male/bottom/long-skirt/pink.png",
							"purple": "assets/front/male/bottom/long-skirt/purple.png"
						},
						"pants-and-boots": {
							"beige": "assets/front/male/bottom/pants-and-boots/beige.png",
							"black": "assets/front/male/bottom/pants-and-boots/black.png",
							"grey": "assets/front/male/bottom/pants-and-boots/grey.png",
							"light-blue": "assets/front/male/bottom/pants-and-boots/light-blue.png",
							"navy": "assets/front/male/bottom/pants-and-boots/navy.png"
						},
						"pencil-skirt": {
							"black": "assets/front/male/bottom/pencil-skirt/black.png",
							"green": "assets/front/male/bottom/pencil-skirt/green.png",
							"grey": "assets/front/male/bottom/pencil-skirt/grey.png",
							"navy": "assets/front/male/bottom/pencil-skirt/navy.png",
							"wine": "assets/front/male/bottom/pencil-skirt/wine.png"
						},
						"ribbon-skirt": {
							"blue": "assets/front/male/bottom/ribbon-skirt/blue.png",
							"green": "assets/front/male/bottom/ribbon-skirt/green.png",
							"pink": "assets/front/male/bottom/ribbon-skirt/pink.png",
							"red": "assets/front/male/bottom/ribbon-skirt/red.png",
							"wine": "assets/front/male/bottom/ribbon-skirt/wine.png"
						},
						"school-uniform-bottom": {
							"dark": "assets/front/male/bottom/school-uniform-bottom/dark.png",
							"light": "assets/front/male/bottom/school-uniform-bottom/light.png"
						},
						"shorts": {
							"black": "assets/front/male/bottom/shorts/black.png",
							"blue": "assets/front/male/bottom/shorts/blue.png",
							"green": "assets/front/male/bottom/shorts/green.png",
							"red": "assets/front/male/bottom/shorts/red.png",
							"white": "assets/front/male/bottom/shorts/white.png"
						}
					},
					"top": {
						"beach": {
							"black": "assets/front/male/top/beach/black.png",
							"blue": "assets/front/male/top/beach/blue.png",
							"green": "assets/front/male/top/beach/green.png",
							"pink": "assets/front/male/top/beach/pink.png",
							"red": "assets/front/male/top/beach/red.png"
						},
						"classy": {
							"beige": "assets/front/male/top/classy/beige.png",
							"black": "assets/front/male/top/classy/black.png",
							"grey": "assets/front/male/top/classy/grey.png",
							"navy": "assets/front/male/top/classy/navy.png",
							"wine": "assets/front/male/top/classy/wine.png"
						},
						"collared-shirt": {
							"black": "assets/front/male/top/collared-shirt/black.png",
							"light-blue": "assets/front/male/top/collared-shirt/light-blue.png",
							"navy": "assets/front/male/top/collared-shirt/navy.png",
							"white": "assets/front/male/top/collared-shirt/white.png",
							"wine": "assets/front/male/top/collared-shirt/wine.png"
						},
						"formal": {
							"black": "assets/front/male/top/formal/black.png",
							"beige": "assets/front/male/top/formal/beige.png",
							"blue": "assets/front/male/top/formal/blue.png",
							"pink": "assets/front/male/top/formal/pink.png",
							"red": "assets/front/male/top/formal/red.png"
						},
						"hoodie": {
							"black": "assets/front/male/top/hoodie/black.png",
							"blue": "assets/front/male/top/hoodie/blue.png",
							"green": "assets/front/male/top/hoodie/green.png",
							"purple": "assets/front/male/top/hoodie/purple.png",
							"red": "assets/front/male/top/hoodie/red.png"
						},
						"jumpsuit-alt": {
							"black": "assets/front/male/top/jumpsuit-alt/black.png",
							"blue": "assets/front/male/top/jumpsuit-alt/blue.png",
							"green": "assets/front/male/top/jumpsuit-alt/green.png",
							"red": "assets/front/male/top/jumpsuit-alt/red.png",
							"yellow": "assets/front/male/top/jumpsuit-alt/yellow.png"
						},
						"jumpsuit": {
							"black": "assets/front/male/top/jumpsuit/black.png",
							"blue": "assets/front/male/top/jumpsuit/blue.png",
							"green": "assets/front/male/top/jumpsuit/green.png",
							"red": "assets/front/male/top/jumpsuit/red.png",
							"yellow": "assets/front/male/top/jumpsuit/yellow.png"
						},
						"lord-suit-top": {
							"purple": "assets/front/male/top/lord-suit-top/purple.png",
							"red": "assets/front/male/top/lord-suit-top/red.png"
						},
						"open-jacket": {
							"blue": "assets/front/male/top/open-jacket/blue.png",
							"green": "assets/front/male/top/open-jacket/green.png",
							"pink": "assets/front/male/top/open-jacket/pink.png",
							"red": "assets/front/male/top/open-jacket/red.png",
							"orange": "assets/front/male/top/open-jacket/orange.png"
						},
						"scarf-top": {
							"black": "assets/front/male/top/scarf-top/black.png",
							"blue": "assets/front/male/top/scarf-top/blue.png",
							"brown": "assets/front/male/top/scarf-top/brown.png",
							"red": "assets/front/male/top/scarf-top/red.png",
							"yellow": "assets/front/male/top/scarf-top/yellow.png"
						},
						"school-uniform": {
							"dark": "assets/front/male/top/school-uniform/dark.png",
							"light": "assets/front/male/top/school-uniform/light.png"
						},
						"shirt-combo": {
							"black": "assets/front/male/top/shirt-combo/black.png",
							"blue": "assets/front/male/top/shirt-combo/blue.png",
							"red": "assets/front/male/top/shirt-combo/red.png",
							"white": "assets/front/male/top/shirt-combo/white.png",
							"wine": "assets/front/male/top/shirt-combo/wine.png"
						},
						"t-shirt": {
							"black": "assets/front/male/top/t-shirt/black.png",
							"blue": "assets/front/male/top/t-shirt/blue.png",
							"green": "assets/front/male/top/t-shirt/green.png",
							"red": "assets/front/male/top/t-shirt/red.png",
							"white": "assets/front/male/top/t-shirt/white.png"
						},
						"tank-top": {
							"black": "assets/front/male/top/tank-top/black.png",
							"green": "assets/front/male/top/tank-top/green.png",
							"navy": "assets/front/male/top/tank-top/navy.png",
							"pink": "assets/front/male/top/tank-top/pink.png",
							"red": "assets/front/male/top/tank-top/red.png"
						},
						"trench-coat": {
							"beige": "assets/front/male/top/trench-coat/beige.png",
							"black": "assets/front/male/top/trench-coat/black.png",
							"navy": "assets/front/male/top/trench-coat/navy.png",
							"purple": "assets/front/male/top/trench-coat/purple.png",
							"red": "assets/front/male/top/trench-coat/red.png"
						},
						"turtleneck": {
							"beige": "assets/front/male/top/turtleneck/beige.png",
							"black": "assets/front/male/top/turtleneck/black.png",
							"green": "assets/front/male/top/turtleneck/green.png",
							"white": "assets/front/male/top/turtleneck/white.png",
							"wine": "assets/front/male/top/turtleneck/wine.png"
						},
						"v-neck": {
							"black": "assets/front/male/top/v-neck/black.png",
							"green": "assets/front/male/top/v-neck/green.png",
							"orange": "assets/front/male/top/v-neck/orange.png",
							"purple": "assets/front/male/top/v-neck/purple.png",
							"yellow": "assets/front/male/top/v-neck/yellow.png"
						},
						"vest": {
							"beige": "assets/front/male/top/vest/beige.png",
							"black": "assets/front/male/top/vest/black.png",
							"blue": "assets/front/male/top/vest/blue.png",
							"grey": "assets/front/male/top/vest/grey.png",
							"wine": "assets/front/male/top/vest/wine.png"
						}
					},
					"hair": {
						"hair-1": {
							"black": "assets/front/male/hair/hair-1/black.png",
							"blonde": "assets/front/male/hair/hair-1/blonde.png",
							"blue": "assets/front/male/hair/hair-1/blue.png",
							"brown": "assets/front/male/hair/hair-1/brown.png",
							"cyan": "assets/front/male/hair/hair-1/cyan.png",
							"ginger": "assets/front/male/hair/hair-1/ginger.png",
							"green": "assets/front/male/hair/hair-1/green.png",
							"pink": "assets/front/male/hair/hair-1/pink.png",
							"purple": "assets/front/male/hair/hair-1/purple.png",
							"red": "assets/front/male/hair/hair-1/red.png",
							"white": "assets/front/male/hair/hair-1/white.png"
						},
						"hair-2": {
							"black": "assets/front/male/hair/hair-2/black.png",
							"blonde": "assets/front/male/hair/hair-2/blonde.png",
							"blue": "assets/front/male/hair/hair-2/blue.png",
							"brown": "assets/front/male/hair/hair-2/brown.png",
							"cyan": "assets/front/male/hair/hair-2/cyan.png",
							"ginger": "assets/front/male/hair/hair-2/ginger.png",
							"green": "assets/front/male/hair/hair-2/green.png",
							"pink": "assets/front/male/hair/hair-2/pink.png",
							"red": "assets/front/male/hair/hair-2/red.png",
							"violet": "assets/front/male/hair/hair-2/violet.png",
							"white": "assets/front/male/hair/hair-2/white.png"
						},
						"hair-3": {
							"black": "assets/front/male/hair/hair-3/black.png",
							"blonde": "assets/front/male/hair/hair-3/blonde.png",
							"blue": "assets/front/male/hair/hair-3/blue.png",
							"brown": "assets/front/male/hair/hair-3/brown.png",
							"cyan": "assets/front/male/hair/hair-3/cyan.png",
							"ginger": "assets/front/male/hair/hair-3/ginger.png",
							"green": "assets/front/male/hair/hair-3/green.png",
							"pink": "assets/front/male/hair/hair-3/pink.png",
							"purple": "assets/front/male/hair/hair-3/purple.png",
							"red": "assets/front/male/hair/hair-3/red.png",
							"white": "assets/front/male/hair/hair-3/white.png"
						},
						"hair-4": {
							"black": "assets/front/male/hair/hair-4/black.png",
							"blonde": "assets/front/male/hair/hair-4/blonde.png",
							"blue": "assets/front/male/hair/hair-4/blue.png",
							"brown": "assets/front/male/hair/hair-4/brown.png",
							"cyan": "assets/front/male/hair/hair-4/cyan.png",
							"ginger": "assets/front/male/hair/hair-4/ginger.png",
							"green": "assets/front/male/hair/hair-4/green.png",
							"pink": "assets/front/male/hair/hair-4/pink.png",
							"purple": "assets/front/male/hair/hair-4/purple.png",
							"red": "assets/front/male/hair/hair-4/red.png",
							"white": "assets/front/male/hair/hair-4/white.png"
						}
					},
					"hat": {
						"base": {
							"beret": "assets/front/male/hat/base/beret.png",
							"bonnet": "assets/front/male/hat/base/bonnet.png",
							"cat-ears": "assets/front/male/hat/base/cat-ears.png",
							"devil": "assets/front/male/hat/base/devil.png",
							"feather-hat": "assets/front/male/hat/base/feather-hat.png",
							"fedora": "assets/front/male/hat/base/fedora.png",
							"hair-band": "assets/front/male/hat/base/hair-band.png",
							"headband": "assets/front/male/hat/base/headband.png",
							"mining": "assets/front/male/hat/base/mining.png",
							"poop": "assets/front/male/hat/base/poop.png",
							"ribbon": "assets/front/male/hat/base/ribbon.png",
							"straw-hat": "assets/front/male/hat/base/straw-hat.png",
							"sun-hat": "assets/front/male/hat/base/sun-hat.png"
						},
						"beanie": {
							"black": "assets/front/male/hat/beanie/black.png",
							"purple": "assets/front/male/hat/beanie/purple.png"
						},
						"crown": {
							"gold": "assets/front/male/hat/crown/gold.png",
							"silver": "assets/front/male/hat/crown/silver.png"
						},
						"flower": {
							"blue": "assets/front/male/hat/flower/blue.png",
							"red": "assets/front/male/hat/flower/red.png"
						},
						"glasses": {
							"blue": "assets/front/male/hat/glasses/blue.png",
							"red": "assets/front/male/hat/glasses/red.png"
						},
						"youngster-hat": {
							"blue": "assets/front/male/hat/youngster-hat/blue.png",
							"yellow": "assets/front/male/hat/youngster-hat/yellow.png"
						}
					}
				}
			},
			"back": {
				"female": {
					"body": { "base": {
						"dark": "assets/back/female/body/base/dark.png",
						"light": "assets/back/female/body/base/light.png",
						"medium": "assets/back/female/body/base/medium.png",
						"pale": "assets/back/female/body/base/pale.png"
					} },
					"top": {
						"beach": {
							"black": "assets/back/female/top/beach/black.png",
							"blue": "assets/back/female/top/beach/blue.png",
							"green": "assets/back/female/top/beach/green.png",
							"pink": "assets/back/female/top/beach/pink.png",
							"red": "assets/back/female/top/beach/red.png"
						},
						"classy": {
							"beige": "assets/back/female/top/classy/beige.png",
							"black": "assets/back/female/top/classy/black.png",
							"grey": "assets/back/female/top/classy/grey.png",
							"navy": "assets/back/female/top/classy/navy.png",
							"wine": "assets/back/female/top/classy/wine.png"
						},
						"collared-shirt": {
							"black": "assets/back/female/top/collared-shirt/black.png",
							"light-blue": "assets/back/female/top/collared-shirt/light-blue.png",
							"navy": "assets/back/female/top/collared-shirt/navy.png",
							"white": "assets/back/female/top/collared-shirt/white.png",
							"wine": "assets/back/female/top/collared-shirt/wine.png"
						},
						"formal": {
							"beige": "assets/back/female/top/formal/beige.png",
							"black": "assets/back/female/top/formal/black.png",
							"blue": "assets/back/female/top/formal/blue.png",
							"pink": "assets/back/female/top/formal/pink.png",
							"red": "assets/back/female/top/formal/red.png"
						},
						"hoodie": {
							"black": "assets/back/female/top/hoodie/black.png",
							"blue": "assets/back/female/top/hoodie/blue.png",
							"green": "assets/back/female/top/hoodie/green.png",
							"purple": "assets/back/female/top/hoodie/purple.png",
							"red": "assets/back/female/top/hoodie/red.png"
						},
						"jumpsuit": {
							"black": "assets/back/female/top/jumpsuit/black.png",
							"black-2": "assets/back/female/top/jumpsuit/black-2.png",
							"blue": "assets/back/female/top/jumpsuit/blue.png",
							"green": "assets/back/female/top/jumpsuit/green.png",
							"red": "assets/back/female/top/jumpsuit/red.png"
						},
						"jumpsuit-alt": {
							"black": "assets/back/female/top/jumpsuit-alt/black.png",
							"blue": "assets/back/female/top/jumpsuit-alt/blue.png",
							"green": "assets/back/female/top/jumpsuit-alt/green.png",
							"red": "assets/back/female/top/jumpsuit-alt/red.png",
							"yellow": "assets/back/female/top/jumpsuit-alt/yellow.png"
						},
						"lord-suit": {
							"purple": "assets/back/female/top/lord-suit/purple.png",
							"red": "assets/back/female/top/lord-suit/red.png"
						},
						"open-jacket": {
							"blue": "assets/back/female/top/open-jacket/blue.png",
							"green": "assets/back/female/top/open-jacket/green.png",
							"orange": "assets/back/female/top/open-jacket/orange.png",
							"pink": "assets/back/female/top/open-jacket/pink.png",
							"red": "assets/back/female/top/open-jacket/red.png"
						},
						"scarf-shirt": {
							"black": "assets/back/female/top/scarf-shirt/black.png",
							"blue": "assets/back/female/top/scarf-shirt/blue.png",
							"brown": "assets/back/female/top/scarf-shirt/brown.png",
							"red": "assets/back/female/top/scarf-shirt/red.png",
							"yellow": "assets/back/female/top/scarf-shirt/yellow.png"
						},
						"school-uniform": {
							"dark": "assets/back/female/top/school-uniform/dark.png",
							"light": "assets/back/female/top/school-uniform/light.png"
						},
						"shirt-combo": {
							"black": "assets/back/female/top/shirt-combo/black.png",
							"blue": "assets/back/female/top/shirt-combo/blue.png",
							"red": "assets/back/female/top/shirt-combo/red.png",
							"white": "assets/back/female/top/shirt-combo/white.png",
							"wine": "assets/back/female/top/shirt-combo/wine.png"
						},
						"t-shirt": {
							"black": "assets/back/female/top/t-shirt/black.png",
							"blue": "assets/back/female/top/t-shirt/blue.png",
							"green": "assets/back/female/top/t-shirt/green.png",
							"red": "assets/back/female/top/t-shirt/red.png",
							"white": "assets/back/female/top/t-shirt/white.png"
						},
						"tank-top": {
							"black": "assets/back/female/top/tank-top/black.png",
							"green": "assets/back/female/top/tank-top/green.png",
							"navy": "assets/back/female/top/tank-top/navy.png",
							"pink": "assets/back/female/top/tank-top/pink.png",
							"red": "assets/back/female/top/tank-top/red.png"
						},
						"trench-coat": {
							"beige": "assets/back/female/top/trench-coat/beige.png",
							"black": "assets/back/female/top/trench-coat/black.png",
							"navy": "assets/back/female/top/trench-coat/navy.png",
							"purple": "assets/back/female/top/trench-coat/purple.png",
							"red": "assets/back/female/top/trench-coat/red.png"
						},
						"turtleneck": {
							"beige": "assets/back/female/top/turtleneck/beige.png",
							"black": "assets/back/female/top/turtleneck/black.png",
							"green": "assets/back/female/top/turtleneck/green.png",
							"white": "assets/back/female/top/turtleneck/white.png",
							"wine": "assets/back/female/top/turtleneck/wine.png"
						},
						"v-neck": {
							"black": "assets/back/female/top/v-neck/black.png",
							"green": "assets/back/female/top/v-neck/green.png",
							"orange": "assets/back/female/top/v-neck/orange.png",
							"purple": "assets/back/female/top/v-neck/purple.png",
							"yellow": "assets/back/female/top/v-neck/yellow.png"
						},
						"vest": {
							"beige": "assets/back/female/top/vest/beige.png",
							"black": "assets/back/female/top/vest/black.png",
							"blue": "assets/back/female/top/vest/blue.png",
							"grey": "assets/back/female/top/vest/grey.png",
							"wine": "assets/back/female/top/vest/wine.png"
						}
					},
					"hair": {
						"hair-1": {
							"black": "assets/back/female/hair/hair-1/black.png",
							"blonde": "assets/back/female/hair/hair-1/blonde.png",
							"blue": "assets/back/female/hair/hair-1/blue.png",
							"brown": "assets/back/female/hair/hair-1/brown.png",
							"cyan": "assets/back/female/hair/hair-1/cyan.png",
							"ginger": "assets/back/female/hair/hair-1/ginger.png",
							"green": "assets/back/female/hair/hair-1/green.png",
							"pink": "assets/back/female/hair/hair-1/pink.png",
							"purple": "assets/back/female/hair/hair-1/purple.png",
							"red": "assets/back/female/hair/hair-1/red.png",
							"white": "assets/back/female/hair/hair-1/white.png"
						},
						"hair-2": {
							"black": "assets/back/female/hair/hair-2/black.png",
							"blonde": "assets/back/female/hair/hair-2/blonde.png",
							"blue": "assets/back/female/hair/hair-2/blue.png",
							"brown": "assets/back/female/hair/hair-2/brown.png",
							"cyan": "assets/back/female/hair/hair-2/cyan.png",
							"ginger": "assets/back/female/hair/hair-2/ginger.png",
							"green": "assets/back/female/hair/hair-2/green.png",
							"pink": "assets/back/female/hair/hair-2/pink.png",
							"purple": "assets/back/female/hair/hair-2/purple.png",
							"red": "assets/back/female/hair/hair-2/red.png",
							"white": "assets/back/female/hair/hair-2/white.png"
						},
						"hair-3": {
							"black": "assets/back/female/hair/hair-3/black.png",
							"blonde": "assets/back/female/hair/hair-3/blonde.png",
							"blue": "assets/back/female/hair/hair-3/blue.png",
							"brown": "assets/back/female/hair/hair-3/brown.png",
							"cyan": "assets/back/female/hair/hair-3/cyan.png",
							"ginger": "assets/back/female/hair/hair-3/ginger.png",
							"green": "assets/back/female/hair/hair-3/green.png",
							"pink": "assets/back/female/hair/hair-3/pink.png",
							"purple": "assets/back/female/hair/hair-3/purple.png",
							"red": "assets/back/female/hair/hair-3/red.png",
							"white": "assets/back/female/hair/hair-3/white.png"
						},
						"hair-4": {
							"black": "assets/back/female/hair/hair-4/black.png",
							"blonde": "assets/back/female/hair/hair-4/blonde.png",
							"blue": "assets/back/female/hair/hair-4/blue.png",
							"brown": "assets/back/female/hair/hair-4/brown.png",
							"cyan": "assets/back/female/hair/hair-4/cyan.png",
							"ginger": "assets/back/female/hair/hair-4/ginger.png",
							"green": "assets/back/female/hair/hair-4/green.png",
							"pink": "assets/back/female/hair/hair-4/pink.png",
							"purple": "assets/back/female/hair/hair-4/purple.png",
							"red": "assets/back/female/hair/hair-4/red.png",
							"white": "assets/back/female/hair/hair-4/white.png"
						}
					},
					"hat": {
						"base": {
							"beret": "assets/back/female/hat/base/beret.png",
							"bonnet": "assets/back/female/hat/base/bonnet.png",
							"cat-ears": "assets/back/female/hat/base/cat-ears.png",
							"devil": "assets/back/female/hat/base/devil.png",
							"feather-hat": "assets/back/female/hat/base/feather-hat.png",
							"fedora": "assets/back/female/hat/base/fedora.png",
							"hairband": "assets/back/female/hat/base/hairband.png",
							"headband": "assets/back/female/hat/base/headband.png",
							"mining": "assets/back/female/hat/base/mining.png",
							"poop": "assets/back/female/hat/base/poop.png",
							"ribbon": "assets/back/female/hat/base/ribbon.png",
							"straw-hat": "assets/back/female/hat/base/straw-hat.png",
							"sun-hat": "assets/back/female/hat/base/sun-hat.png"
						},
						"beanie": {
							"black": "assets/back/female/hat/beanie/black.png",
							"purple": "assets/back/female/hat/beanie/purple.png"
						},
						"crown": {
							"gold": "assets/back/female/hat/crown/gold.png",
							"silver": "assets/back/female/hat/crown/silver.png"
						},
						"flower": {
							"blue": "assets/back/female/hat/flower/blue.png",
							"red": "assets/back/female/hat/flower/red.png"
						},
						"glasses": {
							"blue": "assets/back/female/hat/glasses/blue.png",
							"red": "assets/back/female/hat/glasses/red.png"
						},
						"youngster-hat": {
							"blue": "assets/back/female/hat/youngster-hat/blue.png",
							"copy": "assets/back/female/hat/youngster-hat/copy.png"
						}
					}
				},
				"male": {
					"body": { "base": {
						"dark": "assets/back/male/body/base/dark.png",
						"light": "assets/back/male/body/base/light.png",
						"medium": "assets/back/male/body/base/medium.png",
						"pale": "assets/back/male/body/base/pale.png"
					} },
					"top": {
						"beach": {
							"black": "assets/back/male/top/beach/black.png",
							"blue": "assets/back/male/top/beach/blue.png",
							"green": "assets/back/male/top/beach/green.png",
							"pink": "assets/back/male/top/beach/pink.png",
							"red": "assets/back/male/top/beach/red.png"
						},
						"classy": {
							"beige": "assets/back/male/top/classy/beige.png",
							"black": "assets/back/male/top/classy/black.png",
							"grey": "assets/back/male/top/classy/grey.png",
							"navy": "assets/back/male/top/classy/navy.png",
							"wine": "assets/back/male/top/classy/wine.png"
						},
						"collared-shirt": {
							"black": "assets/back/male/top/collared-shirt/black.png",
							"light-blue": "assets/back/male/top/collared-shirt/light-blue.png",
							"navy": "assets/back/male/top/collared-shirt/navy.png",
							"white": "assets/back/male/top/collared-shirt/white.png",
							"wine": "assets/back/male/top/collared-shirt/wine.png"
						},
						"formal": {
							"beige": "assets/back/male/top/formal/beige.png",
							"black": "assets/back/male/top/formal/black.png",
							"blue": "assets/back/male/top/formal/blue.png",
							"pink": "assets/back/male/top/formal/pink.png",
							"red": "assets/back/male/top/formal/red.png"
						},
						"hoodie": {
							"black": "assets/back/male/top/hoodie/black.png",
							"blue": "assets/back/male/top/hoodie/blue.png",
							"green": "assets/back/male/top/hoodie/green.png",
							"purple": "assets/back/male/top/hoodie/purple.png",
							"red": "assets/back/male/top/hoodie/red.png"
						},
						"jumpsuit": {
							"black": "assets/back/male/top/jumpsuit/black.png",
							"black-2": "assets/back/male/top/jumpsuit/black-2.png",
							"blue": "assets/back/male/top/jumpsuit/blue.png",
							"green": "assets/back/male/top/jumpsuit/green.png",
							"red": "assets/back/male/top/jumpsuit/red.png"
						},
						"jumpsuit-alt": {
							"black": "assets/back/male/top/jumpsuit-alt/black.png",
							"blue": "assets/back/male/top/jumpsuit-alt/blue.png",
							"green": "assets/back/male/top/jumpsuit-alt/green.png",
							"red": "assets/back/male/top/jumpsuit-alt/red.png",
							"yellow": "assets/back/male/top/jumpsuit-alt/yellow.png"
						},
						"lord-suit": {
							"purple": "assets/back/male/top/lord-suit/purple.png",
							"red": "assets/back/male/top/lord-suit/red.png"
						},
						"open-jacket": {
							"blue": "assets/back/male/top/open-jacket/blue.png",
							"green": "assets/back/male/top/open-jacket/green.png",
							"orange": "assets/back/male/top/open-jacket/orange.png",
							"pink": "assets/back/male/top/open-jacket/pink.png",
							"red": "assets/back/male/top/open-jacket/red.png"
						},
						"scarf-shirt": {
							"black": "assets/back/male/top/scarf-shirt/black.png",
							"blue": "assets/back/male/top/scarf-shirt/blue.png",
							"brown": "assets/back/male/top/scarf-shirt/brown.png",
							"red": "assets/back/male/top/scarf-shirt/red.png",
							"yellow": "assets/back/male/top/scarf-shirt/yellow.png"
						},
						"school-uniform": {
							"dark": "assets/back/male/top/school-uniform/dark.png",
							"light": "assets/back/male/top/school-uniform/light.png"
						},
						"shirt-combo": {
							"black": "assets/back/male/top/shirt-combo/black.png",
							"blue": "assets/back/male/top/shirt-combo/blue.png",
							"red": "assets/back/male/top/shirt-combo/red.png",
							"white": "assets/back/male/top/shirt-combo/white.png",
							"wine": "assets/back/male/top/shirt-combo/wine.png"
						},
						"t-shirt": {
							"black": "assets/back/male/top/t-shirt/black.png",
							"blue": "assets/back/male/top/t-shirt/blue.png",
							"green": "assets/back/male/top/t-shirt/green.png",
							"red": "assets/back/male/top/t-shirt/red.png",
							"white": "assets/back/male/top/t-shirt/white.png"
						},
						"tank-top": {
							"black": "assets/back/male/top/tank-top/black.png",
							"green": "assets/back/male/top/tank-top/green.png",
							"navy": "assets/back/male/top/tank-top/navy.png",
							"pink": "assets/back/male/top/tank-top/pink.png",
							"red": "assets/back/male/top/tank-top/red.png"
						},
						"trench-coat": {
							"beige": "assets/back/male/top/trench-coat/beige.png",
							"black": "assets/back/male/top/trench-coat/black.png",
							"navy": "assets/back/male/top/trench-coat/navy.png",
							"purple": "assets/back/male/top/trench-coat/purple.png",
							"red": "assets/back/male/top/trench-coat/red.png"
						},
						"turtleneck": {
							"beige": "assets/back/male/top/turtleneck/beige.png",
							"black": "assets/back/male/top/turtleneck/black.png",
							"green": "assets/back/male/top/turtleneck/green.png",
							"white": "assets/back/male/top/turtleneck/white.png",
							"wine": "assets/back/male/top/turtleneck/wine.png"
						},
						"v-neck": {
							"black": "assets/back/male/top/v-neck/black.png",
							"green": "assets/back/male/top/v-neck/green.png",
							"orange": "assets/back/male/top/v-neck/orange.png",
							"purple": "assets/back/male/top/v-neck/purple.png",
							"yellow": "assets/back/male/top/v-neck/yellow.png"
						},
						"vest": {
							"beige": "assets/back/male/top/vest/beige.png",
							"black": "assets/back/male/top/vest/black.png",
							"blue": "assets/back/male/top/vest/blue.png",
							"grey": "assets/back/male/top/vest/grey.png",
							"wine": "assets/back/male/top/vest/wine.png"
						}
					},
					"hair": {
						"hair-1": {
							"black": "assets/back/male/hair/hair-1/black.png",
							"blonde": "assets/back/male/hair/hair-1/blonde.png",
							"blue": "assets/back/male/hair/hair-1/blue.png",
							"brown": "assets/back/male/hair/hair-1/brown.png",
							"cyan": "assets/back/male/hair/hair-1/cyan.png",
							"ginger": "assets/back/male/hair/hair-1/ginger.png",
							"green": "assets/back/male/hair/hair-1/green.png",
							"pink": "assets/back/male/hair/hair-1/pink.png",
							"purple": "assets/back/male/hair/hair-1/purple.png",
							"red": "assets/back/male/hair/hair-1/red.png",
							"white": "assets/back/male/hair/hair-1/white.png"
						},
						"hair-2": {
							"black": "assets/back/male/hair/hair-2/black.png",
							"blonde": "assets/back/male/hair/hair-2/blonde.png",
							"blue": "assets/back/male/hair/hair-2/blue.png",
							"brown": "assets/back/male/hair/hair-2/brown.png",
							"cyan": "assets/back/male/hair/hair-2/cyan.png",
							"ginger": "assets/back/male/hair/hair-2/ginger.png",
							"green": "assets/back/male/hair/hair-2/green.png",
							"pink": "assets/back/male/hair/hair-2/pink.png",
							"purple": "assets/back/male/hair/hair-2/purple.png",
							"red": "assets/back/male/hair/hair-2/red.png",
							"white": "assets/back/male/hair/hair-2/white.png"
						},
						"hair-3": {
							"black": "assets/back/male/hair/hair-3/black.png",
							"blonde": "assets/back/male/hair/hair-3/blonde.png",
							"blue": "assets/back/male/hair/hair-3/blue.png",
							"brown": "assets/back/male/hair/hair-3/brown.png",
							"cyan": "assets/back/male/hair/hair-3/cyan.png",
							"ginger": "assets/back/male/hair/hair-3/ginger.png",
							"green": "assets/back/male/hair/hair-3/green.png",
							"pink": "assets/back/male/hair/hair-3/pink.png",
							"purple": "assets/back/male/hair/hair-3/purple.png",
							"red": "assets/back/male/hair/hair-3/red.png",
							"white": "assets/back/male/hair/hair-3/white.png"
						},
						"hair-4": {
							"black": "assets/back/male/hair/hair-4/black.png",
							"blonde": "assets/back/male/hair/hair-4/blonde.png",
							"blue": "assets/back/male/hair/hair-4/blue.png",
							"brown": "assets/back/male/hair/hair-4/brown.png",
							"cyan": "assets/back/male/hair/hair-4/cyan.png",
							"ginger": "assets/back/male/hair/hair-4/ginger.png",
							"green": "assets/back/male/hair/hair-4/green.png",
							"pink": "assets/back/male/hair/hair-4/pink.png",
							"purple": "assets/back/male/hair/hair-4/purple.png",
							"red": "assets/back/male/hair/hair-4/red.png",
							"white": "assets/back/male/hair/hair-4/white.png"
						}
					},
					"hat": {
						"base": {
							"beret": "assets/back/male/hat/base/beret.png",
							"bonnet": "assets/back/male/hat/base/bonnet.png",
							"cat-ears": "assets/back/male/hat/base/cat-ears.png",
							"devil": "assets/back/male/hat/base/devil.png",
							"feather-hat": "assets/back/male/hat/base/feather-hat.png",
							"fedora": "assets/back/male/hat/base/fedora.png",
							"hairband": "assets/back/male/hat/base/hairband.png",
							"headband": "assets/back/male/hat/base/headband.png",
							"mining": "assets/back/male/hat/base/mining.png",
							"poop": "assets/back/male/hat/base/poop.png",
							"ribbon": "assets/back/male/hat/base/ribbon.png",
							"straw-hat": "assets/back/male/hat/base/straw-hat.png",
							"sun-hat": "assets/back/male/hat/base/sun-hat.png"
						},
						"beanie": {
							"black": "assets/back/male/hat/beanie/black.png",
							"purple": "assets/back/male/hat/beanie/purple.png"
						},
						"crown": {
							"gold": "assets/back/male/hat/crown/gold.png",
							"silver": "assets/back/male/hat/crown/silver.png"
						},
						"flower": {
							"blue": "assets/back/male/hat/flower/blue.png",
							"red": "assets/back/male/hat/flower/red.png"
						},
						"glasses": {
							"blue": "assets/back/male/hat/glasses/blue.png",
							"red": "assets/back/male/hat/glasses/red.png"
						},
						"youngster-hat": {
							"blue": "assets/back/male/hat/youngster-hat/blue.png",
							"copy": "assets/back/male/hat/youngster-hat/copy.png"
						}
					}
				}
			},
			"walk": {
				"female": {
					"body": { "base": {
						"dark": "assets/walk/female/body/base/dark.png",
						"light": "assets/walk/female/body/base/light.png",
						"medium": "assets/walk/female/body/base/medium.png",
						"pale": "assets/walk/female/body/base/pale.png"
					} },
					"bottom": {
						"beach-bottom": {
							"black": "assets/walk/female/bottom/beach-bottom/black.png",
							"blue": "assets/walk/female/bottom/beach-bottom/blue.png",
							"green": "assets/walk/female/bottom/beach-bottom/green.png",
							"pink": "assets/walk/female/bottom/beach-bottom/pink.png",
							"red": "assets/walk/female/bottom/beach-bottom/red.png",
							"black-2": "assets/walk/female/bottom/beach-bottom/black-2.png",
							"blue-2": "assets/walk/female/bottom/beach-bottom/blue-2.png",
							"green-2": "assets/walk/female/bottom/beach-bottom/green-2.png",
							"pink-2": "assets/walk/female/bottom/beach-bottom/pink-2.png",
							"red-2": "assets/walk/female/bottom/beach-bottom/red-2.png"
						},
						"capris": {
							"aqua": "assets/walk/female/bottom/capris/aqua.png",
							"beige": "assets/walk/female/bottom/capris/beige.png",
							"black": "assets/walk/female/bottom/capris/black.png",
							"green": "assets/walk/female/bottom/capris/green.png",
							"navy": "assets/walk/female/bottom/capris/navy.png"
						},
						"classy-bottom": {
							"beige": "assets/walk/female/bottom/classy-bottom/beige.png",
							"black": "assets/walk/female/bottom/classy-bottom/black.png",
							"grey": "assets/walk/female/bottom/classy-bottom/grey.png",
							"navy": "assets/walk/female/bottom/classy-bottom/navy.png",
							"wine": "assets/walk/female/bottom/classy-bottom/wine.png",
							"beige-2": "assets/walk/female/bottom/classy-bottom/beige-2.png",
							"black-2": "assets/walk/female/bottom/classy-bottom/black-2.png",
							"grey-2": "assets/walk/female/bottom/classy-bottom/grey-2.png",
							"navy-2": "assets/walk/female/bottom/classy-bottom/navy-2.png",
							"wine-2": "assets/walk/female/bottom/classy-bottom/wine-2.png"
						},
						"formal-bottoms": {
							"black": "assets/walk/female/bottom/formal-bottoms/black.png",
							"blue": "assets/walk/female/bottom/formal-bottoms/blue.png",
							"brown": "assets/walk/female/bottom/formal-bottoms/brown.png",
							"grey": "assets/walk/female/bottom/formal-bottoms/grey.png",
							"red": "assets/walk/female/bottom/formal-bottoms/red.png",
							"black-2": "assets/walk/female/bottom/formal-bottoms/black-2.png",
							"blue-2": "assets/walk/female/bottom/formal-bottoms/blue-2.png",
							"brown-2": "assets/walk/female/bottom/formal-bottoms/brown-2.png",
							"grey-2": "assets/walk/female/bottom/formal-bottoms/grey-2.png",
							"pink": "assets/walk/female/bottom/formal-bottoms/pink.png"
						},
						"jeans": {
							"aqua": "assets/walk/female/bottom/jeans/aqua.png",
							"black": "assets/walk/female/bottom/jeans/black.png",
							"grey": "assets/walk/female/bottom/jeans/grey.png",
							"light-blue": "assets/walk/female/bottom/jeans/light-blue.png",
							"navy": "assets/walk/female/bottom/jeans/navy.png"
						},
						"jumpsuit-pants": {
							"black": "assets/walk/female/bottom/jumpsuit-pants/black.png",
							"blue": "assets/walk/female/bottom/jumpsuit-pants/blue.png",
							"green": "assets/walk/female/bottom/jumpsuit-pants/green.png",
							"red": "assets/walk/female/bottom/jumpsuit-pants/red.png",
							"yellow": "assets/walk/female/bottom/jumpsuit-pants/yellow.png"
						},
						"jumpsuit-pants-alt": {
							"black": "assets/walk/female/bottom/jumpsuit-pants-alt/black.png",
							"blue": "assets/walk/female/bottom/jumpsuit-pants-alt/blue.png",
							"green": "assets/walk/female/bottom/jumpsuit-pants-alt/green.png",
							"red": "assets/walk/female/bottom/jumpsuit-pants-alt/red.png",
							"yellow": "assets/walk/female/bottom/jumpsuit-pants-alt/yellow.png"
						},
						"long-skirt": {
							"black": "assets/walk/female/bottom/long-skirt/black.png",
							"blue": "assets/walk/female/bottom/long-skirt/blue.png",
							"green": "assets/walk/female/bottom/long-skirt/green.png",
							"pink": "assets/walk/female/bottom/long-skirt/pink.png",
							"purple": "assets/walk/female/bottom/long-skirt/purple.png"
						},
						"pants-and-boots": {
							"beige": "assets/walk/female/bottom/pants-and-boots/beige.png",
							"black": "assets/walk/female/bottom/pants-and-boots/black.png",
							"grey": "assets/walk/female/bottom/pants-and-boots/grey.png",
							"light-blue": "assets/walk/female/bottom/pants-and-boots/light-blue.png",
							"navy": "assets/walk/female/bottom/pants-and-boots/navy.png"
						},
						"pencil-skirt": {
							"black": "assets/walk/female/bottom/pencil-skirt/black.png",
							"green": "assets/walk/female/bottom/pencil-skirt/green.png",
							"grey": "assets/walk/female/bottom/pencil-skirt/grey.png",
							"navy": "assets/walk/female/bottom/pencil-skirt/navy.png",
							"wine": "assets/walk/female/bottom/pencil-skirt/wine.png"
						},
						"ribbon-skirt": {
							"blue": "assets/walk/female/bottom/ribbon-skirt/blue.png",
							"green": "assets/walk/female/bottom/ribbon-skirt/green.png",
							"pink": "assets/walk/female/bottom/ribbon-skirt/pink.png",
							"red": "assets/walk/female/bottom/ribbon-skirt/red.png",
							"wine": "assets/walk/female/bottom/ribbon-skirt/wine.png"
						},
						"school-uniform-bottom": {
							"dark": "assets/walk/female/bottom/school-uniform-bottom/dark.png",
							"light": "assets/walk/female/bottom/school-uniform-bottom/light.png",
							"dark-2": "assets/walk/female/bottom/school-uniform-bottom/dark-2.png",
							"light-2": "assets/walk/female/bottom/school-uniform-bottom/light-2.png"
						},
						"shorts": {
							"black": "assets/walk/female/bottom/shorts/black.png",
							"blue": "assets/walk/female/bottom/shorts/blue.png",
							"green": "assets/walk/female/bottom/shorts/green.png",
							"red": "assets/walk/female/bottom/shorts/red.png",
							"white": "assets/walk/female/bottom/shorts/white.png"
						},
						"lord-suit-pants": { "default": "assets/walk/female/bottom/lord-suit-pants/default.png" }
					},
					"top": {
						"beach-top-f": {
							"black": "assets/walk/female/top/beach-top-f/black.png",
							"blue": "assets/walk/female/top/beach-top-f/blue.png",
							"green": "assets/walk/female/top/beach-top-f/green.png",
							"pink": "assets/walk/female/top/beach-top-f/pink.png",
							"red": "assets/walk/female/top/beach-top-f/red.png"
						},
						"beach-top-m": {
							"black": "assets/walk/female/top/beach-top-m/black.png",
							"blue": "assets/walk/female/top/beach-top-m/blue.png",
							"pink": "assets/walk/female/top/beach-top-m/pink.png",
							"red": "assets/walk/female/top/beach-top-m/red.png",
							"green": "assets/walk/female/top/beach-top-m/green.png"
						},
						"classy-top-f": {
							"beige": "assets/walk/female/top/classy-top-f/beige.png",
							"black": "assets/walk/female/top/classy-top-f/black.png",
							"grey": "assets/walk/female/top/classy-top-f/grey.png",
							"navy": "assets/walk/female/top/classy-top-f/navy.png",
							"wine": "assets/walk/female/top/classy-top-f/wine.png"
						},
						"classy-top-m": {
							"beige": "assets/walk/female/top/classy-top-m/beige.png",
							"black": "assets/walk/female/top/classy-top-m/black.png",
							"grey": "assets/walk/female/top/classy-top-m/grey.png",
							"navy": "assets/walk/female/top/classy-top-m/navy.png",
							"wine": "assets/walk/female/top/classy-top-m/wine.png"
						},
						"collared-shirt": {
							"black": "assets/walk/female/top/collared-shirt/black.png",
							"light-blue": "assets/walk/female/top/collared-shirt/light-blue.png",
							"navy": "assets/walk/female/top/collared-shirt/navy.png",
							"white": "assets/walk/female/top/collared-shirt/white.png",
							"wine": "assets/walk/female/top/collared-shirt/wine.png"
						},
						"formal": {
							"black": "assets/walk/female/top/formal/black.png",
							"beige": "assets/walk/female/top/formal/beige.png",
							"blue": "assets/walk/female/top/formal/blue.png",
							"pink": "assets/walk/female/top/formal/pink.png",
							"red": "assets/walk/female/top/formal/red.png"
						},
						"hoodie": {
							"black": "assets/walk/female/top/hoodie/black.png",
							"blue": "assets/walk/female/top/hoodie/blue.png",
							"green": "assets/walk/female/top/hoodie/green.png",
							"purple": "assets/walk/female/top/hoodie/purple.png",
							"red": "assets/walk/female/top/hoodie/red.png"
						},
						"jumpsuit-alt": {
							"blue": "assets/walk/female/top/jumpsuit-alt/blue.png",
							"green": "assets/walk/female/top/jumpsuit-alt/green.png",
							"red": "assets/walk/female/top/jumpsuit-alt/red.png",
							"black": "assets/walk/female/top/jumpsuit-alt/black.png",
							"yellow": "assets/walk/female/top/jumpsuit-alt/yellow.png"
						},
						"jumpsuit": {
							"black": "assets/walk/female/top/jumpsuit/black.png",
							"blue": "assets/walk/female/top/jumpsuit/blue.png",
							"green": "assets/walk/female/top/jumpsuit/green.png",
							"red": "assets/walk/female/top/jumpsuit/red.png",
							"yellow": "assets/walk/female/top/jumpsuit/yellow.png"
						},
						"lord-suit-top": {
							"purple": "assets/walk/female/top/lord-suit-top/purple.png",
							"red": "assets/walk/female/top/lord-suit-top/red.png"
						},
						"open-jacket": {
							"blue": "assets/walk/female/top/open-jacket/blue.png",
							"green": "assets/walk/female/top/open-jacket/green.png",
							"orange": "assets/walk/female/top/open-jacket/orange.png",
							"pink": "assets/walk/female/top/open-jacket/pink.png",
							"red": "assets/walk/female/top/open-jacket/red.png"
						},
						"scarf-shirt": {
							"black": "assets/walk/female/top/scarf-shirt/black.png",
							"blue": "assets/walk/female/top/scarf-shirt/blue.png",
							"brown": "assets/walk/female/top/scarf-shirt/brown.png",
							"red": "assets/walk/female/top/scarf-shirt/red.png",
							"yellow": "assets/walk/female/top/scarf-shirt/yellow.png"
						},
						"school-uniform-fm": {
							"dark": "assets/walk/female/top/school-uniform-fm/dark.png",
							"light": "assets/walk/female/top/school-uniform-fm/light.png",
							"light-2": "assets/walk/female/top/school-uniform-fm/light-2.png",
							"dark-2": "assets/walk/female/top/school-uniform-fm/dark-2.png"
						},
						"shirt-combo": {
							"black": "assets/walk/female/top/shirt-combo/black.png",
							"blue": "assets/walk/female/top/shirt-combo/blue.png",
							"red": "assets/walk/female/top/shirt-combo/red.png",
							"white": "assets/walk/female/top/shirt-combo/white.png",
							"wine": "assets/walk/female/top/shirt-combo/wine.png"
						},
						"t-shirt": {
							"black": "assets/walk/female/top/t-shirt/black.png",
							"blue": "assets/walk/female/top/t-shirt/blue.png",
							"green": "assets/walk/female/top/t-shirt/green.png",
							"red": "assets/walk/female/top/t-shirt/red.png",
							"white": "assets/walk/female/top/t-shirt/white.png"
						},
						"tank-top": {
							"black": "assets/walk/female/top/tank-top/black.png",
							"green": "assets/walk/female/top/tank-top/green.png",
							"navy": "assets/walk/female/top/tank-top/navy.png",
							"pink": "assets/walk/female/top/tank-top/pink.png",
							"red": "assets/walk/female/top/tank-top/red.png"
						},
						"trench-coat": {
							"beige": "assets/walk/female/top/trench-coat/beige.png",
							"black": "assets/walk/female/top/trench-coat/black.png",
							"navy": "assets/walk/female/top/trench-coat/navy.png",
							"purple": "assets/walk/female/top/trench-coat/purple.png",
							"red": "assets/walk/female/top/trench-coat/red.png"
						},
						"turtleneck-f": {
							"beige": "assets/walk/female/top/turtleneck-f/beige.png",
							"black": "assets/walk/female/top/turtleneck-f/black.png",
							"green": "assets/walk/female/top/turtleneck-f/green.png",
							"white": "assets/walk/female/top/turtleneck-f/white.png",
							"wine": "assets/walk/female/top/turtleneck-f/wine.png"
						},
						"turtleneck-m": {
							"beige": "assets/walk/female/top/turtleneck-m/beige.png",
							"wine": "assets/walk/female/top/turtleneck-m/wine.png",
							"black": "assets/walk/female/top/turtleneck-m/black.png",
							"green": "assets/walk/female/top/turtleneck-m/green.png",
							"white": "assets/walk/female/top/turtleneck-m/white.png"
						},
						"v-neck": {
							"black": "assets/walk/female/top/v-neck/black.png",
							"green": "assets/walk/female/top/v-neck/green.png",
							"orange": "assets/walk/female/top/v-neck/orange.png",
							"purple": "assets/walk/female/top/v-neck/purple.png",
							"yellow": "assets/walk/female/top/v-neck/yellow.png"
						},
						"vest": {
							"black": "assets/walk/female/top/vest/black.png",
							"blue": "assets/walk/female/top/vest/blue.png",
							"brown": "assets/walk/female/top/vest/brown.png",
							"grey": "assets/walk/female/top/vest/grey.png",
							"wine": "assets/walk/female/top/vest/wine.png"
						}
					},
					"hat": {
						"beanie": {
							"black": "assets/walk/female/hat/beanie/black.png",
							"purple": "assets/walk/female/hat/beanie/purple.png"
						},
						"crown": {
							"gold": "assets/walk/female/hat/crown/gold.png",
							"silver": "assets/walk/female/hat/crown/silver.png"
						},
						"flower": {
							"blue": "assets/walk/female/hat/flower/blue.png",
							"red": "assets/walk/female/hat/flower/red.png"
						},
						"glasses": {
							"blue": "assets/walk/female/hat/glasses/blue.png",
							"red": "assets/walk/female/hat/glasses/red.png"
						},
						"youngster-hat": {
							"blue": "assets/walk/female/hat/youngster-hat/blue.png",
							"yellow": "assets/walk/female/hat/youngster-hat/yellow.png"
						},
						"beret": { "default": "assets/walk/female/hat/beret/default.png" },
						"bonnet": { "default": "assets/walk/female/hat/bonnet/default.png" },
						"cat": { "default": "assets/walk/female/hat/cat/default.png" },
						"devil": { "default": "assets/walk/female/hat/devil/default.png" },
						"feather-hat": { "default": "assets/walk/female/hat/feather-hat/default.png" },
						"fedora": { "default": "assets/walk/female/hat/fedora/default.png" },
						"hair-band": { "default": "assets/walk/female/hat/hair-band/default.png" },
						"headband": { "default": "assets/walk/female/hat/headband/default.png" },
						"miner": { "default": "assets/walk/female/hat/miner/default.png" },
						"poop": { "default": "assets/walk/female/hat/poop/default.png" },
						"ribbon": { "default": "assets/walk/female/hat/ribbon/default.png" },
						"straw-hat": { "default": "assets/walk/female/hat/straw-hat/default.png" },
						"sun-hat": { "default": "assets/walk/female/hat/sun-hat/default.png" }
					},
					"carry": {
						"bag": {
							"black": "assets/walk/female/carry/bag/black.png",
							"blue": "assets/walk/female/carry/bag/blue.png",
							"green": "assets/walk/female/carry/bag/green.png",
							"magenta": "assets/walk/female/carry/bag/magenta.png",
							"orange": "assets/walk/female/carry/bag/orange.png",
							"purple": "assets/walk/female/carry/bag/purple.png",
							"red": "assets/walk/female/carry/bag/red.png",
							"white": "assets/walk/female/carry/bag/white.png",
							"yellow": "assets/walk/female/carry/bag/yellow.png"
						},
						"rucksack": {
							"red": "assets/walk/female/carry/rucksack/red.png",
							"black": "assets/walk/female/carry/rucksack/black.png",
							"blue": "assets/walk/female/carry/rucksack/blue.png",
							"green": "assets/walk/female/carry/rucksack/green.png",
							"magenta": "assets/walk/female/carry/rucksack/magenta.png",
							"orange": "assets/walk/female/carry/rucksack/orange.png",
							"purple": "assets/walk/female/carry/rucksack/purple.png",
							"white": "assets/walk/female/carry/rucksack/white.png",
							"yellow": "assets/walk/female/carry/rucksack/yellow.png"
						},
						"sporty-backpack": {
							"black": "assets/walk/female/carry/sporty-backpack/black.png",
							"blue": "assets/walk/female/carry/sporty-backpack/blue.png",
							"green": "assets/walk/female/carry/sporty-backpack/green.png",
							"magenta": "assets/walk/female/carry/sporty-backpack/magenta.png",
							"orange": "assets/walk/female/carry/sporty-backpack/orange.png",
							"purple": "assets/walk/female/carry/sporty-backpack/purple.png",
							"red": "assets/walk/female/carry/sporty-backpack/red.png",
							"white": "assets/walk/female/carry/sporty-backpack/white.png",
							"yellow": "assets/walk/female/carry/sporty-backpack/yellow.png"
						}
					},
					"hair": {
						"hair-3": {
							"black": "assets/walk/female/hair/hair-3/black.png",
							"blonde": "assets/walk/female/hair/hair-3/blonde.png",
							"blue": "assets/walk/female/hair/hair-3/blue.png",
							"brown": "assets/walk/female/hair/hair-3/brown.png",
							"cyan": "assets/walk/female/hair/hair-3/cyan.png",
							"ginger": "assets/walk/female/hair/hair-3/ginger.png",
							"green": "assets/walk/female/hair/hair-3/green.png",
							"pink": "assets/walk/female/hair/hair-3/pink.png",
							"purple": "assets/walk/female/hair/hair-3/purple.png",
							"red": "assets/walk/female/hair/hair-3/red.png",
							"white": "assets/walk/female/hair/hair-3/white.png"
						},
						"hair-1": {
							"black": "assets/walk/female/hair/hair-1/black.png",
							"cyan": "assets/walk/female/hair/hair-1/cyan.png",
							"blonde": "assets/walk/female/hair/hair-1/blonde.png",
							"blue": "assets/walk/female/hair/hair-1/blue.png",
							"brown": "assets/walk/female/hair/hair-1/brown.png",
							"ginger": "assets/walk/female/hair/hair-1/ginger.png",
							"green": "assets/walk/female/hair/hair-1/green.png",
							"pink": "assets/walk/female/hair/hair-1/pink.png",
							"purple": "assets/walk/female/hair/hair-1/purple.png",
							"red": "assets/walk/female/hair/hair-1/red.png",
							"white": "assets/walk/female/hair/hair-1/white.png"
						},
						"hair-2": {
							"black": "assets/walk/female/hair/hair-2/black.png",
							"blonde": "assets/walk/female/hair/hair-2/blonde.png",
							"blue": "assets/walk/female/hair/hair-2/blue.png",
							"brown": "assets/walk/female/hair/hair-2/brown.png",
							"cyan": "assets/walk/female/hair/hair-2/cyan.png",
							"green": "assets/walk/female/hair/hair-2/green.png",
							"pink": "assets/walk/female/hair/hair-2/pink.png",
							"red": "assets/walk/female/hair/hair-2/red.png",
							"violet": "assets/walk/female/hair/hair-2/violet.png",
							"white": "assets/walk/female/hair/hair-2/white.png",
							"ginger": "assets/walk/female/hair/hair-2/ginger.png"
						},
						"hair-4": {
							"black": "assets/walk/female/hair/hair-4/black.png",
							"blonde": "assets/walk/female/hair/hair-4/blonde.png",
							"blue": "assets/walk/female/hair/hair-4/blue.png",
							"brown": "assets/walk/female/hair/hair-4/brown.png",
							"cyan": "assets/walk/female/hair/hair-4/cyan.png",
							"ginger": "assets/walk/female/hair/hair-4/ginger.png",
							"green": "assets/walk/female/hair/hair-4/green.png",
							"pink": "assets/walk/female/hair/hair-4/pink.png",
							"purple": "assets/walk/female/hair/hair-4/purple.png",
							"red": "assets/walk/female/hair/hair-4/red.png",
							"white": "assets/walk/female/hair/hair-4/white.png"
						}
					}
				},
				"male": {
					"body": { "base": {
						"dark": "assets/walk/male/body/base/dark.png",
						"light": "assets/walk/male/body/base/light.png",
						"medium": "assets/walk/male/body/base/medium.png",
						"pale": "assets/walk/male/body/base/pale.png"
					} },
					"bottom": {
						"beach-bottom": {
							"black": "assets/walk/male/bottom/beach-bottom/black.png",
							"blue": "assets/walk/male/bottom/beach-bottom/blue.png",
							"green": "assets/walk/male/bottom/beach-bottom/green.png",
							"pink": "assets/walk/male/bottom/beach-bottom/pink.png",
							"red": "assets/walk/male/bottom/beach-bottom/red.png",
							"black-2": "assets/walk/male/bottom/beach-bottom/black-2.png",
							"blue-2": "assets/walk/male/bottom/beach-bottom/blue-2.png",
							"green-2": "assets/walk/male/bottom/beach-bottom/green-2.png",
							"pink-2": "assets/walk/male/bottom/beach-bottom/pink-2.png",
							"red-2": "assets/walk/male/bottom/beach-bottom/red-2.png"
						},
						"capris": {
							"aqua": "assets/walk/male/bottom/capris/aqua.png",
							"beige": "assets/walk/male/bottom/capris/beige.png",
							"black": "assets/walk/male/bottom/capris/black.png",
							"green": "assets/walk/male/bottom/capris/green.png",
							"navy": "assets/walk/male/bottom/capris/navy.png"
						},
						"classy-bottom": {
							"beige": "assets/walk/male/bottom/classy-bottom/beige.png",
							"black": "assets/walk/male/bottom/classy-bottom/black.png",
							"grey": "assets/walk/male/bottom/classy-bottom/grey.png",
							"navy": "assets/walk/male/bottom/classy-bottom/navy.png",
							"wine": "assets/walk/male/bottom/classy-bottom/wine.png",
							"beige-2": "assets/walk/male/bottom/classy-bottom/beige-2.png",
							"black-2": "assets/walk/male/bottom/classy-bottom/black-2.png",
							"grey-2": "assets/walk/male/bottom/classy-bottom/grey-2.png",
							"navy-2": "assets/walk/male/bottom/classy-bottom/navy-2.png",
							"wine-2": "assets/walk/male/bottom/classy-bottom/wine-2.png"
						},
						"formal-bottoms": {
							"black": "assets/walk/male/bottom/formal-bottoms/black.png",
							"blue": "assets/walk/male/bottom/formal-bottoms/blue.png",
							"brown": "assets/walk/male/bottom/formal-bottoms/brown.png",
							"grey": "assets/walk/male/bottom/formal-bottoms/grey.png",
							"red": "assets/walk/male/bottom/formal-bottoms/red.png",
							"black-2": "assets/walk/male/bottom/formal-bottoms/black-2.png",
							"blue-2": "assets/walk/male/bottom/formal-bottoms/blue-2.png",
							"brown-2": "assets/walk/male/bottom/formal-bottoms/brown-2.png",
							"grey-2": "assets/walk/male/bottom/formal-bottoms/grey-2.png",
							"pink": "assets/walk/male/bottom/formal-bottoms/pink.png"
						},
						"jeans": {
							"aqua": "assets/walk/male/bottom/jeans/aqua.png",
							"black": "assets/walk/male/bottom/jeans/black.png",
							"grey": "assets/walk/male/bottom/jeans/grey.png",
							"light-blue": "assets/walk/male/bottom/jeans/light-blue.png",
							"navy": "assets/walk/male/bottom/jeans/navy.png"
						},
						"jumpsuit-pants": {
							"black": "assets/walk/male/bottom/jumpsuit-pants/black.png",
							"blue": "assets/walk/male/bottom/jumpsuit-pants/blue.png",
							"green": "assets/walk/male/bottom/jumpsuit-pants/green.png",
							"red": "assets/walk/male/bottom/jumpsuit-pants/red.png",
							"yellow": "assets/walk/male/bottom/jumpsuit-pants/yellow.png"
						},
						"jumpsuit-pants-alt": {
							"black": "assets/walk/male/bottom/jumpsuit-pants-alt/black.png",
							"blue": "assets/walk/male/bottom/jumpsuit-pants-alt/blue.png",
							"green": "assets/walk/male/bottom/jumpsuit-pants-alt/green.png",
							"red": "assets/walk/male/bottom/jumpsuit-pants-alt/red.png",
							"yellow": "assets/walk/male/bottom/jumpsuit-pants-alt/yellow.png"
						},
						"long-skirt": {
							"black": "assets/walk/male/bottom/long-skirt/black.png",
							"blue": "assets/walk/male/bottom/long-skirt/blue.png",
							"green": "assets/walk/male/bottom/long-skirt/green.png",
							"pink": "assets/walk/male/bottom/long-skirt/pink.png",
							"purple": "assets/walk/male/bottom/long-skirt/purple.png"
						},
						"pants-and-boots": {
							"beige": "assets/walk/male/bottom/pants-and-boots/beige.png",
							"black": "assets/walk/male/bottom/pants-and-boots/black.png",
							"grey": "assets/walk/male/bottom/pants-and-boots/grey.png",
							"light-blue": "assets/walk/male/bottom/pants-and-boots/light-blue.png",
							"navy": "assets/walk/male/bottom/pants-and-boots/navy.png"
						},
						"pencil-skirt": {
							"black": "assets/walk/male/bottom/pencil-skirt/black.png",
							"green": "assets/walk/male/bottom/pencil-skirt/green.png",
							"grey": "assets/walk/male/bottom/pencil-skirt/grey.png",
							"navy": "assets/walk/male/bottom/pencil-skirt/navy.png",
							"wine": "assets/walk/male/bottom/pencil-skirt/wine.png"
						},
						"ribbon-skirt": {
							"blue": "assets/walk/male/bottom/ribbon-skirt/blue.png",
							"green": "assets/walk/male/bottom/ribbon-skirt/green.png",
							"pink": "assets/walk/male/bottom/ribbon-skirt/pink.png",
							"red": "assets/walk/male/bottom/ribbon-skirt/red.png",
							"wine": "assets/walk/male/bottom/ribbon-skirt/wine.png"
						},
						"school-uniform-bottom": {
							"dark": "assets/walk/male/bottom/school-uniform-bottom/dark.png",
							"light": "assets/walk/male/bottom/school-uniform-bottom/light.png",
							"dark-2": "assets/walk/male/bottom/school-uniform-bottom/dark-2.png",
							"light-2": "assets/walk/male/bottom/school-uniform-bottom/light-2.png"
						},
						"shorts": {
							"black": "assets/walk/male/bottom/shorts/black.png",
							"blue": "assets/walk/male/bottom/shorts/blue.png",
							"green": "assets/walk/male/bottom/shorts/green.png",
							"red": "assets/walk/male/bottom/shorts/red.png",
							"white": "assets/walk/male/bottom/shorts/white.png"
						},
						"lord-suit-pants": { "default": "assets/walk/male/bottom/lord-suit-pants/default.png" }
					},
					"top": {
						"beach-top-f": {
							"black": "assets/walk/male/top/beach-top-f/black.png",
							"blue": "assets/walk/male/top/beach-top-f/blue.png",
							"green": "assets/walk/male/top/beach-top-f/green.png",
							"pink": "assets/walk/male/top/beach-top-f/pink.png",
							"red": "assets/walk/male/top/beach-top-f/red.png"
						},
						"beach-top-m": {
							"black": "assets/walk/male/top/beach-top-m/black.png",
							"blue": "assets/walk/male/top/beach-top-m/blue.png",
							"pink": "assets/walk/male/top/beach-top-m/pink.png",
							"red": "assets/walk/male/top/beach-top-m/red.png",
							"green": "assets/walk/male/top/beach-top-m/green.png"
						},
						"classy-top-f": {
							"beige": "assets/walk/male/top/classy-top-f/beige.png",
							"black": "assets/walk/male/top/classy-top-f/black.png",
							"grey": "assets/walk/male/top/classy-top-f/grey.png",
							"navy": "assets/walk/male/top/classy-top-f/navy.png",
							"wine": "assets/walk/male/top/classy-top-f/wine.png"
						},
						"classy-top-m": {
							"beige": "assets/walk/male/top/classy-top-m/beige.png",
							"black": "assets/walk/male/top/classy-top-m/black.png",
							"grey": "assets/walk/male/top/classy-top-m/grey.png",
							"navy": "assets/walk/male/top/classy-top-m/navy.png",
							"wine": "assets/walk/male/top/classy-top-m/wine.png"
						},
						"collared-shirt": {
							"black": "assets/walk/male/top/collared-shirt/black.png",
							"light-blue": "assets/walk/male/top/collared-shirt/light-blue.png",
							"navy": "assets/walk/male/top/collared-shirt/navy.png",
							"white": "assets/walk/male/top/collared-shirt/white.png",
							"wine": "assets/walk/male/top/collared-shirt/wine.png"
						},
						"formal": {
							"black": "assets/walk/male/top/formal/black.png",
							"beige": "assets/walk/male/top/formal/beige.png",
							"blue": "assets/walk/male/top/formal/blue.png",
							"pink": "assets/walk/male/top/formal/pink.png",
							"red": "assets/walk/male/top/formal/red.png"
						},
						"hoodie": {
							"black": "assets/walk/male/top/hoodie/black.png",
							"blue": "assets/walk/male/top/hoodie/blue.png",
							"green": "assets/walk/male/top/hoodie/green.png",
							"purple": "assets/walk/male/top/hoodie/purple.png",
							"red": "assets/walk/male/top/hoodie/red.png"
						},
						"jumpsuit-alt": {
							"blue": "assets/walk/male/top/jumpsuit-alt/blue.png",
							"green": "assets/walk/male/top/jumpsuit-alt/green.png",
							"red": "assets/walk/male/top/jumpsuit-alt/red.png",
							"black": "assets/walk/male/top/jumpsuit-alt/black.png",
							"yellow": "assets/walk/male/top/jumpsuit-alt/yellow.png"
						},
						"jumpsuit": {
							"black": "assets/walk/male/top/jumpsuit/black.png",
							"blue": "assets/walk/male/top/jumpsuit/blue.png",
							"green": "assets/walk/male/top/jumpsuit/green.png",
							"red": "assets/walk/male/top/jumpsuit/red.png",
							"yellow": "assets/walk/male/top/jumpsuit/yellow.png"
						},
						"lord-suit-top": {
							"purple": "assets/walk/male/top/lord-suit-top/purple.png",
							"red": "assets/walk/male/top/lord-suit-top/red.png"
						},
						"open-jacket": {
							"blue": "assets/walk/male/top/open-jacket/blue.png",
							"green": "assets/walk/male/top/open-jacket/green.png",
							"orange": "assets/walk/male/top/open-jacket/orange.png",
							"pink": "assets/walk/male/top/open-jacket/pink.png",
							"red": "assets/walk/male/top/open-jacket/red.png"
						},
						"scarf-shirt": {
							"black": "assets/walk/male/top/scarf-shirt/black.png",
							"blue": "assets/walk/male/top/scarf-shirt/blue.png",
							"brown": "assets/walk/male/top/scarf-shirt/brown.png",
							"red": "assets/walk/male/top/scarf-shirt/red.png",
							"yellow": "assets/walk/male/top/scarf-shirt/yellow.png"
						},
						"school-uniform-fm": {
							"dark": "assets/walk/male/top/school-uniform-fm/dark.png",
							"light": "assets/walk/male/top/school-uniform-fm/light.png",
							"light-2": "assets/walk/male/top/school-uniform-fm/light-2.png",
							"dark-2": "assets/walk/male/top/school-uniform-fm/dark-2.png"
						},
						"shirt-combo": {
							"black": "assets/walk/male/top/shirt-combo/black.png",
							"blue": "assets/walk/male/top/shirt-combo/blue.png",
							"red": "assets/walk/male/top/shirt-combo/red.png",
							"white": "assets/walk/male/top/shirt-combo/white.png",
							"wine": "assets/walk/male/top/shirt-combo/wine.png"
						},
						"t-shirt": {
							"black": "assets/walk/male/top/t-shirt/black.png",
							"blue": "assets/walk/male/top/t-shirt/blue.png",
							"green": "assets/walk/male/top/t-shirt/green.png",
							"red": "assets/walk/male/top/t-shirt/red.png",
							"white": "assets/walk/male/top/t-shirt/white.png"
						},
						"tank-top": {
							"black": "assets/walk/male/top/tank-top/black.png",
							"green": "assets/walk/male/top/tank-top/green.png",
							"navy": "assets/walk/male/top/tank-top/navy.png",
							"pink": "assets/walk/male/top/tank-top/pink.png",
							"red": "assets/walk/male/top/tank-top/red.png"
						},
						"trench-coat": {
							"beige": "assets/walk/male/top/trench-coat/beige.png",
							"black": "assets/walk/male/top/trench-coat/black.png",
							"navy": "assets/walk/male/top/trench-coat/navy.png",
							"purple": "assets/walk/male/top/trench-coat/purple.png",
							"red": "assets/walk/male/top/trench-coat/red.png"
						},
						"turtleneck-f": {
							"beige": "assets/walk/male/top/turtleneck-f/beige.png",
							"black": "assets/walk/male/top/turtleneck-f/black.png",
							"green": "assets/walk/male/top/turtleneck-f/green.png",
							"white": "assets/walk/male/top/turtleneck-f/white.png",
							"wine": "assets/walk/male/top/turtleneck-f/wine.png"
						},
						"turtleneck-m": {
							"beige": "assets/walk/male/top/turtleneck-m/beige.png",
							"wine": "assets/walk/male/top/turtleneck-m/wine.png",
							"black": "assets/walk/male/top/turtleneck-m/black.png",
							"green": "assets/walk/male/top/turtleneck-m/green.png",
							"white": "assets/walk/male/top/turtleneck-m/white.png"
						},
						"v-neck": {
							"black": "assets/walk/male/top/v-neck/black.png",
							"green": "assets/walk/male/top/v-neck/green.png",
							"orange": "assets/walk/male/top/v-neck/orange.png",
							"purple": "assets/walk/male/top/v-neck/purple.png",
							"yellow": "assets/walk/male/top/v-neck/yellow.png"
						},
						"vest": {
							"black": "assets/walk/male/top/vest/black.png",
							"blue": "assets/walk/male/top/vest/blue.png",
							"brown": "assets/walk/male/top/vest/brown.png",
							"grey": "assets/walk/male/top/vest/grey.png",
							"wine": "assets/walk/male/top/vest/wine.png"
						}
					},
					"hat": {
						"beanie": {
							"black": "assets/walk/male/hat/beanie/black.png",
							"purple": "assets/walk/male/hat/beanie/purple.png"
						},
						"crown": {
							"gold": "assets/walk/male/hat/crown/gold.png",
							"silver": "assets/walk/male/hat/crown/silver.png"
						},
						"flower": {
							"blue": "assets/walk/male/hat/flower/blue.png",
							"red": "assets/walk/male/hat/flower/red.png"
						},
						"glasses": {
							"blue": "assets/walk/male/hat/glasses/blue.png",
							"red": "assets/walk/male/hat/glasses/red.png"
						},
						"youngster-hat": {
							"blue": "assets/walk/male/hat/youngster-hat/blue.png",
							"yellow": "assets/walk/male/hat/youngster-hat/yellow.png"
						},
						"beret": { "default": "assets/walk/male/hat/beret/default.png" },
						"bonnet": { "default": "assets/walk/male/hat/bonnet/default.png" },
						"cat": { "default": "assets/walk/male/hat/cat/default.png" },
						"devil": { "default": "assets/walk/male/hat/devil/default.png" },
						"feather-hat": { "default": "assets/walk/male/hat/feather-hat/default.png" },
						"fedora": { "default": "assets/walk/male/hat/fedora/default.png" },
						"hair-band": { "default": "assets/walk/male/hat/hair-band/default.png" },
						"headband": { "default": "assets/walk/male/hat/headband/default.png" },
						"miner": { "default": "assets/walk/male/hat/miner/default.png" },
						"poop": { "default": "assets/walk/male/hat/poop/default.png" },
						"ribbon": { "default": "assets/walk/male/hat/ribbon/default.png" },
						"straw-hat": { "default": "assets/walk/male/hat/straw-hat/default.png" },
						"sun-hat": { "default": "assets/walk/male/hat/sun-hat/default.png" }
					},
					"carry": {
						"bag": {
							"black": "assets/walk/male/carry/bag/black.png",
							"blue": "assets/walk/male/carry/bag/blue.png",
							"green": "assets/walk/male/carry/bag/green.png",
							"magenta": "assets/walk/male/carry/bag/magenta.png",
							"orange": "assets/walk/male/carry/bag/orange.png",
							"purple": "assets/walk/male/carry/bag/purple.png",
							"red": "assets/walk/male/carry/bag/red.png",
							"white": "assets/walk/male/carry/bag/white.png",
							"yellow": "assets/walk/male/carry/bag/yellow.png"
						},
						"rucksack": {
							"red": "assets/walk/male/carry/rucksack/red.png",
							"black": "assets/walk/male/carry/rucksack/black.png",
							"blue": "assets/walk/male/carry/rucksack/blue.png",
							"green": "assets/walk/male/carry/rucksack/green.png",
							"magenta": "assets/walk/male/carry/rucksack/magenta.png",
							"orange": "assets/walk/male/carry/rucksack/orange.png",
							"purple": "assets/walk/male/carry/rucksack/purple.png",
							"white": "assets/walk/male/carry/rucksack/white.png",
							"yellow": "assets/walk/male/carry/rucksack/yellow.png"
						},
						"sporty-backpack": {
							"black": "assets/walk/male/carry/sporty-backpack/black.png",
							"blue": "assets/walk/male/carry/sporty-backpack/blue.png",
							"green": "assets/walk/male/carry/sporty-backpack/green.png",
							"magenta": "assets/walk/male/carry/sporty-backpack/magenta.png",
							"orange": "assets/walk/male/carry/sporty-backpack/orange.png",
							"purple": "assets/walk/male/carry/sporty-backpack/purple.png",
							"red": "assets/walk/male/carry/sporty-backpack/red.png",
							"white": "assets/walk/male/carry/sporty-backpack/white.png",
							"yellow": "assets/walk/male/carry/sporty-backpack/yellow.png"
						}
					},
					"hair": {
						"hair-1": {
							"black": "assets/walk/male/hair/hair-1/black.png",
							"blonde": "assets/walk/male/hair/hair-1/blonde.png",
							"blue": "assets/walk/male/hair/hair-1/blue.png",
							"brown": "assets/walk/male/hair/hair-1/brown.png",
							"cyan": "assets/walk/male/hair/hair-1/cyan.png",
							"ginger": "assets/walk/male/hair/hair-1/ginger.png",
							"green": "assets/walk/male/hair/hair-1/green.png",
							"pink": "assets/walk/male/hair/hair-1/pink.png",
							"purple": "assets/walk/male/hair/hair-1/purple.png",
							"red": "assets/walk/male/hair/hair-1/red.png",
							"white": "assets/walk/male/hair/hair-1/white.png"
						},
						"hair-2": {
							"black": "assets/walk/male/hair/hair-2/black.png",
							"blonde": "assets/walk/male/hair/hair-2/blonde.png",
							"blue": "assets/walk/male/hair/hair-2/blue.png",
							"brown": "assets/walk/male/hair/hair-2/brown.png",
							"cyan": "assets/walk/male/hair/hair-2/cyan.png",
							"ginger": "assets/walk/male/hair/hair-2/ginger.png",
							"green": "assets/walk/male/hair/hair-2/green.png",
							"pink": "assets/walk/male/hair/hair-2/pink.png",
							"purple": "assets/walk/male/hair/hair-2/purple.png",
							"red": "assets/walk/male/hair/hair-2/red.png",
							"white": "assets/walk/male/hair/hair-2/white.png"
						},
						"hair-3": {
							"black": "assets/walk/male/hair/hair-3/black.png",
							"blonde": "assets/walk/male/hair/hair-3/blonde.png",
							"blue": "assets/walk/male/hair/hair-3/blue.png",
							"brown": "assets/walk/male/hair/hair-3/brown.png",
							"cyan": "assets/walk/male/hair/hair-3/cyan.png",
							"ginger": "assets/walk/male/hair/hair-3/ginger.png",
							"green": "assets/walk/male/hair/hair-3/green.png",
							"pink": "assets/walk/male/hair/hair-3/pink.png",
							"purple": "assets/walk/male/hair/hair-3/purple.png",
							"red": "assets/walk/male/hair/hair-3/red.png",
							"white": "assets/walk/male/hair/hair-3/white.png"
						},
						"hair-4": {
							"black": "assets/walk/male/hair/hair-4/black.png",
							"blonde": "assets/walk/male/hair/hair-4/blonde.png",
							"blue": "assets/walk/male/hair/hair-4/blue.png",
							"brown": "assets/walk/male/hair/hair-4/brown.png",
							"cyan": "assets/walk/male/hair/hair-4/cyan.png",
							"ginger": "assets/walk/male/hair/hair-4/ginger.png",
							"green": "assets/walk/male/hair/hair-4/green.png",
							"pink": "assets/walk/male/hair/hair-4/pink.png",
							"purple": "assets/walk/male/hair/hair-4/purple.png",
							"red": "assets/walk/male/hair/hair-4/red.png",
							"white": "assets/walk/male/hair/hair-4/white.png"
						}
					}
				}
			},
			"run": {
				"female": {
					"body": { "base": {
						"dark": "assets/run/female/body/base/dark.png",
						"light": "assets/run/female/body/base/light.png",
						"medium": "assets/run/female/body/base/medium.png",
						"pale": "assets/run/female/body/base/pale.png"
					} },
					"bottom": {
						"beach-bottom": {
							"black": "assets/run/female/bottom/beach-bottom/black.png",
							"blue": "assets/run/female/bottom/beach-bottom/blue.png",
							"green": "assets/run/female/bottom/beach-bottom/green.png",
							"pink": "assets/run/female/bottom/beach-bottom/pink.png",
							"red": "assets/run/female/bottom/beach-bottom/red.png",
							"black-2": "assets/run/female/bottom/beach-bottom/black-2.png",
							"blue-2": "assets/run/female/bottom/beach-bottom/blue-2.png",
							"green-2": "assets/run/female/bottom/beach-bottom/green-2.png",
							"pink-2": "assets/run/female/bottom/beach-bottom/pink-2.png",
							"red-2": "assets/run/female/bottom/beach-bottom/red-2.png"
						},
						"capris": {
							"aqua": "assets/run/female/bottom/capris/aqua.png",
							"beige": "assets/run/female/bottom/capris/beige.png",
							"black": "assets/run/female/bottom/capris/black.png",
							"green": "assets/run/female/bottom/capris/green.png",
							"navy": "assets/run/female/bottom/capris/navy.png"
						},
						"classy-bottom": {
							"beige": "assets/run/female/bottom/classy-bottom/beige.png",
							"black": "assets/run/female/bottom/classy-bottom/black.png",
							"grey": "assets/run/female/bottom/classy-bottom/grey.png",
							"navy": "assets/run/female/bottom/classy-bottom/navy.png",
							"wine": "assets/run/female/bottom/classy-bottom/wine.png",
							"beige-2": "assets/run/female/bottom/classy-bottom/beige-2.png",
							"black-2": "assets/run/female/bottom/classy-bottom/black-2.png",
							"grey-2": "assets/run/female/bottom/classy-bottom/grey-2.png",
							"navy-2": "assets/run/female/bottom/classy-bottom/navy-2.png",
							"wine-2": "assets/run/female/bottom/classy-bottom/wine-2.png"
						},
						"formal-bottoms": {
							"black": "assets/run/female/bottom/formal-bottoms/black.png",
							"blue": "assets/run/female/bottom/formal-bottoms/blue.png",
							"brown": "assets/run/female/bottom/formal-bottoms/brown.png",
							"grey": "assets/run/female/bottom/formal-bottoms/grey.png",
							"red": "assets/run/female/bottom/formal-bottoms/red.png",
							"black-2": "assets/run/female/bottom/formal-bottoms/black-2.png",
							"blue-2": "assets/run/female/bottom/formal-bottoms/blue-2.png",
							"brown-2": "assets/run/female/bottom/formal-bottoms/brown-2.png",
							"grey-2": "assets/run/female/bottom/formal-bottoms/grey-2.png",
							"pink": "assets/run/female/bottom/formal-bottoms/pink.png"
						},
						"jeans": {
							"aqua": "assets/run/female/bottom/jeans/aqua.png",
							"black": "assets/run/female/bottom/jeans/black.png",
							"grey": "assets/run/female/bottom/jeans/grey.png",
							"light-blue": "assets/run/female/bottom/jeans/light-blue.png",
							"navy": "assets/run/female/bottom/jeans/navy.png"
						},
						"jumpsuit-pants": {
							"black": "assets/run/female/bottom/jumpsuit-pants/black.png",
							"blue": "assets/run/female/bottom/jumpsuit-pants/blue.png",
							"green": "assets/run/female/bottom/jumpsuit-pants/green.png",
							"red": "assets/run/female/bottom/jumpsuit-pants/red.png",
							"yellow": "assets/run/female/bottom/jumpsuit-pants/yellow.png"
						},
						"jumpsuit-pants-alt": {
							"black": "assets/run/female/bottom/jumpsuit-pants-alt/black.png",
							"blue": "assets/run/female/bottom/jumpsuit-pants-alt/blue.png",
							"green": "assets/run/female/bottom/jumpsuit-pants-alt/green.png",
							"red": "assets/run/female/bottom/jumpsuit-pants-alt/red.png",
							"yellow": "assets/run/female/bottom/jumpsuit-pants-alt/yellow.png"
						},
						"long-skirt": {
							"black": "assets/run/female/bottom/long-skirt/black.png",
							"blue": "assets/run/female/bottom/long-skirt/blue.png",
							"green": "assets/run/female/bottom/long-skirt/green.png",
							"pink": "assets/run/female/bottom/long-skirt/pink.png",
							"purple": "assets/run/female/bottom/long-skirt/purple.png"
						},
						"pants-and-boots": {
							"beige": "assets/run/female/bottom/pants-and-boots/beige.png",
							"black": "assets/run/female/bottom/pants-and-boots/black.png",
							"grey": "assets/run/female/bottom/pants-and-boots/grey.png",
							"light-blue": "assets/run/female/bottom/pants-and-boots/light-blue.png",
							"navy": "assets/run/female/bottom/pants-and-boots/navy.png"
						},
						"pencil-skirt": {
							"black": "assets/run/female/bottom/pencil-skirt/black.png",
							"green": "assets/run/female/bottom/pencil-skirt/green.png",
							"grey": "assets/run/female/bottom/pencil-skirt/grey.png",
							"navy": "assets/run/female/bottom/pencil-skirt/navy.png",
							"wine": "assets/run/female/bottom/pencil-skirt/wine.png"
						},
						"ribbon-skirt": {
							"blue": "assets/run/female/bottom/ribbon-skirt/blue.png",
							"green": "assets/run/female/bottom/ribbon-skirt/green.png",
							"pink": "assets/run/female/bottom/ribbon-skirt/pink.png",
							"red": "assets/run/female/bottom/ribbon-skirt/red.png",
							"wine": "assets/run/female/bottom/ribbon-skirt/wine.png"
						},
						"school-uniform-bottom": {
							"dark": "assets/run/female/bottom/school-uniform-bottom/dark.png",
							"light": "assets/run/female/bottom/school-uniform-bottom/light.png",
							"dark-2": "assets/run/female/bottom/school-uniform-bottom/dark-2.png",
							"light-2": "assets/run/female/bottom/school-uniform-bottom/light-2.png"
						},
						"shorts": {
							"black": "assets/run/female/bottom/shorts/black.png",
							"blue": "assets/run/female/bottom/shorts/blue.png",
							"green": "assets/run/female/bottom/shorts/green.png",
							"red": "assets/run/female/bottom/shorts/red.png",
							"white": "assets/run/female/bottom/shorts/white.png"
						},
						"lord-suit-pants": { "default": "assets/run/female/bottom/lord-suit-pants/default.png" }
					},
					"top": {
						"beach-top-f": {
							"black": "assets/run/female/top/beach-top-f/black.png",
							"blue": "assets/run/female/top/beach-top-f/blue.png",
							"green": "assets/run/female/top/beach-top-f/green.png",
							"pink": "assets/run/female/top/beach-top-f/pink.png",
							"red": "assets/run/female/top/beach-top-f/red.png"
						},
						"beach-top-m": {
							"black": "assets/run/female/top/beach-top-m/black.png",
							"blue": "assets/run/female/top/beach-top-m/blue.png",
							"pink": "assets/run/female/top/beach-top-m/pink.png",
							"red": "assets/run/female/top/beach-top-m/red.png",
							"green": "assets/run/female/top/beach-top-m/green.png"
						},
						"classy-top-f": {
							"beige": "assets/run/female/top/classy-top-f/beige.png",
							"black": "assets/run/female/top/classy-top-f/black.png",
							"grey": "assets/run/female/top/classy-top-f/grey.png",
							"navy": "assets/run/female/top/classy-top-f/navy.png",
							"wine": "assets/run/female/top/classy-top-f/wine.png"
						},
						"classy-top-m": {
							"beige": "assets/run/female/top/classy-top-m/beige.png",
							"black": "assets/run/female/top/classy-top-m/black.png",
							"grey": "assets/run/female/top/classy-top-m/grey.png",
							"navy": "assets/run/female/top/classy-top-m/navy.png",
							"wine": "assets/run/female/top/classy-top-m/wine.png"
						},
						"collared-shirt": {
							"black": "assets/run/female/top/collared-shirt/black.png",
							"light-blue": "assets/run/female/top/collared-shirt/light-blue.png",
							"navy": "assets/run/female/top/collared-shirt/navy.png",
							"white": "assets/run/female/top/collared-shirt/white.png",
							"wine": "assets/run/female/top/collared-shirt/wine.png"
						},
						"formal": {
							"black": "assets/run/female/top/formal/black.png",
							"beige": "assets/run/female/top/formal/beige.png",
							"blue": "assets/run/female/top/formal/blue.png",
							"pink": "assets/run/female/top/formal/pink.png",
							"red": "assets/run/female/top/formal/red.png"
						},
						"hoodie": {
							"black": "assets/run/female/top/hoodie/black.png",
							"blue": "assets/run/female/top/hoodie/blue.png",
							"green": "assets/run/female/top/hoodie/green.png",
							"purple": "assets/run/female/top/hoodie/purple.png",
							"red": "assets/run/female/top/hoodie/red.png"
						},
						"jumpsuit-alt": {
							"blue": "assets/run/female/top/jumpsuit-alt/blue.png",
							"green": "assets/run/female/top/jumpsuit-alt/green.png",
							"red": "assets/run/female/top/jumpsuit-alt/red.png",
							"black": "assets/run/female/top/jumpsuit-alt/black.png",
							"yellow": "assets/run/female/top/jumpsuit-alt/yellow.png"
						},
						"jumpsuit": {
							"black": "assets/run/female/top/jumpsuit/black.png",
							"blue": "assets/run/female/top/jumpsuit/blue.png",
							"green": "assets/run/female/top/jumpsuit/green.png",
							"red": "assets/run/female/top/jumpsuit/red.png",
							"yellow": "assets/run/female/top/jumpsuit/yellow.png"
						},
						"lord-suit-top": {
							"purple": "assets/run/female/top/lord-suit-top/purple.png",
							"red": "assets/run/female/top/lord-suit-top/red.png"
						},
						"open-jacket": {
							"blue": "assets/run/female/top/open-jacket/blue.png",
							"green": "assets/run/female/top/open-jacket/green.png",
							"orange": "assets/run/female/top/open-jacket/orange.png",
							"pink": "assets/run/female/top/open-jacket/pink.png",
							"red": "assets/run/female/top/open-jacket/red.png"
						},
						"scarf-shirt": {
							"black": "assets/run/female/top/scarf-shirt/black.png",
							"blue": "assets/run/female/top/scarf-shirt/blue.png",
							"brown": "assets/run/female/top/scarf-shirt/brown.png",
							"red": "assets/run/female/top/scarf-shirt/red.png",
							"yellow": "assets/run/female/top/scarf-shirt/yellow.png"
						},
						"school-uniform-fm": {
							"dark": "assets/run/female/top/school-uniform-fm/dark.png",
							"light": "assets/run/female/top/school-uniform-fm/light.png",
							"light-2": "assets/run/female/top/school-uniform-fm/light-2.png",
							"dark-2": "assets/run/female/top/school-uniform-fm/dark-2.png"
						},
						"shirt-combo": {
							"black": "assets/run/female/top/shirt-combo/black.png",
							"blue": "assets/run/female/top/shirt-combo/blue.png",
							"red": "assets/run/female/top/shirt-combo/red.png",
							"white": "assets/run/female/top/shirt-combo/white.png",
							"wine": "assets/run/female/top/shirt-combo/wine.png"
						},
						"t-shirt": {
							"black": "assets/run/female/top/t-shirt/black.png",
							"blue": "assets/run/female/top/t-shirt/blue.png",
							"green": "assets/run/female/top/t-shirt/green.png",
							"red": "assets/run/female/top/t-shirt/red.png",
							"white": "assets/run/female/top/t-shirt/white.png"
						},
						"tank-top": {
							"black": "assets/run/female/top/tank-top/black.png",
							"green": "assets/run/female/top/tank-top/green.png",
							"navy": "assets/run/female/top/tank-top/navy.png",
							"pink": "assets/run/female/top/tank-top/pink.png",
							"red": "assets/run/female/top/tank-top/red.png"
						},
						"trench-coat": {
							"beige": "assets/run/female/top/trench-coat/beige.png",
							"black": "assets/run/female/top/trench-coat/black.png",
							"navy": "assets/run/female/top/trench-coat/navy.png",
							"purple": "assets/run/female/top/trench-coat/purple.png",
							"red": "assets/run/female/top/trench-coat/red.png"
						},
						"turtleneck-f": {
							"beige": "assets/run/female/top/turtleneck-f/beige.png",
							"black": "assets/run/female/top/turtleneck-f/black.png",
							"green": "assets/run/female/top/turtleneck-f/green.png",
							"white": "assets/run/female/top/turtleneck-f/white.png",
							"wine": "assets/run/female/top/turtleneck-f/wine.png"
						},
						"turtleneck-m": {
							"beige": "assets/run/female/top/turtleneck-m/beige.png",
							"wine": "assets/run/female/top/turtleneck-m/wine.png",
							"black": "assets/run/female/top/turtleneck-m/black.png",
							"green": "assets/run/female/top/turtleneck-m/green.png",
							"white": "assets/run/female/top/turtleneck-m/white.png"
						},
						"v-neck": {
							"black": "assets/run/female/top/v-neck/black.png",
							"green": "assets/run/female/top/v-neck/green.png",
							"orange": "assets/run/female/top/v-neck/orange.png",
							"purple": "assets/run/female/top/v-neck/purple.png",
							"yellow": "assets/run/female/top/v-neck/yellow.png"
						},
						"vest": {
							"black": "assets/run/female/top/vest/black.png",
							"blue": "assets/run/female/top/vest/blue.png",
							"brown": "assets/run/female/top/vest/brown.png",
							"grey": "assets/run/female/top/vest/grey.png",
							"wine": "assets/run/female/top/vest/wine.png"
						}
					},
					"hat": {
						"beanie": {
							"black": "assets/run/female/hat/beanie/black.png",
							"purple": "assets/run/female/hat/beanie/purple.png"
						},
						"crown": {
							"gold": "assets/run/female/hat/crown/gold.png",
							"silver": "assets/run/female/hat/crown/silver.png"
						},
						"flower": {
							"blue": "assets/run/female/hat/flower/blue.png",
							"red": "assets/run/female/hat/flower/red.png"
						},
						"glasses": {
							"blue": "assets/run/female/hat/glasses/blue.png",
							"red": "assets/run/female/hat/glasses/red.png"
						},
						"youngster-hat": {
							"blue": "assets/run/female/hat/youngster-hat/blue.png",
							"yellow": "assets/run/female/hat/youngster-hat/yellow.png"
						},
						"beret": { "default": "assets/run/female/hat/beret/default.png" },
						"bonnet": { "default": "assets/run/female/hat/bonnet/default.png" },
						"cat": { "default": "assets/run/female/hat/cat/default.png" },
						"devil": { "default": "assets/run/female/hat/devil/default.png" },
						"feather-hat": { "default": "assets/run/female/hat/feather-hat/default.png" },
						"fedora": { "default": "assets/run/female/hat/fedora/default.png" },
						"hair-band": { "default": "assets/run/female/hat/hair-band/default.png" },
						"headband": { "default": "assets/run/female/hat/headband/default.png" },
						"miner": { "default": "assets/run/female/hat/miner/default.png" },
						"poop": { "default": "assets/run/female/hat/poop/default.png" },
						"ribbon": { "default": "assets/run/female/hat/ribbon/default.png" },
						"straw-hat": { "default": "assets/run/female/hat/straw-hat/default.png" },
						"sun-hat": { "default": "assets/run/female/hat/sun-hat/default.png" }
					},
					"carry": {
						"bag": {
							"black": "assets/run/female/carry/bag/black.png",
							"blue": "assets/run/female/carry/bag/blue.png",
							"green": "assets/run/female/carry/bag/green.png",
							"magenta": "assets/run/female/carry/bag/magenta.png",
							"orange": "assets/run/female/carry/bag/orange.png",
							"purple": "assets/run/female/carry/bag/purple.png",
							"red": "assets/run/female/carry/bag/red.png",
							"white": "assets/run/female/carry/bag/white.png",
							"yellow": "assets/run/female/carry/bag/yellow.png"
						},
						"rucksack": {
							"red": "assets/run/female/carry/rucksack/red.png",
							"black": "assets/run/female/carry/rucksack/black.png",
							"blue": "assets/run/female/carry/rucksack/blue.png",
							"green": "assets/run/female/carry/rucksack/green.png",
							"magenta": "assets/run/female/carry/rucksack/magenta.png",
							"orange": "assets/run/female/carry/rucksack/orange.png",
							"purple": "assets/run/female/carry/rucksack/purple.png",
							"white": "assets/run/female/carry/rucksack/white.png",
							"yellow": "assets/run/female/carry/rucksack/yellow.png"
						},
						"sporty-backpack": {
							"black": "assets/run/female/carry/sporty-backpack/black.png",
							"blue": "assets/run/female/carry/sporty-backpack/blue.png",
							"green": "assets/run/female/carry/sporty-backpack/green.png",
							"magenta": "assets/run/female/carry/sporty-backpack/magenta.png",
							"orange": "assets/run/female/carry/sporty-backpack/orange.png",
							"purple": "assets/run/female/carry/sporty-backpack/purple.png",
							"red": "assets/run/female/carry/sporty-backpack/red.png",
							"white": "assets/run/female/carry/sporty-backpack/white.png",
							"yellow": "assets/run/female/carry/sporty-backpack/yellow.png"
						}
					},
					"hair": {
						"hair-3": {
							"black": "assets/run/female/hair/hair-3/black.png",
							"blonde": "assets/run/female/hair/hair-3/blonde.png",
							"blue": "assets/run/female/hair/hair-3/blue.png",
							"brown": "assets/run/female/hair/hair-3/brown.png",
							"cyan": "assets/run/female/hair/hair-3/cyan.png",
							"ginger": "assets/run/female/hair/hair-3/ginger.png",
							"green": "assets/run/female/hair/hair-3/green.png",
							"pink": "assets/run/female/hair/hair-3/pink.png",
							"purple": "assets/run/female/hair/hair-3/purple.png",
							"red": "assets/run/female/hair/hair-3/red.png",
							"white": "assets/run/female/hair/hair-3/white.png"
						},
						"hair-1": {
							"black": "assets/run/female/hair/hair-1/black.png",
							"cyan": "assets/run/female/hair/hair-1/cyan.png",
							"blonde": "assets/run/female/hair/hair-1/blonde.png",
							"blue": "assets/run/female/hair/hair-1/blue.png",
							"brown": "assets/run/female/hair/hair-1/brown.png",
							"ginger": "assets/run/female/hair/hair-1/ginger.png",
							"green": "assets/run/female/hair/hair-1/green.png",
							"pink": "assets/run/female/hair/hair-1/pink.png",
							"purple": "assets/run/female/hair/hair-1/purple.png",
							"red": "assets/run/female/hair/hair-1/red.png",
							"white": "assets/run/female/hair/hair-1/white.png"
						},
						"hair-2": {
							"black": "assets/run/female/hair/hair-2/black.png",
							"blonde": "assets/run/female/hair/hair-2/blonde.png",
							"blue": "assets/run/female/hair/hair-2/blue.png",
							"brown": "assets/run/female/hair/hair-2/brown.png",
							"cyan": "assets/run/female/hair/hair-2/cyan.png",
							"green": "assets/run/female/hair/hair-2/green.png",
							"pink": "assets/run/female/hair/hair-2/pink.png",
							"red": "assets/run/female/hair/hair-2/red.png",
							"violet": "assets/run/female/hair/hair-2/violet.png",
							"white": "assets/run/female/hair/hair-2/white.png",
							"ginger": "assets/run/female/hair/hair-2/ginger.png"
						},
						"hair-4": {
							"black": "assets/run/female/hair/hair-4/black.png",
							"blonde": "assets/run/female/hair/hair-4/blonde.png",
							"blue": "assets/run/female/hair/hair-4/blue.png",
							"brown": "assets/run/female/hair/hair-4/brown.png",
							"cyan": "assets/run/female/hair/hair-4/cyan.png",
							"ginger": "assets/run/female/hair/hair-4/ginger.png",
							"green": "assets/run/female/hair/hair-4/green.png",
							"pink": "assets/run/female/hair/hair-4/pink.png",
							"purple": "assets/run/female/hair/hair-4/purple.png",
							"red": "assets/run/female/hair/hair-4/red.png",
							"white": "assets/run/female/hair/hair-4/white.png"
						}
					}
				},
				"male": {
					"body": { "base": {
						"dark": "assets/run/male/body/base/dark.png",
						"light": "assets/run/male/body/base/light.png",
						"medium": "assets/run/male/body/base/medium.png",
						"pale": "assets/run/male/body/base/pale.png"
					} },
					"bottom": {
						"beach-bottom": {
							"black": "assets/run/male/bottom/beach-bottom/black.png",
							"blue": "assets/run/male/bottom/beach-bottom/blue.png",
							"green": "assets/run/male/bottom/beach-bottom/green.png",
							"pink": "assets/run/male/bottom/beach-bottom/pink.png",
							"red": "assets/run/male/bottom/beach-bottom/red.png",
							"black-2": "assets/run/male/bottom/beach-bottom/black-2.png",
							"blue-2": "assets/run/male/bottom/beach-bottom/blue-2.png",
							"green-2": "assets/run/male/bottom/beach-bottom/green-2.png",
							"pink-2": "assets/run/male/bottom/beach-bottom/pink-2.png",
							"red-2": "assets/run/male/bottom/beach-bottom/red-2.png"
						},
						"capris": {
							"aqua": "assets/run/male/bottom/capris/aqua.png",
							"beige": "assets/run/male/bottom/capris/beige.png",
							"black": "assets/run/male/bottom/capris/black.png",
							"green": "assets/run/male/bottom/capris/green.png",
							"navy": "assets/run/male/bottom/capris/navy.png"
						},
						"classy-bottom": {
							"beige": "assets/run/male/bottom/classy-bottom/beige.png",
							"black": "assets/run/male/bottom/classy-bottom/black.png",
							"grey": "assets/run/male/bottom/classy-bottom/grey.png",
							"navy": "assets/run/male/bottom/classy-bottom/navy.png",
							"wine": "assets/run/male/bottom/classy-bottom/wine.png",
							"beige-2": "assets/run/male/bottom/classy-bottom/beige-2.png",
							"black-2": "assets/run/male/bottom/classy-bottom/black-2.png",
							"grey-2": "assets/run/male/bottom/classy-bottom/grey-2.png",
							"navy-2": "assets/run/male/bottom/classy-bottom/navy-2.png",
							"wine-2": "assets/run/male/bottom/classy-bottom/wine-2.png"
						},
						"formal-bottoms": {
							"black": "assets/run/male/bottom/formal-bottoms/black.png",
							"blue": "assets/run/male/bottom/formal-bottoms/blue.png",
							"brown": "assets/run/male/bottom/formal-bottoms/brown.png",
							"grey": "assets/run/male/bottom/formal-bottoms/grey.png",
							"red": "assets/run/male/bottom/formal-bottoms/red.png",
							"black-2": "assets/run/male/bottom/formal-bottoms/black-2.png",
							"blue-2": "assets/run/male/bottom/formal-bottoms/blue-2.png",
							"brown-2": "assets/run/male/bottom/formal-bottoms/brown-2.png",
							"grey-2": "assets/run/male/bottom/formal-bottoms/grey-2.png",
							"pink": "assets/run/male/bottom/formal-bottoms/pink.png"
						},
						"jeans": {
							"aqua": "assets/run/male/bottom/jeans/aqua.png",
							"black": "assets/run/male/bottom/jeans/black.png",
							"grey": "assets/run/male/bottom/jeans/grey.png",
							"light-blue": "assets/run/male/bottom/jeans/light-blue.png",
							"navy": "assets/run/male/bottom/jeans/navy.png"
						},
						"jumpsuit-pants": {
							"black": "assets/run/male/bottom/jumpsuit-pants/black.png",
							"blue": "assets/run/male/bottom/jumpsuit-pants/blue.png",
							"green": "assets/run/male/bottom/jumpsuit-pants/green.png",
							"red": "assets/run/male/bottom/jumpsuit-pants/red.png",
							"yellow": "assets/run/male/bottom/jumpsuit-pants/yellow.png"
						},
						"jumpsuit-pants-alt": {
							"black": "assets/run/male/bottom/jumpsuit-pants-alt/black.png",
							"blue": "assets/run/male/bottom/jumpsuit-pants-alt/blue.png",
							"green": "assets/run/male/bottom/jumpsuit-pants-alt/green.png",
							"red": "assets/run/male/bottom/jumpsuit-pants-alt/red.png",
							"yellow": "assets/run/male/bottom/jumpsuit-pants-alt/yellow.png"
						},
						"long-skirt": {
							"black": "assets/run/male/bottom/long-skirt/black.png",
							"blue": "assets/run/male/bottom/long-skirt/blue.png",
							"green": "assets/run/male/bottom/long-skirt/green.png",
							"pink": "assets/run/male/bottom/long-skirt/pink.png",
							"purple": "assets/run/male/bottom/long-skirt/purple.png"
						},
						"pants-and-boots": {
							"beige": "assets/run/male/bottom/pants-and-boots/beige.png",
							"black": "assets/run/male/bottom/pants-and-boots/black.png",
							"grey": "assets/run/male/bottom/pants-and-boots/grey.png",
							"light-blue": "assets/run/male/bottom/pants-and-boots/light-blue.png",
							"navy": "assets/run/male/bottom/pants-and-boots/navy.png"
						},
						"pencil-skirt": {
							"black": "assets/run/male/bottom/pencil-skirt/black.png",
							"green": "assets/run/male/bottom/pencil-skirt/green.png",
							"grey": "assets/run/male/bottom/pencil-skirt/grey.png",
							"navy": "assets/run/male/bottom/pencil-skirt/navy.png",
							"wine": "assets/run/male/bottom/pencil-skirt/wine.png"
						},
						"ribbon-skirt": {
							"blue": "assets/run/male/bottom/ribbon-skirt/blue.png",
							"green": "assets/run/male/bottom/ribbon-skirt/green.png",
							"pink": "assets/run/male/bottom/ribbon-skirt/pink.png",
							"red": "assets/run/male/bottom/ribbon-skirt/red.png",
							"wine": "assets/run/male/bottom/ribbon-skirt/wine.png"
						},
						"school-uniform-bottom": {
							"dark": "assets/run/male/bottom/school-uniform-bottom/dark.png",
							"light": "assets/run/male/bottom/school-uniform-bottom/light.png",
							"dark-2": "assets/run/male/bottom/school-uniform-bottom/dark-2.png",
							"light-2": "assets/run/male/bottom/school-uniform-bottom/light-2.png"
						},
						"shorts": {
							"black": "assets/run/male/bottom/shorts/black.png",
							"blue": "assets/run/male/bottom/shorts/blue.png",
							"green": "assets/run/male/bottom/shorts/green.png",
							"red": "assets/run/male/bottom/shorts/red.png",
							"white": "assets/run/male/bottom/shorts/white.png"
						},
						"lord-suit-pants": { "default": "assets/run/male/bottom/lord-suit-pants/default.png" }
					},
					"top": {
						"beach-top-f": {
							"black": "assets/run/male/top/beach-top-f/black.png",
							"blue": "assets/run/male/top/beach-top-f/blue.png",
							"green": "assets/run/male/top/beach-top-f/green.png",
							"pink": "assets/run/male/top/beach-top-f/pink.png",
							"red": "assets/run/male/top/beach-top-f/red.png"
						},
						"beach-top-m": {
							"black": "assets/run/male/top/beach-top-m/black.png",
							"blue": "assets/run/male/top/beach-top-m/blue.png",
							"pink": "assets/run/male/top/beach-top-m/pink.png",
							"red": "assets/run/male/top/beach-top-m/red.png",
							"green": "assets/run/male/top/beach-top-m/green.png"
						},
						"classy-top-f": {
							"beige": "assets/run/male/top/classy-top-f/beige.png",
							"black": "assets/run/male/top/classy-top-f/black.png",
							"grey": "assets/run/male/top/classy-top-f/grey.png",
							"navy": "assets/run/male/top/classy-top-f/navy.png",
							"wine": "assets/run/male/top/classy-top-f/wine.png"
						},
						"classy-top-m": {
							"beige": "assets/run/male/top/classy-top-m/beige.png",
							"black": "assets/run/male/top/classy-top-m/black.png",
							"grey": "assets/run/male/top/classy-top-m/grey.png",
							"navy": "assets/run/male/top/classy-top-m/navy.png",
							"wine": "assets/run/male/top/classy-top-m/wine.png"
						},
						"collared-shirt": {
							"black": "assets/run/male/top/collared-shirt/black.png",
							"light-blue": "assets/run/male/top/collared-shirt/light-blue.png",
							"navy": "assets/run/male/top/collared-shirt/navy.png",
							"white": "assets/run/male/top/collared-shirt/white.png",
							"wine": "assets/run/male/top/collared-shirt/wine.png"
						},
						"formal": {
							"black": "assets/run/male/top/formal/black.png",
							"beige": "assets/run/male/top/formal/beige.png",
							"blue": "assets/run/male/top/formal/blue.png",
							"pink": "assets/run/male/top/formal/pink.png",
							"red": "assets/run/male/top/formal/red.png"
						},
						"hoodie": {
							"black": "assets/run/male/top/hoodie/black.png",
							"blue": "assets/run/male/top/hoodie/blue.png",
							"green": "assets/run/male/top/hoodie/green.png",
							"purple": "assets/run/male/top/hoodie/purple.png",
							"red": "assets/run/male/top/hoodie/red.png"
						},
						"jumpsuit-alt": {
							"blue": "assets/run/male/top/jumpsuit-alt/blue.png",
							"green": "assets/run/male/top/jumpsuit-alt/green.png",
							"red": "assets/run/male/top/jumpsuit-alt/red.png",
							"black": "assets/run/male/top/jumpsuit-alt/black.png",
							"yellow": "assets/run/male/top/jumpsuit-alt/yellow.png"
						},
						"jumpsuit": {
							"black": "assets/run/male/top/jumpsuit/black.png",
							"blue": "assets/run/male/top/jumpsuit/blue.png",
							"green": "assets/run/male/top/jumpsuit/green.png",
							"red": "assets/run/male/top/jumpsuit/red.png",
							"yellow": "assets/run/male/top/jumpsuit/yellow.png"
						},
						"lord-suit-top": {
							"purple": "assets/run/male/top/lord-suit-top/purple.png",
							"red": "assets/run/male/top/lord-suit-top/red.png"
						},
						"open-jacket": {
							"blue": "assets/run/male/top/open-jacket/blue.png",
							"green": "assets/run/male/top/open-jacket/green.png",
							"orange": "assets/run/male/top/open-jacket/orange.png",
							"pink": "assets/run/male/top/open-jacket/pink.png",
							"red": "assets/run/male/top/open-jacket/red.png"
						},
						"scarf-shirt": {
							"black": "assets/run/male/top/scarf-shirt/black.png",
							"blue": "assets/run/male/top/scarf-shirt/blue.png",
							"brown": "assets/run/male/top/scarf-shirt/brown.png",
							"red": "assets/run/male/top/scarf-shirt/red.png",
							"yellow": "assets/run/male/top/scarf-shirt/yellow.png"
						},
						"school-uniform-fm": {
							"dark": "assets/run/male/top/school-uniform-fm/dark.png",
							"light": "assets/run/male/top/school-uniform-fm/light.png",
							"light-2": "assets/run/male/top/school-uniform-fm/light-2.png",
							"dark-2": "assets/run/male/top/school-uniform-fm/dark-2.png"
						},
						"shirt-combo": {
							"black": "assets/run/male/top/shirt-combo/black.png",
							"blue": "assets/run/male/top/shirt-combo/blue.png",
							"red": "assets/run/male/top/shirt-combo/red.png",
							"white": "assets/run/male/top/shirt-combo/white.png",
							"wine": "assets/run/male/top/shirt-combo/wine.png"
						},
						"t-shirt": {
							"black": "assets/run/male/top/t-shirt/black.png",
							"blue": "assets/run/male/top/t-shirt/blue.png",
							"green": "assets/run/male/top/t-shirt/green.png",
							"red": "assets/run/male/top/t-shirt/red.png",
							"white": "assets/run/male/top/t-shirt/white.png"
						},
						"tank-top": {
							"black": "assets/run/male/top/tank-top/black.png",
							"green": "assets/run/male/top/tank-top/green.png",
							"navy": "assets/run/male/top/tank-top/navy.png",
							"pink": "assets/run/male/top/tank-top/pink.png",
							"red": "assets/run/male/top/tank-top/red.png"
						},
						"trench-coat": {
							"beige": "assets/run/male/top/trench-coat/beige.png",
							"black": "assets/run/male/top/trench-coat/black.png",
							"navy": "assets/run/male/top/trench-coat/navy.png",
							"purple": "assets/run/male/top/trench-coat/purple.png",
							"red": "assets/run/male/top/trench-coat/red.png"
						},
						"turtleneck-f": {
							"beige": "assets/run/male/top/turtleneck-f/beige.png",
							"black": "assets/run/male/top/turtleneck-f/black.png",
							"green": "assets/run/male/top/turtleneck-f/green.png",
							"white": "assets/run/male/top/turtleneck-f/white.png",
							"wine": "assets/run/male/top/turtleneck-f/wine.png"
						},
						"turtleneck-m": {
							"beige": "assets/run/male/top/turtleneck-m/beige.png",
							"wine": "assets/run/male/top/turtleneck-m/wine.png",
							"black": "assets/run/male/top/turtleneck-m/black.png",
							"green": "assets/run/male/top/turtleneck-m/green.png",
							"white": "assets/run/male/top/turtleneck-m/white.png"
						},
						"v-neck": {
							"black": "assets/run/male/top/v-neck/black.png",
							"green": "assets/run/male/top/v-neck/green.png",
							"orange": "assets/run/male/top/v-neck/orange.png",
							"purple": "assets/run/male/top/v-neck/purple.png",
							"yellow": "assets/run/male/top/v-neck/yellow.png"
						},
						"vest": {
							"black": "assets/run/male/top/vest/black.png",
							"blue": "assets/run/male/top/vest/blue.png",
							"brown": "assets/run/male/top/vest/brown.png",
							"grey": "assets/run/male/top/vest/grey.png",
							"wine": "assets/run/male/top/vest/wine.png"
						}
					},
					"hat": {
						"beanie": {
							"black": "assets/run/male/hat/beanie/black.png",
							"purple": "assets/run/male/hat/beanie/purple.png"
						},
						"crown": {
							"gold": "assets/run/male/hat/crown/gold.png",
							"silver": "assets/run/male/hat/crown/silver.png"
						},
						"flower": {
							"blue": "assets/run/male/hat/flower/blue.png",
							"red": "assets/run/male/hat/flower/red.png"
						},
						"glasses": {
							"blue": "assets/run/male/hat/glasses/blue.png",
							"red": "assets/run/male/hat/glasses/red.png"
						},
						"youngster-hat": {
							"blue": "assets/run/male/hat/youngster-hat/blue.png",
							"yellow": "assets/run/male/hat/youngster-hat/yellow.png"
						},
						"beret": { "default": "assets/run/male/hat/beret/default.png" },
						"bonnet": { "default": "assets/run/male/hat/bonnet/default.png" },
						"cat": { "default": "assets/run/male/hat/cat/default.png" },
						"devil": { "default": "assets/run/male/hat/devil/default.png" },
						"feather-hat": { "default": "assets/run/male/hat/feather-hat/default.png" },
						"fedora": { "default": "assets/run/male/hat/fedora/default.png" },
						"hair-band": { "default": "assets/run/male/hat/hair-band/default.png" },
						"headband": { "default": "assets/run/male/hat/headband/default.png" },
						"miner": { "default": "assets/run/male/hat/miner/default.png" },
						"poop": { "default": "assets/run/male/hat/poop/default.png" },
						"ribbon": { "default": "assets/run/male/hat/ribbon/default.png" },
						"straw-hat": { "default": "assets/run/male/hat/straw-hat/default.png" },
						"sun-hat": { "default": "assets/run/male/hat/sun-hat/default.png" }
					},
					"carry": {
						"bag": {
							"black": "assets/run/male/carry/bag/black.png",
							"blue": "assets/run/male/carry/bag/blue.png",
							"green": "assets/run/male/carry/bag/green.png",
							"magenta": "assets/run/male/carry/bag/magenta.png",
							"orange": "assets/run/male/carry/bag/orange.png",
							"purple": "assets/run/male/carry/bag/purple.png",
							"red": "assets/run/male/carry/bag/red.png",
							"white": "assets/run/male/carry/bag/white.png",
							"yellow": "assets/run/male/carry/bag/yellow.png"
						},
						"rucksack": {
							"red": "assets/run/male/carry/rucksack/red.png",
							"black": "assets/run/male/carry/rucksack/black.png",
							"blue": "assets/run/male/carry/rucksack/blue.png",
							"green": "assets/run/male/carry/rucksack/green.png",
							"magenta": "assets/run/male/carry/rucksack/magenta.png",
							"orange": "assets/run/male/carry/rucksack/orange.png",
							"purple": "assets/run/male/carry/rucksack/purple.png",
							"white": "assets/run/male/carry/rucksack/white.png",
							"yellow": "assets/run/male/carry/rucksack/yellow.png"
						},
						"sporty-backpack": {
							"black": "assets/run/male/carry/sporty-backpack/black.png",
							"blue": "assets/run/male/carry/sporty-backpack/blue.png",
							"green": "assets/run/male/carry/sporty-backpack/green.png",
							"magenta": "assets/run/male/carry/sporty-backpack/magenta.png",
							"orange": "assets/run/male/carry/sporty-backpack/orange.png",
							"purple": "assets/run/male/carry/sporty-backpack/purple.png",
							"red": "assets/run/male/carry/sporty-backpack/red.png",
							"white": "assets/run/male/carry/sporty-backpack/white.png",
							"yellow": "assets/run/male/carry/sporty-backpack/yellow.png"
						}
					},
					"hair": {
						"hair-1": {
							"black": "assets/run/male/hair/hair-1/black.png",
							"blonde": "assets/run/male/hair/hair-1/blonde.png",
							"blue": "assets/run/male/hair/hair-1/blue.png",
							"brown": "assets/run/male/hair/hair-1/brown.png",
							"cyan": "assets/run/male/hair/hair-1/cyan.png",
							"ginger": "assets/run/male/hair/hair-1/ginger.png",
							"green": "assets/run/male/hair/hair-1/green.png",
							"pink": "assets/run/male/hair/hair-1/pink.png",
							"purple": "assets/run/male/hair/hair-1/purple.png",
							"red": "assets/run/male/hair/hair-1/red.png",
							"white": "assets/run/male/hair/hair-1/white.png"
						},
						"hair-2": {
							"black": "assets/run/male/hair/hair-2/black.png",
							"blonde": "assets/run/male/hair/hair-2/blonde.png",
							"blue": "assets/run/male/hair/hair-2/blue.png",
							"brown": "assets/run/male/hair/hair-2/brown.png",
							"cyan": "assets/run/male/hair/hair-2/cyan.png",
							"ginger": "assets/run/male/hair/hair-2/ginger.png",
							"green": "assets/run/male/hair/hair-2/green.png",
							"pink": "assets/run/male/hair/hair-2/pink.png",
							"purple": "assets/run/male/hair/hair-2/purple.png",
							"red": "assets/run/male/hair/hair-2/red.png",
							"white": "assets/run/male/hair/hair-2/white.png"
						},
						"hair-3": {
							"black": "assets/run/male/hair/hair-3/black.png",
							"blonde": "assets/run/male/hair/hair-3/blonde.png",
							"blue": "assets/run/male/hair/hair-3/blue.png",
							"brown": "assets/run/male/hair/hair-3/brown.png",
							"cyan": "assets/run/male/hair/hair-3/cyan.png",
							"ginger": "assets/run/male/hair/hair-3/ginger.png",
							"green": "assets/run/male/hair/hair-3/green.png",
							"pink": "assets/run/male/hair/hair-3/pink.png",
							"purple": "assets/run/male/hair/hair-3/purple.png",
							"red": "assets/run/male/hair/hair-3/red.png",
							"white": "assets/run/male/hair/hair-3/white.png"
						},
						"hair-4": {
							"black": "assets/run/male/hair/hair-4/black.png",
							"blonde": "assets/run/male/hair/hair-4/blonde.png",
							"blue": "assets/run/male/hair/hair-4/blue.png",
							"brown": "assets/run/male/hair/hair-4/brown.png",
							"cyan": "assets/run/male/hair/hair-4/cyan.png",
							"ginger": "assets/run/male/hair/hair-4/ginger.png",
							"green": "assets/run/male/hair/hair-4/green.png",
							"pink": "assets/run/male/hair/hair-4/pink.png",
							"purple": "assets/run/male/hair/hair-4/purple.png",
							"red": "assets/run/male/hair/hair-4/red.png",
							"white": "assets/run/male/hair/hair-4/white.png"
						}
					}
				}
			},
			"bike": {
				"female": {
					"body": { "base": {
						"dark": "assets/bike/female/body/base/dark.png",
						"light": "assets/bike/female/body/base/light.png",
						"medium": "assets/bike/female/body/base/medium.png",
						"pale": "assets/bike/female/body/base/pale.png"
					} },
					"bottom": {
						"beach-bottom": {
							"black": "assets/bike/female/bottom/beach-bottom/black.png",
							"blue": "assets/bike/female/bottom/beach-bottom/blue.png",
							"green": "assets/bike/female/bottom/beach-bottom/green.png",
							"pink": "assets/bike/female/bottom/beach-bottom/pink.png",
							"red": "assets/bike/female/bottom/beach-bottom/red.png",
							"black-2": "assets/bike/female/bottom/beach-bottom/black-2.png",
							"blue-2": "assets/bike/female/bottom/beach-bottom/blue-2.png",
							"green-2": "assets/bike/female/bottom/beach-bottom/green-2.png",
							"pink-2": "assets/bike/female/bottom/beach-bottom/pink-2.png",
							"red-2": "assets/bike/female/bottom/beach-bottom/red-2.png"
						},
						"capris": {
							"aqua": "assets/bike/female/bottom/capris/aqua.png",
							"beige": "assets/bike/female/bottom/capris/beige.png",
							"black": "assets/bike/female/bottom/capris/black.png",
							"green": "assets/bike/female/bottom/capris/green.png",
							"navy": "assets/bike/female/bottom/capris/navy.png"
						},
						"classy-bottom": {
							"beige": "assets/bike/female/bottom/classy-bottom/beige.png",
							"black": "assets/bike/female/bottom/classy-bottom/black.png",
							"grey": "assets/bike/female/bottom/classy-bottom/grey.png",
							"navy": "assets/bike/female/bottom/classy-bottom/navy.png",
							"wine": "assets/bike/female/bottom/classy-bottom/wine.png",
							"beige-2": "assets/bike/female/bottom/classy-bottom/beige-2.png",
							"black-2": "assets/bike/female/bottom/classy-bottom/black-2.png",
							"grey-2": "assets/bike/female/bottom/classy-bottom/grey-2.png",
							"navy-2": "assets/bike/female/bottom/classy-bottom/navy-2.png",
							"wine-2": "assets/bike/female/bottom/classy-bottom/wine-2.png"
						},
						"formal-bottoms": {
							"black": "assets/bike/female/bottom/formal-bottoms/black.png",
							"blue": "assets/bike/female/bottom/formal-bottoms/blue.png",
							"brown": "assets/bike/female/bottom/formal-bottoms/brown.png",
							"grey": "assets/bike/female/bottom/formal-bottoms/grey.png",
							"red": "assets/bike/female/bottom/formal-bottoms/red.png",
							"black-2": "assets/bike/female/bottom/formal-bottoms/black-2.png",
							"blue-2": "assets/bike/female/bottom/formal-bottoms/blue-2.png",
							"brown-2": "assets/bike/female/bottom/formal-bottoms/brown-2.png",
							"grey-2": "assets/bike/female/bottom/formal-bottoms/grey-2.png",
							"pink": "assets/bike/female/bottom/formal-bottoms/pink.png"
						},
						"jeans": {
							"aqua": "assets/bike/female/bottom/jeans/aqua.png",
							"black": "assets/bike/female/bottom/jeans/black.png",
							"grey": "assets/bike/female/bottom/jeans/grey.png",
							"light-blue": "assets/bike/female/bottom/jeans/light-blue.png",
							"navy": "assets/bike/female/bottom/jeans/navy.png"
						},
						"jumpsuit-pants": {
							"black": "assets/bike/female/bottom/jumpsuit-pants/black.png",
							"blue": "assets/bike/female/bottom/jumpsuit-pants/blue.png",
							"green": "assets/bike/female/bottom/jumpsuit-pants/green.png",
							"red": "assets/bike/female/bottom/jumpsuit-pants/red.png",
							"yellow": "assets/bike/female/bottom/jumpsuit-pants/yellow.png"
						},
						"jumpsuit-pants-alt": {
							"black": "assets/bike/female/bottom/jumpsuit-pants-alt/black.png",
							"blue": "assets/bike/female/bottom/jumpsuit-pants-alt/blue.png",
							"green": "assets/bike/female/bottom/jumpsuit-pants-alt/green.png",
							"red": "assets/bike/female/bottom/jumpsuit-pants-alt/red.png",
							"yellow": "assets/bike/female/bottom/jumpsuit-pants-alt/yellow.png"
						},
						"long-skirt": {
							"black": "assets/bike/female/bottom/long-skirt/black.png",
							"blue": "assets/bike/female/bottom/long-skirt/blue.png",
							"green": "assets/bike/female/bottom/long-skirt/green.png",
							"pink": "assets/bike/female/bottom/long-skirt/pink.png",
							"purple": "assets/bike/female/bottom/long-skirt/purple.png"
						},
						"pants-and-boots": {
							"beige": "assets/bike/female/bottom/pants-and-boots/beige.png",
							"black": "assets/bike/female/bottom/pants-and-boots/black.png",
							"grey": "assets/bike/female/bottom/pants-and-boots/grey.png",
							"light-blue": "assets/bike/female/bottom/pants-and-boots/light-blue.png",
							"navy": "assets/bike/female/bottom/pants-and-boots/navy.png"
						},
						"pencil-skirt": {
							"black": "assets/bike/female/bottom/pencil-skirt/black.png",
							"green": "assets/bike/female/bottom/pencil-skirt/green.png",
							"grey": "assets/bike/female/bottom/pencil-skirt/grey.png",
							"navy": "assets/bike/female/bottom/pencil-skirt/navy.png",
							"wine": "assets/bike/female/bottom/pencil-skirt/wine.png"
						},
						"ribbon-skirt": {
							"blue": "assets/bike/female/bottom/ribbon-skirt/blue.png",
							"green": "assets/bike/female/bottom/ribbon-skirt/green.png",
							"pink": "assets/bike/female/bottom/ribbon-skirt/pink.png",
							"red": "assets/bike/female/bottom/ribbon-skirt/red.png",
							"wine": "assets/bike/female/bottom/ribbon-skirt/wine.png"
						},
						"school-uniform-bottom": {
							"dark": "assets/bike/female/bottom/school-uniform-bottom/dark.png",
							"light": "assets/bike/female/bottom/school-uniform-bottom/light.png",
							"dark-2": "assets/bike/female/bottom/school-uniform-bottom/dark-2.png",
							"light-2": "assets/bike/female/bottom/school-uniform-bottom/light-2.png"
						},
						"shorts": {
							"black": "assets/bike/female/bottom/shorts/black.png",
							"blue": "assets/bike/female/bottom/shorts/blue.png",
							"green": "assets/bike/female/bottom/shorts/green.png",
							"red": "assets/bike/female/bottom/shorts/red.png",
							"white": "assets/bike/female/bottom/shorts/white.png"
						},
						"lord-suit-pants": { "default": "assets/bike/female/bottom/lord-suit-pants/default.png" }
					},
					"top": {
						"beach-top-f": {
							"black": "assets/bike/female/top/beach-top-f/black.png",
							"blue": "assets/bike/female/top/beach-top-f/blue.png",
							"green": "assets/bike/female/top/beach-top-f/green.png",
							"pink": "assets/bike/female/top/beach-top-f/pink.png",
							"red": "assets/bike/female/top/beach-top-f/red.png"
						},
						"beach-top-m": {
							"black": "assets/bike/female/top/beach-top-m/black.png",
							"blue": "assets/bike/female/top/beach-top-m/blue.png",
							"pink": "assets/bike/female/top/beach-top-m/pink.png",
							"red": "assets/bike/female/top/beach-top-m/red.png",
							"green": "assets/bike/female/top/beach-top-m/green.png"
						},
						"classy-top-f": {
							"beige": "assets/bike/female/top/classy-top-f/beige.png",
							"black": "assets/bike/female/top/classy-top-f/black.png",
							"grey": "assets/bike/female/top/classy-top-f/grey.png",
							"navy": "assets/bike/female/top/classy-top-f/navy.png",
							"wine": "assets/bike/female/top/classy-top-f/wine.png"
						},
						"classy-top-m": {
							"beige": "assets/bike/female/top/classy-top-m/beige.png",
							"black": "assets/bike/female/top/classy-top-m/black.png",
							"grey": "assets/bike/female/top/classy-top-m/grey.png",
							"navy": "assets/bike/female/top/classy-top-m/navy.png",
							"wine": "assets/bike/female/top/classy-top-m/wine.png"
						},
						"collared-shirt": {
							"black": "assets/bike/female/top/collared-shirt/black.png",
							"light-blue": "assets/bike/female/top/collared-shirt/light-blue.png",
							"navy": "assets/bike/female/top/collared-shirt/navy.png",
							"white": "assets/bike/female/top/collared-shirt/white.png",
							"wine": "assets/bike/female/top/collared-shirt/wine.png"
						},
						"formal": {
							"black": "assets/bike/female/top/formal/black.png",
							"beige": "assets/bike/female/top/formal/beige.png",
							"blue": "assets/bike/female/top/formal/blue.png",
							"pink": "assets/bike/female/top/formal/pink.png",
							"red": "assets/bike/female/top/formal/red.png"
						},
						"hoodie": {
							"black": "assets/bike/female/top/hoodie/black.png",
							"blue": "assets/bike/female/top/hoodie/blue.png",
							"green": "assets/bike/female/top/hoodie/green.png",
							"purple": "assets/bike/female/top/hoodie/purple.png",
							"red": "assets/bike/female/top/hoodie/red.png"
						},
						"jumpsuit-alt": {
							"blue": "assets/bike/female/top/jumpsuit-alt/blue.png",
							"green": "assets/bike/female/top/jumpsuit-alt/green.png",
							"red": "assets/bike/female/top/jumpsuit-alt/red.png",
							"black": "assets/bike/female/top/jumpsuit-alt/black.png",
							"yellow": "assets/bike/female/top/jumpsuit-alt/yellow.png"
						},
						"jumpsuit": {
							"black": "assets/bike/female/top/jumpsuit/black.png",
							"blue": "assets/bike/female/top/jumpsuit/blue.png",
							"green": "assets/bike/female/top/jumpsuit/green.png",
							"red": "assets/bike/female/top/jumpsuit/red.png",
							"yellow": "assets/bike/female/top/jumpsuit/yellow.png"
						},
						"lord-suit-top": {
							"purple": "assets/bike/female/top/lord-suit-top/purple.png",
							"red": "assets/bike/female/top/lord-suit-top/red.png"
						},
						"open-jacket": {
							"blue": "assets/bike/female/top/open-jacket/blue.png",
							"green": "assets/bike/female/top/open-jacket/green.png",
							"orange": "assets/bike/female/top/open-jacket/orange.png",
							"pink": "assets/bike/female/top/open-jacket/pink.png",
							"red": "assets/bike/female/top/open-jacket/red.png"
						},
						"scarf-shirt": {
							"black": "assets/bike/female/top/scarf-shirt/black.png",
							"blue": "assets/bike/female/top/scarf-shirt/blue.png",
							"brown": "assets/bike/female/top/scarf-shirt/brown.png",
							"red": "assets/bike/female/top/scarf-shirt/red.png",
							"yellow": "assets/bike/female/top/scarf-shirt/yellow.png"
						},
						"school-uniform-fm": {
							"dark": "assets/bike/female/top/school-uniform-fm/dark.png",
							"light": "assets/bike/female/top/school-uniform-fm/light.png",
							"light-2": "assets/bike/female/top/school-uniform-fm/light-2.png",
							"dark-2": "assets/bike/female/top/school-uniform-fm/dark-2.png"
						},
						"shirt-combo": {
							"black": "assets/bike/female/top/shirt-combo/black.png",
							"blue": "assets/bike/female/top/shirt-combo/blue.png",
							"red": "assets/bike/female/top/shirt-combo/red.png",
							"white": "assets/bike/female/top/shirt-combo/white.png",
							"wine": "assets/bike/female/top/shirt-combo/wine.png"
						},
						"t-shirt": {
							"black": "assets/bike/female/top/t-shirt/black.png",
							"blue": "assets/bike/female/top/t-shirt/blue.png",
							"green": "assets/bike/female/top/t-shirt/green.png",
							"red": "assets/bike/female/top/t-shirt/red.png",
							"white": "assets/bike/female/top/t-shirt/white.png"
						},
						"tank-top": {
							"black": "assets/bike/female/top/tank-top/black.png",
							"green": "assets/bike/female/top/tank-top/green.png",
							"navy": "assets/bike/female/top/tank-top/navy.png",
							"pink": "assets/bike/female/top/tank-top/pink.png",
							"red": "assets/bike/female/top/tank-top/red.png"
						},
						"trench-coat": {
							"beige": "assets/bike/female/top/trench-coat/beige.png",
							"black": "assets/bike/female/top/trench-coat/black.png",
							"navy": "assets/bike/female/top/trench-coat/navy.png",
							"purple": "assets/bike/female/top/trench-coat/purple.png",
							"red": "assets/bike/female/top/trench-coat/red.png"
						},
						"turtleneck-f": {
							"beige": "assets/bike/female/top/turtleneck-f/beige.png",
							"black": "assets/bike/female/top/turtleneck-f/black.png",
							"green": "assets/bike/female/top/turtleneck-f/green.png",
							"white": "assets/bike/female/top/turtleneck-f/white.png",
							"wine": "assets/bike/female/top/turtleneck-f/wine.png"
						},
						"turtleneck-m": {
							"beige": "assets/bike/female/top/turtleneck-m/beige.png",
							"wine": "assets/bike/female/top/turtleneck-m/wine.png",
							"black": "assets/bike/female/top/turtleneck-m/black.png",
							"green": "assets/bike/female/top/turtleneck-m/green.png",
							"white": "assets/bike/female/top/turtleneck-m/white.png"
						},
						"v-neck": {
							"black": "assets/bike/female/top/v-neck/black.png",
							"green": "assets/bike/female/top/v-neck/green.png",
							"orange": "assets/bike/female/top/v-neck/orange.png",
							"purple": "assets/bike/female/top/v-neck/purple.png",
							"yellow": "assets/bike/female/top/v-neck/yellow.png"
						},
						"vest": {
							"black": "assets/bike/female/top/vest/black.png",
							"blue": "assets/bike/female/top/vest/blue.png",
							"brown": "assets/bike/female/top/vest/brown.png",
							"grey": "assets/bike/female/top/vest/grey.png",
							"wine": "assets/bike/female/top/vest/wine.png"
						}
					},
					"hat": {
						"beanie": {
							"black": "assets/bike/female/hat/beanie/black.png",
							"purple": "assets/bike/female/hat/beanie/purple.png"
						},
						"crown": {
							"gold": "assets/bike/female/hat/crown/gold.png",
							"silver": "assets/bike/female/hat/crown/silver.png"
						},
						"flower": {
							"blue": "assets/bike/female/hat/flower/blue.png",
							"red": "assets/bike/female/hat/flower/red.png"
						},
						"glasses": {
							"blue": "assets/bike/female/hat/glasses/blue.png",
							"red": "assets/bike/female/hat/glasses/red.png"
						},
						"youngster-hat": {
							"blue": "assets/bike/female/hat/youngster-hat/blue.png",
							"yellow": "assets/bike/female/hat/youngster-hat/yellow.png"
						},
						"beret": { "default": "assets/bike/female/hat/beret/default.png" },
						"bonnet": { "default": "assets/bike/female/hat/bonnet/default.png" },
						"cat": { "default": "assets/bike/female/hat/cat/default.png" },
						"devil": { "default": "assets/bike/female/hat/devil/default.png" },
						"feather-hat": { "default": "assets/bike/female/hat/feather-hat/default.png" },
						"fedora": { "default": "assets/bike/female/hat/fedora/default.png" },
						"hair-band": { "default": "assets/bike/female/hat/hair-band/default.png" },
						"headband": { "default": "assets/bike/female/hat/headband/default.png" },
						"miner": { "default": "assets/bike/female/hat/miner/default.png" },
						"poop": { "default": "assets/bike/female/hat/poop/default.png" },
						"ribbon": { "default": "assets/bike/female/hat/ribbon/default.png" },
						"straw-hat": { "default": "assets/bike/female/hat/straw-hat/default.png" },
						"sun-hat": { "default": "assets/bike/female/hat/sun-hat/default.png" }
					},
					"carry": {
						"bag": {
							"black": "assets/bike/female/carry/bag/black.png",
							"blue": "assets/bike/female/carry/bag/blue.png",
							"green": "assets/bike/female/carry/bag/green.png",
							"magenta": "assets/bike/female/carry/bag/magenta.png",
							"orange": "assets/bike/female/carry/bag/orange.png",
							"purple": "assets/bike/female/carry/bag/purple.png",
							"red": "assets/bike/female/carry/bag/red.png",
							"white": "assets/bike/female/carry/bag/white.png",
							"yellow": "assets/bike/female/carry/bag/yellow.png"
						},
						"rucksack": {
							"red": "assets/bike/female/carry/rucksack/red.png",
							"black": "assets/bike/female/carry/rucksack/black.png",
							"blue": "assets/bike/female/carry/rucksack/blue.png",
							"green": "assets/bike/female/carry/rucksack/green.png",
							"magenta": "assets/bike/female/carry/rucksack/magenta.png",
							"orange": "assets/bike/female/carry/rucksack/orange.png",
							"purple": "assets/bike/female/carry/rucksack/purple.png",
							"white": "assets/bike/female/carry/rucksack/white.png",
							"yellow": "assets/bike/female/carry/rucksack/yellow.png"
						},
						"sporty-backpack": {
							"black": "assets/bike/female/carry/sporty-backpack/black.png",
							"blue": "assets/bike/female/carry/sporty-backpack/blue.png",
							"green": "assets/bike/female/carry/sporty-backpack/green.png",
							"magenta": "assets/bike/female/carry/sporty-backpack/magenta.png",
							"orange": "assets/bike/female/carry/sporty-backpack/orange.png",
							"purple": "assets/bike/female/carry/sporty-backpack/purple.png",
							"red": "assets/bike/female/carry/sporty-backpack/red.png",
							"white": "assets/bike/female/carry/sporty-backpack/white.png",
							"yellow": "assets/bike/female/carry/sporty-backpack/yellow.png"
						}
					},
					"hair": {
						"hair-3": {
							"black": "assets/bike/female/hair/hair-3/black.png",
							"blonde": "assets/bike/female/hair/hair-3/blonde.png",
							"blue": "assets/bike/female/hair/hair-3/blue.png",
							"brown": "assets/bike/female/hair/hair-3/brown.png",
							"cyan": "assets/bike/female/hair/hair-3/cyan.png",
							"ginger": "assets/bike/female/hair/hair-3/ginger.png",
							"green": "assets/bike/female/hair/hair-3/green.png",
							"pink": "assets/bike/female/hair/hair-3/pink.png",
							"purple": "assets/bike/female/hair/hair-3/purple.png",
							"red": "assets/bike/female/hair/hair-3/red.png",
							"white": "assets/bike/female/hair/hair-3/white.png"
						},
						"hair-1": {
							"black": "assets/bike/female/hair/hair-1/black.png",
							"cyan": "assets/bike/female/hair/hair-1/cyan.png",
							"blonde": "assets/bike/female/hair/hair-1/blonde.png",
							"blue": "assets/bike/female/hair/hair-1/blue.png",
							"brown": "assets/bike/female/hair/hair-1/brown.png",
							"ginger": "assets/bike/female/hair/hair-1/ginger.png",
							"green": "assets/bike/female/hair/hair-1/green.png",
							"pink": "assets/bike/female/hair/hair-1/pink.png",
							"purple": "assets/bike/female/hair/hair-1/purple.png",
							"red": "assets/bike/female/hair/hair-1/red.png",
							"white": "assets/bike/female/hair/hair-1/white.png"
						},
						"hair-2": {
							"black": "assets/bike/female/hair/hair-2/black.png",
							"blonde": "assets/bike/female/hair/hair-2/blonde.png",
							"blue": "assets/bike/female/hair/hair-2/blue.png",
							"brown": "assets/bike/female/hair/hair-2/brown.png",
							"cyan": "assets/bike/female/hair/hair-2/cyan.png",
							"green": "assets/bike/female/hair/hair-2/green.png",
							"pink": "assets/bike/female/hair/hair-2/pink.png",
							"red": "assets/bike/female/hair/hair-2/red.png",
							"violet": "assets/bike/female/hair/hair-2/violet.png",
							"white": "assets/bike/female/hair/hair-2/white.png",
							"ginger": "assets/bike/female/hair/hair-2/ginger.png"
						},
						"hair-4": {
							"black": "assets/bike/female/hair/hair-4/black.png",
							"blonde": "assets/bike/female/hair/hair-4/blonde.png",
							"blue": "assets/bike/female/hair/hair-4/blue.png",
							"brown": "assets/bike/female/hair/hair-4/brown.png",
							"cyan": "assets/bike/female/hair/hair-4/cyan.png",
							"ginger": "assets/bike/female/hair/hair-4/ginger.png",
							"green": "assets/bike/female/hair/hair-4/green.png",
							"pink": "assets/bike/female/hair/hair-4/pink.png",
							"purple": "assets/bike/female/hair/hair-4/purple.png",
							"red": "assets/bike/female/hair/hair-4/red.png",
							"white": "assets/bike/female/hair/hair-4/white.png"
						}
					}
				},
				"male": {
					"body": { "base": {
						"dark": "assets/bike/male/body/base/dark.png",
						"light": "assets/bike/male/body/base/light.png",
						"medium": "assets/bike/male/body/base/medium.png",
						"pale": "assets/bike/male/body/base/pale.png"
					} },
					"bottom": {
						"beach-bottom": {
							"black": "assets/bike/male/bottom/beach-bottom/black.png",
							"blue": "assets/bike/male/bottom/beach-bottom/blue.png",
							"green": "assets/bike/male/bottom/beach-bottom/green.png",
							"pink": "assets/bike/male/bottom/beach-bottom/pink.png",
							"red": "assets/bike/male/bottom/beach-bottom/red.png",
							"black-2": "assets/bike/male/bottom/beach-bottom/black-2.png",
							"blue-2": "assets/bike/male/bottom/beach-bottom/blue-2.png",
							"green-2": "assets/bike/male/bottom/beach-bottom/green-2.png",
							"pink-2": "assets/bike/male/bottom/beach-bottom/pink-2.png",
							"red-2": "assets/bike/male/bottom/beach-bottom/red-2.png"
						},
						"capris": {
							"aqua": "assets/bike/male/bottom/capris/aqua.png",
							"beige": "assets/bike/male/bottom/capris/beige.png",
							"black": "assets/bike/male/bottom/capris/black.png",
							"green": "assets/bike/male/bottom/capris/green.png",
							"navy": "assets/bike/male/bottom/capris/navy.png"
						},
						"classy-bottom": {
							"beige": "assets/bike/male/bottom/classy-bottom/beige.png",
							"black": "assets/bike/male/bottom/classy-bottom/black.png",
							"grey": "assets/bike/male/bottom/classy-bottom/grey.png",
							"navy": "assets/bike/male/bottom/classy-bottom/navy.png",
							"wine": "assets/bike/male/bottom/classy-bottom/wine.png",
							"beige-2": "assets/bike/male/bottom/classy-bottom/beige-2.png",
							"black-2": "assets/bike/male/bottom/classy-bottom/black-2.png",
							"grey-2": "assets/bike/male/bottom/classy-bottom/grey-2.png",
							"navy-2": "assets/bike/male/bottom/classy-bottom/navy-2.png",
							"wine-2": "assets/bike/male/bottom/classy-bottom/wine-2.png"
						},
						"formal-bottoms": {
							"black": "assets/bike/male/bottom/formal-bottoms/black.png",
							"blue": "assets/bike/male/bottom/formal-bottoms/blue.png",
							"brown": "assets/bike/male/bottom/formal-bottoms/brown.png",
							"grey": "assets/bike/male/bottom/formal-bottoms/grey.png",
							"red": "assets/bike/male/bottom/formal-bottoms/red.png",
							"black-2": "assets/bike/male/bottom/formal-bottoms/black-2.png",
							"blue-2": "assets/bike/male/bottom/formal-bottoms/blue-2.png",
							"brown-2": "assets/bike/male/bottom/formal-bottoms/brown-2.png",
							"grey-2": "assets/bike/male/bottom/formal-bottoms/grey-2.png",
							"pink": "assets/bike/male/bottom/formal-bottoms/pink.png"
						},
						"jeans": {
							"aqua": "assets/bike/male/bottom/jeans/aqua.png",
							"black": "assets/bike/male/bottom/jeans/black.png",
							"grey": "assets/bike/male/bottom/jeans/grey.png",
							"light-blue": "assets/bike/male/bottom/jeans/light-blue.png",
							"navy": "assets/bike/male/bottom/jeans/navy.png"
						},
						"jumpsuit-pants": {
							"black": "assets/bike/male/bottom/jumpsuit-pants/black.png",
							"blue": "assets/bike/male/bottom/jumpsuit-pants/blue.png",
							"green": "assets/bike/male/bottom/jumpsuit-pants/green.png",
							"red": "assets/bike/male/bottom/jumpsuit-pants/red.png",
							"yellow": "assets/bike/male/bottom/jumpsuit-pants/yellow.png"
						},
						"jumpsuit-pants-alt": {
							"black": "assets/bike/male/bottom/jumpsuit-pants-alt/black.png",
							"blue": "assets/bike/male/bottom/jumpsuit-pants-alt/blue.png",
							"green": "assets/bike/male/bottom/jumpsuit-pants-alt/green.png",
							"red": "assets/bike/male/bottom/jumpsuit-pants-alt/red.png",
							"yellow": "assets/bike/male/bottom/jumpsuit-pants-alt/yellow.png"
						},
						"long-skirt": {
							"black": "assets/bike/male/bottom/long-skirt/black.png",
							"blue": "assets/bike/male/bottom/long-skirt/blue.png",
							"green": "assets/bike/male/bottom/long-skirt/green.png",
							"pink": "assets/bike/male/bottom/long-skirt/pink.png",
							"purple": "assets/bike/male/bottom/long-skirt/purple.png"
						},
						"pants-and-boots": {
							"beige": "assets/bike/male/bottom/pants-and-boots/beige.png",
							"black": "assets/bike/male/bottom/pants-and-boots/black.png",
							"grey": "assets/bike/male/bottom/pants-and-boots/grey.png",
							"light-blue": "assets/bike/male/bottom/pants-and-boots/light-blue.png",
							"navy": "assets/bike/male/bottom/pants-and-boots/navy.png"
						},
						"pencil-skirt": {
							"black": "assets/bike/male/bottom/pencil-skirt/black.png",
							"green": "assets/bike/male/bottom/pencil-skirt/green.png",
							"grey": "assets/bike/male/bottom/pencil-skirt/grey.png",
							"navy": "assets/bike/male/bottom/pencil-skirt/navy.png",
							"wine": "assets/bike/male/bottom/pencil-skirt/wine.png"
						},
						"ribbon-skirt": {
							"blue": "assets/bike/male/bottom/ribbon-skirt/blue.png",
							"green": "assets/bike/male/bottom/ribbon-skirt/green.png",
							"pink": "assets/bike/male/bottom/ribbon-skirt/pink.png",
							"red": "assets/bike/male/bottom/ribbon-skirt/red.png",
							"wine": "assets/bike/male/bottom/ribbon-skirt/wine.png"
						},
						"school-uniform-bottom": {
							"dark": "assets/bike/male/bottom/school-uniform-bottom/dark.png",
							"light": "assets/bike/male/bottom/school-uniform-bottom/light.png",
							"dark-2": "assets/bike/male/bottom/school-uniform-bottom/dark-2.png",
							"light-2": "assets/bike/male/bottom/school-uniform-bottom/light-2.png"
						},
						"shorts": {
							"black": "assets/bike/male/bottom/shorts/black.png",
							"blue": "assets/bike/male/bottom/shorts/blue.png",
							"green": "assets/bike/male/bottom/shorts/green.png",
							"red": "assets/bike/male/bottom/shorts/red.png",
							"white": "assets/bike/male/bottom/shorts/white.png"
						},
						"lord-suit-pants": { "default": "assets/bike/male/bottom/lord-suit-pants/default.png" }
					},
					"top": {
						"beach-top-f": {
							"black": "assets/bike/male/top/beach-top-f/black.png",
							"blue": "assets/bike/male/top/beach-top-f/blue.png",
							"green": "assets/bike/male/top/beach-top-f/green.png",
							"pink": "assets/bike/male/top/beach-top-f/pink.png",
							"red": "assets/bike/male/top/beach-top-f/red.png"
						},
						"beach-top-m": {
							"black": "assets/bike/male/top/beach-top-m/black.png",
							"blue": "assets/bike/male/top/beach-top-m/blue.png",
							"pink": "assets/bike/male/top/beach-top-m/pink.png",
							"red": "assets/bike/male/top/beach-top-m/red.png",
							"green": "assets/bike/male/top/beach-top-m/green.png"
						},
						"classy-top-f": {
							"beige": "assets/bike/male/top/classy-top-f/beige.png",
							"black": "assets/bike/male/top/classy-top-f/black.png",
							"grey": "assets/bike/male/top/classy-top-f/grey.png",
							"navy": "assets/bike/male/top/classy-top-f/navy.png",
							"wine": "assets/bike/male/top/classy-top-f/wine.png"
						},
						"classy-top-m": {
							"beige": "assets/bike/male/top/classy-top-m/beige.png",
							"black": "assets/bike/male/top/classy-top-m/black.png",
							"grey": "assets/bike/male/top/classy-top-m/grey.png",
							"navy": "assets/bike/male/top/classy-top-m/navy.png",
							"wine": "assets/bike/male/top/classy-top-m/wine.png"
						},
						"collared-shirt": {
							"black": "assets/bike/male/top/collared-shirt/black.png",
							"light-blue": "assets/bike/male/top/collared-shirt/light-blue.png",
							"navy": "assets/bike/male/top/collared-shirt/navy.png",
							"white": "assets/bike/male/top/collared-shirt/white.png",
							"wine": "assets/bike/male/top/collared-shirt/wine.png"
						},
						"formal": {
							"black": "assets/bike/male/top/formal/black.png",
							"beige": "assets/bike/male/top/formal/beige.png",
							"blue": "assets/bike/male/top/formal/blue.png",
							"pink": "assets/bike/male/top/formal/pink.png",
							"red": "assets/bike/male/top/formal/red.png"
						},
						"hoodie": {
							"black": "assets/bike/male/top/hoodie/black.png",
							"blue": "assets/bike/male/top/hoodie/blue.png",
							"green": "assets/bike/male/top/hoodie/green.png",
							"purple": "assets/bike/male/top/hoodie/purple.png",
							"red": "assets/bike/male/top/hoodie/red.png"
						},
						"jumpsuit-alt": {
							"blue": "assets/bike/male/top/jumpsuit-alt/blue.png",
							"green": "assets/bike/male/top/jumpsuit-alt/green.png",
							"red": "assets/bike/male/top/jumpsuit-alt/red.png",
							"black": "assets/bike/male/top/jumpsuit-alt/black.png",
							"yellow": "assets/bike/male/top/jumpsuit-alt/yellow.png"
						},
						"jumpsuit": {
							"black": "assets/bike/male/top/jumpsuit/black.png",
							"blue": "assets/bike/male/top/jumpsuit/blue.png",
							"green": "assets/bike/male/top/jumpsuit/green.png",
							"red": "assets/bike/male/top/jumpsuit/red.png",
							"yellow": "assets/bike/male/top/jumpsuit/yellow.png"
						},
						"lord-suit-top": {
							"purple": "assets/bike/male/top/lord-suit-top/purple.png",
							"red": "assets/bike/male/top/lord-suit-top/red.png"
						},
						"open-jacket": {
							"blue": "assets/bike/male/top/open-jacket/blue.png",
							"green": "assets/bike/male/top/open-jacket/green.png",
							"orange": "assets/bike/male/top/open-jacket/orange.png",
							"pink": "assets/bike/male/top/open-jacket/pink.png",
							"red": "assets/bike/male/top/open-jacket/red.png"
						},
						"scarf-shirt": {
							"black": "assets/bike/male/top/scarf-shirt/black.png",
							"blue": "assets/bike/male/top/scarf-shirt/blue.png",
							"brown": "assets/bike/male/top/scarf-shirt/brown.png",
							"red": "assets/bike/male/top/scarf-shirt/red.png",
							"yellow": "assets/bike/male/top/scarf-shirt/yellow.png"
						},
						"school-uniform-fm": {
							"dark": "assets/bike/male/top/school-uniform-fm/dark.png",
							"light": "assets/bike/male/top/school-uniform-fm/light.png",
							"light-2": "assets/bike/male/top/school-uniform-fm/light-2.png",
							"dark-2": "assets/bike/male/top/school-uniform-fm/dark-2.png"
						},
						"shirt-combo": {
							"black": "assets/bike/male/top/shirt-combo/black.png",
							"blue": "assets/bike/male/top/shirt-combo/blue.png",
							"red": "assets/bike/male/top/shirt-combo/red.png",
							"white": "assets/bike/male/top/shirt-combo/white.png",
							"wine": "assets/bike/male/top/shirt-combo/wine.png"
						},
						"t-shirt": {
							"black": "assets/bike/male/top/t-shirt/black.png",
							"blue": "assets/bike/male/top/t-shirt/blue.png",
							"green": "assets/bike/male/top/t-shirt/green.png",
							"red": "assets/bike/male/top/t-shirt/red.png",
							"white": "assets/bike/male/top/t-shirt/white.png"
						},
						"tank-top": {
							"black": "assets/bike/male/top/tank-top/black.png",
							"green": "assets/bike/male/top/tank-top/green.png",
							"navy": "assets/bike/male/top/tank-top/navy.png",
							"pink": "assets/bike/male/top/tank-top/pink.png",
							"red": "assets/bike/male/top/tank-top/red.png"
						},
						"trench-coat": {
							"beige": "assets/bike/male/top/trench-coat/beige.png",
							"black": "assets/bike/male/top/trench-coat/black.png",
							"navy": "assets/bike/male/top/trench-coat/navy.png",
							"purple": "assets/bike/male/top/trench-coat/purple.png",
							"red": "assets/bike/male/top/trench-coat/red.png"
						},
						"turtleneck-f": {
							"beige": "assets/bike/male/top/turtleneck-f/beige.png",
							"black": "assets/bike/male/top/turtleneck-f/black.png",
							"green": "assets/bike/male/top/turtleneck-f/green.png",
							"white": "assets/bike/male/top/turtleneck-f/white.png",
							"wine": "assets/bike/male/top/turtleneck-f/wine.png"
						},
						"turtleneck-m": {
							"beige": "assets/bike/male/top/turtleneck-m/beige.png",
							"wine": "assets/bike/male/top/turtleneck-m/wine.png",
							"black": "assets/bike/male/top/turtleneck-m/black.png",
							"green": "assets/bike/male/top/turtleneck-m/green.png",
							"white": "assets/bike/male/top/turtleneck-m/white.png"
						},
						"v-neck": {
							"black": "assets/bike/male/top/v-neck/black.png",
							"green": "assets/bike/male/top/v-neck/green.png",
							"orange": "assets/bike/male/top/v-neck/orange.png",
							"purple": "assets/bike/male/top/v-neck/purple.png",
							"yellow": "assets/bike/male/top/v-neck/yellow.png"
						},
						"vest": {
							"black": "assets/bike/male/top/vest/black.png",
							"blue": "assets/bike/male/top/vest/blue.png",
							"brown": "assets/bike/male/top/vest/brown.png",
							"grey": "assets/bike/male/top/vest/grey.png",
							"wine": "assets/bike/male/top/vest/wine.png"
						}
					},
					"hat": {
						"beanie": {
							"black": "assets/bike/male/hat/beanie/black.png",
							"purple": "assets/bike/male/hat/beanie/purple.png"
						},
						"crown": {
							"gold": "assets/bike/male/hat/crown/gold.png",
							"silver": "assets/bike/male/hat/crown/silver.png"
						},
						"flower": {
							"blue": "assets/bike/male/hat/flower/blue.png",
							"red": "assets/bike/male/hat/flower/red.png"
						},
						"glasses": {
							"blue": "assets/bike/male/hat/glasses/blue.png",
							"red": "assets/bike/male/hat/glasses/red.png"
						},
						"youngster-hat": {
							"blue": "assets/bike/male/hat/youngster-hat/blue.png",
							"yellow": "assets/bike/male/hat/youngster-hat/yellow.png"
						},
						"beret": { "default": "assets/bike/male/hat/beret/default.png" },
						"bonnet": { "default": "assets/bike/male/hat/bonnet/default.png" },
						"cat": { "default": "assets/bike/male/hat/cat/default.png" },
						"devil": { "default": "assets/bike/male/hat/devil/default.png" },
						"feather-hat": { "default": "assets/bike/male/hat/feather-hat/default.png" },
						"fedora": { "default": "assets/bike/male/hat/fedora/default.png" },
						"hair-band": { "default": "assets/bike/male/hat/hair-band/default.png" },
						"headband": { "default": "assets/bike/male/hat/headband/default.png" },
						"miner": { "default": "assets/bike/male/hat/miner/default.png" },
						"poop": { "default": "assets/bike/male/hat/poop/default.png" },
						"ribbon": { "default": "assets/bike/male/hat/ribbon/default.png" },
						"straw-hat": { "default": "assets/bike/male/hat/straw-hat/default.png" },
						"sun-hat": { "default": "assets/bike/male/hat/sun-hat/default.png" }
					},
					"carry": {
						"bag": {
							"black": "assets/bike/male/carry/bag/black.png",
							"blue": "assets/bike/male/carry/bag/blue.png",
							"green": "assets/bike/male/carry/bag/green.png",
							"magenta": "assets/bike/male/carry/bag/magenta.png",
							"orange": "assets/bike/male/carry/bag/orange.png",
							"purple": "assets/bike/male/carry/bag/purple.png",
							"red": "assets/bike/male/carry/bag/red.png",
							"white": "assets/bike/male/carry/bag/white.png",
							"yellow": "assets/bike/male/carry/bag/yellow.png"
						},
						"rucksack": {
							"red": "assets/bike/male/carry/rucksack/red.png",
							"black": "assets/bike/male/carry/rucksack/black.png",
							"blue": "assets/bike/male/carry/rucksack/blue.png",
							"green": "assets/bike/male/carry/rucksack/green.png",
							"magenta": "assets/bike/male/carry/rucksack/magenta.png",
							"orange": "assets/bike/male/carry/rucksack/orange.png",
							"purple": "assets/bike/male/carry/rucksack/purple.png",
							"white": "assets/bike/male/carry/rucksack/white.png",
							"yellow": "assets/bike/male/carry/rucksack/yellow.png"
						},
						"sporty-backpack": {
							"black": "assets/bike/male/carry/sporty-backpack/black.png",
							"blue": "assets/bike/male/carry/sporty-backpack/blue.png",
							"green": "assets/bike/male/carry/sporty-backpack/green.png",
							"magenta": "assets/bike/male/carry/sporty-backpack/magenta.png",
							"orange": "assets/bike/male/carry/sporty-backpack/orange.png",
							"purple": "assets/bike/male/carry/sporty-backpack/purple.png",
							"red": "assets/bike/male/carry/sporty-backpack/red.png",
							"white": "assets/bike/male/carry/sporty-backpack/white.png",
							"yellow": "assets/bike/male/carry/sporty-backpack/yellow.png"
						}
					},
					"hair": {
						"hair-1": {
							"black": "assets/bike/male/hair/hair-1/black.png",
							"blonde": "assets/bike/male/hair/hair-1/blonde.png",
							"blue": "assets/bike/male/hair/hair-1/blue.png",
							"brown": "assets/bike/male/hair/hair-1/brown.png",
							"cyan": "assets/bike/male/hair/hair-1/cyan.png",
							"ginger": "assets/bike/male/hair/hair-1/ginger.png",
							"green": "assets/bike/male/hair/hair-1/green.png",
							"pink": "assets/bike/male/hair/hair-1/pink.png",
							"purple": "assets/bike/male/hair/hair-1/purple.png",
							"red": "assets/bike/male/hair/hair-1/red.png",
							"white": "assets/bike/male/hair/hair-1/white.png"
						},
						"hair-2": {
							"black": "assets/bike/male/hair/hair-2/black.png",
							"blonde": "assets/bike/male/hair/hair-2/blonde.png",
							"blue": "assets/bike/male/hair/hair-2/blue.png",
							"brown": "assets/bike/male/hair/hair-2/brown.png",
							"cyan": "assets/bike/male/hair/hair-2/cyan.png",
							"ginger": "assets/bike/male/hair/hair-2/ginger.png",
							"green": "assets/bike/male/hair/hair-2/green.png",
							"pink": "assets/bike/male/hair/hair-2/pink.png",
							"purple": "assets/bike/male/hair/hair-2/purple.png",
							"red": "assets/bike/male/hair/hair-2/red.png",
							"white": "assets/bike/male/hair/hair-2/white.png"
						},
						"hair-3": {
							"black": "assets/bike/male/hair/hair-3/black.png",
							"blonde": "assets/bike/male/hair/hair-3/blonde.png",
							"blue": "assets/bike/male/hair/hair-3/blue.png",
							"brown": "assets/bike/male/hair/hair-3/brown.png",
							"cyan": "assets/bike/male/hair/hair-3/cyan.png",
							"ginger": "assets/bike/male/hair/hair-3/ginger.png",
							"green": "assets/bike/male/hair/hair-3/green.png",
							"pink": "assets/bike/male/hair/hair-3/pink.png",
							"purple": "assets/bike/male/hair/hair-3/purple.png",
							"red": "assets/bike/male/hair/hair-3/red.png",
							"white": "assets/bike/male/hair/hair-3/white.png"
						},
						"hair-4": {
							"black": "assets/bike/male/hair/hair-4/black.png",
							"blonde": "assets/bike/male/hair/hair-4/blonde.png",
							"blue": "assets/bike/male/hair/hair-4/blue.png",
							"brown": "assets/bike/male/hair/hair-4/brown.png",
							"cyan": "assets/bike/male/hair/hair-4/cyan.png",
							"ginger": "assets/bike/male/hair/hair-4/ginger.png",
							"green": "assets/bike/male/hair/hair-4/green.png",
							"pink": "assets/bike/male/hair/hair-4/pink.png",
							"purple": "assets/bike/male/hair/hair-4/purple.png",
							"red": "assets/bike/male/hair/hair-4/red.png",
							"white": "assets/bike/male/hair/hair-4/white.png"
						}
					}
				}
			}
		},
		defaults: {
			"female": {
				"body": {
					"item": "base",
					"variant": "light"
				},
				"hair": {
					"item": "hair-1",
					"variant": "brown"
				},
				"top": {
					"item": "t-shirt",
					"variant": "red"
				},
				"bottom": {
					"item": "jeans",
					"variant": "light-blue"
				},
				"hat": null,
				"carry": null
			},
			"male": {
				"body": {
					"item": "base",
					"variant": "light"
				},
				"hair": {
					"item": "hair-1",
					"variant": "brown"
				},
				"top": {
					"item": "t-shirt",
					"variant": "red"
				},
				"bottom": {
					"item": "jeans",
					"variant": "light-blue"
				},
				"hat": null,
				"carry": null
			}
		}
	};
	//#endregion
	//#region artifacts/avatar-standalone/avatarCreator.js
	const virtualHatBasePrefix = "base-accessory:";
	const avatarManifestUrl = "./manifest.json";
	const avatarBackFrameOptions = Array.from({ length: 5 }, (_, index) => ({
		label: `Costas ${index + 1}`,
		value: index + 1
	}));
	const avatarViewOptions = [
		{
			label: "Frente",
			value: "front"
		},
		{
			label: "Icon",
			value: "icon"
		},
		{
			label: "Costas",
			value: "back"
		},
		{
			label: "Andando",
			value: "walk"
		},
		{
			label: "Correndo",
			value: "run"
		},
		{
			label: "Bike",
			value: "bike"
		}
	];
	const avatarSceneBackgrounds = [
		{
			id: "tall-grass",
			label: "Grama",
			src: "assets/backgrounds/TALL GRASS.png"
		},
		{
			id: "tall-grass-night",
			label: "Grama noite",
			src: "assets/backgrounds/TALL GRASS NIGHT.png"
		},
		{
			id: "path",
			label: "Caminho",
			src: "assets/backgrounds/PATH.png"
		},
		{
			id: "path-night",
			label: "Caminho noite",
			src: "assets/backgrounds/PATH NIGHT.png"
		},
		{
			id: "path-2",
			label: "Caminho 2",
			src: "assets/backgrounds/PATH 2.png"
		},
		{
			id: "beach",
			label: "Praia",
			src: "assets/backgrounds/BEACH.png"
		},
		{
			id: "beach-night",
			label: "Praia noite",
			src: "assets/backgrounds/BEACH NIGHT.png"
		},
		{
			id: "beach-2",
			label: "Praia 2",
			src: "assets/backgrounds/BEACH 2.png"
		},
		{
			id: "lake",
			label: "Lago",
			src: "assets/backgrounds/LAKE.png"
		},
		{
			id: "lake-night",
			label: "Lago noite",
			src: "assets/backgrounds/LAKE NIGHT.png"
		},
		{
			id: "ocean",
			label: "Oceano",
			src: "assets/backgrounds/OCEAN.png"
		},
		{
			id: "ocean-night",
			label: "Oceano noite",
			src: "assets/backgrounds/OCEAN NIGHT.png"
		},
		{
			id: "mountain",
			label: "Montanha",
			src: "assets/backgrounds/MOUNTAIN.png"
		},
		{
			id: "mountain-night",
			label: "Montanha noite",
			src: "assets/backgrounds/MOUNTAIN NIGHT.png"
		},
		{
			id: "mountain-2",
			label: "Montanha 2",
			src: "assets/backgrounds/MOUNTAIN 2.png"
		},
		{
			id: "cave",
			label: "Caverna",
			src: "assets/backgrounds/CAVE.png"
		},
		{
			id: "cave-night",
			label: "Caverna noite",
			src: "assets/backgrounds/CAVE NIGHT.png"
		},
		{
			id: "cave-2",
			label: "Caverna 2",
			src: "assets/backgrounds/CAVE 2.png"
		},
		{
			id: "snow",
			label: "Neve",
			src: "assets/backgrounds/SNOW.png"
		},
		{
			id: "snow-night",
			label: "Neve noite",
			src: "assets/backgrounds/SNOW NIGHT.png"
		},
		{
			id: "desert",
			label: "Deserto",
			src: "assets/backgrounds/DESERT.png"
		},
		{
			id: "desert-night",
			label: "Deserto noite",
			src: "assets/backgrounds/DESERT NIGHT.png"
		},
		{
			id: "underwater",
			label: "Submerso",
			src: "assets/backgrounds/UNDERWATER.png"
		}
	];
	const defaultMemberAvatarConfig = {
		background: "tall-grass",
		backFrame: 5,
		gender: "male",
		selections: {
			body: {
				item: "base",
				variant: "light"
			},
			bottom: {
				item: "jeans",
				variant: "light-blue"
			},
			top: {
				item: "t-shirt",
				variant: "red"
			},
			hair: {
				item: "hair-1",
				variant: "brown"
			},
			hat: null,
			carry: null
		}
	};
	const colorMap = {
		aqua: "#63b8c4",
		beige: "#d8c0a2",
		black: "#2f2933",
		blue: "#4e78c4",
		brown: "#8b5f43",
		brownish: "#8c6b59",
		cyan: "#68cbd5",
		dark: "#5a514d",
		default: "#d9d2c7",
		ginger: "#b96a3d",
		green: "#5e9e69",
		grey: "#9095a1",
		light: "#f0dcc0",
		"light-blue": "#8db5ea",
		magenta: "#b76499",
		medium: "#d6b290",
		navy: "#40507f",
		orange: "#d8844f",
		pale: "#f6e7d7",
		pink: "#d98aa8",
		purple: "#7d66b4",
		red: "#d5545c",
		violet: "#8064bd",
		white: "#f8f5f0",
		wine: "#7a3f53",
		yellow: "#e1ba54"
	};
	const itemVisibilityRules = {
		female: {
			bottom: { exclude: [
				"classy-pants",
				"formal-pants",
				"school-uniform-bottom"
			] },
			top: { exclude: ["lord-suit-top", "scarf-top"] }
		},
		male: {
			bottom: { exclude: [
				"classy-bottom",
				"evening-bottom",
				"formal-bottoms",
				"long-skirt",
				"pencil-skirt",
				"ribbon-skirt",
				"school-girl"
			] },
			top: { exclude: ["lord-suit", "scarf-shirt"] }
		}
	};
	const itemAliases = {
		back: { top: {
			"lord-suit-top": "lord-suit",
			"scarf-top": "scarf-shirt"
		} },
		overworld: {
			bottom: {
				base: "lord-suit-pants",
				"classy-bottom": "formal-bottoms",
				"classy-pants": "classy-bottom",
				"evening-bottom": "classy-bottom",
				"formal-pants": "formal-bottoms",
				"school-girl": "school-uniform-bottom"
			},
			top: {
				beach: {
					female: "beach-top-f",
					male: "beach-top-m"
				},
				classy: {
					female: "classy-top-f",
					male: "classy-top-m"
				},
				"lord-suit": "lord-suit-top",
				"lord-suit-top": "lord-suit-top",
				"scarf-top": "scarf-shirt",
				"school-uniform": "school-uniform-fm",
				turtleneck: {
					female: "turtleneck-f",
					male: "turtleneck-m"
				}
			}
		}
	};
	const variantAliases = {
		bottom: {
			base: {
				"lord-suit-pants": ["default"],
				"lords-pants": ["default"]
			},
			"lord-suit-pants": {
				"lord-suit-pants": ["default"],
				"lords-pants": ["default"]
			},
			"school-girl": { black: ["dark"] },
			"school-uniform-bottom": { black: ["dark"] }
		},
		hat: {
			base: {
				"cat-ears": ["default"],
				cate: ["default"],
				"hair-band": ["default"],
				hairband: ["default"],
				mining: ["default"]
			},
			"youngster-hat": {
				copy: ["yellow"],
				yellow: ["copy"],
				"youngster-cap-bee": ["yellow"]
			}
		},
		top: {
			jumpsuit: { yellow: ["black-2"] },
			"trench-coat": { brown: ["beige"] },
			turtleneck: {
				brownish: ["beige"],
				magenta: ["wine"]
			},
			"turtleneck-f": {
				brownish: ["beige"],
				magenta: ["wine"]
			},
			"turtleneck-m": {
				brownish: ["beige"],
				magenta: ["wine"]
			},
			vest: { brown: ["beige"] }
		}
	};
	const preferredVariantAliases = { back: { top: { jumpsuit: {
		black: ["black-2"],
		yellow: ["black"]
	} } } };
	const overworldHatBaseAliases = {
		beret: "beret",
		bonnet: "bonnet",
		"cat-ears": "cat",
		cate: "cat",
		devil: "devil",
		"feather-hat": "feather-hat",
		fedora: "fedora",
		"hair-band": "hair-band",
		hairband: "hair-band",
		headband: "headband",
		mining: "miner",
		poop: "poop",
		ribbon: "ribbon",
		"straw-hat": "straw-hat",
		"sun-hat": "sun-hat"
	};
	const backHatBaseVariantAliases = {
		cate: "cat-ears",
		"hair-band": "hairband"
	};
	const iconCrops = {
		female: {
			height: 52,
			width: 52,
			x: 60,
			y: 6
		},
		male: {
			height: 52,
			width: 52,
			x: 64,
			y: 6
		}
	};
	const iconSceneOffsets = {
		female: {
			x: 0,
			y: 0
		},
		male: {
			x: 12,
			y: 0
		}
	};
	const imageCache = /* @__PURE__ */ new Map();
	let manifestPromise = null;
	function setAvatarManifest(manifest) {
		manifestPromise = Promise.resolve(manifest);
	}
	function getVirtualHatBaseItemId(variantId) {
		return `${virtualHatBasePrefix}${variantId}`;
	}
	function getHatBaseVariantFromVirtualItem(itemId) {
		return itemId.startsWith(virtualHatBasePrefix) ? itemId.slice(15) : null;
	}
	function getAvatarSelectionItemId(categoryId, selection) {
		if (categoryId === "hat" && selection?.item === "base") return getVirtualHatBaseItemId(selection.variant);
		return selection?.item ?? "";
	}
	function getAvatarSelectionFromItemId(categoryId, itemId, variantId) {
		const hatBaseVariant = categoryId === "hat" ? getHatBaseVariantFromVirtualItem(itemId) : null;
		if (hatBaseVariant) return {
			item: "base",
			variant: hatBaseVariant
		};
		return {
			item: itemId,
			variant: variantId
		};
	}
	function getAvatarVariantColor(variantId) {
		return colorMap[variantId] ?? colorMap.default;
	}
	function normalizeAvatarBackFrame(value) {
		const frame = typeof value === "number" ? value : Number(value);
		return Number.isInteger(frame) && frame >= 1 && frame <= avatarBackFrameOptions.length ? frame : 5;
	}
	function isAvatarSheetView(value) {
		return value === "walk" || value === "run" || value === "bike";
	}
	function getAvatarAssetUrl(path) {
		if (!path) return "";
		if (/^https?:\/\//.test(path) || path.startsWith("/")) return path;
		return `./${path.split("/").map(encodeURIComponent).join("/")}`;
	}
	async function loadAvatarManifest() {
		if (!manifestPromise) manifestPromise = fetch(avatarManifestUrl).then(async (response) => {
			if (!response.ok) throw new Error("Não foi possível carregar o criador de avatar.");
			return await response.json();
		});
		return manifestPromise;
	}
	function cloneMemberAvatarConfig(config = defaultMemberAvatarConfig) {
		return {
			background: config.background,
			backFrame: normalizeAvatarBackFrame(config.backFrame),
			gender: config.gender,
			selections: Object.fromEntries(Object.entries(config.selections).map(([categoryId, selection]) => [categoryId, selection ? {
				item: selection.item,
				variant: selection.variant
			} : null]))
		};
	}
	function getAvatarCategory(manifest, categoryId) {
		return manifest.categories.find((category) => category.id === categoryId) ?? null;
	}
	function getAvatarItemsForCategory(manifest, category, gender) {
		const frontMap = getFrontItemsMap(manifest, category.id, gender);
		return (category.id === "hat" ? category.items.flatMap((item) => {
			if (item.id !== "base") return [item];
			return (item.variants ?? []).map((variant) => ({
				id: getVirtualHatBaseItemId(variant.id),
				name: variant.name || prettify(variant.id),
				variants: [{
					id: "default",
					name: "Padrão"
				}]
			}));
		}) : category.items).filter((item) => {
			const baseVariant = category.id === "hat" ? getHatBaseVariantFromVirtualItem(item.id) : null;
			const itemMap = baseVariant ? { default: frontMap.base?.[baseVariant] } : frontMap[item.id];
			if (!itemMap || !isItemAllowedForGender(category.id, item.id, gender)) return false;
			if (baseVariant) return variantIsRenderableInViews(manifest, category.id, "base", baseVariant, gender);
			return Object.keys(itemMap).some((variantId) => variantIsRenderableInViews(manifest, category.id, item.id, variantId, gender));
		});
	}
	function getAvatarVariantsForItem(manifest, category, item, gender) {
		const baseVariant = category.id === "hat" ? getHatBaseVariantFromVirtualItem(item.id) : null;
		if (baseVariant) return variantIsRenderableInViews(manifest, category.id, "base", baseVariant, gender) ? [{
			id: "default",
			name: "Padrão"
		}] : [];
		const pathMap = getPathMap(manifest, "front", gender, category.id, item.id) ?? {};
		const ordered = [];
		const seen = /* @__PURE__ */ new Set();
		for (const variant of item.variants ?? []) if (pathMap[variant.id] && variantIsRenderableInViews(manifest, category.id, item.id, variant.id, gender)) {
			ordered.push({
				id: variant.id,
				name: variant.name || prettify(variant.id)
			});
			seen.add(variant.id);
		}
		for (const variantId of Object.keys(pathMap)) if (!seen.has(variantId) && variantIsRenderableInViews(manifest, category.id, item.id, variantId, gender)) ordered.push({
			id: variantId,
			name: prettify(variantId)
		});
		return ordered;
	}
	function getVisibleAvatarCategories(manifest, gender) {
		return manifest.categories.filter((category) => getAvatarItemsForCategory(manifest, category, gender).length > 0 || category.id === "body" && Object.keys(getFrontItemsMap(manifest, "body", gender)).length > 0);
	}
	function normalizeMemberAvatarConfig(manifest, config = defaultMemberAvatarConfig) {
		const gender = config?.gender === "female" || config?.gender === "male" ? config.gender : defaultMemberAvatarConfig.gender;
		const background = avatarSceneBackgrounds.some((candidate) => candidate.id === config?.background) ? config?.background ?? defaultMemberAvatarConfig.background : defaultMemberAvatarConfig.background;
		const backFrame = normalizeAvatarBackFrame(config?.backFrame);
		const selections = {};
		const rawSelections = config?.selections ?? {};
		for (const category of manifest.categories) {
			const items = getAvatarItemsForCategory(manifest, category, gender);
			const rawCurrent = rawSelections[category.id];
			const current = category.id === "hat" && rawCurrent?.item === "base" ? {
				item: getVirtualHatBaseItemId(rawCurrent.variant),
				variant: "default"
			} : rawCurrent;
			if (items.length === 0) {
				selections[category.id] = null;
				continue;
			}
			if (category.optional && (current === null || current === void 0)) {
				selections[category.id] = null;
				continue;
			}
			const currentItem = current ? items.find((item) => item.id === current.item) : null;
			if (currentItem) {
				const variants = getAvatarVariantsForItem(manifest, category, currentItem, gender);
				const nextVariant = variants.find((variant) => variant.id === current?.variant)?.id ?? variants[0]?.id ?? "default";
				selections[category.id] = getAvatarSelectionFromItemId(category.id, currentItem.id, nextVariant);
				continue;
			}
			const defaultSelection = manifest.defaults?.[gender]?.[category.id];
			const defaultItem = defaultSelection ? items.find((item) => item.id === defaultSelection.item) : null;
			if (defaultItem) {
				const variants = getAvatarVariantsForItem(manifest, category, defaultItem, gender);
				const defaultVariant = variants.find((variant) => variant.id === defaultSelection?.variant)?.id ?? variants[0]?.id;
				if (defaultVariant) {
					selections[category.id] = {
						item: defaultItem.id,
						variant: defaultVariant
					};
					continue;
				}
			}
			const firstItem = items[0];
			const firstVariant = getAvatarVariantsForItem(manifest, category, firstItem, gender)[0]?.id ?? "default";
			selections[category.id] = getAvatarSelectionFromItemId(category.id, firstItem.id, firstVariant);
		}
		return {
			background,
			backFrame,
			gender,
			selections
		};
	}
	function getAvatarPreviewAssetUrl(manifest, config, categoryId, itemId, variantId) {
		const category = getAvatarCategory(manifest, categoryId);
		const item = (category ? getAvatarItemsForCategory(manifest, category, config.gender) : []).find((candidate) => candidate.id === itemId);
		if (!category || !item) return "";
		const baseVariant = categoryId === "hat" ? getHatBaseVariantFromVirtualItem(itemId) : null;
		const variant = baseVariant ?? variantId ?? getAvatarVariantsForItem(manifest, category, item, config.gender).find((candidate) => candidate.id === config.selections[categoryId]?.variant)?.id ?? getAvatarVariantsForItem(manifest, category, item, config.gender)[0]?.id;
		if (!variant) return "";
		return getAvatarAssetUrl(resolvePathForGender(manifest, "front", config.gender, categoryId, baseVariant ? {
			item: "base",
			variant
		} : {
			item: itemId,
			variant
		}));
	}
	async function renderMemberAvatar(config) {
		const manifest = await loadAvatarManifest();
		const normalizedConfig = normalizeMemberAvatarConfig(manifest, config);
		const sceneBackground = await loadSceneBackground(normalizedConfig.background);
		const views = manifest.views;
		const back = createAvatarCanvas(views.back.sheetWidth ?? views.back.width, views.back.sheetHeight ?? views.back.height);
		const front = createAvatarCanvas(views.front.width, views.front.height);
		const walk = createAvatarCanvas(views.walk.width, views.walk.height);
		const run = createAvatarCanvas(views.run.width, views.run.height);
		const bike = createAvatarCanvas(views.bike.width, views.bike.height);
		await drawViewToContext(manifest, normalizedConfig, "back", back.getContext("2d"));
		await drawViewToContext(manifest, normalizedConfig, "front", front.getContext("2d"));
		await drawViewToContext(manifest, normalizedConfig, "walk", walk.getContext("2d"));
		await drawViewToContext(manifest, normalizedConfig, "run", run.getContext("2d"));
		await drawViewToContext(manifest, normalizedConfig, "bike", bike.getContext("2d"));
		const icon = renderIconCanvas(front, normalizedConfig.gender);
		return {
			canvases: {
				back,
				bike,
				front,
				icon,
				iconScene: renderIconSceneCanvas(icon, sceneBackground, normalizedConfig.gender),
				run,
				walk
			},
			config: normalizedConfig,
			sceneBackground
		};
	}
	function drawAvatarPreview(canvas, rendered, viewId, time = performance.now()) {
		const context = setCanvasSize(canvas, canvas.width, canvas.height);
		if (viewId === "icon") {
			const size = Math.min(canvas.width, canvas.height) - 22;
			const x = Math.floor((canvas.width - size) / 2);
			const y = Math.floor((canvas.height - size) / 2);
			context.drawImage(rendered.canvases.iconScene, x, y, size, size);
			return;
		}
		paintSceneBackground(context, rendered.sceneBackground, canvas.width, canvas.height);
		if (viewId === "front") {
			const source = rendered.canvases.front;
			drawShadow(context, canvas.width / 2, canvas.height - 44, 56, 12);
			const scale = Math.min(1.45, (canvas.height - 48) / source.height);
			const width = source.width * scale;
			const height = source.height * scale;
			const x = Math.floor((canvas.width - width) / 2);
			const y = Math.floor((canvas.height - height) / 2) - 3;
			context.drawImage(source, x, y, width, height);
			return;
		}
		if (viewId === "back") {
			const source = rendered.canvases.back;
			const sourceWidth = Math.floor(source.width / avatarBackFrameOptions.length);
			const sourceHeight = source.height;
			const frameIndex = normalizeAvatarBackFrame(rendered.config.backFrame) - 1;
			const scale = Math.min(1.35, (canvas.width - 48) / sourceWidth, (canvas.height - 48) / sourceHeight);
			const width = sourceWidth * scale;
			const height = sourceHeight * scale;
			const x = Math.floor((canvas.width - width) / 2);
			const y = Math.floor((canvas.height - height) / 2) - 3;
			drawShadow(context, canvas.width / 2, canvas.height - 44, 52, 12);
			context.drawImage(source, frameIndex * sourceWidth, 0, sourceWidth, sourceHeight, x, y, width, height);
			return;
		}
		const sheet = rendered.canvases[viewId];
		const tile = 64;
		const frame = getAnimationFrame(viewId, time);
		const scale = viewId === "bike" ? 3 : 3.35;
		const width = tile * scale;
		const height = tile * scale;
		const x = Math.floor((canvas.width - width) / 2);
		const y = Math.floor((canvas.height - height) / 2);
		drawShadow(context, canvas.width / 2, canvas.height - 52, 44, 10);
		context.drawImage(sheet, frame * tile, 0, tile, tile, x, y, width, height);
	}
	function getPathMap(manifest, viewId, gender, categoryId, itemId) {
		return manifest.paths?.[viewId]?.[gender]?.[categoryId]?.[itemId] ?? null;
	}
	function getFrontItemsMap(manifest, categoryId, gender) {
		return manifest.paths?.front?.[gender]?.[categoryId] ?? {};
	}
	function prettify(value = "") {
		return value.replace(/[-_]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
	}
	function isOverworldView(viewId) {
		return viewId === "walk" || viewId === "run" || viewId === "bike";
	}
	function isItemAllowedForGender(categoryId, itemId, gender) {
		const rules = itemVisibilityRules[gender]?.[categoryId];
		if (rules?.exclude?.includes(itemId)) return false;
		if (rules?.include && !rules.include.includes(itemId)) return false;
		return true;
	}
	function variantIsRenderableInViews(manifest, categoryId, itemId, variantId, gender) {
		const selection = {
			item: itemId,
			variant: variantId
		};
		for (const [viewId, view] of Object.entries(manifest.views)) {
			if (!view.layers.includes(categoryId)) continue;
			if (!resolvePathForGender(manifest, viewId, gender, categoryId, selection)) return false;
		}
		return true;
	}
	function resolveAliasValue(value, gender) {
		if (!value) return null;
		return typeof value === "string" ? value : value[gender] ?? null;
	}
	function addPathCandidate(candidates, seen, item, variant) {
		if (!item || !variant) return;
		const key = `${item}|${variant}`;
		if (seen.has(key)) return;
		seen.add(key);
		candidates.push({
			item,
			variant
		});
	}
	function addPreferredVariantCandidates(candidates, seen, viewId, categoryId, item, variant) {
		const aliases = preferredVariantAliases[viewId]?.[categoryId]?.[item]?.[variant] ?? [];
		for (const aliasVariant of aliases) addPathCandidate(candidates, seen, item, aliasVariant);
	}
	function addVariantAliasCandidates(candidates, seen, viewId, categoryId, item, variant) {
		const aliases = variantAliases[categoryId]?.[item]?.[variant] ?? [];
		for (const aliasVariant of aliases) {
			if (viewId !== "back" && categoryId === "top" && item === "jumpsuit" && aliasVariant === "black-2") continue;
			addPathCandidate(candidates, seen, item, aliasVariant);
		}
	}
	function addMappedItemCandidate(candidates, seen, viewId, gender, categoryId, item, variant) {
		const alias = resolveAliasValue(itemAliases[isOverworldView(viewId) ? "overworld" : viewId]?.[categoryId]?.[item], gender);
		if (alias) addPathCandidate(candidates, seen, alias, variant);
	}
	function addSpecialPathCandidates(candidates, seen, viewId, categoryId, item, variant) {
		if (categoryId === "hat" && item === "base") {
			if (isOverworldView(viewId)) addPathCandidate(candidates, seen, overworldHatBaseAliases[variant], "default");
			else if (viewId === "back") addPathCandidate(candidates, seen, "base", backHatBaseVariantAliases[variant] ?? variant);
		}
		if (categoryId === "hat" && item === "youngster-hat") {
			if (isOverworldView(viewId) && variant === "youngster-cap-bee") addPathCandidate(candidates, seen, item, "yellow");
			if (viewId === "back" && (variant === "yellow" || variant === "youngster-cap-bee")) addPathCandidate(candidates, seen, item, "copy");
		}
	}
	function buildPathCandidates(viewId, categoryId, selection, gender) {
		const candidates = [];
		const seen = /* @__PURE__ */ new Set();
		const backHairAssetItem = viewId === "back" && gender === "male" && categoryId === "hair" ? selection.item === "hair-2" ? "hair-4" : selection.item === "hair-4" ? "hair-2" : "" : "";
		if (backHairAssetItem) {
			addPreferredVariantCandidates(candidates, seen, viewId, categoryId, backHairAssetItem, selection.variant);
			addPathCandidate(candidates, seen, backHairAssetItem, selection.variant);
		}
		addPreferredVariantCandidates(candidates, seen, viewId, categoryId, selection.item, selection.variant);
		addPathCandidate(candidates, seen, selection.item, selection.variant);
		addMappedItemCandidate(candidates, seen, viewId, gender, categoryId, selection.item, selection.variant);
		addSpecialPathCandidates(candidates, seen, viewId, categoryId, selection.item, selection.variant);
		for (const candidate of [...candidates]) addVariantAliasCandidates(candidates, seen, viewId, categoryId, candidate.item, candidate.variant);
		return candidates;
	}
	function resolvePathForGender(manifest, viewId, gender, categoryId, selection) {
		if (!selection) return "";
		const candidates = buildPathCandidates(viewId, categoryId, selection, gender);
		for (const candidate of candidates) {
			const pathMap = getPathMap(manifest, viewId, gender, categoryId, candidate.item);
			if (pathMap?.[candidate.variant]) return pathMap[candidate.variant];
		}
		for (const candidate of candidates) {
			const pathMap = getPathMap(manifest, viewId, gender, categoryId, candidate.item);
			if (pathMap?.default) return pathMap.default;
		}
		for (const candidate of candidates) {
			const pathMap = getPathMap(manifest, viewId, gender, categoryId, candidate.item);
			const values = pathMap ? Object.values(pathMap) : [];
			const fallback = values.length === 1 ? values[0] : "";
			if (fallback) return fallback;
		}
		return "";
	}
	async function loadImage(path) {
		const source = getAvatarAssetUrl(path);
		if (!source) return null;
		const cachedImage = imageCache.get(source);
		if (cachedImage) return cachedImage;
		const promise = new Promise((resolve, reject) => {
			const image = new Image();
			image.decoding = "async";
			image.onload = () => resolve(image);
			image.onerror = () => reject(/* @__PURE__ */ new Error(`Não foi possível carregar ${path}.`));
			image.src = source;
		});
		imageCache.set(source, promise);
		return promise;
	}
	async function loadSceneBackground(backgroundId) {
		const background = avatarSceneBackgrounds.find((candidate) => candidate.id === backgroundId) ?? avatarSceneBackgrounds[0];
		if (!background) return null;
		try {
			return await loadImage(background.src);
		} catch {
			return null;
		}
	}
	function createAvatarCanvas(width, height) {
		const canvas = document.createElement("canvas");
		setCanvasSize(canvas, width, height);
		return canvas;
	}
	function setCanvasSize(canvas, width, height) {
		canvas.width = width;
		canvas.height = height;
		const context = canvas.getContext("2d");
		if (!context) throw new Error("Não foi possível preparar o canvas do avatar.");
		context.imageSmoothingEnabled = false;
		context.clearRect(0, 0, width, height);
		return context;
	}
	async function drawViewToContext(manifest, config, viewId, context) {
		const view = manifest.views[viewId];
		if (!context || !view) return;
		for (const categoryId of view.layers) {
			const selection = config.selections[categoryId];
			const path = resolvePathForGender(manifest, viewId, config.gender, categoryId, selection);
			if (!path) continue;
			const image = await loadImage(path);
			if (image) context.drawImage(image, 0, 0);
		}
	}
	function renderIconCanvas(frontCanvas, gender) {
		const canvas = createAvatarCanvas(128, 128);
		const context = canvas.getContext("2d");
		const crop = iconCrops[gender];
		if (!context) throw new Error("Não foi possível preparar o icon do avatar.");
		context.drawImage(frontCanvas, crop.x, crop.y, crop.width, crop.height, 0, 0, canvas.width, canvas.height);
		return canvas;
	}
	function renderIconSceneCanvas(iconCanvas, sceneBackground, gender) {
		const canvas = createAvatarCanvas(128, 128);
		const context = canvas.getContext("2d");
		const offset = iconSceneOffsets[gender];
		if (!context) throw new Error("Não foi possível preparar o icon do avatar.");
		paintSceneBackground(context, sceneBackground, canvas.width, canvas.height);
		context.drawImage(iconCanvas, offset.x, offset.y);
		return canvas;
	}
	function paintSceneBackground(context, sceneBackground, width, height) {
		if (!sceneBackground) {
			drawCheckerBackground(context, 0, 0, width, height);
			return;
		}
		const scale = Math.max(width / sceneBackground.width, height / sceneBackground.height);
		const sourceWidth = width / scale;
		const sourceHeight = height / scale;
		const sourceX = Math.max(0, (sceneBackground.width - sourceWidth) / 2);
		const sourceY = Math.max(0, sceneBackground.height - sourceHeight);
		context.drawImage(sceneBackground, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, width, height);
	}
	function drawCheckerBackground(context, x, y, width, height) {
		context.fillStyle = "#f7dfb8";
		context.fillRect(x, y, width, height);
		context.globalAlpha = .45;
		context.fillStyle = "#ffffff";
		for (let top = 0; top < height; top += 28) for (let left = top / 28 % 2 ? 14 : 0; left < width; left += 28) context.fillRect(x + left, y + top, 14, 14);
		context.globalAlpha = 1;
	}
	function drawShadow(context, x, y, radiusX, radiusY) {
		context.save();
		context.globalAlpha = .16;
		context.fillStyle = "#51311d";
		context.beginPath();
		context.ellipse(x, y, radiusX, radiusY, 0, 0, Math.PI * 2);
		context.fill();
		context.restore();
	}
	function getAnimationFrame(viewId, time) {
		const speed = {
			bike: 140,
			run: 120,
			walk: 220
		}[viewId];
		return Math.floor(time / speed) % 4;
	}
	//#endregion
	//#region artifacts/avatar-standalone/app.entry.js
	const STORAGE_KEY = "pokemon-pixel-avatar-config-v2";
	const uiIconBasePath = "./ui-icons";
	const categoryIconById = {
		body: `${uiIconBasePath}/part-body.png`,
		bottom: `${uiIconBasePath}/part-bottom.png`,
		top: `${uiIconBasePath}/part-top.png`,
		hair: `${uiIconBasePath}/part-hair.png`,
		hat: `${uiIconBasePath}/part-hat.png`,
		carry: `${uiIconBasePath}/part-carry.png`
	};
	const viewIconById = {
		front: `${uiIconBasePath}/view-front.png`,
		icon: `${uiIconBasePath}/view-icon.png`,
		back: `${uiIconBasePath}/view-back.png`,
		walk: `${uiIconBasePath}/view-walk.png`,
		run: `${uiIconBasePath}/view-run.png`,
		bike: `${uiIconBasePath}/view-bike.png`
	};
	const elements = {
		activeCategoryCount: document.querySelector("#active-category-count"),
		activeCategoryName: document.querySelector("#active-category-name"),
		activeItemName: document.querySelector("#active-item-name"),
		app: document.querySelector("#creator-app"),
		activeViewIcon: document.querySelector("#active-view-icon"),
		activeViewLabel: document.querySelector("#active-view-label"),
		backgroundGrid: document.querySelector("#background-grid"),
		backgroundPanel: document.querySelector("#background-panel"),
		backgroundToggle: document.querySelector("#background-toggle"),
		categoryTabs: document.querySelector("#category-tabs"),
		downloadButton: document.querySelector("#download-button"),
		exportActions: document.querySelector("#export-actions"),
		genderRow: document.querySelector("#gender-row"),
		itemGrid: document.querySelector("#item-grid"),
		partsPanel: document.querySelector("#parts-panel"),
		partsToggle: document.querySelector("#parts-toggle"),
		previewCanvas: document.querySelector("#preview-canvas"),
		previewViewName: document.querySelector("#preview-view-name"),
		previewToggle: document.querySelector("#preview-toggle"),
		previewTools: document.querySelector("#preview-tools"),
		randomizeButton: document.querySelector("#randomize-button"),
		renderingBadge: document.querySelector("#rendering-badge"),
		resetButton: document.querySelector("#reset-button"),
		saveButton: document.querySelector("#save-button"),
		status: document.querySelector("#creator-status"),
		variantGrid: document.querySelector("#variant-grid"),
		variantSection: document.querySelector("#variant-section"),
		viewTabs: document.querySelector("#view-tabs")
	};
	const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
	let manifest = null;
	let draft = cloneMemberAvatarConfig(defaultMemberAvatarConfig);
	let savedDraft = cloneMemberAvatarConfig(defaultMemberAvatarConfig);
	let renderedAvatar = null;
	let activeView = "front";
	let activeCategory = "body";
	let renderSequence = 0;
	let previewFrameRequest = 0;
	setAvatarManifest(manifest_default);
	function createButton(className, label, onClick) {
		const button = document.createElement("button");
		button.type = "button";
		button.className = className;
		button.addEventListener("click", onClick);
		if (label) button.textContent = label;
		return button;
	}
	function createIcon(source, className = "") {
		const image = document.createElement("img");
		image.src = source;
		image.alt = "";
		image.className = className;
		image.setAttribute("aria-hidden", "true");
		return image;
	}
	function setStatus(message) {
		elements.status.textContent = message;
	}
	function setRendering(isRendering) {
		elements.app.setAttribute("aria-busy", String(isRendering));
		elements.renderingBadge.hidden = !isRendering;
		elements.downloadButton.disabled = isRendering || !renderedAvatar;
		for (const button of elements.exportActions.querySelectorAll("button")) button.disabled = isRendering || !renderedAvatar;
	}
	function getSavedConfig() {
		try {
			const value = window.localStorage.getItem(STORAGE_KEY);
			return value ? JSON.parse(value) : null;
		} catch {
			return null;
		}
	}
	function saveConfig() {
		try {
			window.localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
			savedDraft = cloneMemberAvatarConfig(draft);
			setStatus("Avatar salvo neste navegador.");
		} catch {
			setStatus("O navegador não permitiu salvar o avatar localmente.");
		}
	}
	function sanitizeFilePart(value, fallback) {
		return String(value).trim().replace(/[\\/:*?"<>|]+/g, "-").replace(/\s+/g, "-").replace(/[.\s-]+$/g, "") || fallback;
	}
	function downloadCanvas(canvas, fileName) {
		const link = document.createElement("a");
		link.href = canvas.toDataURL("image/png");
		link.download = fileName;
		document.body.append(link);
		link.click();
		link.remove();
	}
	function updatePreviewToggle() {
		const option = avatarViewOptions.find((view) => view.value === activeView) ?? avatarViewOptions[0];
		elements.activeViewIcon.replaceChildren(createIcon(viewIconById[activeView]));
		elements.activeViewLabel.textContent = `Mostrar ${option.label}`;
		elements.previewViewName.textContent = option.label;
	}
	function renderViewTabs() {
		elements.viewTabs.replaceChildren();
		for (const view of avatarViewOptions) {
			const selected = activeView === view.value;
			const button = createButton(selected ? "is-selected" : "", "", () => {
				activeView = view.value;
				renderViewTabs();
				updatePreviewToggle();
				syncPreviewLoop();
			});
			const icon = document.createElement("span");
			const label = document.createElement("span");
			button.title = view.label;
			button.setAttribute("aria-label", `Mostrar ${view.label}`);
			button.setAttribute("aria-pressed", String(selected));
			icon.className = `avatar-view-icon avatar-view-icon-art-${view.value}`;
			icon.append(createIcon(viewIconById[view.value]));
			label.className = "visually-hidden";
			label.textContent = view.label;
			button.append(icon, label);
			elements.viewTabs.append(button);
		}
	}
	function renderBackgrounds() {
		elements.backgroundGrid.replaceChildren();
		for (const background of avatarSceneBackgrounds) {
			const selected = draft.background === background.id;
			const button = createButton(selected ? "is-selected" : "", "", () => {
				updateDraft({
					...draft,
					background: background.id
				});
			});
			const label = document.createElement("span");
			button.title = background.label;
			button.setAttribute("aria-label", background.label);
			button.setAttribute("aria-pressed", String(selected));
			label.textContent = background.label;
			button.append(createIcon(getAvatarAssetUrl(background.src)), label);
			elements.backgroundGrid.append(button);
		}
	}
	function renderGenderButtons() {
		elements.genderRow.replaceChildren();
		for (const gender of [{
			id: "male",
			label: "Masculino"
		}, {
			id: "female",
			label: "Feminino"
		}]) {
			const selected = draft.gender === gender.id;
			const button = createButton(selected ? "is-selected" : "", gender.label, () => {
				updateDraft({
					...draft,
					gender: gender.id
				});
			});
			button.setAttribute("aria-pressed", String(selected));
			elements.genderRow.append(button);
		}
	}
	function getCategories() {
		return manifest ? getVisibleAvatarCategories(manifest, draft.gender) : [];
	}
	function ensureActiveCategory() {
		const categories = getCategories();
		if (!categories.some((category) => category.id === activeCategory)) activeCategory = categories[0]?.id ?? "body";
		return categories;
	}
	function renderCategoryTabs() {
		const categories = ensureActiveCategory();
		elements.categoryTabs.replaceChildren();
		for (const category of categories) {
			const selected = activeCategory === category.id;
			const button = createButton(selected ? "is-selected" : "", "", () => {
				activeCategory = category.id;
				renderCategoryTabs();
				renderItemsAndVariants();
			});
			const label = document.createElement("span");
			button.title = category.label;
			button.setAttribute("aria-label", category.label);
			button.setAttribute("aria-pressed", String(selected));
			label.className = "visually-hidden";
			label.textContent = category.label;
			button.append(createIcon(categoryIconById[category.id], "avatar-category-tab-icon"), label);
			elements.categoryTabs.append(button);
		}
	}
	function renderItemsAndVariants() {
		elements.itemGrid.replaceChildren();
		elements.variantGrid.replaceChildren();
		if (!manifest) return;
		const category = ensureActiveCategory().find((candidate) => candidate.id === activeCategory);
		if (!category) return;
		const items = getAvatarItemsForCategory(manifest, category, draft.gender);
		const selection = draft.selections[category.id];
		const selectedItemId = getAvatarSelectionItemId(category.id, selection);
		const selectedItem = items.find((item) => item.id === selectedItemId);
		elements.activeCategoryName.textContent = category.label;
		elements.activeCategoryCount.textContent = `${items.length} ${items.length === 1 ? "opção" : "opções"}`;
		elements.activeItemName.textContent = selectedItem ? `Selecionado: ${selectedItem.name}` : "Nenhum selecionado";
		elements.itemGrid.setAttribute("aria-label", `Opções de ${category.label}`);
		if (category.optional) {
			const noneButton = createButton(!selection ? "is-selected avatar-none-card" : "avatar-none-card", "Nenhum", () => {
				updateDraft({
					...draft,
					selections: {
						...draft.selections,
						[category.id]: null
					}
				});
			});
			noneButton.setAttribute("aria-pressed", String(!selection));
			elements.itemGrid.append(noneButton);
		}
		for (const item of items) {
			const selected = selectedItemId === item.id;
			const button = createButton(selected ? "is-selected" : "", "", () => selectItem(category, items, item.id));
			const image = createIcon(getAvatarPreviewAssetUrl(manifest, draft, category.id, item.id));
			const label = document.createElement("span");
			button.setAttribute("aria-pressed", String(selected));
			label.textContent = item.name;
			button.append(image, label);
			elements.itemGrid.append(button);
		}
		if (!selection) {
			elements.variantGrid.hidden = true;
			elements.variantSection.hidden = true;
			return;
		}
		const variants = selectedItem ? getAvatarVariantsForItem(manifest, category, selectedItem, draft.gender) : [];
		const showVariants = variants.length > 0 && !(category.id === "hat" && selection.item === "base");
		elements.variantGrid.hidden = !showVariants;
		elements.variantSection.hidden = !showVariants;
		if (!showVariants) return;
		for (const variant of variants) {
			const selected = selection.variant === variant.id;
			const button = createButton(selected ? "is-selected" : "", "", () => {
				updateDraft({
					...draft,
					selections: {
						...draft.selections,
						[category.id]: getAvatarSelectionFromItemId(category.id, selectedItem.id, variant.id)
					}
				});
			});
			const swatch = document.createElement("span");
			const label = document.createElement("em");
			button.title = variant.name;
			button.setAttribute("aria-label", variant.name);
			button.setAttribute("aria-pressed", String(selected));
			swatch.style.background = getAvatarVariantColor(variant.id);
			label.textContent = variant.name;
			button.append(swatch, label);
			elements.variantGrid.append(button);
		}
	}
	function selectItem(category, items, itemId) {
		const item = items.find((candidate) => candidate.id === itemId);
		if (!item || !manifest) return;
		const variants = getAvatarVariantsForItem(manifest, category, item, draft.gender);
		const currentSelection = draft.selections[category.id];
		const nextVariant = (currentSelection ? variants.find((variant) => variant.id === currentSelection.variant)?.id : "") || variants[0]?.id || "default";
		updateDraft({
			...draft,
			selections: {
				...draft.selections,
				[category.id]: getAvatarSelectionFromItemId(category.id, item.id, nextVariant)
			}
		});
	}
	function updateDraft(nextDraft) {
		draft = normalizeMemberAvatarConfig(manifest, nextDraft);
		renderEditor();
		renderAvatar();
	}
	function renderEditor() {
		renderBackgrounds();
		renderGenderButtons();
		renderCategoryTabs();
		renderItemsAndVariants();
	}
	async function renderAvatar() {
		const sequence = ++renderSequence;
		setRendering(true);
		setStatus("Montando avatar...");
		try {
			const result = await renderMemberAvatar(draft);
			if (sequence !== renderSequence) return;
			renderedAvatar = result;
			draft = cloneMemberAvatarConfig(result.config);
			setStatus("Pronto para personalizar.");
			syncPreviewLoop();
		} catch (error) {
			if (sequence === renderSequence) setStatus(error instanceof Error ? error.message : "Não foi possível montar o avatar.");
		} finally {
			if (sequence === renderSequence) setRendering(false);
		}
	}
	function drawPreview(time = performance.now()) {
		if (renderedAvatar) drawAvatarPreview(elements.previewCanvas, renderedAvatar, activeView, time);
	}
	function syncPreviewLoop() {
		if (previewFrameRequest) {
			window.cancelAnimationFrame(previewFrameRequest);
			previewFrameRequest = 0;
		}
		drawPreview(reducedMotion.matches ? 0 : performance.now());
		if (!renderedAvatar || !isAvatarSheetView(activeView) || reducedMotion.matches) return;
		const animate = (time) => {
			drawPreview(time);
			previewFrameRequest = window.requestAnimationFrame(animate);
		};
		previewFrameRequest = window.requestAnimationFrame(animate);
	}
	function randomizeAvatar() {
		if (!manifest) return;
		const selections = {};
		for (const category of getVisibleAvatarCategories(manifest, draft.gender)) {
			const items = getAvatarItemsForCategory(manifest, category, draft.gender);
			if (category.optional && Math.random() < .2) {
				selections[category.id] = null;
				continue;
			}
			const item = items[Math.floor(Math.random() * items.length)];
			const variants = item ? getAvatarVariantsForItem(manifest, category, item, draft.gender) : [];
			const variant = variants[Math.floor(Math.random() * variants.length)];
			selections[category.id] = item && variant ? getAvatarSelectionFromItemId(category.id, item.id, variant.id) : null;
		}
		updateDraft({
			...draft,
			selections
		});
		setStatus("Novo visual aleatório criado.");
	}
	function resetAvatar() {
		draft = normalizeMemberAvatarConfig(manifest, savedDraft);
		activeCategory = "body";
		renderEditor();
		renderAvatar();
		setStatus("Última versão salva restaurada.");
	}
	function downloadCurrentPreview() {
		if (!renderedAvatar) return;
		const gender = sanitizeFilePart(draft.gender, "trainer");
		if (activeView === "icon") {
			downloadCanvas(renderedAvatar.canvases.iconScene, `pokemon-avatar-icon-${gender}.png`);
			return;
		}
		const canvas = document.createElement("canvas");
		canvas.width = 360;
		canvas.height = 300;
		drawAvatarPreview(canvas, renderedAvatar, activeView, reducedMotion.matches ? 0 : performance.now());
		downloadCanvas(canvas, `pokemon-avatar-${activeView}-${gender}.png`);
	}
	function exportSprite(exportId) {
		if (!renderedAvatar) return;
		const canvas = {
			front: renderedAvatar.canvases.front,
			icon: renderedAvatar.canvases.iconScene,
			back: renderedAvatar.canvases.back,
			walk: renderedAvatar.canvases.walk,
			run: renderedAvatar.canvases.run,
			bike: renderedAvatar.canvases.bike
		}[exportId];
		if (canvas) downloadCanvas(canvas, `pokemon-avatar-${exportId}-${draft.gender}.png`);
	}
	function togglePanel(button, panel) {
		const willOpen = button.getAttribute("aria-expanded") !== "true";
		button.setAttribute("aria-expanded", String(willOpen));
		panel.hidden = !willOpen;
	}
	function bindEvents() {
		elements.previewToggle.addEventListener("click", () => {
			const willOpen = elements.previewToggle.getAttribute("aria-expanded") !== "true";
			elements.previewToggle.setAttribute("aria-expanded", String(willOpen));
			elements.previewTools.classList.toggle("is-open", willOpen);
		});
		elements.backgroundToggle.addEventListener("click", () => togglePanel(elements.backgroundToggle, elements.backgroundPanel));
		elements.partsToggle.addEventListener("click", () => togglePanel(elements.partsToggle, elements.partsPanel));
		elements.randomizeButton.addEventListener("click", randomizeAvatar);
		elements.resetButton.addEventListener("click", resetAvatar);
		elements.saveButton.addEventListener("click", saveConfig);
		elements.downloadButton.addEventListener("click", downloadCurrentPreview);
		elements.exportActions.addEventListener("click", (event) => {
			const button = event.target.closest("[data-export]");
			if (button) exportSprite(button.dataset.export);
		});
		reducedMotion.addEventListener("change", syncPreviewLoop);
	}
	async function init() {
		bindEvents();
		manifest = await loadAvatarManifest();
		const storedConfig = getSavedConfig();
		draft = normalizeMemberAvatarConfig(manifest, storedConfig ?? defaultMemberAvatarConfig);
		savedDraft = cloneMemberAvatarConfig(draft);
		activeCategory = getVisibleAvatarCategories(manifest, draft.gender)[0]?.id ?? "body";
		renderViewTabs();
		updatePreviewToggle();
		renderEditor();
		await renderAvatar();
	}
	init().catch((error) => {
		console.error(error);
		setRendering(false);
		setStatus("Não foi possível iniciar o criador de avatar.");
	});
	//#endregion
})();
