const pokemon = [
    {
        name: "Chespin",
        sprite: "images/chespin.jpg",
        classification: "Spiky Nut",
        type: "Grass",
        pokedex_entry: "A thick shell of wood and quills covers its head and back, not letting a direct hit from a truck even faze it. The quills on its head are usually soft, becoming so hard and sharp when flexed that they can pierce rock.",
        strengths: ["Ground", "Rock", "Water"],
        weaknesses: ["Bug", "Fire", "Flying", "Ice", "Poison"],
        stats: "images/chespinStats.jpg",
        evolution_line: "images/chespinEvoLine.jpg",
    },
    {
        name: "Fennekin",
        sprite: "images/fennekin.jpg",
        classification: "Fire Fox",
        type: "Fire",
        pokedex_entry: "As it walks, it munches on a twig in place of a snack, filling it with energy. It intimidates opponents by puffing hot air out of its roomy ears that make the air hotter than 390 degrees Fahrenheit.",
        strengths: ["Bug", "Grass", "Ice", "Steel"],
        weaknesses: ["Ground", "Rock", "Water"],
        stats: "images/fennekinStats.jpg",
        evolution_line: "images/fennekinEvoLine.jpg",
    },
    {
        name: "Froakie",
        sprite: "images/froakie.jpg",
        classification: "Bubble Frog",
        type: "Water",
        pokedex_entry: "It secretes flexible yet delicate bubbles from its chest and back that reduce the damage it would otherwise take when attacked. Despite its happy-go-lucky air, it keeps a watchful eye on its surroundings.",
        strengths: ["Fire", "Ground", "Rock"],
        weaknesses: ["Electric", "Grass"],
        stats: "images/froakieStats.jpg",
        evolution_line: "images/froakieEvoLine.jpg",
    }
]

function pokedexInfoTemplate(pokemon) {
	return `<div class="pokeInfo">
            <div class="spriteImage">
                <img src="${pokemon.sprite}">
            </div>

            <div class="pokedex">
                <h1>${pokemon.name} - ${pokemon.classification} Pokémon - ${pokemon.type}</h1>
                <p class="pokedexDescription">
                    ${pokemon.pokedex_entry}
                </p>

                <div class="sAndw">
                    <p class="weaknesses">
                        Weak Against:<br>
                        ${weaknessesTemplate(pokemon.weaknesses)}
                    </p>

                    <p class="strengths">
                        Strong Against:<br>
                        ${strengthsTemplate(pokemon.strengths)}
                    </p>
                </div>

            </div>
        </div>
        <div class="pokeInfoP2">
            <img src="${pokemon.stats}" class="pokeStats" alt="snivystats">
            <div class="evoLineNav">
                <button class="nextButton" aria-label="Next">&#9654;</button>
                <img src="${pokemon.evolution_line}" class="evoLine" alt="snivyevo">
                <button class="previousButton" aria-label="Previous">&#9664;</button>
            </div>
        </div>`;
}

function weaknessesTemplate(weaknesses) {
    return weaknesses.join(" | ");
}

function strengthsTemplate(strengths) {
    return strengths.join(" | ");
}

let pokeInfoIndex = 0

function renderPokemonInfo(pokemonInfo) {
	const pokeInfoContainer = document.querySelector("main")
	pokeInfoContainer.innerHTML = ''
    pokemonInfo.forEach(r => pokeInfoContainer.innerHTML += pokedexInfoTemplate(r));
    const nextButton = document.querySelector('.nextButton');
    const previousButton = document.querySelector('.previousButton');
    nextButton.addEventListener('click', nextPokeInfo);
    previousButton.addEventListener('click', previousPokeInfo)
}

function pokeInfoRenderStabilizer() {
    renderPokemonInfo([pokemon[pokeInfoIndex]])
}

function nextPokeInfo() {
    pokeInfoIndex = (pokeInfoIndex + 1) % pokemon.length;
    pokeInfoRenderStabilizer();
}

function previousPokeInfo() {
    pokeInfoIndex = (pokeInfoIndex - 1 + pokemon.length) % pokemon.length;
    pokeInfoRenderStabilizer();
}

function main() {
    pokeInfoRenderStabilizer();
}

main();