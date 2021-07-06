export default {
    fetchProjects: () => new Promise((resolve, reject) => resolve([
        {
            id: "spring",
            name: "Montblanc.edu ",
            subtitle: "Role-based authentication with JWT",
            description: "This is a project I created during my last internship.  It uses JWT to secure data passed to the backend",
            links: [{url: "https://github.com/F-Baker/montblanc", name: "Open Project", icon: "fab fa-github"}],
            secondaryLinks: [{
                // url: "",
                // name: "This is where an excellent customer review will go",
                // icon: "fas fa-external-link-alt"
            }],
            labels: ["API", "Spring", ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/spring-java_1024_500.png?alt=media&token=64148998-8f3a-45dc-9ff1-fc44026a9733",
            img: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/spring-java_524_256.png?alt=media&token=e81af7ab-4c49-4da5-82d3-d7bcdf978cfb",
            highlight: true
        },
        {
            id: "react",
            name: "React",
            subtitle: "Personal website",
            description: "This site adapted from an example I found via github.  Now that I have more training in React it will be replaced.",
            links: [
                {url: "https://gitlab.com/F-Baker/portfolio", name: "Open project", icon: "fab fa-gitlab"},
            ],
            secondaryLinks: [{
                    // url: "https://github.com/PierfrancescoSoffritti/pierfrancescosoffritti.com",
                    // name: "Original source code",
                    // icon: "fab fa-github"
                }],
            labels: ["react", "javascript"],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/react-javascript_524_256.png?alt=media&token=216ea4fc-f15d-4cbc-a159-722734f3a658",
            img: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/react-javascript_1024_500.png?alt=media&token=16bd6cdb-843d-4977-bf6a-a9d754aeaba2",
            highlight: true
        },
    ]))
}
