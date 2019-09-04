export let keyValue = 1000;

export function test() {
    console.log('tested');
    keyValue = 2000;
}

let ab = 'Some text';

// como alternativa ao metodo acima podemos importar da seguinte maneira

// export {keyValue, test}
export default ab; // este é o default generico do arquivo, quando formos fazer o import caso não tenhamos definido  qual import estamos fazendo
                        // então será este conteudo que será importado.