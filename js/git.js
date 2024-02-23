import { Octokit, App } from "https://esm.sh/octokit?dts";

const octokit = new Octokit({
    auth: "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"
  })
  
const result = await octokit.request('GET /user/repos', {
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
    }
})

const repoNames = [
    'bajeti', 
    '2023T2_TeamProject_Malware', 
    'contoso-real-estate',
    'dynamic_pcap_analyzer',
    'fypSite-ecommerce',
    'anuga_scraper',
    'crypto-portfolio-management',
    'whatsapp-export',
    'WhatsAppWeave',
    'thaka-secrets'
]

async function fetchRepos() {
    try{

        result.data.forEach(repo => {
            const repoCard = `
            <div class="card card-cascade narrower col-md-3 text-center col-padding animate-box">
                <!-- Card image -->
                <div class="view view-cascade overlay">
                    <img class="card-img-top" src="${repo.owner.avatar_url}" alt="${repo.owner.login}'s avatar">
                    <a href="${repo.html_url}">
                        <div class="mask rgba-white-slight"></div>
                    </a>
                </div>

                <!-- Card content -->
                <div class="card-body card-body-cascade">
                    <!-- Label -->
                    <h5 class="pink-text pb-2 pt-1"><i class="fab fa-github"></i> ${repo.language}</h5>
                    <!-- Title -->
                    <h4 class="font-weight-bold card-title">${repo.name}</h4>
                    <!-- Text -->
                    <p class="card-text">${repo.description}</p>
                    <!-- Button -->
                    <a href="${repo.html_url}" class="btn btn-unique">View Repo</a>
                </div>

                <!-- Card footer -->
                <div class="card-footer text-muted text-center">
                    Last updated: ${new Date(repo.updated_at).toDateString()}
                </div>

            </div>
            `;

            document.getElementById("git-repos").insertAdjacentHTML('beforeend', repoCard);
        });
    } catch (error) {
        console.error('Error fetching repos:', error);
    }
}

fetchRepos();

// if (result.status == 200) {
//     for (let repo in result.data) {
//         repo = result.data[repo]
//         console.log(repo.name, repo.archive_url, repo.updated_at, repo.description, repo.owner.avatar_url)
//         if (repo.owner.login == "Kagirim") {
//             const repoCard = `
//                 <div class="card text-center">
//                     <div class="card-header">${repo.name}</div>
//                     <div class="card-body">
//                         <p class="card-text">${repo.description}</p>
//                         <a href="${repo.html_url}" class="btn btn-primary">View Repo</a>
//                     </div>
//                     <div class="card-footer text-muted">Last updated: ${new Date(repo.updated_at).toDateString()}</div>
//                 </div>
//             `
//             document.getElementById("git-repos").insertAdjacentHTML(
//                 'beforeend', 
//                 repoCard
//             );
            
//         }
//     }
// }