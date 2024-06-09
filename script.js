function fetchGitHubProfile() {
    const username = document.getElementById('username').value;
    const url = `https://api.github.com/users/${username}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const profileDiv = document.getElementById('profile');
            profileDiv.innerHTML = `
                <p><strong>Username:</strong> ${data.login}</p>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Bio:</strong> ${data.bio}</p>
                <img src="${data.avatar_url}" alt="Avatar" width="100">
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
