export async function fetcher(url) {
    const resultado = await fetch(url).then(function (response) {
        return response.json();
    }).catch(function (err) {
        console.warn('No se pudo obtener autos en la consulta');
    });
} 