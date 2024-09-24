export const questions = [
	{
	  id: "Zone",
	  text: "Zone de l'enquête",
	  options: [
		{ id: 1, text: "Souterrain", next: "Qco0" },
		{ id: 2, text: "Mezzanine", next: "Qco0" },
	  ],
	},
	{
	  id: "Qco0",
	  text: "Allez-vous monter dans un train?",
	  options: [
		{ id: 1, text: "OUI", next: "QNV1" },
		{ id: 2, text: "NON", next: "QP1" },
	  ],
	},
	{
	  id: "QNV1",
	  text: "Quelle est la raison de votre présence en gare ?",
	  options: [
		{ id: 1, text: "Vous venez attendre quelqu'un", next: "end" },
		{ id: 2, text: "Vous venez accompagner quelqu'un", next: "end" },
		{ id: 3, text: "Renseignement / achat ou retrait de titre de transport", next: "end" },
		{ id: 4, text: "Vous travaillez dans la gare", next: "end" },
		{ id: 5, text: "Vous traversez la gare", next: "end" },
		{ id: 6, text: "Vous venez prendre un bus ou un car", next: "end" },
		{ id: 7, text: "Vous venez prendre un tram", next: "end" },
		{ id: 8, text: "Autre -> précisez :", next: "QNV1_precision", },
	  ],
	},
	{
		id: "QNV1_precision",
		text: "Veuillez préciser la raison de votre présence en gare:",
		freeText: true,
		next: "end",
	},
	{
	  id: "QP1",
	  text: "Quel type de train allez-vous prendre ?",
	  options: [
		{ id: 1, text: "TER", next: "end" },
		{ id: 2, text: "Intercités", next: "end" },
		{ id: 3, text: "TGV", next: "end" },
		{ id: 4, text: "OUIGO", next: "end" },
		{ id: 5, text: "Tram-train (destinations : Clisson, Nort-sur-Erdre, Châteaubriant)", next: "end" },
		{ id: 6, text: "Je ne sais pas", next: "end" },
	  ],
	},
  ];