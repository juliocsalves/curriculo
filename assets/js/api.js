async function fetchProfileData() {        
    const url = '/curriculo/data/profile.json';
    console.log(url);
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

