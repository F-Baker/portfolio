export default {
    fetchProjects: () => new Promise((resolve, reject) => resolve([
        {
            id: "spring",
            name: "Spring ",
            subtitle: "Example projects using the Spring suite of tools",
            description: "Hey ho, the front end is moving faster than the back end!  This is a placeholder for spring projects that will be replaced one I've finished a few more non-trivial, working, reproduce-able POCs. Ask me something about Java or Spring!",
            links: [{url: "", name: "Open Project", icon: "fab fa-github"}],
            secondaryLinks: [{
                // url: "",
                // name: "This is where an excellent customer review will go",
                // icon: "fas fa-external-link-alt"
            }],
            labels: ["App", "Spring", ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/spring-java_1024_500.png?alt=media&token=64148998-8f3a-45dc-9ff1-fc44026a9733",
            img: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/spring-java_524_256.png?alt=media&token=e81af7ab-4c49-4da5-82d3-d7bcdf978cfb",
            highlight: false
        },
        {
            id: "react",
            name: "React",
            subtitle: "Personal website",
            description: "I found this while looking for React SPA projects to wrangle and host with GitHub pages.  Pierfrancesco Soffritti, the original author, was kind enough to post his source code to GitHub under the MIT license.  I retyped the entire project from scratch and learned a ton about OOP with JS and abstraction with redux. I've also migrated to NPM and back to yarn, GitHub pages to Firebase, and GitHub repo to GitLab.  Take a look at my project board if you want to see the where I'm at with development.",
            links: [
                {url: "https://gitlab.com/F-Baker/portfolio", name: "Open project", icon: "fab fa-gitlab"},
            ],
            secondaryLinks: [
                {
                    url: "https://github.com/PierfrancescoSoffritti/pierfrancescosoffritti.com",
                    name: "Original source code",
                    icon: "fab fa-github"
                }
            ],
            labels: ["react", "javascript"],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/react-javascript_524_256.png?alt=media&token=216ea4fc-f15d-4cbc-a159-722734f3a658",
            img: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/react-javascript_1024_500.png?alt=media&token=16bd6cdb-843d-4977-bf6a-a9d754aeaba2",
            highlight: true
        },
        {
            id: "jenkins",
            name: "Jenkins",
            subtitle: "Automated deployments via Jenkins",
            description: "I initially intended to use jenkins running via a local container to automate this site's deployment but found that it means exposing a local port to the internet.  I'm not thrilled at that thought and decided to make this an opportunity to learn CI with GitLab instead.  So for the time being, this placeholder is not being actively developed.",
            links: [{url: "", name: "", icon: ""}],
            secondaryLinks: [{
                url: "",
                name: "",
                icon: ""
            }],
            labels: ["Jenkins"],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/jenkins-ci_512.png?alt=media&token=52257c71-fc2b-40a8-84b2-208f15bacfb1",
            img: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/jenkins_1024_500.png?alt=media&token=55e3b2dc-d854-4248-9aec-f01b1500096a",
            highlight: false
        },
        {
            id: "dockermakemern",
            name: "Docker-Make-Mern",
            subtitle: "Scipted container creation",
            description: "This folder contains a make script to deploy an existing application to a container.",
            links: [{url: "https://github.com/F-Baker/docker-make-mern", name: "Repo", icon: "fab fa-github"}],
            secondaryLinks: [{
                url: "",
                name: "",
                icon: ""
            }],
            labels: ["mern", "docker"],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/mern_1024_500.png?alt=media&token=2eb215c6-8afc-48b4-bcc2-d3618c9112a3",
            img: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/mern_1024_500.png?alt=media&token=2eb215c6-8afc-48b4-bcc2-d3618c9112a3",
            highlight: false
        },
        {
            id: "trello",
            name: "Trello",
            subtitle: "This site's board",
            description: "Here's this site's kanban board.  I've implemented an abbreviated technique to make trello work",
            links: [{url: "https://trello.com/b/KEZWJEEz/portfolio", name: "Board", icon: "fab fa-trello"}],
            secondaryLinks: [{
                url: "",
                name: "",
                icon: ""
            }],
            labels: ["trello", "kanban"],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/trello_524_256.png?alt=media&token=f9f4f339-48aa-4603-91d8-c957abb3c8e3",
            img: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/trello_1024_500.png?alt=media&token=bca17fad-074d-41f2-a28c-15c127e8b066",
            highlight: false
        },
    ]))
}
