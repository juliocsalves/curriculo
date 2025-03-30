// async function fetchProfileData() {
//     // const url = '/data/profile.json';    
//     const url = 'https://raw.githubusercontent.com/juliocsalves/curriculo/main/data/profile.json';    
//     try {
//         const response = await fetch(url);                
//         if (!response.ok) {
//             throw new Error('Erro ao carregar o perfil: ' + response.status);
//         }        
//         const profileData = await response.json();
//         return profileData;
//     } catch (error) {
//         console.error('Erro ao buscar dados:', error);
//     }
// }

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/juliocsalves/curriculo/main/data/profile.json';

    try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            cache: 'no-store' // evita pegar cache antigo
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status} ${response.statusText}`);
        }

        const profileData = await response.json();

        if (!profileData || typeof profileData !== 'object') {
            throw new Error('Resposta inválida: JSON vazio ou malformado');
        }

        return profileData;

    } catch (error) {
        console.error('Erro ao buscar dados do perfil:', error.message || error);
        return null; // ou lançar o erro se quiser tratar fora
    }
}
