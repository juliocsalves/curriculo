// Função genérica para atualizar um elemento
function updateElement(elementId, value, isHtml = false) {
    const element = document.getElementById(elementId);
    if (element) {
        if (isHtml) {
            element.innerHTML = value;
        } else {
            element.innerText = value;
        }
    }
}

function updateProfileInfo(profileData) {
    updateElement('profile.photo', profileData.photo);
    const photo = document.getElementById('profile.photo');
    if (photo) {
        photo.alt = profileData.name;
    }

    updateElement('profile.name', profileData.name);
    updateElement('profile.job', profileData.job);
    updateElement('profile.location', profileData.location);
    updateElement('profile.about', profileData.about, true);
    updateElement('profile.pcd', profileData.pcd);
    updateElement('profile.phone', profileData.phone);
    updateElement('profile.site', profileData.site);

    const phone = document.getElementById('profile.phone');
    if (phone) {
        phone.href = `tel:${profileData.phone}`;
    }

    updateElement('profile.email', profileData.email);
    const email = document.getElementById('profile.email');
    if (email) {
        email.href = `mailto:${profileData.email}`;
    }

    // Atualiza o texto para PCD
    updateElement('profile.pcd', profileData.pcd);
}

function updateSkills(profileData) {
    const updateSkillsList = (elementId, skills, isHardSkills = true) => {
        const skillsElement = document.getElementById(elementId);
        if (skillsElement) {
            const skillsHtml = skills.map(skill => {
                if (isHardSkills) {
                    return `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`;
                } else {
                    return `<li>${skill}</li>`;
                }
            }).join('');
            skillsElement.innerHTML = skillsHtml;
        }
    };

    updateSkillsList('profile.skills.hardSkills', profileData.skills.hardSkills, true);
    updateSkillsList('profile.skills.softSkills', profileData.skills.softSkills, false);
}

function updateLanguages(profileData) {
    updateElement('profile.languages', profileData.languages.map(language => `<li>${language}</li>`).join(''), true);
}

function updatePortfolio(profileData) {
    const portfolioElement = document.getElementById('profile.portfolio');
    if (portfolioElement) {
        portfolioElement.innerHTML = profileData.portfolio.map(project => {
            return `
                <li>
                    <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>                
                    <a href="${project.url}" target="_blank">Clique aqui para visualizar o código do projeto projeto.</a>
                    <a href="${project.site}" target="_blank">Ver protótipo rodando. </a>
                </li>             
            `;
        }).join('');
    }
}

function updateProfessionalExperience(profileData) {
    const professionalExperienceElement = document.getElementById('profile.professionalExperience');
    if (professionalExperienceElement) {
        professionalExperienceElement.innerHTML = profileData.professionalExperience.map(experience => {
            return `
                <li>
                    <h3 class="title">${experience.name}</h3>
                    <p class="period">${experience.period}</p>
                    <p>${experience.description}</p>
                </li>
            `;
        }).join('');
    }
}

(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateProfessionalExperience(profileData);
})();

