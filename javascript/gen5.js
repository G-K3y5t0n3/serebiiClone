const pokemon = [
    {
        name: "Snivy",
        sprite: "images/snivy.jpg",
        classification: "Grass Snake",
        type: "Grass",
        pokedex_entry: "It is very intelligent and calm, using their vines more adeptly than its hands. They photosynthesize by bathing their tails in sunlight, which increases its movement speed. When they are not feeling well, their tails droop.",
        strengths: ["Ground", "Rock", "Water"],
        weaknesses: ["Bug", "Fire", "Flying", "Ice", "Poison"],
        stats: "images/snivyStats.jpg",
        evolution_line: "images/snivyEvoLine.jpg",
    },
    {
        name: "Tepig",
        sprite: "images/tepig.jpg",
        classification: "Fire Pig",
        type: "Fire",
        pokedex_entry: "It's more nimble than it looks, using its speed to confound its enemies. It rapidly launches fireballs from both nostrils. This Pokémon is also a ravenous glutton and it will use its excellent sense of smell to find food. It then cooks it to a crisp before eating.",
        strengths: ["Bug", "Grass", "Ice", "Steel"],
        weaknesses: ["Ground", "Rock", "Water"],
        stats: "images/tepigStats.jpg",
        evolution_line: "images/tepigEvoLine.jpg",
    },
    {
        name: "Oshawott",
        sprite: "images/oshawott.jpg",
        classification: "Sea Otter",
        type: "Water",
        pokedex_entry: "It wields the scalchop on its stomach like a knife, blocking the moves of its enemies before slashing back at them in swift retaliation. It's said that Oshawott learned to maintain its scalchop with riverbed stones by mimicking humans it saw using whetstones.",
        strengths: ["Fire", "Ground", "Rock"],
        weaknesses: ["Electric", "Grass"],
        stats: "images/oshawottStats.jpg",
        evolution_line: "images/oshawottEvoLine.jpg",
    }
]

function pokedexInfoTemplate(pokemon) {
	return `<div class="pokeInfo">
            <div class="spriteImage">
                <img src="${pokemon.sprite}" alt="snivy">
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
        <!---->
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
	// let html = ''
	// weaknesses.forEach(element => {
	// 	html += ` ${element} |`
	// });
	// return html;
    return weaknesses.join(" | ");
}

function strengthsTemplate(strengths) {
	// let html = ''
	// strengths.forEach(element => {
	// 	html += ` ${element} |`
	// });
	// return html;
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
    // alert('Button Works!')
    pokeInfoIndex = (pokeInfoIndex + 1) % pokemon.length;
    pokeInfoRenderStabilizer();
}

function previousPokeInfo() {
    // alert('Button Works!')
    pokeInfoIndex = (pokeInfoIndex - 1 + pokemon.length) % pokemon.length; // Loop backward
    pokeInfoRenderStabilizer();
}

function main() {
    pokeInfoRenderStabilizer();
}

main();