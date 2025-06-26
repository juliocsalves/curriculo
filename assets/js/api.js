async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/juliocsalves/curriculo/main/data/profile.json';
    // const url = '/data/profile.json';
    try {
        const response = await fetch(url);                
        if (!response.ok) {
            throw new Error('Erro ao carregar o perfil: ' + response.status);
        }        
        const profileData = await response.json();
        return profileData;
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

